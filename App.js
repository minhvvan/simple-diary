import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Memo from './Memo'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
    }}>
        <Stack.Screen
          name="Home"
          component={App}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Memo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <CalendarList
        current={'2020-08-15'}
        minDate={'2012-05-10'}
        maxDate={'2052-05-30'}
        onDayPress={(day) => navigation.navigate('Profile', {date: day})}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        firstDay={1}
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
    />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default MyStack;