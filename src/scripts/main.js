// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var extern = require('bespoke-extern');

const DATA = [
  {
      img_url:'images/Bear_1.jpg',
      title:'Beruang',
      title_en:'Bear'
  },
  {
      img_url:'images/Cat_1.jpg',
      title:'Kucing',
      title_en:'Cat'
  },
  {
      img_url:'images/Chameleon_1.jpg',
      title:'Bunglon',
      title_en:'Chameleon'
  },
  {
      img_url:'images/Chicken_1.jpg',
      title:'Ayam',
      title_en:'Chicken'
  },
  {
    img_url:'images/Clam_1.jpg',
    title:'Kerang',
    title_en:'Clam'
  },
  {
    img_url:'images/Deer_1.jpg',
    title:'Rusa',
    title_en:'Deer'
  },
  {
    img_url:'images/Dog_1.jpg',
    title:'Anjing',
    title_en:'Dog'
  },
  {
    img_url:'images/Dolphin_1.jpg',
    title:'Lumba-Lumba',
    title_en:'Dolphin'
  },
  {
  img_url:'images/Duck_1.jpg',
  title:'Bebek',
  title_en:'Duck'
  },
  {
  img_url:'images/Elephant_1.jpg',
  title:'Gajah',
  title_en:'Elephant'
  },
  {
    img_url:'images/Fish_1.jpg',
    title:'Ikan',
    title_en:'Fish'
  },
  {
    img_url:'images/Giraffe_1.jpg',
    title:'Jerapah',
    title_en:'Giraffe'
  },
  {
    img_url:'images/Horse_1.jpg',
    title:'Kuda',
    title_en:'Horse'
  },
  {
    img_url:'images/Jellyfish_1.jpg',
    title:'Ubur-Ubur',
    title_en:'Jellyfish'
  },
  {
  img_url:'images/Panda_1.jpg',
  title:'Panda',
  title_en:'Panda'
  },
  {
  img_url:'images/Rabbit_1.jpg',
  title:'Kelinci',
  title_en:'Rabbit'
  },
  {
  img_url:'images/Rat_1.jpg',
  title:'Tikus',
  title_en:'Rat'
  },
  {
  img_url:'images/Shrimp_1.jpg',
  title:'Udang',
  title_en:'Shrimp'
  },
  {
  img_url:'images/Tiger_1.jpg',
  title:'Harimau',
  title_en:'Tiger'
  },
  {
  img_url:'images/Zebra_1.jpg',
  title:'Zebra',
  title_en:'Zebra'
  },
]

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  nav(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  extern(bespoke)
]);

//Function Helper
const generateLearnCard = (img_url,title,title_en,index) => {
	return `<div id="learn-${index}" class="image-box"><div class="title-part-learn">${title} = ${title_en}</div><img src="${img_url}" class="img-style-learn"/></div>`;
}

//Scripts
$(document).ready(function(){
  //Load Up Card to Learn
	let learn_container = $('#learn-container');
	DATA.forEach((element,index)=>{
		learn_container.append(generateLearnCard(element.img_url,element.title,element.title_en,index));
	});
  //Start Button
  $('.start-btn').on('click',function(){
    $('.start-overlay').css('transform','scale(0)');
    $(this).css('transform','scale(0)');
  });
})
