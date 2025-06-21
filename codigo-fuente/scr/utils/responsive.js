import { useWindowDimensions } from 'react-native';

// Hook personalizado para obtener el ancho de pantalla
export function useResponsiveWidth() {
  const { width } = useWindowDimensions();
  return width > 500 ? 400 : '90%';
}