import "./App.css";
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <div className="container">
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
