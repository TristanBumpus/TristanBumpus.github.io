import { Link } from "react-router-dom";

export default function game_button({ img, name }) {
  const data = name;
  return (
    <div className="game_button">
      {/* <a href={"/game_page.jsx/" + name}> */}
      <Link
        replace
        to="/game_page"
        state={data}
        prefetch="intent"
        // reloadDocument
      >
        <img src={img} alt={name + " cover image"} />
      </Link>
      {/* </a> */}
      <h3>{name}</h3>
    </div>
  );
}
