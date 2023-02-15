import React, { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native'
import ArrowIcon from '../support/images/arrow_down.png'
import GenericPicture from '../profile/business/testimage.jpeg'
import ReturnablePage from '../../components/returnablepage'

const Box = ({ className = '', ...props }) => (
  <View
    className={`h-20 w-11/12 m-2  items-center justify-between flex flex-row bg-gray-400 rounded overflow-hidden ${className}`}
    {...props}
  />
)

const ImageBox = ({ className = '', ...props }) => (
  <Image className={`h-20 w-20 bg-gray-200 ${className}`} {...props} />
)

const CustomText = ({ className = '', ...props }) => (
  <Text className={`text-white ${className}`} {...props} />
)

const TruncateString = (string) => {
  if (string.length > 30) {
    string = string.substring(0, 27) + '...'
  }
  return string
}

var taskString = 'Sommerfugl på mine fede lår din fede nar'
var companyString = '6ix Bullets in you ass bitchass'

const Assignments = () => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <ScrollView>
        <View className="flex flex-1 flex-col justify-center items-center">
          <Box>
            <ImageBox source={GenericPicture}></ImageBox>
            <View className="gap-2">
              <Text>{TruncateString(taskString)}</Text>
              <Text>{TruncateString(companyString)}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setTest(true)}
              style={{ backgroundColor: 'blue' }}>
              <Image
                source={ArrowIcon}
                className="w-6 h-6 -rotate-90 mr-5"></Image>
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
      <ReturnablePage isActive={isOpen} setIsOpen={setisOpen}>
        <Text>Test</Text>
      </ReturnablePage>
    </>
  )
}

export default Assignments
