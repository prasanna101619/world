import './App.css'; // Import your CSS file
import Navbar from './Navbar';
import GameContainer from './GameContainer';
import ComingSoonPopup from './CmSoon';

const App = () => {
  return (
    <div id="body">
      <Navbar/>
      <GameContainer />
      <ComingSoonPopup />
    </div>
  );
};

export default App;
