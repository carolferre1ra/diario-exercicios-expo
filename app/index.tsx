import { FlatList, StyleSheet, Text, View } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import ExerciseItem from "../components/ExerciseItem";
import colors from "../styles/colors";
import { useExercicios } from "../context/ExercicioContext";
import AddButton from "../components/AddButton";

export default function Home() {
  const { exercicios, carregarExercicios } = useExercicios();

  useFocusEffect(
    useCallback(() => {
      carregarExercicios();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Exercícios</Text>

      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExerciseItem exercicio={item} />}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum exercício cadastrado ainda.</Text>}
      />

    <AddButton />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 20, fontWeight: "500", marginBottom: 16, color: colors.text },
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
  empty: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 16,
    color: colors.secondary,
  },

});