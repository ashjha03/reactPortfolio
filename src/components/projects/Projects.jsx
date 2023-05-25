import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = ({ theme }) => {
  return (
      <div
        data-theme={theme}
        id="projects"
        className="py-10 lg:px-10 px-4 border-b"
      >
        <div className="project-head text-center pb-8">
          <h1 className="text-7xl font-bold">My Work</h1>
        </div>
        <div className="projects lg:px-24 pt-5 grid lg:grid-cols-3 gap-8">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="project-box p-3 shadow-lg hover:scale-105 transition-all duration-300 border-2 rounded-xl">
            <a
              href="https://youtube-ashjha03.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="box-img mb-2 border-b"
            >
              <img
                src={require("../../assets/Youtubeclone.png")}
                className="lg:h-[205px] rounded-t-xl rounded mx-auto"
                alt="Project"
              />
            </a>
            <div className="box-content p-4">
              <div className="project-head text-center pb-2">
                <h1 className="text-3xl font-bold">YouTube Clone</h1>
              </div>
              <div className="project-about">
                <p className="text-lg pb-2">
                  MyTubeClone delivers a feature-rich YouTube-like experience.{" "}
                </p>
                <p className="text-md font-bold">ReactJS, YouTube v3 API</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__tada" className="project-box p-3 border-2 hover:scale-105 duration-300 shadow-lg rounded-xl">
            <a
              href="https://postify.cyclic.app/"
              rel="noreferrer"
              target="_blank"
              className="box-img mb-2 border-b"
            >
              <img
                src={require("../../assets/Postify.png")}
                className="lg:h-[205px] rounded-t-xl rounded mx-auto"
                alt="Project"
              />
            </a>
            <div className="box-content p-4">
              <div className="project-head text-center pb-2">
                <h1 className="text-3xl font-bold">Postify</h1>
              </div>
              <div className="project-about">
                <p className="text-lg pb-2">
                  Postify provides seamless CRUD operations, allowing users to
                  effortlessly manage their content.
                </p>
                <p className="text-md font-bold">
                  NodeJS, EJS, MongoDB, JavaScript
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRightBig" className="project-box p-3 border-2 hover:scale-105 duration-300 shadow-lg rounded-xl">
            <a
              href="https://gaurishankarrishtenaatekendra.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="box-img mb-2 border-b"
            >
              <img
                src={require("../../assets/Gsrnk.png")}
                className="lg:h-[205px] rounded-t-xl rounded mx-auto"
                alt="Project"
              />
            </a>
            <div className="box-content p-4">
              <div className="project-head text-center pb-2">
                <h1 className="text-3xl font-bold">
                  Gauri Shankar Rishte Naate Kendra
                </h1>
              </div>
              <div className="project-about">
                <p className="text-lg pb-2">
                  A dedicated matrimony website catering to the needs of
                  individuals seeking life partners.
                </p>
                <p className="text-md font-bold">HTML, CSS, JavaScript</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="project-box p-3 border-2 hover:scale-105 duration-300 shadow-lg rounded-xl">
            <a href="/" rel="noreferrer" className="box-img mb-2 border-b">
              <img
                src={require("../../assets/Portfolio.png")}
                className="lg:h-[205px] rounded-t-xl rounded mx-auto"
                alt="Project"
              />
            </a>
            <div className="box-content p-4">
              <div className="project-head text-center pb-2">
                <h1 className="text-3xl font-bold">Personal Portfolio</h1>
              </div>
              <div className="project-about">
                <p className="text-lg pb-2">
                  Experience my professional journey and expertise through My
                  Portfolio today.
                </p>
                <p className="text-md font-bold">
                  ReactJS, Tailwind CSS and DaisyUI
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__tada" className="project-box p-3 border-2 hover:scale-105 duration-300 shadow-lg rounded-xl">
            <a
              href="https://shreerammedimed.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="box-img mb-2 border-b"
            >
              <img
                src={require("../../assets/Srm.png")}
                className="lg:h-[205px] rounded-t-xl rounded mx-auto"
                alt="Project"
              />
            </a>
            <div className="box-content p-4">
              <div className="project-head text-center pb-2">
                <h1 className="text-3xl font-bold">Shree Ram Medimed</h1>
              </div>
              <div className="project-about">
                <p className="text-lg pb-2">
                  A professional website representing an orthopaedic company
                  specializing in selling their high-quality products.
                </p>
                <p className="text-md font-bold">HTML, CSS, and JavaScript</p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
  );
};

export default Projects;
