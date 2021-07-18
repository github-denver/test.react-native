import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/native'

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  width: 200px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #757575;
  font-size: 20px;
`
const StyledText = styled.Text`
  margin: 10px;
  font-size: 24px;
`

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const refName = useRef(null)
  const refEmail = useRef(null)

  useEffect(() => {
    console.log('Mount')
    console.log('useEffect → name: ', name)
    console.log('useEffect → email: ', email)

    refName.current.focus()

    return () => console.log('Unmount')
  }, [])

  return (
    <>
      <StyledText>name: {name}</StyledText>

      <StyledTextInput
        value={name}
        placeholder="name"
        onChangeText={(text) => setName(text)}
        ref={refName}
        onSubmitEditing={() => refEmail.current.focus()}
      />

      <StyledText>email: {email}</StyledText>
      <StyledTextInput
        value={email}
        placeholder="email"
        onChangeText={(email) => setEmail(email)}
        ref={refEmail}
        returnKeyType="done"
      />
    </>
  )
}

export default Form
