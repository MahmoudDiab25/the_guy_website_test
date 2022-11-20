import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./style.module.scss";
import Card from "../../components/Cards";
// import useScreenType from "react-screentype-hook";

// card data
// ------
const cards = [
  {
    id: "c1",
    title: "https://lps.meitav.co.il/images/available-money/gemel-logo.png",
    img: "https://lps.meitav.co.il/images/available-money/shekel_mark_icon.png",
    text: "אל תתנו לעתיד להפתיע אתכם פתחו תכנית חיסכון במיטב דש גמל להשקעה.",
    link: "",
  },
  {
    id: "c2",
    title: "https://lps.meitav.co.il/images/available-money/trade-logo.png",
    img: "https://lps.meitav.co.il/images/available-money/stocks_icon.png",
    text: "הצטרפו לחבר הבורסה שלנו והתחילו לסחור בבורסה בעמלות אטרקטיביות.",
    link: "",
  },
  {
    id: "c3",
    title: "https://lps.meitav.co.il/images/available-money/kids-logo.png",
    img: "https://lps.meitav.co.il/images/available-money/AvailableMoney_Products_icons.png",
    text: "פתחו עבור הילדים שלכם חיסכון שיעזור להם להגשים חלומות.",
    link: "",
  },
  {
    id: "c4",
    title:
      "https://lps.meitav.co.il/images/available-money/investments-logo.png",
    img: "https://lps.meitav.co.il/images/available-money/money_bag_icon.png",
    text: "נהלו תיק השקעות ותיהנו מניהול חכם, מקצועי ובהתאמה אישית.",
    link: "",
  },
];
//------

// how many card show on the screen
// -------
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1199, min: 990 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 989, min: 0 },
    items: 1,
  },
};
//------

// change arrow style
// ------
// right arrow
const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} className={style.rightArrow}>
      <img
        src="https://lps.meitav.co.il/images/available-money/slider_arrow.png"
        alt=""
      />
    </button>
  );
};
// left arrow
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} className={style.leftArrow}>
      <img
        src="https://lps.meitav.co.il/images/available-money/slider_arrow.png"
        alt=""
      />
    </button>
  );
};
//-------

function Silder() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const showCenterMode = screenWidth < 970;
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite
      showDots={showCenterMode}
      focusOnSelect
      centerMode={showCenterMode}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      itemClass={style.itemClass}
      sliderClass={style.sliderClass}
      containerClass={style.containerClass}
    >
      {cards.map((card) => {
        return (
          <Card
            extraStyle={{
              width: "90%",
              height: "500px",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={card.id}
            card={card}
            img={card.img}
            link={card.link}
            infoButton={true}
            correctIcon={false}
          />
        );
      })}
    </Carousel>
  );
}

export default Silder;
