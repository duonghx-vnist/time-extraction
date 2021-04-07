import { TIME_UNIT_DICTIONARY } from "../constants";
import { ParsingContext } from "../../../chrono";
import { ParsingComponents } from "../../../results";
import dayjs from "dayjs";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import { matchAnyPattern } from "../../../utils/pattern";

const PATTERN = new RegExp(
    `(${matchAnyPattern(TIME_UNIT_DICTIONARY)})(?=\\s*)(này|nay|sau|trước|tới|tiếp)` + "(?=\\W|$)",
    "i"
);

const MODIFIER_WORD_GROUP = 2;
const RELATIVE_WORD_GROUP = 1;

export default class VIRelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern(): RegExp {
        return PATTERN;
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = TIME_UNIT_DICTIONARY[unitWord];

        if (modifier == "sau" || modifier == "tới" || modifier == "tiếp" ) {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }

        if (modifier == "trước") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }

        const components = context.createParsingComponents();
        let date = dayjs(context.refDate);

        // This week
        if (unitWord.match(/tuần/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }

        // This month
        else if (unitWord.match(/tháng/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }

        // This year
        else if (unitWord.match(/năm/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");

            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }

        return components;
    }
}
