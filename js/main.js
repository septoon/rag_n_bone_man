// $(".prev").click(function() {
//   $( ".rag_wrap" ).toggle( "slide" );
// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlide");
    
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}   

const flashingObjects = () => {
    for (let i=1; i < 999; i++) {
        $(".elips").fadeOut(2800).fadeIn(2600);
        $(".plus").fadeOut(2400).fadeIn(2200);
        $(".lines-dot").fadeOut(2400).fadeIn(2200);
        $(".line-dot-circle").fadeOut(2200).fadeIn(2000);
        $(".tringles").fadeOut(2300).fadeIn(2100);
        $(".plus-dots").fadeOut(2100).fadeIn(1900);
        $(".light-blue").fadeOut(2700).fadeIn(2500);
    }
};
window.setTimeout( flashingObjects, 1500 );

// Slider
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlide(n) {
//     showSlides(slideIndex += n);
// };

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// };

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
    
//     if (n > slides.length) {
//         slideIndex = 1;
//     } 
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
// };













// Automatic slideShow

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// } 
