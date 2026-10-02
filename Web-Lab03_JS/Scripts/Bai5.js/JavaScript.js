var progressBar =
    document.getElementById("progressBar");

var phanTram =
    document.getElementById("phanTram");

var btnStart =
    document.getElementById("btnStart");


// Biến lưu tiến trình

var progress = 0;


// Biến lưu ID của setInterval

var interval;

function chayProgress() {

    // Tăng tiến trình

    progress++;


    // Cập nhật chiều rộng thanh progress

    progressBar.style.width =
        progress + "%";


    // Hiển thị phần trăm trên thanh

    progressBar.innerHTML =
        progress + "%";


    // Hiển thị phần trăm bên dưới

    phanTram.innerHTML =
        progress + "%";


    // Khi đạt 100%

    if (progress >= 100) {

        clearInterval(interval);

        btnStart.disabled = false;

        btnStart.innerHTML =
            "Start";

    }
}

function batDau() {

    if (progress >= 100) {

        progress = 0;

        progressBar.style.width =
            "0%";

        progressBar.innerHTML =
            "0%";

        phanTram.innerHTML =
            "0%";
    }

    clearInterval(interval);

    interval = setInterval(
        chayProgress,
        100
    );


    btnStart.disabled = true;

    btnStart.innerHTML =
        "Đang chạy...";
}

btnStart.addEventListener(
    "click",
    function () {

        batDau();

    }
);