import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
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
import { scale } from "react-native-size-matters";

export default function App() {
  const onButtonPress = () => Alert.alert("Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={{
            backgroundColor: "black"
        }}
      >
        <Text style={styles.textHeader}>Hello</Text>
  
        <StatusBar style="auto" />

        <Pressable onPress={onButtonPress}>
          <Image
            style={styles.image1}
            source={require("./assets/adaptive-icon.png")}
          />
        </Pressable>

        <View style={styles.view1}>

        </View>
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
  view1:{
    width:100,
    height:200,
    backgroundColor:"red",
  }
});
