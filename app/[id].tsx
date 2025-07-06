import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Exercicio } from "../types";
import colors from "../styles/colors";
import ExercicioDetalhes from "../components/ExercicioDetalhes";

export default function DetalhesExercicio() {
  const { id } = useLocalSearchParams();
  const [exercicio, setExercicio] = useState<Exercicio | null>(null);

  useEffect(() => {
    const carregarExercicio = async () => {
      const dados = await AsyncStorage.getItem("exercicios");
      if (dados) {
        const lista: Exercicio[] = JSON.parse(dados);
        const encontrado = lista.find((e) => e.id === id);
        setExercicio(encontrado || null);
      }
    };

    carregarExercicio();
  }, []);

  if (!exercicio) return <Text>Carregando...</Text>;
  return <ExercicioDetalhes exercicio={exercicio} />;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 12, color: colors.primary },
  info: { fontSize: 14, marginBottom: 8, color: colors.secondary },
});
