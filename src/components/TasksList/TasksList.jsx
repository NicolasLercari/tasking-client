import React, { useEffect, useState } from "react";
import { getTasks } from "../../api/tasks/getTasks";
import InfiniteList from "../generics/InfiniteList/InfiniteList";
import QuantityInput from "../QuantityInput/QuantityInput";
import Box from "@mui/material/Box";
import TaskDialog from "../TaskDialog/TaskDialog";
import { changeStatusTask } from "../../api/tasks/changeStatusTasks";
import TasksListItem from "./TasksListItem/TasksListItem";

const defaultQuantity = 3;

const initTasksState = {
  tasks: [],
  getNextPage: () => {},
  totalCount: 0,
};

const TasksList = () => {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [selectedTask, setSelectedTask] = useState(null);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [{ tasks, getNextPage, totalCount }, setTasksData] =
    useState(initTasksState);

  const fetchData = async () => {
    const { tasks, getNextPage, totalCount } = await getTasks({
      quantity,
    });
    setTasksData({ tasks, getNextPage, totalCount });
  };

  const handleFetchData = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleTaskComplete = (task) => changeStatusTask(task);

  const loadMore = async () => {
    const {
      tasks,
      getNextPage: newGetNextPage,
      totalCount,
    } = await getNextPage({});

    setTasksData((prevState) => ({
      tasks: prevState.tasks.concat(tasks),
      getNextPage: newGetNextPage,
      totalCount,
    }));
  };

  return (
    <Box style={{ display: "flex", alignItems: "start" }}>
      <InfiniteList
        items={tasks}
        totalSize={totalCount}
        loadMore={loadMore}
        loading={loading}
      >
        {(task) => (
          <TasksListItem
            onClick={() => {
              setSelectedTask(task);
              setOpen(true);
            }}
            task={task}
          />
        )}
      </InfiniteList>
      {selectedTask && (
        <TaskDialog
          open={open}
          setOpen={setOpen}
          onConfirm={() => handleTaskComplete(selectedTask)}
          dialogTitle={`Task #${selectedTask.id} - ${selectedTask.title}`}
        />
      )}
      <QuantityInput
        onChange={(value) => {
          setQuantity(value);
        }}
        quantity={quantity}
        defaultQuantity={defaultQuantity}
        onClick={() => {
          handleFetchData();
        }}
      />
    </Box>
  );
};

export default TasksList;
