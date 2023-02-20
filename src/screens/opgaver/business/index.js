import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ReturnablePage from '../../../components/returnablepage'

const BusinessAssignments = () => {
  const [isOpen, setisOpen] = useState(false)

  const Box = ({ className = '', ...props }) => (
    <View
      className={`h-20 w-11/12 m-2  items-center justify-between flex flex-row bg-gray-400 rounded overflow-hidden ${className}`}
      {...props}
    />
  )

  const ImageBox = ({ className = '', ...props }) => (
    <Image className={`h-20 w-20 bg-gray-200 ${className}`} {...props} />
  )

  return (
    <>
      <View className="flex flex-1 flex-col justify-center items-center"></View>
      <ReturnablePage isActive={isOpen} setIsOpen={setisOpen}>
        <Text>Test12345</Text>
      </ReturnablePage>
    </>
  )
}

export default BusinessAssignments
