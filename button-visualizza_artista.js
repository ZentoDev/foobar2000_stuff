// ==PREPROCESSOR==
// @name "StackBlur (text)"
// @import "%fb2k_component_path%helpers.txt"
// ==/PREPROCESSOR==


function on_mouse_lbtn_up(x, y) {
    // Ottieni il nome dell'artista dalla playlist view
    var playlistIndex = plman.ActivePlaylist; // Ottieni l'indice della playlist attiva
    var selectedItems = plman.GetPlaylistSelectedItems(playlistIndex); // Ottieni gli elementi selezionati nella playlist
    if (selectedItems.Count > 0) { // Verifica se sono presenti elementi selezionati
        var metahandle = selectedItems.GetItem(0); // Prendiamo solo il primo elemento selezionato
        var metadata = metahandle.GetFileInfo();

        var artistName = "";
        for (var i = 0; i < metadata.MetaCount; i++) {
            if (metadata.MetaName(i).toUpperCase() === "ARTIST") {
                artistName = metadata.MetaValue(i, 0); // Ottieni il nome dell'artista
                break;
            }
        }
		
		
		if(plman.GetPlaylistName(0).indexOf("Brani di") == 0) {   // Otterrà il nome della prima playlist
		     plman.RemovePlaylist(0);
		 }
		 

        // Esegui la ricerca dei brani dell'artista
        if (artistName !== "") {
            var query = "%artist% HAS " + artistName; // Costruisci la query di ricerca
            var playlist = plman.CreateAutoPlaylist(0, "Brani di " + artistName, query); // Crea una nuova playlist con il nome dell'artista
            plman.ActivePlaylist = 0; // La nuova playlist viene messa in primo piano
		}
    }
}


var g_font = JSON.stringify({
	Name : "Segoe UI",
	Size : 20,
	Weight : 80,
});

var text_to_draw = "Visualizza artista";

function on_paint(gr) {
	//gr.Clear(RGB(0, 0, 0));
	var x = (window.Width - 300) / 2;
	var y = (window.Height - 300) / 2

	gr.WriteText(text_to_draw, g_font, RGB(255, 255, 255), x, y, 300, 300, 2, 2);
}