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
  const [pageAnimated, setPageAnimated] = useState(1)

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
          toValue: developerState.x + 20,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start(),
      Animated.timing(
        widthRefSwitchBottomBar,
        {
          toValue: developerState.width/145,
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
          toValue: levelState.x - 18,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start(),
      Animated.timing(
        widthRefSwitchBottomBar,
        {
          toValue: levelState.width/135,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }
      ).start()
    }

    setPageAnimated(currentPage)
  }, [currentPage])


  return (
    <TopBarContent>
        <View 
          onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            const formattedData = {
              width: width,
              x: x
            }
            setDeveloperState(formattedData)
          }}
          style={{
            width: '58%'
          }}  
        >
          <ButtonTopBar onPress={() => {
            setIsDeveloperOption(true)
            changePagination(0)
            setPage(1)
            setPageAnimated(1)
          }}>
            <TitleButtonTopBar
              style={{ color: pageAnimated == 1 ? theme.color.white : theme.color.gray_medium }}
            >
              Desenvolvedores
            </TitleButtonTopBar>
          </ButtonTopBar>
        </View>

        <View 
          onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            const formattedData = {
              width: width,
              x: x
            }
            setLevelState(formattedData)
          }}
          style={{
            width: '35%'
          }}
        >
          <ButtonTopBar onPress={() => {
            setIsDeveloperOption(false)
            changePagination(2)
            setPage(2)
            setPageAnimated(2)
          }}>
            <TitleButtonTopBar
              style={{ color: pageAnimated == 2 ? theme.color.white : theme.color.gray_medium}}
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