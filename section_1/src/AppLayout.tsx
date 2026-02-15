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
import ButtonStyled from "./Button/ButtonStyled.tsx";

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
          <ButtonStyled />
        </Stack>
      </Container>
    </>
  );
};

export default AppLayout;
