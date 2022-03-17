import React, { useState, useRef, useCallback } from 'react';
import { Dimensions, Animated, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import AnimatedTopBar from '../../components/AnimatedTopBar';

import {
  Container,
  ListPagination
} from './styles';
interface ContentProps {
  width: number;
  x: number;
}

const { width, height } = Dimensions.get('window');

const SPA: React.FC = () => {
  const [developerContentInfo, setDeveloperContentInfo] = useState<ContentProps>({
    width: 130,
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
      color: '#14dc8f'
    },
    {
      key: '2',
      color: '#540d0d'
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
    console.log(page)
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
          renderItem={ ({item}) => 
            <View style={{
                backgroundColor: item.color,
                width: width,
                height: '100%',
              }}
            />
          }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            let contentOffset = e.nativeEvent.contentOffset;
            getCurrentPage(contentOffset.x);
            Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: true,
            });
            scrollX.setValue(contentOffset.x)
          }}
          style={{marginTop: 7}}
        />


      </Container>
    </>

  );
}

export default SPA;