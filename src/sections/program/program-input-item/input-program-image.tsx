/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from "react-dropzone";
import { Box, Stack } from "@mui/material";
import { keyframes } from "@emotion/react";
// import { primary } from "../../../../theme/palette";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { memo, useState } from "react";
// import { ITeacher } from "../../../../types/teacherType";
// import TeacherService from "../../../../service/teacherService";
import { imagePath } from "../../../utils/file-path";
import FileService from "../../../service/fileService";
import { error, primary } from "../../../theme/palette";
import { IProgram } from "../../../types/programType";
import { FaFileDownload } from "react-icons/fa";
import { grey } from "@mui/material/colors";
import { LuImageOff, LuImagePlus } from "react-icons/lu";
import "./programImageInput.css";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
interface IProps {
  setValue: UseFormSetValue<IProgram>;
  getValues: UseFormGetValues<IProgram>;
}

const InputImageg = ({ setValue, getValues }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    getValues("image") && imagePath(getValues("image"))
    // getValues("image")
  );
  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    try {
      const data = await FileService.uploadFile(file);
      setValue("image", data);
      setSelectedImage(imagePath(data));
    } catch (error) {
      console.log(error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleBoxClick = () => {
    if (selectedImage) {
      setSelectedImage("");
      setValue("image", "");
    }
  };

  return (
    <Stack width={"100%"}>
      {selectedImage == "" ? (
        <div style={{ width: "100%", height: "100" }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Box
              sx={{
                height: {
                  xs: 250,
                  sm: 400,
                  md: 350,
                  lg: 400,
                  xl: 450,
                },
                width: {
                  xs: 250,
                  sm: 400,
                  md: 350,
                  lg: 400,
                  xl: 450,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50",
                overflow: "hidden",
                fontSize: "100px",
                color: primary.main,
                marginX: "auto",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  zIndex: 1,
                  border: `5px dashed ${primary.light}`,
                  animation: `${rotateAnimation} 10s linear infinite`,
                },
                //     // }}
              }}
            >
              <FaFileDownload />
            </Box>
          ) : (
            <Box
              sx={{
                height: {
                  xs: 250,
                  sm: 400,
                  md: 350,
                  lg: 400,
                  xl: 450,
                },
                width: {
                  xs: 250,
                  sm: 400,
                  md: 350,
                  lg: 400,
                  xl: 450,
                },
                marginX: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50",
                  overflow: "hidden",
                  fontSize: "100px",
                  color: grey[500],
                  //   backgroundColor: "red",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    height: 200,
                    width: 200,
                    borderRadius: "50%",
                    zIndex: 1,
                    border: `5px dotted ${grey[500]}`,
                    transition: "0.09s",
                    //   animation: `${rotateAnimation} 10s linear infinite`,
                  },
                  "&:hover": {
                    color: primary.main,
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      height: 250,
                      width: 250,
                      borderRadius: "50%",
                      zIndex: 1,
                      border: `5px dashed ${primary.light}`,
                      animation: `${rotateAnimation} 10s linear infinite`,
                    },
                  },
                  //     // }}
                }}
              >
                <LuImagePlus style={{ position: "absolute" }} />
              </Box>
            </Box>
          )}
        </div>
      ) : (
        <div>
          <Box
            className="program-image-remove"
            sx={{
              height: {
                xs: 250,
                sm: 400,
                md: 350,
                lg: 400,
                xl: 450,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50",
              overflow: "hidden",
              fontSize: "100px",
              color: primary.main,
              position: "relative",
              "&:hover": {
                "&::before": {
                  content: "''",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  borderRadius: 2,
                  bgcolor: "rgba(128, 128, 128, 0.5)",
                  zIndex: 2,
                  border: `5px dashed ${error.main}`,
                  // animation: `${rotateAnimation} 10s linear infinite`,
                },
              },
            }}
            onClick={handleBoxClick}
          >
            <Box
              component="img"
              alt={"rasm"}
              src={selectedImage}
              sx={{
                height: {
                  xs: 250,
                  sm: 400,
                  md: 350,
                  lg: 400,
                  xl: 450,
                },
                borderRadius: 2,
                objectFit: "cover",
                width: "100%",
                cursor: "pointer",
                zIndex: "1",
              }}
            />
            <LuImageOff
              color={error.main}
              className="program-image-icon-remove"
            />
          </Box>
        </div>
      )}
      {/* <span>{"errors.img.message"}</span> */}
    </Stack>
  );
};

export default memo(InputImageg);
