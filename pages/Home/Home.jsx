import React, { useState } from "react";
import style from "./style.module.scss";

import Cards from "../../components/Cards";
import Slider from "../../components/CardSlider";

export default function Home() {
  const data = [
    {
      id: "cc1",
      title: "מקצועיות וניסיון",
      text: "פועלים במגוון רחב של תחומי השקעות מ-1979",
    },
    {
      id: "cc2",
      title: "מקצועיות וניסיון",
      text: "פועלים במגוון רחב של תחומי השקעות מ-1979",
    },
    {
      id: "cc3",
      title: "חדשנות ואנרגיה יצירתית",
      text: "רותמים לטובתכם טכנולוגיות מתקדמות שמאפשרות הצבת סטנדרטים חדשים של שירות",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.seaconOne}>
        <div className={style.wrapper}>
          <div className={style.innerWrapper}>
            <div className={style.innerContainer}>
              <h1>
                אל תשאירו את הכסף כלוא, תנו לו לצאת לחופשי <span>●</span>
              </h1>
              <h2>
                גם עכשיו ומכל מקום, תוכלו ליהנות מהניסיון והמגוון של מיטב דש,
                ולמצוא מוצר פיננסי שיתאים לניהול הכסף הפנוי שלכם.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={style.seaconTwo}>
        <div className={style.sliderContainer}>
          <Slider />
        </div>
      </div>
      <div className={style.seaconThree}>
        <div className={style.title}>
          <div>
            <img
              src="https://lps.meitav.co.il/images/available-money/logo-a.png"
              alt=""
            />
          </div>
          <span></span>
        </div>
        <p>
          ''אנחנו נמצאים בנקודות ובצמתים החשובים בחיי הלקוחות שלנו ושואפים
          להוביל אותם קדימה. שמנו לנו למטרה לנהל את דרכנו במקצועיות, בשקיפות
          ובהוגנות''
        </p>
        <div className={style.profileImg}>
          <img
            src="https://lps.meitav.co.il/images/available-money/ceo.png"
            alt=""
          />
        </div>
        <span>אילן רביב | מנכ''ל מיטב דש השקעות בע''מ</span>
        <div className={style.partTwo}>
          <div className={style.title}>
            <h1>למה דווקא מיטב דש?</h1>
            <span></span>
          </div>
          <ul className={style.cardContainer}>
            {data.map((card) => {
              return <Cards card={card} key={card.id} />;
            })}
          </ul>
        </div>
      </div>
      <div className={style.seaconFour}>
        <div className={style.innerContainer}>
          <p>
            האמור אינו מהווה ייעוץ / שיווק פנסיוני ו/או שיווק/ייעוץ השקעות ו/או
            תחליף לייעוץ/שיווק כאמור המתחשב בנתונים ובצרכים של כל אדם ואין באמור
            משום הבטחת תשואה או רווח.
          </p>
        </div>
      </div>
    </div>
  );
}
