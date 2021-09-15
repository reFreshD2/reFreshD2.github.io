let scr = 0;
function ChangeScore(row,col) {
    let name = 'btn'+row+col;
    let select = document.getElementById(name);
    if(select.classList.contains('black')){
        scr++;
        let score = document.getElementById('counter');
        score.textContent=scr;
    }
}

function Mole(colunms,rows) {
    let i = Math.round(Math.random()*(rows-1));
    let j = Math.round(Math.random()*(colunms-1));
    let name = 'btn'+i+j;
    let btn = document.getElementById(name);
    btn.classList.add('black');
    setTimeout(function (){
        btn.classList.remove('black');
        Mole(colunms,rows);
    },800);
}

function Create(colunms,rows) {
    document.getElementById('CountColumns').remove();
    document.getElementById('CountRows').remove();
    document.getElementById('but').remove();
    let score = document.createElement('span');
    score.textContent = 'Score: ';
    let counter = document.createElement('span');
    counter.id = 'counter';
    counter.textContent = scr;
    document.body.appendChild(score);
    document.body.appendChild(counter);
    let table = document.createElement('table');
    for (let i = 0; i<rows;i++){
        let row = document.createElement('tr');
        for (let j = 0; j<colunms; j++){
            let col = document.createElement('td');
            let btn = document.createElement('input');
            btn.type = 'button';
            btn.classList.add('btn');
            btn.id = 'btn'+i+j;
            btn.onclick = function (){ChangeScore(i,j)};
            col.appendChild(btn);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
    Mole(colunms,rows);
}