import "./App.css";
import Homepage from "./Homepage";
import Header from "./Header";
import Query from "./Query";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Query />
        <Homepage />
      </div>
    </>
  );
}

export default App;
