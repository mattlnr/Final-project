const submit = document.querySelector("#submit-btn");
const results = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-container');
const form = document.querySelector('#quiz');
const description = document.querySelector('#results-text');
const name = document.querySelector('#quiz-name');
const resultImg = document.querySelector("#result-image");

let imgOne = "img/neatfreak.jpg";
let imgTwo = "img/kindaclean.jpg";
let imgThree = "img/dusty.jpg";
let imgFour = "img/kindadirty.jpg";
let imgFive = "img/superdirty.jpg";

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
		results.innerText = "You are a neat freak!";
		description.innerText = "Based on your answers, you likely can't function unless your house is spotless! You won't be satisfied until all of the germs have been disposed of!";
		imgToSet = imgOne;
	} else if(total > 10) {
		results.innerText = "You are somewhat clean!";
		description.innerText = "Based on your answers, you aren't a fan of dirt but you don't need to clean it immediately. You find that other things are more important."
		imgToSet = imgTwo;
	} else if (total > -10) {
		results.innerText ="You are somewhere in the middle!";
		description.innerText = "Based on your answers, you can't stand when your place is a complete disaster but you don't need to clean everyday. You may even go more than a week without cleaning."
		imgToSet = imgThree;
	} else if (total > -25) {
		results.innerText ="You are a little dirty!"
		description.innerText = "Based on your answers, it does not take long for someone to find a mess in your house. There are just more important things for you to do than to clean those dishes that have been waiting a week!"
		imgToSet = imgFour;
	} else {
		results.innerText ="You are a slob!"
		description.innerText = "Based on your answers, it's likely that no one visits your house more than once. You've probably received a smell complaint or two from people just passing by your house! It's your mess though and you are proud!"
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