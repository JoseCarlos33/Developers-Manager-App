import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Animated, TouchableOpacity} from 'react-native';

export const TopBarContent = styled.View`
margin-top: -${hp('4%')}px;
width: ${wp('60%')}px;
flex-direction: row;
align-items: center;
justify-content: space-between;
align-self: center;
`;

export const TopBarSwitchBar = styled(Animated.View)`
height: 2px;
width: 44%;
background-color: ${theme.color.white};
position: absolute;
bottom: 0px;
left: 0px;
`;

export const ButtonTopBar = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const TitleButtonTopBar = styled.Text`
  /* font-family: ${theme.font.medium}; */
  font-size: ${RFValue(16)}px;
  padding-bottom: 4px;
`;