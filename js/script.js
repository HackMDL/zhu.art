$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
});

$(function () {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById('myImg1');
    img1.onclick = showImg;
    var img2 = document.getElementById('myImg2');
    img2.onclick = showImg;
    var img3 = document.getElementById('myImg3');
    img3.onclick = showImg;
    var img4 = document.getElementById('myImg4');
    img4.onclick = showImg;
    var img5 = document.getElementById('myImg5');
    img5.onclick = showImg;
    var img6 = document.getElementById('myImg6');
    img6.onclick = showImg;
    var img7 = document.getElementById('myImg7');
    img7.onclick = showImg;
    var img8 = document.getElementById('myImg8');
    img8.onclick = showImg;
    var img9 = document.getElementById('myImg9');
    img9.onclick = showImg;
    var img10 = document.getElementById('myImg10');
    img10.onclick = showImg;
    var img11 = document.getElementById('myImg11');
    img11.onclick = showImg;
    var img12 = document.getElementById('myImg12');
    img12.onclick = showImg;
    var img13 = document.getElementById('myImg13');
    img13.onclick = showImg;
    var img14 = document.getElementById('myImg14');
    img14.onclick = showImg;
    var img15 = document.getElementById('myImg15');
    img15.onclick = showImg;
    var img16 = document.getElementById('myImg16');
    img16.onclick = showImg;
    var img17 = document.getElementById('myImg17');
    img17.onclick = showImg;
    var img18 = document.getElementById('myImg18');
    img18.onclick = showImg;
    var img19 = document.getElementById('myImg19');
    img19.onclick = showImg;
    var img20 = document.getElementById('myImg20');
    img20.onclick = showImg;
    var img21 = document.getElementById('myImg21');
    img21.onclick = showImg;

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    function showImg() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
});

$(function () {
    // Get the modal
    var modal = document.getElementById('myModal1');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById('myImg91');
    img1.onclick = showImg;
    var img2 = document.getElementById('myImg92');
    img2.onclick = showImg;
    var img3 = document.getElementById('myImg93');
    img3.onclick = showImg;
    var img4 = document.getElementById('myImg94');
    img4.onclick = showImg;
    var img5 = document.getElementById('myImg95');
    img5.onclick = showImg;
    var img6 = document.getElementById('myImg96');
    img6.onclick = showImg;
    var img7 = document.getElementById('myImg97');
    img7.onclick = showImg;
    var img8 = document.getElementById('myImg98');
    img8.onclick = showImg;
    var img9 = document.getElementById('myImg99');
    img9.onclick = showImg;
    var img10 = document.getElementById('myImg100');
    img10.onclick = showImg;
    var img11 = document.getElementById('myImg110');
    img11.onclick = showImg;
    var img12 = document.getElementById('myImg120');
    img12.onclick = showImg;
    var img13 = document.getElementById('myImg130');
    img13.onclick = showImg;
    var img14 = document.getElementById('myImg140');
    img14.onclick = showImg;
    var img15 = document.getElementById('myImg150');
    img15.onclick = showImg;
    var img16 = document.getElementById('myImg160');
    img16.onclick = showImg;

    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("caption");

    function showImg() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
});

$(function () {
    var responsiveSlider = function () {

        var slider = document.getElementById("slider");
        var sliderWidth = slider.offsetWidth;
        var slideList = document.getElementById("slideWrap");
        var count = 1;
        var items = slideList.querySelectorAll("li").length;
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");

        window.addEventListener('resize', function () {
            sliderWidth = slider.offsetWidth;
        });


        var nextSlide = function () {
            if (count < items) {
                slideList.style.left = "-" + count * sliderWidth + "px";
                count++;
            }
            else if (count = items) {
                slideList.style.left = "0px";
                count = 1;
            }
        };

        var prevSlide = function () {
            if (count > 1) {
                count = count - 2;
                slideList.style.left = "-" + count * sliderWidth + "px";
                count++;
            }
            else if (count = 1) {
                count = items - 1;
                slideList.style.left = "-" + count * sliderWidth + "px";
                count++;
            }
        };
        next.addEventListener("click", function () {
            nextSlide();
        });
        prev.addEventListener("click", function () {
            prevSlide();
        });

        setInterval(function () {
            nextSlide()
        }, 5000);
    }
    window.onload = function () {
        responsiveSlider();
    }


});
