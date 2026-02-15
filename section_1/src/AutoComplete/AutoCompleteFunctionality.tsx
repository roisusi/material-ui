import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

// import Box from "@mui/material/Box";

interface Options {
  name: string;
  year: string;
}

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

const AutoCompleteFunctionality = () => {
  //adding values to control the element
  const [value, setValue] = useState<Options | null>(null);

  useEffect(() => {
    console.log("value");
    console.log(value);
  }, [value]);
  return (
    <Autocomplete
      freeSolo
      isOptionEqualToValue={(option, value) => {
        return value.name === option.name; //for mui purpose to check the equalization
      }}
      value={value}
      onBlur={(event) => {
        const text = (event.target as HTMLInputElement).value;
        const selectedText =
          value === null ? "" : `${value.year} - ${value.name}`; //check of the same value dont setValue it

        if (text === selectedText) {
          // כבר אותו ערך — לא עושים setValue
          return;
        } else {
          setValue(value);
          console.log(text);
        }
      }}
      onChange={(event, value, reason, details) => {
        setValue(value as Options);
        console.log(event);
        console.log(reason);
        console.log(details?.option.name);
        console.log(value!);
      }}
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
      //if I want the getOptionLabel to be as the selection options too (in the paper) i need to remove
      //renderOption
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : `${(option as Options).year} - ${(option as Options).name}`
      }
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

export default AutoCompleteFunctionality;
