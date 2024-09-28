import PropTypes from "prop-types";
import "./RefreshButton.scss";

const RefreshButton = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      Refresh
    </button>
  );
};

export default RefreshButton;

RefreshButton.propTypes = {
  onClick: PropTypes.func,
};
