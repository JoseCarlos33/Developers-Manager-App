import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Cards';
import { RequestContext } from '../../hooks';
import { axiosInstance } from '../../services/developerService';
import { ResquestProps } from '../../types/request';

import {
  FlatListDev,
  FooterSpace
} from './styles';

interface ListProps {
  type: string;
  page: number;
}

function LevelList({ type, page }: ListProps) {
  
  const { getLevels, dataLevel, numberOfDevelopersList} = useContext(RequestContext);
  

  useEffect(() => {
    getLevels()
  }, [])


  return (
    <FlatListDev
        data={dataLevel}
        extraData={dataLevel}
        keyExtractor={() => Math.random()}
        renderItem={({ item, index }) =>
          <>
            {
              console.log(item.id)
            }
            <Card
                  type="level"
                  name={item.nivel}
                  id={item.id}
                  developersInLevel={numberOfDevelopersList[index]}
                /> 
            {
              type == 'level'
                && index == (dataLevel.length - 1) && <FooterSpace />
            }

          </>
        }
      />
  );
}

export default LevelList;