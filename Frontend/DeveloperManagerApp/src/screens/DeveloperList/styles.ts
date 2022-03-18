import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { theme } from '../../utils/theme';

export const FlatListDev = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  width: 100%;
  background-color: ${theme.color.backgroundPrimary};
`;

export const FooterSpace = styled.View`
  height: 50px;
  width: 100%;
`;