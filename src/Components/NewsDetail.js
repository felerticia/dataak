import React from "react";

const NewsDetail = props => {
  return (
    <div className="newsDetail">
      <h3>{props.data.title}</h3>
      <img src={props.data.imageURI} alt={props.data.title} />
      <h6>{props.data.timeAgo}</h6>
      <h5>{props.data.abstract}</h5>
    </div>
  );
};

export default NewsDetail;
