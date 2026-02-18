import img from "../../public/assets/img/main/BioRain.png";

export default function header() {
  return (
    <header>
      <div className="top_bar">
        <a href="/index.html">
          <img src={img} alt="" />
        </a>
        <h2>BioRain Games</h2>
      </div>
    </header>
  );
}
