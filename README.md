<p align="center">
  <img src="./src/assets/demonstration.gif" 
  height="450">
</p>

<h1 align="center">
  Developer Manager App
</h1>
<p align="center">Uma forma facil e ágil de gerenciar os seus desennvolvedores! 🚀</p>

<h3 align="center">>
  Essa App tem como intuito fornecer recursos para o gerenciamento de desenvolvedores e de seus respectivos níveis.
</h3>

### Deploy do Backend

```
  https://drf-developer-manager-api.herokuapp.com/
```
### Features

- [x] Cadastro de Desenvolvedor
- [x] Listagem de Desenvolvedores Cadastrados
- [x] Deletar Desenvolvedor
- [x] Editar Desenvolvedor
- [x] Cadastro de Níveis
- [x] Listagem de Níveis Cadastrados
- [x] Deletar Nível
- [x] Editar Nível

### Endpoints

```
  Cadastro ou Listagem de Desenvolvedor(a)(es)(s): 
    - Link do deploy: https://drf-weather-forecast-app.herokuapp.com/api/dev/
    - Rodando Localmente: http://localhost:8000/api/dev/
    - Método HTTP: POST, GET

  Editar ou Excluir Desenvolvedor(a):
    - Link do deploy: https://drf-weather-forecast-app.herokuapp.com/api/dev/ID(numero) do dev a ser alterado/
    - Rodando Localmente: http://localhost:8000/api/dev/id/
    - Método HTTP: PUT, DELETE

   Cadastro ou Listagem de Nível: 
    - Link do deploy: https://drf-weather-forecast-app.herokuapp.com/api/level/
    - Rodando Localmente: http://localhost:8000/api/level/
    - Método HTTP: POST, GET

  Editar ou Excluir Nível:
    - Link do deploy: https://drf-weather-forecast-app.herokuapp.com/api/dev/ID(numero) do nível a ser alterado/
    - Rodando Localmente: http://localhost:8000/api/dev/id/
    - Método HTTP: PUT, DELETE
```

### Para Rodar Localmente o Projeto:

```
  # 1 -> Instale as dependencias:
      -> cd Frontend
      -> cd DeveloperManagerApp
      -> yarn

  # 2 -> Caso esteja em ambiente Mac rode os seguintes comandos:
      -> cd ios
      -> pod install

  # 3 -> Instalar o app (Android e Ios respectivamente):
      -> yarn android 
      ou 
      -> yarn ios
```


