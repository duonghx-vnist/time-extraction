/**
 * Chrono components for Dutch support (*parsers*, *refiners*, and *configuration*)
 *
 * @module
 */

import { includeCommonConfiguration } from "../../configurations";
import { ParsedResult, ParsingOption } from "../../index";
import { Chrono, Configuration } from "../../chrono";
import NLMergeDateRangeRefiner from "./refiners/NLMergeDateRangeRefiner";
import NLMergeDateTimeRefiner from "./refiners/NLMergeDateTimeRefiner";
import NLCasualDateParser from "./parsers/NLCasualDateParser";
import NLCasualTimeParser from "./parsers/NLCasualTimeParser";
import SlashDateFormatParser from "../../common/parsers/SlashDateFormatParser";
import NLTimeUnitWithinFormatParser from "./parsers/NLTimeUnitWithinFormatParser";
import NLWeekdayParser from "./parsers/NLWeekdayParser";
import NLMonthNameMiddleEndianParser from "./parsers/NLMonthNameMiddleEndianParser";
import NLMonthNameParser from "./parsers/NLMonthNameParser";
import NLSlashMonthFormatParser from "./parsers/NLSlashMonthFormatParser";
import NLTimeExpressionParser from "./parsers/NLTimeExpressionParser";
import NLCasualYearMonthDayParser from "./parsers/NLCasualYearMonthDayParser";
import NLCasualDateTimeParser from "./parsers/NLCasualDateTimeParser";

// Shortcuts
export const casual = new Chrono(createCasualConfiguration());
export const strict = new Chrono(createConfiguration(true));

export function parse(text: string, ref?: Date, option?: ParsingOption): ParsedResult[] {
    return casual.parse(text, ref, option);
}

export function parseDate(text: string, ref?: Date, option?: ParsingOption): Date {
    return casual.parseDate(text, ref, option);
}

export function createCasualConfiguration(littleEndian = true): Configuration {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new NLCasualDateParser());
    option.parsers.unshift(new NLCasualTimeParser());
    option.parsers.unshift(new NLCasualDateTimeParser());
    return option;
}

/**
 * @ignore (to be documented later)
 */
export function createConfiguration(strictMode = true, littleEndian = true): Configuration {
    return includeCommonConfiguration(
        {
            parsers: [
                new SlashDateFormatParser(littleEndian),
                new NLMonthNameMiddleEndianParser(),
                new NLMonthNameParser(),
                new NLTimeExpressionParser(),
                new NLTimeUnitWithinFormatParser(),
                new NLSlashMonthFormatParser(),
                new NLWeekdayParser(),
                new NLCasualYearMonthDayParser(),
            ],
            refiners: [new NLMergeDateTimeRefiner(), new NLMergeDateRangeRefiner()],
        },
        strictMode
    );
}
