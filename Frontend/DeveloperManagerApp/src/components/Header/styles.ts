import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('19%')}px;
  width: ${wp('100%')}px;
  background-color: ${theme.color.backgroundSecundary};
  justify-content: center;
  padding-left: 30px;
`;

export const Title = styled.Text`
  /* font-family: ${theme.font.medium}; */
  font-size: ${RFValue(24)}px;
  padding-bottom: 4px;
  color: ${theme.color.white}
`;
