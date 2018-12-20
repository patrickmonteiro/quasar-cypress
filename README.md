# Quasar App + Cypress 

> Exemplo de projeto com Quasar Framework, e testes e2e com Cypress.

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

Ao terminar a instalação rode o comando para iniciar o projeto:
```sh
$ quasar dev
```

Com o projeto rodando, abra outro terminal de sua preferência e rode o comando para inicializar o Cypress:
```sh
$ npm run test
```

Com o Cypress aberto, clique no teste de integração **CadastraUsuario.spec.js** e o teste será iniciado.