import Game_button from "./game_button";
import Game_list_data from "../../public/assets/data/game_list_data.json";

export default function game_list() {
  return (
    <div className="game_list floating_backround">
      {Game_list_data.map((data, i) => (
        <Game_button name={data.name} img={data.img} key={i} />
      ))}
    </div>
  );
}
