import { ParsingContext } from "../../../chrono";
import { ParsingComponents, ParsingResult } from "../../../results";
import dayjs from "dayjs";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import { assignSimilarDate } from "../../../utils/dayjs";
import * as references from "../../../common/casualReferences";

export default class VICasualDateParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern(context: ParsingContext): RegExp {
        return /(bây\s*giờ|hôm\s*nay|tối\s*nay|ngày\s*mai|mai|hôm\s*qua|nay|tối\s*qua)(?=\W|$)/i;
        // return /(bây\s*giờ|hôm\s*nay|tối\s*nay|ngày\s*mai|mai|hôm\s*qua|nay|tối\s*qua)(?=\W|$)/i;
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents | ParsingResult {
        let targetDate = dayjs(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();

        switch (lowerText) {
            case "bây giờ":
                return references.now(context.refDate);

            case "hôm nay":
            case "nay":
                return references.today(context.refDate);

            case "hôm qua":
                return references.yesterday(context.refDate);

            case "mai":
            case "ngày mai":
                return references.tomorrow(context.refDate);

            case "tối nay":
                return references.tonight(context.refDate);

            default:
                if (lowerText.match(/tối\s*qua/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }

                    assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }

                break;
        }

        return component;
    }
}
