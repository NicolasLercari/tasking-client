import * as React from "react";
import Box from "@mui/material/Box";
import InfiniteListItem from "./InfiniteListItem/InfiniteListItem";
import PropTypes from "prop-types";

const InfiniteList = ({
  children,
  items,
  totalSize,
  loadMore,
  loading,
  placeholder,
}) => {
  const currentListSize = items.length;
  const hasMore = totalSize !== undefined && currentListSize < totalSize;

  return (
    <Box>
      <ul>
        {loading && placeholder}
        {!loading &&
          items?.map((item, index) => {
            const isLastItem = index === currentListSize - 1;
            return (
              <InfiniteListItem
                key={index}
                activateSensor={isLastItem && hasMore}
                loadMore={loadMore}
              >
                {children(item, index)}
              </InfiniteListItem>
            );
          })}
      </ul>
    </Box>
  );
};

export default InfiniteList;

InfiniteList.propTypes = {
  loading: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  totalSize: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.func.isRequired,
  placeholder: PropTypes.element,
};

InfiniteList.defaultProps = {
  placeholder: <p>Loading...</p>,
};
