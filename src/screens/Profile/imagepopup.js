import react from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'

const PopUp = ({isActive, setIsActive }) => {
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
        opacity: 0.5
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log("Do something")
        }}>
        <View>
            <Text style={{color: "black", backgroundColor: "blue", width: 80, height: 50}}>Change</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}
export default PopUp