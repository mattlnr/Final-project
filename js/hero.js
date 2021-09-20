const submit = document.querySelector("#submit-btn");
const results = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-container');
const form = document.querySelector('#quiz');
const description = document.querySelector('#results-text')
const resultImg = document.querySelector("#result-image");

let imgOne = "img/hero.jpg";
let imgTwo = "img/reluctant.jpg";
let imgThree = "img/neutral.jpg";
let imgFour = "img/antihero.jpg";
let imgFive = "img/evil.jpg";

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
		results.innerText = "You are a true hero!";
		description.innerText = "Based on your answers, you would be the first to jump in and save the day. People will admire your feats as you stop evil from destroying the world!";
		imgToSet = imgOne;
	} else if(total > 10) {
		results.innerText = "You are a reluctant hero!";
		description.innerText = "Based on your answers, it would take some convincing to get you to save the day. When all is said and done though, you can do just as much as any hero!"
		imgToSet = imgTwo;
	} else if (total > -10) {
		results.innerText ="You are neutral!";
		description.innerText = "Based on your answers, you would probably end up just being an innocent bystander yelling for Superman to show up. Practice your 'It's a bird!'"
		imgToSet = imgThree;
	} else if (total > -25) {
		results.innerText ="You are an anti-hero!"
		description.innerText = "Based on your answers, normally you fend for yourself and take pleasure in small evils. When the going gets tough though, you'll show up for the right side. "
		imgToSet = imgFour;
	} else {
		results.innerText ="You are a villian!"
		description.innerText = "Based on your answers, you are the epitome of evil. You are leading the cause against good and are proud of it!"
		imgToSet = imgFive;
	}
	resultImg.setAttribute("src", imgToSet);
	resultsContainer.classList.remove('hide');
	resultsContainer.classList.add('show');
	form.classList.add('hide');
};

const goBack = document.querySelector("#return-button");

goBack.addEventListener("click", loadForm);

function loadForm(){
	resultsContainer.classList.add('hide');
	resultsContainer.classList.remove('show');
	form.classList.remove('hide');
}