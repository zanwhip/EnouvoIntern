import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const MatrixDetailScreen = ({ route, navigation, updateMatrix, deleteMatrix }) => {
  const { matrix, index } = route.params;
  const [feature, setFeature] = useState(matrix.feature);
  const [minApproval, setMinApproval] = useState(matrix.minApproval.toString());
  const [maxApproval, setMaxApproval] = useState(matrix.maxApproval.toString());
  const [approvalNumber, setApprovalNumber] = useState(matrix.approvalNumber.toString());
  // Kiểm tra nếu matrix.groups là mảng hợp lệ, nếu không, khởi tạo thành một mảng rỗng
  const [groups, setGroups] = useState(Array.isArray(matrix.groups) ? matrix.groups.join(', ') : '');

  const handleUpdate = () => {
    const updatedMatrix = {
      feature,
      minApproval: parseFloat(minApproval),
      maxApproval: parseFloat(maxApproval),
      approvalNumber: parseInt(approvalNumber, 10),
      groups: groups.split(',').map((group) => group.trim()),
    };

    updateMatrix(index, updatedMatrix); // Gọi hàm cập nhật
    navigation.goBack(); // Quay về HomeScreen
  };

  const handleDelete = () => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this matrix?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteMatrix(index); // Gọi hàm xóa
          navigation.goBack(); // Quay về HomeScreen
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Feature:</Text>
      <TextInput style={styles.input} value={feature} onChangeText={setFeature} />

      <Text style={styles.label}>Min Approval:</Text>
      <TextInput
        style={styles.input}
        value={minApproval}
        keyboardType="numeric"
        onChangeText={setMinApproval}
      />

      <Text style={styles.label}>Max Approval:</Text>
      <TextInput
        style={styles.input}
        value={maxApproval}
        keyboardType="numeric"
        onChangeText={setMaxApproval}
      />

      <Text style={styles.label}>Number of Approval:</Text>
      <TextInput
        style={styles.input}
        value={approvalNumber}
        keyboardType="numeric"
        onChangeText={setApprovalNumber}
      />

      <Text style={styles.label}>Groups (comma separated):</Text>
      <TextInput style={styles.input} value={groups} onChangeText={setGroups} />

      <Button title="Update" onPress={handleUpdate} />
      <Button title="Delete" onPress={handleDelete} color="red" />
    </View>
  );
};

export default MatrixDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
