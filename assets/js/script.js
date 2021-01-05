/*
 * Evening Startpage
 * Inspired by https://github.com/jeroenpardon/sui
 * You can find it at https://github.com/TB-96/Evening-Startpage
 * Made by TB-96 2020
 *
 */

// Time and date settings
function startTime() {
  var currentDate = new Date();
  var hr = parseInt(currentDate.getHours());
  var min = parseInt(currentDate.getMinutes());
  //Add a zero in front of numbers<10
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("header-time").innerHTML = hr + ":" + min;

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  var date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header-date").innerHTML = date;

  var time = setTimeout(function(){ startTime() }, 60000);
}

// You can add your own random quotes and stuff here
const quotes = [
  'Integrity is doing the right thing even when no one is watching.',
  'Friendship...is born at the moment when one man says to another "What! You too? I thought that no one but myself...',
  'You can never get a cup of tea large enough or a book long enough to suit me.',
  'Some day you will be old enough to start reading fairy tales again.',
  'I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
  'A childrens story that can only be enjoyed by children is not a good childrens story in the slightest.',
  'If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world.',
  'The Christian does not think God will love us because we are good, but that God will make us good because He loves us.',
  'Friendship is unnecessary, like philosophy, like art...It has no survival value; rather it is one of those things which give value to survival.',
  'Eating and reading are two pleasures that combine admirably.',
  'I can not imagine a man really enjoying a book and reading it only once.',
  'No book is really worth reading at the age of ten which is not equally – and often far more – worth reading at the age of fifty and beyond.',
  'To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.',
  'We are not necessarily doubting that God will do the best for us; we are wondering how painful the best will turn out to be.',
  'There are far, far better things ahead than any we leave behind.',
  'A man can no more diminish Gods glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word darkness on the walls of his cell.',
  'Love is not affectionate feeling, but a steady wish for the loved persons ultimate good as far as it can be obtained.',
  'Crying is all right in its way while it lasts. But you have to stop sooner or later, and then you still have to decide what to do.',
  'Pain insists upon being attended to. God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains. It is his megaphone to rouse a deaf world.',
  'God can not give us peace and happiness apart from Himself because there is no such thing.',
  'Atheism turns out to be too simple. If the whole universe has no meaning, we should never have found out that it has no meaning...',
  'I have learned now that while those who speak about ones miseries usually hurt, those who keep silence hurt more.',
  'It is a good rule after reading a new book, never to allow yourself another new one till you have read an old one in between.',
  'I am on Aslans side even if there is not any Aslan to lead it. I am going to live as like a Narnian as I can even if there is not any Narnia.',
  'No one ever told me that grief felt so like fear.',
  'He died not for men, but for each man. If each man had been the only man made, He would have done no less.',
  'The homemaker has the ultimate career. All other careers exist for one purpose only - and that is to support the ultimate career. ',
  'I am trying here to prevent anyone saying the really foolish thing that people often say about Him: I’m ready to accept Jesus as a great moral teacher, but I don’t accept his claim to be God. That is the one thing we must not say. A man who was merely a man and said the sort of things Jesus said would not be a great moral teacher. He would either be a lunatic — on the level with the man who says he is a poached egg — or else he would be the Devil of Hell. You must make your choice. Either this man was, and is, the Son of God, or else a madman or something worse. You can shut him up for a fool, you can spit at him and kill him as a demon or you can fall at his feet and call him Lord and God, but let us not come with any patronizing nonsense about his being a great human teacher. He has not left that open to us. He did not intend to.',
  'Imagine yourself as a living house. God comes in to rebuild that house. At first, perhaps, you can understand what He is doing. He is getting the drains right and stopping the leaks in the roof and so on; you knew that those jobs needed doing and so you are not surprised. But presently He starts knocking the house about in a way that hurts abominably and does not seem to make any sense. What on earth is He up to? The explanation is that He is building quite a different house from the one you thought of - throwing out a new wing here, putting on an extra floor there, running up towers, making courtyards. You thought you were being made into a decent little cottage: but He is building a palace. He intends to come and live in it Himself.',
  'To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.',
];
document.getElementById("header-quote").innerText = quotes[
  Math.floor(Math.random() * quotes.length)
];

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#link')) return;
	// Otherwise, run your code...
	document.body.style.opacity = 0;

}, false);

// SEARCH

const $s = {
  qS: e => document.querySelector(e),
  qA: e => document.querySelectorAll(e)
};

// You can add your own search query here for anything you're interested in.
// [command character]: ['search url', 'title']
function engines () {
  return {
	d: ['https://duckduckgo.com/?q=', 'DuckDuckGo'],
	g: ['https://google.com/search?q=', 'Google'],
	yt: ['https://youtube.com/results?search_query=', 'Youtube'],
	w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
  };
}

var search  = $s.qS('#search'),
    input   = $s.qS('#search input[type="text"]'),
    engines = engines();

for (var key in engines)
  $s.qS('.search-engines').innerHTML += `<li><p title="${engines[key][1]}">!${key}</p></li>`;

document.onkeypress = (e) => {
    if (e.key == 's')
      search.classList.add('active');

    input.focus();
    input.scrollIntoView();

    search.onkeyup = (e) => {
      let args   = e.target.value.split(' '),
          prefix = args[0],
          engine = engines['d'][0], // the default engine (google in this case)
          str    = 0;

      $s.qA('.search-engines li p').forEach((eng) => {
        let current = eng.parentNode;

        (prefix == eng.innerHTML)
          ? current.classList.add('active')
          : current.classList.remove('active');
      });

      if (e.key == 'Enter') {
        if (prefix.indexOf('!') == 0)
          (engine = engines[prefix.substr(1)][0], str = 3);

        window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
      } else if (e.keyCode == 27)
        search.classList.remove('active');
    };
};

document.getElementById("container").addEventListener("DOMContentLoaded", startTime());
