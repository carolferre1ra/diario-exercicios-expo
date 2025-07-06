import React from "react";
import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import colors from "../styles/colors";

export default function AddButton() {
  return (
    <Link href="/add" style={styles.botaoAdd}>
      ➕ Adicionar
    </Link>
  );
}

const styles = StyleSheet.create({
  botaoAdd: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: "center",
    color: colors.white,
    borderRadius: 8,
    fontWeight: "bold",
  },
});
