import profile from "../../images/aboutme.jpeg"


const About = () => {
    return (
      <>
           {/* <!-- Below is the about me section with 1 image and 2 paragraphs --> */}
    <div className="container">
      <div className="row mb-5">
        <article className="col-sm-8">
          <div className="row">
            <div className="col-sm-12">
              <h1 style={{color: "white"}}>About Me</h1>
            </div>
          </div>

          <div className="row">
            <img
              className="col-md-8 img-fluid"
              src={profile}
              alt="cat pic placeholder"
            />
            <p className="col-md-4" style={{color: "white"}}>
              Thomas is a fledgling Full Stack Web Developer with a background
              in Philosophy, French and Music Production. A teacher and student
              both professionally and as a hobby, he finds learning and teaching
              to be mirror images of what it means to have a deep engagement
              with knowledge and information. He excels in abstract thinking and
              synthesizing ideas from disparate disciplines into effective
              solutions, regardless of obstacles. Friendly and personable, he is
              capable of boosting morale or creating an environment for critical
              analysis as needed. It is also possible that he is a cat.
            </p>
          </div>
        </article>
      </div>
    </div>
      </>
    );
  };
  
  export default About;