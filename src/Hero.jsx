import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi
            porro perspiciatis facilis reiciendis, minima magnam accusantium
            ullam quis, assumenda asperiores quo voluptas. Nobis exercitationem
            similique voluptatem modi totam ipsa.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
