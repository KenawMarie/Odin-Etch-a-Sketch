const body=document.querySelector('body')
const divs=document.querySelector('.container');

for (let i=0;i<(16)**2;i++){
    let div=document.createElement('div');
    div.className='div';
    divs.appendChild(div)
    div.addEventListener('mouseenter',background)
    div.addEventListener('mouseleave',background)
}

divs.style.width='480px'
divs.style.height='480px'

function number(num){
    return Math.floor(Math.random()*num)
}
function background(e){
    e.target.style.backgroundColor=`rgb(${number(256+1)},${number(256+1)},${number(256+1)})`
}
const btn=document.createElement('button')
btn.textContent='Number of Square'
btn.className='btn'
body.insertBefore(btn,divs)
btn.addEventListener('click',popup)

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
          div.style.width=`${480/square}px`
          div.style.height=`${480/square}px`
          divs.appendChild(div)
          div.addEventListener('mouseenter',background)
          div.addEventListener('mouseleave',background)
      }
  }
}