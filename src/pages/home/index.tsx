import { Courses, Hero, News, Partners, Why } from "../../features/home";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Partners />
      <Courses />
      <News />
      <Why />
    </section>
  );
};

export default HomePage;
