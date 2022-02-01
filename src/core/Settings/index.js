import styled from "styled-components";
import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { autoCall, } from "../../actions/setting";
import { reset, call } from "../../actions/number";
import propTypes from "prop-types"
import CurrentNumber from "../../components/CurrentNumber";
import { INTERVAL_CALL } from "../constants";

const Wrapper = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  background-color: red;
  margin: 12px;
  padding: 8px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  font-family: Changa;
  cursor: pointer;
  width: 100px;
  text-align: center;
  user-select: none;

  &:hover {
    background: #ad0404;
  }

  ${({disabled}) => disabled && `
    color: white-smoke;
    background: gray;
    cursor: default;
    &:hover {
      background: gray;
    }
  `}
`


const CurrentNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px;
`;

const defaultData = () => Array.from({length: 90}, (_, i) => i + 1)
let data = defaultData()

const Settings = ({setting, number, autoCall, reset, call}) => {
  const intervalAutoCall = useRef()

  const onReset = () => {
    autoCall(false)
    reset()
    data = defaultData()
  }

  const getNumber = () => {
    const index = Math.floor(Math.random() * data.length)
    const number = data.splice(index, 1)
    return number[0]

  }

  const callNumber = () => {
    const currentNumber = getNumber()
    const snd = new Audio(`/voices/${currentNumber}.mp3`) 
    snd.play()
    call(currentNumber)
  }

  const onCall = () => {
    if (setting.isAutoCallEnabled) return
    callNumber()
  }


  useEffect(() => {
    if (setting.isAutoCallEnabled) {
      const id = setInterval(() => {
        callNumber()
      }, INTERVAL_CALL);
  
      intervalAutoCall.current = id;
    }
    else {
      clearInterval(intervalAutoCall)
    }

    return () => {
      clearInterval(intervalAutoCall.current);
    };
  }, [setting.isAutoCallEnabled]);

  return <Wrapper>
    <CurrentNumberWrapper>
      <CurrentNumber currentNumber={number.currentNumber}/>
    </CurrentNumberWrapper>
    <ButtonWrapper>
      <Button onClick={onCall} disabled={setting.isAutoCallEnabled}>Call</Button>
      <Button onClick={() => {autoCall(!setting.isAutoCallEnabled)}}>{setting.isAutoCallEnabled ? 'Stop' : 'Auto Call'}</Button>
      <Button onClick={onReset}>Reset</Button>
    </ButtonWrapper>
  </Wrapper>
};

Settings.propTypes = {
  setting: propTypes.object.isRequired,
  number: propTypes.object.isRequired,
  autoCall: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  call: propTypes.func.isRequired
}

export default connect(({setting, number}) => ({setting, number}), {call, autoCall, reset})(Settings);
