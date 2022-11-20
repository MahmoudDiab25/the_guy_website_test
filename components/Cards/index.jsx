import React from "react";
import style from "./style.module.scss";

// Params:
//  card: card info object {(title:"",text:""} in slide card the title is src for an img.
//  infoButton boolean : show button in the card (for slide cards).
//  icon string : src link from image in the slide card.
//  extraStyle : extra style for main container.

function Cards({ card, infoButton = false, img = "", extraStyle }) {
  return (
    <div className={style.container} key={card.id} style={extraStyle}>
      {infoButton ? (
        ""
      ) : (
        <img
          src="https://lps.meitav.co.il/images/available-money/checkmark.png"
          alt=""
          width="34px"
          style={{ marginBottom: "10px" }}
        />
      )}
      {infoButton ? (
        <img src={card.title} alt="" className={style.slideTitle} />
      ) : (
        <h3 className={style.title}>{card.title}</h3>
      )}
      {infoButton && <img src={img} alt="" className={style.slideImg} />}
      <p
        className={style.text}
        style={infoButton ? { fontSize: "18px", color: "#474747" } : {}}
      >
        {card.text}
      </p>
      {infoButton && (
        <a className={style.buttonInfo}>
          <span>למידע נוסף</span>
        </a>
      )}
    </div>
  );
}

export default Cards;
