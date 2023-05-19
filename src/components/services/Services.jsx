import ServiceCard from "./ServiceCard";

const Services = ({theme}) => {
    const serviceData = [
        {'title': 'Web Development', 'body': 'The website requires consistent refinement, change, upgradation, and updation so they ought not to look old and old. Without predictable and normal updates, the outline of your site turns out to be simply a static handout which does a foul play to the developing and dynamic nature of your business.'},
        {'title': 'Web Designing', 'body': 'Being a Full Stack Web Developer I also have good command in Web Designing and I can made you excellent designs in very less times. A Web Design service produces the look, structure along with features of an online site. The position will involve understanding both video design and Freelace Website Designer in Delhi.'},
        {'title': 'JavaScript Champion', 'body': `I'm a future software Engineer as well and hence have a good command in coding language JavaScript. JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known for the development of web pages, many non-browser environments also use it.`},
        {'title': 'E-Commerce Website Developer', 'body': `E-commerce, a process of buying and selling of products and services on Internet through secure credit card processing. I am Delhi based providing customized and flexible e-commerce website Developer.`},
        {'title': 'Payment Gateway Integration', 'body': `Payment Gateway Integration Services or Online Payment Processing is must on your website in today's world. If you are an existing e-commerce store owner or planning to launch an e-commerce enabled store, I can develop Payment Gateway in your Website.`},
        {'title': 'Domain and Hosting', 'body': `In this time of furious rivalry, each business needs a face through a site. I will provide you cheap price Web Hosting and Domain. Web hosting is the place where all the files of your website live. It is like the home of your website where it actually lives.

        `},
    ]
    console.log(serviceData[0].title);

  return (
    <div id="services" data-theme={theme} className="lg:p-10 py-16 px-5 border-t">
      <div className="heading text-center pb-10">
        <h1 className="text-6xl font-bold">Services</h1>
      </div>
      <div className="serviceCards grid gap-8 lg:grid-cols-3">
        {serviceData.map((service, index) => (
            <ServiceCard key={index} index={index} title={service.title} body={service.body} />
            ))}
      </div>
    </div>
  );
};

export default Services;
