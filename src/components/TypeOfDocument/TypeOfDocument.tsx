import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

import {
  Container,
  Title,
  TypeContainer,
  InputContainer,
  BootstrapInput,
} from "../TypeOfDocument/TyprOfDocumentStyle";

function TypeOfDocument() {
  const [radioValue, setRadioValue] = useState("PDF");
  const [format, setFormat] = useState("placeholder");

  const handleChange = (event: { target: { value: string } }) => {
    setFormat(event.target.value);
  };
  const handleRadioChange = (event: { target: { value: string } }) => {
    setRadioValue(event.target.value);
  };

  return (
    <Container>
      <Title>Type of Document</Title>
      <TypeContainer>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={radioValue}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              sx={{
                flex: 1,
                margin: 0,
              }}
              value="PDF"
              control={<Radio />}
              label=""
            />
            <FormControlLabel
              sx={{
                flex: 1,
                margin: 0,
              }}
              value="OTHER"
              control={<Radio />}
              label=""
            />
          </RadioGroup>
          <InputContainer>
            <FormControl
              sx={{
                flex: 9,
                paddingRight: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              variant="standard"
              disabled={true}
            >
              <BootstrapInput defaultValue="PDF" id="bootstrap-input" />
            </FormControl>

            <FormControl
              sx={{
                flex: 9,
                paddingRight: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              variant="standard"
              disabled={radioValue === "OTHER" ? false : true}
            >
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select-label"
                value={format}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem disabled value="placeholder">
                  <em>Other formats</em>
                </MenuItem>
                <MenuItem value={"XMLS"}>XMLS</MenuItem>
                <MenuItem value={"DOC"}>DOC</MenuItem>
                <MenuItem value={"PDF"}>PDF</MenuItem>
              </Select>
            </FormControl>
          </InputContainer>
        </Box>
      </TypeContainer>
    </Container>
  );
}

export default TypeOfDocument;
