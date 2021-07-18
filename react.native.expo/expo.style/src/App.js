import React, { useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native'
// import { viewStyles, textStyles } from './styles'

// import { Header, Container, Footer } from './components/Layout'
// import ShadowBox from './components/ShadowBox'

import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { theme, lightTheme, darkTheme } from './theme';

import { Switch } from 'react-native';

const Container = styled.View`
  flex: 1;
  /* background-color: #fff; */
  background-color: ${(props) => {
    console.log('props.theme: ', props.theme);

    return props.theme.background;
  }};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    /* <View style={viewStyles.container}>
      <Text style={[textStyles.text, textStyles.error]}>
        React Native Style
      </Text>
      <Text style={[textStyles.text, { color: '#0000ff' }]}>
        React Native Style
      </Text>

      <Header />
      <Container />
      <Footer />

      <ShadowBox />
    </View> */

    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
        <Button title="Hanbit" />
        <Button title="React Native" />
        <Input />
        <Input borderColor="#3498db" />
        <Input borderColor="#9b59b6" />
      </Container>
    </ThemeProvider>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontWeight: '700',
    fontSize: 26,
    color: '#000',
  },
  error: {
    fontWeight: '400',
    color: '#ff0000',
  },
}) */

export default App;
