export type NivelTreino = 'Fácil' | 'Moderado' | 'Difícil';

export interface Exercicio {
  id: string;
  nome: string;
  duracao: number;
  data: string;
  observacoes?: string;
  nivel: "Fácil" | "Moderado" | "Difícil";
}

