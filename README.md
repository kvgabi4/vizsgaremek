### Fullstack API - Vizsgaremek

## **Gyümölcsfákat árusító webáruház adminisztrációs felülete**
<br>

---
# ***User story - agilis felhasználói történet***
<br>

## 1. Főoldal - Dashboard

---
><u>***Navigáció***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon legyen egy menüsáv,<br>
**és ezáltal** arra az oldalra navigálhatok, amin éppen dolgozni szeretnék.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon vagyok,<br>
**akkor** jól értelmezhető menüpontokat lássak a teljes webshop minden oldalához,<br>
**majd** ezekre kattintva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Statisztikai adatok***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon láthassam az alábbi statisztikai adatokat:<br>
- az új megrendelések <br>
  - számáról<br>
  - összértékéről<br>
- a még nem teljesített kiszállítások <br>
  - számáról<br>
  - összértékéről<br>
- a vevők által még ki nem egyenlített számlák <br>
  - számáról<br>
  - összértékéről<br>
- az aktuális megrendelők számáról az alábbi bontásban:<br>
  - regisztrált<br>
  - nem regisztrált<br>
- az aktív termékek<br> 
  - számáról<br>
  - összértékéről<br>

**és ezáltal** egy átfogó képet kaphatok a webshop aktuális forgalmáról.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a főoldalon vagyok,<br>
**akkor** aktuális statisztikai adatokat látok a webshopról,<br>
**ezért** könnyen értékelhetem a webshop aktuális működését.

<br>

---
><u>***Grafikonok***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon a következő grafikonokat láthassam:<br>
- az új megrendelések <br>
  - számáról<br>
  - összértékéről<br><br>

  az alábbiak szerint: <br>
  - elmúlt 1 nap
  - elmúlt 1 hét
  - elmúlt 1 hónap

**és ezáltal** egy átfogó képet kaphatok a webshop megrendeléseinek időbeli alakulásáról.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a főoldalon vagyok,<br>
**akkor** grafikonokat láthatok a webshop megrendeléseiről időbeli bontásban,<br>
**ezért** könnyen értékelhetem a webshop aktuális megrendeléseinek időbeli alakulását.

<br>


## 2. Termék oldal

---
><u>***Navigáció***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon legyen egy menüsáv,<br>
**és ezáltal** arra az oldalra navigálhatok, amin éppen dolgozni szeretnék.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon vagyok,<br>
**akkor** jól értelmezhető menüpontokat lássak a teljes webshop minden oldalához,<br>
**majd** ezekre kattintva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Lista***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon listázva láthassam az összes terméket a következő adatokkal:<br>
- id
- megnevezés
- kategória
- ár
- aktuális-e
- kép (ha van)
- rövid leírás

**és ezáltal** a webshop összes terméke elérhető számomra.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a termékoldalon vagyok,<br>
**akkor** a webáruház összes termékét láthatom,<br>
**ezért** minden termék adatát meg tudom nézni.

<br>

---
><u>***Új adat***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** új terméket tudjak felvenni a meglévők mellé<br>
**és ezáltal** a termékek listája bővíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a termékoldalon egy gombra kattintok,<br>
**akkor** egy új termék felvitelére szolgáló űrlap jelenjen meg,<br>
**ahol**  <br>- az új termék minden adata rögzíthető,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Módosítás***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a meglévő termékek adatait tudjam módosítani<br>
**és ezáltal** a termékek adatai frissíthetők, karbantarthatók legyenek.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a termékoldalon egy termékhez tartozó frissítő gombra kattintok,<br>
**akkor** egy űrlapon jelenjenek meg a termék adatai,<br>
**ahol**  <br>- a termék minden adata módosítható,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek, <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Törlés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** egy kiválasztott terméket tudjak törölni<br>
**és ezáltal** a termékek listája szűkíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a termékoldalon egy termékhez tartozó törlő gombra kattintok,<br>
**akkor** egy megerősítő üzenet jelenjen meg, hogy valóban törölni szereném-e a terméket,<br>
**majd**  <br>- véglegesen törölhessem a terméket az adatbázisból egy törlési gombra kattintva vagy,<br>
          - visszavonhassam a törlési szándékomat egy visszavonó gombra kattintva.

<br>

---
><u>***Szűrés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a termékek között tudjak keresni<br>
**és ezáltal** szűrni a megjelenő termékek listáját.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. megnevezés, kategória, ár...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a termékek jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

---
><u>***Rendezés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a termékeket tudjam rendezni a különböző adataik alapján (pl. megnevezés, kategória, ár...)<br>
**és ezáltal** csökkenő vagy növekvő sorrendbe állítani őket.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. megnevezés, kategória, ár...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a termékek jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

## 3. Vásárlói oldal
---
><u>***Navigáció***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon legyen egy menüsáv,<br>
**és ezáltal** arra az oldalra navigálhatok, amin éppen dolgozni szeretnék.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon vagyok,<br>
**akkor** jól értelmezhető menüpontokat lássak a teljes webshop minden oldalához,<br>
**majd** ezekre kattintva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Lista***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon listázva láthassam az összes vásárlót a következő adatokkal:<br>
- id
- név
- számlázási cím
- szállítási cím
- e-mail cím
- telefonszám
- regisztrált-e
- kuponok értéke
- eddigi rendelések száma

**és ezáltal** a webshop összes vásárlója elérhető számomra.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a vásárlói oldalon vagyok,<br>
**akkor** a webáruház összes vevőjét láthatom,<br>
**ezért** minden vásárló adatát meg tudom nézni.

<br>

---
><u>***Új adat***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** új vásárlót tudjak felvenni a meglévők mellé<br>
**és ezáltal** a vásárlók listája bővíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a vásárlói oldalon egy gombra kattintok,<br>
**akkor** egy új vásárló felvitelére szolgáló űrlap jelenjen meg,<br>
**ahol**  <br>- az új vásárló minden adata rögzíthető,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek <br>
          - visszanavigálhatok a termékoldalra.
          
<br>

---
><u>***Módosítás***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a meglévő vásárlók adatait tudjam módosítani<br>
**és ezáltal** a vásárlók adatai frissíthetők, karbantarthatók legyenek.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a  vásárlói oldalon egy vásárlóhoz tartozó frissítő gombra kattintok,<br>
**akkor** egy űrlapon jelenjenek meg a vásárló adatai,<br>
**ahol**  <br>- a vásárló minden adata módosítható,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek, <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Törlés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** egy kiválasztott vásárlót tudjak törölni<br>
**és ezáltal** a vásárlók listája szűkíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a vásárlói oldalon egy vásárlóhoz tartozó törlő gombra kattintok,<br>
**akkor** egy megerősítő üzenet jelenjen meg, hogy valóban törölni szereném-e a vásárlót,<br>
**majd**  <br>- véglegesen törölhessem a vásárlót az adatbázisból egy törlési gombra kattintva vagy,<br>
          - visszavonhassam a törlési szándékomat egy visszavonó gombra kattintva.

<br>

---
><u>***Szűrés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a vásárlók között tudjak keresni<br>
**és ezáltal** szűrni a megjelenő vásárlók listáját.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. név, cím, telefonszám...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a vásárlók jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

---
><u>***Rendezés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a vásárlókat tudjam rendezni a különböző adataik alapján (pl. név, cím, telefonszám...)<br>
**és ezáltal** csökkenő vagy növekvő sorrendbe állítani őket.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. név, cím, telefonszám...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a vásárlók jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>


## 4. Megrendelés adatok
---
><u>***Navigáció***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon legyen egy menüsáv,<br>
**és ezáltal** arra az oldalra navigálhatok, amin éppen dolgozni szeretnék.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon vagyok,<br>
**akkor** jól értelmezhető menüpontokat lássak a teljes webshop minden oldalához,<br>
**majd** ezekre kattintva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Lista***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon listázva láthassam az összes megrendelést a következő adatokkal:<br>
- id
- vevő azonosítója
- termék azonosítója
- ár
- státusz (teljesített, folyamatban, visszavont)

**és ezáltal** a webshop összes megrendelése elérhető számomra.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a megrendelői oldalon vagyok,<br>
**akkor** a webáruház összes megrendelését láthatom,<br>
**ezért** minden megrendelés adatát meg tudom nézni.

<br>

---
><u>***Új adat***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** új megrendelést tudjak felvenni a meglévők mellé<br>
**és ezáltal** a megrendelők listája bővíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a megrendelői oldalon egy gombra kattintok,<br>
**akkor** egy új megrendelő felvitelére szolgáló űrlap jelenjen meg,<br>
**ahol**  <br>- az új megrendelő minden adata rögzíthető,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Módosítás***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a meglévő megrendelők adatait tudjam módosítani<br>
**és ezáltal** a megrendelők adatai frissíthetők, karbantarthatók legyenek.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a  megrendelői oldalon egy megrendelőhöz tartozó frissítő gombra kattintok,<br>
**akkor** egy űrlapon jelenjenek meg a megrendelő adatai,<br>
**ahol**  <br>- a megrendelő minden adata módosítható,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek, <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Törlés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** egy kiválasztott megrendelést tudjak törölni<br>
**és ezáltal** a megrendelők listája szűkíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a megrendelői oldalon egy megrendelőhöz tartozó törlő gombra kattintok,<br>
**akkor** egy megerősítő üzenet jelenjen meg, hogy valóban törölni szereném-e a megrendelést,<br>
**majd**  <br>- véglegesen törölhessem a megrendelést az adatbázisból egy törlési gombra kattintva vagy,<br>
          - visszavonhassam a törlési szándékomat egy visszavonó gombra kattintva.

<br>

---
><u>***Szűrés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a megrendelők között tudjak keresni<br>
**és ezáltal** szűrni a megjelenő megrendelők listáját.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. név, cím, telefonszám...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a megrendelők jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

---
><u>***Rendezés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a megrendelőket tudjam rendezni a különböző adataik alapján (pl. név, cím, telefonszám...)<br>
**és ezáltal** csökkenő vagy növekvő sorrendbe állítani őket.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. név, cím, telefonszám...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a megrendelők jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

## 5. Számla adatok
---
><u>***Navigáció***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon legyen egy menüsáv,<br>
**és ezáltal** arra az oldalra navigálhatok, amin éppen dolgozni szeretnék.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon vagyok,<br>
**akkor** jól értelmezhető menüpontokat lássak a teljes webshop minden oldalához,<br>
**majd** ezekre kattintva a megfelelő oldal töltődjön be a böngészőben.

<br>

---

><u>***Lista***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** az oldalon listázva láthassam az összes számlát a következő adatokkal:<br>
- id
- megrendelés azonosítója
- ár
- státusz (új, fizetett)

**és ezáltal** a webshop összes számlája elérhető számomra.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a számla oldalon vagyok,<br>
**akkor** a webáruház összes számláját láthatom,<br>
**ezért** minden számla adatát meg tudom nézni.

<br>

---
><u>***Új adat***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** új számlát tudjak felvenni a meglévők mellé<br>
**és ezáltal** a számlák listája bővíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a számla oldalon egy gombra kattintok,<br>
**akkor** egy új számla felvitelére szolgáló űrlap jelenjen meg,<br>
**ahol**  <br>- az új számla minden adata rögzíthető,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Módosítás***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a meglévő számlák adatait tudjam módosítani<br>
**és ezáltal** a számlák adatai frissíthetők, karbantarthatók legyenek.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a számla oldalon egy számlához tartozó frissítő gombra kattintok,<br>
**akkor** egy űrlapon jelenjenek meg a számla adatai,<br>
**ahol**  <br>- a számla minden adata módosítható,<br>
          - a feladat végeztével az adatok az adatbázisba mentődnek, <br>
          - visszanavigálhatok a termékoldalra.

<br>

---
><u>***Törlés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** egy kiválasztott számlát tudjak törölni<br>
**és ezáltal** a számlák listája szűkíthető legyen.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** a számla oldalon egy számlához tartozó törlő gombra kattintok,<br>
**akkor** egy megerősítő üzenet jelenjen meg, hogy valóban törölni szereném-e a számlát,<br>
**majd**  <br>- véglegesen törölhessem a számlát az adatbázisból egy törlési gombra kattintva vagy,<br>
          - visszavonhassam a törlési szándékomat egy visszavonó gombra kattintva.

<br>

---
><u>***Szűrés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a számlák között tudjak keresni<br>
**és ezáltal** szűrni a megjelenő számlák listáját.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. id, ár, státusz...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a számlák jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

---
><u>***Rendezés***</u><br>

**Adminisztrátorként** <br>
**azt szeretném, hogy** a számlákat tudjam rendezni a különböző adataik alapján (pl. id, ár, státusz...)<br>
**és ezáltal** csökkenő vagy növekvő sorrendbe állítani őket.<br>

><u>*Elfogadási kritérium:*</u><br>
**Amikor** az oldalon egy listából kiválasztom, hogy milyen adat alapján szeretnék szűrni (pl. id, ár, státusz...),<br>
**akkor** egy mezőben megadhassak egy értéket (egy kulcsszót)<br>
**majd** csak azok a számlák jelenjenek meg, amelyekre a megadott szűrési érték illik.

<br>

## További projektadatok
---

| Projektmegvalósítás |   |
| :------------ |:---------------:|
| prioritás      | magas |
| projekt időtartama  | 10 hét  |

**További fejlesztési lehetőségek**
- A listázási oldalakon lapozó készítése.
- Hibaüzenetek megjelenítése hibás adatmegadás esetén az űrlapoknál (validálás).
- Lista vagy kártyanézet.
- A főoldalon további hasznos információk megjelenítése.
- A listaoldalakon az adatok sorrendjének átrendezhetősége.
- A listaoldalakon összegzések elhelyezése.