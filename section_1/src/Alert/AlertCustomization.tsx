import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

const AlertCustomization = () => {
  const [open, setClose] = useState(true);
  return (
    <>
      {open && (
        <Alert
          variant={"filled"}
          onClose={() => setClose(false)}
          // color={"success"}
          severity={"info"}
          sx={{
            width: "30rem",
            height: "10rem",
            fontSize: "1.5rem",
            fontFamily: "Verdana",
            bgcolor: "yellowgreen", //my color
            "& .MuiAlert-icon": {
              color: "grey",
              fontSize: 45,
            },
            "& .MuiAlert-action": {
              color: "blue",
              "& > button > svg": {
                fontSize: 45,
              },
            },
          }}
        >
          <AlertTitle
            sx={{
              color: "red",
              fontFamily: "Verdana",
              fontSize: "2rem  ",
            }}
          >
            My Alert
          </AlertTitle>
          This is Alert
        </Alert>
      )}
    </>
  );
};

export default AlertCustomization;
