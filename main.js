
const prompt = require("prompt-sync")()

let mission = ""

console.log("Bonjour, tu viens de rentrer dans le monde fantastique de Darkheim ! Tu vas devoir faire des choix qui influent sur ton futur de nouvelle recrue")
mission = prompt("Choisis une des deux classes : combattant (C) ou mage (M)")
while (mission != "C" && mission != "M") {
    mission = prompt("J'ai dis :Choisis une des deux classes : combattant (C) ou mage (M)")
}
if (mission === "C") {
    mission = prompt("Tu as choisi la classe de combattant, tu vas donc aller protéger le peuple et le village, veux-tu rejoindre ta première mission ? (Oui) ou (Non)")
    while (mission != "Oui" && mission != "Non") {
        mission = prompt("Choisis une des réponses Oui ou Non")
    }
    if (mission === "Oui") {
        // mission = prompt("tu rejoins ta mission d'entrainement, mais tu te rends compte qu'il faut des combattants pour aller se battre pour protéger le village. Veux-tu y aller ? (Oui) ou (Non)")
        mission = prompt("Super, tu prouves que tu as la mentalité et le courage. Tu vois un enfant en détresse à droite, décides-tu d'aller l'aider ? (Oui) ou (Non) ")
        if (mission === "Oui") {
            mission = prompt("Tu as sauvé l'enfant ! Ta réputation augmente auprès des villageois et de tes supérieurs. Bravo tu as finit !")
        } else if (mission === "Non") {
            mission = prompt("Pas très gentil, tu te fais enfermer au cachot car tu as failli à ta mission... Rééssaye. ")
        }
    } else if (mission === "Non") {
        mission = console.log("???");
    }

} else if (mission === "M") {
    mission = prompt("Tu as choisi la classe de mage, tu vas donc protéger le royaume d'attaques possibles extérieures, veux-tu rejoindre ta première mission ? (Oui) ou (Non)")
    while (mission != "Oui" && mission != "Non") {
        mission = prompt("Choisit entre (Oui) ou (Non)")
    } if (mission === "Oui") {
        mission = prompt("Tu rejoins ta première mission, tu vas aider les troupes qui attaquent le château sur les tours, il y a deux chemins pour y arriver tu tournes à droite (D) ou à gauche (G) ?")
        if (mission === "D") {
            mission = prompt("t'as glissé, dommage, recommence")
        } else if (mission === "G") {
            mission = prompt("tu tombes sur un ennemi, tu l'attaques et tu gagnes !")
        }

    } else if (mission === "Non") {
        mission = prompt("???")

    }

} 
