import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header: React.FC<{ title: string;}> = ({ title,}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "white",
    alignItems: "center",
 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;

