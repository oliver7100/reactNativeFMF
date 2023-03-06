import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useAuthProvider } from '../../../components/auth'
import PopUp from '../imagepopup'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Customer = () => {
  const { dispatch } = useAuthProvider()

  const [popup, setPopup] = useState(false)
  const [image, setImage] = React.useState([])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frame}
      >
        <View style={styles.titleBar}></View>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
          </View>
          <TouchableOpacity 
            style={styles.changeImageContainer}
            onPress={() => {
              launchImageLibrary().then((response) => {
                setImage((p) => [...response.assets])
              })
            }}
            >
            <Image
              source={require('../images/camera.png')}
              style={styles.changeImage}
            />
          </TouchableOpacity>
          {/* <PopUp isActive ={popup} setIsActive={setPopup}/> */}
        </View>
        <View style={styles.infoContainer}>
          <Text 
            style={[styles.nameText, styles.text]}
          >Carl Larsen</Text>
          <View
            style={styles.iDontKnowWhatToCallThis}
          >
            <View 
              style={styles.longInfoContainer}
            >
              <Image
                style={styles.infoImage}
                source={require('../images/mail.png')}
              />
              <Text
                style={[styles.text]}
              >johansen0508@gmail.com</Text>
            </View>
            <View 
              style={styles.infoSets}
            >
              <View
                style={styles.innerInfoContainer}
              >
                <Image
                  style={styles.infoImage}
                  source={require('../images/phone.png')}
                />
                <Text
                  style={[styles.text]}
                >21473757</Text>
              </View>
              <View
                style={styles.innerInfoContainer}
              >
                <Image
                  style={styles.infoImage}
                  source={require('../images/house.png')}
                />
                <Text
                  style={[styles.text]}
                >Koldingvej 51</Text>
              </View>
            </View>
            <View 
              style={styles.infoSets}
            >
              <View
                style={styles.innerInfoContainer}
              >
                <Image
                  style={styles.infoImage}
                  source={require('../images/zip.png')}
                />
                <Text
                  style={[styles.text]}
                >6600</Text>
              </View>
              <View
                style={styles.innerInfoContainer}
              >
                <Image
                  style={styles.infoImage}
                  source={require('../images/city.png')}
                />
                <Text
                  style={[styles.text]}
                >Vejen</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => dispatch({token: null})}
        >
          <Text style={styles.logoutText}>Log ud</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Customer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    overflow: 'hidden',
    position: "absolute"
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: "95%",
    gap: 10
  },
  starImage: {
    width: 60,
    height: 60,
  },
  logoutButton: {
    backgroundColor: "#913831",
    height: 40,
    width: 80,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  logoutText: {
    fontSize: 16,
    color: "white"
  },
  changeImageContainer: {
    backgroundColor: "#595048",
    marginBottom: 6,
    marginLeft: 6,
    width: 46,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  changeImage: {
    width: 40,
    height: 40
  },
  nameText: {
    fontSize: 28
  },
  text: {
    color: "black",
    maxWidth: "75%",
  },
  innerInfoContainer: {
    gap: 10,
    width: "48%",
    flexDirection: "row",
    minHeight: 50,
    alignItems: "center",
    borderWidth: 1,
  },
  infoSets: {
    flexDirection: "row",
    width: 250,
    gap: 10,
    width: "100%"
  },
  infoImage: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  frame: {
    alignItems: "center",
    gap: 30
  },
  longInfoContainer: {
    flexDirection: "row",
    gap: 10,
    minHeight: 50,
    alignItems: "center",
    borderWidth: 1
  },
  iDontKnowWhatToCallThis: {
    gap: 10,
  },
})
