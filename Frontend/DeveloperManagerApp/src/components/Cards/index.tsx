import React, { useEffect, useState}from 'react';
import { Alert } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Feather';
import { theme } from '../../utils/theme';

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
  IconContent
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
  deleteMethod
}: CardProps) {

  const [ nameFormatted, setNameFormatted ] = useState('');

  function handleDeleteDeveloper(){
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
      if(item !== 'da' && item !== 'de' && item !== 'do' && count < 3){
        count++
        newName += ' ' + item
        return item
      }
    });
    // let nameFormatted = nameListFormatted
    setNameFormatted(newName);
  }, [])
  
  

  return (
    <>
      {
        type == "nivel"
          ? <ButtonContainer>
              <CardContent style={{ height: hp('10%') }}>

              </CardContent>
            </ButtonContainer>

          : <ButtonContainer>
              <CardContent style={{ height: hp('18%') }}>
                <LateralColor/>
                <InfoBox>
                  <Name numberOfLines={1}>{nameFormatted}</Name>
                  <InfoContentText>
                    <Label>Sexo: </Label>
                    <InfoText>{genre}</InfoText>
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
                    <Icon name="edit-3" size={21} color={theme.color.orange}/>
                  </IconButton>
                  <IconButton onPress={handleDeleteDeveloper}>
                    <Icon name="trash-2" size={21} color={theme.color.gray_medium}/>
                  </IconButton>
                </IconContent>
              </CardContent>
            </ButtonContainer>

      }
    </>
  )
}

export default Card;