import { Container, Shower, Title } from "../../../components";
import "./ProgramTimeTable.scss";

const ProgramTimeTable = () => {
  return (
    <section className="bd-routine-area pb-70">
      <Container>
        {/* <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
              //   style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s;"
            >
              <h2 className="bd-section-title mb-0">Full Day with Learning</h2>
              <p>
                With the help of teachers and the environment as the third
                teacher, students
                <br /> have opportunities to confidently take risks.
              </p>
            </div>
          </div>
        </div> */}
        <Shower name={"program-time-1"} delay={0.3} aniX={0} aniY={50}>
          <Title
            title={"Oʻrganish bilan toʻliq kun"}
            text1={`Oʻquvchilarimiz vaqtini tashkil etish uchun maxsus jadvallarimiz mavjud.`}
            text2={`Bu bilan oʻquvchilarimiz aqlan va jismonan sogʻlom boʻlib yetishi istagidamiz`}
            color={null}
            colSize="col-lg-8"
          />
        </Shower>

        <div className="row">
          <div className="col-lg-6">
            <Shower name={"program-time-2"} delay={0.3} aniX={-50} aniY={0}>
              <div className="bd-routine-table mb-50 ">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Soat</th>
                      <th scope="col">Faoliyat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {time1.map((item, index) => (
                      <tr key={index}>
                        <td>{item.hour}</td>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6">
            <Shower name={"program-time-3"} delay={0.3} aniX={50} aniY={0}>
              <div className="bd-routine-table mb-50">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Hour</th>
                      <th scope="col">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {time2.map((item, index) => (
                      <tr key={index}>
                        <td>{item.hour}</td>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramTimeTable;

const time1 = [
  {
    hour: "8 - 00",
    activity: "Bepul oʻyin",
  },
  {
    hour: "8 - 30",
    activity: "Qum chuquri",
  },
  {
    hour: "9 - 00",
    activity: "Uy burchagi",
  },
  {
    hour: "9 - 30",
    activity: "Ijodkorlik burchagi",
  },
  {
    hour: "10 - 00",
    activity: "Ovqatlanish vaqti",
  },
];
const time2 = [
  {
    hour: "10 - 30",
    activity: "Ijodkorlik burchagi",
  },
  {
    hour: "11 - 00",
    activity: "Ovqatlanish vaqti",
  },
  {
    hour: "11 - 30",
    activity: "Bepul oʻyin",
  },
  {
    hour: "12 - 00",
    activity: "Uy burchagi",
  },
  {
    hour: "12 - 30",
    activity: "Qum chuquri",
  },
];
