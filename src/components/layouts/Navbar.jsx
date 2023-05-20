

const Navbar = ({theme, handleClick}) => {

  return (
    <nav
      data-theme={theme}
      className="lg:flex py-5 px-2 border-b md:px-10 justify-between items-center w-full overflow-scroll"
    >
      <div className="navHead flex items-center justify-center lg:pb-0 pb-2 lg:text-start text-center">
        <img className="w-[50px] pr-3" src={require("../../assets/profile.png")} alt="" />
        <h1 className="text-3xl font-bold">Ashish Jha</h1>
      </div>
      <div className="navLinks flex">
        <a className="pr-5 transition-all" href="/">
          <p className="hover:scale-110 transition-all">Home</p>
        </a>
        <a className="pr-5" href="#projects">
        <p className="hover:scale-110 transition-all">Projects</p>
        </a>
        <a className="pr-5" href="#about">
        <p className="hover:scale-110 transition-all">About</p>
        </a>
        <a className="pr-5" href="#services">
        <p className="hover:scale-110 transition-all">Services</p>
        </a>
        <a className="pr-5" href="#contact">
        <p className="hover:scale-110 transition-all">Contact</p>
        </a>
      </div>
      <div className="chooseTheme lg:text-start text-center pt-2 lg:pt-0">
        <button onClick={handleClick} className="btn mr-1">Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;