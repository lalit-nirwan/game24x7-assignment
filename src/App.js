
import './App.scss';
import ModalCard from './components/ModalCard/ModalCard';

import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  
  const closeHandler = ()=> {
    setIsVisible(false)
  } 

  return (
    <div className="App">
      {isVisible ? <ModalCard closeHandler={closeHandler}/> : null }
    </div>
  );
}

export default App;
