# CaFeLUG Crypto Challenge

Diseñamos para la [Ekoparty](https://ekoparty.org) 12 (2016) un juego con desafíos criptográficos, y un framework que permite sumar puntos y determinar un ganador.

Este proyecto se denomina *CaFeLUG Crypto Challenge*.

# Frontend

El presente es exclusivo para la interfaz web.

Para la API dirigirse al repositorio [CaFeLUG/crypto-challenge-api](https://github.com/CaFeLUG/crypto-challenge-api).

## Estado del proyecto

**En desarrollo**.

### Hitos

- [x] Arquitectura API: boceto
- [ ] Documentación API
- [ ] Desarrollo API
- [ ] Prueba API
- [ ] Pentest API
- [x] Interfaz (single-page app): boceto

## Entorno de desarrollo

**1. Clonar este repositorio:**
>
```sh
git clone --depth 1 https://github.com/CaFeLUG/crypto-challenge-web.git ccc-app
cd ccc-app
```

**2. Instalar dependencias:**
>
```sh
npm install
```
En Arch Linux, instalar ciertas dependencias por separado puede resolver ['doPararell' freeze](https://github.com/npm/npm/issues/13782).
```sh
npm install webpack webpack-dev-server; npm install
```

**3. Desarrollar:**
>
```sh
npm run dev
```
[Anteceder el comando 'sudo' puede resolver algunos problemas.](https://docs.npmjs.com/getting-started/fixing-npm-permissions) 

>

**4. Compilar:**
>
```sh
npm run build
```

## Licencia

Este proyecto es libre bajo [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.html)+. Se considera que el autor del presente código es [CaFeLUG](http://cafelug.org.ar) y debe ser mencionado en obras derivadas (acorde la licencia). Opcionalmente, quienes aparezcan como Contribuidores de la [web](/CaFeLUG/crypto-challenge-web/graphs/contributors) o [API](/CaFeLUG/crypto-challenge-api/graphs/contributors) pueden ser mencionados como coautores.

## Licencia documentación
La documentación y otros recursos del estilo son libres bajo [GNU FDL v1.3](https://www.gnu.org/licenses/fdl-1.3.html)+. Se considera que el autor es [CaFeLUG](http://cafelug.org.ar) y debe ser mencionado en obras derivadas (acorde la licencia). Opcionalmente, quienes aparezcan como Contribuidores de la [web](/CaFeLUG/crypto-challenge-web/graphs/contributors) o [API](/CaFeLUG/crypto-challenge-api/graphs/contributors) pueden ser mencionados como coautores.

