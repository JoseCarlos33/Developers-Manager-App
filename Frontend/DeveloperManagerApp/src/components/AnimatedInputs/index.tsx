import React,{ useState } from 'react';
import { theme } from '../../utils/theme';

import {
  ContentLabel,
  Input,
  InputContent,
  InputLabel,
  Container
} from './styles';

interface InputProps{
  id: number;
  oldName: string;
  oldGenre: string;
  oldAge: number;
  oldLevel: string;
  oldHobby: string;
}

function AnimatedInputs({
  id,
  oldName,
  oldGenre,
  oldAge,
  oldLevel,
  oldHobby
}: InputProps){

  const [ name, setName ] = useState(oldName);
  const [ genre, setGenre ] = useState(oldGenre);
  const [ age, setAge ] = useState(oldAge);
  const [ level , setLevel ] = useState(oldLevel);
  const [ hobby, setHobby ] = useState(oldHobby);

  return (
    <Container>
      <InputContent style={[
        // animatedEmail, 
        // { position: 'absolute'}
      ]}>
        <Input
          onChangeText={setName}
          value={name}
          placeholder="Digite aqui o nome"
          autoCapitalize={"none"}
          style={{
            borderColor: name !== '' ? theme.color.dark_blue : theme.color.gray_medium
          }}
        />
        <ContentLabel>
          <InputLabel
            style={{
              color: name !== '' ? theme.color.dark_blue : theme.color.gray_medium
            }}
          >Nome</InputLabel>
        </ContentLabel>
      </InputContent>

      <InputContent style={[
        // animatedEmail, 
        // { position: 'absolute' }
      ]}>
        <Input
          onChangeText={setGenre}
          value={genre}
          placeholder="Digite aqui o seu gênero"
          autoCapitalize={"none"}
          style={{
            borderColor: genre !== '' ? theme.color.dark_blue : theme.color.gray_medium
          }}
        />
        <ContentLabel>
          <InputLabel
            style={{
              color: genre !== '' ? theme.color.dark_blue : theme.color.gray_medium
            }}
          >Gênero</InputLabel>
        </ContentLabel>
      </InputContent>

      <InputContent style={[
        // animatedEmail, 
        // { position: 'absolute' }
      ]}>
        <Input
          onChangeText={setLevel}
          value={level}
          placeholder="Digite aqui o seu email"
          autoCapitalize={"none"}
          style={{
            borderColor: level !== '' ? theme.color.dark_blue : theme.color.gray_medium
          }}
        />
        <ContentLabel>
          <InputLabel
            style={{
              color: level !== '' ? theme.color.dark_blue : theme.color.gray_medium
            }}
          >Nível</InputLabel>
        </ContentLabel>
      </InputContent>

      <InputContent style={[
        // animatedEmail,
        // { position: 'absolute' }
      ]}>
        <Input
          onChangeText={setAge}
          value={age}
          placeholder="Digite aqui a sua idade"
          autoCapitalize={"none"}
          style={{
            borderColor: age !== null ? theme.color.dark_blue : theme.color.gray_medium
          }}
        />
        <ContentLabel>
          <InputLabel
            style={{
              color: age !== null ? theme.color.dark_blue : theme.color.gray_medium
            }}
          >Idade</InputLabel>
        </ContentLabel>
      </InputContent>

      <InputContent style={[
        // animatedEmail, 
        // { position: 'absolute' }
      ]}>
        <Input
          onChangeText={setHobby}
          value={hobby}
          placeholder="Digite aqui o seu hobby"
          autoCapitalize={"none"}
          style={{
            borderColor: hobby !== '' ? theme.color.dark_blue : theme.color.gray_medium
          }}
        />
        <ContentLabel>
          <InputLabel
            style={{
              color: hobby !== '' ? theme.color.dark_blue : theme.color.gray_medium
            }}
          >Hobby</InputLabel>
        </ContentLabel>
      </InputContent>

    </Container>
  );
}

export default AnimatedInputs;