import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { usePalette } from '../../ui/colors';
import RemixIcon from 'react-native-remix-icon';

interface IconButtonProps {
  customStyle?: ViewStyle;
  onPress(): void;
  iconName: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  customStyle,
  onPress,
  iconName,
}) => {
  const { colors } = usePalette();

  return (
    <TouchableOpacity onPress={onPress} style={customStyle}>
      <RemixIcon name={iconName} color={colors.icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
