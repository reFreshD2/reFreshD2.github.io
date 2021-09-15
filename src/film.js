let iter = 0;
const _ = require("lodash");

onscroll = function () {
    if (window.scrollY + 100 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        let req = new XMLHttpRequest();
        req.open('GET', 'img.json', true);
        req.responseType = 'json';
        req.send();
        req.onload = function () {
            let newFilm = req.response,
                template_newFilm = document.getElementById('template-film').innerHTML,
                compiled = _.template(template_newFilm),
                html = '';
            let data = {
                imgSrc1: newFilm[iter].imgSrc1,
                imgSrc2: newFilm[iter].imgSrc2,
                description1: newFilm[iter].description1,
                description2: newFilm[iter].description2,
                instagram1: newFilm[iter].instagram1,
                instagram2: newFilm[iter].instagram2,
            }
            html += compiled(data);
            document.getElementById('film').after(html);
            iter++;
        }
    }
}