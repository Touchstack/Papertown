import Modal from "./Modal"
import PropTypes from 'prop-types';

const LogInModal = ({ isVisible, onClose }) => {
    
  if (!isVisible) {
    return null;
  }

  return (
  <Modal isVisible={isVisible} onClose={onClose}>
    <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
      Log in
    </header>

    <form name="contact" method="post">
      <div className="relative mb-2 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="firstname"
          required
          className="block w-[350px] h-[55px]  p-3  text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
        />
      </div>
      <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required
          className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
        />
      </div>
      <a
        href="#"
        className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
          hover:underline"
      >
        Forgot Password?
      </a>
    
       <div className="flex justify-center items-center">
        <button
          type="submit"
          className="text-[#FFF] bg-[#DF327B] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
        >
          <p className="text-center font-bold text-xl">Log in</p>
        </button>
       </div>

      <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
        Need an account?
        <a
          href="#"
          className="text-[#942D99] hover:underline ml-1"
        >
          Sign up
        </a>
      </div>
    </form>
  </Modal>
  )
}

LogInModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LogInModal
