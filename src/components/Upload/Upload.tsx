import DropZoneComponent from "../DropZoneComponent";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setCollapse1 } from "../../features/counter/counterSlice";
import {
  Container,
  TitleBox,
  TitleSpan,
  Svg,
  UploadPlace,
  SelectFilesTitle,
} from "../Upload/UploadStyle";

const Upload = () => {
  const collaps1 = useAppSelector((state) => state.counter.collaps1);
  const dispatch = useAppDispatch();

  const handleBoxOpenClose = (open: boolean) => {
    dispatch(setCollapse1(open));
  };
  return (
    <Container colaps={collaps1}>
      <TitleBox>
        <TitleSpan>Select more files to upload</TitleSpan>
        <Svg
          onClick={() => handleBoxOpenClose(collaps1)}
          rotating={collaps1}
          fill="#000000"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          <path d="M0-.75h24v24H0z" fill="none" />
        </Svg>
      </TitleBox>
      <UploadPlace>
        <SelectFilesTitle>Select files</SelectFilesTitle>
        <DropZoneComponent />
      </UploadPlace>
    </Container>
  );
};

export default Upload;
