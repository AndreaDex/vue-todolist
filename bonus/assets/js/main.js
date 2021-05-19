/*
 *La nostra todo list avrá alcune tasks di default predefinite
 * L'utente puó inserire nuove tasks
 * Cliccando sulla "X" l'utente puó cancellare una task
 * Se non ci sono piu task nella lista, mostrate un messaggio    tipo "Nulla da fare"
 * Inoltre L'utente vuole poter modificare una task giá inserita
 * ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
 * Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */

const app = new Vue({
  el: "#app",
  data: {
    minCharact: 5,
    newQuest: "",
    journal: ["Kill Kikimore", "Kill Gryphon", "Kill Leshen"],
    doneQuest: ["Take money"],
    abandonedQuest: ["Stiges are too bad"],
  },
  methods: {
    addQuest() {
      if (this.newQuest.length >= this.minCharact) {
        this.journal.unshift(this.newQuest);
        this.newQuest = "";
      } else {
        alert("La quest deve avere almeno 5 caratteri");
      }
    },
    removeQuest(quest, index) {
      this.journal.splice(index, 1);
      this.abandonedQuest.push(quest);
    },
    completeQUest(quest, index) {
      this.journal.splice(index, 1);
      this.doneQuest.push(quest);
    },
    undoQuest(quest, index) {
      this.doneQuest.splice(index, 1);
      this.journal.push(quest);
    },
    deleteAllAbandoned() {
      let confirm = prompt(
        "Sei sicuro di voler eliminare tutte le quest abbandonate ? Conferma con si/no"
      );
      if (confirm === "si") {
        this.abandonedQuest.splice(0);
      }
    },
    retakeQuest(quest, index) {
      this.abandonedQuest.splice(index, 1);
      this.journal.push(quest);
    },
    questUpdate() {
      alert("La quest è stata aggiornata");
    },
  },
});

/* Bonus (opzionale)
Quando una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino" */
