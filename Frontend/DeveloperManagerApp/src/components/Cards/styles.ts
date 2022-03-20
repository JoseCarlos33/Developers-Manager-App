import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity, View, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const CardContent = styled(Animated.View).attrs({
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
  margin-top: 21px;
  align-self: center;
  flex-direction: row;
`;

export const ButtonContainer = styled(TouchableOpacity).attrs({
  overflow: 'hidden',
})`
  align-self: center;
`;

export const LateralColor = styled.View`
  height: 100%;
  width: 3%;
  background-color: ${theme.color.backgroundSecundary};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  /* font-family: ${theme.font.regular}; */
  width: 100%;
  color: ${theme.color.orange};
  margin-bottom: 5px;
`;

export const EditText = styled.Text`
  font-size: ${RFValue(20)}px;
  /* font-family: ${theme.font.regular}; */
  width: 100%;
  color: ${theme.color.orange};
  margin-bottom: 5px;
`;

export const SaveButtonText = styled.Text`
  font-size: ${RFValue(20)}px;
  /* font-family: ${theme.font.regular}; */
  width: 100%;
  color: ${theme.color.white};
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.font.medium};
  color: ${theme.color.orange};
  letter-spacing: 0.25px;
  text-transform: capitalize;
`;

export const InfoBox = styled(Animated.View)`
  padding: 16px;
  width: 83%;
`;

export const IconContent = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: 12px 0px;
  /* background-color: antiquewhite; */
  margin-left: -10px;
`;  

export const IconContentLevel = styled.View`
  height: 90%;
  padding: 17px 0px;
  justify-content: space-between;
  /* background-color: antiquewhite; */
  margin-left: -10px;
`;  


export const IconButton = styled.TouchableOpacity`
  height: 45px;
  width: 45px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const InfoContentText = styled.View`
  flex-direction: row;
  padding: 3.5px 5px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  /* font-family: ${theme.font.regular}; */
  text-transform: capitalize;
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(14)}px;
  /* font-family: ${theme.font.regular}; */
  text-transform: capitalize;
  align-self: center;
`;

export const AnimatedButtonView = styled(Animated.View).attrs({
  zIndex: 0
})`
  height: 50px;
  width: 21px;
  background-color: ${theme.color.backgroundSecundary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  left: -5px;
`;

export const SaveButton = styled(RectButton)`
  height: 50px;
  width: 132%;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 40%;
`;