import React, { useEffect, useState } from 'react';
import Card from '../../components/Cards';
import { axiosInstance } from '../../services/developerService';
import { ResquestProps } from '../../types/request';

import {
  FlatListDev,
  FooterSpace
} from './styles';

const DeveloperList: React.FC = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ firstGet, setFirstGet ] = useState(true);
  const [ levelData, setLevelData ] = useState([]);

  async function getDevelopers() {
    setIsLoading(true);
    await axiosInstance.get('api/dev/', {
    })
      .then(response => {
        let list = []
        response.data.map((item) => {
          list.push(item)
        })
        setData(list)
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error ' + error);
      });
  }

  async function getLevels() {
    setIsLoading(true);
    await axiosInstance.get('api/level/', {
    })
      .then(response => {
        console.log(response?.data)
        setLevelData(response?.data)
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
    if(firstGet){
      getDevelopers()
      getLevels()
      setFirstGet(false)
    }
  }, [])

  return (
    <FlatListDev
      data={data}
      keyExtractor={() => Math.random()}
      renderItem={ ({item, index}) => 
        <>
          <Card
            type="dev"
            name={item.nome}
            developerLevel={item.nivel}
            age={item.idade}
            genre={item.sexo}
            id={item.id}
            deleteMethod={deleteDeveloper}
            levelData={levelData}
            getDevelopers={getDevelopers}
            // updateDeveloper={handleUpdateDeveloper}
          />
          {
            index == (data.length - 1) && <FooterSpace/>
          }
        </>
      }
    />
  );
}

export default DeveloperList;