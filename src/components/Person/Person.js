import React from 'react'
import './Person.scss'
import Wrapper from '../../hoc/Wrapper'
import redSunset from '../../assets/images/red-sunset.jpg'
const person = (props) => (
    <Wrapper>
        <div className="person">
            <div className="person__img">
                <img src={redSunset} alt=""/>
            </div>
            <div className="person__title">
                <h3>{props.name}</h3>
            </div>
            <div className="person__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque ratione explicabo iste dignissimos corrupti
            </div>
            <button className="person__cta">Contact</button>
        </div>
    </Wrapper>
)
export default person