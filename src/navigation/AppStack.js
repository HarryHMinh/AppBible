import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator({navigation});
const AppStack = () => {
    return (
       <Stack.Navigator>
            <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: true,
          headerTitle: ('DescriptionN'),
          headerTintColor: '#ED0033',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.iconStyle}>
              <Image
                style={styles.imageStyle}
                source={require('../../assets/prev.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
       </Stack.Navigator>
    )
}

export default AppStack
