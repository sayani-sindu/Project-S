import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  AspectRatio,
  CardOverflow,
} from "@mui/joy";

const GameList = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src="" srcSet=" 2x" loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trivia Game
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Create Quizzes and Play with your friends
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default GameList;
