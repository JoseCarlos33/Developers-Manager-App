import React, { useEffect, useState, useRef } from 'react';
import { Alert, Animated, Easing} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Feather';
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
  SaveButtonText
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
  // updateDeveloper({
  //   id,
  //   hobby,
  //   idade,
  //   nivel,
  //   nome,
  //   sexo
  // }: ResquestProps): void;
  hobby?: string;
  levelData: any;
}

function Card({
  type,
  id,
  level,
  numberOfDevelopers,
  name,
  age,
  genre,
  developerLevel,
  deleteMethod,
  hobby,
  levelData,
  getDevelopers,
  // updateDeveloper
}: CardProps) {

  const [nameFormatted, setNameFormatted] = useState('');
  const [editCard, setEditCard] = useState(false);
  const [ submitionForm, setSubmitionForm ] = useState(false)

  const moveRefCard = useRef(new Animated.Value(180)).current;
  const moveRefButton = useRef(new Animated.Value(0)).current;
  const opacityRefContent = useRef(new Animated.Value(0)).current;
  const moveRefContent = useRef(new Animated.Value(-100)).current;

  const scaleYCard = [
    {
      height: moveRefCard
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
        moveRefContent,
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
        moveRefContent,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ).start()
    }
  }, [editCard])

  return (
    <>
      {
        type == "nivel"
          ? <ButtonContainer>
            <CardContent style={{ height: hp('10%') }}>

            </CardContent>
          </ButtonContainer>


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
                        oldLevel={developerLevel!}
                        oldName={name!}
                        submitionForm={submitionForm}
                        setSubmitionForm={setSubmitionForm}
                        setEditCard={setEditCard}
                        getDevelopers={getDevelopers}
                      />
                      
                      {/* <SaveButton onPress={() => {
                        setSubmitionForm(true)
                        setEditCard(false)
                      }}>
                        <SaveButtonText>Salvar</SaveButtonText>
                      </SaveButton> */}
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
                        <InfoText>{hobby == '' || hobby == null ? 'Nenhum' : hobby}</InfoText>
                      </InfoContentText>
                      <InfoContentText>
                        <Label>Nível: </Label>
                        <InfoText>{developerLevel}</InfoText>
                      </InfoContentText>
                      <InfoContentText>
                        <Label>Idade: </Label>
                        <InfoText>{age}</InfoText>
                      </InfoContentText>
                    </InfoBox>
                    <IconContent>
                      <IconButton>
                        <Icon name="edit-3" onPress={() => setEditCard(true)} size={21} color={theme.color.orange} />
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