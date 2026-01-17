import { styled, type Theme } from "@mui/material";
import Button from "@mui/material/Button";

interface ThemeProps {
  theme: Theme;
}

const MyButtonTheme = ({ theme }: ThemeProps) => ({
  color: theme.palette.warning.main,
  fontWeight: "900",
  fontSize: "20px",
});

// const ReusableButton = styled(Button)(MyButtonTheme, {
//   // color: "blue", //override
//   backgroundColor: "yellow ",
//   borderRadius: 10,
//   padding: 10,
// });

const ReusableButton = styled(Button)(MyButtonTheme, {
  backgroundColor: "yellow ",
  borderRadius: 10,
  padding: 10,
});

// const ReusableButton = styled(Button)(({ theme }) => ({
//   // color: "blue", //override
//   color: theme.palette.error.main,
//   backgroundColor: "yellow ",
//   borderRadius: 10,
//   padding: 10,
// }));

export default ReusableButton;
