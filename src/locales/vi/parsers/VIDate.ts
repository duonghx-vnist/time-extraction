import { ParsingContext } from "../../../chrono";
import { ParsingComponents, ParsingResult } from "../../../results";
import { findYearClosestToRef } from "../../../calculation/years";
import { MONTH_DICTIONARY, TIME_UNITS_PATTERN, HHmm_PATTERN, DDMMYY_PATTERN,parseDDMMYY, parseHHmm } from "../constants";
import { YEAR_PATTERN, parseYear } from "../constants";
import { ORDINAL_NUMBER_PATTERN, parseOrdinalNumberPattern, parseTimeUnits } from "../constants";
import { matchAnyPattern } from "../../../utils/pattern";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import { reverseTimeUnits } from "../../../utils/timeunits";
import dayjs from "dayjs";
import * as references from "../../../common/casualReferences";
import { assignSimilarDate, assignSimilarTime } from "../../../utils/dayjs";

const PATTERN = new RegExp("" + "(" + DDMMYY_PATTERN + ")", "i");

export default class VIDate extends AbstractParserWithWordBoundaryChecking {
    innerPattern(): RegExp {
        return PATTERN;
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents | ParsingResult {
        let targetDate = dayjs(context.refDate);
        const component = context.createParsingComponents();
        let timeUnits = parseDDMMYY(match[1]);
        // assignSimilarDate(component, targetDate);
        assignSimilarTime(component, targetDate);
        component.imply("day", timeUnits.d);
        component.imply("month", timeUnits.month);
        component.imply("year", timeUnits.year);
        component.assign("hour", 6);
        return component;
    }
}
