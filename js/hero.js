const submit = document.querySelector("#submit-btn");
const results = document.querySelector('#results');
const resultsContainer = document.querySelector('#results-container');
const form = document.querySelector('#quiz');
const description = document.querySelector('#results-text')
form.addEventListener("submit", checkQuiz);

function checkQuiz(event){
    event.preventDefault();
    total = 0;
    $('.ans:checked').each(function(){
    total = total + parseFloat($(this).val());
    });
    console.log(total);
    if(total > 25) {
		results.innerText = "You are a true hero!"
		description.innerText = " neration."
	} else if(total > 10) {
		results.innerText = "You are a reluctant hero!"
	} else if (total > -10) {
		results.innerText ="You are neutral!"
	} else if (total > -25) {
		results.innerText ="You are an anti-hero!"
	} else {
		results.innerText ="You are a true villian!"
	}
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