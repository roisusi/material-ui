import type { Theme, SxProps, CSSObject } from "@mui/material/styles";

interface IStyles {
  strict: SxProps<Theme>;
  override: SxProps<Theme>;
  overrideClass: CSSObject;
}

export const styles: IStyles = {
  strict: {
    bgcolor: "greenyellow",
    color: "#000",
  },
  override: (theme) => ({
    color: "red",
    bgcolor: theme.palette.warning.main,
  }),
  overrideClass: {
    "&.MuiButton-root": {
      bgcolor: "black",
    },
  },
};
