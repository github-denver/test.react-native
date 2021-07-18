import React, { useContext } from 'react'
import styled from 'styled-components/native'
import UserContext from '../contexts/User'
// import { UserConsumer } from '../contexts/User'
// import UserConsumer from '../contexts/User'

const StyledText = styled.Text`
  margin: 10px;
  font-size: 24px;
`

const User = () => {
  const { user } = useContext(UserContext)
  console.log('user: ' + user)

  return (
    // <UserContext.Provider value={{ name: 'React Native' }}>
    //   <UserContext.Consumer>
    //     {(value) => {
    //       console.log('value: ', value)

    //       return <StyledText>name: {value.name}</StyledText>
    //     }}
    //   </UserContext.Consumer>
    // </UserContext.Provider>

    // <UserConsumer>
    //   {({ user }) => {
    //     console.log('user: ' + user)

    //     return <StyledText>name: {user.name}</StyledText>
    //   }}
    // </UserConsumer>

    <StyledText>name: {user.name}</StyledText>
  )
}

export default User
