import type { Theme, SxProps } from "@mui/material/styles";
import type { CSSObject } from "@mui/material";

interface IStyles {
  strict: SxProps<Theme>;
  override: (theme: Theme) => CSSObject;
  overrideClass: (theme: Theme) => CSSObject;
}

export const styles: IStyles = {
  strict: (theme) => ({
    bgcolor: "greenyellow",
    color: theme.palette.error.main,
  }),
  override: (theme: Theme) => ({
    color: "red",
    bgcolor: theme.palette.warning.main,
    borderRadius: theme.shape.borderRadius,
    zIndex: theme.zIndex.modal + 100,
  }),
  overrideClass: (theme) => ({
    color: theme.palette.warning.main,
    "&.MuiButton-root": {
      bgcolor: "black",
    },
  }),
};
