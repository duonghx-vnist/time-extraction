import * as chrono from "../../src";
import { testSingleCase } from "../test_util";

test("Test - Single Expression", function () {
    testSingleCase(chrono.vi, "Thứ hai Dương thực hiện", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Thứ hai");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(6);
        expect(result.start.get("weekday")).toBe(1);

        expect(result.start.isCertain("day")).toBe(false);
        expect(result.start.isCertain("month")).toBe(false);
        expect(result.start.isCertain("year")).toBe(false);
        expect(result.start.isCertain("weekday")).toBe(true);

        expect(result.start).toBeDate(new Date(2012, 7, 6, 12));
    });

    testSingleCase(
        chrono.vi,
        "Thứ hai do Dương thực hiện",
        new Date(2012, 7, 9),
        { forwardDate: true },
        (result) => {
            expect(result.index).toBe(0);
            expect(result.text).toBe("Thứ hai");

            expect(result.start).not.toBeNull();
            expect(result.start.get("year")).toBe(2012);
            expect(result.start.get("month")).toBe(8);
            expect(result.start.get("day")).toBe(13);
            expect(result.start.get("weekday")).toBe(1);

            expect(result.start.isCertain("day")).toBe(false);
            expect(result.start.isCertain("month")).toBe(false);
            expect(result.start.isCertain("year")).toBe(false);
            expect(result.start.isCertain("weekday")).toBe(true);

            expect(result.start).toBeDate(new Date(2012, 7, 13, 12));
        }
    );

    testSingleCase(chrono.vi, "Thứ năm Ánh thực hiện", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Thứ năm");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(9);
        expect(result.start.get("weekday")).toBe(4);

        expect(result.start).toBeDate(new Date(2012, 7, 9, 12));
    });

    testSingleCase(chrono.vi, "Chủ nhật do Dương thực hiện", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Chủ nhật");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(12);
        expect(result.start.get("weekday")).toBe(0);

        expect(result.start).toBeDate(new Date(2012, 7, 12, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is Thứ sáu trước do Dương thực hiện...", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("Thứ sáu trước");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(3);
        expect(result.start.get("weekday")).toBe(5);

        expect(result.start).toBeDate(new Date(2012, 7, 3, 12));
    });

    testSingleCase(chrono.vi, "The Deadline is Thứ sáu trước do Dương thực hiện...", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(16);
        expect(result.text).toBe("Thứ sáu trước");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2012);
        expect(result.start.get("month")).toBe(8);
        expect(result.start.get("day")).toBe(3);
        expect(result.start.get("weekday")).toBe(5);

        expect(result.start).toBeDate(new Date(2012, 7, 3, 12));
    });

    testSingleCase(chrono.vi, "Let's have a meeting vào Thứ sáu tuần sau do Dương thực hiện", new Date(2015, 3, 18), (result) => {
        expect(result.index).toBe(21);
        expect(result.text).toBe("vào Thứ sáu tuần sau");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2015);
        expect(result.start.get("month")).toBe(4);
        expect(result.start.get("day")).toBe(24);
        expect(result.start.get("weekday")).toBe(5);

        expect(result.start).toBeDate(new Date(2015, 3, 24, 12));
    });

    testSingleCase(
        chrono.vi,
        "I plan on taking the day off vào Thứ ba, tuần sau",
        new Date(2015, 3, 18),
        (result) => {
            expect(result.index).toBe(29);
            expect(result.text).toBe("vào Thứ ba, tuần sau");

            expect(result.start).not.toBeNull();
            expect(result.start.get("year")).toBe(2015);
            expect(result.start.get("month")).toBe(4);
            expect(result.start.get("day")).toBe(21);
            expect(result.start.get("weekday")).toBe(2);

            expect(result.start).toBeDate(new Date(2015, 3, 21, 12));
        }
    );
});

test("Test - Weekday With vi Time", function () {
    testSingleCase(chrono.vi, "Lets meet vào Thứ ba sáng", new Date(2015, 3, 18), (result) => {
        expect(result.index).toBe(10);
        expect(result.text).toBe("vào Thứ ba sáng");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2015);
        expect(result.start.get("month")).toBe(4);
        expect(result.start.get("day")).toBe(21);
        expect(result.start.get("weekday")).toBe(2);
        expect(result.start.get("hour")).toBe(12);

        expect(result.start).toBeDate(new Date(2015, 3, 21,12));
    });
});

test("Test - Weekday Overlap", function () {
    testSingleCase(chrono.vi, "Chủ nhật, Tháng 12 7, 2014", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Chủ nhật, Tháng 12 7, 2014");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2014);
        expect(result.start.get("month")).toBe(12);
        expect(result.start.get("day")).toBe(7);
        expect(result.start.get("weekday")).toBe(0);

        expect(result.start.isCertain("day")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("weekday")).toBe(true);

        expect(result.start).toBeDate(new Date(2014, 12 - 1, 7, 12));
    });
    // testSingleCase(chrono.vi, "Chủ nhật, ngày 7 Tháng 12 2014", new Date(2012, 7, 9), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("Chủ nhật, ngày 7 Tháng 12 2014");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2014);
    //     expect(result.start.get("month")).toBe(12);
    //     expect(result.start.get("day")).toBe(7);
    //     expect(result.start.get("weekday")).toBe(0);

    //     expect(result.start.isCertain("day")).toBe(true);
    //     expect(result.start.isCertain("month")).toBe(true);
    //     expect(result.start.isCertain("year")).toBe(true);
    //     expect(result.start.isCertain("weekday")).toBe(true);

    //     expect(result.start).toBeDate(new Date(2014, 12 - 1, 7, 12));
    // });
    // testSingleCase(chrono.vi, "Chủ nhật, ngày 7 Tháng 12 năm 2014", new Date(2012, 7, 9), (result) => {
    //     expect(result.index).toBe(0);
    //     expect(result.text).toBe("Chủ nhật, ngày 7 Tháng 12 năm 2014");

    //     expect(result.start).not.toBeNull();
    //     expect(result.start.get("year")).toBe(2014);
    //     expect(result.start.get("month")).toBe(12);
    //     expect(result.start.get("day")).toBe(7);
    //     expect(result.start.get("weekday")).toBe(0);

    //     expect(result.start.isCertain("day")).toBe(true);
    //     expect(result.start.isCertain("month")).toBe(true);
    //     expect(result.start.isCertain("year")).toBe(true);
    //     expect(result.start.isCertain("weekday")).toBe(true);

    //     expect(result.start).toBeDate(new Date(2014, 12 - 1, 7, 12));
    // });
    testSingleCase(chrono.vi, "7 Tháng 12 2014", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("7 Tháng 12 2014");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2014);
        expect(result.start.get("month")).toBe(12);
        expect(result.start.get("day")).toBe(7);
        // expect(result.start.get("weekday")).toBe(0);

        expect(result.start.isCertain("day")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("year")).toBe(true);
        // expect(result.start.isCertain("weekday")).toBe(true);

        expect(result.start).toBeDate(new Date(2014, 12 - 1, 7, 12));
    });
    testSingleCase(chrono.vi, "Chủ nhật 12/7/2014", new Date(2012, 7, 9), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe("Chủ nhật 12/7/2014");

        expect(result.start).not.toBeNull();
        expect(result.start.get("year")).toBe(2014);
        expect(result.start.get("month")).toBe(12);
        expect(result.start.get("day")).toBe(7);
        expect(result.start.get("weekday")).toBe(0);

        expect(result.start.isCertain("day")).toBe(true);
        expect(result.start.isCertain("month")).toBe(true);
        expect(result.start.isCertain("year")).toBe(true);
        expect(result.start.isCertain("weekday")).toBe(true);

        expect(result.start).toBeDate(new Date(2014, 12 - 1, 7, 12));
    });
    
});

test("Test - forward dates only option", function () {
    testSingleCase(
        chrono.vi,
        "Thứ sáu đến Thứ hai",
        new Date(2016, 8 - 1, 4),
        { forwardDate: true },
        (result) => {
            expect(result.index).toBe(0);
            expect(result.text).toBe("Thứ sáu đến Thứ hai");

            expect(result.start).not.toBeNull();
            expect(result.start.get("year")).toBe(2016);
            expect(result.start.get("month")).toBe(8);
            expect(result.start.get("day")).toBe(5);
            expect(result.start.get("weekday")).toBe(5);

            expect(result.start.isCertain("day")).toBe(false);
            expect(result.start.isCertain("month")).toBe(false);
            expect(result.start.isCertain("year")).toBe(false);
            expect(result.start.isCertain("weekday")).toBe(true);

            expect(result.start).toBeDate(new Date(2016, 8 - 1, 5, 12));

            expect(result.end).not.toBeNull();
            expect(result.end.get("year")).toBe(2016);
            expect(result.end.get("month")).toBe(8);
            expect(result.end.get("day")).toBe(8);
            expect(result.end.get("weekday")).toBe(1);

            expect(result.end.isCertain("day")).toBe(false);
            expect(result.end.isCertain("month")).toBe(false);
            expect(result.end.isCertain("year")).toBe(false);
            expect(result.end.isCertain("weekday")).toBe(true);

            expect(result.end).toBeDate(new Date(2016, 8 - 1, 8, 12));
        }
    );
});
