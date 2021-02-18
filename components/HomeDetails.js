
import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, CheckBox } from "react-native";
import { DATA } from '../shared/list2';

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeDetails = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "royalblue" : "skyblue";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <View style={styles.container}>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}></Text>
      </View>
      <Text>{isSelected ? "👍" : "👎"}</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 50,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
  },


  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default HomeDetails;
