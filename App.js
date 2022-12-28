import React from "react";
import { View, FlatList, Text, SafeAreaView, StyleSheet, ScrollView, Image, Dimensions } from "react-native";

import news_data from './news_data.json';
import NewsCard from "./src/Components/NewsCard/NewsCard";
import news_banner_data from "./news_banner_data.json";

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />
  return (
    <SafeAreaView style={styles.container}>
    
      <FlatList
        ListHeaderComponent={() =>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => (
                <Image style={styles.bannerImage}
                  source={{ uri: bannerNews.imageUrl }}
                />))
            }
          </ScrollView>
        }
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />

    </SafeAreaView >

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',

  },
  bannerImage: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 3
  },
  
  
})
export default App;