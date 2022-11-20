import React, { useState } from "react";
import style from "./style.module.scss";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className={style.container}>
        <div className={style.rightBox}>
          <div className={style.navButton} onClick={() => setShowNav(true)}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={style.logo}>
            <img
              src="https://lps.meitav.co.il/images/available-money/logo-a.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={[style.showNav, showNav && style.fadeIn].join(" ")}>
        <div className={style.title}>
          <div onClick={() => setShowNav(false)}>
            <img
              src="https://flaticons.net/icon.php?slug_category=office&slug_icon=wrong"
              alt=""
              className={style.closeButton}
            />
          </div>
          <div className={style.logo}>
            <img
              src="https://lps.meitav.co.il/images/available-money/logo_white.png"
              alt=""
              width="137px"
            />
          </div>
        </div>
        <div className={style.pageButtons}>
          <span className={style.button}>מיטב דש טרייד </span>
          <span className={style.button}>מיטב דש גמל להשקעה </span>
          <span className={style.button}>מיטב דש מנג'ר </span>
          <span className={style.button}>מיטב דש ניהול תיק השקעות </span>
          <span className={style.button}>מיטב דש קידס </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
