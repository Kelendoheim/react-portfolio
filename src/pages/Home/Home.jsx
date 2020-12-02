import mars from "../../images/mars-button.png";
import {Link} from "react-router-dom";





const Home = () => {

  function myfunction() {
    console.log("CLICKED");
  }
  return (
    <>
      {/* <!-- Below is the about me section with 1 image and 2 paragraphs --> */}
      <div className="container ground">
        <article className="col-sm-12">
          <div className="row" style={{
                marginTop: "200px",
              }}> </div>
              <Link to="/about">
              <div className="row">
            <button style={{
                width: "350px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                background: "transparent",
                borderStyle: "none"
              }}>
            <img
              style={{
                width: "250px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={myfunction}
              src={mars}
              alt="mars"
            />

            </button>
            
          </div>

              </Link>
          
        </article>
      </div>
    </>
  );
};

export default Home;
