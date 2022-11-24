import React,{useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import "../../css/home.css"


export default function Home(){
    const dispatch=useDispatch()
    const allProducts=useSelector((state)=>state.info)
    console.log(allProducts)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <div className="pro">
            <div className="tit">
                <h1>Productos</h1>
            </div>
            <div className="ca">
                {
                    allProducts?.map(e=>{
                        return(
                            <fragment key={e.id}>
                                <Card
                                id={e.id}
                                img={e.images[0]}
                                name={e.title}
                                brand={e.brand}                                
                                />
                            </fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}