import React from 'react'
import { Text, View, ScrollView } from 'react-native'

const Box = ({ className = '', ...props }) => (
  <View
    className={`flex h-48 w-3/4 m-2 justify-center items-center bg-gray-400 rounded ${className}`}
    {...props}
  />
)

const CustomText = ({ className = '', ...props }) => (
  <Text className={`text-white ${className}`} {...props} />
)

const Announce = () => {
  return (
    <ScrollView bounces="false">
      <View className="flex flex-1 flex-col justify-center items-center">
        <Box>
          <CustomText>01</CustomText>
        </Box>
        <Box>
          <CustomText>02</CustomText>
        </Box>
        <Box>
          <CustomText>03</CustomText>
        </Box>
        <Box>
          <CustomText>04</CustomText>
        </Box>
        <Box>
          <CustomText>05</CustomText>
        </Box>
        <Box>
          <CustomText>06</CustomText>
        </Box>
      </View>
    </ScrollView>
  )
}

export default Announce
