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
    new Article('LOL', 'New champ broken ?', 'Lea', '12/03/2023',
        [
            new Discussion("Lea", "12/03/2023 - 18h23", "Hello, I need to admit something, I saw Millio's spells I really feel like it's fucking broken : increasing range in AOE, a gankplank orange also in AOE WTF is that !"),
            new Discussion("Erwan", "12/03/2023 - 19h06", "yep, there is stuff to be afraid of for sure. But when you think about it,that's not that broken at all. Ok increasing range is powerful but it all depend at what degree"),
            new Discussion("Corentin", "12/03/2023 - 19h31", "it also depends how long and then it's a new mechanic it's nice there are champions who can increase their own range like senna and kingdred with their stack "),
            new Discussion("Lea", "12/03/2023 - 20h03", "or kog'maw with his w, but here giving some convenience to his allies is a first and that I think is cool they still manage to innovate riot it's nice and then the mass cleanse didn't existed neither"),
            new Discussion("Erwan", "12/03/2023 - 20h07", "we have nothing that allows cleanse an ally apart from mickael's which has a support item or qss for oneself at a pinch there is morgana's blacksheild but here we have something that finally allows us to save an ally who got in the wrong position"),
            new Discussion("Corentin", "12/03/2023 - 22h37", "so that too is cool you just have to see the cooldown what is the he is - does that also remove the knockups and then you have to see the queen of the trick also there it's like an ultimate amumu around him so that means he has to go into danger to be able to save an ally who is potentially too far away he can't throw it from a distance and also if stones he can throw it himself - even we don't know yet so before it comes out I prefer not to comment and then it's so cute that even if it's broken I don't blame him ")
        ]
    ),
    new Article('LOL', "Grind to diamond LOL", "Tom", "25/06/2022",
        [
            new Discussion("Tom", "25/06/2022 - 16h36", "I would say : <br>-Farming - <br>Game sense - <br>Vision score - <br>Micro mechanics - <br>Adaptability - <br>Positioning in fights <br>did I forgot something ?"),
            new Discussion("Rexma", "25/06/2022 - 16h37", "-Turn on the screen <br>- plug the mouse <br>- and the keyboard "),
            new Discussion("Moctar", "25/06/2022 - 16h38", "put your ego on the side"),
            new Discussion("Aymeric", "25/06/2022 - 16h49", "pfff"),
            new Discussion("Kermit", "25/06/2022 - 16h52", "(1,1,1) that will do :("),
            new Discussion("Snkix", "25/06/2022 - 16h55", "Play the scaling meta, be UwU mental breakdown, play safe, by pinks and don't force objectives"),
            new Discussion("Tom", "25/06/2022 - 17h02", "F*** man, you dam virgins and your 'UwU' I swear to god"),
            new Discussion("Snkix", "25/06/2022 - 17h08", "Stfu man, stay down"),
            new Discussion("Romane", "25/06/2022 - 17h12", "facinating !"),
            new Discussion("Kaaris", "25/06/2022 - 17h27", '"UwU stay down UwU" <br><br>"here it\'s fight club"'),
            new Discussion("Snkix", "25/06/2022 - 17h30", "You are cringe to do the man behind the screen"),
            new Discussion("Rexma", "25/06/2022 - 17h31", "Be good forehead"),
            new Discussion("Moctar", "25/06/2022 - 17h33", "Bro buy pinks"),
            new Discussion("Aymeric", "25/06/2022 - 17h36", "@Rexma is true, If you good you Monte, so ta g***** gros bouf*** !"),
        ]
    ),
    new Article('Apex', "Nemesis overrated ?", "Lou", "14/02/2023",
        [
            new Discussion("Lou", "14/02/2023 - 22h19", "We agree, it is ultra comfortable to use and very violent mid-range"),
            new Discussion("Aymeric", "14/02/2023 - 22h57", "I feel like it's an energy hemlock :(<br>Well after I admit I have not yet captured the delirium of the bar that loads at the bottom...<br>what is that ?"),
            new Discussion("Rexma", "14/02/2023 - 23h09", "The more you shoot, the more it load.<br>The more it load, the more the firing rate increase. <br>and the more you do kills. <br> The faster you kill enemies, the greater your chances of victory..<br>The more your chances of victory increase, the more your chances of victory increase "),
            new Discussion("Kaaris", "14/02/2023 - 23h12", "Eat my fucking c*** if next month that's not nerfed"),
            new Discussion("Hans", "14/02/2023 - 23h27", "Two Words 'Over Powered' "),
            new Discussion("Rexma", "14/02/2023 - 23h33", "They should have at least prevented putting a stabilizer like on the Flat, that's stupid"),
            new Discussion("Kaaris", "14/02/2023 - 23h38", "They completely out of there mind, I have the impression they don't play their game it's not possible lol <br>Nerf next patch it's just broken it's absurd"),
            new Discussion("Moctar", "15/02/2023 - 00h21", "Noob noob noob weapon, AutoNoob 2.0 ?????"),
            new Discussion("Timi", "15/02/2023 - 00h29", "She gotta get nerfed for sure"),
            new Discussion("Snkix", "15/02/2023 - 02h32", "Yes agreed"),
            new Discussion("Lou", "15/02/2023 - 06h14", "I find you excessive, certainly it sends the block and it is surely the best mid-range but at the CAC it is worse than a flat with the same nerf and compared to the Hemlock, no it is not better, the damage of the Hemlock are monstrous far ahead of the Nemesis on the other hand it is much less stable than the latter and much harder to play but the difference in DPS is significant enough to put them at the same level or almost, although I prefer the nemesis"),
            new Discussion("Snkix", "15/02/2023 - 08h34", "In pure damage the hemlock is certainly above, body: 23 head: 40 legs 17 <br>against <br>body 17 head 30 and legs 13 <br>for the nemesis <br>but it's not enough: ok : <br>The nemesis has a rpm of 667 or a dps of 189, the hemlock is 414 rpm for 159 dps when it is in the care package"),
            new Discussion("Romane", "15/02/2023 - 10h33", "It'll be like the Volt at the start when it came out, they'll nerf it in a month.<br>It's deliberately strong for the new season. Personally, I'm disappointed with the feeling of the weapon in real life, it really looks like a boosted Hemlock. I wanted new even if not cheated :/"),
            new Discussion("Rexma", "15/02/2023 - 11h11", "L'iron sight which is super clean, no need for a viewfinder! <br>Yes, its pace and its recoil will be nerfed within 1 month. Anyway let's play !"),
            new Discussion("Romane", "15/02/2023 - 11h29", "That was way to long to translate so I gave up there."),
            new Discussion("Snkix", "15/02/2023 - 12h15", "What you talking about translation ??? I don't get it"),
            new Discussion("Moctar", "15/02/2023 - 12h27", "Me neither, they must be kinda stupid tbh"),
            new Discussion("Hans", "15/02/2023 - 13h05", "The noise it makes on the other hand: I have the impression of being in Star Wars"),
        ]
    ),
    new Article('Apex', "Patch note 13.4", "Paul", "22/03/2023",
        [
            new Discussion("Paul", "22/03/2023 - 12h01", "<a href='https://www.ggrecon.com/guides/league-of-legends-patch-13-4-full-patch-notes/'>patch 13.4</a> <br> The upcoming patch note !"),
            new Discussion("Jacques", "22/03/2023 - 12h15", "Thanks man !")
        ]
    ),
    new Article('Smash', "I got into my first Smash tourney", "Nils", "21/03/2023",
        [
            new Discussion("Nils", "02/03/2023 - 08h06", "Dammit I start right away against Naetoru: <br> Hopefuly vasoline is part of the loser price"),
            new Discussion("Gabs", "02/03/2023 - 08h06", "How many players ? <br>No need to stress out, none excpet you to win your first match. <br>Just try to win one or two matches in loser run that will already be something. <br>Staying calm is the most important to me."),
            new Discussion("Mortimer", "02/03/2023 - 08h06", "Enjoy yourself first, and you'll see for the rest"),
            new Discussion("Nils", "02/03/2023 - 08h06", "Thanks for your tips :) <br>There are around 70 concurrents , in which are Mezcaul and Léon"),
            new Discussion("Titouan", "02/03/2023 - 08h06", "Don't go dude"),
            new Discussion("Vladimir", "02/03/2023 - 08h06", "сука блять, иди нахуй!")

        ]
    ),
    new Article('Smash', "Wolf really that bad ?", "Luc", "27/03/2023",
        [
            new Discussion("Luc", "27/03/2023 - 12h15", "imo wolf kinda suck but what you think about it ?"),
            new Discussion("Romain", "27/03/2023 - 12h19", "I don't know I don't play him, but you always can ask Chat GPT ;-)"),
            new Discussion("Chat GPT", "27/03/2023 - 12h20", "As an AI, I have no personnal preferences for characters in video games. However, I can tell that Wolf is a Super Smash Bros. Ultimate character considered as a character with powerful moves. He also got the possibility to use his special moves to control the battle and also to put presure on his oponnent. At the end, character choice depend on preferences of the player.")
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
                            <h3 class="text-white">By ${i == 0 ? article.date_creation : article.discussion[i].expediteur}</h3> 
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