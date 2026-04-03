import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";
// import AppleIcon from "@mui/icons-material/Apple";

const AlertFunctionality = () => {
  const [open, setClose] = useState(true);
  return (
    <>
      {open && (
        <Alert
          variant={"filled"}
          onClose={() => setClose(false)}
          color={"success"}
          severity={"info"}
          // icon={<AppleIcon />}
          icon={false} //no icon
          // action={
          //   <Button variant={"contained"} onClick={() => setClose(false)}>
          //     Close
          //   </Button>
          // } //Will delete the close X on onClose
        >
          <AlertTitle>My Alert</AlertTitle>
          This is Alert
        </Alert>
      )}
    </>
  );
};

export default AlertFunctionality;
