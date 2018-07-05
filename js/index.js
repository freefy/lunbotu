
        var $li = $('.wrapper li');
        var $img = $('.wrapper img');
        var $span = $('.wrapper span');
        var timer = null;

        for (var r = 0; r < 10; r++) {
            for (var c = 0; c < 10; c++) {
                $("<div></div>")
                    .css({
                        "background-position": -56 * c + "px " + -30 * r + "px",
                        "top": 30 * r
                    })
                    .appendTo(".org");
            }
        }
        var index = 0;
        var $org = $('.org div');
        var lock = true;
        $('.left_btn').click(function () {
            if (!lock) return;
            index--;
            if (index < 0) {
                index = 4;
            }
            turn();
        })
        $('.right_btn').click(function () {
            if (!lock) return;
            index++;
            if (index > 4) {
                index = 0;
            }
            turn();
        })
        $span.click(function () {
            var lastindex = index;
            var nowindex = $(this).index();
            if (lastindex == nowindex) {
                return;
            }
            index = nowindex;
            turn();
        })
        $('.wrapper').mouseenter(function () {
            clearInterval(timer);
        })
        $('.wrapper').mouseleave(function () {
            autoMove();
        })

        function turn() {
            $org.css("background-image", "url(" + $img.eq(index).attr("src") + ")")
            $org.each(function (ele) {
                $(this).delay(ele % 10 * 56 + parseInt(ele / 10) * 30).animate({
                    "left": ele % 10 * 56,
                    "top": parseInt(ele / 10) * 30
                }, 300)
                lock = false;
            })
            setTimeout(function () {
                $li.eq(index).addClass('active').siblings().removeClass('active');
                $span.eq(index).addClass('active').siblings().removeClass('active');
                $org.css({
                    "left": 1000,
                    "top": 0
                });
                lock = true;
            }, 1200)
        }

        function autoMove() {
            timer = setInterval(function () {
                if (!lock) return;

                index++;
                if (index > 4) {
                    index = 0;
                }
                turn();
            }, 1200)
        }
        autoMove();