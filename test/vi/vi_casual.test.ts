import * as chrono from "../../src";
import { testSingleCase, testUnexpectedResult } from "../test_util";
import { Meridiem } from "../../src";

test("Test - Single Expression", () => {
    testSingleCase(chrono.vi, "bây giờ làm việc", new Date(2012, 7, 10, 8, 9, 10, 11), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("bây giờ");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);
        expect(result.start.get("hour")).toBe(8);
        expect(result.start.get("minute")).toBe(9);
        expect(result.start.get("second")).toBe(10);
        expect(result.start.get("millisecond")).toBe(11);
        expect(result.start.get("timezoneOffset")).toBe(result.refDate.getTimezoneOffset() * -1);

        expect(result.start).toBeDate(result.refDate);
        expect(result.start).toBeDate(new Date(2012, 7, 10, 8, 9, 10, 11));
    });

    testSingleCase(chrono.vi, "hôm nay làm việc", new Date(2012, 7, 10, 14, 12), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("hôm nay");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 14, 12));
    });

    testSingleCase(chrono.vi, "mai làm việc", new Date(2012, 7, 10, 17, 10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("mai");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(11);

        expect(result.start).toBeDate(new Date(2012, 7, 11, 17, 10));
    });

    testSingleCase(chrono.vi, "ngày mai làm việc", new Date(2012, 7, 10, 1), (result) => {
        expect(result.start).toBeDate(new Date(2012, 7, 11, 1));
    });

    testSingleCase(chrono.vi, "hôm qua làm việc", new Date(2012, 7, 10, 12), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("hôm qua");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(9);

        expect(result.start).toBeDate(new Date(2012, 7, 9, 12));
    });

    testSingleCase(chrono.vi, "tối qua làm việc", new Date(2012, 7, 10, 12), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("tối qua");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(9);
        expect(result.start.get("hour")).toBe(0);

        expect(result.start).toBeDate(new Date(2012, 7, 9, 0));
    });

    // testSingleCase(chrono.vi, "sáng hôm nay", new Date(2012, 7, 10, 12), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("sáng hôm nay");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(10);
    //     // expect(result.start.get("hour")).toBe(6);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10));
    //     // expect(result.start).toBeDate(new Date(2012, 7, 10, 6));
    // });

    // testSingleCase(chrono.vi, "chiều nay", new Date(2012, 7, 10, 12), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("chiều nay");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(10);
    //     expect(result.start.get("hour")).toBe(15);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 15));
    // });

    // testSingleCase(chrono.vi, "tối nay", new Date(2012, 7, 10, 12), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("tối nay");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(10);
    //     expect(result.start.get("hour")).toBe(20);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 20));
    // });

    testSingleCase(chrono.vi, "The Deadline is hôm nay", new Date(2012, 7, 10, 12), (result) => {
        expect(result.text).toBe("hôm nay");
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);
        // expect(result.start.get("hour")).toBe(0);
    });
    testSingleCase(chrono.vi, "hôm nay", new Date(2012, 7, 10, 12), (result) => {
        expect(result.text).toBe("hôm nay");
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);
        // expect(result.start.get("hour")).toBe(0);
    });
    // "Midnight" at 0~1AM, assume it's the coming midnight of following day
    // This is similar to "Tomorrow" at 0~1AM
    // testSingleCase(chrono.vi, "The Deadline was midnight ", new Date(2012, 7, 10, 1), (result) => {
    //     expect(result.text).toBe("midnight");
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(11);
    //     expect(result.start.get("hour")).toBe(0);
    // });
});

// test("Test - Combined Expression", () => {
    // testSingleCase(chrono.vi, "The Deadline is 5 giờ chiều nay", new Date(2012, 7, 10, 12), (result) => {
    //     // expect(result.index).toBe(16);
    //     // expect(result.text).toBe("5 giờ chiều nay");

    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(10);
    //     expect(result.start.get("hour")).toBe(17);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 17));
    // });

//     testSingleCase(chrono.vi, "vào trưa mai", new Date(2012, 8 - 1, 10, 14), (result) => {
//         expect(result.start.get("year")).toBe(2012);
//         expect(result.start.get("month")).toBe(8);
//         expect(result.start.get("day")).toBe(11);
//         expect(result.start.get("hour")).toBe(12);

//         expect(result.start).toBeDate(new Date(2012, 8 - 1, 11, 12));
//     });
// });

test("Test - Casual date range", () => {
    testSingleCase(chrono.vi, "The event is hôm nay - thứ sáu tới", new Date(2012, 7, 4, 12), (result) => {
        expect(result.index).toBe(13);
        expect(result.text).toBe("hôm nay - thứ sáu tới");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(4);
        expect(result.start.get("hour")).toBe(12);

        expect(result.start).toBeDate(new Date(2012, 7, 4, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2012);
        expect(result.end.get("month")).toBe(8);
        expect(result.end.get("day")).toBe(10);
        expect(result.end.get("hour")).toBe(12);

        expect(result.end).toBeDate(new Date(2012, 7, 10, 12));
    });

    testSingleCase(chrono.vi, "The event is hôm nay đến thứ sáu tới", new Date(2012, 7, 10, 12), (result) => {
        expect(result.index).toBe(13);
        expect(result.text).toBe("hôm nay đến thứ sáu tới");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(10);
        expect(result.start.get("hour")).toBe(12);

        expect(result.start).toBeDate(new Date(2012, 7, 10, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get("year")).toBe(2012);
        expect(result.end.get("month")).toBe(8);
        expect(result.end.get("day")).toBe(17);
        expect(result.end.get("hour")).toBe(12);

        expect(result.end).toBeDate(new Date(2012, 7, 17, 12));
    });
    // testSingleCase(chrono.vi, "The event is hôm nay - thứ sáu tuần này", new Date(2012, 7, 10, 12), (result) => {
    //     expect(result.index).toBe(13);
    //     expect(result.text).toBe("hôm nay - thứ sáu tuần này");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(8);
    //     expect(result.start.get("day")).toBe(10);
    //     expect(result.start.get("hour")).toBe(12);

    //     expect(result.start).toBeDate(new Date(2012, 7, 10, 12));

    //     expect(result.end).not.toBeNull();
    //     expect(result.end.get("year")).toBe(2012);
    //     expect(result.end.get("month")).toBe(8);
    //     expect(result.end.get("day")).toBe(17);
    //     expect(result.end.get("hour")).toBe(12);

    //     expect(result.end).toBeDate(new Date(2012, 7, 17, 12));
    // });
});

test("Test - Casual time implication", () => {
    testSingleCase(
        chrono.vi,
        "annual leave từ 8:00 hôm nay - 9:00 ngày mai",
        new Date(2012, 8 - 1, 4, 12),
        (result) => {
            expect(result.text).toBe("8:00 hôm nay - 9:00 ngày mai");

            expect(result.start.get("month")).toBe(8);
            expect(result.start.get("day")).toBe(4);
            expect(result.start.get("hour")).toBe(8);
            // expect(result.start.isCertain("hour")).toBe(false);

            expect(result.end.get("month")).toBe(8);
            expect(result.end.get("day")).toBe(5);
            expect(result.end.get("hour")).toBe(9);
            // expect(result.end.isCertain("hour")).toBe(false);
        }
    );

    testSingleCase(
        chrono.vi,
        "annual leave từ hôm nay - mai",
        new Date(2012, 8 - 1, 4, 12),
        (result) => {
            expect(result.text).toBe("hôm nay - mai");

            expect(result.start.get("month")).toBe(8);
            expect(result.start.get("day")).toBe(4);
            expect(result.start.get("hour")).toBe(12);
            // expect(result.start.isCertain("hour")).toBe(false);

            expect(result.end.get("month")).toBe(8);
            expect(result.end.get("day")).toBe(5);
            expect(result.end.get("hour")).toBe(12);
            // expect(result.end.isCertain("hour")).toBe(false);
        }
    );
});
test("Test - Kiểm tra thời gian tạo công việc", () => {
    testSingleCase(
        chrono.vi,
        "Tạo công việc từ hôm nay đến mai",
        new Date(2021, 3 - 1, 20),
        (result) => {
            // expect(result.text).toBe("8 giờ sáng hôm nay đến 11 giờ sáng mai");

            expect(result.start.get("month")).toBe(3);
            expect(result.start.get("day")).toBe(20);
            // expect(result.start.get("hour")).toBe(8);
            // expect(result.start.isCertain("hour")).toBe(false);

            expect(result.end.get("month")).toBe(3);
            expect(result.end.get("day")).toBe(21);
            // expect(result.end.get("hour")).toBe(11);
            // expect(result.end.isCertain("hour")).toBe(false);
        }
    );
});

test("Test - Kiểm tra thời gian tạo công việc -", () => {
    testSingleCase(
        chrono.vi,
        "Tạo công việc từ hôm nay - mai",
        new Date(2021, 3 - 1, 20),
        (result) => {
            // expect(result.text).toBe("8 giờ sáng hôm nay đến 11 giờ sáng mai");

            expect(result.start.get("month")).toBe(3);
            expect(result.start.get("day")).toBe(20);
            // expect(result.start.get("hour")).toBe(8);
            // expect(result.start.isCertain("hour")).toBe(false);

            expect(result.end.get("month")).toBe(3);
            expect(result.end.get("day")).toBe(21);
            // expect(result.end.get("hour")).toBe(11);
            // expect(result.end.isCertain("hour")).toBe(false);
        }
    );
});
test("Test - Kiểm tra thời gian tạo công việc 3", () => {
    testSingleCase(
        chrono.vi,
        "Tạo công việc từ 8AM hôm nay đến 9PM mai",
        new Date(2021, 3 - 1, 20),
        (result) => {
            // expect(result.text).toBe("8 giờ sáng hôm nay đến 11 giờ sáng mai");

            expect(result.start.get("month")).toBe(3);
            expect(result.start.get("day")).toBe(20);
            expect(result.start.get("hour")).toBe(8);
            // expect(result.start.isCertain("hour")).toBe(false);

            expect(result.end.get("month")).toBe(3);
            expect(result.end.get("day")).toBe(21);
            expect(result.end.get("hour")).toBe(21);
            // expect(result.end.isCertain("hour")).toBe(false);
        }
    );
});
test("Test - Random text", () => {
    // testSingleCase(chrono.vi, "tối nay", new Date(2012, 1 - 1, 1, 12), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(1);
    //     expect(result.start.get("day")).toBe(1);
    //     expect(result.start.get("hour")).toBe(22);
    //     expect(result.start.get("meridiem")).toBe(Meridiem.PM);
    // });

    // testSingleCase(chrono.vi, "8 giờ tối", new Date(2012, 1 - 1, 1, 12), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("hour")).toBe(20);
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(1);
    //     expect(result.start.get("day")).toBe(1);
    //     expect(result.start.get("meridiem")).toBe(Meridiem.PM);
    // });

    // testSingleCase(chrono.vi, "8 giờ", new Date(2012, 1 - 1, 1, 12), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("hour")).toBe(20);
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(1);
    //     expect(result.start.get("day")).toBe(1);
    //     expect(result.start.get("meridiem")).toBe(Meridiem.PM);
    // });

    // testSingleCase(chrono.vi, "tomorrow before 4pm", new Date(2012, 1 - 1, 1, 12), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("hour")).toBe(16);
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(1);
    //     expect(result.start.get("day")).toBe(2);
    //     expect(result.start.get("meridiem")).toBe(Meridiem.PM);
    // });

    // testSingleCase(chrono.vi, "tomorrow after 4pm", new Date(2012, 1 - 1, 1, 12), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("hour")).toBe(16);
    //     expect(result.start.get("year")).toBe(2012);
    //     expect(result.start.get("month")).toBe(1);
    //     expect(result.start.get("day")).toBe(2);
    //     expect(result.start.get("meridiem")).toBe(Meridiem.PM);
    // });

    testSingleCase(chrono.vi, "thứ năm", (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("weekday")).toBe(4);
    });

    testSingleCase(chrono.vi, "thứ 5", (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("weekday")).toBe(4);
    });

    testSingleCase(chrono.vi, "tối nay", new Date(2016, 10 - 1, 1), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("day")).toBe(1);
        // expect(result.start.get("hour")).toBe(20);
    });

    // testSingleCase(chrono.vi, "chiều qua", new Date(2016, 10 - 1, 1), (result, text) => {
    //     // expect(result.text).toBe(text);
    //     expect(result.start.get("year")).toBe(2016);
    //     expect(result.start.get("month")).toBe(9);
    //     expect(result.start.get("day")).toBe(30);
    //     // expect(result.start.get("hour")).toBe(15);
    // });

    testSingleCase(chrono.vi, "mai", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("year")).toBe(2016);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("day")).toBe(2);
        // expect(result.start.get("hour")).toBe(6);
    });

    // testSingleCase(chrono.vi, "3 giờ chiều nay", new Date(2016, 10 - 1, 1, 8), (result, text) => {
    //     expect(result.text).toBe(text);
    //     expect(result.start.get("year")).toBe(2016);
    //     expect(result.start.get("month")).toBe(10);
    //     expect(result.start.get("day")).toBe(1);
    //     expect(result.start.get("hour")).toBe(15);
    // });
});

// test("Test - Casual time with timezone", () => {
//     testSingleCase(chrono, "Jan 1, 2020 Morning UTC", (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(1);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(6);

//         expect(result.start.get("timezoneOffset")).toStrictEqual(0);
//         expect(result).toBeDate(new Date("2020-01-01T06:00:00.000Z"));
//     });

//     testSingleCase(chrono, "Jan 1, 2020 Evening JST", (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(1);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("hour")).toBe(20);

//         expect(result.start.get("timezoneOffset")).toStrictEqual(540);
//         expect(result).toBeDate(new Date("Wed Jan 01 2020 20:00:00 GMT+0900 (Japan Standard Time)"));
//     });
// });

// test("Test - Random negative text", () => {
//     testUnexpectedResult(chrono, "notoday");

//     testUnexpectedResult(chrono, "tdtmr");

//     testUnexpectedResult(chrono, "xyesterday");

//     testUnexpectedResult(chrono, "nowhere");

//     testUnexpectedResult(chrono, "noway");

//     testUnexpectedResult(chrono, "knowledge");

//     testUnexpectedResult(chrono, "mar");

//     testUnexpectedResult(chrono, "jan");
// });
