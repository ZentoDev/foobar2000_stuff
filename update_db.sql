--req: SQLite Utilities

-- 1. Svuotare la tabella esistente
DELETE FROM media;


-- 2. Ripopolare la tabella con i metadati aggiornati della libreria

INSERT INTO media (path, artist, artista_album, album, title, date, genre, length)

SELECT 
    path, 
    artist, 
    COALESCE([%album artist%], ''), 
    album, 
    COALESCE([%title%], ''), 
    date, 
    genre, 
    length
FROM MediaLibrary;
