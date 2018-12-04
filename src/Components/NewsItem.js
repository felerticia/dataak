import React, { Component } from "react";

class NewItem extends Component {
  render() {
    const { data, currentNews, index, showFullNews } = this.props;
    return (
      <div
        className={currentNews === index ? "newsItem active" : "newsItem"}
        onClick={showFullNews.bind(this, index)}
      >
        <img src={data.imageURI} alt={data.title} />
        <h3>{data.title}</h3>
        <h6>{data.timeAgo}</h6>
      </div>
    );
  }
}

export default NewItem;
