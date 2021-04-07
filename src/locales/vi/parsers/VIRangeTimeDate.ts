import { ParsingContext } from "../../../chrono";
import { ParsingComponents, ParsingResult } from "../../../results";
import { findYearClosestToRef } from "../../../calculation/years";
import { DDMMYY_PATTERN, HHmm_PATTERN, MONTH_DICTIONARY, parseDDMMYY, parseHHmm } from "../constants";
import { YEAR_PATTERN, parseYear } from "../constants";
import { ORDINAL_NUMBER_PATTERN, parseOrdinalNumberPattern } from "../constants";
import { matchAnyPattern } from "../../../utils/pattern";
import { AbstractParserWithWordBoundaryChecking } from "../../../common/parsers/AbstractParserWithWordBoundary";
import dayjs from "dayjs";
import { assignSimilarDate } from "../../../utils/dayjs";

const PATTERN = new RegExp(
    "(?:on|vào|bắt đầu từ|từ\\s*?)?" +
        `(${HHmm_PATTERN})` +
        // "(?:-|/|lúc|\\s*)" +
        // `(?:${DDMMYY_PATTERN})` +
        "(?:\\s*" +
        "(?:to|\\-|\\–|until|through|till|đến|\\s)\\s*" +
        `(${HHmm_PATTERN})` +
        ")?" +
        "(?:-|/|lúc|\\s*)" +
        `(${DDMMYY_PATTERN})` +
        "(?=\\W|$)",
    "i"
);
const TIME_START = 1;
const TIME_END = 4;
const DATE_GROUP = 7;
// const DATE_TO_GROUP = 3;
// const MONTH_NAME_GROUP = 4;
// const YEAR_GROUP = 5;

export default class VIRangeTimeDate extends AbstractParserWithWordBoundaryChecking {
    innerPattern(): RegExp {
        return PATTERN;
    }

    innerExtract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents | ParsingResult {
        // console.log("DƯơng")

        // const result = context.createParsingResult(match.index, match[0]);

        // const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        // const day = parseOrdinalNumberPattern(match[DATE_GROUP]);
        // if (day > 31) {
        //     // e.g. "[96 Aug]" => "9[6 Aug]", we need to shift away from the next number
        //     match.index = match.index + match[DATE_GROUP].length;
        //     return null;
        // }

        // result.start.assign("month", month);
        // result.start.assign("day", day);

        // if (match[YEAR_GROUP]) {
        //     const yearNumber = parseYear(match[YEAR_GROUP]);
        //     result.start.assign("year", yearNumber);
        // } else {
        //     const year = findYearClosestToRef(context.refDate, day, month);
        //     result.start.imply("year", year);
        // }
        // if(match[TIME_START]) {
        //     console.log("TimeDateRange 1111");
        //     const timeStart = parseHHmm(match[TIME_START]);
        //     result.start.assign("hour", timeStart.hour)
        // }
        // if(match[TIME_END]) {
        //     const timeStart = parseHHmm(match[TIME_END]);
        //     result.end.assign("hour", timeStart.hour)
        // }
        // if (match[DATE_TO_GROUP]) {
        //     const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP]);

        //     result.end = result.start.clone();
        //     result.end.assign("day", endDate);
        // }

        // return result;
        const result = context.createParsingResult(match.index, match[0]);
        for(let i = 0; i<match.length;i++){
            console.log("match[" + i + "]: ", match[i]);
        }
        // console.log("match[1]", match[1]," match[2]", match[2], " match[3]",match[3])
        let timeStart = parseHHmm(match[TIME_START]);
        let timeEnd = parseHHmm(match[TIME_END]);
        let dateUnit = parseDDMMYY(match[DATE_GROUP]);

        result.start.imply("hour", timeStart.hour);
        result.start.imply("minute", timeStart.minute);
        result.start.imply("day", dateUnit.d);
        result.start.imply("month", dateUnit.month);
        result.start.imply("year", dateUnit.year);
        result.end = result.start.clone();
        result.end.assign("hour", timeEnd.hour);
        result.end.assign("minute", timeEnd.minute);
        console.log("RangeTimeDate");
        return result;
    }
}
