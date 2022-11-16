import "./SalesBanner.scss";

const SalesBanner = () => {
  return (
    <>
      <div className="sales-banner">
        <div className="content">
          <h2>Buy AquaSens NOW </h2>
          <span>We know where you live!</span>
          <ul>
            <li>Lorem ipsum</li>
            <li>Set amet, consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor</li>
          </ul>
          <div className="form">
            <div className="input">
              <select name="Version" id="version">
                <option value="1">Version</option>
                <option value="2">bingor</option>
                <option value="3">Bongo</option>
              </select>
              <select name="Quantity" id="quantity">
                <option value="1">Quantity</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
              </select>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesBanner;
