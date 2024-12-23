import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4">
        <h1 className="font-interBold text-brand-black text-5xl py-2.5">
          contact
        </h1>
        <p className="font-interRegular text-brand-black text-base pb-5">
          If you'd like to get in touch, you can reach me using the following
          methods.
        </p>
      </section>
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-2.5">
          <article>
            <h3 className="text-2xl font-interBold text-brand-black">GitHub</h3>
            <a
              href="https://github.com/markslloyd93"
              target="_blank"
              className="text-brand-blue font-interRegular"
            >
              git/marklloyd
            </a>
          </article>
          <article>
            <h3 className="text-2xl font-interBold text-brand-black">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/mark-lloyd-developer"
              target="_blank"
              className="text-brand-blue font-interRegular"
            >
              in/mark-lloyd-developer
            </a>
          </article>
          <article>
            <h3 className="text-2xl font-interBold text-brand-black">Email</h3>
            <a
              href="mailto:markstephenlloyd93@gmail.com"
              target="_blank"
              className="text-brand-blue font-interRegular"
            >
              markstephenlloyd93@gmail.com
            </a>
          </article>
          <article>
            <h3 className="text-2xl font-interBold text-brand-black">X</h3>
            <a
              href="https://x.com/marklloyddev"
              target="_blank"
              className="text-brand-blue font-interRegular"
            >
              @marklloyddev
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Contact;
