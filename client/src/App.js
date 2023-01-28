
import './App.css';
import MainRoute from './Routes/MainRoute';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
