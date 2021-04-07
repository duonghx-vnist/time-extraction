import * as chrono from "../../src";
import { testSingleCase, testUnexpectedResult } from "../test_util";

test("Test - Single Expression", function () {
    testSingleCase(chrono.vi, "5 ngày trước, we did something", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(5);

        expect(result.index).toBe(0);
        expect(result.text).toBe("5 ngày trước");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 5));
    });

    testSingleCase(chrono.vi, "10 ngày trước, we did something", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(7);
        expect(result.start.get("day")).toBe(31);

        expect(result.index).toBe(0);
        expect(result.text).toBe("10 ngày trước");

        expect(result.start).toBeDate(new Date(2012, 7 - 1, 31));
    });

    testSingleCase(chrono.vi, "15 phút trước", new Date(2012, 7, 10, 12, 14), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("15 phút trước");
        expect(result.start.get("hour")).toBe(11);
        expect(result.start.get("minute")).toBe(59);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 11, 59));
    });

    // testSingleCase(chrono.vi, "15 minute earlier", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("15 minute earlier");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(59);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 11, 59));
    // });

    // testSingleCase(chrono.vi, "15 minute before", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("15 minute before");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(59);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 11, 59));
    // });

    testSingleCase(chrono.vi, "   12 giờ trước", new Date(2012, 7, 10, 12, 14), (result) => {
        expect(result.index).toBe(3);
        expect(result.text).toBe("12 giờ trước");
        expect(result.start.get("hour")).toBe(0);
        expect(result.start.get("minute")).toBe(14);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 0, 14));
    });

    // testSingleCase(chrono.vi, "1h ago", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("1h ago");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(14);
    // });

    // testSingleCase(chrono.vi, "1hr ago", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("1hr ago");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(14);
    // });

    // testSingleCase(chrono.vi, "   half an hour ago", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(3);
    //     expect(result.text).toBe("half an hour ago");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(44);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 11, 44));
    // });

    testSingleCase(chrono.vi, "12 giờ trước I did something", new Date(2012, 7, 10, 12, 14), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("12 giờ trước");
        expect(result.start.get("hour")).toBe(0);
        expect(result.start.get("minute")).toBe(14);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 0, 14));
    });

    testSingleCase(chrono.vi, "12 giây trước I did something", new Date(2012, 7, 10, 12, 14), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("12 giây trước");
        expect(result.start.get("hour")).toBe(12);
        expect(result.start.get("minute")).toBe(13);
        expect(result.start.get("second")).toBe(48);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 12, 13, 48));
    });

    testSingleCase(chrono.vi, "ba giây trước I did something", new Date(2012, 7, 10, 12, 14), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("ba giây trước");
        expect(result.start.get("hour")).toBe(12);
        expect(result.start.get("minute")).toBe(13);
        expect(result.start.get("second")).toBe(57);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 12, 13, 57));
    });

    testSingleCase(chrono.vi, "năm ngày trước, we did something", new Date(2012, 7, 10), (result) => {
        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(5);

        expect(result.index).toBe(0);
        expect(result.text).toBe("năm ngày trước");

        expect(result.start).toBeDate(new Date(2012, 8 - 1, 5));
    });

    // testSingleCase(chrono.vi, "   half An hour ago", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(3);
    //     expect(result.text).toBe("half An hour ago");
    //     expect(result.start.get("hour")).toBe(11);
    //     expect(result.start.get("minute")).toBe(44);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 11, 44));
    // });

    // testSingleCase(chrono.vi, "A days ago, we did something", new Date(2012, 7, 10), (result) => {
    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(9);

    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("A days ago");

    //     expect(result.start).toBeDate(new Date(2012, 8 - 1, 9));
    // });

    // testSingleCase(chrono.vi, "a min before", new Date(2012, 7, 10, 12, 14), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("a min before");
    //     expect(result.start.get("hour")).toBe(12);
    //     expect(result.start.get("minute")).toBe(13);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 12, 13));
    // });
});

// test("Test - Single Expression (Casual)", function () {
//     testSingleCase(chrono.vi, "5 months ago, we did something", new Date(2012, 8 - 1, 10), (result) => {
//         expect(result.start).not.toBeNull();
//         expect(result.start.get("year")).toBe(2012);
//         expect(result.start.get("month")).toBe(3);
//         expect(result.start.get("day")).toBe(10);

//         expect(result.index).toBe(0);
//         expect(result.text).toBe("5 months ago");

//         expect(result.start).toBeDate(new Date(2012, 3 - 1, 10));
//     });

//     testSingleCase(chrono.vi, "5 years ago, we did something", new Date(2012, 8 - 1, 10), (result) => {
//         expect(result.start).not.toBeNull();
//         expect(result.start.get("year")).toBe(2007);
//         expect(result.start.get("month")).toBe(8);
//         expect(result.start.get("day")).toBe(10);

//         expect(result.index).toBe(0);
//         expect(result.text).toBe("5 years ago");

//         expect(result.start).toBeDate(new Date(2007, 8 - 1, 10));
//     });

//     testSingleCase(chrono.vi, "a week ago, we did something", new Date(2012, 8 - 1, 3), (result) => {
//         expect(result.start).not.toBeNull();
//         expect(result.start.get("year")).toBe(2012);
//         expect(result.start.get("month")).toBe(7);
//         expect(result.start.get("day")).toBe(27);

//         expect(result.index).toBe(0);
//         expect(result.text).toBe("a week ago");

//         expect(result.start).toBeDate(new Date(2012, 7 - 1, 27));
//     });

//     testSingleCase(chrono.vi, "a few days ago, we did something", new Date(2012, 8 - 1, 3), (result) => {
//         expect(result.start).not.toBeNull();
//         expect(result.start.get("year")).toBe(2012);
//         expect(result.start.get("month")).toBe(7);
//         expect(result.start.get("day")).toBe(31);

//         expect(result.index).toBe(0);
//         expect(result.text).toBe("a few days ago");

//         expect(result.start).toBeDate(new Date(2012, 7 - 1, 31));
//     });
// });

// test("Test - Nested time ago", function () {
//     testSingleCase(chrono.vi, "15 hours 29 min ago", new Date(2012, 7, 10, 22, 30), (result) => {
//         expect(result.text).toBe("15 hours 29 min ago");
//         expect(result.start.get("day")).toBe(10);
//         expect(result.start.get("hour")).toBe(7);
//         expect(result.start.get("minute")).toBe(1);
//     });

//     testSingleCase(chrono.vi, "1 ngày 21 giờ trước ", new Date(2012, 7, 10, 22, 30), (result) => {
//         expect(result.text).toBe("1 ngày 21 giờ trước");
//         expect(result.start.get("day")).toBe(9);
//         expect(result.start.get("hour")).toBe(1);
//         expect(result.start.get("minute")).toBe(30);
//     });

//     testSingleCase(chrono.vi, "3 min 49 sec ago ", new Date(2012, 7, 10, 22, 30), (result) => {
//         expect(result.text).toBe("3 min 49 sec ago");
//         expect(result.start.get("day")).toBe(10);
//         expect(result.start.get("hour")).toBe(22);
//         expect(result.start.get("minute")).toBe(26);
//         expect(result.start.get("second")).toBe(11);
//     });
// });

// test("Test - Negative cases", function () {
//     testUnexpectedResult(chrono.vi, "15 hours 29 min");
//     testUnexpectedResult(chrono.vi, "a few hour");
//     testUnexpectedResult(chrono.vi, "5 days");
// });
