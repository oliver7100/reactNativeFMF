import react from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ReturnablePage = ({ children, isActive, setIsOpen }) => {
  if (!isActive) return null
  return (
    <View
      style={{
        display: 'flex',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          top: 0,
          left: 0,
          position: 'absolute',
          backgroundColor: 'black',
        }}
        onPress={() => {
          setIsOpen(false)
        }}></TouchableOpacity>
      <View>{children}</View>
    </View>
  )
}
export default ReturnablePage
