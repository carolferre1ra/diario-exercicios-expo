import { render } from '@testing-library/react-native';
import ExercicioDetalhes from '../components/ExercicioDetalhes';

describe('<ExercicioDetalhes />', () => {
  it('exibe corretamente as informações do exercício', () => {
    const exercicioFake = {
      id: 'abc123',
      nome: 'Corrida',
      duracao: 30,
      nivel: 'Moderado' as const,
      observacoes: 'Exercício ao ar livre',
      data: new Date('2023-10-01T14:30:00').toISOString(),
    };

    const { getByText } = render(<ExercicioDetalhes exercicio={exercicioFake} />);

    expect(getByText('Corrida')).toBeTruthy();
    expect(getByText('⏱ Duração: 30 minutos')).toBeTruthy();
    expect(getByText('🔥 Nível: Moderado')).toBeTruthy();
    expect(getByText(/📅 Data:/)).toBeTruthy();
    expect(getByText('📝 Observações: Exercício ao ar livre')).toBeTruthy();
  });
});
