import { 
    Card, 
    Typography, 
    Input, 
    Button, 
    List, 
    ListItem,
    ListItemContent,
    Avatar,
    Box,
    Sheet,
    CircularProgress,
    IconButton
  } from '@mui/joy';
  import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const GameLobby = () => {
  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
        <Typography level="h2" textAlign="center" sx={{ mb: 3 }}>
          Waiting for Players
        </Typography>

        <Sheet
          variant="soft"
          sx={{
            p: 2,
            borderRadius: "sm",
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography level="h3">Game PIN: {pin}</Typography>
          <IconButton onClick={handleCopyPin}>
            <ContentCopyIcon />
          </IconButton>
        </Sheet>

        {/* Players List */}
        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            Players ({players.length})
          </Typography>
          {players.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <CircularProgress size="lg" />
              <Typography level="body-lg" sx={{ mt: 2 }}>
                Waiting for players to join...
              </Typography>
            </Box>
          ) : (
            <List>
              {players.map((player, index) => (
                <ListItem
                  key={player.socketId}
                  sx={{
                    bgcolor: "background.surface",
                    borderRadius: "sm",
                    mb: 1,
                    boxShadow: "sm",
                  }}
                >
                  <Avatar
                    color={index % 2 === 0 ? "primary" : "neutral"}
                    sx={{ mr: 2 }}
                  >
                    {player.name[0].toUpperCase()}
                  </Avatar>
                  <ListItemContent>
                    <Typography level="body-lg">{player.name}</Typography>
                    {player.isHost && (
                      <Typography level="body-sm" color="primary">
                        Host
                      </Typography>
                    )}
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {/* Host Controls */}
        {isHost && (
          <Button
            fullWidth
            size="lg"
            color="success"
            onClick={handleStartGame}
            disabled={players.length < 2}
          >
            Start Game ({players.length}/8 Players)
          </Button>
        )}
      </Card>
    </div>
  );
};
