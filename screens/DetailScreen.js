import React from 'react';
import {  Text,
    TextInput,
    View,
    Button,
    Image,
    FlatList,
    StyleSheet,
    Alert,
    TouchableHighlight,
    TouchableOpacity} from 'react-native';

function DetailsScreen({route, navigation}) {
    /* 2. Get the param */
    const {name} = route.params.name;
    const {dob} = route.params.dob;
    const {sex} = route.params.sex;
    const {avatar} = route.params.avatar;
  
    return (
      <View style={{flexDirection: 'column',flex:1}}>
        <View style={{flexDirection: 'row',flex:1, justifyContent:'center', paddingTop:20}}>
        <Image
                source={avatar}
                style={{width: 300, height: 200, borderRadius:20}}
              />
        </View>
        <View style={{flexDirection: 'column',flex:1.8,}}>
          {/* <Text style={styles.h1}>THÔNG TIN SINH VIÊN</Text> */}
  
          <Text style={styles.content}>Họ tên: {name}</Text>
  
          <Text style={styles.content}>Ngày sinh: {dob}</Text>
  
          <Text style={styles.content}>Giới tính: {sex}</Text>
        </View>
      </View>
    );
  }

export default DetailsScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      borderRadius:10,
      backgroundColor: '#fff',
    },
  
    item: {
      flexDirection: 'row',
      backgroundColor: '#f2f3f4',
      padding: 20,
      marginBottom: 3,
      borderRadius:10,
    },
  
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
  
    name: {
      fontSize: 20,
    },
    dob: {fontSize: 16},
    sex: {fontSize: 16, textAlign: 'center'},
    h1: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
    content: {
      fontSize: 16, 
      padding: 10,
      textAlign:'center',
    },
    fromView:{
      width:'90%'
    },
    textInput: {
      borderColor: 'black',
      borderWidth:1,
      backgroundColor: 'white',
      borderRadius: 20,
      textAlign: 'left',
      paddingLeft: 80,
    },
  });