import React, { useState, useRef, useCallback } from 'react';
import { Dimensions, Animated, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import AnimatedTopBar from '../../components/AnimatedTopBar';
import Icon from 'react-native-vector-icons/dist/Feather';
import { theme } from '../../utils/theme';
import Card from '../../components/Cards';

import {
  Container,
  AddButton,
  PageContent
} from './styles';
import DeveloperList from '../DeveloperList';


interface ContentProps {
  width: number;
  x: number;
}

const { width, height } = Dimensions.get('window');

const SPA: React.FC = () => {
  const [developerContentInfo, setDeveloperContentInfo] = useState<ContentProps>({
    width: 187,
    x: 0,
  } as ContentProps);
  const [levelContentInfo, setlevelContentInfo] = useState<ContentProps>({
    width: 0,
    x: 0,
  } as ContentProps);
  const [isDeveloperOption, setIsDeveloperOption] = useState(true)
  const [positionPagination, setPositionPagination] = useState(0);
  const [page, setPage] = useState(1);

  const ref = useRef(null);
  const scrollTranslateX = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

   const Pages = [
    {
      key: '1',
    },
    {
      key: '2',
    }
  ]

  const changePage = useCallback(
    pageIndex => {
      ref?.current?.scrollToOffset({
        offset: pageIndex * width,
      });
    },
    [ref]
  );

  function getCurrentPage(scrollXOfPage: number) {
    const pageWidth = scrollXOfPage / width;
    setPositionPagination(pageWidth)
    const currentPage = pageWidth + 1.000001;
    const pageFormatted = Math.round(currentPage);
    setPage(pageFormatted);
  }

  return (
    <>
      <Header />
      <Container>
        <AnimatedTopBar
          developerState={developerContentInfo}
          levelState={levelContentInfo}
          isDeveloperOption={isDeveloperOption}
          setDeveloperState={setDeveloperContentInfo}
          setIsDeveloperOption={setIsDeveloperOption}
          setLevelState={setlevelContentInfo}
          changePagination={changePage}
          currentPage={page}
          setPage={setPage}
        />

        <Animated.FlatList
          ref={ref}
          data={Pages}
          keyExtractor={(item) => item.key}
          renderItem={ ({item, index}) => 
            <PageContent>
              {
                index == 0 
                ? <DeveloperList/>
                : <></>
              }
            </PageContent>
          }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            let contentOffset = e.nativeEvent.contentOffset;
            const pageWidth = contentOffset.x / width;
            setPositionPagination(pageWidth)
            const currentPage = pageWidth + 1.000001;
            const pageFormatted = Math.round(currentPage);
            
    
            Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: true,
            });
            if(pageFormatted == 1 || pageFormatted == 2){
              getCurrentPage(contentOffset.x);
              scrollX.setValue(contentOffset.x)
            }
            
          }}
          style={{marginTop: 7}}
        />
        <AddButton>
          <Icon name="plus" size={30} color={theme.color.white}/>
        </AddButton>

      </Container>
    </>

  );
}

export default SPA;