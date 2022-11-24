import React, { useContext } from "react";
import "../../css/list.css"
import { DataContext } from "../../context/DataProvider";

export default function List(){
    const value=useContext(DataContext)
    const [menu,setMenu]=value.menu
    const [carrito,setCarrito]=value.carrito
    const show1=menu?"li show":"li"
    const show2=menu?"lis show":"lis"

    const setfalse=()=>{
        setMenu(false)
    }
    console.log(carrito)

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="lisClose" onClick={setfalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h3>Su Lista De Compras</h3>
                {
                    carrito.map(e=>{
                        return(
                            <div className="lisC">
                    <div className="lisIte">
                        <img src={e.images[0]} alt="img_not fund" />
                    </div>
                    <div className="liT">
                        <h4>{e.title}</h4>
                    </div>
                    <div className="pri">
                        <p className="Pric">{e.price}$</p>
                    </div>
                    <div className="tr">
                        <box-icon name='trash-alt' ></box-icon>                    
                    </div>
                </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}