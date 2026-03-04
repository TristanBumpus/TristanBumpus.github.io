import Contributor from "./contributor";
import game_page_data from "../../public/assets/data/game_page_data.json";
import Game from "./game";
import Button_link from "./bottom_link";
import Title from "./title";
import Devlogs from "./devlog";

import { useLocation } from "react-router-dom";

export default function main_game_page() {
  const location = useLocation();
  const name = location.state;
  const game_data = game_page_data[name];

  window.scrollTo({
    top: 0,
    left: 0,
  });
  return (
    <main>
      <title>{name}</title>
      <Title name={name} desc={game_data.desc}></Title>
      <div className=" floating_backround">
        {game_data.game.link != "" && <Game link={game_data.game.link}></Game>}

        {game_data.contributor.map((data, i) => (
          <Contributor name={data.name} link={data.link} key={i} />
        ))}
        {game_data.bottom_link.main_link != "" && (
          <Button_link
            main_link={game_data.bottom_link.main_link}
            link={game_data.bottom_link.link}
            name={game_data.bottom_link.name}
          ></Button_link>
        )}
        {game_data.devlog != "" && <Devlogs devlog={game_data.devlog} />}
      </div>
    </main>
  );
}
