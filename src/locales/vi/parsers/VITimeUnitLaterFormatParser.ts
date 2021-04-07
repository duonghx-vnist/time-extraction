import { ParsingContext } from "../../../chrono";
import { parseTimeUnits, TIME_UNITS_PATTERN } from "../constants";
import { ParsingComponents } from "../../../results";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";

const PATTERN = new RegExp(
    "" + "(" + TIME_UNITS_PATTERN + ")" + "(later|after|from now|henceforth|forward|out|sau|tới)" + "(?=(?:\\W|$))",//todo
    "i"
);

const STRICT_PATTERN = new RegExp("" + "(" + TIME_UNITS_PATTERN + ")" + "(later|from now|sau|tới)" + "(?=(?:\\W|$))", "i");//todo
const GROUP_NUM_TIMEUNITS = 1;

export default class VITimeUnitLaterFormatParser extends AbstractParserWithWordBoundaryChecking {
    constructor(private strictMode: boolean) {
        super();
    }

    innerPattern(): RegExp {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray) {
        const fragments = parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
        return ParsingComponents.createRelativeFromRefDate(context.refDate, fragments);
    }
}
