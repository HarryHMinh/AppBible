import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
            <NavigationContainer>
          <Tab.Navigator
           screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              left: 0.9,
              right: 0.9,
              elevation: 0,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              height: 68,
              ...styles.shadow,
            },
          }}
          >
<Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.containerTab}>
                <Image
                  source={require('../../assets/TabIcon/home.png')}
                  resizeMode="contain"
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#ed0033' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#ed0033' : '#748c94',
                    fontSize: 12,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 6,
                    fontWeight: '200',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
     
        />
                       <Tab.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.containerTab}>
                <Image
                  source={require('../../assets/TabIcon/search.png')}
                  resizeMode="contain"
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#ed0033' : '#748c94',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#ed0033' : '#748c94',
                    fontSize: 12,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 6,
                    fontWeight: '200',
                  }}>
                  Lists
                </Text>
              </View>
            ),
          }}
     
        />
          </Tab.Navigator>
          </NavigationContainer>
        
    )
}

export default Tabs

const styles = StyleSheet.create({
  containerTab: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: 10,
  },
})
