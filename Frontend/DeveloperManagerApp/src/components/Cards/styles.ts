import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity, View } from 'react-native';

export const CardContent = styled(View).attrs({
  shadowColor: 'black',
  shadowOffset: { height: 1, width: 1 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 3,
})`
  width: ${wp('86%')}px;
  border-radius: 5px;
  background-color: ${theme.color.blue};
  background-color: ${theme.color.white};
  margin-top: 12px;
  padding: 16px;
`;

export const ButtonContainer = styled(TouchableOpacity).attrs({
  overflow: 'hidden',
})`
  align-self: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  /* font-family: ${theme.font.regular}; */
  width: 85%;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.font.regular};
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.font.medium};
  color: ${theme.color.orange};
  letter-spacing: 0.25px;
  text-transform: capitalize;
`;

export const InfoBox = styled.View``;