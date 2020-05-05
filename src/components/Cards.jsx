import React from "react";

function Card({
  id,
  width,
  height,
  back,
  solved,
  cardsFront,
  flipped,
  handleClick,
  disabled,
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height,
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            width,
            height,
          }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? cardsFront : back}
          alt={id}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className={solved ? "front-solved" : back}
        />
      </div>
    </div>
  );
}

export default Card;
