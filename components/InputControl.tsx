import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import colors from '../styles/colors';

interface InputControlProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputControl({
  placeholder,
  value,
  onChangeText,
  multiline = false,
  keyboardType = 'default',
  style,
  ...rest
}: InputControlProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType}
      style={[styles.input, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.light,
    color: colors.text,
  },
});
