import react from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import ArrowDown from '../assets/images/arrow_down.png'

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
        className="absolute top-0 left-0"
        onPress={() => {
          setIsOpen(false)
        }}>
        <Image className="w-10 h-10 rotate-90 m-3" source={ArrowDown}></Image>
      </TouchableOpacity>
      <View>{children}</View>
    </View>
  )
}
export default ReturnablePage
