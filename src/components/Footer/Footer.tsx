import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="branding">
        <h3>AquaSens</h3>
        <p>Quick Insights Into Your Aquarium Stats</p>
      </div>
      <ul className="item-list">
        <li className="list-item">
          <a href="/">Shop</a>
        </li>
        <li className="list-item">
          <a href="/">About</a>
        </li>
        <li className="list-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
