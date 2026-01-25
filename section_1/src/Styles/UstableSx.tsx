import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  styled,
  type CSSObject,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const theme = createTheme({
  typography: {
    myCustomTypo: {
      fontWeight: 700,
      fontSize: "18px",
    },
  },
});

//כל זה על מנת להכיר ב-sx מחוץ לjsx

// ============================================================
// 1) styled "רגיל" – בלי System
//    ✔ אפשר theme.palette
//    ❌ לא יכול להגיד typography: 'myCustomTypo' (זה System feature)
// ============================================================
const StyledNoSystem = styled("div")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

// ============================================================
// 2) "JSS" / plain CSS-in-JS – אובייקט סטייל פשוט
//    ✔ הכי פשוט
//    ❌ אין theme, אין tokens
// ============================================================
const jssLikeStyles: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 700,
  color: "red",
};

// ============================================================
// 3) theme.unstable_sx –
//    כאן אנחנו "ממירים" sx ל-CSSObject בתוך styled/overrides.
//    שים לב: זה ה-bridge היחיד שמאפשר typography: 'myCustomTypo'
// ============================================================
const StyledWithUnstableSx = styled("div")(
  ({ theme }): CSSObject =>
    theme.unstable_sx({
      typography: "myCustomTypo",
      color: "primary.main",
    })
);

export const StyledWithUnstableSxWithExtentionsProps = styled(Button)(
  ({ theme, variant }): CSSObject => ({
    // שימוש בטוקן טיפוגרפי
    ...theme.unstable_sx({
      typography: "myCustomTypo",
      color: variant === "contained" ? "primary.contrastText" : "text.primary",
    }),

    // הרחבות רגילות
    display: "inline-flex",
    alignItems: "center",
  })
);

export const StyledWithUnstableSxWithExtentionsOwner = {
  root: ({ theme, ownerState }): CSSObject => ({
    ...theme.unstable_sx({
      typography: "myCustomTypo",
      color: ownerState.disabled ? "text.disabled" : "text.primary",
    }),

    ...(ownerState.variant === "contained" && {
      borderRadius: 12,
    }),
  }),
};

export default function OneFileDemo() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2, display: "grid", gap: 2 }}>
        <StyledNoSystem>
          1) styled בלי System (ערכים קשיחים: fontSize/fontWeight)
        </StyledNoSystem>

        <div style={jssLikeStyles}>2) JSS/plain object (לא קשור ל-theme)</div>

        <StyledWithUnstableSx>
          3) styled + theme.unstable_sx (לוקח typography token)
        </StyledWithUnstableSx>

        {/* ב-JSX אתה לא צריך unstable בכלל — sx עובד טבעי */}
        <Button variant="contained" sx={{ typography: "myCustomTypo" }}>
          JSX sx (בלי unstable)
        </Button>
      </Box>
    </ThemeProvider>
  );
}
