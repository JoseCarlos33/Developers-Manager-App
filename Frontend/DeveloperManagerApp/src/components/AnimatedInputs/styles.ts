import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TextInput, Animated } from 'react-native';


export const Container = styled.View`
  flex: 1;
  height: 100%;
  margin-bottom: 50px;
`;

export const InputContent = styled(Animated.View)`
  align-items: flex-start;
  width: ${wp('75%')}px;
  margin-top: 21px;
`;

export const ContentLabel = styled.View`
  background-color: ${theme.color.white};
  position: absolute;
  top: -9px;
  left: 16px;
  padding: 2px;

`;

export const Input = styled(TextInput)`
  height: 54px;
  border-width: 1px;
  border-radius: 7px;
  /* border-color: ${theme.color.gray_medium}; */
  width: ${wp('74%')}px;
  padding-left: 17px;
  font-size: ${RFValue(15)}px;
  color: ${theme.color.blue};
  text-transform: capitalize;
`;

export const InputLabel = styled.Text`
  /* font-family: ${theme.font.regular}; */
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${theme.color.gray_medium};
`;
