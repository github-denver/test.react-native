import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  margin: 10px 0;
  padding: 15px 30px;
  border-radius: 15px;
  background-color: #3498db;
  justify-content: center;
`

const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
`

const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
