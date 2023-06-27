// let numere = [3, 4 , 9];
// numere.push(7);
// console.log(numere);
// numere[numere.length] = 13;
// console.log(numere);
// // 3, 4, 9, 7, 13
// numere.splice(3, 0, 14);
// console.log(numere);

const cardTypes = ['clubs', 'diamonds', 'hearts', 'spades'];
let pachet = {
    'clubs': [], // 2, 3, 4, ...
    'diamonds': [],
    'hearts': [],
    'spades': []
};
let score = 0;
let vecheaCarte = 0;

function adaugaCartiInPachet(nrPachete = 1) {
    for (let i = 0; i < cardTypes.length; i++) { // index card type
        // i // index (0, 1, 2, 3)
        // cardTypes[i] // 'clubs', ...
        // masina['model']
        // masina.model == masina['model']
        // masina[model]
        for (let j = 2; j <= 14; j++) { // card number
            pachet[cardTypes[i]].push(j);
            // pachet[cardTypes[i]][pachet[cardTypes[i]].length] = j;
        }
    }
    console.log(pachet);
}

function incarcare() {
    // genereaza pachet(e)
    adaugaCartiInPachet();
    // adaugare carte noua
    nouaCarte = schimbaCarte();
    // ar urma comparatie
    vecheaCarte = nouaCarte;
    // setare scor zero
    afiseazaScor();
}

function afiseazaScor() {
    const divScore = document.getElementById('score');
    const spanScore = divScore.getElementsByTagName('span')[0];
    spanScore.textContent = score;
}

function showFace(happy) {
    const divIdToShow = 'face-' + (happy ? 'happy' : 'sad'); // shorthand if
    const divIdToHide = 'face-' + (!happy ? 'happy' : 'sad');
    document.getElementById(divIdToShow).style.display = 'block';
    document.getElementById(divIdToHide).style.display = 'none';
}

function schimbaCarte() {
    const indexType = Math.floor(Math.random() * 4);
    const cardNumber = Math.floor(Math.random() * 13 + 2); // [0; 1) * 13 => [0; 13) + 2 => [2; 15) 
    const pozitie = pachet[cardTypes[indexType]].indexOf(cardNumber);
    const fileName = 'cards/' + cardTypes[indexType] + '_' + cardNumber + '.svg';
    if (pozitie === -1) {
        console.log('Am obtinut ' + fileName + ' si nu e in pachet')
        schimbaCarte();
        return;
    }
    pachet[cardTypes[indexType]].splice(pozitie, 1);
    console.log(pachet);
    // lastCardNumber = cardNumber;
    console.log(fileName);
    const imgElement = document.querySelector('#card > img');
    imgElement.setAttribute('src', fileName);
    return cardNumber;
}

function higher() {
    nouaCarte = schimbaCarte();
    if (typeof nouaCarte !== 'number') return;
    if (nouaCarte >= vecheaCarte) {
        score++;
        showFace(true);
        afiseazaScor();
    } else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;
}

const lower = function() {
    nouaCarte = schimbaCarte();
    if (typeof nouaCarte !== 'number') return;
    if (nouaCarte <= vecheaCarte) {
        score++;
        showFace(true);
        afiseazaScor();
    } else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;

}   

document.addEventListener('DOMContentLoaded', incarcare);
