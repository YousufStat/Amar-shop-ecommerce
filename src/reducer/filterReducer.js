const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
    let priceArr=action.payload.map((curElem)=>curElem.price);
    // console.log(priceArr)
    let maxPrice=Math.max(...priceArr);
    // console.log(maxPrice)
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters:{...state.filter,maxPrice,price:maxPrice},
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "SET_SORT_VALUE":
      // let userSortValue=document.getElementById("sort");
      // let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct=[...action.payload];
      const { filter_products,sorting_value } = state;
      let tempSortProduct = [...filter_products];
      //  logical function form get data.......
      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
        }
        if (sorting_value === "z-a") {
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1;
          }
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      // logical function form get data.. alternation/fundamantal way......

      //       if(state.sorting_value==='lowest'){
      //          const sortingProducts=(a,b)=>{
      //                return a.price-b.price;
      //          };
      //          newSortData=tempSortProduct.sort(sortingProducts);
      //       }
      //       if(state.sorting_value==='highest'){
      //         const sortingProducts=(a,b)=>{
      //               return b.price-a.price;
      //         };
      //         newSortData=tempSortProduct.sort(sortingProducts);
      //      }
      //      if(state.sorting_value==='a-z'){
      //       const sortingProducts=(a,b)=>{
      //             if( a.title.toLowerCase()< b.title.toLowerCase()){
      //               return -1;
      //             }
      //       };
      //       newSortData=tempSortProduct.sort(sortingProducts);
      //    }
      //    if(state.sorting_value==='z-a'){
      //     const sortingProducts=(a,b)=>{
      //           if( a.title.toLowerCase()> b.title.toLowerCase()){
      //             return -1;
      //           }
      //     };
      //     newSortData=tempSortProduct.sort(sortingProducts);
      //  }
      // if(state.sorting_value==='a-z'){
      //   newSortData=tempSortProduct.sort((a,b)=>
      //   a.title.toLowerCase()< b.title.toLowerCase()
      //     // if(a.title.toLowerCase()<b.title.toLowerCase())
      //     // return -1;

      //   );
      //   }
      // if(state.sorting_value==='z-a'){
      //   newSortData=tempSortProduct.sort((a,b)=>
      //   // b.title.toLowerCase().locateCompare(a.title.toLowerCase())
      //   a.title.toLowerCase()> b.title.toLowerCase()

      //   );
      // }
      return {
        ...state,
        filter_products: newSortData,
      };

      case 'UPDATE_FILTER_VALUE':
      const {name,value}=action.payload;
      return {
        ...state,
        filters:{
          ...state.filters,
          [name]:value,
        }
      };
      case "FILTERS_PRODUCTS":
      let {all_products}=state;
      let temFilterProduct=[...all_products];
      const {text,category,brand,price}=state.filters;
      // console.log(temFilterProduct)
      if(text){
        temFilterProduct=temFilterProduct.filter((curElem)=>{
          return curElem.title.toLowerCase().includes(text);
        });
      }
      if(category){
        temFilterProduct=temFilterProduct.filter(
          (curElem)=>curElem.category ===category
        );
      }
      // if(category === 'all'){
      //   temFilterProduct=temFilterProduct.filter(
      //     curElem=>true
      //   );
      // }
      if(brand){
        temFilterProduct=temFilterProduct.filter(
          (curElem)=>curElem.brand.toLowerCase()===brand
        );
      }
      if (price === 0) {
        temFilterProduct = temFilterProduct.filter(
          (curElem) => curElem.price === price
        );
      } else {
        temFilterProduct = temFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products:temFilterProduct,
      }
      case "CLEAR_FILTERS":
      return{
        ...state,
        filters:{
          ...state.filters,
          text:'',
          category:'',
          brand:'',
          maxPrice:state.filters.maxPrice,
          price:state.filters.maxPrice,
          minPrice:0,
        }
      }

    default:
      return state;
  }
};

export default filterReducer;
