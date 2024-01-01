import FormatPrice from "../Helper/FormatPrice";
import { useFilterContext } from "../context/filter_Context";

const FilterSection = () => {
  const {
    filters: { text,category,price,minPrice,maxPrice},
    updateFilterValue,
    all_products,clearFilters
  } = useFilterContext();
  
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    // unique data get
    // return (newVal = [...new Set(newVal)]);
    return (newVal = ['all',...new Set(newVal)]);
  };
  const categoryData = getUniqueData(all_products, "category");
  // console.log(categoryData);

  const brandData = getUniqueData(all_products, "brand");
  // console.log(brandData);
  
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div>
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Brand</h3>
        <div>
          <form action="">
            <select name="brand" onClick={updateFilterValue} id="brand">
              {brandData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="brand">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div>
        <button className="btn btn-danger" onClick={clearFilters}>Clear Filters</button>
      </div>
    </>
  );
};

export default FilterSection;
