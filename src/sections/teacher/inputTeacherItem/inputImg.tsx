/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from "react-dropzone";
import { Avatar, Box, Stack } from "@mui/material";
import { keyframes } from "@emotion/react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { memo, useState } from "react";
import { GrClose } from "react-icons/gr";
import "./teacherInput.css";
import { primary } from "../../../theme/palette";
import { ITeacher } from "../../../types/teacherType";
import { imagePath } from "../../../utils/file-path";
import FileService from "../../../service/fileService";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
interface IProps {
  setValue: UseFormSetValue<ITeacher>;
  getValues: UseFormGetValues<ITeacher>;
}

const InputImg = ({ setValue, getValues }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    getValues("image") && imagePath(getValues("image"))
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
    <Stack
      margin={3}
      direction="row"
      justifyContent={{ xs: "center", sm: "flex-start" }}
    >
      {selectedImage == "" ? (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    zIndex: 1,
                    border: `2px dashed ${primary.light}`,
                    animation: `${rotateAnimation} 10s linear infinite`,
                  },
                }}
              >
                <Avatar
                  alt="rasm"
                  // src={selectedImage}
                  sx={{
                    width: 80,
                    height: 80,
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      width: 70,
                      height: 70,
                    },
                  }}
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: 150,
                height: 150,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    zIndex: 1,
                    border: `3px dashed ${primary.light}`,
                    animation: `${rotateAnimation} 10s linear infinite`,
                    transform: "translate(-50%, -50%)",
                  },
                },
              }}
            >
              <Avatar
                alt="rasm"
                src={selectedImage ? selectedImage : ""}
                sx={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              />
            </Box>
          )}
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <Box
            onClick={handleBoxClick}
            sx={{
              width: 150,
              height: 150,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="teacher-input-image">
              <Avatar
                className=".teacher-input-image-avatar"
                src={selectedImage}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <GrClose className="teacher-input-image-icon" />
            </div>
          </Box>
        </div>
      )}
      {/* <span>{"errors.img.message"}</span> */}
    </Stack>
  );
};

export default memo(InputImg);
