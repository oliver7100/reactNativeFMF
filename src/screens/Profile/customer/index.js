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

const TextComponent = (props) => {
  return (
    <Text style={{color: "black"}}>
      {props.children}
    </Text>
  );
}

const Customer = () => {
  const { dispatch } = useAuthProvider()

  const [popup, setPopup] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
          <Image
            source={require('../images/placeholderImage.png')}
            style={styles.image}
            resizeMode="center"
          />
          </View>
          <TouchableOpacity style={styles.changeImageContainer}>
            <Image
              source={require('../images/camera.png')}
              style={styles.changeImage}
            />
          </TouchableOpacity>
          {/* <PopUp isActive ={popup} setIsActive={setPopup}/> */}
        </View>
        <View style={styles.infoContainer}>
          <TextComponent style={[styles.Text, { fontWeight: '200', fontSize: 36 }]}>
            Carl Larsen
          </TextComponent>
          <TextComponent>Email: test@gmail.com</TextComponent>
          <TextComponent>Address: Test44 gade 1</TextComponent>
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
    width: "100%",
    height: "100%",
    borderRadius: 100,
    overflow: 'hidden',
    position: "absolute"
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
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
    alignItems: "center"
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
})
