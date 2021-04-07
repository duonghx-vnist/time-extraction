import { TIME_UNITS_PATTERN, parseTimeUnits } from "../constants";
import { ParsingContext } from "../../../chrono";
import { ParsingComponents } from "../../../results";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import { reverseTimeUnits } from "../../../utils/timeunits";

export default class VITimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern(): RegExp {
        return new RegExp(`(${TIME_UNITS_PATTERN})\\s*(này|nay|sau|trước|tới|tiếp)(?=\\W|$)`, "i");//todo
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents {
        const prefix = match[2].toLowerCase();
        let timeUnits = parseTimeUnits(match[1]);
        switch (prefix) {
            case "trước":
            case "-":
                timeUnits = reverseTimeUnits(timeUnits);
                break;
        }

        return ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
