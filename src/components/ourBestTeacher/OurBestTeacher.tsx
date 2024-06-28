import { Container, Shower, Slider, Title } from "..";
import { useTeaches } from "../../service/query/teacher/teacherQuery";

import "./OurBestTeacher.scss";

const OurBestTeacher = () => {
  const dataQuery = useTeaches();
  const teacherData = dataQuery.data;
  return (
    <section className="bd-teacher-area pt-120 pb-120">
      <Container>
        <Shower name={"teacher-1"} delay={0.2} aniX={0} aniY={50}>
          <Title
            title={"Bizning jamoamiz "}
            text1={`Bolajonlarimizning zamonaviy va quvnoq muhitda tarbiya olishi uchun mehnatini ayamaydigan hodimlarimiz, siz bildirgan ishonchingizni oqlash uchun doimo harakatda.`}
            color={null}
            colSize="col-lg-8"
          />
        </Shower>

        <div className="row">
          <div className="col-12">
            <Shower name={"teacher-2"} delay={0.4} aniX={0} aniY={50}>
              <Slider
                arr={teacherData || []}
                type="teachers"
                pageName={"our-teacher"}
                numberitem={4}
                navigationItem={false}
              />
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurBestTeacher;
