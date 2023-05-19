

const About = ({theme}) => {
  return (
    <div data-theme={theme} className="lg:flex p-3 lg:items-center lg:justify-center lg:p-10">
        <div className="skills lg:w-[50%] pb-10 lg:pb-0">
            <div className="aboutMe lg:flex lg:justify-around text-center lg:text-start lg:items-center lg:mb-6">
                <div className="profileImg rounded-lg ml-[5rem] lg:ml-0 pb-4 lg:pb-0">
                    <img className="h-[150px] rounded-2xl" src={require("./profile.png")} alt="profile" />
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
        </div>
        <div className="about lg:w-[50%] lg:p-5">
            <h1 className="text-5xl pb-5 font-bold">About Me</h1>
            <p className="text-lg pb-3">Hi! I am Ashish Jha, a Full Stack Web Developer/designer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
            <p className="text-lg pb-3">For over past 1 year, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well. I'm a Professional Full Stack Web Developer having excellent knowledge of HTML, CSS, JavaScript, NodeJs, MongoDb, WordPress and Bootstrap.</p>
            <p className="text-lg pb-3">Being a Full Stack Web Developer I also have good command in Web Designing and I can made you excellent designs in very less times. I'm a future software Engineer as well and hence have a good command in coding language JavaScript.</p>
            <p className="text-lg pb-3">Wanna know something more about me, just fill the contact form and I'll get to you very soon.</p>
        </div>
    </div>
  )
}

export default About
