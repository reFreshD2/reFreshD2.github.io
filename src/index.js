function whoAreYou() {
    let req = new XMLHttpRequest();
    req.open('GET', 'img.json', true);
    req.responseType = 'json';
    req.send();
    req.onload = function () {
        let timerId = setInterval(() => {
            document.getElementById("MyImg").src = req.response.img[Math.round(Math.random()*2)].src;
        }, 100);
        setTimeout(() => {
            clearInterval(timerId)
        }, 2000);
    }
}