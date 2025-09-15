const body=document.querySelector('body')

const divs=document.querySelector('.container');

for (let i=0;i<(16)**2;i++){
    let div=document.createElement('div');
    div.className='div';
    divs.appendChild(div)
    div.addEventListener('mouseenter',background)
    div.addEventListener('mouseleave',background)
}

divs.style.width='400px'
divs.style.height='400px'

function number(num){
    return Math.floor(Math.random()*num)
}
function background(e){
    e.target.style.backgroundColor=`rgb(${number(256+1)},${number(256+1)},${number(256+1)})`
}
const btns=document.createElement('div')
btns.className='btns'

const btn=document.createElement('button')
btn.textContent='Number of Square'
btn.className='btn'

const clearBtn=document.createElement('button')
clearBtn.textContent='Clear'
clearBtn.className='btn'

const eraser=document.createElement('button')
eraser.textContent='Eraser'
eraser.className='btn'

btns.appendChild(btn)
btns.appendChild(eraser)
btns.appendChild(clearBtn)
body.insertBefore(btns,divs)

btn.addEventListener('click',popup)
clearBtn.addEventListener('click',clear)
eraser.addEventListener('click',erase)

function popup(){
    divs.textContent=''
  let square= prompt('enter the number of squares per side for the new grid',16)
  if(+square>100){
      alert('enter numbers less than or equal to 100')
  }
  else{
      for (let i=0;i<(square)**2;i++){
          let div=document.createElement('div');
          div.className='divs';
          div.style.width=`${400/square}px`
          div.style.height=`${400/square}px`
          divs.appendChild(div)
          div.addEventListener('mouseenter',background)
          div.addEventListener('mouseleave',background)
        }
    }
}

function clear(){
    let cleared=divs.querySelectorAll('div');
    cleared.forEach((div)=>div.style.backgroundColor='#fff')
}

function erase(){
    const eraseDiv=divs.querySelectorAll('div')
    for(const div of eraseDiv){
        div.addEventListener('mouseenter',backgrounds)
        div.addEventListener('mouseleave',backgrounds)
    }
    
}
function backgrounds(){
    this.style.backgroundColor='#fff';
}