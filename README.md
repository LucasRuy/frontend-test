# A Fazenda - Ranking

Ranking de participantes de reality show **A Fazenda** com indice de aprovação e reprovação.

## Começando usar

### Pré-requisitos

Para começar primeiro você deverá clonar ou fazer o download do repositório.

Você também deve ter node.js e npm instalados na seu computador.

Para baixar o [node.js](https://nodejs.org/en/) basta clicar no link, geralmente o npm é instalado junto com o node.js.

### Instalando

O primeiro passo que deve seguir para executar o projeto é instalar todas as dependências do mesmo.

Os comandos a seguir devem fazer isso para você.

```
npm install
```

### Tarefas Gulp.js

Lista de tarefas inclusas em `gulp_tasks`.
  - `images.js` responsável copiar e otimizar imagens para pasta `public`.
  - `javascripts.js` concatena todas arquivos inclusos em `app/src/components`, compila e gera um bundle.
  - `pug.js` compila os arquivos `.pug` e gera um HTML final.
  - `server.js` inicia servidor local com Browser Sync.
  - `stylus.js` compila arquivos `.styl` para `.css`.
  - `watch.js` observa mudanças no código.

## Iniciando com Gulp.js

Neste projeto é utilizado `gulp.js` para automatizar tarefas rotineiras.

Comandos para iniciar seu `gulpfile.babel.js`.
  - `gulp` para executar a tarefa `default`.
  - `gulp images` para otimizar as imagens
  - `gulp javascripts` para compilar arquivos `.js`
  - `gulp pug` para compilar arquivos `.pug`
  - `gulp browserSync` para iniciar o servidor local
  - `gulp stylus` para compilar arquivos `.styl`
  - `gulp watch` para iniciar observador de alterações no código

Ou você pode simplesmente digitar

```
npm run start
```

* Após iniciar a tarefa `default` do gulp ou utilizar `npm run start`, serão disponibilizados dois links para acessar o projeto.
- Local: <http://localhost:3000/>
- Externo: <http://your-ip:3000/>

## Executando ESLint

Este projeto utiliza ESLint para pegar erros no código de arquivos Javascript.

Para executar o ESLint.

```
npm run lint
```

## Executando testes

Abaixo os comandos para começar a rodar os testes.

### Uso básico

Para executar o teste apenas uma vez.

```
npm test
```

### Uso com 'watch'

Para ficar assistindo mudanças no código do teste.

```
npm run test:tdd
```

### Estrutura da pasta `app`

Abaixo a estrutura de pastas.

```sh
├── app
│   ├── src
│   │    ├── components
│   │    ├── json
│   │    ├── tests
│   │    ├── utils
│   │    └── app.js
│   └── static
│        ├── images
│        ├── stylesheets
│        │    ├── base
│        │    ├── components
│        │    ├── config
│        │    ├── layout
│        │    │     ├── section
│        │    │     └── views
│        │    └── application.styl
│        └── templates
│               ├── components
│               ├── views
│               └── index.pug
```

### Public

Alterações da pasta `public`.
  - Arquivo `fazenda.json` foi movido para dentro da pasta `javascripts`.

## Desenvolvido com

* [PUG Template Engine](https://pugjs.org/api/getting-started.html) - Template engine de alta performance baseado no Haml.
* [Browser Sync](https://browsersync.io/) - Teste de navegador sincronizado que economiza tempo.
* [Gulp.js](https://gulpjs.com/) - Automatize e aprimore seu fluxo de trabalho.
* [Babel](http://babeljs.io/) - O compilador de Javascript.
* [ESLint](https://eslint.org/) - Linter para código Javascript.
* [Stylus](http://stylus-lang.com/) - CSS exoressuvi, dinâmico e robusto.
* [Mocha](https://mochajs.org/) - Simples, flexivel e divertido.
* [Chai](http://chaijs.com/) - Biblioteca de asserção BDD/TDD.
* [Browserify](http://browserify.org/) - Browserify permite exigir ('módulos') no navegador agrupando todas as suas dependências.

## Desenvolvimento

Este projeto foi desenvolvido com muito <3 e Javascript.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
