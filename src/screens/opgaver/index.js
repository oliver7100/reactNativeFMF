import React from 'react'
import { View, Text } from 'react-native'

const Box = ({ className = '', ...props }) => (
  <View
    className={`flex h-20 w-3/4 m-2 justify-center items-center bg-gray-400 rounded ${className}`}
    {...props}
  />
)

const Assignments = () => {
  return (
    <View className="flex flex-1 flex-col justify-center items-center">
      <Box>
        <Text>Task Name</Text>
        <Text>Busniess: Busniess name</Text>
        <Text>Image</Text>
      </Box>
    </View>
  )
}

export default Assignments
