import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateScreen = ({ navigation, setMatrixList, matrixList }) => {
  const [name, setName] = useState('');
  const [feature, setFeature] = useState(null);
  const [minApproval, setMinApproval] = useState('');
  const [maxApproval, setMaxApproval] = useState('');
  const [approvalNumber, setApprovalNumber] = useState('');

  // Khai báo danh sách features
  const features = [
    { label: 'Default', value: 'Default' },
    { label: 'Transfer Online', value: 'Transfer Online' },
  ];

  // Kiểm tra trạng thái các input
  const isAnyFieldFilled = name || feature || minApproval || maxApproval || approvalNumber;
  const isAllFieldsFilled =
    name && feature && minApproval && maxApproval && approvalNumber;

  const handleAddToList = () => {
    const min = parseInt(minApproval, 10);
    const max = parseInt(maxApproval, 10);
    const approvalNum = parseInt(approvalNumber, 10);

    if (isNaN(min) || isNaN(max) || isNaN(approvalNum)) {
      Alert.alert('Error', 'Approval values must be numeric.');
      return;
    }

    if (min > max) {
      Alert.alert('Error', 'Minimum approval cannot exceed maximum approval.');
      return;
    }

    const newMatrix = {
      name,
      feature,
      minApproval: min,
      maxApproval: max,
      approvalNumber: approvalNum,
    };

    setMatrixList([...matrixList, newMatrix]);
    navigation.goBack();
  };

  const handleReset = () => {
    setName('');
    setFeature(null);
    setMinApproval('');
    setMaxApproval('');
    setApprovalNumber('');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  style={[
                    styles.button,
                    isAllFieldsFilled && styles.activeButton,
                  ]}
                  onPress={handleAddToList}
                  disabled={!isAllFieldsFilled}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isAllFieldsFilled && styles.activeButtonText,
                    ]}
                  >
                    ADD TO LIST
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.button,
                    isAnyFieldFilled && styles.activeButton,
                  ]}
                  onPress={handleReset}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isAnyFieldFilled && styles.activeButtonText,
                    ]}
                  >
                    RESET
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
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#C7BFBFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '800',
    color: '#C7BFBFFF',
  },
  activeButton: {
    backgroundColor: '#FFF',
    borderColor: '#FF9900',
  },
  activeButtonText: {
    color: '#FF9900',
  },
});
