import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const EventButton = () => {
  const _onPressIn = () => console.log('Press In !!!\n')
  const _onPressOut = () => console.log('Press Out !!!\n')
  const _onPress = () => console.log('Press !!!\n')
  const _onLongPress = () => console.log('Long Press !!!\n')

  return (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f1c40f',
      }}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={3000}
    >
      <Text style={{ fontSize: 24, color: '#fff' }}>Press</Text>
    </TouchableOpacity>
  )
}

export default EventButton
