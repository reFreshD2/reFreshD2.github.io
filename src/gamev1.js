function Change(num,len) {
    for (let i = 1; i <= len; i++){
        let name = 'btn'+i;
        let select = document.getElementById(name);
        if (i%num==0) {
            if(select.classList.contains('black')){
                select.classList.remove('black');
            }
            else {
                select.classList.add('black');
            }
        }
    }
    return;
}

function Create(countElem) {
    document.getElementById('Count').remove();
    document.getElementById('but').remove();
    for (let i = 1; i <= countElem; i++) {
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.classList.add('btn');
        btn.id = 'btn'+i;
        document.body.appendChild(btn);
        btn.onclick = function (){Change(i,countElem)};
    }
    return;
}