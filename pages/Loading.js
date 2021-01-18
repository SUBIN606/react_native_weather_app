import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨 정보 가져오는 중...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fff3e6",
  },
  text: {
    color: "#0d335d",
    fontSize: 25,
    fontWeight: "800",
  },
});
