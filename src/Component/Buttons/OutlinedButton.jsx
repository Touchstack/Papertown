import PropTypes from "prop-types";

function OutlinedButton({ className, buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} py-3 font-Regular text-lg border border-2 text-[#FFF] px-6 rounded-full hover:text-amber-400 sm:text-2xl md:text-xl text-xl text-center focus:ring-2 focus:outline-none 
             inline-block hover:border-amber-400`}
    >
      {buttonText}
    </button>
  );
}

OutlinedButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

OutlinedButton.defaultProps = {
  className: "",
  buttonText: "",
  onClick: () => {},
};

export default OutlinedButton;
