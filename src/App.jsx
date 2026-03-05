import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className="main-container max-w-6xl mx-auto">
        <Navbar />
        <Banner />
       
      </div>
    </>
  );
}

export default App;
