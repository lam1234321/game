// This would be stored in the 'src' folder of the GitHub repository

// whack-a-mole.js
const WhackAMole = ({ assetsUrl }) => {
  const [score, setScore] = useState(0);
  const [activeMole, setActiveMole] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMole(Math.floor(Math.random() * 9));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const whackMole = (index) => {
    if (index === activeMole) {
      setScore(score + 1);
      setActiveMole(null);
    }
  };

  return (
    <div className="whack-a-mole">
      <h2>Whack-a-Mole</h2>
      <p>Score: {score}</p>
      <div className="game-board">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className={`mole ${index === activeMole ? 'active' : ''}`}
            onClick={() => whackMole(index)}
          >
            {index === activeMole && <img src={`${assetsUrl}/mole.png`} alt="Mole" />}
          </div>
        ))}
      </div>
    </div>
  );
};

// This function will be called by the GameLoader to initialize the game
window.initGame = (assetsUrl) => {
  return () => <WhackAMole assetsUrl={assetsUrl} />;
};