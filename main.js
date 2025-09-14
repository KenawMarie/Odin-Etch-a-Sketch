const divs=document.querySelector('.container');
let square=prompt('enter the number of rows and columns for the square?',16)
let div;
for (let i=0;i<(square)**2;i++){
    div=document.createElement('div');
    div.className='div';
    divs.appendChild(div)
    div.addEventListener('mouseenter',background)
    div.addEventListener('mouseleave',background)
}

divs.style.width=`${Number(square)*1.25 + (Number(square)-1)*0.125}rem`
divs.style.height=`${Number(square)*1.25 + (Number(square)-1)*0.125}rem`


function number(num){
    return Math.floor(Math.random()*num)
}
    function background(e){
        e.target.style.backgroundColor=`rgb(${number(256+1)},${number(256+1)},${number(256+1)})`
        console.log(e.target);
    }