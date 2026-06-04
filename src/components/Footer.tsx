import malinLogo from "../assets/malinLogo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <section className="footer-content">
          <img
            src={malinLogo}
            className="logo footer-logo"
            alt="Malin Skrettingland personal logo"
          />
          <div className="footer-contact">
            <p>
              Email:{" "}
              <a href="mailto:malin.skrettingland@email.com">
                malin.skrettingland@email.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/malin-skrettingland">
                linkedin.com/in/malin-skrettingland
              </a>
            </p>
          </div>
        </section>
        <div className="footer-copy">
          &copy; 2026 Malin Skrettingland. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
