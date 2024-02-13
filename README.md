## Instale as depedências para executar o projeto

```bash
$ npm install dotenv@16.4.1
```

```bash
$ npm install jest@29.7.0
```

```bash
$ npm install dotenv@20.3.0
```

## Abra a pasta raiz e rode o comando para iniciar o teste em Jest

```bash
$ npm run test
```

### Pontos de atenção

- Foi necessário validar se após logar é pedido uma autenticação de 2 fatores, há um timeout de 60 segundos para receber o token pelo e-mail e confirmar o token manualmente.
