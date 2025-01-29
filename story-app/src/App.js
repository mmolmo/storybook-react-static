import './App.css';

/*imports components from folder*/
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/*renders the elements onto the page*/}
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
