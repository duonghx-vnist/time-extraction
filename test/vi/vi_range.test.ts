import * as chrono from "../../src";
import { testSingleCase, testUnexpectedResult } from "../test_util";
import { Meridiem } from "../../src";
test("Test - Date Time giờ phút giây", function () {
    testSingleCase(chrono.vi, "từ hôm nay lúc 11 đến mai lúc 12", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        // expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(11);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);

        expect(result.end.get("hour")).toBe(12);
        expect(result.end.get("minute")).toBe(0);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
    });
    testSingleCase(chrono.vi, "từ hôm nay khi 11 đến mai khi 12", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        // expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(11);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);

        expect(result.end.get("hour")).toBe(12);
        expect(result.end.get("minute")).toBe(0);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
    });
});