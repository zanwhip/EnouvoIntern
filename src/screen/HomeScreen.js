import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({ navigation, matrixList, setMatrixList }) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const filteredMatrixList = matrixList.filter((item) =>
    selectedFeatures.includes(item.feature)
  );

  const handleSelectFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const isFeatureSelected = (feature) => selectedFeatures.includes(feature);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Approval Matrix</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.createbutton}>
          <AntDesign name="pluscircle" size={24} color="#fff" />
          <Text
            style={{ color: '#FFF', fontSize: 14, fontWeight: '500' }}
            onPress={() => navigation.navigate('Create')}
          >
            Tambah New Matrix
          </Text>
        </View>

        <View style={styles.line} />

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.inputbox, isFeatureSelected('Default') && styles.selectedBox]}
            onPress={() => handleSelectFeature('Default')}
          >
            <Text style={[styles.optionText, isFeatureSelected('Default') && styles.selectedText]}>
              Default
            </Text>
            <AntDesign
              name={isFeatureSelected('Default') ? 'up' : 'down'}
              size={20}
              color={isFeatureSelected('Default') ? 'yellow' : '#8F8F8FFF'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.inputbox, isFeatureSelected('Transfer Online') && styles.selectedBox]}
            onPress={() => handleSelectFeature('Transfer Online')}
          >
            <Text style={[styles.optionText, isFeatureSelected('Transfer Online') && styles.selectedText]}>
              Transfer Online
            </Text>
            <AntDesign
              name={isFeatureSelected('Transfer Online') ? 'up' : 'down'}
              size={20}
              color={isFeatureSelected('Transfer Online') ? 'yellow' : '#8F8F8FFF'}
            />
          </TouchableOpacity>
        </View>

        {selectedFeatures.length > 0 && (
          <FlatList
            data={filteredMatrixList}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingVertical: 10 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => navigation.navigate('MatrixDetail', { matrix: item, index })}
              >
                <View style={styles.row}>
                  <Text style={styles.label}>Range Limit of Approval</Text>
                  <View>
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

                <View style={styles.row}>
                  <Text style={styles.label}>Number of Approval</Text>
                  <Text style={styles.number}>{item.approvalNumber || 0}</Text>
                </View>

                <View style={styles.line} />

                <View style={styles.row}>
                  <Text style={styles.label}>Approver {item.approvalNumber}</Text>
                  <Text style={styles.group}>{Array.isArray(item.groups) ? item.groups.join(', ') : 'N/A'}</Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={{ marginTop: 20, color: '#999', textAlign: 'center' }}>
                No matrix available. Create one!
              </Text>
            }
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  createbutton: {
    height: 50,
    backgroundColor: '#3333CC',
    width: 250,
    marginLeft: 140,
    marginVertical: 20,
    borderRadius: 18,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    height: 1,
    backgroundColor: '#e3e3e3',
    marginHorizontal: 20,
  },
  inputbox: {
    marginVertical: 10,
    width: '90%',
    borderColor: '#e3e3e3',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedBox: {
    borderColor: 'yellow',
  },
  optionText: {
    color: '#000',
  },
  selectedText: {
    color: 'yellow',
  },
  itemBox: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 10,
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    flex: 1,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
});
