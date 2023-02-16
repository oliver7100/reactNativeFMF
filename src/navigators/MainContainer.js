import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Image, StyleSheet } from 'react-native'
import color from '../assets/themes/color'
import Support from '../screens/support/index'
import Customer from '../screens/profile/customer/index'
import profileLogo from './images/profileimg.png'
import annonceLogo from './images/annonceimg.png'
import supportLogo from './images/supportimg.png'
import assignmentLogo from './images/assignmentimg.png'
import Business from '../screens/profile/business/index'
import Announce from '../screens/annoncer/index'
import Assignments from '../screens/opgaver/customer/index'
import CustomerAssignments from '../screens/opgaver/business/index'

const Tab = createBottomTabNavigator()
const Token = true

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'rgba(0,0,0,1)',
          headerStyle: {
            backgroundColor: color.primaryColor,
          },
          tabBarStyle: {
            backgroundColor: color.primaryColor,
          },
        }}>
        <Tab.Screen
          name="Annoncer"
          component={Announce}
          options={{
            tabBarIcon: () => (
              <Image source={annonceLogo} style={styles.images} />
            ),
          }}
        />
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarIcon: () => (
              <Image source={supportLogo} style={styles.images} />
            ),
          }}
        />
        <Tab.Screen
          name="Opgaver"
          component={Token ? Assignments : CustomerAssignments}
          options={{
            tabBarIcon: () => (
              <Image source={assignmentLogo} style={styles.images} />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={Token ? Business : Customer}
          options={{
            tabBarIcon: () => (
              <Image source={profileLogo} style={styles.images} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer

const styles = StyleSheet.create({
  images: {
    width: 30,
    height: 30,
  },
})
