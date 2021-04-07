import * as chrono from "../../src";
import { testSingleCase, testUnexpectedResult } from "../test_util";
import { Meridiem } from "../../src";
test("Test - Date Time giờ phút giây", function () {
    testSingleCase(chrono.vi, "hôm nay 11AM", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(11);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
    });
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
        expect(result.end.get("meridiem")).toBe(Meridiem.PM);
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
        expect(result.end.get("meridiem")).toBe(Meridiem.PM);
    });
});
test("Test - Date Time hôm nay", function () {
    testSingleCase(chrono.vi, "từ hôm nay lúc 11AM đến mai lúc 12PM", new Date(2016, 10 - 1, 1, 8), (result, text) => {
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
        expect(result.end.get("meridiem")).toBe(Meridiem.PM);
    });
    
});
// test("Test - Time hôm nay", function () {
//     testSingleCase(chrono.vi, "từ 10 giờ 20 phút 30 giây đến 13 giờ 20 phút 30 giây", new Date(2016, 10 - 1, 1, 8), (result, text) => {
//         // expect(result.text).toBe(text);
//         expect(result.start.get("hour")).toBe(10);
//         expect(result.start.get("minute")).toBe(20);
//         expect(result.start.get("second")).toBe(30);

//         expect(result.end.get("hour")).toBe(13);
//         expect(result.end.get("minute")).toBe(20);
//         expect(result.end.get("second")).toBe(30);
//     });
// });
// test("Test - Date hôm nay", function () {
//     testSingleCase(chrono.vi, "từ ngày 12 tháng 2 năm 2020 đến ngày 13 tháng 2 2020", new Date(2016, 10 - 1, 1, 8), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(2);
//         expect(result.start.get("day")).toBe(12);

//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(2);
//         expect(result.start.get("day")).toBe(13);
//     });
// });
// test("Test - Date", function () {
//     testSingleCase(chrono.vi, "từ ngày 12 đến ngày 13/2/2020", new Date(2016, 10 - 1, 1, 8), (result, text) => {
//         // expect(result.text).toBe(text);
//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(2);
//         expect(result.start.get("day")).toBe(12);

//         expect(result.start.get("year")).toBe(2020);
//         expect(result.start.get("month")).toBe(2);
//         expect(result.start.get("day")).toBe(13);
//     });
// });
test("Test - Date Time 11 hôm nay", function () {
    testSingleCase(chrono.vi, "11 hôm nay đến 12 mai", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(11);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);

        expect(result.end.get("hour")).toBe(12);
        expect(result.end.get("minute")).toBe(0);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.end.get("meridiem")).toBe(Meridiem.PM);

    });
    
});
// test("Test - Date Time 11 giờ hôm nay", function () {
//     testSingleCase(chrono.vi, "11 giờ hôm nay đến 12 giờ mai", new Date(2016, 10 - 1, 1, 8), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("hour")).toBe(11);
//         expect(result.start.get("minute")).toBe(0);
//         expect(result.start.get("second")).toBe(0);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("meridiem")).toBe(Meridiem.AM);

//         expect(result.end.get("hour")).toBe(12);
//         expect(result.end.get("minute")).toBe(0);
//         expect(result.end.get("second")).toBe(0);
//         expect(result.end.get("day")).toBe(2);
//         expect(result.start.get("meridiem")).toBe(Meridiem.AM);

//     });
    
// });
test("Test - Date Time 11 giờ hôm nay", function () {
    testSingleCase(chrono.vi, "11 tối hôm nay đến 11 sáng mai", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(23);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.PM);

        expect(result.end.get("hour")).toBe(11);
        expect(result.end.get("minute")).toBe(0);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});

test("Test - Date Time 11 giờ hôm nay", function () {
    testSingleCase(chrono.vi, "11 tối hôm nay đến 11 sáng mai", new Date(2016, 10 - 1, 1, 8), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(23);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.PM);

        expect(result.end.get("hour")).toBe(11);
        expect(result.end.get("minute")).toBe(0);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHmmDDMMYY", function () {
    testSingleCase(chrono.vi, "bắt đầu từ 5 giờ 10 phút đến 9 giờ 20 phút ngày 25 tháng 3 năm 2021", new Date(2016, 10 - 1, 1, 11), (result, text) => {
        // expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(5);
        expect(result.start.get("minute")).toBe(10);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(20);
        expect(result.start).toBeDate(new Date(2021, 3 - 1, 25, 5, 10, 0));
        expect(result.end).toBeDate(new Date(2021, 3 - 1, 25, 9, 20, 0));
    });
});
// test("Test - DDMMYY HHmm ngày 25 tháng 3 năm 2021 lúc 5 giờ 0 phút", function () {
//     testSingleCase(chrono.vi, "Dương làm việc ngày 25 tháng 3 năm 2021 lúc 5 giờ 0 phút ", new Date(2016, 10 - 1, 1, 11), (result, text) => {
        
//         expect(result).toBeDate(new Date(2021, 3 - 1, 25, 5, 0, 0));

//     });
// });
test("Test - HHmmDDMMYY", function () {
    testSingleCase(chrono.vi, "bắt đầu từ 7:30 đến 9:30 hôm nay", new Date(2016, 10 - 1, 1, 11), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(1);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);
        // expect(result.start.get("day")).toBe(1);
        // expect(result.start.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM 8 giờ 10 phút đến 9 giờ 20 phút", function () {
    testSingleCase(chrono.vi, "8 giờ 10 phút đến 9 giờ 20 phút", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(8);
        expect(result.start.get("minute")).toBe(10);
        expect(result.start.get("second")).toBe(0);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(20);
        expect(result.end.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("day")).toBe(1);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
    });
});
test("Test - HHMM 8 giờ đến 9 giờ 20 phút", function () {
    testSingleCase(chrono.vi, "8 giờ đến 9 giờ 20 phút", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start.get("hour")).toBe(8);
        expect(result.start.get("minute")).toBe(0);
        expect(result.start.get("second")).toBe(0);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(20);
        expect(result.end.get("second")).toBe(0);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("day")).toBe(1);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
    });
});
// test("Test - HHMM 8 giờ 10 phút nay đến 9 giờ 20 phút mai", function () {
//     testSingleCase(chrono.vi, "8 giờ 10 phút nay đến 9 giờ 20 phút mai", new Date(2016, 10 - 1, 1, 6), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("hour")).toBe(8);
//         expect(result.start.get("minute")).toBe(10);
//         expect(result.start.get("second")).toBe(0);
//         expect(result.end.get("hour")).toBe(9);
//         expect(result.end.get("minute")).toBe(20);
//         expect(result.end.get("second")).toBe(0);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.end.get("day")).toBe(1);
//         expect(result.end.get("month")).toBe(10);
//         expect(result.end.get("year")).toBe(2016);
//     });
// });
// test("Test - HHMM 8 giờ 10 phút đến 9 giờ 20 phút hôm nay", function () {
//     testSingleCase(chrono.vi, "8 giờ 10 phút đến 9 giờ 20 phút hôm nay", new Date(2016, 10 - 1, 1, 6), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("hour")).toBe(8);
//         expect(result.start.get("minute")).toBe(10);
//         expect(result.start.get("second")).toBe(0);
//         expect(result.end.get("hour")).toBe(9);
//         expect(result.end.get("minute")).toBe(20);
//         expect(result.end.get("second")).toBe(0);
//         expect(result.start.get("day")).toBe(1);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.end.get("day")).toBe(1);
//         expect(result.end.get("month")).toBe(10);
//         expect(result.end.get("year")).toBe(2016);
//     });
// });
// test("Test - HHMM 8 giờ 10 phút đến 9 giờ 20 phút tối", function () {
//     testSingleCase(chrono.vi, "8 giờ 10 phút sáng đến 9 giờ 20 phút tối", new Date(2016, 10 - 1, 1, 6), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start.get("hour")).toBe(8);
//         expect(result.start.get("minute")).toBe(10);
//         expect(result.start.get("second")).toBe(0);
//         expect(result.end.get("hour")).toBe(21);
//         expect(result.end.get("minute")).toBe(20);
//         expect(result.end.get("second")).toBe(0);

//     });
// });
test("Test - HHMM từ 7:30 đến 9:30 hôm nay", function () {
    testSingleCase(chrono.vi, 
        "Giải chạy nhằm tạo sân chơi lành mạnh, bổ ích cho sinh viên; thúc đẩy tinh thần tự giác, từng bước hình thành thói quen rèn luyện thể thao, nâng cao sức khỏe thể chất cho sinh viên; tăng cường sức đề kháng của mỗi cá nhân và cả cộng đồng, góp phần đẩy lùi dịch bệnh."+
        "Thời gian bắt đầu từ 7:30 đến 9:30 hôm nay. Đồng thời tạo môi trường cho sinh viên rèn luyện hoàn thiện tiêu chí “thể lực tốt” khi xét danh hiệu Sinh viên 5 tốt cấp Trường và tiêu chí “Tham gia các giải thể thao do Trường, Viện và các đơn vị hợp pháp tổ chức” khi đánh giá kết quả rèn luyện.", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(1);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM từ 7:30 đến 9:30 mai", function () {
    testSingleCase(chrono.vi, 
        "Giải chạy nhằm tạo sân chơi lành mạnh, bổ ích cho sinh viên; thúc đẩy tinh thần tự giác, từng bước hình thành thói quen rèn luyện thể thao, nâng cao sức khỏe thể chất cho sinh viên; tăng cường sức đề kháng của mỗi cá nhân và cả cộng đồng, góp phần đẩy lùi dịch bệnh."+
        "Thời gian bắt đầu từ 7:30 đến 9:30 mai. Đồng thời tạo môi trường cho sinh viên rèn luyện hoàn thiện tiêu chí “thể lực tốt” khi xét danh hiệu Sinh viên 5 tốt cấp Trường và tiêu chí “Tham gia các giải thể thao do Trường, Viện và các đơn vị hợp pháp tổ chức” khi đánh giá kết quả rèn luyện.", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(2);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM từ 7:30 nay đến 9:30 mai", function () {
    testSingleCase(chrono.vi, 
        "Giải chạy nhằm tạo sân chơi lành mạnh, bổ ích cho sinh viên; thúc đẩy tinh thần tự giác, từng bước hình thành thói quen rèn luyện thể thao, nâng cao sức khỏe thể chất cho sinh viên; tăng cường sức đề kháng của mỗi cá nhân và cả cộng đồng, góp phần đẩy lùi dịch bệnh."+
        "Thời gian bắt đầu từ 7:30 nay đến 9:30 mai. Đồng thời tạo môi trường cho sinh viên rèn luyện hoàn thiện tiêu chí “thể lực tốt” khi xét danh hiệu Sinh viên 5 tốt cấp Trường và tiêu chí “Tham gia các giải thể thao do Trường, Viện và các đơn vị hợp pháp tổ chức” khi đánh giá kết quả rèn luyện.", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(2);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM từ 7:30 đến 9:30 thứ sáu", function () {
    testSingleCase(chrono.vi, 
        "Giải chạy nhằm tạo sân chơi lành mạnh, bổ ích cho sinh viên; thúc đẩy tinh thần tự giác, từng bước hình thành thói quen rèn luyện thể thao, nâng cao sức khỏe thể chất cho sinh viên; tăng cường sức đề kháng của mỗi cá nhân và cả cộng đồng, góp phần đẩy lùi dịch bệnh."+
        "Thời gian bắt đầu từ 7:30 đến 9:30 thứ sáu. Đồng thời tạo môi trường cho sinh viên rèn luyện hoàn thiện tiêu chí “thể lực tốt” khi xét danh hiệu Sinh viên 5 tốt cấp Trường và tiêu chí “Tham gia các giải thể thao do Trường, Viện và các đơn vị hợp pháp tổ chức” khi đánh giá kết quả rèn luyện.", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(30);
        expect(result.start.get("month")).toBe(9);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(30);
        expect(result.end.get("month")).toBe(9);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM từ 7:30 đến 9:30 thứ sáu tới", function () {
    testSingleCase(chrono.vi, 
        "Thời gian bắt đầu từ 7:30 đến 9:30 thứ sáu tới", new Date(2016, 10 - 1, 1, 6), (result, text) => {
        expect(result.start.get("hour")).toBe(7);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(7);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(7);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
test("Test - HHMM từ 7:30 đến 9:30 thứ sáu tới", function () {
    testSingleCase(chrono.vi, 
        "Thời gian bắt đầu từ 1 giờ sau đến 9:30 thứ sáu tới", new Date(2016, 10 - 1, 1, 8, 30, 0, 0), (result, text) => {
        expect(result.start.get("hour")).toBe(9);
        expect(result.start.get("minute")).toBe(30);
        expect(result.start.get("second")).toBe(0);
        // expect(result.start.get("meridiem")).toBe(Meridiem.AM);
        expect(result.start.get("day")).toBe(1);
        expect(result.start.get("month")).toBe(10);
        expect(result.start.get("year")).toBe(2016);
        expect(result.end.get("hour")).toBe(9);
        expect(result.end.get("minute")).toBe(30);
        expect(result.end.get("second")).toBe(0);
        expect(result.end.get("day")).toBe(7);
        expect(result.end.get("month")).toBe(10);
        expect(result.end.get("year")).toBe(2016);
        expect(result.end.get("meridiem")).toBe(Meridiem.AM);

    });
});
// test("Test - HHMM từ 7 giờ 30 phút đến 9 giờ 30 phút thứ sáu tới", function () {
//     testSingleCase(chrono.vi, 
//         "Thời gian bắt đầu từ 7 giờ 30 phút đến 9 giờ 30 phút thứ sáu tới", new Date(2016, 10 - 1, 1, 6), (result, text) => {
//         expect(result.start.get("hour")).toBe(7);
//         expect(result.start.get("minute")).toBe(30);
//         expect(result.start.get("second")).toBe(0);
//         expect(result.start.get("meridiem")).toBe(Meridiem.AM);
//         expect(result.start.get("day")).toBe(7);
//         expect(result.start.get("month")).toBe(10);
//         expect(result.start.get("year")).toBe(2016);
//         expect(result.end.get("hour")).toBe(9);
//         expect(result.end.get("minute")).toBe(30);
//         expect(result.end.get("second")).toBe(0);
//         expect(result.end.get("day")).toBe(7);
//         expect(result.end.get("month")).toBe(10);
//         expect(result.end.get("year")).toBe(2016);
//         expect(result.end.get("meridiem")).toBe(Meridiem.AM);

//     });
// });
test("Test - Date to date ngày 2 tháng 4 năm 2021", function () {
    testSingleCase(chrono.vi, "ngày 2 tháng 4 năm 2021", new Date(2016, 10 - 1, 1, 5), (result, text) => {
        expect(result.text).toBe(text);
        expect(result).toBeDate(new Date(2021, 4 - 1, 2, 6));

    });
});
test("Test - Date to date ngày 1 tháng 10 năm 2016 đến ngày 3 tháng 10 năm 2016", function () {
    testSingleCase(chrono.vi, "ngày 1 tháng 10 năm 2016 đến ngày 3 tháng 10 năm 2016", new Date(2016, 10 - 1, 1, 5), (result, text) => {
        expect(result.text).toBe(text);
        expect(result.start).toBeDate(new Date(2016, 10 - 1, 1, 6));
        expect(result.end).toBeDate(new Date(2016, 10 - 1, 3, 6));

    });
});
// test("Test - Date to date ngày 1 tháng 10 năm 2016 đến ngày 3 tháng 10 năm 2016", function () {
//     testSingleCase(chrono.vi, "6 giờ 30 phút ngày 1 tháng 10 năm 2016 đến 6 giờ 30 phút ngày 3 tháng 10 năm 2016", new Date(2016, 10 - 1, 1, 5), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start).toBeDate(new Date(2016, 10 - 1, 1, 6 , 30));
//         expect(result.end).toBeDate(new Date(2016, 10 - 1, 3, 6,30));

//     });
// });
// test("Test - Date to date ngày 1 tháng 10 năm 2016 đến ngày 3 tháng 10 năm 2016", function () {
//     testSingleCase(chrono.vi, "6:30 ngày 1 tháng 10 năm 2016 đến 6:30 ngày 3 tháng 10 năm 2016", new Date(2016, 10 - 1, 1, 5), (result, text) => {
//         expect(result.text).toBe(text);
//         expect(result.start).toBeDate(new Date(2016, 10 - 1, 1, 6 , 30));
//         expect(result.end).toBeDate(new Date(2016, 10 - 1, 3, 6,30));

//     });
// });