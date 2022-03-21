import React, { useEffect, useState, useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Cards';
import { axiosInstance } from '../../services/developerService';
import { ResquestProps } from '../../types/request';

import {
  FlatListDev,
  FooterSpace
} from './styles';

import {RequestContext} from '../../hooks';

interface ListProps {
  type: string;
  page: number;
};



function DeveloperList({ type, page }: ListProps) {
  const { getDevelopers, dataDevelopers} = useContext(RequestContext);

  const [isLoading, setIsLoading] = useState(false);
  // const [dataDev, setDataDev] = useState(dataDevelopers);
  const [dataLevel, setDataLevel] = useState([]);
  const [firstGet, setFirstGet] = useState(true);
  const [levelData, setLevelData] = useState([]);
  const [numberOfDevelopersList, setNumberOfDevelopersList] = useState([]);


  async function deleteDeveloper(id: number) {
    setIsLoading(true);
    await axiosInstance.delete(`api/dev/${id}/`, {
    })
      .then(response => {
        getDevelopers()
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error ' + error);
      });
  }

  useEffect(() => {
    if (firstGet) {
      getDevelopers()
      setFirstGet(false)
    }
    console.log(dataDevelopers)
  }, [])


  return (
    <FlatListDev
        data={dataDevelopers}
        extraData={dataDevelopers}
        keyExtractor={() => Math.random()}
        renderItem={({ item, index }) =>
          <>
            <Card
              type="dev"
              name={item.nome}
              developerLevel={item.nivel}
              age={item.idade}
              genre={item.sexo}
              hobby={item.hobby}
              id={item.id}
              deleteMethod={deleteDeveloper}
              levelData={levelData}
              getDevelopers={() => getDevelopers()}
              // getLevels={getLevels}
            />
            
            {
              type == 'dev'
              && index == (dataDevelopers.length - 1) && <FooterSpace />
            }

          </>
        }
      />
  );
}

export default DeveloperList;