import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = ({ theme }) => {
  return (
    <>
      <div
        data-theme={theme}
        id="about"
        className="lg:flex p-3 lg:items-center lg:justify-center lg:p-10"
      >
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="skills lg:w-[50%] pb-10 lg:pb-0">
          <div className="aboutMe lg:flex lg:justify-around text-center lg:text-start lg:items-center lg:mb-6">
            <div className="profileImg rounded-lg ml-[5rem] lg:ml-0 pb-4 lg:pb-0">
              <img
                className="h-[150px] rounded-2xl"
                src={require("../assets/profile.png")}
                alt="profile"
              />
            </div>
            <div className="myDetails  pb-4 lg:pb-0">
              <p className="text-lg pb-2">
                <span className="font-bold">Name : </span>
                Ashish Jha
              </p>
              <p className="text-lg pb-2">
                <span className="font-bold">Profile : </span>
                Full Stack Web Developer
              </p>
              <p className="text-lg pb-2">
                <span className="font-bold">Email : </span>
                ashjha2002@gmail.com
              </p>
            </div>
          </div>
          <div className="mySkills lg:p-5">
            <h1 className="skillsHead text-4xl font-bold">Skills</h1>
            <div className="skill pt-4 pb-4">
              <p className="skillHead">
                <span className="font-bold">JavaScript : </span>
                75%
              </p>
              <div className="skillView pt-1">
                <div className="fullLine bg-slate-600 rounded-xl">
                  <div className="skillLine bg-secondary p-2 w-[75%] rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="skill pb-4">
              <p className="skillHead">
                <span className="font-bold">ReactJS : </span>
                82%
              </p>
              <div className="skillView pt-1">
                <div className="fullLine bg-slate-600 rounded-xl">
                  <div className="skillLine bg-secondary p-2 w-[82%] rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="skill pb-4">
              <p className="skillHead">
                <span className="font-bold">NextJS : </span>
                55%
              </p>
              <div className="skillView pt-1">
                <div className="fullLine bg-slate-600 rounded-xl">
                  <div className="skillLine bg-secondary p-2 w-[55%] rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="skill pb-4">
              <p className="skillHead">
                <span className="font-bold">NodeJS : </span>
                65%
              </p>
              <div className="skillView pt-1">
                <div className="fullLine bg-slate-600 rounded-xl">
                  <div className="skillLine bg-secondary p-2 w-[65%] rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="skill pb-4">
              <p className="skillHead">
                <span className="font-bold">MongoDB : </span>
                90%
              </p>
              <div className="skillView pt-1">
                <div className="fullLine bg-slate-600 rounded-xl">
                  <div className="skillLine bg-secondary p-2 w-[90%] rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig" className="about lg:w-[50%] lg:p-5">
          <h1 className="text-5xl pb-5 font-bold">About Me</h1>
          <p className="text-lg pb-3">
            Hello! I'm Ashish Jha, a passionate Full Stack Web
            Developer/designer dedicated to creating exceptional web
            experiences. With a strong focus on design and coding, I have been
            pursuing my passion for web development since 2020. I take great joy
            in crafting beautifully designed, user-friendly websites that
            seamlessly blend aesthetics and functionality.
          </p>
          <p className="text-lg pb-3">
            Over the past year, I have had the privilege of working with
            renowned digital agencies and amazing clients, resulting in the
            creation of award-winning projects. I bring this expertise and
            creativity to help elevate your business. As a Professional Full
            Stack Web Developer, I possess extensive knowledge of HTML, CSS,
            JavaScript, ReactJS, NextJS, NodeJS, MongoDB, Tailwind CSS and
            Bootstrap.
          </p>
          <p className="text-lg pb-3">
            My skills extend beyond development, as I also excel in Web
            Designing. I can deliver outstanding designs promptly, ensuring a
            seamless and visually appealing user experience. Additionally, as a
            future software engineer, I have a solid command of JavaScript, a
            versatile and powerful programming language.
          </p>
          <p className="text-lg pb-3">
            If you'd like to learn more about me or discuss your project, please
            feel free to reach out by filling out the contact form. I look
            forward to connecting with you soon.
          </p>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default About;
