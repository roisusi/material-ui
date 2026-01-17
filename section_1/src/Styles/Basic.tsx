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
      <Button
        disabled
        variant={"contained"}
        sx={{ "&.Mui-disabled": { color: "blue" } }}
      >
        classes manipulation
      </Button>
      {/*Child Class*/}
      {/*we need to make a space & . if this is a chils similar to * >{}*/}
      <Button
        variant={"text"}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open ME
      </Button>
      <Menu
        sx={{ "& .MuiMenu-paper": { bgcolor: "red" } }}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <MenuItem onClick={() => setOpen(!open)}>Hello</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Basic;
