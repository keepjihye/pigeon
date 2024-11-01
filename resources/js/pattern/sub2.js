$(".dep2-btn").on({
    click: function () {
        $('.dep2-dropbtn').addClass("active");
        $('.dep2-lst').slideDown();
    },
    mouseleave: function () {
        $('.dep2-dropbtn').removeClass("active");
        $('.dep2-lst').slideUp();
    }

});

