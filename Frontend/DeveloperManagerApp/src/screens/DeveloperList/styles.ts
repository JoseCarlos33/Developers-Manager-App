import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { theme } from '../../utils/theme';

export const FlatListDev = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  width: 100%;
  background-color: ${theme.color.backgroundPrimary};
`;

export const FooterSpace = styled.View`
  height: 280px;
  width: 100%;
`;