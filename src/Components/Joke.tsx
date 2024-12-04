import { Paper, Typography, Stack, Button, Box } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import { appStore } from "../Store/appStore";
import { useEffect } from "react";

function Joke() {
  const { jokes, fetchJoke } = appStore();

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <Paper sx={{ borderRadius: "28px" }}>
      <Stack
        direction="row"
        sx={{
          padding: "30px",
          justifyContent: "space-between",
          backgroundColor: "#794fee",
          borderTopLeftRadius: "28px",
          borderTopRightRadius: "28px",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          Joke Generator
        </Typography>
        <MoodIcon sx={{ fontSize: 30, color: "white" }} />
      </Stack>
      <Stack
        sx={{
          padding: "40px",
          margin: "auto",
          width: { xs: "270px", sm: "330px" },
        }}
        spacing={3}
      >
        <Box
          sx={{
            backgroundColor: "#f3f4f6",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          {jokes ? (
            <>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                {jokes.setup}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                {jokes.punchline}
              </Typography>
            </>
          ) : (
            <Typography>Loading jokes</Typography>
          )}
        </Box>
        <Button
          onClick={fetchJoke}
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: "#794fee",
            "&:hover": {
              backgroundColor: "#7347ee",
            },
          }}
          disableElevation
        >
          Tell Me Another Joke!
        </Button>
      </Stack>
    </Paper>
  );
}

export default Joke;
