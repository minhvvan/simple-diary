import React, {useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { StatusBar, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';


const Memo =  ({route, navigation}) => {
  const [text, setText] = useState('일기이이이장'); 
  const [clicked, setClicked] = useState(false);
  const {date} = route.params;
  return (
    <View style={styles.container}>
    <StatusBar hidden={true}/>
      <View style={styles.topBar}>    
        <TouchableOpacity style={{flex: 2}} onPress={()=>{navigation.goBack()}}>
          <Ionicons name="ios-arrow-back" size={40} color="black" />
        </TouchableOpacity>
          <Text style={{flex: 5, fontSize: 30, fontStyle: 'italic'}}>{date.dateString}
        </Text>
        <View style={{flex: 0.6}}>
          <TouchableOpacity onPress={()=>{setClicked(!clicked)}}>
            {clicked ? 
            <AntDesign name="star" size={30} color="black"/>
            : <AntDesign name="staro" size={30} color="black" />
            }
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.content}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView style={styles.scrollView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <TextInput 
                  style={{flex: 1, borderColor: 'gray', fontSize: 20}}
                  onChangeText={text => setText(text)}
                  value={text}
                  multiline={true}
                />
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    marginBottom: 10,
    marginHorizontal: 15
  },
  content: {
    flex: 15,
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  safeArea: {
    flex: 1,
    marginTop: 3,
    marginBottom: 3,
    alignContent: 'flex-start',
    justifyContent:'flex-start'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 3, 
    alignContent: 'flex-start',
  },
});

export default Memo;