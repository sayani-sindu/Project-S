import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
const GameList = () => {
    return(<>
       <Card sx={{ maxWidth: 345 }}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.discoverycommons.com%2Fsenior-living-blog%2Fthe-advantages-of-playing-trivia-in-your-golden-years%2
           F&psig=AOvVaw2PGEZGeHJ1MT6uHLfo81Xz&ust=1734178820478000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD36N3dpIoDFQAAAAAdAAAAABAE"
           alt="Trivia"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             Trivia Game
           </Typography>
           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A trivia game is a competition where players answer questions about interesting but
              unimportant facts on a variety of topics.
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
    </>)
}
export default GameList;