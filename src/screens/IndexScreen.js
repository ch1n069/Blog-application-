import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
    </View>
  );
};

export default IndexScreen;
