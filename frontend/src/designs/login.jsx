import styled from "styled-components";

export const Div = styled.div`
  background-color: lightgreen;
  height: 500px;
  width: 500px;
  margin: auto;
  & > input {
    width: 80%;
    height: 30px;
    margin: 10px;
  }
  & > button {
      width: 80%;
      height: 50px;
  }`