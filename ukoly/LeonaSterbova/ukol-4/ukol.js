/* 
menu.js/Třída Menu 
    - v konstruktoru url serveru
    - metoda pro získání kategorií ze serveru (js filter method() - 
    - metoda na vytvoření ul elementu menu - vrací element menu
    

post.js/Třída Post
    - v konstruktoru id, kategorii, titulek, 
    autor, datum, perex, obsah,  
    a url adresa obrázku, boolean hlavního článku

templatePost.js, templateMainPost.js, templateRandomPost.js

app.js/Třída App
    - v konstruktoru DOM element vyhledávání, DOM element menu, DOM element post
    
    - metoda pro adEventListener pro zobrazení článků dané kategorie v menu
            jako paramentr metoda pro vytvoření elementu Menu - iteruje každý li el.menu
        
    - metoda pro zobrazení hlavního článku s perexem podle bolean hodnoty 
    - metoda pro zobrazení dvou náhodných článků s perexem rozdílných kategorií
    - metoda, která zobrazí běžné články s perexem
    - metoda pro vyhledávání článků
    
    - metoda run() volá ostatní metody třídy app

index.js
    
    - instance třídy app
    - app.run()
*/