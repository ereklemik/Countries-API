const Filter = () => {
  return (
    <section className="filter">
    
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search ..."
          
        />
      </form>
      <div className="filter-regions">
        <select name="select" id="select" className="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Europe">Europe</option>
          <option value="Europe">Asia</option>
          <option value="Europe">Americas</option>
          <option value="Europe">Africa</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
