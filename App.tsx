import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const onButtonPress = () => Alert.alert("Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={{
            backgroundColor: "black"
        }}
      >
        <Text style={styles.textHeader}>Hello</Text>
        <Text numberOfLines={3}>
          Lorem ipsum dolor sit a
          <Text
            style={styles.textSubHeader}
            onPress={() => {
              Alert.alert("Press");
            }}
          >
            Press Here
          </Text>
          met consectetur adipisicing elit. Dolor, fugiat iusto. Neque odio
          omnis ea porro sed repellat et deserunt iure ducimus nulla, facilis
          maxime illum fugiat numquam magni blanditiis.
        </Text>
        <StatusBar style="auto" />

        <Pressable onPress={onButtonPress}>
          <Image
            style={styles.image1}
            source={require("./assets/adaptive-icon.png")}
          />
        </Pressable>

        <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>
         <TouchableOpacity>
          <Image style={styles.image1} source={require("./assets/tiger.jpg")} />
        </TouchableOpacity>

        <Button title="Press On Me" onPress={onButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android"? "black": "aqua",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 55,
    fontWeight: "bold",
  },
  textSubHeader: {
    color: Platform.OS==="android"? "yellow": "red",
  },
  image1: {
    height: 200,
    width: 200,
  },
});
