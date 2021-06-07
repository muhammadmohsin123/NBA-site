import Appbar from "./components/Appbar";
import Mid from "./components/Mid";
import "./App.css";
import Card from "./components/Card";
import ImageAvatars from "./components/Avatar";
import "./App.css";
import Article from "./components/Article";
import MainComponent from "./components/MainComponents";
import BigCardComponents from "./components/bigCard";
const App = () => {
  return (
    <>
      <div style={{ marginBottom: 150 }}>
        <Appbar />
      </div>
      <div className="mid">
        <Mid />
      </div>
      <div style={{ marginBottom: 50 }}>
        <ImageAvatars />
      </div>
      <div style={{ marginBottom: 50 }}>
        <Card />
      </div>
      <div style={{ marginBottom: 50 }}>
        <Article />
      </div>
      <div style={{ marginBottom: 10 }}>
        <MainComponent />
      </div>
      <div style={{ marginBottom: 10 }}>
        <BigCardComponents />
      </div>
    </>
  );
};
export default App;
