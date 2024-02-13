### Faça um clone desse repositório

```bash
$ git clone https://github.com/AlizonCaetano/pl-qa-test.git
```

### Navegue até a pasta raiz

### Configure as variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as variaveis presentes no `.env.example`

#### `EMAIL=`"exemplo@email.com"

#### `PASSWORD=`"abc123"

#### `GITHUB_USER_FULLNAME=`"Jon Snow"

## Execute o comando para instalar as depedências

```bash
$ npm install
```

ou

```bash
$ yarn
```

## Por fim, execute o comando abaixo para iniciar o teste

```bash
$ npm run test
```

## ⚠️ Pontos de atenção ⚠️

Se, após o login, o github solicitar um código de verificação enviado por e-mail, ou se a conta utilizada possuir autenticação em dois fatores, o script está preparado para detectar essa situação. Nesse caso, será concedido um intervalo de espera de 2 minutos para que a ação manual necessária seja realizada antes que o processo prossiga automaticamente.
