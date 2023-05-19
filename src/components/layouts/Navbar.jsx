

const Navbar = ({theme, handleClick}) => {

  return (
    <nav
      data-theme={theme}
      className="lg:flex py-5 px-2 border-b md:px-10 justify-between items-center w-full overflow-scroll"
    >
      <div className="navHead flex items-center justify-center lg:pb-0 pb-2 lg:text-start text-center">
        <img className="w-[50px] pr-3" src={require("../profile.png")} alt="" />
        <h1 className="text-xl">Ashish Jha</h1>
      </div>
      <div className="navLinks">
        <a className="pr-5" href="/">
          Home
        </a>
        <a className="pr-5" href="#about">
          About
        </a>
        <a className="pr-5" href="#services">
          Services
        </a>
        <a className="pr-5" href="#projects">
          Projects
        </a>
        <a className="pr-5" href="#contact">
          Contact
        </a>
      </div>
      <div className="chooseTheme lg:text-start text-center pt-2 lg:pt-0">
        <button onClick={handleClick} className="btn mr-1">Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;