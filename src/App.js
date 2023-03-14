import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar aboutme="About" />
      <div className="container my-3">
        <TextForm heading="Enter a text to analyze below" />
      </div>
    </>
  );
}

export default App;
