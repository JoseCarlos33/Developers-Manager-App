import React,{useState, useRef} from 'react';
import { useEffect } from 'react';
import { View, Animated, Easing} from 'react-native';
import { theme } from '../../utils/theme';

import { 
  TopBarContent,
  ButtonTopBar,
  TitleButtonTopBar,
  TopBarSwitchBar
} from './styles';

interface ContentProps {
  width: number;
  x: number;
}

interface TopBarProps {
  developerState: ContentProps;
  setDeveloperState(arg: ContentProps): void;
  levelState: ContentProps;
  setLevelState(arg: ContentProps): void;
  isDeveloperOption: boolean;
  setIsDeveloperOption(arg: boolean): void;
  changePage(arg: number): void;
}


function AnimatedTopBar({
  developerState,
  isDeveloperOption,
  levelState,
  setDeveloperState,
  setLevelState,
  setIsDeveloperOption,
  changePage
}: TopBarProps){
  
  const moveRefSwitchBottomBar = useRef(new Animated.Value(0)).current
  const widthRefSwitchBottomBar = useRef(new Animated.Value(0)).current

  const translateXSwitchBottomBar = {
    transform: [
      {
        translateX: moveRefSwitchBottomBar
      },
      {
        scaleX: widthRefSwitchBottomBar
      }
    ]
  };

  useEffect(() => {
    if(isDeveloperOption){
      Animated.timing(
        moveRefSwitchBottomBar,
        {
          toValue: developerState.x + 18,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start(),
      Animated.timing(
        widthRefSwitchBottomBar,
        {
          toValue: developerState.width/90,
          duration: 250,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start()
    }else{
      Animated.timing(
        moveRefSwitchBottomBar,
        {
          toValue: levelState.x - 27,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start(),
      Animated.timing(
        widthRefSwitchBottomBar,
        {
          toValue: levelState.width/75,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start()
    }
  }, [isDeveloperOption])

  return (
    <TopBarContent>
        <View onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          const formattedData = {
            width: width,
            x: x
          }
          setDeveloperState(formattedData)
        }} >
          <ButtonTopBar onPress={() => {
            setIsDeveloperOption(true)
            changePage(0)
          }}>
            <TitleButtonTopBar
              style={{ color: isDeveloperOption ? theme.color.white : theme.color.gray_medium }}
            >
              Desenvolvedores
            </TitleButtonTopBar>
          </ButtonTopBar>
        </View>

        <View onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          const formattedData = {
            width: width,
            x: x
          }
          setLevelState(formattedData)
        }}>
          <ButtonTopBar onPress={() => {
            setIsDeveloperOption(false)
            changePage(1)
          }}>
            <TitleButtonTopBar
              style={{ color: isDeveloperOption ? theme.color.gray_medium : theme.color.white }}
            >
              Níveis
            </TitleButtonTopBar>
          </ButtonTopBar>
        </View>
        <TopBarSwitchBar style={translateXSwitchBottomBar} />
      </TopBarContent>
  );
}

export default AnimatedTopBar;