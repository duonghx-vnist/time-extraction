import { OpUnitType } from "dayjs";
import { matchAnyPattern, repeatedTimeunitPattern } from "../../utils/pattern";
import { findMostLikelyADYear } from "../../calculation/years";
import { TimeUnits } from "../../utils/timeunits";

export const WEEKDAY_DICTIONARY: { [word: string]: number } = {
    sunday: 0,
    sun: 0,
    "chủ nhật": 0,
    monday: 1,
    mon: 1,
    "thứ hai": 1,
    "thứ 2": 1,
    tuesday: 2,
    tue: 2,
    "thứ ba": 2,
    "thứ 3": 2,
    wednesday: 3,
    wed: 3,
    "thứ tư": 3,
    "thứ 4": 3,
    thursday: 4,
    thurs: 4,
    "thứ năm": 4,
    "thứ 5": 4,
    thur: 4,
    thu: 4,
    friday: 5,
    fri: 5,
    "thứ sáu": 5,
    "thứ 6": 5,
    saturday: 6,
    sat: 6,
    "thứ bảy": 6,
    "thứ 7": 6,
};

export const FULL_MONTH_NAME_DICTIONARY: { [word: string]: number } = {
    january: 1,
    "tháng 1": 1,
    "tháng 2": 2,
    february: 2,
    march: 3,
    "tháng 3": 3,
    april: 4,
    "tháng 4": 4,
    may: 5,
    "tháng 5": 5,
    june: 6,
    "tháng 6": 6,
    july: 7,
    "tháng 7": 7,
    august: 8,
    "tháng 8": 8,
    september: 9,
    "tháng 9": 9,
    october: 10,
    "tháng 10": 10,
    november: 11,
    "tháng 11": 11,
    "tháng 12": 12,
    december: 12,
};

export const MONTH_DICTIONARY: { [word: string]: number } = {
    ...FULL_MONTH_NAME_DICTIONARY,
    "tháng một": 1,
    "tháng mười một": 11,
    "tháng hai": 2,
    "tháng ba": 3,
    "tháng bốn": 4,
    "tháng tư": 4,
    "tháng năm": 5,
    "tháng sáu": 6,
    "tháng bảy": 7,
    "tháng bẩy": 7,
    "tháng tám": 8,
    "tháng chín": 9,
    "tháng mười": 10,
    "tháng mười hai": 12,
    jan: 1,
    "jan.": 1,
    feb: 2,
    "feb.": 2,
    mar: 3,
    "mar.": 3,
    apr: 4,
    "apr.": 4,
    jun: 6,
    "jun.": 6,
    jul: 7,
    "jul.": 7,
    aug: 8,
    "aug.": 8,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oct: 10,
    "oct.": 10,
    nov: 11,
    "nov.": 11,
    dec: 12,
    "dec.": 12,
};

export const INTEGER_WORD_DICTIONARY: { [word: string]: number } = {
    "một": 1,
    "mười một": 11,
    "hai": 2,
    "ba": 3,
    "bốn": 4,
    "tư": 4,
    "năm": 5,
    "sáu": 6,
    "bảy": 7,
    "bẩy": 7,
    "tám": 8,
    "chín": 9,
    "mười": 10,
    "mười hai": 12,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
};

export const ORDINAL_WORD_DICTIONARY: { [word: string]: number } = {
    "một": 1,
    "mười một": 11,
    "hai": 2,
    "ba": 3,
    "bốn": 4,
    "tư": 4,
    "năm": 5,
    "sáu": 6,
    "bảy": 7,
    "bẩy": 7,
    "tám": 8,
    "chín": 9,
    "mười": 10,
    "mùng một": 1,
    "mùng hai": 2,
    "mùng ba": 3,
    "mùng bốn": 4,
    "mùng tư": 4,
    "mùng năm": 5,
    "mùng sáu": 6,
    "mùng bảy": 7,
    "mùng bẩy": 7,
    "mùng tám": 8,
    "mùng chín": 9,
    "mùng mười": 10,
    "mùng 1": 1,
    "mùng 2": 2,
    "mùng 3": 3,
    "mùng 4": 4,
    "mùng 5": 5,
    "mùng 6": 6,
    "mùng 7": 7,
    "mùng 8": 8,
    "mùng 9": 9,
    "mùng 10": 10,
    "mười hai": 12,
    "mười ba": 13,
    "mười tư": 14,
    "mười bốn": 14,
    "mười lăm": 15,
    "mười năm": 15,
    "mười sáu": 16,
    "mười bảy": 17,
    "mười bẩy": 17,
    "mười tám": 18,
    "mười chín": 19,
    "hai mươi": 20,
    "hai mươi mốt": 21,
    "hai mươi hai": 22,
    "hai mươi ba": 23,
    "hai mươi tư": 24,
    "hai mươi bốn": 24,
    "hai mươi năm": 25,
    "hai mươi lăm": 25,
    "hai mươi sáu": 26,
    "hai mươi bảy": 27,
    "hai mươi bẩy": 27,
    "hai mươi tám": 28,
    "hai mươi chín": 29,
    "hai mốt": 21,
    "hai hai": 22,
    "hai ba": 23,
    "hai tư": 24,
    "hai bốn": 24,
    "hai năm": 25,
    "hai lăm": 25,
    "hai sáu": 26,
    "hai bảy": 27,
    "hai bẩy": 27,
    "hai tám": 28,
    "hai chín": 29,
    "ba mươi": 30,
    "ba mươi mốt": 31,
    "ba mốt": 31,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    "twenty first": 21,
    "twenty-first": 21,
    "twenty second": 22,
    "twenty-second": 22,
    "twenty third": 23,
    "twenty-third": 23,
    "twenty fourth": 24,
    "twenty-fourth": 24,
    "twenty fifth": 25,
    "twenty-fifth": 25,
    "twenty sixth": 26,
    "twenty-sixth": 26,
    "twenty seventh": 27,
    "twenty-seventh": 27,
    "twenty eighth": 28,
    "twenty-eighth": 28,
    "twenty ninth": 29,
    "twenty-ninth": 29,
    "thirtieth": 30,
    "thirty first": 31,
    "thirty-first": 31,
};

export const TIME_UNIT_DICTIONARY: { [word: string]: OpUnitType } = {
    "giây": "second",
    sec: "second",
    second: "second",
    seconds: "second",
    "phút": "minute",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    "giờ": "hour",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    day: "d",
    "ngày": "d",
    days: "d",
    "tuần": "week",
    week: "week",
    weeks: "week",
    "tháng": "month",
    month: "month",
    months: "month",
    "năm": "year",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
};

//-----------------------------

export const NUMBER_PATTERN = `(?:${matchAnyPattern(
    INTEGER_WORD_DICTIONARY
)}|[0-9]+|[0-9]+\\.[0-9]+|half|rưỡi(?:\\s*an?)?|an?(?:\\s*few)?|few|several|a?\\s*couple\\s*(?:of)?)`;

export function parseNumberPattern(match: string): number {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    } else if (num === "a" || num === "an") {
        return 1;
    } else if (num.match(/few/)) {
        return 3;
    } else if (num.match(/half/)) {
        return 0.5;
    } else if (num.match(/rưỡi/)) {
        return 0.5;
    } else if (num.match(/couple/)) {
        return 2;
    } else if (num.match(/several/)) {
        return 7;
    }

    return parseFloat(num);
}

//-----------------------------

export const ORDINAL_NUMBER_PATTERN = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
export function parseOrdinalNumberPattern(match: string): number {
    let num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }

    num = num.replace(/(?:st|nd|rd|th)$/i, "");
    return parseInt(num);
}

//-----------------------------

export const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:BE|AD|BC)|[1-2][0-9]{3}|[5-9][0-9])`;
export function parseYear(match: string): number {
    if (/BE/i.test(match)) {
        // Buddhist Era
        match = match.replace(/BE/i, "");
        return parseInt(match) - 543;
    }

    if (/BC/i.test(match)) {
        // Before Christ
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }

    if (/AD/i.test(match)) {
        match = match.replace(/AD/i, "");
        return parseInt(match);
    }

    const rawYearNumber = parseInt(match);
    return findMostLikelyADYear(rawYearNumber);
}

//-----------------------------
// export const HHmmDDMMYY_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}\\s*(?:giờ)(${NUMBER_PATTERN})\\s{0,5}\\s*(?:phút)(${NUMBER_PATTERN})\\s{0,5}\\s*(?:ngày)(${NUMBER_PATTERN})\\s{0,5}\\s*(?:tháng)(${NUMBER_PATTERN})\\s{0,5}\\s*(?:năm)`;
// export function parseHHmmDDMMYY(match: string): TimeUnits {
//     const fragments = {};
//     const numHH = parseNumberPattern(match[1]);
//     const numMm = parseNumberPattern(match[2]);
//     fragments["giờ"] = numHH;
//     fragments["phút"] = numMm;
    
//     const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
// }
export const DDMMYY_PATTERN = `(ngày\\s{0,5}${NUMBER_PATTERN})\\s{0,5}(tháng\\s{0,5}${NUMBER_PATTERN})\\s{0,5}(năm\\s{0,5}${NUMBER_PATTERN})\\s{0,5}`;
// export const HHmm_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})\\s{0,5}(${NUMBER_PATTERN})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
export const HHmm_PATTERN = `(${NUMBER_PATTERN}\\s{0,5}giờ)\\s{0,5}(?:(${NUMBER_PATTERN}\\s{0,5}phút)|\\s)\\s{0,5}`;
const HHMm_REGEX = new RegExp(HHmm_PATTERN, "i");
const DDMMYY_REGEX = new RegExp(DDMMYY_PATTERN, "i");
export function parseHHmm(timeunitText): TimeUnits {
    const fragments = {};
    let remainingText = timeunitText;
    let match = HHMm_REGEX.exec(remainingText);
    console.log("match:", match);
    for(let i= 1; i< match.length;i++){
        collectTimeFragment(fragments, match[i]);
    }
    return fragments;
}
export function parseDDMMYY(timeunitText): TimeUnits {
    const fragments = {};
    let remainingText = timeunitText;
    let match = DDMMYY_REGEX.exec(remainingText);
    for(let i= 1; i< match.length;i++){
        collectDateFragment(fragments, match[i]);
    }
    return fragments;
}
//-----------------------------

const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const SINGLE_DATE_UNIT_PATTERN = `(${matchAnyPattern(TIME_UNIT_DICTIONARY)})\\s{0,5}(${NUMBER_PATTERN})\\s{0,5}`;
const SINGLE_DATE_UNIT_REGEX = new RegExp(SINGLE_DATE_UNIT_PATTERN, "i");

export const TIME_UNITS_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around|khoảng)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);

export function parseTimeUnits(timeunitText): TimeUnits {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}

function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    
    fragments[unit] = num;
}
function collectTimeFragment(fragments, text) {
    if(text === " " || text === "" || text === undefined) {
        return;
    }
    let match = SINGLE_TIME_UNIT_REGEX.exec(text);
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    
    fragments[unit] = num;
}
function collectDateFragment(fragments, text) {
    if(text === " " || text === "" || text === undefined) {
        return;
    }
    let match = SINGLE_DATE_UNIT_REGEX.exec(text);
    const num = parseNumberPattern(match[2]);
    const unit = TIME_UNIT_DICTIONARY[match[1].toLowerCase()];
    
    fragments[unit] = num;
}