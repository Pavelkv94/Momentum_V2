import { Link } from "react-router-dom";
import { cards } from "./cards";
import "./RelaxComponent.scss";

const RelaxComponent = () => {
  return (
    <div className="relax-wrapper">
      <div className="expandable-block">
        <h2>Relax & Meditation</h2>
        <div className="expandable-block-content">
          <p>Foster an atmosphere conducive to relaxation and rejuvenation of life energy.</p>

          {cards.map((el, i) => (
            <Link key={i} to={`/${el.link}`}>
              <div className="card" style={{ backgroundImage: `url(${el.imageUrl})` }}>
                {el.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelaxComponent;
