RR Client - Boilerplate
=======================

**Example ReactJS client side app**

- ReactJS
- Redux
- Redux Saga
- Authentication with JWT
- SASS
- Axios HTTP client
- ESLint
- EditorConfig
- WebPack

---

**Build & run**

Build & start development server with hot deployment

```
npm start
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

**Notes**

- `@lingui/macro` is actually a dev dependency but included as regular dependency in `package.json` to avoid eslint error triggered by 
`import/no-extraneous-dependencies`. The code does not seem to be included when building the final bundle.
