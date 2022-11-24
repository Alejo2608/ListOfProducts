import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { DataContext } from "../../context/DataProvider";
import "../../css/card.css"

export default function Card(props){
    const value=useContext(DataContext)
    const addCarrito=value.addCarrito

    return(
        <div className="cars">
            <div className="img">
                <img src={props.img} alt="img_not_fund" />
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <h4>{props.brand}</h4>
            </div>
            <div className="boton">
                <Button variant="success" onClick={()=>addCarrito(props.id)}>Añadir a Lista</Button>{' '}
            </div>
        </div>
    )
}