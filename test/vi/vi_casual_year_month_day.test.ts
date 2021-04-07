import { testSingleCase, testUnexpectedResult } from "../test_util";
import * as chrono from "../../src";

test("Test - Single Expression Start with Year", function () {
    testSingleCase(chrono.vi, "2012/8/10", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.index).toBe(0);
        expect(result.text).toBe("2012/8/10");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is 2012/8/10", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("2012/8/10");

        expect(result.start).toBeDate(new Date(2012, 7, 10, 12));
    });

    testSingleCase(chrono.vi.strict, "2014/2/28", (result) => {
        expect(result.text).toBe("2014/2/28");
    });

    testSingleCase(chrono.vi.strict, "2014/12/28", (result) => {
        expect(result.text).toBe("2014/12/28");
        expect(result).toBeDate(new Date(2014, 12 - 1, 28, 12));
    });

    testSingleCase(chrono.vi.strict, "2014.12.28", (result) => {
        expect(result.text).toBe("2014.12.28");
        expect(result).toBeDate(new Date(2014, 12 - 1, 28, 12));
    });

    testSingleCase(chrono.vi.strict, "2014 12 28", (result) => {
        expect(result.text).toBe("2014 12 28");
        expect(result).toBeDate(new Date(2014, 12 - 1, 28, 12));
    });
});

test("Test - Single Expression Start with Year and Month Name", function () {
    testSingleCase(chrono.vi, "2012/8/10", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.index).toBe(0);
        expect(result.text).toBe("2012/8/10");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is 2012/8/10", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("2012/8/10");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 10, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is 2018 Tháng 3 18", new Date(2012, 7, 10), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("2018 Tháng 3 18");

        expect(result.start.get("year")).toBe(2018);
        expect(result.start.get("month")).toBe(3);
        expect(result.start.get("day")).toBe(18);

        expect(result).toBeDate(new Date(2018, 3 - 1, 18, 12));
    });
});

test("Test - Negative year-month-day like pattern", function () {
    testUnexpectedResult(chrono.vi, "2012-80-10", new Date(2012, 7, 10));

    testUnexpectedResult(chrono.vi, "2012 80 10", new Date(2012, 7, 10));
});
