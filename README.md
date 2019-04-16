RR Client - Boilerplate
=======================

**Example ReactJS client side app**

- ReactJS
- React Router
- Redux
- Redux Saga
- SASS
- Axios HTTP client
- LinguiJS internationalisation
- JWT authentication
- ESLint
- EditorConfig
- WebPack
- Babel
- CoreJS polyfills

---

**Build & run**

Build & start development server with hot deployment

```
npm run start
```

Build for development:

```
npm run dev
```

Build for production:

```
npm run prod
```

---

**Some notes**

- Due to the current optimisation settings in Webpack of creating multiple chunks of files it is highly recommended to use HTTP/2. 
Otherwise there will be no benefits from using these optimisations. If you are forced to use HTTP/1 then consider disabling it.
- To analyse dependency and bundle size use [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer).
- `@lingui/macro` is actually a dev dependency but included as regular dependency in `package.json` to avoid eslint error triggered by 
`import/no-extraneous-dependencies`. The code does not seem to be included when building the final bundle.
