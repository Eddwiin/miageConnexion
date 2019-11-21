import React from 'react'
import './Footer.scss'
import Wrapper from '../../hoc/Wrapper'

const footer = () => (
    <Wrapper>
        <div className="footer">
            <nav className="footer__nav">
                <ul className="footer__list">
                    <li className="footer__list-item"><a href="/" className="footer__list-item-link">Home</a></li>
                    <li className="footer__list-item"><a href="/articles" className="footer__list-item-link">Articles</a></li>
                    <li className="footer__list-item"><a href="/about" className="footer__list-item-link">About</a></li>
                    <li className="footer__list-item"><a href="/contact" className="footer__list-item-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </Wrapper>
)
export default footer;