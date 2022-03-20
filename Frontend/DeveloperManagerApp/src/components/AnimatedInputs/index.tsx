import React, { useRef, useState } from 'react';
import { theme } from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, Animated, Platform, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import {
  ContentLabel,
  Input,
  InputContent,
  InputLabel,
  Container,
  InputContentDropDown,
  DropDownButton,
  TitleLevel,
  Separator,
  LevelLabel,
  InitialSeparator,
  SaveButton,
  SaveButtonText
} from './styles';
import { useEffect } from 'react';
import { ResquestProps } from '../../types/request';
import { axiosInstance } from '../../services/developerService';
import { FormHandles } from '@unform/core';


interface InputProps {
  id: number;
  oldName: string;
  oldGenre: string;
  oldAge: number;
  oldLevel: string;
  oldHobby: string;
  levelData: any;
  submitionForm: boolean;
  setSubmitionForm(arg: boolean): void;
  setEditCard(arg: boolean): void;
  getDevelopers(): void;
  getLevels(): void;
}

function AnimatedInputs({
  id,
  oldName,
  oldGenre,
  oldAge,
  oldLevel,
  oldHobby,
  levelData,
  setEditCard,
  getDevelopers,
  submitionForm,
  setSubmitionForm,
  // updateDeveloper
  getLevels
}: InputProps) {

  const [name, setName] = useState(oldName);
  const [genre, setGenre] = useState(oldGenre);
  const [age, setAge] = useState(oldAge);
  const [level, setLevel] = useState(oldLevel);
  const [hobby, setHobby] = useState(oldHobby);
  const [levelTitle, seLevelTitle] = useState(oldLevel);
  const [animatedType, setAnimatedType] = useState(false);
  const [levels, setLevels] = useState([])
  const [currentLevel, setCurrentLevel] = useState()

  const heightDown = Platform.OS == 'ios' ? 170 : 80;
  let size = new Animated.Value(0);
  let sizeSpacer = new Animated.Value(heightDown);
  const formRef = useRef<FormHandles>(null);

  const animateUp = () => {
    Animated.parallel([
      Animated.timing(size, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      })
    ]).start();
  };

  const animateDown = () => {
    Animated.parallel([
      Animated.timing(size, {
        toValue: heightDown,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyleLevel = [
    {
      height: size,
      width: wp('74%'),
      position: 'absolute',
      top: 220,
      backgroundColor: '#fff',
      zIndex: 99,
      borderWidth: 1,
      borderTopWidth: 0,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderColor: theme.color.dark_blue

    },
  ];

  async function handleUpdateDeveloper(formData) {
    try {
      // const schema = Yup.object().shape({
      //   name: Yup.string()
      //     .required('Nome obrigatório')
      //     .min(3, 'Deve conter mais de 3 letras'),
      //   age: Yup.number()
      //     .required('Idade obrigatório')
      //     .typeError('Este campo deve conter apenas números'),
      //   genre: Yup.string()
      //     .email('Digite um e-mail válido')
      //     .required('Gênero obrigatório'),
      //   hobby: Yup.string()
      //     .required('Hobby obrigatório')
      //     .min(3, 'Deve conter mais de 3 letras')
      //     .max(50, ''),
      // });

      const nivel = levelData.filter((item) => {
        if(item.nivel == levelTitle){
          return item
        }
      })

      console.log('nivel', nivel[0].id)
      
      const data = {
        "id": id,
        "nivel": nivel[0].id,
        "nome": name,
        "sexo": genre,
        "idade": age,
        "hobby": hobby
      }
      console.log('data', data)
      await axiosInstance.put(`api/dev/${id}/`, data)
        .then(response => {
          setEditCard(false);
          getDevelopers();
          console.log(response.data)
        })
        .catch((error) => {
          setEditCard(false);
          console.log('error 222' + error.message);
        });

      // await schema.validate(formData, {
      //   abortEarly: false,
      // });
    } catch (err) {
      console.log('Erro',err)
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          console.log(error.message);
        });
      }
    }
  }

  useEffect(() => {
    setLevels(levelData)
    const nivel = levelData.map((item) => {
      if (item.nivel === oldLevel) {
        console.log(item.nome)
        return item.id
      }
    })
    setCurrentLevel(nivel)
  }, [])

  useEffect(() => {
    animatedType ? animateDown() : animateUp();
  }, [animatedType]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleUpdateDeveloper}>
        <InputContent>
          <Input
            onChangeText={setName}
            value={name}
            name="name"
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

        <InputContent>
          <Input
            onChangeText={setGenre}
            value={genre}
            name="genre"
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

        <InputContentDropDown>
          <ContentLabel>
            <InputLabel
              style={{
                color: level !== '' ? theme.color.dark_blue : theme.color.gray_medium
              }}
            >Nível</InputLabel>
          </ContentLabel>
          <DropDownButton onPress={() => setAnimatedType(!animatedType)}>
            <TitleLevel
              style={{
                color: levelTitle == '' ? theme.color.gray_medium : theme.color.blue,
              }}
            >
              {levelTitle == ''
                ? 'Selecione o nível'
                : levelTitle}
            </TitleLevel>
            {!animatedType ? (
              <Icon
                name="angle-down"
                size={21}
                color={theme.color.backgroundSecundary}
              />
            ) : (
              <Icon
                name="angle-up"
                size={21}
                color={theme.color.backgroundSecundary}
              />
            )}
          </DropDownButton>
        </InputContentDropDown>
        {
          animatedType &&
          <Animated.View style={animatedStyleLevel}>
            <ScrollView nestedScrollEnabled={true}>
              {levels?.map((item, index) => 
                <>
                  {
                    index == 0 && <InitialSeparator />
                  }
                  <Separator
                    onPress={() => {
                      setCurrentLevel(item.id)
                      seLevelTitle(item.nivel)
                      setAnimatedType(!animatedType)
                    }}
                  >
                    <LevelLabel>{item.nivel}</LevelLabel>
                  </Separator>
                </>
              )}
            </ScrollView>
          </Animated.View>
        }
        <InputContent>
          <Input
            onChangeText={setAge}
            value={age}
            name="age"
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

        <InputContent>
          <Input
            onChangeText={setHobby}
            value={hobby}
            name="hobby"
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
      </Form>
      <SaveButton onPress={() => formRef.current?.submitForm()}>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
}

export default AnimatedInputs;