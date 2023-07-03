import reactImage from "../assets/react.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>react projects</h1>
          <p>
            React projects that can be used for component reuse also include
            several hooks such as useState, useEffect, useRef, useReducer, Api
            Context, react query, react router and redux toolkit.
          </p>
        </div>
        <div className="img-container">
          <img src={reactImage} alt="react projects" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
