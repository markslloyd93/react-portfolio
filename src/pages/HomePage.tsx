import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import Button from "../components/Button";

function HomePage() {
  const chicagoCardDesc =
    "Chicago Town’s official website, built with C# utilising Umbraco for content management.";
  const decideCardDesc =
    "Decide’s official website, built with C# utilising Umbraco for content management.";
  const resourceDashCardDesc =
    "dashboard for Decide employees to easily access resources based on their department";
  const addressTrackerCardDesc =
    "A tracking tool built with JavaScript, that allows the user to track the location & service provider of an IP address";
  return (
    <>
      <Header />
      <section className="container mx-auto px-4">
        <h1 className="font-interBold text-brand-black text-5xl py-2.5">
          Hi I'm Mark
        </h1>
        <h2 className="font-interSemiBold text-brand-black text-3xl pb-2.5">
          A web developer based in Newcastle upon Tyne
        </h2>
        <p className="font-interRegular text-brand-black text-base pb-5">
          I work with leading-edge companies to create exceptional products. I’m
          currently working with DECIDE to help provide high performaning &
          accessible websites for a wide range of clients.
        </p>
        <Button buttonText="more about me" buttonLink="/information" />
      </section>
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-interBold my-4 text-brand-black">
          Recent Work
        </h2>
        <section
          className="grid grid-cols-2 justify-center gap-2.5"
          data-testid="cardSection"
        >
          <WorkCard
            cardTitle="Chicago Town"
            cardDescription={chicagoCardDesc}
            cardTags={["C#", ".NET 8", "Umbraco"]}
            websiteUrl="https://chicagotown.com/"
            repository="https://gitlab.com/DecideDigital/chicagotown13"
          />
          <WorkCard
            cardTitle="Decide"
            cardDescription={decideCardDesc}
            cardTags={["C#", ".NET 8", "Umbraco"]}
            websiteUrl="https://www.wearedecide.com/"
            repository="https://gitlab.com/DecideDigital/decide-umbraco-site"
          />
          <WorkCard
            cardTitle="Decide Resource Dashboard"
            cardDescription={resourceDashCardDesc}
            cardTags={["C#", ".NET 8", "Entity Framework"]}
            websiteUrl="https://www.decideresourcedashboard.decidepreview.com/Identity/Account/Login?ReturnUrl=%2F"
            repository="https://gitlab.com/DecideDigital/decide-resource-dashboard"
          />
          <WorkCard
            cardTitle="IP Address Tracker"
            cardDescription={addressTrackerCardDesc}
            cardTags={["C#", ".NET 8", "Umbraco"]}
            websiteUrl="https://chicagotown.com/"
            repository="https://gitlab.com/DecideDigital/chicagotown13"
          />
        </section>
      </section>
    </>
  );
}

export default HomePage;
