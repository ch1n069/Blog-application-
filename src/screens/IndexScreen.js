import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button onPress={addBlogPost} title="Add Post" />

      <FlatList
        data={state}
        KeyExtractor={(blogPost) => {
          blogPost.title;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <FontAwesome name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
  },
});

export default IndexScreen;
