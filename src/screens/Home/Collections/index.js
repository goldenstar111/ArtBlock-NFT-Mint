import React,{ useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Formations",
    author: "Voltaine & Victor",
    counter: "28",
    avatar: "/images/content/avatar-1.jpg",
    pinhash: "/item/QmahTmkCyJUkPGHhdi5esNkCDaLCUt1aExRypmJ9oQNXAM",
    gallery: "https://gateway.pinata.cloud/ipfs/Qma46fWpvq3e3ZwsatvNxjkG6cHFenWWG9B8ijnw5cHpFm/MaSimulation%20%2810%29.png",
  },
  {
    title: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/avatar-3.jpg",
    pinhash: "/",
    gallery: "/images/content/collections2.png",
  },
  {
    title: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/avatar-4.jpg",
    pinhash: "/",
    gallery: "/images/content/collections3.png",
  },
  {
    title: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/photo-3.2.jpg",
    pinhash: "/",
    gallery: "/images/content/collections2.png",
  },
  {
    title: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/photo-3.1.jpg",
    pinhash: "/",
    gallery: "/images/content/collections3.png",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const history = useHistory();
  const [activeDrag, setActiveDrag] = useState({
    clientXonMouseDown: null,
    clientYonMouseDown: null,
  });

  const handleOnMouseDown = (e) => {
    setActiveDrag({
      clientXonMouseDown: e.clientX,
      clientYonMouseDown: e.clientY
    })
    e.preventDefault() // stops weird link dragging effect
  }
  const onLinkClick = (e) => {
    e.stopPropagation();
    if (
      activeDrag.clientXonMouseDown !== e.clientX ||
      activeDrag.clientYonMouseDown !== e.clientY
    ) {
      // prevent link click if the element was dragged
      e.preventDefault();
    }
    else console.log('itemclick',e);
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <div className={cn("h3", styles.title)}>Code & Art</div>
            <h2 className={cn("h4", styles.title)}>on the Blockchain</h2>
          </div>
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link
                  className={styles.item}
                  to={x.pinhash}
                  key={index}
                  onMouseDown={handleOnMouseDown}
                  onClick={onLinkClick}
                >
                  <div className={styles.gallery}>
                    <div className={styles.preview} key={index}>
                      <img src={x.gallery} alt="Collection" />
                    </div>
                  </div>
                  <div className={styles.subtitle}>{index+1}</div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.line}>
                    <div className={styles.user}>
                      <div className={styles.author}>
                        <span>{x.author}</span>
                      </div>
                    </div>
                    
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
