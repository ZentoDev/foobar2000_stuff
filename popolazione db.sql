-- 1. Creazione della tabella 'media' includendo artista, artista_album e album
CREATE TABLE IF NOT EXISTS media (

     path TEXT,
 
    artist TEXT,
 
    artista_album TEXT,
 
    album TEXT,
 
    title TEXT,
 
    date TEXT,
 
    genre TEXT,
 
    length INTEGER

);


-- 2. Popolamento della tabella con i metadati della libreria
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
