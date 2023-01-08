import styled from "styled-components";
interface PropsColaps {
  colaps: boolean;
}

export const Container = styled.div<PropsColaps>`
  height: ${(props) => (props.colaps ? "50%" : "35px")};
  width: 95%;
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid lightgrey;
  transition: all 0.3s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const TitleBox = styled.div`
  height: 35px;
  width: 100%;

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

export interface PropsSvg {
  rotating: boolean;
}
export const Svg = styled.svg<PropsSvg>`
  transition: 0.3s;
  transform: ${(props) => (props.rotating === true ? `rotate(180deg)` : "")};
  cursor: pointer;
`;

export const UploadPlace = styled.div`
  height: calc(100% - 35px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const SelectFilesTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
