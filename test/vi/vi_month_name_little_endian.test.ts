import * as chrono from "../../src";
import { testSingleCase, testUnexpectedResult } from "../test_util";

test("Test - Single expression", () => {
    testSingleCase(chrono.vi, "10 Tháng 8 2012", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.index).toBe(0);
        expect(result.text).toBe("10 Tháng 8 2012");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "3 tháng 2 82", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(1982);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(3);

        expect(result.index).toBe(0);
        expect(result.text).toBe("3 tháng 2 82");

        expect(result.start).toBeDate(new Date(1982, 2 - 1, 3, 12));
    });

    testSingleCase(chrono.vi, "10 tháng tám 2012", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 tháng tám 2012");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "10 tháng tám 234 BC", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 tháng tám 234 BC");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(-234);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(-234, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "10 tháng tám 88 AD", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 tháng tám 88 AD");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(88);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        const resultDate = result.start.date();
        const expectDate = new Date(88, 8 - 1, 10, 12);
        expectDate.setFullYear(88);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime());
    });

    testSingleCase(chrono.vi, "Chủ nhật 15 tháng 9", new Date(2013, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Chủ nhật 15 tháng 9");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2013);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(15);

        expect(result.start).toBeDate(new Date(2013, 9 - 1, 15, 12));
    });

    testSingleCase(chrono.vi, "Chủ nhật 15 tháng chín", new Date(2013, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Chủ nhật 15 tháng chín");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2013);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(15);

        expect(result.start).toBeDate(new Date(2013, 9 - 1, 15, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is 10 tháng 8", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("10 tháng 8");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is thứ 3, 10 tháng 1", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("thứ 3, 10 tháng 1");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2013);
        expect(result.start.get("month")).toBe(1);
        expect(result.start.get("day")).toBe(10);
        expect(result.start.get("weekday")).toBe(2);

        expect(result.start).toBeDate(new Date(2013, 1 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is thứ ba, 10 tháng 1", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("thứ ba, 10 tháng 1");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2013);
        expect(result.start.get("month")).toBe(1);
        expect(result.start.get("day")).toBe(10);
        expect(result.start.get("weekday")).toBe(2);

        expect(result.start).toBeDate(new Date(2013, 1 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "31 tháng ba, 2016", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("31 tháng ba, 2016");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(3);
        expect(result.start.get("day")).toBe(31);

        expect(result.start).toBeDate(new Date(2016, 3 - 1, 31, 12));
    });

    testSingleCase(chrono.vi, "23 tháng hai, 2016", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("23 tháng hai, 2016");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(23);

        expect(result.start).toBeDate(new Date(2016, 2 - 1, 23, 12));
    });
});

test("Test - Single expression with separators", () => {
    testSingleCase(chrono.vi, "10-tháng 8 2012", new Date(2012, 7, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result).toBeDate(new Date(2012, 8 - 1, 10, 12, 0));
    });

    testSingleCase(chrono.vi, "10-tháng 8-2012", new Date(2012, 7, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result).toBeDate(new Date(2012, 8 - 1, 10, 12, 0));
    });

    testSingleCase(chrono.vi, "10/tháng 8 2012", new Date(2012, 7, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result).toBeDate(new Date(2012, 8 - 1, 10, 12, 0));
    });

    testSingleCase(chrono.vi, "10/tháng 8/2012", new Date(2012, 7, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result).toBeDate(new Date(2012, 8 - 1, 10, 12, 0));
    });
});

test("Test - Range expression", () => {
    testSingleCase(chrono.vi, "10 - 22 tháng 8 2012", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 - 22 tháng 8 2012");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2012);
        expect(result.end.get("month")).toBe(8);
        expect(result.end.get("day")).toBe(22);

        expect(result.end).toBeDate(new Date(2012, 8 - 1, 22, 12));
    });

    testSingleCase(chrono.vi, "10 đến 22 tháng 8 2012", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 đến 22 tháng 8 2012");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2012);
        expect(result.end.get("month")).toBe(8);
        expect(result.end.get("day")).toBe(22);

        expect(result.end).toBeDate(new Date(2012, 8 - 1, 22, 12));
    });

    testSingleCase(chrono.vi, "10 tháng 8 - 12 tháng 9", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 tháng 8 - 12 tháng 9");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2012);
        expect(result.end.get("month")).toBe(9);
        expect(result.end.get("day")).toBe(12);

        expect(result.end).toBeDate(new Date(2012, 9 - 1, 12, 12));
    });

    testSingleCase(chrono.vi, "10 tháng 8 - 12 tháng 9 2013", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("10 tháng 8 - 12 tháng 9 2013");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2013);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2013, 8 - 1, 10, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2013);
        expect(result.end.get("month")).toBe(9);
        expect(result.end.get("day")).toBe(12);

        expect(result.end).toBeDate(new Date(2013, 9 - 1, 12, 12));
    });
});

test("Test - Combined expression", () => {
    testSingleCase(chrono.vi, "12 tháng 7 19:00", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("12 tháng 7 19:00");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(7);
        expect(result.start.get("day")).toBe(12);

        expect(result.start).toBeDate(new Date(2012, 7 - 1, 12, 19, 0));
    });

    testSingleCase(chrono.vi, "5 tháng 5 12:00", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("5 tháng 5 12:00");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(5);
        expect(result.start.get("day")).toBe(5);

        expect(result.start).toBeDate(new Date(2012, 5 - 1, 5, 12, 0));
    });

    testSingleCase(chrono.vi, "7 tháng 5 11:00", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("7 tháng 5 11:00");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(5);
        expect(result.start.get("day")).toBe(7);
        expect(result.start.get("hour")).toBe(11);

        expect(result.start).toBeDate(new Date(2012, 5 - 1, 7, 11, 0));
    });
});

test("Test - Ordinal Words", () => {
    testSingleCase(chrono.vi, "hai mươi tư tháng 5", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("hai mươi tư tháng 5");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(5);
        expect(result.start.get("day")).toBe(24);
    });

    testSingleCase(chrono.vi, "8 - 9 tháng 5 2010", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("8 - 9 tháng 5 2010");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2010);
        expect(result.start.get("month")).toBe(5);
        expect(result.start.get("day")).toBe(8);

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2010);
        expect(result.end.get("month")).toBe(5);
        expect(result.end.get("day")).toBe(9);
    });
});

test("Test - little endian date followed by time", () => {
    testSingleCase(chrono.vi, "24 tháng 10", new Date(2017, 7 - 1, 7, 15), (result) => {
        expect(result.text).toBe("24 tháng 10");
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("month")).toBe(10);
        // expect(result.start.get("hour")).toBe(9);
    });

    testSingleCase(chrono.vi, "24 tháng 10", new Date(2017, 7 - 1, 7, 15), (result) => {
        expect(result.text).toBe("24 tháng 10");
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("month")).toBe(10);
        // expect(result.start.get("hour")).toBe(21);
    });

    testSingleCase(chrono.vi, "24 tháng 10", new Date(2017, 7 - 1, 7, 15), (result) => {
        expect(result.text).toBe("24 tháng 10");
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("month")).toBe(10);
        // expect(result.start.get("hour")).toBe(21);
    });

    testSingleCase(chrono.vi, "24 tháng mười", new Date(2017, 7 - 1, 7, 15), (result) => {
        expect(result.text).toBe("24 tháng mười");
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("month")).toBe(10);
        // expect(result.start.get("hour")).toBe(21);
    });

    testSingleCase(chrono.vi, "24 tháng Mười", new Date(2017, 7 - 1, 7, 15), (result) => {
        expect(result.text).toBe("24 tháng Mười");
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("month")).toBe(10);
        // expect(result.start.get("hour")).toBe(10);
    });
});

test("Test - year 90's parsing", () => {
    testSingleCase(chrono.vi, "03 tháng 8 96", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("03 tháng 8 96");

        expect(result.start.get("year")).toBe(1996);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(3);
    });

    testSingleCase(chrono.vi, "3 tháng 8 96", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("3 tháng 8 96");

        expect(result.start.get("year")).toBe(1996);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(3);
    });

    testSingleCase(chrono.vi, "9 tháng 8 96", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("9 tháng 8 96");

        expect(result.start.get("year")).toBe(1996);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(9);
    });
});

test("Test - Forward Option", () => {
    testSingleCase(chrono.vi, "22 - 23 tháng 2", new Date(2016, 3 - 1, 15), (result) => {
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(22);
        // expect(result.start.get("hour")).toBe(19);

        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("month")).toBe(2);
        expect(result.end.get("day")).toBe(23);
        // expect(result.end.get("hour")).toBe(19);
    });

    testSingleCase(chrono.vi, "22-23 tháng 2", new Date(2016, 3 - 1, 15), { forwardDate: true }, (result) => {
        expect(result.start.get("year")).toBe(2017);
        expect(result.start.get("month")).toBe(2);
        expect(result.start.get("day")).toBe(22);
        // expect(result.start.get("hour")).toBe(19);

        expect(result.end.get("year")).toBe(2017);
        expect(result.end.get("month")).toBe(2);
        expect(result.end.get("day")).toBe(23);
        // expect(result.end.get("hour")).toBe(19);
    });
});

// test("Test - Impossible Dates (Strict Mode)", function () {
//     // testUnexpectedResult(chrono.vi, "32 tháng 8 2014", new Date(2012, 7, 10));

//     testUnexpectedResult(chrono.vi, "29 tháng 2 2014", new Date(2012, 7, 10));

//     testUnexpectedResult(chrono.vi, "32 tháng 8 2021", new Date(2012, 7, 10));

//     testUnexpectedResult(chrono.vi, "29 tháng 2", new Date(2013, 7, 10));
// });
