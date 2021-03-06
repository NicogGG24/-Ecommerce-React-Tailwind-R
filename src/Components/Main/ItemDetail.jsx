import { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { contexto } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
    
    const [btnColor, stateBtnColor] = useState(true)
    
    const [cartAmmount, setCartAmmount] = useState(0)

    const { addItem } = useContext(contexto)


    const handleColor = () => {
        stateBtnColor(!btnColor)
    }

    
    const onAdd = (a) => {
        setCartAmmount(prevCount => prevCount + a);
        const newProduct = {...product, quantity: a}
        addItem(newProduct)
    }


    return(
        <div className="box-border flex flex-col justify-center items-center m-4 gap-8
         sm:flex-row sm:max-w-none sm:p-12">
            <figure>
                <img src={product.image} alt={product.title} className=" w-80 h-80 max-w-none
                lg:w-[500px] lg:h-[500px]"/>
            </figure>
            <div className="flex flex-col justify-between sm:min-h-[320px] lg:min-h-[400px]">
                <h2 className="font-bold text-lg text-center sm:text-start">{product.title}</h2>
                <div className="flex items-end gap-4">
                    <h3 className="font-bold mt-10">Select a Color</h3>
                    {
                        btnColor ?
                         
                        <button className="w-7 h-7 border-solid border-gray-500 border-2 bg-black" onClick={handleColor}></button> 

                        : 

                        <button className="w-7 h-7 border-solid border-2 border-red-600 bg-black"onClick={handleColor}></button>
                    }


                    {
                        btnColor ? 
                        <button className="w-7 h-7 border-solid border-red-600 border-2 bg-white"onClick={handleColor}></button> 

                        :

                        <button className="w-7 h-7 border-solid border-gray-500 border-2 bg-white" onClick={handleColor}></button> 
                    }
                </div>
                <div className="gap-8">
                    <h3 className="font-bold text-center sm:text-start">DESCRIPTION</h3>
                    <p className="text-center sm:text-start">{product.description}</p>
                </div>
                <div className="gap-6 sm:flex sm:items-center sm:justify-start sm-pt-6 sm-pb-6">
                    <h3 className="text-center pt-4 sm:text-start font-bold">Ammount:</h3>
                    <ItemCount onAdd={onAdd} cartAmmount={cartAmmount} minAmmount={1} stock={8} />
                    <div className="flex flex-col items-center sm:justify-start">
                        <span className=" text-red-600 font-extrabold text-lg ">${product.price}</span>                 
                    </div>

                </div>

            </div>

        </div>
    );
};
export default ItemDetail;