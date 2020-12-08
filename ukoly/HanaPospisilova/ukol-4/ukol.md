- na serveru články obsahují id, titulek, autor, datum, perex, text, kategorii, imgUrl, boolean pro hlavní článek (každá kategorie má jeden hlavní článek)

1. Třída Post (pro vytvoření jednoho článku)
   - do konstruktoru nadpis, autor, datum, perex a text

2. Třída RandomPost - podtřída třídy Post
   - do konstruktoru navíc kategorie a imgUrl

3. 3 ruzné templaty
   - hlavní článek - používá instanci Post
   - pro článek ve vybraných dvou - používá instanci RandomPost
   - pro normální článek ve výpisu - používá instanci Post

4. Třída App
   - do konstruktoru dostane DOM elementy sekcí, url na server,
   - metoda run vyrenderuje pomocí dalších metod hlavní článek, vybrané 2 články a další články a taky menu
   - další metody: showPosts - zobrazí výpis článků podle zadaného endpointu
     showMainPost - zobrazí hlavní článek (dotaz na server na příslušný boolean atribut)
     showRandomPosts - 2 náhodně vybrané články, každý z jiné kategorie
     metoda na vytvoření event listeneru na filtrování po kliku na položku menu

5. Třída Menu
   - do konstruktoru pole se všemi dostupnými kategoriemi (bude se dát dostat přímo ze serveru samostatně nebo musím nějak speciálně prolistovat všechny články a hledat v nich kategorii?)
   - metoda pro vytvoření elementu menu
   - kliknutí na položku by mělo zobrazit na stránce jen články dané kategorie (včetně hlavního a 2 náhodných)a ideálně skočit do výpisu článků