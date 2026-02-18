import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/main.css";

import Header from "./components/header";
import Main from "./components/main_game_page";
import Footer from "./components/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
