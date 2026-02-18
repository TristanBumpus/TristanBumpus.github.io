import Game_list from "./game_list";
import Title from "./title";

export default function main() {
  return (
    <main>
      <Title
        name={"BioRain Games"}
        desc={
          "I'm a solo game dev I've made a couple of games so far and I'm hoping to make more and one day even making money off some of them."
        }
      />
      <Game_list />
    </main>
  );
}
