### Fullstack API - Vizsgaremek
# **Édenkert faiskola** #

## **Gyümölcsfákat árusító webáruház adminisztrációs felülete**
<br>

---
# ***Dokumentáció***
<br>

## **1. Az alkalmazás célja**

Az alkalmazás egy gyümölcsfa csemetéket árusító webshop adminisztrációs felülete. Feladata, hogy belépés után hozzáférhetővé váljanak a webshop adatai és azokon lekérdezéseket, alapvető CRUD műveleteket végre tudjunk hajtani.

## **2. Az alkalmazás telepítése**

- Klónozni kell az adott GitHub repository tartalmát a célgépre.

  [GitHub](https://github.com/kvgabi4/vizsgaremek)
  
- Telepíteni kell az alkalmazás függőségeit az ```npm i``` paranccsal mind a *backend*, mind a *frontend* mappában.
- Telepíteni kell az Angular keretrendszert az ```npm i -g @angular/cli``` paranccsal, ha ez korábban még nem történt meg.
- A terminálon be kell lépni a *backend* mappába és futtatni az ```npm run build``` parancsot.

## **3. Az alkalmazás konfigurálása**

A _frontend/src/app/service/config.service.ts_ és a _backend/src/index.js_ állományban be kell állítani az API végpont elérési útvonalát: 

  ```http://localhost:3000```

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása.

El kell indítani a Docker Desktop alkalmazást.
A *backend* mappába belépve a terminálban ki kell adni az ```npm run dev``` parancsot.
(A *frontend* mappában a terminálban az ```npm start``` paranccsal indítható a frontend.)

A belépéshez egy érvényes e-mail-cím és jelszó szükséges.
  
  Egy érvényes példa:

- E-mail: ```vegso@gmail.com ```
- Jelszó: ```vegso```

## **5. A végpontok dokumentációja**

[Swagger](https://localhost:3000/api-docs)

```https://localhost:3000/api-docs```



## **6. Adminisztrátori szerepkör leírás:**  

[User Story](https://github.com/kvgabi4/vizsgaremek#readme)

```https://github.com/kvgabi4/vizsgaremek#readme```
