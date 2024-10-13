import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({ navigation, matrixList }) => {
  return (
    <View style={styles.background}>
        <View style={styles.header}>
            <Text style={styles.headertext}> Approval Matrix</Text>
        </View>
        <View style={styles.container} >
            <View>
                <View style={styles.createbutton}> 
                    <AntDesign name="pluscircle" size={24} color="#fff" />
                    <Text 
                    style={{ color : '#FFF', fontSize : 14, fontWeight : 500 }}
                    onPress={() => navigation.navigate('Create')}
                    >Tambah New Matrix
                    </Text>
                </View>
            </View>  
            <View style={styles.line} />
          <View style={{ alignItems : 'center' }}>
            <View style={styles.inputbox}>
              <Text>Default </Text>
              <View style={{ backgroundColor : '#8F8F8FFF', width : 1, height : 40, marginLeft : 100, marginRight : 20,}}/>
              <Text>Default </Text>
              <AntDesign name="down" size={20} color="#8F8F8FFF" />
            </View>

            <View style={styles.inputbox}>
              <Text>Default </Text>
              <View style={{ backgroundColor : '#8F8F8FFF', width : 1, height : 40, marginLeft : 100, marginRight : 20,}}/>
              <Text>Default </Text>
              <AntDesign name="down" size={20} color="#8F8F8FFF" />
            </View>
          </View>
           {/* Danh sách matrix */}
           <FlatList
            data={matrixList}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingVertical: 10 }}
            renderItem={({ item }) => (
    <View style={styles.itemBox}>
      {/* Dòng giới hạn phê duyệt */}
      <View style={styles.row}>
        <Text style={styles.label}>Range Limit of Approval</Text>
        <View >
        <View style={styles.valueContainer}>
          <Text style={styles.value}>Minimum IDR</Text>
          <Text style={styles.number}>{item.minApproval || 0}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>Maximum IDR</Text>
          <Text style={styles.number}>{item.maxApproval || 0}</Text>
        </View>
        </View>
       
      </View>
      <View style={styles.line} />
      {/* Số lần phê duyệt */}
      <View style={styles.row}>
        <Text style={styles.label}>Number of Approval</Text>
        <Text style={styles.number}>{item.approvalNumber || 0}</Text>
      </View>
      <View style={styles.line} />
      {/* Người phê duyệt */}
      <View style={styles.row}>
        <Text style={styles.label}>Approver {item.approvalNumber}</Text>
        <Text style={styles.group}>
          {Array.isArray(item.groups) ? item.groups.join(', ') : 'N/A'}
        </Text>
      </View>
    </View>
  )}
  ListEmptyComponent={
    <Text style={{ marginTop: 20, color: '#999', textAlign: 'center' }}>
      No matrix available. Create one!
    </Text>
  }
/>

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
  inputbox : {
    height : '20%', 
    marginVertical : 10, 
    width : '90%',
    borderColor :'#e3e3e3',
    borderRadius : 25,
    borderWidth : 1,
    flexDirection : 'row',
    padding : 10, 
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  itemBox: {
    backgroundColor: '#FFFFFFFF',
    width: '90%',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    borderColor : '#e3e3e3',
    borderWidth : 1,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical : 10, 
  },
  label: {
    fontWeight: '400',
    // color :'#007AFF',
    fontSize: 16,
    flex: 1,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    //justifyContent: 'flex-end',
  },
  value: {
    color: '#007AFF',
    marginRight: 5,
  },
  number: {
    fontWeight: '400',
    color: '#007AFF',
  },
  group: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
})