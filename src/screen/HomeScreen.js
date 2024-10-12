import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View style={styles.background}>
        <View style={styles.header}>
            <Text style={styles.headertext}> Approval Matrix</Text>
        </View>
        <View style={styles.container} >
            <View>
                <View style={styles.createbutton}> 
                    <AntDesign name="pluscircle" size={24} color="#fff" />
                    <Text style={{ color : '#FFF', fontSize : 14, fontWeight : 500 }}>Tambah New Matrix</Text>
                </View>
            </View>  
            <View style={styles.line} />
          
        </View>
       

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
   background : {
   
    backgroundColor : '#FF9900',
    flex : 1,
   },
   header : {
    marginTop : 60,
    alignItems : 'center',
    marginBottom : 10,
   },
   headertext : {
    fontSize : 24,
    fontWeight : 'bold',
    color : '#FFF',
  
   },
   container : {
   
    flex : 1,
    backgroundColor : '#FFF',
    borderTopRightRadius : 20, 
    borderTopLeftRadius : 20, 
   }, 
   createbutton :{
    height : 50, 
    backgroundColor : '#3333CC' , 
    width : 250, 
    marginLeft : 140, 
    marginVertical : 20,
    borderRadius : 18, 
    paddingHorizontal : 30,
    justifyContent : "space-between",
    alignItems : 'center',
    flexDirection : 'row',

   }, 
   line: {
    height: 1, 
    backgroundColor: '#e3e3e3', 
    marginHorizontal: 20, 
  },
  
})