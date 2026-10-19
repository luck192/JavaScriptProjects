// events ;
// function changeText(){
//   let firstpara = document.getElementById('fpara');
//   firstpara.textContent = "hello chnge hogya hai";
// }

// let firstpara = document.getElementById('fpara');

// firstpara.addEventListener('click', changeText,true);

// firstpara.removeEventListener('dblclick',changeText); 

// let anchorEle = document.getElementById('fanchor');

// function clickOn(event){
//     event.preventDefault();
//     anchorEle.textContent ="click hogya h"
// }

// anchorEle.addEventListener('click', clickOn )


let paras = document.querySelectorAll('p');
function alertpara(event){
    alert( "you clicked : "+event.target.textContent)

}
for(let i =0; i < paras.length; i++){

    let para = paras[i];
    para.addEventListener('click', alertpara)
}
