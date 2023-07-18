/* @ https://simpleparallax.com 
https://www.youtube.com/watch?v=WYceq2HGJ84
*/

// Fait défiler l'image vers la gauche

let image1 = document.getElementsByClassName('parallaximg1');
let image2 = document.getElementsByClassName('parallaximg2');
let image3 = document.getElementsByClassName('parallaximg3');
let image4 = document.getElementsByClassName('parallaximg4');

new simpleParallax(image1, {
	orientation: 'left',
	delay: '0.8'
});

new simpleParallax(image2, {
	orientation: 'right'
});

new simpleParallax(image3, {
	orientation: 'up',
	scale: '1.4'
});

new simpleParallax(image4, {
	orientation: 'down'
});

