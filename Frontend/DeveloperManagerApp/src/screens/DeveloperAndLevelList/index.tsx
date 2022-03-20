import React, { useEffect, useState } from 'react';
import Card from '../../components/Cards';
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

function DeveloperAndLevelList({ type, page}: ListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataDev, setDataDev] = useState([]);
  const [dataLevel, setDataLevel] = useState([]);
  const [firstGet, setFirstGet] = useState(true);
  const [levelData, setLevelData] = useState([]);

  async function getLevels() {
    setIsLoading(true);
    await axiosInstance.get('api/level/')
      .then(response => {
        console.log('DATAA:',response?.data)
        setLevelData(response?.data)
        setDataLevel(response?.data)
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error ' + error);
      });
  }

  async function getDevelopers() {
    
    setIsLoading(true);
    await axiosInstance.get('api/dev/', {
    })
      .then(response => {
        let list = []
        response.data.map((item) => {
          list.push(item)
        })
        setDataDev(list)
        getLevels()
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error ' + error);
      });
  }

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

  // async function handleUpdateDeveloper({
  //   id,
  //   hobby,
  //   idade,
  //   nivel,
  //   nome,
  //   sexo
  // }: ResquestProps){
  //   const data = {
  //     "nivel": nivel,
  //     "nome": nome,
  //     "sexo": sexo,
  //     "idade": idade,
  //     "hobby": hobby 
  //   }
  //   await axiosInstance.put(`api/dev/${id}/`, {
  //     body: JSON.stringify(data)
  //   })
  //     .then(response => {
  //       getDevelopers()
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log('error ' + error);
  //     });
  // }

  useEffect(() => {
    if (firstGet) {
      getDevelopers()
      getLevels()
      setFirstGet(false)
    }
  }, [])

  useEffect(() => {
   getLevels()
  }, [])

  return (
    <FlatListDev
      data={ type == 'dev' ? dataDev : dataLevel}
      keyExtractor={() => Math.random()}
      renderItem={({ item, index}) =>
        <>
          {
            type == 'dev'
              ? <Card
                  type="dev"
                  name={item.nome}
                  developerLevel={item.nivel}
                  age={item.idade}
                  genre={item.sexo}
                  hobby={item.hobby}
                  id={item.id}
                  deleteMethod={deleteDeveloper}
                  levelData={levelData}
                  getDevelopers={getDevelopers}
                />
              : <Card
                  type="level"
                  name={item.nivel}
                  // developerLevel={item.nivel}
                  // age={item.idade}
                  // genre={item.sexo}
                  // hobby={item.hobby}
                  id={item.id}
                  // deleteMethod={deleteDeveloper}
                  // levelData={levelData}
                  developersInLevel={dataLevel[index].desenvolvedores.length}
                  // getDevelopers={getDevelopers}
                />
          }
          {
            type == 'dev'
            ? index == (dataDev.length - 1) && <FooterSpace />
            : index == (dataLevel.length - 1) && <FooterSpace />
          }

        </>
      }
    />
  );
}

export default DeveloperAndLevelList;