import malinLogo from "../assets/malinLogo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={malinLogo}
            className="logo header-logo"
            alt="Malin Skrettingland personal logo"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <section className="header-content">
          <span className="header-title">Malin Skrettingland</span>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
