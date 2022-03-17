import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { theme } from '../../utils/theme';
import { FlatList, RectButton } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.backgroundPrimary};
`;

export const AddButton = styled(RectButton)`
  height: 65px;
  width: 65px;
  border-radius: 32px;
  position: absolute;
  bottom: 50px;
  right: 30px;
  background-color: ${theme.color.backgroundSecundary};
  justify-content: center;
  align-items: center;
`;