import React from "react";
import PropTypes from "prop-types";

const List = ({ listItems, listType }) => {
  const Tag = `${listType}`;
  return (
    <Tag>
      {listItems.map((list) => (
        <li>{list.item}</li>
      ))}
    </Tag>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf({ item: PropTypes.string }).isRequired,
  listType: PropTypes.oneOf(["ol", "ul"]).isRequired,
};

List.defaultProps = {
  listType: "ul",
};

export default List;
