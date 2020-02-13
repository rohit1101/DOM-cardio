// Make a div wrapper
const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

//Make an unordered list

const ulElement = document.createElement('ul');
const myUl = `
<li>One</li>
<li>Two</li>
<li>Three</li>
`;

const myLiFragment = document.createRange().createContextualFragment(myUl);
ulElement.appendChild(myLiFragment);
divWrapper.appendChild(ulElement);

// Creating an IMAGE
const myImg = document.createElement('img');
myImg.src = `https://picsum.photos/200`;
myImg.width = 250;
myImg.classList.add('cute');
myImg.alt = `Cute Puppy`;
divWrapper.appendChild(myImg);

// With HTML string make to p's
const myHTML = `
<div class="myDiv">
    <p>P 1</p>
    <p>P 2</p>
</div>`;

const myHTMLFragment = document.createRange().createContextualFragment(myHTML);
const beforeUl = myHTMLFragment.querySelector('.myDiv'); // Here i am selecting the element explicitly
ulElement.insertAdjacentElement('beforebegin', beforeUl);

// ulElement.insertAdjacentElement('beforebegin', myHTMLFragment); // This will not work because we cannot insert a document fragment
const p2 = divWrapper.querySelector('.myDiv');
p2.lastElementChild.classList.add('warning');
p2.firstElementChild.remove();

// create a function

const generatePlayerCard = (name, age, height) => {
  return `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>Their height is  ${height} and ${age} years old.
        In dog years this person would be ${age *
          7}.That would be a tall dog!</p>
    </div>`;
};

// Make new divs
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
let cardHTML =
  generatePlayerCard('wes', 20, 150) +
  generatePlayerCard('scott', 10, 250) +
  generatePlayerCard('pup', 5, 100) +
  generatePlayerCard('Joker', 89, 100);

const cardHTMLFragment = document
  .createRange()
  .createContextualFragment(cardHTML);

newDiv.appendChild(cardHTMLFragment);
divWrapper.insertAdjacentElement('beforebegin', newDiv);
