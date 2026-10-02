var txtCongViec =
    document.getElementById("txtCongViec");

var btnThem =
    document.getElementById("btnThem");

var danhSachCongViec =
    document.getElementById("danhSachCongViec");

function themCongViec() {

    var noiDung =
        txtCongViec.value.trim();


    // Không cho phép công việc rỗng

    if (noiDung === "") {

        alert("Vui lòng nhập công việc");

        return;
    }


    // Tạo phần tử li

    var li =
        document.createElement("li");


    // Tạo phần tử chứa nội dung công việc

    var span =
        document.createElement("span");


    span.className =
        "cong-viec";

    span.innerHTML =
        noiDung;

    span.addEventListener(
        "click",
        function () {

            li.classList.toggle(
                "hoanThanh"
            );

        }
    );

    var btnXoa =
        document.createElement("button");


    btnXoa.type =
        "button";

    btnXoa.className =
        "btnXoa";

    btnXoa.innerHTML =
        "Xóa";

    btnXoa.addEventListener(
        "click",
        function () {

            li.remove();

        }
    );


    // Thêm nội dung vào li

    li.appendChild(span);

    li.appendChild(btnXoa);


    // Thêm li vào danh sách

    danhSachCongViec.appendChild(li);


    // Xóa nội dung textbox

    txtCongViec.value = "";


    // Đưa con trỏ về textbox

    txtCongViec.focus();
}

btnThem.addEventListener(
    "click",
    function () {

        themCongViec();

    }
);

txtCongViec.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            themCongViec();

        }

    }
);