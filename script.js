const container = document.querySelector('#gridContainer');
let fieldSize = 16;

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    fieldSize = prompt("Give field size (lower than 100)");
    console.log(fieldSize);
    container.innerHTML='';
    if(fieldSize < 100){
    createGrid(fieldSize);
    }
})

function createGrid(fieldSize) {
divs:
for (let i = 1; i <= fieldSize ; i++){
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    //row.textContent = `row : `;

    for (let j = 0; j < fieldSize; j++){
        let column = document.createElement('div');
        column.className = 'column';
        row.appendChild(column);
        //column.textContent = `${j}`;

    }
}
let hover = document.getElementsByClassName('column');
for (let i = 0; i < hover.length; i++){
    hover[i].addEventListener('mouseover', function (){
        hover[i].classList.add('hover');
        //alert('test');

    })
}
};



/*let hover = document.getElementsByClassName('column');
for (let i = 0; i < hover.length; i++){
    hover[i].addEventListener('mouseover', function (){
        hover[i].classList.add('hover');
        //alert('test');

    })
}*/