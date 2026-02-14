import "./App.css";
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
import { Container, Stack } from "@mui/material";
import GlobalStylesWithTheme from "./Styles/GlobalStylesWithTheme.tsx";
import Example1 from "./AutoComplete/Example1.tsx";

function App() {
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
        <Stack sx={{ mt: 5 }}>
          <Example1 />
        </Stack>
      </Container>
    </>
  );
}

export default App;
