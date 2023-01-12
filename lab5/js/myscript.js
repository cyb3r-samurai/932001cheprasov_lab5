var show = function (state){
    document.getElementById('form').style.display = state;
    document.getElementById('filter').style.display = state;
}




let elem = document.getElementById('nav');
let currentElem = null

elem.onmouseover = function(event){

    if (currentElem) return;
    let target = event.target.closest('li');
    if(!target) return;
    currentElem = target;
    currentElem.style.background = 'rgb(240,60,60)';
}

elem.onmouseout = function(event) {

    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    while (relatedTarget) {
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
    currentElem.style.background = '';
    currentElem = null;
  };


  let n1 = document.querySelector('#news1');
  n1.onclick = function(){
    let el =document.querySelector('#n1');
    let el2 =document.querySelector('.content1');
    el.innerHTML='Новость 1';
    el2.innerHTML='Новость 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!';
    show('block');
    
  }
  
  
  let n2 = document.querySelector('#news2');
  n2.onclick = function(){
    let el =document.querySelector('#n1');
    let el2 =document.querySelector('.content1');
    el.innerHTML='Новость 2';
    el2.innerHTML='Новость 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    show('block');
    
  }
  
  
  
  let n3 = document.querySelector('#news3');
  n3.onclick = function(){
    let el =document.querySelector('#n1');
    let el2 =document.querySelector('.content1');
    el.innerHTML='Новость 3';
    el2.innerHTML='Новость 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!';
    show('block');
    
  }