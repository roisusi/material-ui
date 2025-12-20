import "./App.css";
import Button from "@mui/material/Button";

function App() {
  //Mui multi a number in margin padding gap columnGap rowGap by spacing value
  //We can access theme values by writing like warring.main (in sx)
  return (
    <>
      <Button
        variant={"contained"}
        sx={(theme) => ({
          fontSize: 10,
          color: "warning.main",
          margin: 10,
          backgroundColor: theme.palette.error.main,
        })}
      >
        My Button
      </Button>
    </>
  );
}

export default App;
