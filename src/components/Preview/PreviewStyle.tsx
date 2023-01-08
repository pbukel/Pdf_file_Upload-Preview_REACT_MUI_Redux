import styled from "styled-components";
import React from "react";
import clsx from "clsx";
import { styled as styledMUI, Theme } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

export const BackdropUnstyled = React.forwardRef<
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

export const Modal = styledMUI(ModalUnstyled)`
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

export const Backdrop = styledMUI(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const style = (theme: Theme) => ({
  width: "calc(100vw - 30%)",
  maxHeight: "calc(100vh - 110px)",
  bgcolor: "white",
  border: "none",
  padding: "16px 32px 24px 32px",
  borderRadius: "20px",
  overflowY: "auto",
});

interface PropsColaps {
  colaps: boolean;
}

export const Container = styled.div<PropsColaps>`
  height: ${(props) => (props.colaps ? "90%" : "35px")};
  width: 95%;
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid lightgrey;
  transition: all 0.3s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;
export const TitleBox = styled.div`
  height: 35px;
  width: 100%;
  /* background-color: red; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
`;
export const TitleSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

interface PropsSvg {
  rotating: boolean;
}
export const Svg = styled.svg<PropsSvg>`
  transition: 0.3s;
  transform: ${(props) => (props.rotating === true ? `rotate(180deg)` : "")};
  cursor: pointer;
`;

export const PreviewPlace = styled.div`
  height: calc(100% - 35px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
export const ControlPlace = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
`;
export const Name = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
`;

export const Controls = styled.div`
  flex: 1;
  display: flex;
`;
export const FileName = styled.span`
  font-size: 20px;
  margin: 0 20px;
`;
