import gameknight from "../../images/gameknight_home.png"
import readme from "../../images/readme.png"
import cultourist from "../../images/cultourist-main.png"



const Portfolio = () => {
    return (
      <>
           {/* <!-- Below you will find 5 images outlining good grid placement for a future portfolio page --> */}
    <div className="container">
      <div className="row">
        <article className="col-sm-12 mb-5">
          <div className="row">
            <div className="col-sm-12">
              <h1 style={{color: "white"}}>Portfolio</h1>
            </div>
          </div>

          <div className="row">
            <img
              className="col-lg-8 mb-3"
              src={gameknight}
              alt="GameKnight screenshot"
            />
            <div className="col-lg-4">
              <h4 style={{color: "white"}}>
                Game Knight
              </h4>
              <p>
                <a href="https://github.com/Kelendoheim/gameknight">Github Repo</a>
              </p>
              <p>
                <a href="http://gameknight-app.herokuapp.com">Deployed Site</a>
              </p>
            </div>
            </div>

          <div className="row">
            <img
              className="col-lg-8 mb-3"
              src={cultourist}
              alt="Cultourist screenshot"
            />
            <div className="col-lg-4">
              <h4 style={{color: "white"}}>
                Cultourist: Know Before You Go
              </h4>
              <p>
                <a href="https://github.com/RFlanagan82/cultourist_app">Github Repo</a>
              </p>
              <p>
                <a href="https://cultourist.herokuapp.com/">Deployed Site</a>
              </p>
            </div>
            
          </div>

          <div className="row">
            <img
              className="col-lg-8 mb-3"
              src={readme}
              alt="password generator screenshot"
            />
            <div className="col-lg-4">
            <h4 style={{color: "white"}}>
              README.MD Node Generator
            </h4>
            <p>
              <a href="https://github.com/Kelendoheim/node-README-generator">Github Repo</a>
            </p>
          </div>
          </div>

         
        </article>
      </div>
    </div>
      </>
    );
  };
  
  export default Portfolio;