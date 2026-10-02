function hienThiDongHo() {

    var thoiGian = new Date();

    var gio = thoiGian.getHours();
    var phut = thoiGian.getMinutes();
    var giay = thoiGian.getSeconds();

    if (gio < 10) {
        gio = "0" + gio;
    }

    if (phut < 10) {
        phut = "0" + phut;
    }

    if (giay < 10) {
        giay = "0" + giay;
    }

    document.getElementById("dongHo").innerHTML =
        gio + ":" + phut + ":" + giay;
}


// Hiển thị đồng hồ ngay khi mở trang
hienThiDongHo();


// Cập nhật đồng hồ mỗi 1 giây
setInterval(
    hienThiDongHo,
    1000
);