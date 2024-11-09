import { Text, View, StyleSheet } from "react-native";
import ImagesList from '@/components/ImagesList';
import { useState } from "react";
import { ImageSource } from "expo-image";

export default function AboutScreen() {
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(
        undefined
      );
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const onModalClose = () => {
    setIsModalVisible(false);
    };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PFPs</Text>
      <ImagesList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
