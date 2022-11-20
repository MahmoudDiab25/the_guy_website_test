import React, { useState } from "react";
import style from "./style.module.scss";

function footer() {
  const [avtive, setAvtice] = useState(false);
  return (
    <div className={style.conatiner}>
      <div className={style.innerContainer}>
        <div className={style.title}>
          <span className={style.text}> לבחירת מוצר להצטרפות</span>
          <span>
            <i
              className={[style.arrow, avtive ? style.down : style.up].join(
                " "
              )}
            ></i>
          </span>
        </div>
        <div className={style.buttoms}></div>
      </div>
    </div>
  );
}

export default footer;
