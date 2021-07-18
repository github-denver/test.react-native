import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs((props) => {
  return {
    placeholder: 'Enter a text...',
    placeholderTextColor: !!props.borderColor ? props.borderColor : '#00ff00',
  };
})`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-width: 2px;
  border-color: ${(props) => {
    return !!props.borderColor ? props.borderColor : '#00ff00';
  }};
  border-radius: 10px;
  font-size: 24px;
`;

const Input = (props) => {
  return (
    // <StyledInput placeholder="Enter a text..." placeholderTextColor="#3498db" />

    <StyledInput borderColor={props.borderColor} />
  );
};

export default Input;
