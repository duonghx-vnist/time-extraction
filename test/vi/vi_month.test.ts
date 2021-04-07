import * as chrono from "../../src";
import { testSingleCase } from "../test_util";

test("Test - Month-Year expression", function () {
    testSingleCase(chrono.vi, "Tháng 9 2012", (result) => {
        expect(result.text).toBe("Tháng 9 2012");

        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "Tháng chín 2012", (result) => {
        expect(result.text).toBe("Tháng chín 2012");

        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "Tháng 9-2012", (result) => {
        expect(result.text).toBe("Tháng 9-2012");

        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "Tháng 9 2012", (result) => {
        expect(result.text).toBe("Tháng 9 2012");

        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    // testSingleCase(chrono.vi, "9 - 2020", (result) => {
    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2020);
    //     expect(result.start.get("month")).toBe(9);

    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("9-2020");

    //     expect(result.start).toBeDate(new Date(2020, 9 - 1, 1, 12));
    // });
});

test("Test - Month-Only expression", function () {
    testSingleCase(chrono.vi, "vào Tháng một", new Date(2020, 11 - 1, 22), (result) => {
        expect(result.text).toContain("Tháng một");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2021);
        expect(result.start.get("month")).toBe(1);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(false);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2021, 1 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "vào Tháng 1", new Date(2020, 11 - 1, 22), (result) => {
        expect(result.text).toContain("Tháng 1");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2021);
        expect(result.start.get("month")).toBe(1);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(false);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2021, 1 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "Tháng 5", new Date(2020, 11 - 1, 22), (result) => {
        expect(result.text).toContain("Tháng 5");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2021);
        expect(result.start.get("month")).toBe(5);
        expect(result.start.get("day")).toBe(1);

        expect(result.start.isCertain("year")).toBe(false);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("day")).toBe(false);

        expect(result.start).toBeDate(new Date(2021, 5 - 1, 1, 12));
    });
});

test("Test - Month expression in context", function () {
    testSingleCase(chrono.vi, "The date is tháng 9 2012 is the date", (result) => {
        expect(result.index).toBe(12);
        expect(result.text).toBe("tháng 9 2012");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "By Angie Mar tháng mười một 2019", (result) => {
        expect(result.text).toBe("tháng mười một 2019");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2019);
        expect(result.start.get("month")).toBe(11);

        expect(result.start).toBeDate(new Date(2019, 11 - 1, 1, 12));
    });
});

test("Test - Month slash expression", function () {
    testSingleCase(chrono.vi, "9/2012", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);

        expect(result.index).toBe(0);
        expect(result.text).toBe("9/2012");

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });

    testSingleCase(chrono.vi, "09/2012", new Date(2012, 7, 10), (result) => {
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(9);

        expect(result.index).toBe(0);
        expect(result.text).toBe("09/2012");

        expect(result.start).toBeDate(new Date(2012, 9 - 1, 1, 12));
    });
});

test("Test - year 90's parsing", () => {
    testSingleCase(chrono.vi, "tháng 8 96", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("tháng 8 96");

        expect(result.start.get("year")).toBe(1996);
        expect(result.start.get("month")).toBe(8);
    });

    testSingleCase(chrono.vi, "96 tháng 8 96", new Date(2012, 7, 10), (result) => {
        expect(result.text).toBe("tháng 8 96");

        expect(result.start.get("year")).toBe(1996);
        expect(result.start.get("month")).toBe(8);
    });
});
