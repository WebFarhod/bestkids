import { Container, Shower, Title } from "../../../components";
import "./TimeTable.scss";

const TimeTable = () => {
  return (
    <section className="bd-routine-2-area pb-95">
      <Container>
        <Shower name={`class-table-1`} delay={0.2} aniX={0} aniY={50}>
          <div className="row">
            <Title
              title={"Haftalik dars jadvali"}
              text1={`Bizning koʻp bosqichli bolalar bogʻchasi dasturlarimiz 2 yoshdan 7 yoshgacha `}
              text2={`boʻlgan bolalarga qaratilgan oʻquv dasturiga ega.`}
              color={null}
              colSize="col-lg-8"
            />
          </div>
        </Shower>

        <div className="bd-routine-2-wrapper wow fadeInUp">
          <div className="row">
            <div className="col-12">
              <Shower name={"class-table-2"} delay={0.4} aniX={0} aniY={50}>
                <div className="bd-routine-2">
                  <div className="table-responsive d-none d-md-block">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="clr-4">
                            Yakshanba
                          </th>
                          <th scope="col" className="clr-5">
                            Dushanba
                          </th>
                          <th scope="col" className="clr-4">
                            Seshanba
                          </th>
                          <th scope="col" className="clr-5">
                            Chorshanba
                          </th>
                          <th scope="col" className="clr-4">
                            Payshanba
                          </th>
                          <th scope="col" className="clr-5">
                            Juma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="clr-5"></td>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                        </tr>
                        <tr>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                          <td className="clr-5"></td>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                          <td className="clr-4"></td>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                        </tr>
                        <tr>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="clr-4"></td>
                          <td className="clr-5"></td>
                          <td className="clr-4"></td>
                          <td className="clr-1">
                            8:00 - 8:30<span> Oʻyin sinfi</span>
                          </td>
                          <td className="clr-4"></td>
                          <td className="clr-5"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bd-routine-list-wrap d-md-none">
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Dushanba</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Seshanba</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Chorshanba</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Payshanba</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Juma</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-routine-list">
                      <h4 className="bd-routine-day">Shanba</h4>
                      <ul>
                        <li>
                          <span className="class-title">Sport sinfi</span>
                          <span>8:00 - 8:30 </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Shower>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TimeTable;
