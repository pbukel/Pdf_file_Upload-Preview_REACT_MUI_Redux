import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import ListOfUploads from "./ListOfUploads";
import TypeOfDocument from "./TypeOfDocument/TypeOfDocument";
import UploadAndPreview from "./UploadAndPreview";
import { useAppSelector } from "../app/hooks";

const Left = styled.div`
  flex: 1.5;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 2.5;
  height: 100%;
  display: flex;
  justify-content: center;
`;

function MainContainer({ drawerWidth }: { drawerWidth: number }) {
  const files = useAppSelector((state) => state.counter.files);
  return (
    <Box
      component="main"
      style={{
        background:
          "linear-gradient(266deg, rgba(235,209,235,1) 0%, rgba(249,244,250,1) 100%)",
      }}
      sx={{
        flexGrow: 1,
        //   p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          gap: "1px",
        }}
        sx={{
          width: { sm: `calc(100vw - ${drawerWidth}px)`, xs: `100vw` },
        }}
      >
        <Box
          style={{
            borderRadius: "20px",
            height: `calc(100vh - 160px)`,
            width: "95%",
            background: "white",
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Left>
            <TypeOfDocument />
            {files.length > 0 ? <ListOfUploads /> : null}
          </Left>
          <Right>
            <UploadAndPreview />
          </Right>
        </Box>
      </Box>
    </Box>
  );
}

export default MainContainer;
