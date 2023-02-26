import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button onPress={addBlogPost} title="Add Post" />

      <FlatList
        data={data}
        KeyExtractor={(blogPost) => {
          blogPost.title;
        }}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
