/* La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Inoltre L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */

const app = new Vue({
  el: "#app",
  data: {
    newQuest: "",
    journal: ["Quest 1", "Quest 2", "Quest 3"],
  },
  methods: {
    addQuest() {
      this.journal.push(this.newQuest);
      this.newQuest = "";
    },
    removeQuest(index) {
      this.journal.splice(index, 1);
    },
  },
});
