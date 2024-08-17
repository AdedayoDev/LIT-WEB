import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Home from "./Components/Home/Home";
import bg from "../src/Assets/Background.jpg";

function App() {
  const overlayColor = "#fff2f2";
  return (
    <section
      className="relative w-full min-h-screen bg-[#fff2f2] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: 0.8 }}
      ></div>
      <div className="relative z-10">
        <Home />
        <Footer />
      </div>
    </section>
  );
}

export default App;
