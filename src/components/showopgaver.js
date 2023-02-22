import React from 'react'
import color from '../assets/themes/color'
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  Pressable,
} from 'react-native'
import { launchCamera } from 'react-native-image-picker'

const TextinputBox = ({ className = '', ...props }) => (
  <TextInput className={`border ${className}`} {...props} />
)

const Opgave = () => {
  const [value, onChangeText] = React.useState('Opgave...')
  const [title, onChangeTitle] = React.useState('Titel...')

  const [capturedImages, setCapturedImages] = React.useState([])

  const Send = () => <Alert>Test</Alert>

  React.useEffect(() => {
    console.log(capturedImages)
  }, [capturedImages])

  return (
    <View className="flex p-5">
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

      <View className="flex flex-row flex-wrap w-full py-5">
        {capturedImages.length
          ? capturedImages.map(({ uri }, idx) => {
              return (
                <Pressable
                  className="basis-1/3 h-32 p-1"
                  onPress={() => {
                    setCapturedImages((p) => {
                      const cp = [...p]
                      cp.splice(idx, 1)
                      return cp
                    })
                  }}>
                  <Image
                    resizeMode="stretch"
                    resizeMethod="scale"
                    style={{ flex: 1 }}
                    source={{ uri: uri }}
                  />
                </Pressable>
              )
            })
          : null}
      </View>
      <Button
        title="Tag billede"
        onPress={() => {
          launchCamera().then((response) => {
            setCapturedImages((p) => [...p, ...response.assets])
          })
        }}
      />

      <Button
        onPress={() => Alert.alert('Test')}
        title="Send"
        color={color.primaryColor}
        className=""
      />
    </View>
  )
}

export default Opgave
