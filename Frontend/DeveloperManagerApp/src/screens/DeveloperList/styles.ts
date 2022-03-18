import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const FlatListDev = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  width: 100%;
`;
