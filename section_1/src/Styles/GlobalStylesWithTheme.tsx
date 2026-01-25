import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

// ------------------------------------------------------------
// using theme.d.ts to override the types
// (Module Augmentation)
// כלומר: TypeScript "יודע" שיש myCustomTypo בתוך theme.typography
// זה לא CSS, לא DOM, ולא נגישות – רק typing
// ------------------------------------------------------------

// ============================================================
// 1️⃣ DESIGN TOKEN APPROACH (הדרך הנכונה לרוב)
// ============================================================
// typography.myCustomTypo הוא "טוקן עיצובי"
// הוא מתאר *מה זה* myCustomTypo – בלי קשר לאיפה משתמשים בו
//
// ✔ ניתן לשימוש בכל רכיב שתומך ב-sx
// ✔ לא תלוי ב-Typography
// ✔ מתאים ל-Design System ול-MFE
// ✔ לא פוגע בנגישות (CSS בלבד)
// ============================================================

const theme = createTheme({
  typography: {
    myCustomTypo: {
      color: "red",
      fontWeight: 700,
      fontSize: "18px",
    },
  },

  // ==========================================================
  // 2️⃣ COMPONENT OVERRIDE APPROACH (לא טוקן!)
  // ==========================================================
  // כאן אנחנו משנים *איך Typography ממומש בפועל*
  // זה לא מגדיר שפה עיצובית – זה דורס רכיב ספציפי
  //
  // ❌ לא משפיע על Button / Box / sx
  // ❌ coupling חזק ל-Typography
  // ⚠️ פחות טוב ל-Design System גדול
  // ==========================================================

  //  defaultProps - ברירות מחדל ל־API
  //  styleOverrides - “תדרוס את ה־CSS של Typography”
  //  variants - “אם variant=X → תן את ה־CSS הזה”

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // זה ישפיע על *כל* Typography
          // בלי קשר ל-variant
          color: "blue",
        },

        // אפשר גם לפי variant ספציפי
        h1: {
          color: "green",
        },
      },
    },
  },
});

// ============================================================
// שימוש בפועל
// ============================================================

const GlobalStylesWithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*
        כאן Button בכלל לא יודע מה זה Typography
        הוא פשוט לוקח CSS מטוקן typography.myCustomTypo

        ✔ Button נשאר <button>
        ✔ אין שינוי סמנטי
        ✔ אין פגיעה בנגישות
      */}
      <Button variant="contained" sx={{ typography: "myCustomTypo" }}>
        My Style
      </Button>

      {/*
        כאן Typography כן מושפע מ-styleOverrides
        וגם יכול להשתמש בטוקן
      */}
      {/*
      <Typography variant="h1" sx={{ typography: "myCustomTypo" }}>
        Example
      </Typography>
      */}
    </ThemeProvider>
  );
};

export default GlobalStylesWithTheme;
