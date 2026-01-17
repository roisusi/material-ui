import Button from "@mui/material/Button";
import { styles } from "./styles.ts";
import type { ReactNode } from "react";

export const StaticStyled = ({ children }: { children: ReactNode }) => {
  return (
    <Button variant={"contained"} sx={styles.strict}>
      {children}
    </Button>
  );
};

//HERE I HAVE A TYPE PROBLEM to OVERRIDE with []
export const OverridewWithThemeStyled = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Button variant="contained" sx={styles.override}>
      {children}
    </Button>
  );
};

export const OverrideStyledClasses = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Button
      variant={"contained"}
      sx={{ ...styles.overrideClass, color: "white" }}
    >
      {children}
    </Button>
  );
};
