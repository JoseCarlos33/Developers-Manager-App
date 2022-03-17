import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { theme } from '../../utils/theme';
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.backgroundPrimary};
`;

export const ListPagination = styled(FlatList)`
 
`;