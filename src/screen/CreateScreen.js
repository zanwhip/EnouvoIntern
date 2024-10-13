import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateScreen = ({ navigation, setMatrixList, matrixList }) => {
  const [name, setName] = useState('');
  const [feature, setFeature] = useState(null);
  const [minApproval, setMinApproval] = useState('');
  const [maxApproval, setMaxApproval] = useState('');
  const [approvalNumber, setApprovalNumber] = useState('');

  const features = [
    { label: 'Default', value: 'Default' },
    { label: 'Transfer Online', value: 'Transfer Online' },
  ];

  // Hàm thêm vào danh sách
  const handleAddToList = () => {
    if (!name || !feature || !minApproval || !maxApproval || !approvalNumber) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const newMatrix = {
      name,
      feature,
      minApproval,
      maxApproval,
      approvalNumber,
    };

    setMatrixList([...matrixList, newMatrix]); // Thêm vào danh sách
    navigation.goBack(); // Quay về HomeScreen
  };

  // Hàm reset các input
  const handleReset = () => {
    setName('');
    setFeature(null);
    setMinApproval('');
    setMaxApproval('');
    setApprovalNumber('');
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Approval Matrix</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.createbutton}>
          <Text style={{ color: '#FF9900', fontSize: 20, fontWeight: '700' }}>
            Create New Approval Matrix
          </Text>
        </View>

        <View style={styles.line} />
        <ScrollView>
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <View>
              <Text>Approval Matrix Alias</Text>
              <View style={styles.inputbox}>
                <TextInput
                  style={styles.input}
                  placeholder="Input matrix name"
                  placeholderTextColor="#999"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            {/* Feature Dropdown */}
            <View>
              <Text>Feature</Text>
              <Dropdown
                style={styles.inputbox}
                data={features}
                labelField="label"
                valueField="value"
                placeholder="Select a feature"
                placeholderTextColor="#999"
                value={feature}
                onChange={(item) => setFeature(item.value)}
                renderRightIcon={() => <AntDesign name="down" size={20} color="#999" />}
              />
            </View>

            <View>
              <Text>Range of Approval (Minimum)</Text>
              <View style={styles.inputbox}>
                <TextInput
                  style={styles.input}
                  placeholder="Input minimum value"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  value={minApproval}
                  onChangeText={setMinApproval}
                />
              </View>
            </View>

            <View>
              <Text>Range of Approval (Maximum)</Text>
              <View style={styles.inputbox}>
                <TextInput
                  style={styles.input}
                  placeholder="Input maximum value"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  value={maxApproval}
                  onChangeText={setMaxApproval}
                />
              </View>
            </View>

            <View>
              <Text>Number of Approval</Text>
              <View style={styles.inputbox}>
                <TextInput
                  style={styles.input}
                  placeholder="Input number"
                  placeholderTextColor="#999"
                  value={approvalNumber}
                  onChangeText={setApprovalNumber}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Nút Add và Reset */}
            <TouchableOpacity style={styles.button} onPress={handleAddToList}>
              <Text style={{ fontWeight: '800', color: '#FFF' }}>ADD TO LIST</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={{ fontWeight: '800', color: '#FFF' }}>RESET</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FF9900',
    flex: 1,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 10,
  },
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  createbutton: {
    height: 35,
    width: '100%',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    height: 1,
    backgroundColor: '#e3e3e3',
    marginHorizontal: 20,
  },
  inputbox: {
    height: 70,
    marginVertical: 10,
    width: '90%',
    borderColor: '#e3e3e3',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    height: 70,
    marginVertical: 10,
    width: '90%',
    backgroundColor: '#3333CC',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
