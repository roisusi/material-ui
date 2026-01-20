import Button from "@mui/material/Button";
import { styles } from "./styles.ts";
import { type ReactNode, useState } from "react";

export const StaticStyled = ({ children }: { children: ReactNode }) => {
  return (
    <Button variant={"contained"} sx={styles.strict}>
      {children}
    </Button>
  );
};

export const OverridewWithThemeStyled = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isok, _setIsok] = useState(false);
  return (
    <Button
      variant="contained"
      sx={[styles.override, isok && { color: "black" }]}
    >
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
      sx={(theme) => ({
        ...styles.overrideClass(theme),
        color: theme.palette.error.main,
      })}
    >
      {children}
    </Button>
  );
};
