// import * as chrono from "../../src";
// import { testSingleCase } from "../test_util";
// import { ParsingResult } from "../../src/results";

// test("Test - 'This' expressions", () => {
//     // testSingleCase(chrono.vi, "tuần này", new Date(2017, 11 - 1, 19, 12), (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2017);
//     //     expect(result.start.get("month")).toBe(11);
//     //     expect(result.start.get("day")).toBe(19);
//     //     expect(result.start.get("hour")).toBe(12);
//     // });

//     testSingleCase(chrono.vi, "tháng này", new Date(2017, 11 - 1, 19, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2017);
//         expect(result.start.get("month")).toBe(11);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(12);
//     });

//     // testSingleCase(chrono.vi, "this month", new Date(2017, 11 - 1, 1, 12), (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2017);
//     //     expect(result.start.get("month")).toBe(11);
//     //     expect(result.start.get("day")).toBe(1);
//     //     expect(result.start.get("hour")).toBe(12);
//     // });

//     testSingleCase(chrono.vi, "năm nay", new Date(2017, 11 - 1, 19, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2017);
//         expect(result.start.get("month")).toBe(1);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(12);
//     });
// });

// test("Test - Past relative expressions", () => {
//     // testSingleCase(chrono.vi, "tuần trước", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2016);
//     //     expect(result.start.get("month")).toBe(9);
//     //     expect(result.start.get("day")).toBe(24);
//     //     expect(result.start.get("hour")).toBe(12);
//     // });

//     testSingleCase(chrono.vi, "tháng trước", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(9);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(12);
//     });

//     testSingleCase(chrono.vi, "hôm qua", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(9);
//         expect(result.start.get("day")).toBe(30);
//         expect(result.start.get("hour")).toBe(12);
//     });

//     // testSingleCase(chrono.vi, "last month", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2016);
//     //     expect(result.start.get("month")).toBe(9);
//     //     expect(result.start.get("day")).toBe(1);
//     //     expect(result.start.get("hour")).toBe(12);
//     // });

//     testSingleCase(chrono.vi, "tuần trước", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(9);
//         expect(result.start.get("day")).toBe(24);
//         expect(result.start.get("hour")).toBe(12);
//     });
// });

// test("Test - Future relative expressions", () => {
//     // testSingleCase(chrono.vi, "giờ tới", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2016);
//     //     expect(result.start.get("month")).toBe(10);
//     //     expect(result.start.get("day")).toBe(1);
//     //     expect(result.start.get("hour")).toBe(13);
//     // });

//     testSingleCase(chrono.vi, "tuần tới", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("day")).toBe(8);
//         expect(result.start.get("hour")).toBe(12);
//     });

//     testSingleCase(chrono.vi, "tuần sau", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("day")).toBe(8);
//         expect(result.start.get("hour")).toBe(12);
//     });
//     testSingleCase(chrono.vi, "mai", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("day")).toBe(2);
//         expect(result.start.get("hour")).toBe(12);
//     });

//     testSingleCase(chrono.vi, "tháng sau", new Date(2016, 10 - 1, 1, 12), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(11);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(12);

//         expect(result.start.isCertain("year")).toBe(true);
//         expect(result.start.isCertain("month")).toBe(true);
//         expect(result.start.isCertain("day")).toBe(false);
//         expect(result.start.isCertain("hour")).toBe(false);
//     });

//     testSingleCase(chrono.vi, "năm sau", new Date(2020, 11 - 1, 22, 12, 11, 32, 6), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2021);
//         expect(result.start.get("month")).toBe(11);
//         expect(result.start.get("day")).toBe(22);
//         expect(result.start.get("hour")).toBe(12);
//         expect(result.start.get("minute")).toBe(11);
//         expect(result.start.get("second")).toBe(32);
//         expect(result.start.get("millisecond")).toBe(6);

//         expect(result.start.isCertain("year")).toBe(true);
//         expect(result.start.isCertain("month")).toBe(false);
//         expect(result.start.isCertain("day")).toBe(false);
//         expect(result.start.isCertain("hour")).toBe(false);
//         expect(result.start.isCertain("minute")).toBe(false);
//         expect(result.start.isCertain("second")).toBe(false);
//         expect(result.start.isCertain("millisecond")).toBe(false);
//         expect(result.start.isCertain("timezoneOffset")).toBe(false);
//     });
// });

// test("Test - Relative date components' certainty", () => {
//     const refDate = new Date(2016, 10 - 1, 7, 12);

//     // testSingleCase(chrono.vi, "giờ sau", refDate, (result, text) => {
//     //     expect(result.text).toBe(text);
//     //     expect(result.start.get("year")).toBe(2016);
//     //     expect(result.start.get("month")).toBe(10);
//     //     expect(result.start.get("day")).toBe(7);
//     //     expect(result.start.get("hour")).toBe(13);
//     //     expect(result.start.get("timezoneOffset")).toBe(refDate.getTimezoneOffset() * -1);

//     //     expect(result.start.isCertain("year")).toBe(true);
//     //     expect(result.start.isCertain("month")).toBe(true);
//     //     expect(result.start.isCertain("day")).toBe(true);
//     //     expect(result.start.isCertain("hour")).toBe(true);
//     //     expect(result.start.isCertain("timezoneOffset")).toBe(true);
//     // });

//     testSingleCase(chrono.vi, "tháng sau", refDate, (result, text) => {
//         const expectedDate = new Date(2016, 11, 7, 12);

//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.start.get("month")).toBe(11);
//         expect(result.start.get("day")).toBe(7);
//         expect(result.start.get("hour")).toBe(12);
//         expect(result.start.get("timezoneOffset")).toBe(-expectedDate.getTimezoneOffset());

//         expect(result.start.isCertain("year")).toBe(true);
//         expect(result.start.isCertain("month")).toBe(true);
//         expect(result.start.isCertain("day")).toBe(false);
//         expect(result.start.isCertain("hour")).toBe(false);
//         expect(result.start.isCertain("timezoneOffset")).toBe(false);
//     });
// });

// // test("Test - Relative date components' certainty and imply timezone", () => {
// //     const refDate = new Date("Sun Nov 29 2020 13:24:13 GMT+0900 (Japan Standard Time)");

// //     {
// //         const text = "now";
// //         const result = chrono.vi.parse(text, refDate)[0] as ParsingResult;

// //         expect(result.text).toBe(text);
// //         result.start.imply("timezoneOffset", 60);

// //         expect(result).toBeDate(new Date("Sun Nov 29 2020 13:24:13 GMT+0900 (Japan Standard Time)"));
// //         expect(result).toBeDate(new Date("Sun Nov 29 2020 5:24:13 GMT+0100"));
// //     }

// //     {
// //         const text = "tomorrow at 5pm";
// //         const result = chrono.vi.parse(text, refDate)[0] as ParsingResult;

// //         expect(result.text).toBe(text);
// //         result.start.imply("timezoneOffset", 60);

// //         expect(result).toBeDate(new Date("Sun Dec 1 2020 1:00:00 GMT+0900 (Japan Standard Time)"));
// //         expect(result).toBeDate(new Date("Sun Nov 30 2020 17:00:00 GMT+0100"));
// //     }

// //     {
// //         const text = "in 10 minutes";
// //         const result = chrono.vi.parse(text, refDate)[0] as ParsingResult;

// //         expect(result.text).toBe(text);
// //         result.start.imply("timezoneOffset", 60);

// //         expect(result).toBeDate(new Date("Sun Nov 29 2020 13:34:13 GMT+0900 (Japan Standard Time)"));
// //         expect(result).toBeDate(new Date("Sun Nov 29 2020 5:34:13 GMT+0100"));
// //     }
// // });
