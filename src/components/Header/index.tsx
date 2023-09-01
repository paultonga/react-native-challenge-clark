import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { wp } from '../../ui/utils';
import TextView from '../TextView';
import IconButton from '../IconButton';
import Container from '../Container';
import Input from '../Input';

interface HeaderProps {
  leftIcon?: string;
  rightIcon?: string;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  headerTitle: string;
  isSearchMode?: boolean;
  onSearcHInput?: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  headerTitle,
  leftIcon,
  rightIcon,
  onPressLeftIcon,
  onPressRightIcon,
  isSearchMode,
  onSearcHInput,
}) => {
  return (
    <Container style={styles.container}>
      <Container style={styles.leftIcon}>
        {leftIcon && onPressLeftIcon && (
          <IconButton onPress={onPressLeftIcon} iconName={leftIcon} />
        )}
      </Container>

      <Container style={styles.headerTitle}>
        {isSearchMode ? (
          <Input
            onChangeText={onSearcHInput}
            placeholder="Enter your search query"
          />
        ) : (
          <TextView>{headerTitle}</TextView>
        )}
      </Container>

      <Container style={styles.rightIcon}>
        {rightIcon && onPressRightIcon && (
          <IconButton onPress={onPressRightIcon} iconName={rightIcon} />
        )}
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    paddingHorizontal: wp(5),
  },
  leftIcon: {
    width: wp(8),
    alignItems: 'center',
  },
  rightIcon: {
    alignItems: 'center',
    width: wp(8),
  },
  headerTitle: {
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default Header;
