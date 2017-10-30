import css from '../style/main.scss'
import CSSPlugin from 'gsap/CSSPlugin';
import TimelineLite from 'gsap/TimelineLite';
import Ease from 'gsap/EasePack'

const text = document.querySelector('.js-txt-cool');

function addSpans(el, text) {
  let letters = text.split('');
  let html = '';
  letters.forEach(function(letra) {
		letra = letra.trim() || '&nbsp';
    html += '<span>' + letra + '</span>';
  });
  el.innerHTML = html;
}

addSpans(text, text.innerText);

const tl = new TimelineLite();
tl.staggerFromTo('.js-txt-cool span',	1.7,
  {
    y: -window.innerHeight / 2 - 100,
    x: -window.innerHeight / 2 - 100,
  },
  {
    y: 0,
    x: 0,
    ease: Ease.Bounce.easeOut,
  },
  0.03,	'stagger'
);

tl.play();

document.querySelector('.js-txt-cool').addEventListener('click', () => {
  tl.restart();
});
