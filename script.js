const container = document.querySelector('#gridContainer');

divs:
for (let i = 1; i < 17; i++){
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    row.textContent = `row : `;

    for (let j = 0; j < 16; j++){
        let column = document.createElement('div');
        column.className = 'column';
        //column.classList.add = 'rows';
        row.appendChild(column);
        column.textContent = `${j}`;

    }
}

