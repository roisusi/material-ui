import { type ButtonProps, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { type ReactNode } from "react";

/** IF WE MUST LET USER ENTER FONT WEIGHT **/

// interface ThemeProps {
//   fontWeight: number | string;
// }
//
// const MyButtonTheme = ({ fontWeight }: ThemeProps) => ({
//   fontWeight: fontWeight.toString() > "400" ? 400 : 900,
// });
//
// const ReusableButtonDynamic = styled(Button)<ThemeProps>(
//   MyButtonTheme,
//   ({ theme }) => ({
//     color: theme.palette.warning.main,
//     backgroundColor: "yellow ",
//     borderRadius: 10,
//     padding: 10,
//     fontSize: "20px",
//   }),
// );

const ReusableButtonDynamic = styled(Button)(({ theme }) => ({
  color: theme.palette.warning.main,
  backgroundColor: "yellow ",
  borderRadius: 10,
  padding: 10,
  fontSize: "20px",
}));

//ButtonProps makes is Button and the component is a wrapper
export const ReusableButtonDynamicNotStyled = ({
  color,
  children,
  ...props
}: {
  color: Partial<"primary" | "secondary">;
  children?: ReactNode;
} & ButtonProps) => {
  return (
    <Button {...props} color={color}>
      {children}
    </Button>
  );
};

export default ReusableButtonDynamic;
