# JavaScript Debugging
L'idea alla base di questa repo è permettere ai beginner di JavaScript (o anche a chi è più pratico) di mettersi alla prova con dei bug fix su un codice che non hanno scritto! Se l'idea ti piace fammelo sapere con una stella! <3
## 8Books App
Ciao collega, ho bisogno di te, sono disperato! Devo consegnare un progetto ma ho mille bug e non riesco a risolverli. Puoi provare a sistemarli prima che arrivi il BOSS?

> Avevo fretta e ho scritto tutto di getto. Sentiti libero di fare refactoring.

### Avviare il progetto
Il progetto è una semplice pagina HTML a cui è collegato un file CSS e un file JS. Puoi aprirla su qualsiasi browser. Per il *server*, invece, ti basta lanciare da terminale `npm run server`. L'API sarà disponibile su `localhost:3000/books`.

### Bug Fix
| Title | Description |
| ----------- | ----------- |
| Get Books | I libri non vengono visualizzati in pagina. All'avvio ho un alert di errore. |
| Reading Time | Il tempo di lettura dei libri mostra tutti quei numeri decimali. Forse è meglio arrotondare. |
| Rating | Su alcuni libri vengono mostrate 6 stelle, ma dovrebbero essercene 5. |
| Covers | Di alcuni libri non viene mostrata l'immagine, eppure nella cartella c'è. |
| Icons | Su alcuni libri non viene mostrata l'icona del genere. | 
| Tags | Vedi tutti quelle scritte `undefined`? Lì dovrebbero esserci i tags del libro, uno per ogni genere, con le label in italiano. |