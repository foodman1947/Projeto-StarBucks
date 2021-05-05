var img1 = document.getElementById('im1'), img2 = document.getElementById('im2'), img3 = document.getElementById('im3');
var vuvu = document.getElementById('bubu');
var gugu = document.getElementById('tutu');

img1.addEventListener('click',function(){
    gugu.style.marginTop = '0px';
    vuvu.style.backgroundColor = "#2a7242";
    gugu.style.backgroundImage = "url('img/img1.png')";
    gugu.style.transform = "rotate(0deg)";

    
});
img2.addEventListener('click',function(){
    gugu.style.marginTop = '0px';
    vuvu.style.backgroundColor = "#e76a89";
    gugu.style.backgroundImage = "url('img/img2.png')";
    gugu.style.transform = "rotate(0deg)";

    
});
img3.addEventListener('click',function(){
    vuvu.style.backgroundColor = "#bf2d95";
    gugu.style.backgroundImage = "url('img/img3.png')";
    gugu.style.transform = "rotate(-15deg)";
    gugu.style.marginTop = '-80px';

});