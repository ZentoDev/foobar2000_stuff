--Seleziona brani usciti nell'ultima settimana in un qualsiasi anno
--Il componente sql tree può eseguire questa query e creare una playlist nella sezione "Action"-"Send to target playlist"-nome pl
--req: SQLite Utilities, SQL Tree

SELECT path, artist, [%album artist%], album, title, date, genre, length

FROM MediaLibrary

WHERE 
  (strftime('%m-%d', date) BETWEEN strftime('%m-%d', 'now', '-6 days') 
  
AND strftime('%m-%d', 'now'))


ORDER BY 
  
substr(date, 6, 5) DESC,   -- Ordina per mese e giorno (MM-DD)
[%album artist%] ASC, 
tracknumber ASC