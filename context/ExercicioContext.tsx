import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Exercicio } from "../types";

type ExercicioContextType = {
  exercicios: Exercicio[];
  adicionar: (exercicio: Exercicio) => void;
  carregarExercicios: () => Promise<void>;
};

const ExercicioContext = createContext<ExercicioContextType | undefined>(undefined);

export function ExercicioProvider({ children }: { children: React.ReactNode }) {
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  const carregarExercicios = async () => {
    try {
      const dados = await AsyncStorage.getItem("exercicios");
      if (dados) {
        const lista = JSON.parse(dados);
        setExercicios(lista);
      } else {
        setExercicios([]);
      }
    } catch (erro) {
      console.error("Erro ao carregar exercícios:", erro);
    }
  };

  const adicionar = async (exercicio: Exercicio) => {
    const novaLista = [...exercicios, exercicio];
    setExercicios(novaLista);
    try {
      await AsyncStorage.setItem("exercicios", JSON.stringify(novaLista));
    } catch (erro) {
      console.error("Erro ao salvar exercício:", erro);
    }
  };

  return (
    <ExercicioContext.Provider value={{ exercicios, adicionar, carregarExercicios }}>
      {children}
    </ExercicioContext.Provider>
  );
}

export function useExercicios() {
  const context = useContext(ExercicioContext);
  if (!context) throw new Error("useExercicios deve ser usado dentro de ExercicioProvider");
  return context;
}
