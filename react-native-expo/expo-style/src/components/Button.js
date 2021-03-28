import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  margin: 10px 0px;
  padding: 15px 40px;
  border-radius: 15px;
  background-color: ${(props) => {
    /* props.title === 'Hanbit' ? '#3498db' : '#9b59b6'}; */
    return props.title === 'Hanbit' ? props.theme.blue : props.theme.purple;
  }};
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  /* color: #fff; */
  color: ${(props) => props.theme.text};
`;

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;
