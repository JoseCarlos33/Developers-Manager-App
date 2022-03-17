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
  changePagination(arg: number): void;
  setPage(arg: number): void;
  currentPage: number;
}


function AnimatedTopBar({
  developerState,
  isDeveloperOption,
  levelState,
  setDeveloperState,
  setLevelState,
  setIsDeveloperOption,
  changePagination,
  currentPage,
  setPage
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
    if(currentPage == 1){
      console.log('pagina atual dev',currentPage)
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
      console.log('pagina atual nivel',currentPage)
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
  }, [currentPage])


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
            changePagination(0)
            setPage(1)
          }}>
            <TitleButtonTopBar
              style={{ color: currentPage == 1 ? theme.color.white : theme.color.gray_medium }}
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
            changePagination(2)
            setPage(2)
          }}>
            <TitleButtonTopBar
              style={{ color: currentPage == 2 ? theme.color.white : theme.color.gray_medium}}
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