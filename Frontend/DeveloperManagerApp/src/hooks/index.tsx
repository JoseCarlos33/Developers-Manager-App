import * as React from "react";
import { createContext, useState, useEffect, useContext } from 'react';
import { axiosInstance } from "../services/developerService";

interface RequestContextData {
  dataDevelopers: object[];
  numberOfDevelopersList: number[];
  dataLevel: object[];
  getDevelopers(): Promise<void>;
  getLevels(): Promise<void>;
}

export const RequestContext = createContext<RequestContextData>({} as RequestContextData);

const RequestProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [dataDevelopers, setDataDevelopers] = React.useState<any[]>([])
  const [numberOfDevelopersList, setNumberOfDevelopersList] = useState([]);
  const [dataLevel, setDataLevel] = useState([]);

  async function getLevels() {
    await axiosInstance.get('api/level/')
      .then(response => {
        let list = []
        response.data.map((item) => {
          list.push(item?.desenvolvedores.length)
        })
        setNumberOfDevelopersList(list)
        setDataLevel(response.data)
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }

  async function getDevelopers() {
    getLevels()
    await axiosInstance.get('api/dev/')
      .then(response => {
        
        console.log('oficialData', response.data)
        let listDevelopers = []
        let listLevels = []
        response.data.map((item) => {
          listDevelopers.push(item)
        })
        
        // dataLevel.map(() => {
        //   listLevels.push(0)
        // })
        // dataLevel.map((level, index) => {
        //   listDevelopers.map((developer) => {
        //     if(level.id == developer.nivel){
        //       listLevels[index] += 1 
        //     }
        //   })
        // })
        // setNumberOfDevelopersList(listLevels);
        // console.log(listLevels)
        setDataDevelopers(listDevelopers)
        // getLevels()
        // setIsLoading(false);
      })
      .catch((error) => {
        // setIsLoading(false);
        console.log('error ' + error);
      });
  }

  return (
    <RequestContext.Provider 
      value={{ 
        dataDevelopers,
        getDevelopers,
        getLevels,
        numberOfDevelopersList,
        dataLevel
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;