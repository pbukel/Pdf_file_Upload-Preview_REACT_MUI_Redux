import styled from "styled-components";

import Upload from "./Upload/Upload";
import Preview from "./Preview/Preview";

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
`;

function UploadAndPreview() {
  return (
    <Container>
      <Upload />
      <Preview />
    </Container>
  );
}

export default UploadAndPreview;
