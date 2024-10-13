import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, ScrollView, Alert, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const MatrixDetailScreen = ({ route, navigation, updateMatrix, deleteMatrix }) => {
  const { matrix, index } = route.params;
  const [name, setName] = useState(matrix.name || ''); // Khởi tạo name từ matrix
  const [feature, setFeature] = useState(matrix.feature);
  const [minApproval, setMinApproval] = useState(matrix.minApproval.toString());
  const [maxApproval, setMaxApproval] = useState(matrix.maxApproval.toString());
  const [approvalNumber, setApprovalNumber] = useState(matrix.approvalNumber.toString());
  const [groups, setGroups] = useState(Array.isArray(matrix.groups) ? matrix.groups.join(', ') : '');

  // Khai báo danh sách features
  const features = [
    { label: 'Default', value: 'Default' },
    { label: 'Transfer Online', value: 'Transfer Online' },
  ];

  const handleUpdate = () => {
    const updatedMatrix = {
      name,
      feature,
      minApproval: parseFloat(minApproval),
      maxApproval: parseFloat(maxApproval),
      approvalNumber: parseInt(approvalNumber, 10),
      groups: groups.split(',').map((group) => group.trim()),
    };

    updateMatrix(index, updatedMatrix);
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this matrix?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteMatrix(index);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Approval Matrix</Text>
          </View>

          <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
              <Text style={{ color: '#FF9900', fontSize: 20, fontWeight: '700' }}>Approval Matrix Info</Text>
            </View>
            <View style={styles.line} />

            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
              <View style={{ marginVertical: 20 }}>
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

                <Text>Number of Approval</Text>
                <View style={styles.inputbox}>
                  <TextInput
                    style={styles.input}
                    placeholder="Input number"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={approvalNumber}
                    onChangeText={setApprovalNumber}
                  />
                </View>

                <TouchableOpacity
                  style={[styles.button]}
                  onPress={handleUpdate}
                 
                >
                  <Text style={[styles.buttonText]}>
                   UPDATE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[ styles.button]}
                  onPress={handleDelete}
                >
                  <Text style={[styles.buttonText]}>
                    DELETE
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MatrixDetailScreen;

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
  line: {
    height: 1,
    backgroundColor: '#C7BFBFFF',
    marginHorizontal: 20,
  },
  inputbox: {
    height: 70,
    marginVertical: 10,
    width: '90%',
    borderColor: '#C7BFBFFF',
    borderRadius: 25,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  
  button: {
    height: 70,
    marginVertical: 10,
    width: 380,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '800',
    color: '#FF9900',
  },
});
