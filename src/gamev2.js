function Change(changeRow,changeCol,colunms,rows) {
    for (let i=1; i<=rows;i++){
        let name = 'btn'+i+changeCol;
        let select = document.getElementById(name);
        if(select.classList.contains('black')){
            select.classList.remove('black');
        }
        else {
            select.classList.add('black');
        }
    }
    for (let j=1; j<=colunms;j++) {
        let name = 'btn'+changeRow+j;
        let select = document.getElementById(name);
        if (j!=changeCol) {
            if(select.classList.contains('black')){
                select.classList.remove('black');
            }
            else {
                select.classList.add('black');
            }
        }
    }
}

function Create(colunms,rows) {
    document.getElementById('CountColumns').remove();
    document.getElementById('CountRows').remove();
    document.getElementById('but').remove();
    let table = document.createElement('table');
    let isBlack = false
    for (let i = 1; i<=rows;i++){
        let row = document.createElement('tr');
        for (let j = 1; j<=colunms; j++){
            let col = document.createElement('td');
            let btn = document.createElement('input');
            btn.type = 'button';
            btn.classList.add('btn');
            btn.id = 'btn'+i+j;
            if (isBlack) {
                btn.classList.add('black')
                isBlack = false
            }
            btn.onclick = function (){Change(i,j,colunms,rows)};
            col.appendChild(btn);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}