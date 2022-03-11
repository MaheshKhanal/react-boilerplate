import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Test = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Paper elevation={3} variant={"outlined"} style={{ padding: "10px" }}>
        <Typography variant="h5">
          This is another page! You can manage routes in index.js file.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Test;
