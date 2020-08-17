// Importamos la libreria Jquery
// import $ from 'jquery'; 

import "../Sass/style.scss"; //Importamos los archivos de SASS
// import img from '../assets/';

// $(function () {
//     // alert("Estamos listos");
//    $(window).scroll(function () { 
//        var winheight= $(this.window).scrollTop();
//        console.log(winheight);
//        var offset1 = $('#rotate-1').offset();
//        var offset2 = $('#rotate-2').offset();
//        var offset3 = $('#rotate-3').offset();
//        var offset4 = $('#rotate-4').offset();
//        var top1 = offset1.top;
//        var top2 = offset2.top;
//        var top3 = offset3.top;
//        var top4 = offset4.top;
//        if (winheight >= top1-600) {
//            $('#rotate-1').css('animation-play-state', 'running');
//        }
//        if (winheight >= top2-600) {
//         $('#rotate-2').css('animation-play-state', 'running');
//        }
//        if (winheight >= top3-600) {
//         $('#rotate-3').css('animation-play-state', 'running');
//        }
//        if (winheight >= top4-600) {
//         $('#rotate-4').css('animation-play-state', 'running');
//        }

//        var offsetPeople = $('.peoples').offset();
//        var topPeople = offsetPeople.top;

//        if (winheight >= topPeople-600) {
//            $('.rotar-y').css('animation-play-state', 'running');
//            $('.rotar-y-r').css('animation-play-state', 'running');
//        }
//    });
// });


// Trabajaremos solo con JavaScript

// Se carga todo el documento HTML
window.addEventListener('load',inicio);

function inicio() {
    document.getElementById('ccchm').addEventListener('mouseover', zoomImage)
    document.getElementById('ccchm').addEventListener('mouseout', zoomImageno)
}
function zoomImage(){
    document.getElementById('ccchm-image').style.transform="scale(1.3)"
    document.getElementById('ccchm-image').style.transition=".3s"
}
function zoomImageno(){
    document.getElementById('ccchm-image').style.transform="scale(1)"
}