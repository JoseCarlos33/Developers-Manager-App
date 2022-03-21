import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { theme } from '../../utils/theme';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.backgroundPrimary};
`;

export const IconButton = styled.TouchableOpacity`
  height: 47px;
  width: 47px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 18px;
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

export const PageContent = styled.View`
  align-items: center;
  width: ${width};
  height: 100%;
`; 

export const ContainerModal = styled.View`
  flex: 1;
  background: #00000080;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background: #ffffff;
  align-items: center;
  width: ${wp('87%')}px;
  border-radius: 10px;
  padding-top: 21px;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  /* font-family: ${theme.font.regular}; */
  width: 100%;
  color: ${theme.color.orange};
  margin-bottom: 5px;
`;

export const Footer = styled.View`
  background-color: ${theme.color.backgroundSecundary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;