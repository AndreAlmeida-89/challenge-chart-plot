import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import InputArea from "./components/InputArea/InputArea";

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea />
      <Chart />
    </div>
  );
}

export default App;
