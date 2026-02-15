import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";
import {
  ArrowForward,
  ArrowLeft,
  SubdirectoryArrowLeftRounded,
} from "@mui/icons-material";
import { useState } from "react";

const ButtonStyled = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
      {/*text is also a default*/}
      <Button
        disabled={disabled}
        onClick={() => {
          console.log("Hey Me!");
        }}
        sx={{
          fontFamily: "Verdana",
          // fontSize: "2rem",
          color: "#000",
          // bgcolor: "orange",
          borderRadius: 30,
          borderWidth: 4,
          borderColor: "#f153ff",
          width: "1200px",
          height: "200px",
          "&:hover": {
            borderColor: "rgba(50,253,6,0.3)",
            borderWidth: 1,
            bgcolor: "#ffc300",
          },
          "&.Mui-disabled": {
            bgcolor: "#e89ebc",
          },
        }}
        size="large" //the text
        disableElevation
        disableRipple
        variant={"outlined"}
        startIcon={<ArrowLeft />}
        endIcon={<ArrowForward />}
      >
        Just a button with contained
      </Button>
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

export default ButtonStyled;
