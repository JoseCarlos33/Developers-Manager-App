import React, { useEffect, useState, useRef, useContext } from 'react';
import { Alert, Animated, Easing} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Feather';
import { RequestContext } from '../../hooks';
import { axiosInstance } from '../../services/developerService';
import { ResquestProps } from '../../types/request';
import { theme } from '../../utils/theme';
import AnimatedInputs from '../AnimatedInputs';

import {
  CardContent,
  ButtonContainer,
  InfoBox,
  Name,
  LateralColor,
  InfoContentText,
  InfoText,
  Label,
  IconButton,
  IconContent,
  EditText,
  SaveButton,
  AnimatedButtonView,
  SaveButtonText,
  IconContentLevel
} from './styles'

interface CardProps {
  type: string;
  id: number;
  level?: string;
  numberOfDevelopers?: number;
  name?: string;
  age?: number;
  genre?: string;
  developerLevel?: string;
  deleteMethod(arg: number): void;
  getDevelopers(): void;
  developersInLevel: number;
  hobby?: string;
  levelData?: any;
  getLevels(): void;
}

function Card({
  type,
  id,
  name,
  age,
  genre,
  developerLevel,
  deleteMethod,
  hobby,
  developersInLevel,
}: CardProps) {

  const [nameFormatted, setNameFormatted] = useState('');
  const [ levelName, setLevelName ] = useState('')
  const [editCard, setEditCard] = useState(false);
  const [ submitionForm, setSubmitionForm ] = useState(false)

  const moveRefCard = useRef(new Animated.Value(180)).current;
  const moveLevelRefCard = useRef(new Animated.Value(110)).current;
  const moveRefButton = useRef(new Animated.Value(0)).current;
  const opacityRefContent = useRef(new Animated.Value(0)).current;
  const moveRefContent = useRef(new Animated.Value(-100)).current;
  const opacityLevelRefContent = useRef(new Animated.Value(0)).current;
  const moveLevelRefContent = useRef(new Animated.Value(-100)).current;

  const { getDevelopers, dataDevelopers, getLevels, dataLevel: levelData} = useContext(RequestContext);

  

  const scaleYCard = [
    {
      height: moveRefCard
    }
  ];

  const scaleYLevelCard = [
    {
      height: moveLevelRefCard
    }
  ];

  const scaleXButton = [
    {
      width: moveRefButton
    }
  ]

  const editContentAnimation  = {
    opacity: opacityRefContent,
    transform: [
      {
        translateX: moveRefContent
      },
    ]
  };

  const editLevelContentAnimation  = {
    opacity: opacityLevelRefContent,
    transform: [
      {
        translateX: moveLevelRefContent
      },
    ]
  };

  function handleDeleteDeveloper() {
    const nameSplit = name?.split(' ')
    const firstName = nameSplit?.filter((item, index) => index == 0 ? item : '')

    Alert.alert(
      `Deseja deletar o desenvolvedor(a) ${firstName}?`,
      "Esta será uma ação irreversível, então caso não queira ou tenha dúvidas da ação basta clicar no botão 'cancelar'.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Deletar", onPress: () => deleteMethod(id) }
      ]
    );
  }

  async function deleteLevel(id: number){
    if(developersInLevel == 0 ){
      await axiosInstance.delete(`api/level/${id}/`)
      .then(response => {
        getLevels()
      })
      .catch((error) => {
        console.log('error ' + error);
      });
    }else{
      Alert.alert(
        `Ação negada.`,
        "Não é possível deletar um nível que possua desenvolvedores cadastrados, por favor, certifique-se retirar os desenvolvedores deste nível antes de prosseguir com a ação.",
        [
          { text: "OK", onPress: () => {}}
        ]
      );
    }
  }

  async function handleDeleteLevel(id: number) {
    Alert.alert(
      `Deseja deletar o nível ${nameFormatted}?`,
      "Esta será uma ação irreversível, então caso não queira ou tenha dúvidas da ação basta clicar no botão 'cancelar'.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Deletar", onPress: () => deleteLevel(id) }
      ]
    );
  }
  

  useEffect(() => {
    const nameList = name?.split(' ')
    let count = 0
    let newName = ''
    const nameListFormatted = nameList?.filter((item) => {
      if (item !== 'da' && item !== 'de' && item !== 'do' && count < 3) {
        count++
        newName += ' ' + item
        return item
      }
    });
    setNameFormatted(newName);
  }, [])

  useEffect(() => {
    if(!editCard){
      Animated.timing(
        moveRefCard,
        {
          toValue: 180,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveLevelRefCard,
        {
          toValue: 110,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveRefButton,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        opacityRefContent,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        opacityLevelRefContent,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveRefContent,
        {
          toValue: -50,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveLevelRefContent,
        {
          toValue: -50,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
    } else {
      Animated.timing(
        moveRefCard,
        {
          toValue: 500,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveLevelRefCard,
        {
          toValue: 220,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveRefButton,
        {
          toValue: 330,
          duration: 350,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        opacityRefContent,
        {
          toValue: 1,
          duration: 590,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        opacityLevelRefContent,
        {
          toValue: 1,
          duration: 590,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveRefContent,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
      Animated.timing(
        moveLevelRefContent,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
    }
  }, [editCard])
  
  useEffect(() => {
    levelData?.map((item) => {
      if(item.id == developerLevel){
        setLevelName(item.nivel)
      }
    })
  
  }, [])

  return (
    <>
      {
        type == "level"
          ? <CardContent style={scaleYLevelCard}>
              <LateralColor/>
              {
                editCard == true
                ? 
                  <>
                    <InfoBox style={editLevelContentAnimation}>
                      <EditText >Editar Nível</EditText>
                      <AnimatedButtonView style={scaleXButton}/>
                      <AnimatedInputs
                        id={id}
                        oldAge={age?.toString()}
                        levelData={levelData}
                        oldGenre={genre!}
                        oldHobby={hobby!}
                        oldLevel={developerLevel!}
                        oldName={name!}
                        submitionForm={submitionForm}
                        setSubmitionForm={setSubmitionForm}
                        setEditCard={setEditCard}
                        type="EditLevel"
                        getDevelopers={() => getDevelopers()}
                      />
                    </InfoBox>
                    
                  </>
                : <>
                    <InfoBox style={{marginTop: 4}}>
                      <Name numberOfLines={1}>{nameFormatted}</Name>
                      <InfoContentText style={{marginTop: 9}}>
                        <Label style={{textTransform: 'none', fontSize: 14}}>Número de Desenvolvedores: </Label>
                        <InfoText style={{marginLeft: 3, fontSize: 14}}>{developersInLevel}</InfoText>
                      </InfoContentText>
                    </InfoBox>
                    <IconContentLevel>
                      <IconButton style={{height: 39}} onPress={() => setEditCard(true)}>
                        <Icon name="edit-3" size={21} color={theme.color.orange} />
                      </IconButton>
                      <IconButton style={{height: 39}} onPress={() => handleDeleteLevel(id)}>
                        <Icon name="trash-2" size={21} color={theme.color.gray_medium} />
                      </IconButton>
                    </IconContentLevel>
                  </>
              }
            </CardContent>


          : <CardContent style={scaleYCard}>
              <LateralColor/>
              {
                editCard == true
                ? 
                  <>
                    <InfoBox style={editContentAnimation}>
                      <EditText >Editar Desenvolvedor(a)</EditText>
                      <AnimatedButtonView style={scaleXButton}/>
                      <AnimatedInputs
                        id={id}
                        oldAge={age?.toString()}
                        levelData={levelData}
                        oldGenre={genre!}
                        oldHobby={hobby!}
                        oldLevel={levelName!}
                        oldName={name!}
                        submitionForm={submitionForm}
                        setSubmitionForm={setSubmitionForm}
                        setEditCard={setEditCard}
                        getDevelopers={getDevelopers}
                        getLevels={getLevels}
                        type="EditDev"
                      />
                    </InfoBox>
                    
                  </>
                : <>
                    <InfoBox>
                      <Name numberOfLines={1}>{nameFormatted}</Name>
                      <InfoContentText>
                        <Label>Sexo: </Label>
                        <InfoText>{genre}</InfoText>
                      </InfoContentText>
                      <InfoContentText>
                        <Label>Hobby: </Label>
                        <InfoText>{hobby === '' || hobby == null ? 'Nenhum' : hobby}</InfoText>
                      </InfoContentText>
                      <InfoContentText>
                        <Label>Nível: </Label>
                        <InfoText>{levelName}</InfoText>
                      </InfoContentText>
                      <InfoContentText>
                        <Label>Idade: </Label>
                        <InfoText>{age}</InfoText>
                      </InfoContentText>
                    </InfoBox>
                    <IconContent>
                      <IconButton onPress={() => setEditCard(true)}>
                        <Icon name="edit-3" size={21} color={theme.color.orange} />
                      </IconButton>
                      <IconButton onPress={handleDeleteDeveloper}>
                        <Icon name="trash-2" size={21} color={theme.color.gray_medium} />
                      </IconButton>
                    </IconContent>
                  </>
              }
            </CardContent>

      }
    </>
  )
}

export default Card;