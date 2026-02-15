import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  ArrowForward,
  ArrowLeft,
  SubdirectoryArrowLeftRounded,
} from "@mui/icons-material";
import { useState } from "react";

const ButtonFunctionality = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
      {/*text is also a default*/}
      <Button variant={"text"}>Just a button</Button>
      <Button
        onClick={() => {
          console.log("Hey Me!");
        }}
        size="large"
        color="warning"
        disableElevation
        disableRipple
        variant={"contained"}
        startIcon={<ArrowLeft />}
        endIcon={<ArrowForward />}
        //make this as a link navigation outside
        // component="a"
        // href={"/"}
        //make this as a navigation inside
        component={RouterLink}
        to={"/"}
        disabled={disabled}
      >
        Just a button with contained
      </Button>
      <Button variant={"outlined"}>Just a button with contained</Button>
      <IconButton>
        <SubdirectoryArrowLeftRounded
          onClick={() => {
            setDisabled(!disabled);
          }}
          color={"error"}
        />
      </IconButton>
    </Stack>
  );
};

export default ButtonFunctionality;
