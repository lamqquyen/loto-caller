import styled from "styled-components";
import propTypes from "prop-types";

const Column = styled.td`
  width: 40px;
  height: 40px;
  border: 4px solid red;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 24px;
  background: white;
  color: red;
  font-family: PressStart2P;
  margin: 4px;

  ${({isCalled, isRecentlyCalled}) => isCalled && `
    color: white;
    background: ${isRecentlyCalled ? '#ad0404' : 'red'};
    border-color: ${isRecentlyCalled ? '#ad0404' : 'red'};
  `}


  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border: 2px solid red;
    font-size: 14px;
  }

  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
    border: 1px solid red;
    font-size: 10px;
  }
`;

const Number = ({number, currentNumber, isCalled}) => {
  return <Column isCalled={isCalled} isRecentlyCalled={currentNumber === number}>{number}</Column>;
};

Number.propTypes = {
  number: propTypes.string.isRequired,
  currentNumber: propTypes.string.isRequired,
  isCalled: propTypes.bool.isRequired
}


export default Number;
