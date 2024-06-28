/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {
  Accordion,
  AccordionSummary,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { blueGrey } from "@mui/material/colors";
import { ITeacher, ITeacherSocial } from "../../../types/teacherType";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { TeacherFieldType } from "../userItem";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const socials = [
  {
    name: "Telegram",
    icon: <FaTelegramPlane color="#24A1DE" />,
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp color="#25d366" />,
  },
  {
    name: "Facebook",
    icon: <BsFacebook color="#4267B2" />,
  },
  { name: "Instagram", icon: <AiFillInstagram color="#E1306C" /> },
  { name: "YouTube", icon: <FaYoutube color="#FF0000" /> },
];

interface IProps {
  control: Control<ITeacher, any>;
  errors: FieldErrors<ITeacher>;
  trigger: UseFormTrigger<ITeacher>;
  name: TeacherFieldType;
}

export default function InputTeacherSocial({
  control,
  errors,
  trigger,
  name,
}: IProps) {
  const handleChange = (event: SelectChangeEvent<typeof socialname>) => {
    const {
      target: { value },
    } = event;
    setSocialName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const selectIcon = (name: string) => {
    const selectedName = socials.find((item) => item.name === name);
    return selectedName ? <Box fontSize={20}>{selectedName.icon}</Box> : null;
  };

  const { field } = useController({
    name,
    control,
  });

  const [socialObj, setSocialObj] = React.useState<ITeacherSocial[]>(
    (field.value as ITeacherSocial[]) || []
  );
  (socialObj);
  const [socialname, setSocialName] = React.useState<string[]>(
    socialObj.map((d: ITeacherSocial) => d.name)
  );

  React.useEffect(() => {
    const data: ITeacherSocial[] = socialname.map((social) => {
      const foundSocial = socialObj.find(
        (item: ITeacherSocial) => item.name === social
      );
      return {
        name: social,
        link: foundSocial ? foundSocial.link : "",
      };
    });
    setSocialObj(data);
    field.onChange(data);
  }, [socialname]);
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="skill-content"
        id="skill-header"
        sx={{ pl: 0 }}
      >
        <Typography
          variant="body2"
          component="label"
          color={blueGrey[600]}
          fontFamily={"Public Sans, sans-serif"}
          sx={{ textTransform: "capitalize", fontWeight: "500" }}
        >
          Ijtimoiy tarmoqlar:
        </Typography>
      </AccordionSummary>
      <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={socialname}
          onChange={handleChange}
          // input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {socials.map((item) => (
            <MenuItem key={item.name} value={item.name}>
              <Checkbox checked={socialname.indexOf(item.name) > -1} />
              <Stack direction="row" alignItems="center" spacing={1}>
                {selectIcon(item.name)}
                <ListItemText primary={item.name} />
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack spacing={1}>
        <Controller
          name={name}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              {Array.isArray(field.value) ? (
                field.value.map((link, index) => {
                  return (
                    <Grid key={index} container spacing={2} alignItems="center">
                      <Grid>
                        <Typography
                          variant="body2"
                          component="label"
                          color={blueGrey[600]}
                          fontFamily={"Public Sans, sans-serif"}
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: "500",
                          }}
                        >
                          <Box fontSize={30}>
                            {
                              socials.find((item) => item.name === link.name)
                                ?.icon
                            }
                          </Box>
                          {/* {link.name} */}
                        </Typography>
                      </Grid>
                      <Grid xs={12} sm={7} md={4}>
                        <TextField
                          size="small"
                          sx={{
                            my: "8px",
                          }}
                          {...field}
                          variant="outlined"
                          value={(link as ITeacherSocial).link}
                          fullWidth
                          margin="normal"
                          error={!!errors.socials?.[index]?.link}
                          helperText={errors.socials?.[index]?.link?.message}
                          onBlur={() => trigger(name)}
                          onChange={(e) => {
                            const newSocial = [
                              ...(field.value as ITeacherSocial[]),
                            ];
                            newSocial[index].link = e.target.value;
                            field.onChange(newSocial);
                          }}
                        />
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <p>sdf</p>
              )}
            </>
          )}
        />
      </Stack>
    </Accordion>
  );
}
