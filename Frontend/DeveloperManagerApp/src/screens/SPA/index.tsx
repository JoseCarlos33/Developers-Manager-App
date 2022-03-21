import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Dimensions, Animated, View, FlatList, Modal } from 'react-native';
import Header from '../../components/Header';
import AnimatedTopBar from '../../components/AnimatedTopBar';
import Icon from 'react-native-vector-icons/dist/Feather';
import { theme } from '../../utils/theme';
import Card from '../../components/Cards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeveloperList from '../DeveloperList';
import LevelList from '../LevelList';
import AnimatedInputs from '../../components/AnimatedInputs';
import { axiosInstance } from '../../services/developerService';

import {
  Container,
  AddButton,
  PageContent,
  ContainerModal,
  Content,
  Title,
  Footer
} from './styles';


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
  const [ visible, setVisible ] = useState(false);

  const [isDeveloperOption, setIsDeveloperOption] = useState(true)
  const [positionPagination, setPositionPagination] = useState(0);
  const [page, setPage] = useState(1);
  const [levelData, setLevelData] = useState([]);

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

  async function getLevels() {
    await axiosInstance.get('api/level/')
      .then(response => {
        setLevelData(response.data)
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }

  useEffect(() => {
    getLevels()
  }, [])


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
          extraData={page}
          keyExtractor={(item) => item.key}
          renderItem={ ({item, index}) => 
            <PageContent>
              {
                index == 0 
                ? <DeveloperList type="dev" page={page}/>
                : <LevelList type="level" page={page}/>
              }
            </PageContent>
          }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => {
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
        <AddButton onPress={() => {
          setVisible(true)
          // setTimeout(() => {
          //   setVisible(false)
          // }, 2000);  
        }}>
          <Icon name="plus" size={30} color={theme.color.white}/>
        </AddButton>
        <Modal visible={visible} animationType="fade" transparent>
          <ContainerModal>

            <Content style={{height: page == 1 ?  hp('60%') : hp('28%')}}>
              <Footer/>
              <AnimatedInputs
                levelData={levelData}
                type={page == 1 ? "CadastroDev" : "CadastroNivel"}
                oldLevel=''
                setVisible={setVisible}
              />
            </Content>
          </ContainerModal>
        </Modal>
      </Container>
    </>

  );
}

export default SPA;