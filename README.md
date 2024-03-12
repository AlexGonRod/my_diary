# A diary with a spell checker (spanish)
This as an app for my daughter to write a diary tah check the spelling and marks in red color wherever she fails.

# Astro auth with Supabase
Template done using Astro and Tailwind that uses Supabase bot as an auth provider and a database.
This repo is based on [AlexGonRod/astro_auth_supabase](https://github.com/AlexGonRod/astro_auth_supabase)

## TO_DO
- [X] Fix responsive
- [] Fix form and make it sticky
- [] To connect another API to translate between languages
- [] Be able to make one request when unregistered
- [] Speech to text?
- [X] Change bun with pnpm because env variables don't work

### **DISABLED**
To use this template you can just clone this repo with Bun:
```
bunx create-astro@latest my-astro-project-using-bun --template AlexGonRod/astro_auth_supabase
```
and then:
```
bun install
```

**Use npm insted**


## 🧞 Commands using Bun

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Folder structure
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── middelware/
│   │   └── middelware.ts
│   └── pages/
│       └── index.astro
│       └── 404.astro
│       └── register.astro
│       └── signin.astro
│       └── signout.astro
│       └── api/auth/
│           └── register.ts
│           └── signin.ts
│           └── signout.ts
└── package.json
```

