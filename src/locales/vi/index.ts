/**
 * Chrono components for English support (*parsers*, *refiners*, and *configuration*)
 *
 * @module
 */

import VITimeUnitWithinFormatParser from "./parsers/VITimeUnitWithinFormatParser";
import VIMonthNameLittleEndianParser from "./parsers/VIMonthNameLittleEndianParser";
import VIMonthNameMiddleEndianParser from "./parsers/VIMonthNameMiddleEndianParser";
import VIMonthNameParser from "./parsers/VIMonthNameParser";
import VICasualYearMonthDayParser from "./parsers/VICasualYearMonthDayParser";
import VISlashMonthFormatParser from "./parsers/VISlashMonthFormatParser";
import VITimeExpressionParser from "./parsers/VITimeExpressionParser";
import VITimeUnitAgoFormatParser from "./parsers/VITimeUnitAgoFormatParser";
import VITimeUnitLaterFormatParser from "./parsers/VITimeUnitLaterFormatParser";
import VIMergeDateRangeRefiner from "./refiners/VIMergeDateRangeRefiner";
import VIMergeDateTimeRefiner from "./refiners/VIMergeDateTimeRefiner";

import { includeCommonConfiguration } from "../../configurations";
import VICasualDateParser from "./parsers/VICasualDateParser";
import VICasualTimeParser from "./parsers/VICasualTimeParser";
import VIWeekdayParser from "./parsers/VIWeekdayParser";
import VIRelativeDateFormatParser from "./parsers/VIRelativeDateFormatParser";

import { ParsedResult, ParsingOption } from "../../index";
import { Chrono, Configuration } from "../../chrono";
import SlashDateFormatParser from "../../common/parsers/SlashDateFormatParser";
import VITimeUnitCasualRelativeFormatParser from "./parsers/VITimeUnitCasualRelativeFormatParser";
import VITime from "./parsers/VITime";
import VIRangeTimeDate from "./parsers/VIRangeTimeDate";
import VIDate from "./parsers/VIDate";
import VIMergeTimeDate from "./refiners/VIMergeTimeDate";

/**
 * Chrono object configured for parsing *casual* English
 */
export const casual = new Chrono(createCasualConfiguration(false));

/**
 * Chrono object configured for parsing *strict* English
 */
export const strict = new Chrono(createConfiguration(true, false));

/**
 * Chrono object configured for parsing *UK-style* English
 */
export const GB = new Chrono(createConfiguration(false, true));

/**
 * A shortcut for en.casual.parse()
 */
export function parse(text: string, ref?: Date, option?: ParsingOption): ParsedResult[] {
    return casual.parse(text, ref, option);
}

/**
 * A shortcut for en.casual.parseDate()
 */
export function parseDate(text: string, ref?: Date, option?: ParsingOption): Date {
    return casual.parseDate(text, ref, option);
}

/**
 * Create a default *casual* {@Link Configuration} for English chrono.
 * It calls {@Link createConfiguration} and includes additional parsers.
 */
export function createCasualConfiguration(littleEndian = false): Configuration {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new VICasualDateParser());
    option.parsers.unshift(new VITime());
    option.parsers.unshift(new VIDate());
    option.parsers.unshift(new VIRangeTimeDate());
    option.parsers.unshift(new VICasualTimeParser());
    option.parsers.unshift(new VIMonthNameParser());
    option.parsers.unshift(new VIRelativeDateFormatParser());
    option.parsers.unshift(new VITimeUnitCasualRelativeFormatParser());
    return option;
}

/**
 * Create a default {@Link Configuration} for English chrono
 *
 * @param strictMode If the timeunit mentioning should be strict, not casual
 * @param littleEndian If format should be date-first/littleEndian (e.g. en_UK), not month-first/middleEndian (e.g. en_US)
 */
export function createConfiguration(strictMode = true, littleEndian = false): Configuration {
    return includeCommonConfiguration(
        {
            parsers: [
                new VIRangeTimeDate(),
                new SlashDateFormatParser(littleEndian),
                new VITimeUnitWithinFormatParser(),
                new VIMonthNameLittleEndianParser(),
                new VIMonthNameMiddleEndianParser(),
                new VIWeekdayParser(),
                new VITime(),
                new VIDate(),
                new VICasualYearMonthDayParser(),
                new VISlashMonthFormatParser(),
                new VITimeExpressionParser(strictMode),
                new VITimeUnitAgoFormatParser(strictMode),
                new VITimeUnitLaterFormatParser(strictMode),
            ],
            refiners: [new VIMergeDateTimeRefiner(), new VIMergeDateRangeRefiner(), new VIMergeTimeDate()],
        },
        strictMode
    );
}
