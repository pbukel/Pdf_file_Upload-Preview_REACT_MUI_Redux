import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setCollapse2 } from "../../features/counter/counterSlice";
// Import Worker
import { Worker } from "@react-pdf-viewer/core";
// Import the main PDF Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Import styles of default layout
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

//Modal
import { Box } from "@mui/system";
import { useState } from "react";

import {
  Container,
  TitleBox,
  ControlPlace,
  Name,
  FileName,
  Controls,
  TitleSpan,
  Svg,
  PreviewPlace,
  Modal,
  Backdrop,
  style,
} from "../Preview/PreviewStyle";

const Preview = () => {
  //creating pluggin instance:
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  //PDF viewer control panel
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const collaps2 = useAppSelector((state) => state.counter.collaps2);
  const dispatch = useAppDispatch();

  //seting to view last uploaded file
  const file = useAppSelector(
    (state) => state.counter.files[state.counter.previewIndex]
  );

  const handleBoxOpenClose = (open: boolean) => {
    dispatch(setCollapse2(open));
  };

  const handleShowPreview = () => {
    setOpen(true);
  };
  const handleDownload = () => {};

  return (
    <Container colaps={collaps2}>
      <TitleBox>
        {collaps2 ? (
          <ControlPlace>
            <Name>
              <ArrowBackIosOutlinedIcon
                sx={{
                  fontSize: "medium",
                  cursor: "pointer",
                }}
              />
              <FileName>{file ? file.name : ""}</FileName>
              <ArrowForwardIosOutlinedIcon
                sx={{
                  fontSize: "medium",
                  cursor: "pointer",
                }}
              />
            </Name>
            <Controls>
              <PreviewOutlinedIcon
                onClick={handleShowPreview}
                sx={{
                  cursor: "pointer",
                }}
              />
              <FileDownloadOutlinedIcon
                onClick={handleDownload}
                sx={{
                  cursor: "pointer",
                }}
              ></FileDownloadOutlinedIcon>
            </Controls>
          </ControlPlace>
        ) : (
          <TitleSpan>Preview uploaded files</TitleSpan>
        )}

        <Svg
          onClick={() => handleBoxOpenClose(collaps2)}
          rotating={collaps2}
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
      <PreviewPlace>
        <Worker
          workerUrl={
            "https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js"
          }
        >
          {file && (
            <Viewer
              // plugins={[defaultLayoutPluginInstance]}
              fileUrl={file.result}
            />
          )}
        </Worker>
      </PreviewPlace>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Worker
            workerUrl={
              "https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js"
            }
          >
            {file && <Viewer fileUrl={file.result} />}
          </Worker>
        </Box>
      </Modal>
    </Container>
  );
};

export default Preview;
