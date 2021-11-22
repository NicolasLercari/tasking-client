import React from "react";
import "./MainLayout.scss";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TasksList from "../TasksList/TasksList";
import Box from "@mui/material/Box";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2">
          Tasking webapp
        </Typography>
      </Box>

      <Divider />
      <TasksList />
    </div>
  );
};

export default MainLayout;
