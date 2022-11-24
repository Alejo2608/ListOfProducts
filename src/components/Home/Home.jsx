import React,{useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import "../../css/home.css"
import { useState } from "react";
import Paginated from "../Paginated/Paginated";


export default function Home(){
    const dispatch=useDispatch()
    const allProducts=useSelector((state)=>state.info)
    const [orden,setOrden]=useState("")
    const [currentPage,setCurrentPage]=useState(1)
    const [productsPerPage, setProductsPerPage]=useState(4)
    const indexOfLastProduct=currentPage * productsPerPage
    const indexOfFirstProduct=indexOfLastProduct - productsPerPage
    const currentProducts=allProducts.slice(indexOfFirstProduct,indexOfLastProduct)
    console.log(allProducts)

    const paginated=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

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
                    currentProducts?.map(e=>{
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
            <Paginated
            productsPerPage={productsPerPage}
            allProducts={allProducts.length}
            paginated={paginated}
            />
        </div>
    )
}