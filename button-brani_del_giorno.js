// ==PREPROCESSOR==
// @name "StackBlur (text)"
// @import "%fb2k_component_path%helpers.txt"
// ==/PREPROCESSOR==


// Ottiene la data odierna in formato MM-DD
var today = new Date();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + today.getDate()).slice(-2);
var dateString = month + "-" + day;

// Crea una autoplaylist con il filtro "%date% HAS dataString"
function createAutoPlaylist() {
    var playlistName = "Brani del Giorno";
    var query = "%date% HAS " + dateString; 

    var playlistIndex = plman.FindPlaylist(playlistName);
    if (playlistIndex === -1) {
        plman.CreateAutoPlaylist(0, playlistName, query, "");
    } else {
        plman.RemovePlaylist(playlistIndex);
        plman.CreateAutoPlaylist(0, playlistName, query, "");
    }

    plman.ActivePlaylist = plman.FindPlaylist(playlistName);
}

// Esegui la funzione per creare l'autoplaylist
createAutoPlaylist();

// Aggiorna la playlist ogni 24 ore
window.SetInterval(function() {
    createAutoPlaylist();
}, 24 * 60 * 60 * 1000); // 24 ore in millisecondi


var g_font = JSON.stringify({
	Name : "Segoe UI",
	Size : 20,
	Weight : 80,
});

var text_to_draw = "Brani del Giorno";

function on_paint(gr) {
	//gr.Clear(RGB(0, 0, 0));
	var x = (window.Width - 300) / 2;
	var y = (window.Height - 300) / 2

	gr.WriteText(text_to_draw, g_font, RGB(255, 255, 255), x, y, 300, 300, 2, 2);
}