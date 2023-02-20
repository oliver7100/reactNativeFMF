import React from 'react'
import color from '../assets/themes/color'
import { View, Text, TextInput, Button, Alert } from 'react-native'

const Opgave = () => {
  const [value, onChangeText] = React.useState('Opgave...')
  const [title, onChangeTitle] = React.useState('Titel...')

  const Send = () => <Alert>Test</Alert>

  const TextinputBox = ({ className = '', ...props }) => (
    <TextInput className={`m-2 border p-2.5 w-80 ${className}`} {...props} />
  )

  return (
    <View className="justify-center items-center m-12">
      <View>
        <Text>Titel</Text>
        <TextinputBox
          className="h-[40] "
          onChangeText={onChangeTitle}
          value={title}
        />
      </View>
      <View
        style={{
          backgroundColor: value,
        }}>
        <Text>Opgave</Text>
        <TextinputBox
          editable
          multiline
          numberOfLines={4}
          maxLength={100}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          className="h-[100] "
        />
      </View>
      <View className="justify-center items-center">
        <Button
          onPress={() => Alert.alert('Test')}
          title="Send"
          color={color.primaryColor}
          className=""
        />
      </View>
    </View>
  )
}

export default Opgave
