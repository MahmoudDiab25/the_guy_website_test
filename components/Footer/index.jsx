import React, { useState } from "react";
import style from "./style.module.scss";

function footer() {
  const [active, setAvtice] = useState(false);

  return (
    <div className={[style.conatiner, active && style.goUp].join(" ")}>
      <div className={style.innerContainer}>
        <div className={style.title} onClick={() => setAvtice(!active)}>
          <span className={style.text}>לבחירת מוצר להצטרפות</span>
          <span>
            <i
              className={[style.arrow, active ? style.down : style.up].join(
                " "
              )}
            ></i>
          </span>
        </div>
        <div className={style.buttoms}>
          <select className={style.customSelect}>
            <option value="מיטב דש טרייד">מיטב דש טרייד</option>
            <option value="מיטב דש גמל להשקעה">מיטב דש גמל להשקעה</option>
            <option value="מיטב דש מנג'ר">מיטב דש מנג'ר</option>
            <option value="מיטב דש ניהול תיק השקעות">
              מיטב דש ניהול תיק השקעות
            </option>
            <option value="מיטב דש קידס">מיטב דש קידס</option>
          </select>
          <span>להצטרפות אונליין</span>
        </div>
      </div>
    </div>
  );
}

export default footer;
