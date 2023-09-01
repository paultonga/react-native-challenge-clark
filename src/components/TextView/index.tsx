import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { usePalette } from '../../ui/colors';

interface TextViewProps extends TextProps {
  customStyle?: TextStyle;
  mode?: 'primary' | 'secondary';
}

const TextView: React.FC<TextViewProps> = ({ customStyle, mode, ...props }) => {
  const { colors } = usePalette();

  const textColor =
    mode === 'primary' || undefined
      ? colors.text.primary
      : colors.text.secondary;

  return <Text style={[{ color: textColor }, customStyle]} {...props} />;
};

export default TextView;
