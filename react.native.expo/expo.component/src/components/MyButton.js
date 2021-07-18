import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const MyButton = (props) => {
  console.log('props: ', props)

  return (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#3498db',
      }}
      // onPress={() => alert('Click !!!')}
      onPress={() => props.onPress()}
    >
      <Text style={{ fontSize: 24, color: '#fff' }}>
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  )
}

MyButton.defaultProps = {
  title: 'Button',
}

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MyButton
