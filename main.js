const div=document.querySelector('.container');
let square=prompt('enter the number of rows and columns for the square?',16)
let divs;
for (let i=0;i<(square)**2;i++){
    divs=document.createElement('div');
    divs.className='div';
    divs.style.backgroundColor=`rgb(${number(256+1)},${number(256+1)},${number(256+1)})`
    div.appendChild(divs)
}

div.style.width=`${Number(square)*1.875 + (Number(square)-1)*0.125}rem`
div.style.height=`${Number(square)*1.875 + (Number(square)-1)*0.125}rem`
console.log((Number(square)+1)*30);
function number(num){
    return Math.floor(Math.random()*num)
}
