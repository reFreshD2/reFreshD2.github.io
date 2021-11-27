const addButton = document.getElementById('add');
const container = document.getElementById('container');
const santa = document.getElementById('santa');
let resultContainer = document.getElementById('result-container');

addButton.addEventListener('click', () => {
   let div = document.createElement('div');
   let newPerson = document.createElement('input');
   div.classList.add('item');
   newPerson.classList.add('person');
   newPerson.type = 'text';
   div.appendChild(newPerson);
   container.appendChild(div);
});

santa.addEventListener('click', () => {
   resultContainer.innerText = "";
   let personItems = document.getElementsByClassName('person');
   let persons = [];
   for (let i = 0; i < personItems.length; i++) {
      let item = personItems.item(i);
      persons.push(item.value);
   }

   let personsWithoutGift = persons;
   persons.forEach(function (value) {
      let withoutGiftIndex = personsWithoutGift.indexOf(value);
      if (withoutGiftIndex !== -1) {
         personsWithoutGift = personsWithoutGift.filter((val, id) => id !== withoutGiftIndex);
      }

      let indexToGift = getRandomInt(personsWithoutGift.length);
      addResult(value + ' дарит подарок ' + personsWithoutGift[indexToGift]);
      personsWithoutGift = personsWithoutGift.filter(((val, id) => id !== indexToGift));
      personsWithoutGift.push(value);
   });
});

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function addResult(text) {
   let result = document.createElement('div');
   result.classList.add('result');
   result.innerText = text;
   resultContainer.appendChild(result);
}