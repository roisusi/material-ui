import GeneralUsesSx from "./Styles/GeneralUsesSx.tsx";
import Basic from "./Styles/Basic.tsx";
import ReusableButton from "./Styles/ReusableButton.tsx";
import ReusableButtonDynamic, {
  ReusableButtonDynamicNotStyled,
} from "./Styles/ReusableButtonDynamic.tsx";
import {
  OverridewWithThemeStyled,
  OverrideStyledClasses,
  StaticStyled,
} from "./Styles/WithStyledClass/StylesBaseComponents.tsx";
import { Container, Stack, Typography } from "@mui/material";
import GlobalStylesWithTheme from "./Styles/GlobalStylesWithTheme.tsx";
import AutoCompleteFunctionality from "./AutoComplete/AutoCompleteFunctionality.tsx";
import ButtonFunctionality from "./Button/ButtonFunctionality.tsx";
import ButtonCustomization from "./Button/ButtonCustomization.tsx";
import TypographyFunctionality from "./Typography/TypographyFunctionality.tsx";
import TypographyCustomization from "./Typography/TypographyCustomization.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SvgIconCustomization from "./SvgIcon/SvgIconCustomization.tsx";

const themeForTypo = createTheme({
  typography: {
    myCustomTypo: {
      fontFamily: "Arial",
      fontSize: "2rem",
      color: "blue",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      fontFamily: "Roboto",
      color: "white",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h6: "h1", //inspect => h6 -> style h1 -> dom
          myCustomTypo: "h2",
        },
      },
    },
  },
});

const AppLayout = () => {
  return (
    <>
      <GeneralUsesSx />
      <Basic />
      <ReusableButton>Hello</ReusableButton>
      <ReusableButtonDynamic>Hello Dynamic</ReusableButtonDynamic>
      <ReusableButtonDynamicNotStyled sx={{ bgcolor: "red" }} color={"primary"}>
        Hello Not Styled
      </ReusableButtonDynamicNotStyled>
      <Stack spacing={2}>
        <StaticStyled>StaticStyled</StaticStyled>
        <OverridewWithThemeStyled>OverrideStyled</OverridewWithThemeStyled>
        <OverrideStyledClasses> OverrideStyledClasses</OverrideStyledClasses>
      </Stack>

      <Stack>
        <GlobalStylesWithTheme />
      </Stack>

      <Container>
        <Stack sx={{ mt: 15 }}>
          <AutoCompleteFunctionality />
        </Stack>
      </Container>

      <Container>
        <Stack spacing={3} sx={{ mt: 15 }}>
          <Typography variant={"h1"}>Buttons</Typography>
          <ButtonFunctionality />
          <ButtonCustomization />
        </Stack>
      </Container>

      <Container>
        <Stack sx={{ mt: 15 }}>
          <Typography variant={"h1"}>Typography</Typography>
          <TypographyFunctionality />
          <ThemeProvider theme={themeForTypo}>
            <Typography variant={"h3"}>Custom</Typography>
            <TypographyCustomization />
          </ThemeProvider>
        </Stack>
      </Container>

      <Container>
        <Stack sx={{ mt: 15 }}>
          <Typography variant={"h1"}>Icons</Typography>
          <SvgIconCustomization sx={{ color: "red" }} />
        </Stack>
      </Container>
    </>
  );
};

export default AppLayout;
