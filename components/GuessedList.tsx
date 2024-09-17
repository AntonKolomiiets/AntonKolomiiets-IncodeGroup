import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import images from "@/assets/images/image";
import GuessedListItem from "./GuessedListItem";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GuessedList = ({ filteredData }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.listBg} style={styles.imageBG}>
        <FlatList
          style={styles.flatlist}
          data={filteredData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <GuessedListItem item={item} />}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  imageBG: {
    paddingVertical: 52,
    height: screenHeight / 1.65,
    width: screenWidth / 1.1,
    top: screenWidth / -8,
  },
});

export default GuessedList;
