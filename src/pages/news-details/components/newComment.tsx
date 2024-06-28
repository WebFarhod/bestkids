import Grid from "@mui/material/Unstable_Grid2/Grid2";
import * as yup from "yup";

import { useForm, SubmitHandler, UseFormProps } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { toastOption } from "../../../components/toastOption/ToastOption";
// import { IComment } from "../../../types/messageType";
import CommentBody from "./input/commment-body";
import { InputCommentName } from "./input/commment-name";
import CommentService from "../../../service/commentService";
import { IComment } from "../../../types/commentType";
import { FC } from "react";

const schema = yup.object({
  user: yup.string().required("ismingizni kiriting"),
  number: yup.string().required("telefon raqamingizni kiriting"),
  body: yup.string().required("matn kiriting"),
  //   about: yup.string().required("Batafsil ma`lumot kiriting"),
});

export type CommmentFieldType = "user" | "number" | "body";

interface IProps {
  newsId: string;
}
const NewCommentInput: FC<IProps> = ({ newsId }) => {
  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
  } = useForm<IComment>({
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<IComment>);

  const createSubmit: SubmitHandler<IComment> = async (data) => {
    try {
      CommentService.createComment(data, newsId);

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
    <div className="bd-comment-form">
      <h3 className="bd-contact-form-title mb-25">Izoh qoldirish</h3>

      <form onSubmit={handleSubmit(createSubmit)} id="contact-form">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <InputCommentName
              name="user"
              control={control}
              errors={errors}
              trigger={trigger}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <InputCommentName
              name="number"
              control={control}
              errors={errors}
              trigger={trigger}
            />
          </Grid>
          <Grid xs={12}>
            <CommentBody
              name="body"
              control={control}
              errors={errors}
              trigger={trigger}
            />
          </Grid>
          <Grid xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <button type="submit" className="bd-btn">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">Yuborish</span>
                <span className="bd-btn-hover">Yuborish</span>
              </span>
            </button>
          </Grid>
        </Grid>
        <div className="row"></div>
      </form>
    </div>
  );
};

export default NewCommentInput;
