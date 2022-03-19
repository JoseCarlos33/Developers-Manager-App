import React, { useEffect, useState } from 'react';
import Card from '../../components/Cards';
import { axiosInstance } from '../../services/developerService';

import {
  FlatListDev,
  FooterSpace
} from './styles';

const DeveloperList: React.FC = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ firstGet, setFirstGet ] = useState(true);

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
    if(firstGet){
      getDevelopers()
      setFirstGet(false)
    }
  }, [])

  return (
    <FlatListDev
      data={data}
      keyExtractor={() => Math.random()}
      renderItem={ ({item, index}) => 
        <>
          {
            console.log(item.nivel)
          }
          <Card
            type="dev"
            name={item.nome}
            developerLevel={item.nivel}
            age={item.idade}
            genre={item.sexo}
            id={item.id}
            deleteMethod={deleteDeveloper}
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