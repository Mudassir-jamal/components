import React from 'react'
import "./CssFiles/Card.css"
// import {FiHeart} from "react-icons/fi"




const Card = (props) => {
    

    // const {data,icon} = props

    return (
        <div className="innerCArd">
            <div className="first_in">
                <mark>{props.mark}</mark>

                {props.icon}

            </div>

            <div className="img"> <img src={props.img} height="150" alt="qws"/> </div>


            <div className="sec_in">
                <strong>{props.price}</strong>
                <span>{props.text}</span>
            </div>


            <div className="third_in">
                <span>{props.location}</span>
                <span>{props.time}</span>
            </div>
            
        </div>
    )
}

export default Card
