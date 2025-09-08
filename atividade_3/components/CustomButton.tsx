import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  text: string;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function CustomButton({ text, color, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.content}>
        <Ionicons name={icon} size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});
