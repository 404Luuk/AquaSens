import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <h2 className="branding">AquaSens</h2>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Shop</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
