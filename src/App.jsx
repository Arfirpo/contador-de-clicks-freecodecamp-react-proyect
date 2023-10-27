import './css/App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { Button } from './components/Button';

function App() {

  const handleClick = () =>{
    console.log('click')
  }

  const resetCounter = () => {
    console.log('reset')
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo} 
          alt="logo-freecodecamp" 
          className="freecodecamp-logo" />
      </div>
      <div className="main-container">
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
