import { Pressable, StyleSheet, Text, View } from "react-native";
import { Exercicio } from "../types";
import colors from "../styles/colors";
import { router } from "expo-router";

interface Props {
  exercicio: Exercicio;
}

export default function ExerciseItem({ exercicio }: Props) {
  return (
    <Pressable style={styles.item} onPress={() => router.push(`/${exercicio.id}`)}>
      <Text style={styles.title}>{exercicio.nome}</Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.label}>⏱ {exercicio.duracao} min</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.label}>🔥 {exercicio.nivel}</Text>
      </View>

      <Text style={styles.date}>
        📅 {new Date(exercicio.data).toLocaleDateString()} às {new Date(exercicio.data).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.light,
    // Optional: shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: colors.secondary,
  },
  separator: {
    marginHorizontal: 6,
    color: colors.secondary,
  },
  date: {
    fontSize: 10,
    color: colors.secondary,
  },
});
