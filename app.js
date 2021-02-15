const keys = document.querySelectorAll('.key');

const notes = [];
const keyboard = ['KeyZ', 'KeyS', 'KeyX', 'KeyD', 'KeyC', 'KeyV', 'KeyG', 'KeyB', 'KeyH', 'KeyN', 'KeyJ', 'KeyM'];

class Note {
  constructor(key, src, keyboard) {
    this.key = key;
    this.src = src;
    this.keyboard = keyboard;
  }
}

const init = () => {
  keys.forEach( (key, index) => {
    notes.push(new Note(key.id, `./assets/${key.id}.mp3`, keyboard[index]));
  });
};

const play = (index) => {
  const audio = new Audio(notes[index].src);
  audio.currentTime = 0;
  audio.play();
};

keys.forEach( (key, index) => {
  key.addEventListener('click', () => {
    play(index);
  });
});

window.addEventListener('keydown', (e) => {
  if(e.repeat) return;
  const key = e.code;
  notes.forEach( (note) => {
    if(note.keyboard === key) {
      play(notes.indexOf(note));
    }
  });
});

init();