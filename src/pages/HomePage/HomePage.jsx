import style from "./Home.module.scss";
import photo1 from "../../photos/excavator-in-action.jpg";
import photo2 from "../../photos/pexels-ivan-3089685sss.svg";
import photo3 from "../../photos/pexels-tom-fisk-2101131111117.svg";
import { Carousel } from "react-bootstrap";
import vk from "../../photos/icons/vk.svg";
import tg from "../../photos/icons/Vector.svg";
import odnokl from "../../photos/icons/odnok.svg";
import React from "react";
function HomePage() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1500}>
        <img className={style.photos} src={photo1} alt="Second slide" />

        <Carousel.Caption className={style.carousel_caption}>
          <div className={style.carousel_caption_child}>
            <p className={style.description}>
              Пиломатериалы Уголь Щебень Цемент Песок
            </p>
            <h1 className={style.work_area}>В Чечено-Ингушетии с доставкой</h1>
            <div className={style.buttons}>
              <button className={style.button_home}>На главную</button>
              <button className={style.button_phone}>Заказать звонок</button>
            </div>

            <h2 className={style.work_area}>
              Или связаться с нами через соц. сети
            </h2>
            <div className={style.icons}>
              <img className={style.icon} src={tg} alt="sdfsdf" />
              <img className={style.icon} src={vk} alt="sdf" />
              <img className={style.icon} src={odnokl} alt="sdfsdf" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img className={style.photos} src={photo2} alt="Second slide" />

        <Carousel.Caption className={style.carousel_caption}>
          <div className={style.carousel_caption_child}>
            <p className={style.description}>
              Пиломатериалы Уголь Щебень Цемент Песок
            </p>
            <h1 className={style.work_area}>В Чечено-Ингушетии с доставкой</h1>
            <div className={style.buttons}>
              <button className={style.button_home}>На главную</button>
              <button className={style.button_phone}>Заказать звонок</button>
            </div>

            <h2 className={style.work_area}>
              Или связаться с нами через соц. сети
            </h2>
            <div className={style.icons}>
              <img className={style.icon} src={tg} alt="sdfsdf" />
              <img className={style.icon} src={vk} alt="sdf" />
              <img className={style.icon} src={odnokl} alt="sdfsdf" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className={style.photos} src={photo3} alt="Third slide" />

        <Carousel.Caption className={style.carousel_caption}>
          <div className={style.carousel_caption_child}>
            <p className={style.description}>
              Пиломатериалы Уголь Щебень Цемент Песок
            </p>
            <h1 className={style.work_area}>В Чечено-Ингушетии с доставкой</h1>
            <div className={style.buttons}>
              <button className={style.button_home}>На главную</button>
              <button className={style.button_phone}>Заказать звонок</button>
            </div>

            <h2 className={style.work_area}>
              Или связаться с нами через соц. сети
            </h2>
            <div className={style.icons}>
              <img className={style.icon} src={tg} alt="sdfsdf" />
              <img className={style.icon} src={vk} alt="sdf" />
              <img className={style.icon} src={odnokl} alt="sdfsdf" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;
