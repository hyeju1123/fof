import { Image, StyleSheet, View, Text } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#111" : "#fff" },
      ]}
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <ThemedView style={{ flex: 1 }}>
        <View style={styles.box}>
          <Text style={{ fontFamily: "FugazOne", color: "#ffffff" }}>
            05 : 34
          </Text>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    padding: 10,
    backgroundColor: "blue",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
