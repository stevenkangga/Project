// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var extern = require('bespoke-extern');
var cube = require('bespoke-theme-cube');
//Other
var current_quiz_card = null;
var quiz_score = 0;
var true_sound = new Audio('images/correct.mp3');
var false_sound = new Audio('images/false.mp3');
var finish_sound = new Audio('images/finish.mp3');
//App Condition
const LEARNING = 'learning';
const QUIZ = 'quiz';
var APP_CONDITION = LEARNING;
//Data type
const HEWAN = "HEWAN";
const BUAHAN = "BUAHAN";
var CURRENT_QUESTION_TYPE = HEWAN;
//Static Data
const DATA = {
	"HEWAN":[
		{
            img_url:'images/Bear_1.jpg',
            title:'Beruang',
			title_en:'Bear',
			sound_file:'images/Bear.mp3',
        },
        {
            img_url:'images/Cat_1.jpg',
            title:'Kucing',
			title_en:'Cat',
			sound_file:'images/Cat.mp3',
        },
        {
            img_url:'images/Chameleon_1.jpg',
            title:'Bunglon',
			title_en:'Chameleon',
			sound_file:'images/Chameleon.mp3',
        },
        {
            img_url:'images/Chicken_1.jpg',
            title:'Ayam',
			title_en:'Chicken',
			sound_file:'images/Chicken.mp3',
        },
        {
            img_url:'images/Clam_1.jpg',
            title:'Kerang',
			title_en:'Clam',
			sound_file:'images/Clam.mp3',
        },
        {
            img_url:'images/Deer_1.jpg',
            title:'Rusa',
			title_en:'Deer',
			sound_file:'images/Deer.mp3',
        },
        {
            img_url:'images/Dog_1.jpg',
            title:'Anjing',
			title_en:'Dog',
			sound_file:'images/Dog.mp3',
        },
        {
            img_url:'images/Dolphin_1.jpg',
            title:'Lumba-Lumba',
			title_en:'Dolphin',
			sound_file:'images/Dolphin.mp3',
        },
        {
            img_url:'images/Duck_1.jpg',
            title:'Bebek',
			title_en:'Duck',
			sound_file:'images/Duck.mp3',
        },
        {
            img_url:'images/Elephant_1.jpg',
            title:'Gajah',
			title_en:'Elephant',
			sound_file:'images/Elephant.mp3',
        },
        {
            img_url:'images/Fish_1.jpg',
            title:'Ikan',
			title_en:'Fish',
			sound_file:'images/Fish.mp3',
        },
        {
            img_url:'images/Giraffe_1.jpg',
            title:'Jerapah',
			title_en:'Giraffe',
			sound_file:'images/Giraffe.mp3',
        },
        {
            img_url:'images/Horse_1.jpg',
            title:'Kuda',
			title_en:'Horse',
			sound_file:'images/Horse.mp3',
        },
        {
            img_url:'images/Jellyfish_1.jpg',
            title:'Ubur-Ubur',
			title_en:'Jellyfish',
			sound_file:'images/Jellyfish.mp3',
        },
        {
            img_url:'images/Panda_1.jpg',
            title:'Panda',
			title_en:'Panda',
			sound_file:'images/Panda.mp3',
        },
        {
            img_url:'images/Rabbit_1.jpg',
            title:'Kelinci',
			title_en:'Rabbit',
			sound_file:'images/Rabbit.mp3',
        },
        {
            img_url:'images/Rat_1.jpg',
            title:'Tikus',
			title_en:'Mouse',
			sound_file:'images/Mouse.mp3',
        },
        {
            img_url:'images/Shrimp_1.jpg',
            title:'Udang',
			title_en:'Shrimp',
			sound_file:'images/Shrimp.mp3',
        },
        {
            img_url:'images/Tiger_1.jpg',
            title:'Harimau',
			title_en:'Tiger',
			sound_file:'images/Tiger.mp3',
        },
        {
            img_url:'images/Zebra_1.jpg',
            title:'Zebra',
			title_en:'Zebra',
			sound_file:'images/Zebra.mp3',
        },
	],
	"BUAHAN":[
		{
			img_url:'images/Apple.jpg',
            title:'Apel',
			title_en:'Apple',
			sound_file:'images/Apple.mp3',
		},
		{
			img_url:'images/Avocado.jpg',
            title:'Alpokat',
			title_en:'Avocado',
			sound_file:'images/Avocado.mp3',
		},
		{
			img_url:'images/Banana.jpg',
            title:'Pisang',
			title_en:'Banana',
			sound_file:'images/Banana.mp3',
		},
		{
			img_url:'images/Cherry.png',
            title:'Ceri',
			title_en:'Cherry',
			sound_file:'images/Cherry.mp3',
		},
		{
			img_url:'images/Dragon_Fruit.jpg',
            title:'Buah Naga',
			title_en:'Dragon Fruit',
			sound_file:'images/Dragon fruit.mp3',
		},
		{
			img_url:'images/Durian.jpg',
            title:'Durian',
			title_en:'Durian',
			sound_file:'images/Durian.mp3',
		},
		{
			img_url:'images/Grape.jpg',
            title:'Anggur',
			title_en:'Grape',
			sound_file:'images/Grape.mp3',
		},
		{
			img_url:'images/Kiwi.jpg',
            title:'Kiwi',
			title_en:'Kiwi',
			sound_file:'images/kiwi.mp3',
		},
		{
			img_url:'images/Lemon.jpg',
            title:'Lemon',
			title_en:'Lemon',
			sound_file:'images/Lemon.mp3',
		},
		{
			img_url:'images/Mango.jpg',
            title:'Mangga',
			title_en:'Mango',
			sound_file:'images/Mango.mp3',
		},
		{
			img_url:'images/Mangosteen.jpg',
            title:'Manggis',
			title_en:'Mangosteen',
			sound_file:'images/Mangosteen.mp3',
		},
		{
			img_url:'images/Melon.jpg',
            title:'Melon',
			title_en:'Melon',
			sound_file:'images/Melon.mp3',
		},
		{
			img_url:'images/Orange.png',
            title:'Jeruk',
			title_en:'Orange',
			sound_file:'images/Orange.mp3',
		},
		{
			img_url:'images/Papaya.jpg',
            title:'Pepaya',
			title_en:'Papaya',
			sound_file:'images/Papaya.mp3',
		},
		{
			img_url:'images/Pear.png',
            title:'Pir',
			title_en:'Pear',
			sound_file:'images/Pear.mp3',
		},
		{
			img_url:'images/Pinapple.jpg',
            title:'Nanas',
			title_en:'Pineapple',
			sound_file:'images/Pinapple.mp3',
		},
		{
			img_url:'images/Raspberry.jpg',
            title:'Frambos',
			title_en:'Raspberry',
			sound_file:'images/Raspberry.mp3',
		},
		{
			img_url:'images/Soursop.jpg',
            title:'Sirsak',
			title_en:'Soursop',
			sound_file:'images/Soursop.mp3',
		},
		{
			img_url:'images/Strawberry.jpg',
            title:'Stroberi',
			title_en:'Strawberry',
			sound_file:'images/Strawberry.mp3',
		},
		{
			img_url:'images/Watermelon.png',
            title:'Semangka',
			title_en:'Watermelon',
			sound_file:'images/Watermelon.mp3',
		},
	]
}
//Learn Data Progress
var LIMIT_DATA = DATA[CURRENT_QUESTION_TYPE].length - 1;
//Quiz Progress
var QUIZ_PROGRESS = 1;
//Max Quiz
var MAX_QUIZ = 10;
// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
	cube(),
	classes(),
	nav(),
	scale(),
	bullets('.build, .build-items > *:not(.build-items)'),
	hash(),
	extern(bespoke)
]);
//Function Helper
const generateLearnCard = (img_url,title,title_en,index) => {
	return `<div id="learn-${index}" class="image-box">
		<img file-id="${index}" class="sound-icon" src="images/sound.png"/>
		<div class="title-part-learn">${title} = ${title_en}</div>
		<img src="${img_url}" class="img-style-learn"/>
	</div>`;
}
const insertCharInString = (indexTarget,answer) => {
	return answer.slice(0,indexTarget) + answer[indexTarget] + answer.slice(indexTarget,answer.length);
}
//Shuffle Array
const shuffleArray = (arr) => {
	let dataToReturn = [], choosen = [];
	do{
		let tempRandom = (Math.random() * 100).toFixed() % 4;
		if(choosen.indexOf(tempRandom)===-1){
			choosen.push(tempRandom);
			dataToReturn.push(arr[tempRandom]);
		}
	}while(dataToReturn.length!==4);
	return dataToReturn;
}
const shuffleQuizArr = (data) => {
	let dataToReturn = [], choosen = [];
	do{
		let tempRandom = (Math.random() * 100).toFixed() % data.length;
		if(choosen.indexOf(tempRandom)===-1){
			choosen.push(tempRandom);
			dataToReturn.push(data[tempRandom]);
		}
	}while(dataToReturn.length!==MAX_QUIZ);
	return dataToReturn;
}
const generateOptions = (answer,mainIndex) => {
	let currentSize = answer.length, dataToReturn = '', LOOP_LIMIT = 3, choosen = [], option_fix = [], option_shuffle = [];
	do{
		if(LOOP_LIMIT===3){
			option_fix.push(answer);
		}else{
			let tempRandom = 0;
			do{
				tempRandom = (Math.random() * 100).toFixed() % currentSize;
				if(choosen.indexOf(tempRandom)===-1){
					choosen.push(tempRandom);
					break;
				}
			}while(true);
			option_fix.push(insertCharInString(tempRandom,answer));
		}
	}while(LOOP_LIMIT--);
	option_shuffle = shuffleArray(option_fix);
	option_shuffle.forEach((element,index)=>{
		dataToReturn += `<div class="quiz-option"><a resource="${mainIndex}">${element}</a></div>`;
	});
	return dataToReturn;
}
const generateQuizCard = (img_url,title,title_en,index) => {
	return `<div class="quiz-animate">
		<div class="flip-card-container">
			<div class="flip-image-box">
				<img src="${img_url}" class="img-style-quiz"/>
			</div>
			<div class="quiz-box">
				${generateOptions(title_en,index)}
			</div>
		</div>
	</div>`;
}
const returnToStart = () => {
	let i = 0;
	while(i<DATA[CURRENT_QUESTION_TYPE].length){
		$(`#learn-${i}`).css('left','35%');
		if(LIMIT_DATA<DATA[CURRENT_QUESTION_TYPE].length-1){
			LIMIT_DATA++;
		}
		i++;
	}
	$('#learn-container').empty();
	$('.next-btn').css('transform','scale(1)');
	$('#yes-no').css('transform','scale(0)');
	$('.start-overlay').css('transform','scale(1)');
	$('.start-btn').css('transform','scale(1)');
	$('.quiz-btn').css('transform','scale(1)');
}
const setQuizProgress = () => {
	$('.score-display').html(`${QUIZ_PROGRESS} / ${MAX_QUIZ}`);
}
const loadUpQuiz = () => {
	let quiz_container = $('#quiz-part');
	let SHUFFLE_QUIZ_ARR = shuffleQuizArr(DATA[CURRENT_QUESTION_TYPE]);
	SHUFFLE_QUIZ_ARR.forEach((element,index)=>{
		quiz_container.append(generateQuizCard(element.img_url,element.title,element.title_en,index));
	});
	//Flip Card
	$('.flip-card-container').on('click',function(){
		$(this).css('transform','rotateY(180deg)');
		current_quiz_card = $(this).parent();
		let hintIcon = $('.direct-img'), hintImg = $('.hint-dialog');
		if(hintIcon.length){
			hintIcon.css('transform','scale(0)');
			hintImg.css('transform','scale(0)');
		}
	})
	//Quiz Answer
	$('.quiz-option a').on('click',function(){
		let parent = $(current_quiz_card);
		if(!parent.hasClass('option-selected')){
			$('.next-btn').css('transform','scale(1)');
			let target = $(this), selectedData = target.text(), targetIndex = target.attr('resource'), mainResource = SHUFFLE_QUIZ_ARR[targetIndex];
			if(selectedData===mainResource.title_en){
				target.addClass('correct');
				quiz_score++;
				true_sound.play();
				$('.true-icon').css('transform','scale(1)');
			}else{
				target.addClass('wrong');
				false_sound.play();
				$('.false-icon').css('transform','scale(1)');
			}
			parent.addClass('option-selected')
		}
	})
}
//Set Up Card To Learn
const setUpCardToLearn = () => {
	let learn_container = $('#learn-container');
	DATA[CURRENT_QUESTION_TYPE].forEach((element,index)=>{
		learn_container.append(generateLearnCard(element.img_url,element.title,element.title_en,index));
	});
	//Sound Icon Clicked
	$('.sound-icon').on('click',function(){
		let target_id = $(this).attr('file-id');
		let sound_source = DATA[CURRENT_QUESTION_TYPE][target_id].sound_file;
		console.log(target_id);
		console.log(sound_source);
		let audio = new Audio(sound_source);
		audio.play();
	})
}
//Initial App Function
const initialApp = (target) => {
	CURRENT_QUESTION_TYPE = target;
	LIMIT_DATA = DATA[CURRENT_QUESTION_TYPE].length - 1;
	// MAX_QUIZ = DATA[CURRENT_QUESTION_TYPE].length;
	$('.start-overlay').css('transform','scale(0)');
	$('.game-option-container').css('transform','scale(0)');
	setUpCardToLearn();
	//Load Quiz Card
	loadUpQuiz();
	//Load Up Quiz Progress
	setQuizProgress();
	$('.detail-text').text(`Wahh hebat! Kamu sudah menyelesaikan bab "${CURRENT_QUESTION_TYPE===HEWAN?'Animals':'Fruits'}". Mau mencoba menyelesaikan quiz?`)
}
//Scripts
$(document).ready(function(){
	//Start Button
	$('.start-btn').on('click',function(){
		// $('.start-overlay').css('transform','scale(0)');
		$(this).css('transform','scale(0)');
		$('.game-option-container').css('transform','scale(1)');
	});
	//Next Button
	$('.next-btn').on('click',function(){
		if(APP_CONDITION===LEARNING){
			let target = $(`#learn-${LIMIT_DATA}`);
			target.css('left','-30%');
			LIMIT_DATA -= 1;
			if(LIMIT_DATA<0){
				$(this).css('transform','scale(0)');
				$('#yes-no').css('transform','scale(1)');
				$('.quiz-btn').css('transform','scale(0)');
			}
		}else if(APP_CONDITION===QUIZ){
			$(current_quiz_card).css('left','-30%');
			$(this).css('transform','scale(0)');
			$('.true-icon').css('transform','scale(0)');
			$('.false-icon').css('transform','scale(0)');
			if(QUIZ_PROGRESS<MAX_QUIZ){
				QUIZ_PROGRESS++;
				setQuizProgress();
			}else{
				finish_sound.play();
				finish_sound.onended = ()=> {
					console.log('ENDED FINISH SOUND');
				};
				$('.start-overlay').css('transform','scale(1)');
				$('.result-dialog').css('transform','scale(1)');
				$('#quiz-result').text(`Score kamu adalah ${quiz_score} / ${MAX_QUIZ}.`);
			}
		}
	});
	//Yes Button
	$('.yes-btn').on('click',function(){
		$('#quiz-part').css('transform','scale(1)');
		APP_CONDITION = QUIZ;
		$('#learn-container').empty();
	});
	//No Button
	$('.no-btn').on('click',returnToStart);
    //Home Button
	$('.home-btn').on('click',function(){
		APP_CONDITION = LEARNING;
		quiz_score = 0;
		current_quiz_card = null;
		QUIZ_PROGRESS = 1;
		returnToStart();
		$('.result-dialog').css('transform','scale(0)');
		$('.quiz-animate').remove();
		$('.direct-img').css('transform','scale(1)');
		$('.direct-img').css('transform','rotate(45deg)');
		$('.hint-dialog').css('transform','scale(1)');
		// loadUpQuiz();
		setQuizProgress();
		$('#quiz-part').css('transform','scale(0)');
	});
	//Hewan Button
	$('.hewan-btn').on('click',function(){
		// let audio = new Audio('images/Example.mp3');
		// audio.play();
		initialApp(HEWAN);
	});
	$('.buah-btn').on('click',function(){
		initialApp(BUAHAN);
	});
	$('.quiz-btn').on('click',function(){
		$('#quiz-part').css('transform','scale(1)');
		$('.next-btn').css('transform','scale(0)');
		APP_CONDITION = QUIZ;
		$('#learn-container').empty();
	})
})