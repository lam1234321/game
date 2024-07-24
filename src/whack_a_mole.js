// This would be stored in the 'src' folder of the GitHub repository
// whack-a-mole.js
window.initGame = (React, assetsUrl) => {
  const { useState, useEffect } = React;

  const WhackAMonkey = ({ assetsUrl }) => {
    const [score, setScore] = useState(0);
    const [activeMonkey, setActiveMonkey] = useState(null);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveMonkey(Math.floor(Math.random() * 9));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    const whackmMonkey = (index) => {
      if (index === activeMonkey) {
        setScore(score + 1);
        setActiveMonkey(null);
      }
    };

    return React.createElement(
      'div',
      { className: "whack-a-Monkey" },
      React.createElement('h2', null, "Whack-a-Monkey"),
      React.createElement('p', null, `Score: ${score}`),
      React.createElement(
        'div',
        { className: "game-board" },
        Array(9).fill().map((_, index) =>
          React.createElement(
            'div',
            {
              key: index,
              className: `Monkey ${index === activeMonkey ? 'active' : ''}`,
              onClick: () => whackMonkey(index)
            },
            index === activeMonkey && React.createElement('img', { src: `${assetsUrl}/Monkey.png`, alt: "Monkey" })
          )
        )
      )
    );
  };

  return () => React.createElement(WhackAMonkey, { assetsUrl: assetsUrl });
};

console.log('Whack-a-Monkey game script loaded');
