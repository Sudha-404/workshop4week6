const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel_btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});






$(document).ready(function() {
$(".up").click(function() {
     $('html, body').animate({
         scrollTop: $(".down").offset().top
     }, 1000);
 });
});




$(document).ready(function() {
$(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".up").offset().top
     }, 1500);
 });
});

