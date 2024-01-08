import { PORTFOLIO_LINK } from "../data/link_paths";

const Header = () => {
  return (
    <header id="header">
      <h1>triolingo</h1>
      <a href={PORTFOLIO_LINK}>
        <i className="bi bi-x-lg" />
      </a>
      <div id="header-back"></div>
    </header>
  );
};

export default Header;
