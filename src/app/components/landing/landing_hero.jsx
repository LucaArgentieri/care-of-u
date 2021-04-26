import React from 'react'
import '../../style/landing/landing_hero.scss'
import OrangeShape from '../../assets/orange-shape.svg'
import GreenShape from '../../assets/green-shape.svg'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export default function LandingHero() {

    const moveToText = () => {
        gsap.to(window, {
            scrollTo: ".landing_text",
            duration: 0
        });


    }

    return (
        <>
        <div className="shape_container">
            <img className="orange_shape" src={OrangeShape} alt=""/>
            <img className="green_shape" src={GreenShape} alt=""/>
        
            <Link to="/signup"><button className="btn_cta white">Sign Up</button></Link>
        </div>




        <div className="text_container flex flex_center flex_column">
            <h1 className="orange">Ü</h1>
            <h1 className="green">Take care of the important people</h1>

            <button className="btn_cta white" onClick={moveToText}>How it works?</button>
        </div>

        <div className="shape_container">
            <img className="orange_shape_down" src={OrangeShape} alt=""/>
            <img className="green_shape_down" src={GreenShape} alt=""/>
        </div>

        </>
    )
}
