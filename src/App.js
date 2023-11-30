import './App.css';
import Greeting from './Greeting.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
      <Greeting name="John Doe" message="Welcome to the webpage"></Greeting>
        <Footer></Footer>
    </div>
  );
}

export default App;
