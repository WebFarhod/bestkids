// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react-refresh/only-export-components */
// import * as React from "react";
// import { Box, FormControl, Rating, Stack, Typography } from "@mui/material";
// import { blueGrey } from "@mui/material/colors";
// // import { ProgramFieldType } from "../program-input";
// import {
//   Control,
//   FieldErrors,
//   UseFormTrigger,
//   useController,
// } from "react-hook-form";
// import { OptionFieldType } from "../option-input";
// import { IOption } from "../../../types/optionType";

// interface IProps {
//   name: OptionFieldType;
//   control: Control<IOption, any>;
//   errors: FieldErrors<IOption>;
//   trigger: UseFormTrigger<IOption>;
// }
// function InputoptionRating({
//   control,
//   name,
// }: //  errors, trigger
// IProps) {
//   const { field } = useController({
//     name,
//     control,
//   });

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <Typography
//         variant="body2"
//         component="label"
//         color={blueGrey[600]}
//         fontFamily={"Public Sans, sans-serif"}
//         sx={{ mb: 1, fontWeight: "500" }}
//       >
//         Daraja
//       </Typography>
//       <FormControl fullWidth>
//         <Stack spacing={1}>
//           <Rating
//             size="large"
//             name="half-rating"
//             defaultValue={2.5}
//             precision={0.5}
//           />
//         </Stack>
//       </FormControl>
//     </Box>
//   );
// }
// export default React.memo(InputoptionRating);

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Box, FormControl, Rating, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import {
  Control,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { OptionFieldType } from "../option-input";
import { IOption } from "../../../types/optionType";

interface IProps {
  name: OptionFieldType;
  control: Control<IOption, any>;
  errors: FieldErrors<IOption>;
  trigger: UseFormTrigger<IOption>;
}

const InputOptionRating: React.FC<IProps> = ({
  control,
  name,
  // errors,
  trigger,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily="Public Sans, sans-serif"
        sx={{ mb: 1, fontWeight: "500" }}
      >
        Daraja
      </Typography>
      <FormControl fullWidth>
        <Stack spacing={1}>
          <Rating
            size="large"
            name={name}
            value={Number(value) || 0}
            onChange={(_event, newValue) => {
              onChange(newValue);
              trigger(name);
            }}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error.message}
            </Typography>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
};

export default React.memo(InputOptionRating);
