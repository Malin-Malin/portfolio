import CartoonStylePortrait from "../assets/Cartoon-style-portrait-02.05.jpg";
import malinThumbnail from "../assets/malinThumbnail.jpg";
import CartoonStylePortrait2 from "../assets/Cartoon-style-portrait-01.05.jpg";

import "./archCard.css";

const ThumbnailCard = () => {
  return (
    <div className="projects">
      <article className="project-card-wrapper">
        <img
          className="arch-image"
          onContextMenu={(e) => e.preventDefault()}
          src={CartoonStylePortrait}
          alt="Cartoon-style portrait of a smiling woman with long red hair and a dark shirt, looking directly at the viewer"
        />
        <div className="project-card">
          <h3>Full-time teacher</h3>
          <p>
            I currently work full-time as a teacher, which means I’ve learned to
            manage time, communicate clearly, and stay organized, especially
            under pressure. These are skills I carry with me into every coding
            project.
          </p>
        </div>
      </article>
      <article className="project-card-wrapper">
        <img
          className="arch-image"
          onContextMenu={(e) => e.preventDefault()}
          src={malinThumbnail}
          alt="Malin logo with green colors"
        />
        <div className="project-card">
          <h3>Full-time student</h3>
          <p>
            Alongside my job, I study full-time at Noroff and have just
            completed my first year in front-end development. Learning to code
            while applying it directly in real projects has been both
            challenging and incredibly rewarding.
          </p>
        </div>
      </article>
      <article className="project-card-wrapper">
        <img
          className="arch-image"
          onContextMenu={(e) => e.preventDefault()}
          src={CartoonStylePortrait2}
          alt="Cartoon-style drawing of a woman with freckles, sunglasses on her head, smiling with a city view in the background"
        />
        <div className="project-card">
          <h3>Structured and creative</h3>
          <p>
            I enjoy finding the balance between logic and creativity. I thrive
            when working with clean, structured code – but I’m just as
            passionate about crafting visual layouts that feel beautiful,
            intuitive, and user-friendly.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ThumbnailCard;
