import React from "react";
export default function Card(props){
let badgeText
if(props.openspots ===0){
    badgeText = "SOLD OUT "
}
else if(props.location){
    badgeText = "ONLINE "
}
    return(
        <div className="card">
           {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.imgCard} alt="img-card" className="card-image"></img>
            <div className="stats-card">
                <img src={props.starCard} alt="card-star" className="card-star" ></img>
                <span>{props.rate}</span>
                <span className="gray">{props.number}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.summary}</p>
            <p><span className="bold">{props.sale} </span>{props.for}</p>
        </div>
    )
}