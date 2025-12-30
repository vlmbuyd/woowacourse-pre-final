import Input from './input.js';
import PlayAllRound from './PlayGame.js';
import Winner from './Winner.js';

class App {
  async run() {
    const { parsedCarNames, parsedAttempts } = await Input.getInput();

    const result = PlayAllRound.run(parsedCarNames, parsedAttempts);

    Winner.announce(result);
  }
}

export default App;
