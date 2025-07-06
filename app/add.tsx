import { useState, useRef } from "react";
import InputControl from '../components/InputControl';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import colors from "../styles/colors";
import { Exercicio, NivelTreino } from "../types";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import ActionSheet from "react-native-actions-sheet";
import { ActionSheetRef } from "react-native-actions-sheet";
import { useRouter } from "expo-router";
import { useExercicios } from "../context/ExercicioContext"; 

export default function AddExercicio() {
  const [nome, setNome] = useState("");
  const [duracao, setDuracao] = useState("");
  const [nivel, setNivel] = useState<NivelTreino | "">("");
  const [observacoes, setObservacoes] = useState("");

  const router = useRouter();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const niveis: NivelTreino[] = ["Fácil", "Moderado", "Difícil"];

  const { adicionar } = useExercicios(); 

  async function salvarExercicio() {
    if (!nome || !duracao || !nivel) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    const novoExercicio: Exercicio = {
      id: uuidv4(),
      nome,
      duracao: Number(duracao),
      nivel,
      observacoes,
      data: new Date().toISOString(),
    };

    try {
      const armazenados = await AsyncStorage.getItem("@exercicios");
      const exercicios: Exercicio[] = armazenados ? JSON.parse(armazenados) : [];

      const atualizados = [...exercicios, novoExercicio];

      await AsyncStorage.setItem("@exercicios", JSON.stringify(atualizados));

      adicionar(novoExercicio);

      Alert.alert("Sucesso", "Exercício cadastrado!");

      setNome("");
      setDuracao("");
      setNivel("");
      setObservacoes("");

      router.replace("/");

    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o exercício.");
      console.error("Erro ao salvar exercício:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Exercício</Text>

      <InputControl
          placeholder="Nome do exercício"
          value={nome}
          onChangeText={setNome}
      />

      <InputControl
        placeholder="Duração (min)"
        keyboardType="numeric"
        value={duracao}
        onChangeText={setDuracao}
      />


      <TouchableOpacity onPress={() => actionSheetRef.current?.show()}>
        <Text style={styles.selector}>
          {nivel ? `Nível: ${nivel}` : "Selecionar nível"}
        </Text>
      </TouchableOpacity>

      <InputControl
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline
        style={{ height: 80 }}
      />


      <Button title="Salvar" onPress={salvarExercicio} color={colors.primary} />

      <ActionSheet ref={actionSheetRef}>
        <View style={{ padding: 20 }}>
          {niveis.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              onPress={() => {
                setNivel(opcao);
                actionSheetRef.current?.hide();
              }}
              style={styles.sheetOption}
            >
              <Text>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 20, fontWeight: "500", marginBottom: 16, color: colors.text },
  selector: {
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.light,
    color: colors.secondary,
  },
  sheetOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
