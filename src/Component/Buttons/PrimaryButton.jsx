import PropTypes from "prop-types";

function PrimaryButton({ className, buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} text-[#FFF] font-Regular bg-[#52B4AE] px-9 h-[50px] p-3 rounded-full py-4 font-Regular text-lg focus:ring-1 focus:outline-none focus:ring-amber-100 text-xl items-center text-center list-none inline-block 
      text-md px-12 py-3 hover:bg-amber-400 pt-3 pb-3`}
    >
      {buttonText}
    </button>
  );
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  className: "",
  buttonText: "",
  onClick: () => {},
};

export default PrimaryButton;
