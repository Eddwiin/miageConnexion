import React from 'react';
import img1 from './../../../mocks/img1.jpg';
import img2 from './../../../mocks/img2.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from './Home.module.scss';
// import { Slider } from '../../../UI';

const Home = (props) => {

    return (

        <div className={style.home}>
            <div className={style.home__navbar}>
                {props.loadNavbar()}
            </div>
            <div>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={true}
                    showThumbs={false}>
                    <div className={style.home__slide}>
                        <img className={style.home__slide__img} src={img1} alt="img1" />
                        <div className={style.home__slide__overlay}>
                            <p className={style.home__slide__overlay__title}>TITLE</p>
                            {/* <p className={style.slide__overlay__text}>TEXT</p> */}
                        </div>
                    </div>
                    <div className={style.home__slide}>
                        <img className={style.home__slide__img} src={img2} alt="img2" />
                        <div className={style.home__slide__overlay}>
                            <span className={style.home__slide__overlay__title}>TITLE</span>
                            {/* <span className={style.slide__overlay__text}>TEXT</span> */}
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}
export default Home