import { Link } from "react-router-dom";
import { Container, ShapeMove, Shower, Title } from "..";
import { JoiningAreaImg, JoiningLine } from "../../constant/joinOurNewSession";
import "./JoinOurNewSession.scss";

const JoinOurNewSession = () => {
  return (
    <section className="bd-joining-area">
      <div
        className="bd-joining-bg"
        style={{ backgroundImage: `url(${JoiningAreaImg})` }}
      ></div>
      <div className="bd-joining-bg-overlay"></div>
      <Container>
        <div className="bd-joining">
          <div className="bd-joining-shape-wrapper d-none d-md-block">
            <div className="bd-joining-shape-1">
              <ShapeMove shape={JoiningLine} />
            </div>
            <div className="bd-joining-shape-2">
              <ShapeMove shape={JoiningLine} />
            </div>
          </div>
          <Shower name={"title-1"} delay={0.3} aniX={0} aniY={50}>
            <Title
              title={"Bizning sessiyamizga qoʻshiling"}
              text1={`Bollar juda yaxshi savollar beradi va oʻziga xos javoblar kutadi.`}
              text2={`Bu dunyoga boʻlgan qizigʻishdir.`}
              color={` var(--bd-common-white)`}
              colSize="col-md-8"
            />
          </Shower>
          <Shower name={"title-2"} delay={0.5} aniX={0} aniY={50}>
            <div className="text-center">
              <Link to={"/about"}>
                <button type="submit" className="bd-btn border-none">
                  <span className="bd-btn-inner">
                    <span className="bd-btn-normal">Hozir murojaat qiling</span>
                    <span className="bd-btn-hover">Hozir murojaat qiling</span>
                  </span>
                </button>
              </Link>
            </div>
          </Shower>
        </div>
      </Container>
      <div className="bd-joining-line"></div>
      <div className="bd-joining-line-2"></div>
      <div className="d"></div>
    </section>
  );
};

export default JoinOurNewSession;
