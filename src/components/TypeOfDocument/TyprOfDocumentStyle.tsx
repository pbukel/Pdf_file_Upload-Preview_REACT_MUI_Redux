import styled from "styled-components";
import { alpha, styled as styledMui } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const BootstrapInput = styledMui(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    height: "20px",
    padding: "5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Container = styled.div`
  height: fit-content;
  width: 93%;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  margin-top: 15px;
  padding-top: 5px;
  box-sizing: border-box;
`;
export const Title = styled.span`
  margin-left: 10px;
`;
export const TypeContainer = styled.div`
  padding-top: 20px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
