## Para configurar cada proyecto

Cuando crees un proyecto de react que vivirá en el mundo de vtex, por favor basa tu proyecto en [hello-react-ts](https://github.com/grupo-exito-ecommerce/hello-react-ts) y además sigue las siguientes recomendaciones:

1. Cambiar `tsconfig` del proyecto por el de `hello-react-ts`.

2. Agregar `tsconfig-types` (esta en `hello-react-ts`).

3. Crear `index.ts` en raíz react (solo si otros proyectos aun no llaman ese index).

4. Agregar index.ts en el `vtexigniore` (solo si otros proyectos aun no llaman ese index).

```
*CUIDADO* react/index.ts *CUIDADO*

react/tsconfig-types.json
react/__mocks__
react/__tests__
react/tslint
react/sonar-project.properties
```

5. Agregar carpeta de types generada (se debe llamar igual al proyecto y se encuentra en la raíz de /react) al `gitignore`.

6. Agregar `.prettierrc`, `tslint.json`, librería para validar regla hooks (todos estos archivos se encuentran en `hello-react-ts`)

```
yarn add tslint-react-hooks
```

7. Corregir carpeta typings, borrar cosas innecesarias y tratar de llevar el siguiente formato:

```
typings:
│
│   files.d.ts
│   index.d.ts
│   global.d.ts (solo si vas usar declare global)
│
├───libs
│       index.d.ts
│       react-select.d.ts (crear archivos por librería, si hay más de un tipo de dicha librería, sino todo ponerlo en index.d.ts)
│
└───vtex
        index.d.ts
        vtex.store-components.d.ts (crear archivos por componente, si hay más de un tipo de dicho componente, sino todo ponerlo en index.d.ts)
```

### Para trabajar en la carpeta typings

Por favor seguir las siguientes reglas:

- Hay 2 carpetas propuestas libs y vtex y la raíz (podrían ser más pero con argumentos).

- La carpeta `libs` esta destinada a todos aquellos types relacionado con librerías de terceros que no cuenten con types,
  la mayor parte dichas librerías ya cuenta con sus propios types en el repositorio original o en el repositorio DefinitelyTyped en github.

- En `libs/index.d.ts` colocar solo `declare module 'nombre-de-tu-librería';` si quieres ser más especifico y definir más types de una librería
  como por ejemplo algo como esto:

  ```js
    declare module 'react-select/lib/components/containers' {
      export { ValueContainerProps };
    }
  ```

  En este caso es valido crear un nuevo archivo dentro de la carpeta `libs` con el nombre de tu librería, en el caso del ejemplo anterior crear `libs/react-select.d.ts`.

- La carpeta `vtex` esta destinada a todos los types relacionados con los proyectos de vtex, la mayoría se encuentran en [vtex-apps github](https://github.com/)vtex-apps y en [vtex github](https://github.com/vtex).

- La idea es que en la carpeta vtex agreguemos solo los types de proyectos que no se encuentren ya tipados en este repositorio,
  como por ejemplo el proyecto `vtex.render-runtime` el cual se debe definir manualmente en `vtex/index.d.ts` como
  `declare module 'vtex.render-runtime';` ya que este es bastante complicado generarle types automáticamente.

- Aplicar la regla #3 igualmente para el archivo `vtex/index.d.ts`.

8. Realizar link en vtex del proyecto y corregir errores.

9. Agregar script al package.json (yarn get-types) y ejecutarlo.

```json
"get-types": "rm -rf exito.${nombre proyecto} && tsc -p tsconfig-types.json --outDir exito.${nombre proyecto}"
```

10. Documentar cambios en `manifest` y `CHANGELOG`.

11. Instalar librería de tipos.

```
yarn add -D types-exito
```

## Si tienes alguna duda o mejora con lo propuesto, por favor no dudes en hablarlo con el equipo.
