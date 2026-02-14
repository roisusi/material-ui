import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
// import Box from "@mui/material/Box";

// const options = ["Apple", "Banana", "Orange", "Pineapple"];
//Grouped
// const options = [
//   { label: "Apple", year: "2025" },
//   { label: "Banana", year: "2023" },
//   { label: "Orange", year: "2024" },
//   { label: "Pineapple", year: "2023" },
// ]; // if we use label like this we will get the chosen value in the bar
//

//if we want custom the label chosen in the bar without the label detection/use
//we use getOptionLabel
const options = [
  { name: "Apple", year: "2025" },
  { name: "Banana", year: "2023" },
  { name: "Orange", year: "2024" },
  { name: "Pineapple", year: "2023" },
];

const Example1 = () => {
  return (
    <Autocomplete
      // disabled
      // multiple
      // limitTags={2} // will show 4 tags then the +number when not focus
      // options={options}
      options={options.sort((a, b) => (a.year > b.year ? 1 : -1))} //if we do group by we need to sort it
      // getOptionDisabled={(option) => {
      //   return option.year !== "2023";
      // }} //disabled condition for options
      // groupBy={(option) => {
      //   return option.year; //Group by options of the data
      // }}
      //if i want the getOptionLabel to be as the selection options too (in the paper) i need to remove
      //renderOption
      getOptionLabel={(option) => `${option.year} - ${option.name}`}
      // renderOption={(props, option) => {
      //   return (
      //     //Custom renders for options
      //     <Box
      //       style={{
      //         backgroundColor: option.name.toLowerCase().includes("p")
      //           ? "red"
      //           : "",
      //       }}
      //       component={"li"}
      //       {...props} //to make sure its gets the default styles
      //     >
      //       {option.name}
      //     </Box>
      //   );
      // }}
      renderInput={(params) => {
        return <TextField {...params} label={"Fruits"} />;
      }}
    ></Autocomplete>
  );
};

export default Example1;
