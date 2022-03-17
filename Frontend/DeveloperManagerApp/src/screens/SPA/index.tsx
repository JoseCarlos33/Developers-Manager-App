import React, { useState, useRef } from 'react';
import { Dimensions, Animated, View } from 'react-native';
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
  const [developerContentInfo, setDeveloperContentInfo] = useState<ContentProps>({} as ContentProps);
  const [levelContentInfo, setlevelContentInfo] = useState<ContentProps>({} as ContentProps);
  const [isDeveloperOption, setIsDeveloperOption] = useState(true)
  const [positionPagination, setPositionPagination] = useState(0);
  const [page, setPage] = useState(1);

  const ref = useRef(null);
  const scrollTranslateX = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

   const pages = [
    {
      key: '1',
    },
    {
      key: '2',
    }
  ]

  function getCurrentPage(scrollXOfPage: string) {
    const pageWidth = Number(scrollXOfPage) / width;
    setPositionPagination(pageWidth)
    const currentPage = pageWidth + 1.000001;
    const pageFormatted = Math.floor(currentPage);
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
        />

        <ListPagination
          ref={ref}
          data={pages}
          keyExtractor={(item) => item.key}
          renderItem={ item => (
            <View style={{
                backgroundColor: Number(item.key) % 2 == 0 ? '#14dc8f' : '#540d0d',
                height: 200,
                width: 200
              }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            let contentOffset = e.nativeEvent.contentOffset;
            getCurrentPage(contentOffset.x);
            Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            });
            scrollX.setValue(contentOffset.x)
          }}
        />

      </Container>
    </>

  );
}

export default SPA;