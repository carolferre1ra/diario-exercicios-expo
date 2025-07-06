import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ExerciseItem from '../components/ExerciseItem';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

describe('<ExerciseItem />', () => {
  const mockExercise = {
    id: '1',
    nome: 'Corrida leve',
    duracao: 30,
    nivel: 'Fácil',
    data: '2023-10-01T14:30:00Z',
  } as const;
  

  it('renderiza nome, duração, nível e data formatada', () => {
    const { getByText } = render(<ExerciseItem exercicio={mockExercise} />);

    expect(getByText('Corrida leve')).toBeTruthy();
    expect(getByText('⏱ 30 min')).toBeTruthy();
    expect(getByText('🔥 Fácil')).toBeTruthy();
    expect(getByText(/📅/)).toBeTruthy(); 
  });

  it('navega para a tela correta ao tocar no item', () => {
    const { getByText } = render(<ExerciseItem exercicio={mockExercise} />);
    
    fireEvent.press(getByText('Corrida leve'));

    expect(router.push).toHaveBeenCalledWith('/1');
  });
});
