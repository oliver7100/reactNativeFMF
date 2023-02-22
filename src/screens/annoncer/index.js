import axios from 'axios'
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

const fetchAdvertisements = () => {
  return axios
    .get('http://192.168.1.131:3000/api/advertisement', {
      AllowDisabled: true,
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(JSON.stringify(err.response.data)))
}

const Announce = () => {
  const [advertisements, setAdvertisements] = React.useState([])

  React.useEffect(() => {
    fetchAdvertisements().then((data) => {
      setAdvertisements(data.items)
    })
  }, [])

  if (!advertisements.length) {
    return null
  }

  return (
    <ScrollView>
      <View className="flex flex-1 flex-col justify-center items-center">
        {advertisements.map((ad) => {
          return (
            <Box>
              <CustomText>{ad.description}</CustomText>
            </Box>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Announce
