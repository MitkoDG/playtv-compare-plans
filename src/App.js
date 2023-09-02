import { ExcelInput } from './components/ExcelInput';
import './App.css';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <div className='heading'>
        <h1>АБОНАМЕНТНИ ПЛАНОВЕ</h1>
        <span className='effect'></span>
      </div>
      <ExcelInput />
      <Footer />
    </div>
  );
}

export default App;
