import React from 'react';
import { StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';
import { usePalette } from '../../ui/colors';
import { wp } from '../../ui/utils';

interface InputProps extends TextInputProps {
  customStyle?: TextStyle;
}

const Input: React.FC<InputProps> = ({ customStyle, ...props }) => {
  const { colors } = usePalette();

  return (
    <TextInput
      style={[
        { color: colors.text.secondary, borderColor: colors.border },
        styles.input,
        customStyle,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: wp(55),
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
});

export default Input;
