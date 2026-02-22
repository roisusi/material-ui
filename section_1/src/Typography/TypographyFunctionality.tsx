import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(({ theme }) => ({
  ...theme.typography.button,
}));

const TypographyFunctionality = () => {
  return (
    <>
      <div style={{ backgroundColor: "red", width: "15rem", height: "2rem" }}>
        {/*noWrap + fixed with getting u ... */}
        {/*align - set the position of the text*/}
        {/*gutterBottom - is a margin-bottom*/}
        {/*when we use component we render h2 in dom BUT we use the h6 styles*/}
        <Typography
          component={"h2"}
          noWrap
          gutterBottom
          variant={"h6"}
          align={"justify"}
        >
          Hello Hello Hello Hello Hello Hello Hello Hello
        </Typography>
      </div>
      <StyledDiv>Reuse Button Typography Styles</StyledDiv>
    </>
  );
};

export default TypographyFunctionality;
