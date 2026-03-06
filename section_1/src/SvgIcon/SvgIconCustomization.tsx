import SvgIconFunctionality from "./SvgIconFunctionality.tsx";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const SvgIconCustomization = ({ ...props }: SvgIconProps) => {
  return (
    <>
      <SvgIconFunctionality {...props} />
    </>
  );
};

export default SvgIconCustomization;
