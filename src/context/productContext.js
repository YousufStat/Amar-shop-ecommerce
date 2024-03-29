import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext=createContext();
const API ="https://dummyjson.com/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    nbPages:0,
    page:0,
};

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer, initialState);
    
    const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"});
        try{
            const res=await axios.get(url);
            // console.log(res);
            const products=await res.data.products;
            // console.log(products);
            dispatch({type:"SET_API_DATA",payload:products});
        }catch(error){
            dispatch({type:"API_ERROR"});
        } 
    };
    useEffect(()=>{
        getProducts(API);
    },[]);
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
};
// Custom Hooks
const useProductContext=()=>{
    return useContext(AppContext); 
};
export {AppProvider, AppContext,useProductContext};






const ProductReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
        return{
            ...state,
            isLoading:true,
        };
        case "SET_API_DATA":
        // const featureData=action.payload.filter((curElem)=>{
        //     return curElem.title==='iPhone 9';
        // });
        // console.log(featureData);
        return {
            ...state,
            isLoading:false,
            products: action.payload,
            featureProducts: action.payload,
        };
        case "API_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
        default:
        return state;

    }
};
export default ProductReducer;