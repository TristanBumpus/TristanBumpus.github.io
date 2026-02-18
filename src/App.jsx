import "../public/assets/css/main.css";

import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_game_page from "./components/main_game_page";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/index.html" element={<Main />}></Route>

          <Route path="/game_page" element={<Main_game_page />}></Route>
        </Routes>{" "}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
