import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const dispatch=useDispatch()
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
    const Data=useSelector((state)=>state.info)
	console.log(carrito)

    useEffect(()=>{
        dispatch(getProducts())
    },[])

  useEffect(() => {
		const producto = Data 
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);
	
	const addCarrito = (id) =>{
		const check = carrito.every(e =>{
			return e.id !== id
			
		})
		if(check===true){
			console.log(productos)
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	
	const value = {
		productos : [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};