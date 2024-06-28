//mui
import { Container, Shower } from "../../../components";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
//style
import "./ContactForm.scss";
//field
import { InputContactName } from "./input/contact-name";
import ContactBody from "./input/contact-body";
//react-hook-form
import { useForm, SubmitHandler, UseFormProps } from "react-hook-form";
//validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//service
import ContactService from "../../../service/contactService";
//toastify
import { toast } from "react-toastify";
import { toastOption } from "../../../components/toastOption/ToastOption";
//type
import { IContact } from "../../../types/contactType";

const schema = yup.object({
  user: yup.string().required("ismingizni kiriting"),
  number: yup.string().required("telefon raqamingizni kiriting"),
  body: yup.string().required("matn kiriting"),
  //   about: yup.string().required("Batafsil ma`lumot kiriting"),
});

export type ContactFieldType = "user" | "number" | "body";

function ContactForm() {
  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
  } = useForm<IContact>({
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<IContact>);

  const createSubmit: SubmitHandler<IContact> = async (data) => {
    try {
      ContactService.createContact(data);

      toast.success("Muvaffaqiyatli yuborildi.", toastOption);
      // alert("g");
      reset();
    } catch (error) {
      toast.error(
        "Nimadir noto'g'ri ketdi, bir ozdan so'ng qayta urinib ko`ring!",
        toastOption
      );
    }
  };
  return (
    <section className="bd-contact-area pb-60">
      <Container>
        <div className="row">
          <div className="col-xl-6 mb-60">
            <Shower name={`contact-form-1`} delay={0.3} aniX={-50} aniY={0}>
              <div
                style={{ backgroundColor: "white" }}
                className="bd-contact-form"
              >
                <h3 className="bd-contact-form-title mb-20">
                  Biz bilan shu yerda bogʻlaning
                </h3>
                <form onSubmit={handleSubmit(createSubmit)} id="comment-form">
                  <Grid container spacing={5}>
                    <Grid xs={12} md={6}>
                      <InputContactName
                        name="user"
                        control={control}
                        errors={errors}
                        trigger={trigger}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <InputContactName
                        name="number"
                        control={control}
                        errors={errors}
                        trigger={trigger}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <ContactBody
                        name="body"
                        control={control}
                        errors={errors}
                        trigger={trigger}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{ display: "flex", justifyContent: "end" }}
                    >
                      <button type="submit" className="bd-btn">
                        <span className="bd-btn-inner">
                          <span className="bd-btn-normal">Yuborish</span>
                          <span className="bd-btn-hover">Yuborish</span>
                        </span>
                      </button>
                    </Grid>
                  </Grid>
                  <div className="row">
                    {/* <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <input
                          name="name"
                          type="text"
                          placeholder="Ismingizni kiriting"
                          id="name"
                          // value=""
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <input
                          name="email"
                          type="email"
                          placeholder="Elektron pochtangizni kiriting"
                          id="email"
                          // value=""
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-md-6">
                      <div className="bd-contact-input mb-30">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Mobil raqami"
                          id="phone"
                          // value=""
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-md-6">
                      <div className="bd-contact-input custom-select-icon mb-30">
                        <select
                          name="subject"
                          id="subject"
                          className="bd-nice-select"
                        >
                          <option>Dastur tanlang</option>
                          <option>Kichik yoshlilar</option>
                          <option>Oʻrta yoshlilar</option>
                          <option>Katta yoshlilar</option>
                        </select>
                        <i className="far fa-chevron-down"></i>
                      </div>
                    </div> */}
                    {/* <div className="col-md-12">
                      <div className="bd-contact-input mb-20">
                        <textarea
                          name="msg"
                          id="msg"
                          placeholder="Xabaringiz"
                        ></textarea>
                        <p
                        //   style="color: red;"
                        >
                          Xabar majburiy maydondir
                        </p>
                      </div>
                    </div> */}
                    {/* <div className="col-md-12">
                      <div className="bd-contact-agree d-flex align-items-center mb-20">
                        <input className="" type="checkbox" id="check-agree" />
                        <label className="check-label" htmlFor="check-agree">
                          Keyingi sharh uchun ma'lumotlarni saqlang
                        </label>
                      </div>
                    </div> */}
                    {/* <div className="col-md-5">
                      <div className="bd-contact-agree-btn">
                        <button type="button" className="bd-btn">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">
                              Hozir yuborish
                            </span>
                            <span className="bd-btn-hover">Hozir yuborish</span>
                          </span>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
            </Shower>
          </div>
          <div className="col-xl-6 mb-60">
            <Shower name={`contact-form-2`} delay={0.3} aniX={50} aniY={0}>
              <div className="bd-contact-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  aria-hidden="false"
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1098.7832922894672!2d67.82393522290783!3d40.13372086271874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2971f2ccc0147%3A0xbd396bb4b67daabc!2sJizzax%20xokimiyat!5e1!3m2!1sen!2s!4v1708516716345!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
