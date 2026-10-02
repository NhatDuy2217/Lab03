function kiemTraTextbox(id, tenThongTin) {

    var textbox = document.getElementById(id);

    var thongBao =
        document.getElementById(id + "_error");

    if (textbox.value.trim() === "") {

        thongBao.innerHTML =
            tenThongTin + " không được để trống";

        return false;
    }

    thongBao.innerHTML = "";

    return true;
}

function kiemTraSoDienThoai() {

    var textbox =
        document.getElementById("sodienthoai");

    var thongBao =
        document.getElementById(
            "sodienthoai_error"
        );


    var soDienThoai =
        textbox.value.trim();

    if (!/^\d{10,}$/.test(soDienThoai)) {

        thongBao.innerHTML =
            "Số điện thoại phải từ 10 ký số trở lên";

        return false;
    }

    thongBao.innerHTML = "";

    return true;
}

function chonNoiGiao(loai) {

    if (loai === "vanphong") {

        alert(
            "Bạn chọn giao hàng tại văn phòng"
        );

    }
    else if (loai === "nharieng") {

        alert(
            "Bạn chọn giao hàng tại nhà riêng"
        );
    }
}

function luuThongTin() {

    var hopLe = true;

    if (
        !kiemTraTextbox(
            "ten",
            "Tên"
        )
    ) {

        hopLe = false;
    }

    if (
        !kiemTraTextbox(
            "diachi",
            "Địa chỉ"
        )
    ) {

        hopLe = false;
    }

    if (
        !kiemTraTextbox(
            "tinhthanhpho",
            "Tỉnh/Thành phố"
        )
    ) {

        hopLe = false;
    }

    if (
        !kiemTraTextbox(
            "quanhuyen",
            "Quận/Huyện"
        )
    ) {

        hopLe = false;
    }

    if (
        !kiemTraTextbox(
            "phuongxa",
            "Phường/Xã"
        )
    ) {

        hopLe = false;
    }

    if (!kiemTraSoDienThoai()) {

        hopLe = false;
    }

    if (hopLe) {

        alert(
            "Lưu thông tin thành công"
        );

    }
    else {

        alert(
            "Thông tin nhập không hợp lệ"
        );
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        var btnVanPhong =
            document.getElementById(
                "btnVanPhong"
            );


        btnVanPhong.addEventListener(
            "click",
            function () {

                chonNoiGiao(
                    "vanphong"
                );

            }
        );

        var btnNhaRieng =
            document.getElementById(
                "btnNhaRieng"
            );


        btnNhaRieng.addEventListener(
            "click",
            function () {

                chonNoiGiao(
                    "nharieng"
                );

            }
        );

        var btnLuu =
            document.getElementById(
                "btnLuu"
            );


        btnLuu.addEventListener(
            "click",
            function () {

                luuThongTin();

            }
        );

    }
);