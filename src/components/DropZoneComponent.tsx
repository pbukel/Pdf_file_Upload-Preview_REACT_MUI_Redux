import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useAppDispatch } from "../app/hooks";
import {
  addFileToArr,
  setCollapse1,
  setCollapse2,
} from "../features/counter/counterSlice";

const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;
const DragText = styled.p`
  font-size: 10px;
  span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

interface Object {
  path: string;
  name: string;
  size: number;
  type: string;
  result: any;
}

const DropZoneComponent = () => {
  const dispatch = useAppDispatch();
  const onDrop = useCallback((acceptedFiles: any) => {
    const newObject: Object = {
      path: acceptedFiles[0].path,
      name: acceptedFiles[0].name,
      size: acceptedFiles[0].size,
      type: acceptedFiles[0].type,
      result: "",
    };

    if (acceptedFiles[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        newObject.result = reader.result;

        dispatch(addFileToArr(newObject));
        setTimeout(() => {
          dispatch(setCollapse1(true));
          dispatch(setCollapse2(false));
        }, 500);
      };
    }
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()}></input>
      <DragText>
        Drag files here or click <span onClick={open}>browse</span>{" "}
      </DragText>
      <ImageContainer>
        <CloudUploadIcon color="secondary" fontSize="large" />
      </ImageContainer>
    </Container>
  );
};

export default DropZoneComponent;
