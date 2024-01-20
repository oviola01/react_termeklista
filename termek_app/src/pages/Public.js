import {useState} from "react";
import ProductModel from "../model/ProductModel";
import Item from "../view/Item";
import "./public.css";

export default function Public(props){
    const productModel=new ProductModel();
    const [list, getList]=useState([...productModel.getList()]);
    return(
        <div className="publicSite">
            {
                list.map(
                    (item, index)=>{return(
                        <Item unit={item} key={index}/>
                    )}
                )
            }
        </div>
    )
}