# Domácí úkol - povinný

<span style="font-size: 20px">
Tvým úkolem bude zvládnutí trojce různých API schémat.

A to konkrétně:
- Countries 🇦🇺 API - https://restcountries.eu/
- Star ⭐ Wars API - https://swapi.dev/documentation#start
- Employees 👩🏽‍💻 API - http://dummy.restapiexample.com/

V souboru index.html máš již připravené sekce, které budeš muset naplnit obsahem. Upravuj dle libosti.

Připravený kód:
 - <b>js/template.js</b> - funkce, která ti připraví šablonu  pro jeden záznam. Podobnou funkci ukazoval Luba v minulých lekcích. Můžete porovnat rozdíly a implementaci. Niance probereme na pondělní lekci.

 - <b>js/info.js</b> - šablona obsahuje sekci se třídou `country-info`. Seznam byl původně navržen pro omezený počet záznamů, ale nyní může obsahovat libovolný počet. Pokud má šablona obsahovat info seznam, lze pro funkci `template` využít poslední parametr `infoList`. Do parametru předávám pole objektů `Info`.

Každou sekci vyplň příslušnými daty za použití stejné šablony. Pokus se najít taková data, které můžeš v šabloně zobrazit (např. může se stát, že některé API nevrací obrázek).

<b>A co je nejdůležitejší.</b> Nebudeme si prasit (chrochro 🐷) index.js když máme webpack a známe importy/exporty. Každou API zabal do vlastní třídy ať je v tom pořádek :-)

🎉 Happy coding 🎉
</span>