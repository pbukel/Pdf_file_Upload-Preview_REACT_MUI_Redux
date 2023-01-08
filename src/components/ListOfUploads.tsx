import styled from "styled-components";
import SingleUploadedFile from "./SingleUploadedFile";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeAllFromArr } from "../features/counter/counterSlice";
import Button from "@mui/material/Button";

import React from "react";
import clsx from "clsx";
import { styled as styledMUI, Box, Theme } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { useState } from "react";

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styledMUI(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styledMUI(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  width: 400,
  bgcolor: "white",
  border: "none",
  padding: "16px 32px 24px 32px",
  borderRadius: "20px",
});

const Container = styled.div`
  min-height: 50px;
  height: fit-content;
  width: 93%;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  margin-top: 15px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.span``;
const UploadsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Clear = styled.div`
  width: 100%;
  text-align: end;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

const ListOfUploads: React.FC = () => {
  const files = useAppSelector((state) => state.counter.files);
  const dispatch = useAppDispatch();
  const handleAllDelete = () => {
    dispatch(removeAllFromArr());
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Title>List of uploads</Title>
      <UploadsContainer>
        {files.map((item, i) => (
          <SingleUploadedFile key={i} index={i} item={item} />
        ))}
      </UploadsContainer>
      <Clear onClick={handleOpen}>Clear All</Clear>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
      >
        <Box sx={style}>
          <p id="unstyled-modal-description">
            Are you sure you want to delete all files? You'll have to start
            uploading process from the very beginning.
          </p>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button onClick={handleClose} color="success" variant="outlined">
              CANCEL
            </Button>
            <Button
              onClick={handleAllDelete}
              color="success"
              variant="contained"
            >
              CONFIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default ListOfUploads;
