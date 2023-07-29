$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    let ka = $(".kertas-artikel");

    $(".cari").on("keyup", (event) => {
        let val = $(".cari").val().toLowerCase();

        for (let i = 0; i < ka.length; i++) {
            const ak = ka[i];
            let aka = $(ak).find(".judul-artikel").text().toLowerCase();
            if (val != "") {
                if (aka.includes(val)) {
                    if (event.key === "Enter") {
                        $(".hasil").removeClass("hide");
                        $(".hasil").append('<a href=""><div class="kertas-hasil"><div class="img-hasil"><img src="' + $(ak).find(".img-artikel-img").attr("src") + '" alt=""></div><div class="teks-hasil"><h2 class="judul-hasil">' + $(ak).find(".judul-artikel").text() + '</h2><p class="prev-hasil"></p></div></div></a>')
                    }
                }
            } else {
                $(".hasil").addClass("hide");
                $(".hasil").empty()
            }
        }
    });

    $(".close-gb").click((e) => {
        e.preventDefault();
        $(".daftar-masuk").addClass("hide");
        $(".in-same").val("");
    });

    $(".logreg").click((e) => {
        e.preventDefault();
        $(".daftar-masuk").removeClass("hide");
    });

    $(".in").click(function (e) {
        e.preventDefault();
        $(".gerbang-masuk").removeClass("clsd");
        $(".gerbang-daftar").addClass("clsd");
        $(".in").addClass("hide");
        $(".up").removeClass("hide");
        $(".upup").addClass("hide");
        $(".inin").removeClass("hide");

    });

    $(".up").click(function (e) {
        e.preventDefault();
        $(".gerbang-masuk").addClass("clsd");
        $(".gerbang-daftar").removeClass("clsd");
        $(".up").addClass("hide");
        $(".in").removeClass("hide");
        $(".inin").addClass("hide");
        $(".upup").removeClass("hide");
    });
});
