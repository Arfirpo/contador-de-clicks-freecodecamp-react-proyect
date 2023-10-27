import './css/App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { useState } from 'react';

function App() {


  const [clicNum, setClicNums] = useState(0);

  const handleClick = () =>{
    setClicNums(clicNum + 1);
  };

  const resetCounter = () => {
    setClicNums(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo} 
          alt="logo-freecodecamp" 
          className="freecodecamp-logo" />
      </div>
      <div className="main-container">
        <Counter 
          clicNum={clicNum}
        />
        <Button 
          text='Click'
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button
          text='Reset'
          isClickButton={false}
          handleClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
