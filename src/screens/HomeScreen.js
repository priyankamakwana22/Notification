import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {getCities} from '../fetchApi/Action';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const HomeScreen = (props) => {
  const {cities} = useSelector(state => state.fetchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleNotification = item => {
    props.requestNotificationPermission();
    console.log('item', item);
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You clicked on ' +item.country,
      message: item.city,
      vibrate: true,
    });
  };

  return (
    <View>
      <Text style={styles.header}>Home Screen</Text>
      <FlatList
        data={cities}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handleNotification(item);
            }}
            style={styles.main}>
            <View>
              <Text style={styles.header}>{item.city}</Text>
              <Text style={styles.title}>{item.country}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  main: {borderWidth: 1, borderRadius: 2, margin: 10, alignItems: 'center'},
  header: {
    fontSize: 40,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
});
