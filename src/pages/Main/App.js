import { Grid, Paper, Typography } from "@mui/material";

const App = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Paper elevation={3} variant={"outlined"} style={{ padding: "10px" }}>
        <Typography variant="h5">
          This is the main entry point for the app.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default App;
