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
    gugu.style.marginTop = '-40px';

});


/* amburguer *********************/

let ambur = document.querySelector('div.amburguer');
var barra1 = document.querySelector('div.barra1'), barra2 = document.querySelector('div.barra2');
var submenu = document.querySelector('div.submenu');
var ule = document.querySelector('ul.sumenu');
var lala = false;
ambur.addEventListener('click',function(){
    if(lala == false){
        barra1.style.transition = '0.1s linear';
        barra2.style.transition = '0.1s linear';
        barra1.style.transform = "rotate(-50deg)"
        barra1.style.top = '20px';
        barra1.style.left = '3px';
        barra2.style.transform = "rotate(50deg)"
        barra2.style.top = '15px';
        lala = true;
        submenu.style.marginTop = '56px';
        submenu.style.width = '90%';
        submenu.style.height = '100px';
        window.setTimeout(function() {
            ule.style.display = 'inline-block';
        }, 200);
        

    }else{
        barra1.style.transform = "rotate(0deg)"
        barra1.style.top = '10px';
        barra1.style.left = '0px';
        barra2.style.transform = "rotate(0deg)"
        barra2.style.top = '25px';
        submenu.style.width = '0%';
        submenu.style.height = '0px';
        ule.style.display = 'none';
        lala = false;
        console.log('a')

    };
        
     
});
