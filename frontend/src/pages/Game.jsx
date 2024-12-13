import { Card } from "@mui/joy";
import GameList from "../Components/GameList";

const Game = () => {
  return (
    <>
      <div>
        <Typography gutterBottom variant="h5" component="div">
          Game
        </Typography>
        <GameList />
      </div>
    </>
  );
};
export default Game;
