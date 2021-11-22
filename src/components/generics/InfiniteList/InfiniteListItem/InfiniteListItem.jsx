import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";

const InfiniteListItem = ({ activateSensor, loadMore, children }) => {
  const handleOnChange = (isVisible) => {
    if (isVisible) loadMore();
  };

  return (
    <VisibilitySensor
      active={activateSensor}
      partialVisibility
      onChange={handleOnChange}
    >
      {children}
    </VisibilitySensor>
  );
};

export default InfiniteListItem;

InfiniteListItem.propTypes = {
  activateSensor: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
