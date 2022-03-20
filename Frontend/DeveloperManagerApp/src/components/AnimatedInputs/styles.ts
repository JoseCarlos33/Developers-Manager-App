import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TextInput, Animated, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


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

export const InputContentDropDown = styled(Animated.View)`
  align-items: flex-start;
  width: ${wp('74%')}px;
  margin-top: 21px;
  height: 54px;
  border-width: 1px;
  border-radius: 7px;
  border-color: ${theme.color.dark_blue};
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

export const DropDownButton = styled(TouchableOpacity)`
  height: 55px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px;
`;

export const TitleLevel = styled.Text`
  font-size: ${RFValue(15)}px;
`;

export const Separator = styled(TouchableOpacity)`
  height: 56px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  align-items: center;
  width: 97%;
  align-self: center;
  justify-content: center;
`;

export const InitialSeparator = styled(TouchableOpacity)`
  height: 1px;
  border-width: 0.8px;
  border-color: #d3d3d3;
  width: 97%;
  align-self: center;
`;

export const LevelLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const SaveButton = styled(RectButton).attrs({
  zIndex: 1
})`
  height: 50px;
  width: 132%;
  background-color: transparent;
  position: absolute;
  bottom: -67px;
  left: -20px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 40%;
`;

export const SaveButtonText = styled.Text`
  font-size: ${RFValue(20)}px;
  /* font-family: ${theme.font.regular}; */
  width: 100%;
  color: ${theme.color.white};
  margin-bottom: 5px;
`;
