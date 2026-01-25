import "@mui/material/styles";

declare module "@mui/material/styles" {
  /**
   * theme.typography.myCustomTypo
   */
  interface TypographyVariants {
    myCustomTypo: React.CSSProperties;
  }

  /**
   *  typography: {
   *     myCustomTypo: { color: 'red' }
   *   }
   */
  interface TypographyVariantsOptions {
    myCustomTypo?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  /**
   * <Typography variant="myCustomTypo" />
   */
  interface TypographyPropsVariantOverrides {
    myCustomTypo: true;
  }
}
