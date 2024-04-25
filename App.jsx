import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Store} from './src/fetchApi/Store';
import HomeScreen from './src/screens/HomeScreen';
import PushNotification from 'react-native-push-notification';
import {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Maps from './src/screens/Maps';

const App = () => {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  
  const Stack = createStackNavigator();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
