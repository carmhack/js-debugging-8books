# Debugging Books App

Ciao collega, ho bisogno di te, sono disperato! Devo consegnare un progetto ma ho mille bug e non riesco a risolverli. Puoi provare a sistemarli prima che arrivi il BOSS?

## General
Avevo fretta e ho scritto tutto di getto. Sentiti libero di fare un po' di refactoring.

### Get Books
I libri non vengono visualizzati in pagina. All'avvio ho un alert di errore.

### Reading Time
Il tempo di lettura dei libri da tutti quei numeri decimali. Forse è meglio arrotondare.

### Rating
Il numero di stelle mostrate in base al rating è fuori scala. Dovrebbero essere 5 in totale, ma in alcuni casi ce ne sono 6.

### Covers
Di alcuni libri non viene mostrata l'immagine, eppure nella cartella c'è.

### Icons
Nella card del libro in alto a destra sono rappresentate delle icone che rappresentano il genere principale. Per alcuni libri però le icone non appaiono.

### Tags
Vedi tutti quegli `undefined` nelle card? Lì dovrebbero esserci i tags del libro, uno per ogni genere, con le label in italiano.