import React, { useEffect }from 'react';
import { useState } from 'react';

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
  level?: string;
  numberOfDevelopers?: number;
  name?: string;
  age?: number;
  genre?: string;
  developerLevel?: string;
}

function Card({
  type,
  level,
  numberOfDevelopers,
  name,
  age,
  genre,
  developerLevel,
}: CardProps) {

  const [ nameFormatted, setNameFormatted ] = useState('');

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
                  <IconButton>
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