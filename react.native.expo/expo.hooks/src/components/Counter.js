import React, { useState } from 'react'
import styled from 'styled-components/native'
import Button from './Button'

const StyledText = styled.Text`
  margin: 10px;
  font-size: 24px;
`

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledText>count: {count}</StyledText>

      <Button
        title="-"
        onPress={() => {
          setCount((prevCount) => prevCount - 1)
        }}
      />

      <Button
        title="+"
        onPress={() => {
          setCount((prevCount) => {
            console.log('2. prevCount: ', prevCount)

            return prevCount + 1
          })

          console.log('1. count: ', count)
        }}
      />
    </>
  )
}

export default Counter
