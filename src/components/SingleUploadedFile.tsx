import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  removeFileFromArr,
  setPreviewIndex,
} from "../features/counter/counterSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 13px;
  box-shadow: rgba(99, 99, 99, 0.4) 0px 1px 6px 0px;
  cursor: pointer;
`;
const Name = styled.div`
  color: "#535D69";
  font-size: 14px;
`;
const ButtonsContainer = styled.div``;

type Props = {
  index: number;
  item: any;
};

const SingleUploadedFile: React.FC<Props> = ({ index, item }) => {
  const selectedIndex = useAppSelector(
    (state) => state.counter.selectedFileIndex
  );
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    setTimeout(() => {
      dispatch(removeFileFromArr(index));
    }, 500);
  };
  const showFile = () => {
    dispatch(setPreviewIndex(index));
  };
  return (
    <Container
      style={{ backgroundColor: index === selectedIndex ? "#d5b1d6" : "" }}
      onClick={showFile}
    >
      <Name>{item.path}</Name>
      <ButtonsContainer>
        <EditOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "#535D69",
          }}
        />
        <DeleteForeverOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "#535D69",
          }}
          onClick={handleDelete}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default SingleUploadedFile;
