
$('.animate-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: '40px',
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 786,
            settings: {
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px',
            }
        }
    ]
});
const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.getElementById("rotats").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}