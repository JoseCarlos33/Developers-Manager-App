import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { listenOrientationChange } from 'react-native-responsive-screen';
import Card from '../../components/Cards';
import { axiosInstance } from '../../services/developerService';

import {
  FlatListDev
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
        <Card
          type="dev"
          name={item.nome}
        />
      }
    />
  );
}

export default DeveloperList;