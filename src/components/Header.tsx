import malinLogo from "../assets/malinLogo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <img
          src={malinLogo}
          className="logo header-logo"
          alt="Malin Skrettingland personal logo"
          onContextMenu={(e) => e.preventDefault()}
        />
      </section>
      <section className="header-content">
        <span>Malin Skrettingland</span>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
