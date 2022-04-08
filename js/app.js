let menu=document.getElementById('menu')

menu.style.maxHeight='0px'
menu.style.padding='0px'

function opennav(){
    if(menu.style.maxHeight=='0px'){
        menu.style.maxHeight = '160px';
        menu.style.padding='10px 50px 10px 0'
        menu.style.transition='all .7s'
    }else{
        menu.style.maxHeight='0px'
        menu.style.padding='0px'
    }
}