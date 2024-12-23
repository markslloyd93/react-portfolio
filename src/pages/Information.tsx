import Header from "../components/Header";

function Information() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4">
        <h1 className="font-interBold text-brand-black text-5xl py-2.5">
          information
        </h1>
        <p className="font-interRegular text-brand-black text-base pb-5">
          I'm currently working with DECIDE to help build web solutions for a
          wide range of clients including Chicago Town, P&G & Valeo
          Confectionary. My responsibilities include building out designed
          solutions, maintaining current client sites & providing solutions for
          web based problems. Before that, i was working with vertu motors where
          i worked with the whatcar leasing team to help design, build and
          maintain their customer facing website
        </p>
        <p className="font-interRegular text-brand-black text-base pb-5">
          Before, I was working with Tommee Tippee where I was the junior
          creative for their customer facing site. My responsibilities included
          creating digital assets & providing design solutions for digital
          platforms.
        </p>
        <p className="font-interRegular text-brand-black text-base pb-5">
          Aside i also enjoy building my own projects, mostly to improve on my
          current skillset & try out new technologies.
        </p>
      </section>
      <section className="container mx-auto px-4">
        <h2 className="font-interSemiBold text-brand-black text-3xl pb-2.5">
          Experience
        </h2>
        <ul>
          <li className="py-4 border-b border-brand-black">
            <h3 className="text-2xl font-interBold text-brand-black">Decide</h3>
            <p>Senior Front End Developer</p>
            <p className="mt-4">March 2019 - Present</p>
          </li>
          <li className="py-4 border-b border-b-brand-black">
            <h3 className="text-2xl font-interBold text-brand-black">
              Vertu Motors
            </h3>
            <p>Web Designer / Web Developer</p>
            <p className="mt-4">April 2017 - March 2019</p>
          </li>
          <li className="py-4 border-b border-b-brand-black">
            <h3 className="text-2xl font-interBold text-brand-black">
              Tommee Tippee
            </h3>
            <p>Junior Creative / Junior Developer</p>
            <p className="mt-4">May 2015 - April 2017</p>
          </li>
          <li className="py-4 border-b border-b-brand-black">
            <h3 className="text-2xl font-interBold text-brand-black">
              Northumberland Tourism
            </h3>
            <p>Web Intern</p>
            <p className="mt-4">Sep 2014 - May 2015</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Information;
