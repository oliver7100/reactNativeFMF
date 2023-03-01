import React from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native'
import Star from '../images/star.png'

const TextComponent = (props) => {
  return (
    <Text style={{color: "black"}}>
      {props.children}
    </Text>
  );
}


const Business = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>

        <View style={{ alignSelf: 'center' }}></View>
        <View style={styles.profileImage}>
          <Image
            source={require('../images/profileFiller.jpg')}
            style={styles.image}
            resizeMode="center"
          />
        </View>
        <View style={styles.infoContainer}>
          <TextComponent style={[styles.TextComponent, { fontWeight: '200', fontSize: 36 }]}>
            Six Bullets
          </TextComponent>
          <TextComponent>Email: test@gmail.com</TextComponent>
          <TextComponent>Address: Test44 gade 1</TextComponent>
        </View>
        <View style={[styles.container, { marginTop: 20 }]}>
          <Image source={Star} style={styles.starImage} />
          <TextComponent>4.3/5</TextComponent>
        </View>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => Logout}
        >
          <Text style={styles.logoutText}>Log ud</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Business

const styles = StyleSheet.create({
  TextComponent: {
    color: "black"
  },
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
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
})
