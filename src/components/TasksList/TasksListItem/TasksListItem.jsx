import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const TasksListItem = ({ onClick, task }) => {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemText>Task #{task.id}</ListItemText>
      <ListItemText>{task.title}</ListItemText>
    </ListItemButton>
  );
};

export default TasksListItem;

TasksListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
