import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputControl from '../components/InputControl';

describe('<InputControl />', () => {
  it('renderiza placeholder e valor corretamente', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(
      <InputControl
        placeholder="Digite algo"
        value="valor inicial"
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByPlaceholderText('Digite algo');
    expect(input.props.value).toBe('valor inicial');
  });

  it('chama onChangeText ao digitar', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(
      <InputControl
        placeholder="Digite algo"
        value=""
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByPlaceholderText('Digite algo');
    fireEvent.changeText(input, 'novo texto');
    expect(onChangeTextMock).toHaveBeenCalledWith('novo texto');
  });
});
