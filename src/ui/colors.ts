import { useColorScheme } from 'react-native';

const ColorPalette = {
  dark: {
    text: {
      primary: '#FFFFFF',
      secondary: '#F3F4F6',
    },
    background: '#1F2937',
    icon: '#F9FAFB',
    border: '#374151',
    shadow: '#6B7280',
  },
  light: {
    text: {
      primary: '#111827',
      secondary: '#1F2937',
    },
    background: '#FFFFFF',
    icon: '#111827',
    border: '#D1D5DB',
    shadow: '#F9FAFB',
  },
};

export const usePalette = () => {
  const theme = useColorScheme();
  const colors = theme ? ColorPalette[theme] : ColorPalette.light;

  return {
    colors,
    theme,
  };
};
