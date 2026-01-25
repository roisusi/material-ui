import Button from "@mui/material/Button";
import { Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

//Manipulation vs the sx props using the classes
// ---- ONE TIME STYLES ---- //
const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      {/*here is disabled prop is activated we get the class injected then the*/}
      {/*color black */}
      {/*will be activated*/}
      {/*&.Mui-disabled is override classes*/}
      {/*sx={{color:"red"}} called a static state*/}
      <Button
        disabled
        variant={"contained"}
        sx={{ "&.Mui-disabled": { color: "blue" } }}
      >
        classes manipulation
      </Button>
      {/*Child Class*/}
      {/*we need to make a space & . if this is a child similar to * >{}*/}
      {/*also we used ternary state for inline bgcolor that a dynamic */}
      <Button
        variant={"text"}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open ME
      </Button>
      <Menu
        sx={{ "& .MuiMenu-paper": { bgcolor: open ?  "red" : "black" } }}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <MenuItem onClick={() => setOpen(!open)}>Hello</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Basic;
