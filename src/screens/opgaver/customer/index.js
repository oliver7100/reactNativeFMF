import React, { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native'
<<<<<<< Updated upstream
import ArrowIcon from '../../../assets/images/arrow_down.png'
=======
// import ArrowIcon from '../../support/images/arrow_down.png'
>>>>>>> Stashed changes
import GenericPicture from './testimage.jpeg'
import ReturnablePage from '../../../components/returnablepage'
import WriteIcon from './writeicon.png'
import WritePage from '../../../components/assignmentwritepage'

const Box = ({ className = '', ...props }) => (
  <View
    className={`h-20 w-11/12 m-2 items-center justify-between flex flex-row bg-gray-400 rounded overflow-hidden ${className}`}
    {...props}
  />
)

const ImageCircle = ({ className = '', ...props }) => (
  <Image
    className={`w-16 h-16 bg-gray-400 rounded-full overflow-hidden items-center justify-between m-5${className}`}
    {...props}
  />
)

const ImageBox = ({ className = '', ...props }) => (
  <Image className={`h-20 w-20 bg-gray-200 ${className}`} {...props} />
)

const CustomText = ({ className = '', ...props }) => (
  <Text className={`text-black font-mono ${className}`} {...props} />
)

const TruncateString = (string) => {
  if (string.length > 30) {
    string = string.substring(0, 27) + '...'
  }
  return string
}

var taskString =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
var companyString = '6ix Bullets'

const CustomerAssignments = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View className="flex flex-1 flex-col justify-center items-center">
          <Box>
            <ImageBox source={GenericPicture}></ImageBox>
            <View className="gap-2">
              <CustomText>{TruncateString(taskString)}</CustomText>
              <CustomText>{TruncateString(companyString)}</CustomText>
            </View>
<<<<<<< Updated upstream
            <TouchableOpacity onPress={() => navigation.navigate('Write')}>
              <Image
=======
            <TouchableOpacity onPress={() => setisOpen(true)}>
              {/* <Image
>>>>>>> Stashed changes
                source={ArrowIcon}
                className="w-6 h-6 -rotate-90 mr-5"></Image> */}
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
      <View className="bottom-0 right-0 absolute">
        <TouchableOpacity onPress={() => navigation.navigate('Opgave')}>
          <ImageCircle source={WriteIcon} />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CustomerAssignments
