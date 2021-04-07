import { ParsingContext } from "../../../chrono";
import { Meridiem } from "../../../index";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import dayjs from "dayjs";
import { assignTheNextDay } from "../../../utils/dayjs";

export default class VICasualTimeParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(sáng|chiều|tối|trưa)\s*(?:này|nay)?\s*(?=\W|$)/i;//todo
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray) {
        const targetDate = dayjs(context.refDate);
        const component = context.createParsingComponents();

        switch (match[1].toLowerCase()) {
            case "chiều":
                component.imply("meridiem", Meridiem.PM);
                // component.imply("hour", 15);
                break;
            // case "rưỡi":
            //         component.imply("minute", 30);
            //         break;
            case "tối":
            case "night":
                component.imply("meridiem", Meridiem.PM);
                // component.imply("hour", 20);
                break;

            case "midnight":
                assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;

            case "sáng":
                component.imply("meridiem", Meridiem.AM);
                // component.imply("hour", 6);
                break;

            case "trưa":
                component.imply("meridiem", Meridiem.AM);
                // component.imply("hour", 12);
                break;
        }

        return component;
    }
}
