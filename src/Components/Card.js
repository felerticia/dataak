import React from "react";

const Card = props => {
  const { firstColor, secondColor, icon, title, data } = props;
  const style = {
    background: `linear-gradient(to right,  ${firstColor} 0%, ${secondColor} 100%)`
  };

  return (
    <div className="col s12 m4">
      <div className="card" style={style}>
        <div className="card-content white-text">
          <span className="card-title">{title || ""}</span>
          <svg className="icon">
            <use xlinkHref={`#${icon}`} />
          </svg>
          {data.map((item, key) => (
            <p key={key}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
