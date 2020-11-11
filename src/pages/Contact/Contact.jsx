const Contact = () => {
  return (
    <>
    <div className="container">
      {/* <!-- Contact header here --> */}
      <div className="row">
        <article className="col-sm-8 mb-5">
          <div className="row">
            <div className="col-sm-12">
              <h1>Contact</h1>
            </div>
          </div>
          {/* <!-- Name input below --> */}
          <div className="row pl-3 pr-3">
            <label for="fname">Name</label>
          </div>
          <div className="row pl-3 pr-3">
            <input
              type="text"
              style={{width: "100%"}}
              id="fname"
              name="firstname"
              placeholder="Name"
            />
          </div>
          {/* <!-- Email input below --> */}
          <div className="row pl-3 pr-3">
            <label for="fname">Email</label>
          </div>
          <div className="row pl-3 pr-3">
            <input
              type="text"
              style={{width: "100%"}}
              id="zname"
              name="firstname"
              placeholder="Email"
            />
          </div>
          {/* <!-- Message/textarea input below --> */}
          <div className="row pl-3 pr-3">
            <label for="subject">Message</label>
          </div>
          <div className="row pl-3 pr-3">
            <textarea
              id="subject"
              style={{width: "100%", height: "200px"}}
              name="subject"
              placeholder="Message"
            ></textarea>
          </div>

          {/* <!-- Here is the submit button --> */}
          <div>
            <input
              className="mb-3"
              type="submit"
              style={{width: "100%"}}
              value="Submit"
            />
          </div>
        </article>
        <div className="col-sm-4">
          <article className="col-sm-8 mb-5">
            <div className="row">
              <div className="col-sm-12">
                <h1>Links</h1>
              </div>
              <ul>
                <p>
                  <a href="https://github.com/Kelendoheim">Github Profile</a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/thomasdwj/">
                    Linkedin Profile
                  </a>
                </p>

                <p>
                  <a href="mailto:thomas.walsh736@gmail.com">Email</a>
                </p>
                <p>
                  <a href="https://docs.google.com/document/d/1Z1uaqDfBcriufNkY25_HjJ1J2JMaohBF29hFXNTaU2E/">Résumé</a>
                </p>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
