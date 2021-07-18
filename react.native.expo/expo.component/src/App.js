import React from 'react'
import { Text, View, Button } from 'react-native'
import Mybutton from './components/MyButton'
import EventInput from './components/EventInput'
import EventButton from './components/EventButton'
import Counter from './components/Counter'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
      <Button title="Button" onPress={() => alert('Click !!!')} />

      <Mybutton title="Button" onPress={() => alert('props')} />
      <Mybutton title="Button" onPress={() => alert('children')}>
        Children Props
      </Mybutton>
      <Mybutton onPress={() => alert('default')} />

      <EventInput />

      <EventButton />

      <Counter />
    </View>
  )
}

export default App
