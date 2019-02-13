# Quasar App + Cypress 

> Exemplo de projeto com Quasar Framework, e testes e2e com Cypress.

Você pode acessar a Demo online: [http://quasarcypress.surge.sh/#/usuario](http://quasarcypress.surge.sh/#/usuario)

| Recurso | Versão |
| ------ | ------ |
| Sistema Operacional |  Windows_NT(10.0.17134) - win32/x64 |
| NodeJs | 8.11.3 |
| quasar-cli | 0.17.22 |
| quasar-framework | 0.22.18 |
| NPM | 5.6.0 |

# Instalação

Faça o clone ou download do projeto.
Acesse o diretório quasar-cypress e rode o comando:

```sh
$ cd quasar-cypress
$ npm install 
```

Ao terminar a instalação rode o comando para iniciar o projeto no modo de desenvolvimento do quasar:
```sh
$ quasar dev
```

Quando a aplicação estiver rodando em localhost:8080, rode o comando para executar o teste com cypress:
```sh
$ npm run test
```
O cypress irá gerar um vídeo de evidência dentro o caminho **quasar-cipress/cypress/video**.
Além disso está instalado o [mochawesome](https://www.npmjs.com/package/mochawesome), que gera evidências html dentro do caminho **quasar-cipress/mochawesome-report**, basta abrir o arquivo .html no navegador para visualizar o resultado do teste executado.

[![N|Solid](https://github.com/patrickmonteiro/quasar-cypress/blob/master/src/statics/cypress-mocha-awesome.PNG?raw=true)]() 


## Interface Cypress

[![N|Solid](https://www.cypress.io/img/cypress-test-runner-gui-in-browser.201beeab.png)]() 

Para utlizar a interface do cypress, basta rodar o comando:

```sh
$ npm run test:e2e
```

Com a interface do Cypress aberta e a aplicação rodando em localhost, clique no teste de integração **CadastraUsuario.spec.js** e o teste será iniciado.