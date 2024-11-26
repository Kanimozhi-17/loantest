import logo from './logo.svg';
import './App.css';
import Header_section from './components/header_file';
import Mid_content from './components/mid_content';
import Bottom_content from './components/footer';

function App() {
  return (
    <div className="App">
      <Header_section></Header_section>
      <Mid_content></Mid_content>
      <Bottom_content></Bottom_content>
    </div>
  );
}

export default App;
