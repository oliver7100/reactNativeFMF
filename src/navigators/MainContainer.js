import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Image, StyleSheet } from 'react-native'
import color from '../assets/themes/color'
import Support from '../screens/support'
import Customer from '../screens/profile/customer'
import profileLogo from './images/profileimg.png'
import annonceLogo from './images/annonceimg.png'
import supportLogo from './images/supportimg.png'
import assignmentLogo from './images/assignmentimg.png'
import Business from '../screens/profile/business'
import Announce from '../screens/annoncer/index'
import Assignments from '../screens/opgaver/customer/index'
import BusinessAssignments from '../screens/opgaver/business/index'
import AssignmentWrite from '../components/assignmentwritepage'
import Opgave from '../components/showopgaver'
import LoginScreen from '../screens/Login'
import { useAuthProvider } from '../components/auth'
import RegisterScreen from '../screens/Login/register'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const _AuthStack = createStackNavigator()
const Token = false

const AssignmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primaryColor,
        },
      }}>
      <Stack.Screen name="Opgaver" component={Assignments} />
      <Stack.Screen
        name="Opgave"
        component={Opgave}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="Write" component={AssignmentWrite} />
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <_AuthStack.Navigator>
      <_AuthStack.Screen component={LoginScreen} name="Login" />
      <_AuthStack.Screen component={RegisterScreen} name="Register" />
    </_AuthStack.Navigator>
  )
}

const TabNavigator = () => {
  return (
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
        name="Opgaver "
        component={Token ? BusinessAssignments : AssignmentStack}
        options={{
          headerShown: false,
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
  )
}

const MainContainer = () => {
  const { state } = useAuthProvider()
  return (
    <NavigationContainer>
      {state.token ? <TabNavigator /> : <AuthStack />}
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
