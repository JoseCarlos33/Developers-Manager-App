import React, { useEffect }from 'react';
import { useState } from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  CardContent,
  ButtonContainer,
  InfoBox,
  Name,
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
                <InfoBox>
                  <Name>{nameFormatted}</Name>
                  
                </InfoBox>
              </CardContent>
            </ButtonContainer>

      }
    </>
  )
}

export default Card;