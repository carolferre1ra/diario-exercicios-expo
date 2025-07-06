import { View, Text, StyleSheet } from "react-native";
import { Exercicio } from "../types";
import colors from "../styles/colors";

interface Props {
  exercicio: Exercicio;
}

export default function ExercicioDetalhes({ exercicio }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{exercicio.nome}</Text>
      <Text style={styles.info}>⏱ Duração: {exercicio.duracao} minutos</Text>
      <Text style={styles.info}>🔥 Nível: {exercicio.nivel}</Text>
      <Text style={styles.info}>📅 Data: {new Date(exercicio.data).toLocaleString()}</Text>
      <Text style={styles.info}>📝 Observações: {exercicio.observacoes || "Nenhuma"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 12, color: colors.primary },
  info: { fontSize: 14, marginBottom: 8, color: colors.secondary },
});
