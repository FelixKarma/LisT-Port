class Article {
    constructor(game_name, article_name, createur, date_creation, discussion) {
        this.game_name = game_name;
        this.article_name = article_name;
        this.createur = createur;
        this.date_creation = date_creation;
        this.discussion = discussion;
    }
}

class Discussion {
    constructor(expediteur, date_expedition, message) {
        this.expediteur = expediteur;
        this.date_expedition = date_expedition;
        this.message = message;
    }
}

const articles = [
    new Article('LOL', 'Cheaté le nouveau perso ?', 'Lea', '12/03/2023',
        [
            new Discussion("Lea", "12/03/2023 - 18h23", "Bonjour,il faut que je vous avoue un truc, j'ai vu les spell de millio je me suis vraiment dit que c'était broken : augmenter la ring en zone, une orange de gant de planque en zone aussi "),
            new Discussion("Erwan", "12/03/2023 - 19h06", "ouais non il y a de quoi avoir un petit peu peur mais à y réfléchir je me suis dit qu 'en fait c' était pas forcément si pété que ça  oui augmenter la range  ça peut être puissant mais ça dépend de combien "),
            new Discussion("Corentin", "12/03/2023 - 19h31", "ça dépend aussi combien de temps et puis c'est une nouvelle mécanique c'est sympa il y a des champions qui peuvent augmenter leurs propres range comme senna et kingdread avec leurs stack "),
            new Discussion("Lea", "12/03/2023 - 20h03", "ou kogmo avec son w, mais là donner de l 'arrange à ses alliés c 'est une première et ça je trouve ça cool ils arrivent encore à innover ryotte c 'est sympa et puis le kleinz de masse ça n 'existait pas non plus"),
            new Discussion("Erwan", "12/03/2023 - 20h07", "on a rien qui permet de kleinz han allier à part michael ce qui a un item de support ou q s s pour soi - même à la rigueur il y a le blackchild de morgana mais là on a carrément quelque chose qui permet enfin de sauver un allié qui s 'est mal positionné"),
            new Discussion("Corentin", "12/03/2023 - 22h37", "donc ça aussi c'est cool il faut juste voir le couldown qu 'est-ce que c' est le il est - ce que ça enlève aussi les knockup et puis faut voir la reine du truc aussi là c 'est genre un ultime amumu autour de lui donc ça veut dire qu 'il faut qu' il aille dans le danger pour pouvoir sauver un allié qui est potentiellement trop loin il peut pas le lancer à distance et aussi est - ce que si des stones il peut le lancer lui - même on sait pas encore donc avant qu 'il ne sorte je préfère ne pas me prononcer et puis il est tellement mignon que même s 'il est broken je lui en veux pas ")
        ]
    ),
    new Article('LOL', "Monter Diamant sur LOL", "Tom", "25/06/2022",
        [
            new Discussion("Tom", "25/06/2022 - 16h36", "? <br>Je dirais : <br>-Farming - <br>Vision de jeu - <br>Score de vision - <br>Mécanique micro - <br>Adapter son build en fonction des compo - <br>Positionnement en team fight <br>j 'ai oublié un truc ?"),
            new Discussion("Rexma", "25/06/2022 - 16h37", "-allumer l'écran <br>- brancher la souris <br>- brancher le clavier "),
            new Discussion("Moctar", "25/06/2022 - 16h38", "mettre de coté son égo"),
            new Discussion("Aymeric", "25/06/2022 - 16h49", "pfff"),
            new Discussion("Kermit", "25/06/2022 - 16h52", "(1,1,1) ça devrait suffire :("),
            new Discussion("Snkix", "25/06/2022 - 16h55", "jouer meta jouer scaling etre uwu mental shutdown jouer safe acheter des pink ne pas forcer les objectif"),
            new Discussion("Tom", "25/06/2022 - 17h02", "p***** mais les puceaux ça vous casse pas les couilles de parler en puceau ?"),
            new Discussion("Snkix", "25/06/2022 - 17h08", "je parle en langage jvc le golem en vrai tu baisses les yeux mon pote"),
            new Discussion("Romane", "25/06/2022 - 17h12", "facinant !"),
            new Discussion("Kaaris", "25/06/2022 - 17h27", '"UwU baisse les yeux UwU" <br><br>"Ici c\'est la bagarre"'),
            new Discussion("Snkix", "25/06/2022 - 17h30", "t'es génant à jouer la provoc devant ton écran UwU"),
            new Discussion("Rexma", "25/06/2022 - 17h31", "Bien farm <br>Connaitre les machups <br>Bien ward <br>S'adapter au niveau build <br>Regarder la map toute les 5 secondes <br>Et ne pas greed :ok:"),
            new Discussion("Moctar", "25/06/2022 - 17h33", "Raf des pinks"),
            new Discussion("Aymeric", "25/06/2022 - 17h36", "y'a besoin de rien, t'apprends un champion fort qui peut 1v9 (irelia par exemple) et tu explose ton matchup à chaque game tellement fort que c'et du 5v4, à 2 items tu vas au mid avec l'herald et tu finis la game gg"),
        ]
    ),
    new Article('Apex', "L'arme Némésis trop sur-côté ?", "Lou", "14/02/2023",
        [
            new Discussion("Lou", "14/02/2023 - 22h19", "On est d'accord,elle est ultra confortable a utilisé et bien violente mid-range"),
            new Discussion("Aymeric", "14/02/2023 - 22h57", "J'ai l'impression que c'est une hemlock énergétique quoi :(<br>Bon après j'avoue j'ai pas encore capté le delire de la barre qui se charge en bas ...<br>C'est quoi ça ?"),
            new Discussion("Rexma", "14/02/2023 - 23h09", "Plus tu tires, plus ça charge.<br>Plus ça charge, plus la cadence augmente. <br> Plus la cadence augmente, plus tu tues rapidement les ennemis. <br> Plus tu tues rapidement les ennemis, plus tes chances de victoire augmentent.<br>Plus tes chances de victoire augmentent, plus tes chances de victoire augmentent "),
            new Discussion("Kaaris", "14/02/2023 - 23h12", "Je mange mes couilles si dans 1 mois tout le monde ne la trouve pas absurde ,même au cac elle rivalise avec la car :rire: a distance y a moins de recul que la r301"),
            new Discussion("Hans", "14/02/2023 - 23h27", "OP je pense."),
            new Discussion("Rexma", "14/02/2023 - 23h33", "Ils auraient au moins dû empêcher de mettre un stabilisateur comme sur la Flat, là c'est débile"),
            new Discussion("Kaaris", "14/02/2023 - 23h38", "Ils ont complètement cracké j’ai l’impression ils jouent pas à leur jeu c’est pas possible mdrr <br>Nerf au prochain patch elle est juste broken c’est absurde"),
            new Discussion("Moctar", "15/02/2023 - 00h21", "Arme de Noob par excellence"),
            new Discussion("Timi", "15/02/2023 - 00h29", "Elle va se faire nerf violemment, les dégâts sont abusés (noel)"),
            new Discussion("Snkix", "15/02/2023 - 02h32", "Elle va être nerf avant je pense... <br>L 'arme est meilleure que la hemlock qui est dans le care package legendaire"),
            new Discussion("Lou", "15/02/2023 - 06h14", "Je vous trouve excessif,certe elle envoi du pâté et elle est sûrement la meilleure mid-range mais au CAC elle est moins bien qu'une flat même nerf et par rapport à la Hemlock,non elle n'est pas meilleur,les dégâts de la Hemlock sont monstrueux loin devant la Némésis par contre elle est bien moins stable que cette dernière et largement plus dure à jouer mais la différence de DPS est suffisamment importante pour les mettres au même niveau ou presque ,bien que je préfère la nemesis"),
            new Discussion("Snkix", "15/02/2023 - 08h34", "En degat pur la hemlock est au dessus certes, body : 23 tête : 40 jambes 17 <br>contre <br>body 17 tête 30 et jambes 13 <br>pour la nemesis <br>mais ce n'est pas suffisant :ok: <br>La nemesis a un rpm de 667 soit un dps de 189, la hemlock c'est 414 de rpm pour 159 de dps quand elle est dans le care package"),
            new Discussion("Romane", "15/02/2023 - 10h33", "Ça sera comme pour la Volt au début quand elle est sortie, ils vont la nerf dans un mois.<br>Elle est volontairement forte pour hyper la nouvelle saison.Perso je suis déçu du feeling de l'arme en vrai ça ressemble vachement à une Hemlock boosté.Je voulais du neuf même si pas cheated :/"),
            new Discussion("Rexma", "15/02/2023 - 11h11", "L'iron sight qui est super clean, plus besoin de viseur ! <br>Mais oui sa cadence et son recul seront nerf d 'ici 1 mois. En attendant let's play !"),
            new Discussion("Romane", "15/02/2023 - 11h29", "J'aime bien perso, et oui il est forte mais ils vont encore faire de la merde.<br>Ils ont dit qu'ils voulaient la mettre en concurrence avec la 301/Flat, déjà le nerf de la 301 (de 14 à 13) ne change rien puisque c'est surtout au niveau du recul qu'il faut faire quelque chose.<br>Sauf que du peu que j'ai joué (parti ranked) et malgré une Nemesis assez forte, les gens se jettent toujours encore sur la 301 et la Flat car l'une c'est l'easykill et l'autre reste la deuxième meilleur auto.<br>Dans mes parties j'étais 90% le seul de ma team à la jouer, les gens la pingé même, et en fight ça restait la troisième de nombre dans les assauts.<br>A confirmer aux prochaines parties.<br>Je sens venir le truc qu'ils vont trop la nerf au prochain patch, et vu que c'est une rafale, et qu'on est plus enclin à foutre des rafales à côté, elle va finir comme le Hemlock... oublier et retour sur une route sans fin 301/Flat qu'on parcours depuis une plombe."),
            new Discussion("Snkix", "15/02/2023 - 12h15", "La Hemlock est loin d'être oublié mon vdd , elle a toujours était jouer car très puissante "),
            new Discussion("Moctar", "15/02/2023 - 12h27", "Joué par 2% de la player base en effet"),
            new Discussion("Hans", "15/02/2023 - 13h05", "Le bruit qu'elle fait par contre : J'ai l'impression d'etre dans Star Wars"),
        ]
    ),
    new Article('Apex', "Notes de patch 13.4", "Paul", "22/03/2023",
        [
            new Discussion("Paul", "22/03/2023 - 12h01", "<a href='https://www.ggrecon.com/guides/league-of-legends-patch-13-4-full-patch-notes/'>patch 13.4</a> <br> Le nouveau patch va bientot sortir !"),
            new Discussion("Jacques", "22/03/2023 - 12h15", "Merci mec !")
        ]
    ),
    new Article('Smash', "Je participe à mon premier tournoi", "Nils", "21/03/2023",
        [
            new Discussion("Nils", "02/03/2023 - 08h06", "Je commence direct contre Naetoru: <br> J 'espère que la vaseline est comprise dans les lots de consolation"),
            new Discussion("Gabs", "02/03/2023 - 08h06", "Combien de joueurs ? <br>Pas la peine de stresser tout le monde s'attend à ce que tu perdes ce premier match. <br>Essaie de gagner un ou deux matchs en loser run ça sera déjà pas mal. <br>Je pense que le plus important c'est de rester calme. Les enjeux ne sont pas énormes en début de tournoi"),
            new Discussion("Mortimer", "02/03/2023 - 08h06", "Amuse toi, c'est l'essentiel"),
            new Discussion("Nils", "02/03/2023 - 08h06", "Merci pour les conseils :) <br>Il y a environ 70 participants , dont également Mezcaul et Léon"),
            new Discussion("Titouan", "02/03/2023 - 08h06", "N'y va pas"),
            new Discussion("Vladimir", "02/03/2023 - 08h06", "Le plus important c'est le stress physique, faut réussir à te contrôler.")

        ]
    ),
    new Article('Smash', "Wolf est un mauvais perso ?", "Luc", "27/03/2023",
        [
            new Discussion("Luc", "27/03/2023 - 12h15", "Perso je le trouve un peu claqué au sol mais quel est votre avis ?"),
            new Discussion("Romain", "27/03/2023 - 12h19", "Je ne sais pas je n'y joue pas, mais tu peux toujours demander à Chat GPT ;-)"),
            new Discussion("Chat GPT", "27/03/2023 - 12h20", "En tant que modèle de langage, je n'ai pas de préférence personnelle pour les personnages de jeux vidéo. Cependant, je peux te dire que Wolf est un personnage de Super Smash Bros. Ultimate qui est considéré comme un personnage de combat redoutable avec des mouvements rapides et puissants. Il a également la capacité d'utiliser ses attaques spéciales pour contrôler l'espace et mettre la pression sur ses adversaires. En fin de compte, le choix du personnage dépend des préférences et des styles de jeu de chaque joueur.")
        ]
    ),
]

const logo = document.getElementById('main_logo_up');
const div_discussion = document.getElementById('div-discussion');
let reponse;

if (document.location.href.includes('forum_article.html#')) {
    for (const article of articles) {
        let article_name = article.article_name.replace(/ /g, "_");
        let url = document.location.href.replace(/%C3%A9/gi, "é");
        url = url.replace(/%C3%B4/gi, "ô");
        url = url.replace(/%C3%A0/gi, "à");
        if (url.includes(article_name)) {
            document.title = `Forum - ${article.article_name}`;
            switch (article.game_name) {
                case "LOL":
                    logo.setAttribute('src', '../images/Logo LOL.png')
                    break;
                case "Apex":
                    logo.setAttribute('src', '../images/Logo Apex.png')
                    break;
                case "Smash":
                    logo.setAttribute('src', '../images/Logo Smash Blanc.png')
                    break;
                default:
                    break;
            }
            for (let i = 0; i < article.discussion.length;i++) {
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class", "card w-75 mx-auto my-4");
                newDiv.innerHTML = `
                    <div class = "card-header d-flex justify-content-between align-items-center" >
                        <h1 class="text-white">${article.article_name}</h1> 
                            <div>
                            <h3 class="text-white"> Date ${i == 0 ? article.date_creation : article.discussion[i].date_expedition}</h3> 
                            <h3 class="text-white">Par ${i == 0 ? article.date_creation : article.discussion[i].expediteur}</h3> 
                            </div> 
                    </div> 
                    <div class="card-body" >
                        <h4 class="firstLetterInCapital">${article.discussion[i].message}</h4> 
                    </div> 
                `;
                div_discussion.appendChild(newDiv)
            }
            reponse = true;
            break;
        }
    }
    if (!reponse) {
        document.location.href = "Page 404.html";

    }
} else {
    document.location.assign('404.html');

}