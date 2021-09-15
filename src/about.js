function getArray(str) {
    str = str + ',';
    let arr = new Array();
    let l = 0;
    let buff = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] != ','){
            buff = buff + str[i];
        }
        else {
            arr[l] = buff;
            buff='';
            l++;
        }
    }
    return arr;
}

function sort() {
    let str = document.getElementById("array").value;
    let arr = getArray(str);
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    let ans='';
    for (let i = 0; i < arr.length; i++) {
        ans = ans + ' ' + arr[i];
    }
    document.getElementById('sorted').innerHTML=ans;
    /*let block = document.getElementById('sorted');
    block.textContent=('Hello');
    block.classList.add('red-text');
    setTimeout(function () {
        block.classList.remove('red-text')
    }, 100)
    let counter = 1000;
    let h = setInterval(function () {
        if (counter-- > 0){
            if(block.classList.contains('red-text')){
                block.classList.remove('red-text')
            }
            else{
                block.classList.add('red-text');
            }
        }
        else {clearInterval(h)}
    },100)
    */
}

