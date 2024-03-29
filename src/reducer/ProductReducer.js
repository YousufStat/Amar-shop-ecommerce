
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