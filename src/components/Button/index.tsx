import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { usePalette } from '../../ui/colors';
import { hp, wp } from '../../ui/utils';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  customStyles?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, customStyles }) => {
  const { colors } = usePalette();
  return (
    <TouchableOpacity
      style={[{ borderColor: colors.text.primary }, styles.btn, customStyles]}
      onPress={onPress}>
      <Text style={[{ color: colors.text.primary }, styles.label]}>
        {label}{' '}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: wp(80),
    height: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
  },
  label: {
    fontSize: 20,
  },
});

export default Button;
