import React from 'react'
import './Article.scss'
import city from '../../assets/images/city-before-sunrise.jpg'
import Wrapper from '../../hoc/Wrapper'

const article = (props) => (
    <Wrapper>
        <div className="article">
            <div className="article__img">
                <img src={city} alt=""/>
            </div>
            <section>
            <div className="article__title"><h4>{props.title}</h4></div>
            <div className="article__description">
            Vorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque ratione explicabo iste dignissimos corrupti
            </div>
            <div className="article__author">
                El Dood
            </div>
            </section>
        </div>
    </Wrapper>
)
export default article