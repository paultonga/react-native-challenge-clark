import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { usePalette } from '../../ui/colors';

interface ContainerProps extends ViewProps {
  customStyle?: ViewStyle;
}

const Container: React.FC<ContainerProps> = props => {
  const { colors } = usePalette();

  return (
    <View
      style={[
        { backgroundColor: colors.background },
        styles.container,
        props.customStyle,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Container;
