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

//Scripts
$(document).ready(function(){
  //Start Button
  $('.start-btn').on('click',function(){
    $('.start-overlay').css('transform','scale(0)');
    $(this).css('transform','scale(0)');
  });
})
