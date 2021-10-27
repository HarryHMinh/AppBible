import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [Item1, setItem1]= useState(false)

  const getList1 = () => {
    const apiURL = 'https://bible-api.com/john 3:16'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  const getList2 = () => {
    const apiURL = 'https://bible-api.com/jn 3:16'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData1(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  const getList3 = () => {
    const apiURL = 'https://bible-api.com/romans+12:1-2'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData2(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  const getList4 = () => {
    const apiURL = 'https://bible-api.com/romans 12:1-2,5-7,9,13:1-9&10'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData3(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  const getList5 = () => {
    const apiURL = 'https://bible-api.com/john 3:16?translation=kjv'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData4(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  const getList6 = () => {
    const apiURL = 'https://bible-api.com/john 3:16?verse_numbers=true'
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJSON) => {
        setData5(resJSON)
      }).catch((err) => {
        console.log('Error:', err);
      })
  }

  useEffect(() => {
    getList1()
    getList2()
    getList3()
    getList4()
    getList5()
    getList6()
  }, [])

 
  const setItem = async () => {
    try {
      await AsyncStorage.setItem('FirstItem', 'true');
    } catch (err) {
      alert(err);
    }
  };
  const getItem = async () => {
    AsyncStorage.getItem('FirstItem').then(result => {
      if (result !== null) {
        setItem1(true)
      console.log(result)
      } else {
        console.log('null')
      }
    });
  };

getItem()
  const RemoveConfirm = async () => {
    try {
      await AsyncStorage.removeItem('FirstItem');
    } catch (exception) {}
  };
  
  
  return (
    <View style={styles.container}>
        
        <TouchableOpacity 
        style={styles.containerView}
        onPress={() => {navigation.navigate('DetailScreen', data);setItem()}}
        >
          <Text style={styles.title}>{data.reference}</Text>
          <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
          
        </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => {navigation.navigate('DetailScreen', data1);setItem();RemoveConfirm()}}
         style={styles.containerView}>
           <Text style={styles.title}>{data1.reference}</Text>
           <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => {navigation.navigate('DetailScreen', data2);setItem();RemoveConfirm()}}
         style={styles.containerView}>
           <Text style={styles.title}>{data2.reference}</Text>
           <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => {navigation.navigate('DetailScreen', data3);setItem();RemoveConfirm()}}
         style={styles.containerView}>
           <Text style={styles.title}>{data3.reference}</Text>
           <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => {navigation.navigate('DetailScreen', data4);setItem();RemoveConfirm()}}
         style={styles.containerView}>
           <Text style={styles.title}>{data4.reference}</Text>
           <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => {navigation.navigate('DetailScreen', data5);setItem();RemoveConfirm()}}
         style={styles.containerView}>
           <Text style={styles.title}>{data5.reference}</Text>
           <View style={styles.Icon}>
          {Item1 === false? null : <AntDesign name="checkcircle" size={26} color="#ED0" />}
          </View>
         </TouchableOpacity>    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
  },
  containerView:{
    
    marginBottom:5,
    borderRadius:10,
    height:60,
    width:'100%',
    backgroundColor: '#FFF',
    padding:20,
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
	          width: 0,
	          height: 2,
                  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight:'400',
  },
  Icon:{
    marginStart:290,
    marginTop:-22,
  }

})
