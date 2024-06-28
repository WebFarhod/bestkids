import { Box, Slider, Input as MuiInput } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ChangeEvent, useState } from "react";

export default function InputSlider({
  value: propValue,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  const [sliderValue, setSliderValue] = useState<number>(Number(propValue));
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    onChange(newValue as number);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };
  const handleBlur = () => {
    if (Number.isNaN(sliderValue)) {
      setSliderValue(0);
    } else {
      if (sliderValue < 0) {
        setSliderValue(0);
        onChange(0);
      } else if (sliderValue > 100) {
        setSliderValue(100);
        onChange(100);
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid xs>
          <Slider
            // sx={{
            //   width: "100%",
            // }}
            value={sliderValue}
            onChange={handleSliderChange}
            onBlur={handleBlur}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid>
          <MuiInput
            value={sliderValue}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
