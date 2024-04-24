import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Store} from './src/fetchApi/Store';
import HomeScreen from './src/screens/HomeScreen';
import PushNotification from 'react-native-push-notification';
import {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';

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

  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        // PermissionsAndroid.check('android.permission.POST_NOTIFICATIONS')
        //   .then(response => {
        //     if (!response) {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
                {
                  title: 'Notification',
                  message:
                    'App needs access to your notification ' +
                    'so you can get Updates',
                  buttonNeutral: 'Ask Me Later',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
          //     );
          //   }
          // }
        )
          // .catch(err => {
          //   console.log('Notification Error=====>', err);
          // });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Provider store={Store}>
      <HomeScreen
        requestNotificationPermission={requestNotificationPermission}
      />
    </Provider>
  );
};

export default App;
