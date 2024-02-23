export default function startGame() {
  let activeHole = 1;
  let maxLength = 16;

  const getHole = (index) => document.getElementById(`hole${index}`);
  
  const deactivateHole = (index) => {
    getHole(index).classList.remove('hole-has-goblin');
    getHole(index).dataset.visited = 'true';
    maxLength -= 1;
  }
    
  const activateHole = () => {
    activeHole = Math.floor(1 + Math.random() * 16);
    if (getHole(activeHole).dataset.visited === 'true') {
      activateHole();
    } else {
      getHole(activeHole).classList.add('hole-has-goblin');
    }
  }

  setInterval(() => {
    deactivateHole(activeHole);
    if (maxLength < 1) {
      return;
    }
    activateHole();
  }, 800);

}



