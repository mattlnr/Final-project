const submit = document.querySelector("#submit-btn");
const results = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-container');
const form = document.querySelector('#quiz');
const description = document.querySelector('#results-text');
const name = document.querySelector('#quiz-name');
const resultImg = document.querySelector("#result-image");

let imgOne = "img/playstation5.jpg"
let imgTwo = "img/xbox.jpg"
let imgThree = "img/nintendo.jpg"
let imgFour = "img/SEGA-Genesis.jpg"
let imgFive = "img/atari.jpg"

form.addEventListener("submit", checkQuiz);

function checkQuiz(event){
    event.preventDefault();
    total = 0;
    $('.ans:checked').each(function(){
    total = total + parseFloat($(this).val());
    });
    console.log(total);

    let imgToSet;

    if(total > 25) {
		results.innerText = "You would enjoy a new Playstation!";
		description.innerText = "Based on your answers, you would enjoy some of the newer games you can find with a Playstation 5. You would also enjoy a Playstation 4 if you are looking for a larger library of games. Playstation games tend to emphasize games with large worlds and immersive stories. You'll often find graphics that are pushing the limits of their generation.";
		imgToSet = imgOne;
	} else if(total > 10) {
		results.innerText = "Xbox!";
		description.innerText = "Based on your answers, you are a fairly hardcore gamer and an Xbox would be your friend!"
		imgToSet = imgTwo;
	} else if (total > -10) {
		results.innerText ="Nintendo!";
		description.innerText = "Based on your answers, you enjoy some old and some new. You aren't the hardest or hardcore, but you aren't entirely casual either."
		imgToSet = imgThree;
	} else if (total > -25) {
		results.innerText ="Sega!"
		description.innerText = "Based on your answers, newer games might not be your thing anf you enjoy more casual games. You may even be a retro fanatic. Dreamcast anyone?"
		imgToSet = imgFour;
	} else {
		results.innerText ="Atari!"
		description.innerText = "Based on your answers, you are truly old school and don't care what it looks like or don't care for story at all. Pac-Man might be your jam."
		imgToSet = imgFive;
	}
	resultImg.setAttribute("src", imgToSet);
	resultsContainer.classList.remove('hide');
	resultsContainer.classList.add('show');
	form.classList.add('hide');
	name.classList.add('hide');
};

const goBack = document.querySelector("#return-button");

goBack.addEventListener("click", loadForm);

function loadForm(){
	resultsContainer.classList.add('hide');
	resultsContainer.classList.remove('show');
	form.classList.remove('hide');
	name.classList.remove('hide');
}
