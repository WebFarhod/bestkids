import { Container, Shower, Title } from "../../../components";
import "./TeacherTable.scss";

const TeacherTable = () => {
  return (
    <section className="bd-routine-2-area pb-120">
      <Container>
        <Shower name={`teacher-table-1`} delay={0.3} aniX={0} aniY={50}>
          <Title
            title={"Mening vaqt jadvalim"}
            text1={`Bizning koʻp bosqichli bolalar bogʻchasi dasturlarimiz 2 yoshdan 7 yoshgacha`}
            text2={`boʻlgan bolalarga qaratilgan oʻquv dasturiga ega.`}
            color={null}
            colSize="col-lg-8"
          />
        </Shower>

        <Shower name={`teacher-table-2`} delay={0.5} aniX={0} aniY={50}>
          <div className="bd-routine-2-wrapper">
            <div className="row">
              <div className="col-12">
                {/* <div className="bd-routine-2-nav">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="all-class-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all-class"
                      type="button"
                      role="tab"
                      aria-controls="all-class"
                      aria-selected="false"
                      // tabindex="-1"
                    >
                      All Class
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="sports-class-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sports-class"
                      type="button"
                      role="tab"
                      aria-controls="sports-class"
                      aria-selected="true"
                    >
                      Sport sinfis
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="dancing-class-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#dancing-class"
                      type="button"
                      role="tab"
                      aria-controls="dancing-class"
                      aria-selected="false"
                      // tabindex="-1"
                    >
                      Dancing Class
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="drawing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#drawing"
                      type="button"
                      role="tab"
                      aria-controls="drawing"
                      aria-selected="false"
                      // tabindex="-1"
                    >
                      Drawing Class
                    </button>
                  </li>
                </ul>
              </div> */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="all-class"
                    role="tabpanel"
                    aria-labelledby="all-class-tab"
                  >
                    {/* <div className="bd-routine-2">
                      <div className="table-responsive d-none d-md-block">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="clr-4">
                                Dushanba
                              </th>
                              <th scope="col" className="clr-5">
                                Seshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Chorshanba
                              </th>
                              <th scope="col" className="clr-5">
                                Payshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Juma
                              </th>
                              <th scope="col" className="clr-5">
                                Shanba
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bd-routine-list-wrap d-md-none">
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Monday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Tuesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Wednesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Thursday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Friday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Saturday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Sport sinfi</span>
                              <span>8:00 - 8:30 </span>
                            </li>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="tab-pane fade active show"
                    id="sports-class"
                    role="tabpanel"
                    aria-labelledby="sports-class-tab"
                  >
                    <div className="bd-routine-2">
                      <div className="table-responsive d-none d-md-block">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="clr-4">
                                Dushanba
                              </th>
                              <th scope="col" className="clr-5">
                                Seshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Chorshanba
                              </th>
                              <th scope="col" className="clr-5">
                                Payshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Juma
                              </th>
                              <th scope="col" className="clr-5">
                                Shanba
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tila sinfi</span>
                              </td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqa sinfi</span>
                              </td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`at sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnat sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqa sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-2">
                                8:00 - 8:30<span>Sport sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqa sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Til sinfi</span>
                              </td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasb sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-2">
                                8:00 - 8:30<span>Sport sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-3">
                                8:00 - 8:30<span>Til sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span>Sport sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`at sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span>Sport sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqa sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span>Sport sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Til sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnat sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`at sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasb sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnat sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
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
                          <h4 className="bd-routine-day">Seshanab</h4>
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
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="dancing-class"
                    role="tabpanel"
                    aria-labelledby="dancing-class-tab"
                  >
                    <div className="bd-routine-2">
                      <div className="table-responsive d-none d-md-block">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="clr-4">
                                Dushanba
                              </th>
                              <th scope="col" className="clr-5">
                                Seshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Chorshanba
                              </th>
                              <th scope="col" className="clr-5">
                                Payshanba
                              </th>
                              <th scope="col" className="clr-4">
                                Juma
                              </th>
                              <th scope="col" className="clr-5">
                                Shanba
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bd-routine-list-wrap d-md-none">
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Monday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Tuesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Wednesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Thursday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Friday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Saturday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Dance Class</span>
                              <span>8:30am - 9:00am </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div
                    className="tab-pane fade"
                    id="drawing"
                    role="tabpanel"
                    aria-labelledby="drawing-tab"
                  >
                    <div className="bd-routine-2">
                      <div className="table-responsive d-none d-md-block">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="clr-4">
                                Sunday
                              </th>
                              <th scope="col" className="clr-5">
                                Monday
                              </th>
                              <th scope="col" className="clr-4">
                                Tuesday
                              </th>
                              <th scope="col" className="clr-5">
                                Wednessday
                              </th>
                              <th scope="col" className="clr-4">
                                Thursday
                              </th>
                              <th scope="col" className="clr-5">
                                Friday
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                            </tr>
                            <tr>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                            </tr>
                            <tr>
                              <td className="clr-5"></td>
                              <td className="clr-6">
                                8:00 - 8:30<span>Musiqan sinfi</span>
                              </td>
                              <td className="clr-2">
                                8:00 - 8:30<span> O`yin sinfi</span>
                              </td>
                              <td className="clr-4"></td>
                              <td className="clr-3">
                                8:00 - 8:30<span>Tiln sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="clr-1">
                                8:00 - 8:30<span>San`atn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-8">
                                8:00 - 8:30<span>Kasbn sinfi</span>
                              </td>
                              <td className="clr-7">
                                8:00 - 8:30<span>Mehnatn sinfi</span>
                              </td>
                              <td className="clr-5"></td>
                              <td className="clr-4"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bd-routine-list-wrap d-md-none">
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Monday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Tuesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Wednesday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Thursday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Friday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bd-routine-list">
                          <h4 className="bd-routine-day">Saturday</h4>
                          <ul>
                            <li>
                              <span className="class-title">Drawing Class</span>
                              <span>9:30am - 10:00am </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Shower>
      </Container>
    </section>
  );
};

export default TeacherTable;
