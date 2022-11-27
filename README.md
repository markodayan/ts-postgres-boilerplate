# TypeScript API with PostgreSQL (using an ORM)

First of all, start PosgreSQL on your machine, on MacO you open the Postgres app and click start server.

Thereafter, open Postico and create a database with a name of your choice. (i called mine tspostgres)

```bash
tsc --init
```

Install debug and production start tools for TypeScript code

```bash
npm i ts-node ts-node-dev tsconfig typescript express typeorm pg reflect-metadata express
```

Install some types:

```bash
npm i -D @types/node @types/express
```

Add this to the `tsconfig.json` file (make sure to also set `"experimentalDecorators"` to `true` and `"emitDecoratorMetadata"` to true, you will also need to set the `"target"` to `"es6"` else the decorator functionality will not work):

```json
{
  "ts-node": {
    "files": true
  },
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "rootDir": "src",
    "outDir": "dist",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": false,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"],
      "@middleware/*": ["src/middleware/*"],
      "@services/*": ["src/services/*"],
      "@routes/*": ["src/routes/*"],
      "@controllers/*": ["src/controllers/*"],
      "@exchanges/*": ["src/api/exchanges/*"],
      "@utils/*": ["src/utils/*"],
      "@api/*": ["src/api/*"],
      "@lib/*": ["src/lib/*"],
      "@app": ["src/app/index.ts"],
      "@singleton/*": ["src/singleton/*"],
      "@constants/*": ["src/constants/*"]
    }
  },
  "exclude": ["junk"]
}
```

Add the following to your scripts in `package.json`:

```json
    "dev": "NODE_ENV=development npm run start:dev",
    "start:dev": "ts-node-dev -r tsconfig-paths/register ./src/index.ts",
    "build": "./node_modules/.bin/tsc",
    "debug": "ts-node -r tsconfig-paths/register"
```

Create an entities directory inside of the `src` folder.
