import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
    <CalendarList
        current={'2020-08-15'}
        minDate={'2012-05-10'}
        maxDate={'2052-05-30'}
        onDayPress={(day) => {console.log('selected day', day)}}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
