var btn = document.getElementById('Nosotros'),
    ele1= document.getElementById('cerrar'),
    ele2= document.getElementById('btn-cerrar'),
    modal= document.getElementById('IdmodalHMTL')
/*variables menu*
const menuInicio = document.querySelector("menuInicio");
const menuProductos= document.querySelector("menuProductos");
const menuContacto= document.querySelector("menuContacto");
const LogoInicio= document.querySelector("LogoInicio");
/*variables article*
/*menuInicio.addEventListener('click',f1,true)
LogoInicio.addEventListener('click',f1,true)
menuProductos.addEventListener('click',f2,true)
menuContacto.addEventListener('click',f3,true)*/

btn.addEventListener('click',Mostrar,true);
ele1.addEventListener('click',Ocultar,true);



function Mostrar(){
    document.getElementById('body').style.overflow = 'hidden';
    ele1.style.display='block';
    ele2.style.display='block';
    ele2.style.visibility= 'visible';
    modal.style.display='block';
    modal.style.visibility= 'visible';
    modal.style.opacity = '1';
}
function Ocultar(){
    ele1.style.display='none';
    ele2.style.display='none';
    ele2.style.visibility= 'hidden';
    modal.style.display='none';
    modal.style.visibility= 'hidden';
    modal.style.opacity = '0';
    document.getElementById('body').style.overflow = 'scroll';
}
/*function OpMenu(opcionMenu){
    document.getElementById('Home').style.display='block';
    document.getElementById('Productos').style.display='none';
    document.getElementById('Contacto').style.display='none';
    alert(opcionMenu+'hola')
    switch(opcionMenu){
        case 1: document.getElementById('Home').style.display='block';
                document.getElementById('Productos').style.display='none';
                document.getElementById('Contacto').style.display='none';
                menuInicio.classList.add('active')
            break;
        case 2: document.getElementById('Home').style.display='none';
                document.getElementById('Productos').style.display='block';
                document.getElementById('Contacto').style.display='none';
                menuProductos.classList.add('active')
            break;
        case 3: document.getElementById('Home').style.display='none';
                document.getElementById('Productos').style.display='none';
                document.getElementById('Contacto').style.display='block';
                menuContacto.classList.add('active')
            break;
        default:
            break;
    }
}*/