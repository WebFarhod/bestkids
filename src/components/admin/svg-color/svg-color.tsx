import { forwardRef } from "react";

import Box from "@mui/material/Box";

interface IProps {
  src: string;
  sx: object;
  color?: string;
}
const SvgColor = forwardRef(({ src, sx, color, ...other }: IProps, ref) => (
  <Box
    component="span"
    className="svg-color"
    color={color}
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: "inline-block",
      bgcolor: "currentColor",
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

export default SvgColor;
