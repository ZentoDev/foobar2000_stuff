--Select tracks released in the same week in any year
--The SQL Tree component can execute this query and create a playlist in the 'Action' section → 'Send to target playlist' → [playlist name]
--req: SQLite Utilities, SQL Tree

SELECT path, artist, [%album artist%], album, title, date, genre, length, discnumber

FROM MediaLibrary

WHERE 
  (strftime('%m-%d', date) BETWEEN strftime('%m-%d', 'now', '-6 days') 
  
AND strftime('%m-%d', 'now'))


ORDER BY 
  
substr(date, 6, 5) DESC,   -- Sort by month and day (MM-DD)
[%album artist%] ASC, 
album ASC,  
discnumber ASC,
tracknumber ASC