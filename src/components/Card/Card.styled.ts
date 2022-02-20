import styled from "styled-components";
import { device } from "../sizes";

export const Container = styled.div`
  min-width: 260px;
  height: 430px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 20px 15px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    width: 80%;
    height: 150px;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  padding: 0 5px;
`;

export const Description = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  font-weight: lighter;
  font-size: 14px;
`;

export const Price = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: green;
`;

export const Button = styled.div`
  width: 100%;
  height: 45px;
  background-color: green;
  position: absolute;
  margin-top: 20px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: lighter;
  overflow: hidden;
  border-radius-bottom-left: 7px;
  border-radius-bottom-right: 7px;
  &:hover {
    background-color: #013220;
  }
`;
