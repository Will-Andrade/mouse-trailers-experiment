const trailer = document.getElementById('trailer');

const getTrailerClass = type => {
  if (type === 'video') return 'las la-play';
  return 'las la-arrow-up arrow-transformed';
};

const animateTrailer = (e, interacting) => {
  // by offsetting by half of the div's size, the bubble stays centered!
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  // trailer.style.transform = `translate(${x}px, ${y}px)`;

  // This will make the bubble lag behind the cursor
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: 'forwards'
  });
};

window.addEventListener('mousemove', e => {
  // searches up the dom tree to find an element with this reference or null 
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

  const icon = document.getElementById('trailer-icon');
  
  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
});
