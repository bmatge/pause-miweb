/**
 * Base de données de questions pour Pause Miweb
 *
 * Types de questions :
 * - "mcq"  : Choix multiples (options + answer = index 0-based)
 * - "free" : Réponse libre (answers = tableau de réponses acceptées)
 * - "yesno": Vrai ou Faux (answer = "oui" | "non")
 *
 * Catégories : casse-tete, actualites, fakenews, celebrites, geek, science, histoire
 */

const QUESTIONS_DB = [
    // ═══════════════════════════════════════
    // 🧩 CASSE-TÊTE (devinettes, énigmes, pièges)
    // ═══════════════════════════════════════
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis toujours devant toi mais tu ne peux jamais me voir. Que suis-je ?",
        answers: ["le futur","l'avenir","futur","avenir"],
        explanation: "Le futur est toujours devant nous, mais on ne peut jamais le voir !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Plus je sèche, plus je suis mouillée. Que suis-je ?",
        answers: ["une serviette","serviette","la serviette"],
        explanation: "La serviette sèche ce qu'elle touche mais absorbe l'eau !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je fais le tour de la maison sans jamais bouger. Que suis-je ?",
        answers: ["le mur","mur","les murs","un mur"],
        explanation: "Le mur fait tout le tour de la maison sans jamais se déplacer !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je commence la nuit et je finis le matin. Que suis-je ?",
        answers: ["la lettre n","n","lettre n"],
        explanation: "La lettre N commence « nuit » et finit « matin » !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "On me trouve une fois dans la minute, deux fois dans le moment, mais jamais dans cent ans. Que suis-je ?",
        answers: ["la lettre m","m","lettre m"],
        explanation: "La lettre M apparaît 1 fois dans « minute », 2 fois dans « moment », et 0 fois dans « cent ans »."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Plus on en enlève, plus c'est grand. Qu'est-ce que c'est ?",
        answers: ["un trou","trou","le trou"],
        explanation: "Plus on creuse un trou, plus il est grand !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis plein de trous mais je retiens l'eau. Que suis-je ?",
        answers: ["une eponge","eponge","l'eponge"],
        explanation: "L'éponge est pleine de trous mais absorbe et retient l'eau !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je peux voyager autour du monde en restant dans un coin. Que suis-je ?",
        answers: ["un timbre","timbre","le timbre"],
        explanation: "Un timbre-poste voyage dans le coin d'une enveloppe autour du monde !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Qu'est-ce qui monte et qui descend sans bouger ?",
        answers: ["la temperature","temperature","un escalier","escalier"],
        explanation: "La température et l'escalier montent et descendent sans se déplacer."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis la seule chose qu'on peut casser sans la toucher. Que suis-je ?",
        answers: ["une promesse","promesse","le silence","silence"],
        explanation: "On peut casser une promesse ou le silence sans aucun contact physique."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis dans l'eau mais je ne me mouille jamais. Que suis-je ?",
        answers: ["le reflet","reflet","une ombre","ombre","ton reflet"],
        explanation: "Le reflet apparaît dans l'eau sans jamais se mouiller !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un fermier a 17 moutons. Tous meurent sauf 9. Combien en reste-t-il ?",
        options: ["8","9","17","0"],
        answer: 1,
        explanation: "« Tous meurent sauf 9 » signifie qu'il en reste 9 !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Combien de mois dans l'année ont 28 jours ?",
        options: ["1 (février)","6 mois","12 mois","Aucun"],
        answer: 2,
        explanation: "Tous les 12 mois ont au moins 28 jours !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Qu'est-ce qui pèse plus lourd : un kilo de plumes ou un kilo de plomb ?",
        options: ["Le plomb","Les plumes","Ils pèsent pareil","Ça dépend"],
        answer: 2,
        explanation: "Un kilo est un kilo, quelle que soit la matière !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Si tu as 3 pommes et que tu en prends 2, combien en as-tu ?",
        options: ["1","2","3","5"],
        answer: 1,
        explanation: "Tu en as 2 car ce sont celles que tu as prises !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Tu participes à une course et tu dépasses le 2ᵉ. À quelle place es-tu ?",
        options: ["1ᵉʳ","2ᵉ","3ᵉ","Dernier"],
        answer: 1,
        explanation: "Tu prends la place de celui que tu dépasses : tu es donc 2ᵉ (pas 1ᵉʳ !)."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un train électrique va du nord au sud. Le vent souffle d'est en ouest. Où va la fumée ?",
        options: undefined,
        answer: undefined,
        explanation: "Un train électrique ne produit pas de fumée. Le vent est un piège."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Un coq pond un œuf sur le toit d'une maison. De quel côté tombe l'œuf ?",
        answers: ["aucun","d'aucun","nulle part","un coq ne pond pas","il ne pond pas"],
        explanation: "Un coq ne pond pas d'œufs ! Seules les poules pondent."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Un avion s'écrase pile à la frontière entre la France et la Belgique. Où enterre-t-on les survivants ?",
        answers: ["nulle part","on n'enterre pas les survivants","on ne les enterre pas"],
        explanation: "Les survivants sont vivants. On n'enterre pas les vivants !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Pièce sombre : bougie, lampe à pétrole, cheminée. Vous n'avez qu'une allumette. Qu'allumez-vous en premier ?",
        answers: ["l'allumette","allumette","la allumette"],
        explanation: "Avant d'allumer quoi que ce soit, il faut d'abord allumer l'allumette !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Combien de fois peut-on soustraire 5 de 25 ?",
        options: ["5 fois","4 fois","1 seule fois","Infiniment"],
        answer: 2,
        explanation: "Après la première soustraction, on soustrait de 20, plus de 25. Donc une seule fois « de 25 »."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un père et son fils ont ensemble 36 ans. Le père a 30 ans de plus que le fils. Quel âge a le fils ?",
        options: ["6 ans","3 ans","5 ans","8 ans"],
        answer: 1,
        explanation: "Le fils a 3 ans et le père 33 ans : 3 + 33 = 36 et 33 − 3 = 30."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Marie a 3 filles et chaque fille a un frère. Combien d'enfants a Marie ?",
        options: ["3","4","6","9"],
        answer: 1,
        explanation: "4 enfants : 3 filles et 1 garçon. Le frère est le même pour toutes les filles."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un escargot est au fond d'un puits de 10 m. Chaque jour il monte 3 m et glisse de 2 m la nuit. En combien de jours sort-il ?",
        options: ["10 jours","8 jours","7 jours","5 jours"],
        answer: 1,
        explanation: "Après 7 jours il est à 7 m. Le 8ᵉ jour il monte de 3 m et atteint 10 m avant la nuit."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Quelle est la suite logique : 1, 1, 2, 3, 5, 8, ... ?",
        options: ["10","11","13","15"],
        answer: 2,
        explanation: "C'est la suite de Fibonacci : chaque nombre est la somme des deux précédents (5 + 8 = 13)."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un bus part avec 7 passagers. Au 1ᵉʳ arrêt, 3 montent et 2 descendent. Au 2ᵉ, 5 montent et 4 descendent. Combien d'arrêts le bus a-t-il fait ?",
        options: ["1","2","3","On ne sait pas"],
        answer: 1,
        explanation: "Le piège : la question porte sur les arrêts (2), pas sur les passagers !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Deux pères et deux fils vont pêcher. Chacun pêche un poisson et il n'y en a que 3. Comment est-ce possible ?",
        answers: ["ils sont trois","trois","3","grand-pere pere fils","3 personnes","trois personnes"],
        explanation: "Ils sont 3 : un grand-père, son fils, et son petit-fils. Le père est à la fois père et fils."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "J'ai autant de frères que de sœurs, mais ma sœur a deux fois plus de frères que de sœurs. Combien sommes-nous ?",
        options: ["5","6","7","8"],
        answer: 2,
        explanation: "4 garçons, 3 filles = 7. Garçon : 3 frères, 3 sœurs ✓. Fille : 4 frères, 2 sœurs ✓."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un berger a 27 moutons. Tous sauf 14 s'échappent. Combien lui en reste-t-il ?",
        options: ["13","14","27","0"],
        answer: 1,
        explanation: "« Tous sauf 14 » s'échappent, il lui en reste donc 14."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "À 3h00 pile, quel est l'angle entre les aiguilles d'une montre ?",
        options: ["60°","75°","90°","120°"],
        answer: 2,
        explanation: "L'aiguille des heures pointe vers le 3 (90° depuis le 12), celle des minutes vers le 12."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "10 personnes se serrent toutes la main une seule fois. Combien de poignées de main au total ?",
        options: ["45","50","90","100"],
        answer: 0,
        explanation: "10 × 9 / 2 = 45. Chaque poignée implique 2 personnes, on divise par 2."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un électricien ?",
        answers: ["de ne pas être au courant","ne pas etre au courant","pas au courant"],
        explanation: "Un électricien qui n'est pas au courant... c'est le comble !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un jardinier ?",
        answers: ["de raconter des salades","raconter des salades"],
        explanation: "Un jardinier qui raconte des salades, c'est le comble !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un boulanger ?",
        answers: ["d'en avoir sa claque","en avoir sa claque","de raconter des croutons","d'avoir du pain sur la planche","avoir du pain sur la planche"],
        explanation: "Un boulanger qui en a sa claque ou qui a du pain sur la planche !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un plombier ?",
        answers: ["d'avoir un nom a rallonge","avoir un nom a rallonge","de peter les plombs","peter les plombs","d'avoir un nom à rallonge"],
        explanation: "Un plombier qui a un nom à rallonge ou qui pète les plombs !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "J'ai des villes mais pas de maisons, des forêts mais pas d'arbres, de l'eau mais pas de poissons. Que suis-je ?",
        options: ["Un rêve","Un désert","Une carte géographique","Un tableau"],
        answer: 2,
        explanation: "Une carte géographique représente villes, forêts et eau sans les contenir vraiment."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Si tu me laisses tomber, je me casse. Si tu me souris, je te souris. Que suis-je ?",
        options: ["Un miroir","Un œuf","Un téléphone","Une vitre"],
        answer: 0,
        explanation: "Le miroir se casse quand il tombe et reflète ton sourire !"
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Il est possible de faire 3 traits droits pour séparer un gâteau rond en 7 parts.",
        answer: "oui",
        explanation: "Vrai ! Trois coupes bien placées qui se croisent toutes permettent d'obtenir 7 parts."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "On plie une feuille en deux 7 fois de suite. Combien d'épaisseurs ?",
        options: ["14","49","64","128"],
        answer: 3,
        explanation: "Chaque pliage double le nombre d'épaisseurs. 2⁷ = 128."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "4 coins dans une pièce. Dans chaque coin, un chat. En face de chaque chat, 3 chats. Sur la queue de chaque chat, un chat. Combien de chats ?",
        options: ["4","8","12","16"],
        answer: 0,
        explanation: "4 chats, un par coin. Chacun voit les 3 autres. Chaque chat est assis sur sa propre queue."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un homme pousse sa voiture jusqu'à un hôtel et annonce qu'il est ruiné. Pourquoi ?",
        options: ["Plus d'essence ni d'argent","Panne devant un restaurant étoilé","Il joue au Monopoly","C'est une scène de film"],
        answer: 2,
        explanation: "Au Monopoly, on pousse son pion (petite voiture) et on peut tomber sur un hôtel qui vous ruine."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un homme entre dans un bar et demande un verre d'eau. Le barman sort un fusil. L'homme dit « merci » et part. Pourquoi ?",
        options: ["Code pour de l'alcool illégal","L'homme avait le hoquet ; la peur l'a guéri","C'est un agent infiltré","Un pari entre amis"],
        answer: 1,
        explanation: "L'homme avait le hoquet. Le barman, en le surprenant, l'a guéri. D'où le « merci »."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un homme est retrouvé mort dans un champ avec un paquet fermé à côté de lui. Aucune trace. Que s'est-il passé ?",
        options: ["Empoisonné par le paquet","Son parachute ne s'est pas ouvert","Foudroyé","Malaise en livrant un colis"],
        answer: 1,
        explanation: "Le paquet est son parachute non déployé. Il est tombé du ciel."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Une femme « abat » son mari, le plonge dans l'eau, le « pend ». Une heure après, ils dînent ensemble. Comment ?",
        options: ["Elle développe une photo argentique","C'est un rêve","C'est un jeu de rôle","Résurrection miracle"],
        answer: 0,
        explanation: "Vocabulaire photo : prendre (abattre) un cliché, le plonger dans le bain de fixateur, le pendre pour sécher."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Roméo et Juliette sont morts au sol, flaque d'eau, verre brisé partout. Que s'est-il passé ?",
        options: ["Suicide romantique","Ce sont des poissons rouges : leur aquarium s'est brisé","Empoisonnement","Fenêtre explosée"],
        answer: 1,
        explanation: "Roméo et Juliette sont les noms de deux poissons rouges dont l'aquarium s'est cassé."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un homme saute d'un avion sans parachute et survit. Pourquoi ?",
        options: ["Il tombe dans la neige","L'avion est au sol","Parachute de secours","Filet de pompiers"],
        answer: 1,
        explanation: "L'avion était posé au sol. Il a simplement sauté depuis la porte."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un homme pendu dans une pièce vide, pieds à 1 m du sol. Seule une flaque d'eau au sol. Comment ?",
        options: ["Monté sur un bloc de glace qui a fondu","Sauté depuis le plafond","Un complice a retiré la chaise","Mécanisme de corde"],
        answer: 0,
        explanation: "Il est monté sur un bloc de glace qui a fondu, ne laissant qu'une flaque d'eau."
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Le mot « anticonstitutionnellement » est le plus long mot de la langue française.",
        answer: "non",
        explanation: "Faux ! « Intergouvernementalisations » (27 lettres) le dépasse dans certains dictionnaires."
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Le nombre 111 111 111 × 111 111 111 donne un résultat palindrome composé des chiffres de 1 à 9.",
        answer: "oui",
        explanation: "Vrai ! 111 111 111² = 12 345 678 987 654 321."
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Dans un tiroir avec des chaussettes noires et blanches mélangées, il suffit d'en prendre 3 au hasard pour être sûr d'avoir une paire assortie.",
        answer: "oui",
        explanation: "Vrai ! Avec 2 couleurs, 3 chaussettes garantissent au moins 2 de la même couleur (principe des tiroirs)."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel mot de 9 lettres n'en contient qu'une seule ?",
        answers: ["enveloppe","envelope"],
        explanation: "ENVELOPPE : 9 lettres mais ne « contient » qu'une seule lettre (au sens postal) !"
    },

    // ═══════════════════════════════════════
    // 📰 ACTUALITÉS (événements récents 2020-2025)
    // ═══════════════════════════════════════
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays a accueilli les Jeux Olympiques d'été 2024 ?",
        options: ["Japon", "France", "États-Unis", "Australie"],
        answer: 1,
        explanation: "Les JO d'été 2024 se sont tenus à Paris, en France."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quelle intelligence artificielle a surpris le monde en 2022-2023 avec ses capacités conversationnelles ?",
        options: ["Siri", "ChatGPT", "Alexa", "Google Home"],
        answer: 1,
        explanation: "ChatGPT d'OpenAI a révolutionné la perception de l'IA grand public."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel réseau social a été racheté par Elon Musk en 2022 et renommé X ?",
        options: ["Facebook", "Instagram", "Twitter", "TikTok"],
        answer: 2,
        explanation: "Twitter a été racheté par Elon Musk fin 2022 et renommé X en 2023."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays a remporté la Coupe du monde de football 2022 au Qatar ?",
        options: ["France", "Brésil", "Argentine", "Croatie"],
        answer: 2,
        explanation: "L'Argentine de Messi a remporté la finale face à la France aux tirs au but."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel est le nom du télescope spatial lancé fin 2021 qui a révolutionné l'astronomie avec ses images ?",
        answers: ["james webb", "webb", "jwst", "telescope james webb"],
        explanation: "Le James Webb Space Telescope (JWST) a été lancé le 25 décembre 2021."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel film d'animation a dépassé le milliard de dollars au box-office en 2023 ?",
        options: ["Élémentaire", "Spider-Verse 2", "Le Chat Potté 2", "Super Mario Bros"],
        answer: 3,
        explanation: "Super Mario Bros. Le Film a dépassé 1,3 milliard de dollars au box-office mondial."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel roi a succédé à Elizabeth II au Royaume-Uni en 2022 ?",
        answers: ["charles iii", "charles 3", "charles", "roi charles"],
        explanation: "Charles III est devenu roi après le décès d'Elizabeth II le 8 septembre 2022."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays européen a rejoint l'OTAN en 2023 après des décennies de neutralité ?",
        options: ["Suède", "Finlande", "Suisse", "Autriche"],
        answer: 1,
        explanation: "La Finlande a rejoint l'OTAN en avril 2023 suite au contexte géopolitique."
    },
    {
        category: "actualites",
        type: "yesno",
        question: "Le film Barbie (2023) a dépassé le milliard de dollars au box-office mondial.",
        answer: "oui",
        explanation: "Vrai ! Barbie de Greta Gerwig a rapporté plus de 1,4 milliard de dollars."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel athlète français est devenu champion olympique du 100m haies aux JO de Paris 2024 ?",
        options: ["Kevin Mayer", "Cyréna Samba-Mayela", "Pascal Martinot-Lagarde", "Wilhem Belocian"],
        answer: 1,
        explanation: "Cyréna Samba-Mayela a remporté l'or au 100m haies féminin aux JO de Paris 2024."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel événement sanitaire mondial a marqué les années 2020-2021 ?",
        answers: ["covid", "covid 19", "covid-19", "coronavirus", "pandemie", "la pandemie"],
        explanation: "La pandémie de COVID-19 a touché le monde entier à partir de début 2020."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quelle ville accueillera les Jeux Olympiques d'été 2028 ?",
        options: ["Brisbane", "Los Angeles", "Paris", "Tokyo"],
        answer: 1,
        explanation: "Los Angeles accueillera les JO d'été 2028."
    },
    {
        category: "actualites",
        type: "yesno",
        question: "TikTok a été temporairement banni aux États-Unis en 2025.",
        answer: "oui",
        explanation: "Vrai ! TikTok a fait face à une interdiction temporaire aux USA début 2025 pour des raisons de sécurité nationale."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays a envoyé avec succès un rover sur la face cachée de la Lune en 2024 ?",
        options: ["États-Unis", "Russie", "Chine", "Inde"],
        answer: 2,
        explanation: "La Chine avec la mission Chang'e 6 a rapporté des échantillons de la face cachée de la Lune."
    },
    {
        category: "actualites",
        type: "free",
        question: "Comment s'appelle le chatbot IA de Google, concurrent de ChatGPT ?",
        answers: ["gemini", "bard", "google gemini"],
        explanation: "Google a lancé Bard en 2023, puis l'a renommé Gemini en 2024."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays a réussi à alunir pour la première fois en 2023 avec la mission Chandrayaan-3 ?",
        options: ["Japon", "Inde", "Corée du Sud", "Israël"],
        answer: 1,
        explanation: "L'Inde est devenue le 4e pays à alunir et le 1er à se poser près du pôle Sud lunaire."
    },
    {
        category: "actualites",
        type: "yesno",
        question: "Le 'Oppenheimer' de Christopher Nolan a remporté l'Oscar du meilleur film en 2024.",
        answer: "oui",
        explanation: "Vrai ! Oppenheimer a remporté 7 Oscars dont meilleur film et meilleur réalisateur."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel pays a accueilli les Jeux Olympiques d'été 2020 (décalés en 2021) ?",
        options: ["Chine", "Japon", "Corée du Sud", "Australie"],
        answer: 1,
        explanation: "Les JO de Tokyo 2020 ont été reportés à l'été 2021 à cause du COVID-19."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quelle application de vidéos courtes chinoise est devenue la plus téléchargée au monde ?",
        answers: ["tiktok", "tik tok", "douyin"],
        explanation: "TikTok (Douyin en Chine) a dépassé les 3 milliards de téléchargements."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel nageur français a remporté 4 médailles d'or aux JO de Paris 2024 ?",
        options: ["Florent Manaudou", "Léon Marchand", "Yannick Agnel", "Camille Lacourt"],
        answer: 1,
        explanation: "Léon Marchand est devenu la star des JO 2024 avec 4 titres olympiques en natation."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel conflit majeur a débuté en Europe en février 2022 ?",
        options: ["Guerre en Syrie", "Conflit en Libye", "Guerre en Ukraine", "Conflit en Arménie"],
        answer: 2,
        explanation: "La Russie a lancé une invasion de l'Ukraine le 24 février 2022."
    },
    {
        category: "actualites",
        type: "yesno",
        question: "La France a interdit les vols intérieurs courts remplaçables par le train en moins de 2h30.",
        answer: "oui",
        explanation: "Vrai ! Depuis 2023, certains vols intérieurs courts sont interdits quand une alternative en train existe."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel véhicule électrique de Tesla est devenu la voiture la plus vendue au monde en 2023 ?",
        answers: ["model y", "tesla model y", "modele y"],
        explanation: "La Tesla Model Y a été la voiture la plus vendue au monde toutes motorisations confondues en 2023."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel réseau social lancé par Meta en 2023 est un concurrent de X (Twitter) ?",
        options: ["BeReal", "Threads", "Bluesky", "Mastodon"],
        answer: 1,
        explanation: "Threads, lancé par Meta en juillet 2023, a atteint 100 millions d'inscrits en 5 jours."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quelle série coréenne Netflix est devenue un phénomène mondial en 2021 ?",
        options: ["Parasite", "Squid Game", "Hellbound", "All of Us Are Dead"],
        answer: 1,
        explanation: "Squid Game est devenue la série la plus regardée de l'histoire de Netflix avec 1,65 milliard d'heures vues."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel artiste a battu le record de streams Spotify avec plus de 100 milliards d'écoutes cumulées ?",
        answers: ["drake", "the weeknd", "bad bunny", "taylor swift"],
        explanation: "The Weeknd détient le record de l'artiste le plus écouté de l'histoire de Spotify."
    },
    {
        category: "actualites",
        type: "yesno",
        question: "Apple a lancé son premier casque de réalité mixte, le Vision Pro, en 2024.",
        answer: "oui",
        explanation: "Vrai ! L'Apple Vision Pro est sorti en février 2024 aux États-Unis à 3 499 $."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quel est le nom de la fusée géante de SpaceX, la plus puissante jamais construite ?",
        options: ["Falcon Heavy", "New Glenn", "Starship", "SLS"],
        answer: 2,
        explanation: "Starship de SpaceX est le lanceur le plus puissant jamais construit, avec 33 moteurs Raptor."
    },
    {
        category: "actualites",
        type: "mcq",
        question: "Quelle actrice a joué Barbie dans le film de 2023 réalisé par Greta Gerwig ?",
        options: ["Scarlett Johansson", "Emma Stone", "Margot Robbie", "Florence Pugh"],
        answer: 2,
        explanation: "Margot Robbie a incarné Barbie dans le blockbuster de l'été 2023."
    },
    {
        category: "actualites",
        type: "free",
        question: "Quel club de football a remporté la Ligue des Champions en 2024 ?",
        answers: ["real madrid", "real", "le real madrid"],
        explanation: "Le Real Madrid a remporté sa 15e Ligue des Champions en battant le Borussia Dortmund en finale."
    },

    // ═══════════════════════════════════════
    // 🤥 FAKE NEWS (mythes, idées reçues, vrai/faux)
    // ═══════════════════════════════════════

    // --- Corps humain ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Les humains n'utilisent que 10 % de leur cerveau.",
        answer: "non",
        explanation: "Faux ! L'IRM montre que la quasi-totalité du cerveau est active. Ce mythe vient d'une mauvaise interprétation de travaux du XIXe siècle."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les cheveux et les ongles continuent de pousser après la mort.",
        answer: "non",
        explanation: "Faux ! La peau se déshydrate et se rétracte, donnant l'illusion que les ongles et cheveux s'allongent."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le corps humain contient assez de fer pour fabriquer un petit clou.",
        answer: "oui",
        explanation: "Vrai ! Environ 3 à 4 grammes de fer, de quoi forger un clou de 5 cm."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "On perd la majorité de sa chaleur corporelle par la tête.",
        answer: "non",
        explanation: "Faux ! La tête ne représente que ~10 % de la surface du corps. La perte de chaleur est proportionnelle à la surface exposée."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le sang désoxygéné est bleu dans les veines.",
        answer: "non",
        explanation: "Faux ! Le sang est toujours rouge. Les veines paraissent bleues à cause de la façon dont la lumière traverse la peau."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Craquer ses doigts donne de l'arthrose.",
        answer: "non",
        explanation: "Faux ! Un médecin américain a craqué les doigts d'une seule main pendant 60 ans pour le prouver. Aucune différence."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le lait maternel change de composition en fonction des besoins du bébé.",
        answer: "oui",
        explanation: "Vrai ! Il s'adapte en temps réel : plus d'anticorps si le bébé est malade, plus de gras le soir pour l'endormir."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "La langue a des zones de goût distinctes (sucré devant, amer derrière…).",
        answer: "non",
        explanation: "Faux ! Tous les récepteurs gustatifs sont répartis sur toute la langue. Cette « carte » vient d'une erreur de traduction d'une étude allemande de 1901."
    },

    // --- Animaux ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Les poissons rouges ont une mémoire de 3 secondes.",
        answer: "non",
        explanation: "Faux ! Des études montrent qu'ils se souviennent de choses pendant des mois et apprennent des parcours."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les autruches mettent la tête dans le sable quand elles ont peur.",
        answer: "non",
        explanation: "Faux ! Elles se couchent au sol, cou à plat, pour se fondre dans le paysage. De loin, on dirait qu'elles s'enfouissent."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les chiens ne voient qu'en noir et blanc.",
        answer: "non",
        explanation: "Faux ! Les chiens voient le bleu et le jaune, mais pas le rouge ni le vert. Leur vision est dichromate."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les chameaux stockent de l'eau dans leurs bosses.",
        answer: "non",
        explanation: "Faux ! Les bosses contiennent de la graisse (réserve d'énergie). Leur résistance à la soif vient de leur capacité à limiter la transpiration."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les éléphants ont peur des souris.",
        answer: "non",
        explanation: "Faux ! Ce mythe remonte à l'Antiquité. Les éléphants ignorent les souris. Ils sont plutôt méfiants envers les abeilles."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les corbeaux peuvent reconnaître des visages humains.",
        answer: "oui",
        explanation: "Vrai ! Des études de l'université de Washington ont montré qu'ils se souviennent de visages précis pendant des années."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les vaches ont des meilleures amies.",
        answer: "oui",
        explanation: "Vrai ! Des recherches montrent que les vaches sont moins stressées quand elles sont avec leur compagne préférée."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les chats ronronnent uniquement quand ils sont contents.",
        answer: "non",
        explanation: "Faux ! Les chats ronronnent aussi quand ils souffrent ou sont stressés. Le ronronnement favorise la cicatrisation osseuse."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les flamants roses sont roses dès la naissance.",
        answer: "non",
        explanation: "Faux ! Ils naissent gris-blanc. Leur couleur rose vient des pigments (caroténoïdes) des crevettes qu'ils mangent."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les dauphins dorment avec un seul œil fermé.",
        answer: "oui",
        explanation: "Vrai ! Ils mettent un hémisphère cérébral en sommeil à la fois, gardant un œil ouvert pour surveiller les prédateurs et remonter respirer."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Un canard, ça cancane. Et le son ne produit pas d'écho.",
        answer: "non",
        explanation: "Faux ! Le cancanement produit bien un écho. Ce mythe vient du fait que l'écho est difficile à distinguer du son original."
    },

    // --- Alimentation ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Le miel est le seul aliment qui ne se périme jamais.",
        answer: "oui",
        explanation: "Vrai ! Du miel vieux de 3 000 ans retrouvé dans des tombes égyptiennes était encore comestible grâce à sa faible teneur en eau."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les carottes améliorent la vision nocturne.",
        answer: "non",
        explanation: "Faux ! Ce mythe vient de la propagande britannique de la WWII pour masquer l'invention du radar embarqué."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le sucre rend les enfants hyperactifs.",
        answer: "non",
        explanation: "Faux ! Plusieurs études en double aveugle n'ont trouvé aucun lien. C'est un biais de confirmation des parents."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les bananes sont radioactives.",
        answer: "oui",
        explanation: "Vrai ! Elles contiennent du potassium-40, un isotope radioactif naturel. Mais il faudrait en manger 10 millions d'un coup pour que ce soit dangereux."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Un chewing-gum avalé met 7 ans à être digéré.",
        answer: "non",
        explanation: "Faux ! Il n'est pas digéré mais il est évacué naturellement en quelques jours, comme les fibres alimentaires."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "L'alcool réchauffe le corps.",
        answer: "non",
        explanation: "Faux ! L'alcool dilate les vaisseaux sanguins, donnant une sensation de chaleur, mais le corps perd en réalité plus vite sa chaleur."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Il faut attendre 3 heures après manger pour se baigner, sinon on risque une hydrocution.",
        answer: "non",
        explanation: "Faux ! L'hydrocution est causée par un choc thermique (eau froide après exposition au soleil), pas par la digestion."
    },

    // --- Histoire & culture ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Napoléon était très petit pour son époque.",
        answer: "non",
        explanation: "Faux ! Il mesurait ~1,69 m, taille moyenne. La confusion vient de la différence entre le pouce français et le pouce anglais."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les Vikings portaient des casques à cornes.",
        answer: "non",
        explanation: "Faux ! Invention d'un costumier d'opéra au XIXe siècle. Les vrais casques vikings étaient en fer simple, sans ornements."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Albert Einstein a échoué en mathématiques à l'école.",
        answer: "non",
        explanation: "Faux ! Einstein excellait en maths. La légende vient d'une confusion : en Suisse, l'échelle de notes a été inversée l'année de ses résultats."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Cléopâtre vivait plus proche dans le temps de l'iPhone que de la construction des pyramides.",
        answer: "oui",
        explanation: "Vrai ! Pyramides : ~2560 av. J.-C. Cléopâtre : ~30 av. J.-C. iPhone : 2007. Elle est plus proche de nous de ~500 ans."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Marie-Antoinette a dit « Qu'ils mangent de la brioche ! »",
        answer: "non",
        explanation: "Faux ! Cette phrase apparaît dans les Confessions de Rousseau (1782), attribuée à « une grande princesse », alors que Marie-Antoinette avait 14 ans."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "On avale en moyenne 8 araignées par an dans son sommeil.",
        answer: "non",
        explanation: "Faux ! Ce « fait » a été inventé en 1993 par une chroniqueuse (Lisa Holst) pour montrer comment les gens gobent les fausses infos."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "La Grande Muraille de Chine est visible depuis l'espace à l'œil nu.",
        answer: "non",
        explanation: "Faux ! Elle est trop étroite (~6 m). Les astronautes confirment qu'elle est invisible à l'œil nu depuis l'orbite."
    },

    // --- Science & espace ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Il y a plus d'étoiles dans l'univers que de grains de sable sur Terre.",
        answer: "oui",
        explanation: "Vrai ! On estime ~10²⁴ étoiles contre ~10¹⁹ grains de sable. L'univers est incompréhensiblement vaste."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "La foudre ne frappe jamais deux fois au même endroit.",
        answer: "non",
        explanation: "Faux ! L'Empire State Building est frappé environ 25 fois par an. La foudre préfère les points élevés."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Il fait toujours très froid dans l'espace.",
        answer: "non",
        explanation: "Faux ! Au soleil, un objet dans l'espace peut atteindre +120 °C. À l'ombre, il descend sous -150 °C. La température varie énormément."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "La Lune s'éloigne de la Terre d'environ 3,8 cm par an.",
        answer: "oui",
        explanation: "Vrai ! Les interactions de marée transfèrent de l'énergie à la Lune, qui s'éloigne lentement. Mesuré au laser depuis les missions Apollo."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les arbres communiquent entre eux via un réseau souterrain de champignons.",
        answer: "oui",
        explanation: "Vrai ! Surnommé le « Wood Wide Web », ce réseau mycorhizien permet aux arbres d'échanger nutriments et signaux d'alerte."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "L'eau de mer est salée principalement à cause de l'érosion des roches.",
        answer: "oui",
        explanation: "Vrai ! Depuis des milliards d'années, les rivières transportent les sels minéraux des roches jusqu'aux océans."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les tournesols adultes suivent le soleil tout au long de la journée.",
        answer: "non",
        explanation: "Faux ! Seuls les jeunes tournesols en croissance tournent (héliotropisme). Les adultes restent fixés vers l'est."
    },

    // --- Tech & société ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Le mode « incognito » du navigateur rend anonyme sur internet.",
        answer: "non",
        explanation: "Faux ! Il empêche le navigateur de stocker l'historique local, mais le FAI, l'employeur et les sites visités voient toujours le trafic."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les écrans abîment définitivement les yeux.",
        answer: "non",
        explanation: "Faux ! La fatigue oculaire numérique est réelle mais temporaire. Aucune étude n'a prouvé de dommages permanents liés aux écrans."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Recharger son téléphone toute la nuit abîme la batterie.",
        answer: "non",
        explanation: "Faux ! Les smartphones modernes coupent la charge à 100 %. Ce qui use la batterie, c'est la chaleur et les cycles de charge complets."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Plus il y a de barres de réseau sur le téléphone, plus le débit est rapide.",
        answer: "non",
        explanation: "Faux ! Les barres indiquent la puissance du signal, pas le débit. Une antenne saturée peut avoir un signal fort mais un débit minable."
    },

    // --- Idées reçues du quotidien ---
    {
        category: "fakenews",
        type: "yesno",
        question: "Il est dangereux de réveiller un somnambule.",
        answer: "non",
        explanation: "Faux ! Ça peut le désorienter, mais ce n'est pas dangereux. En revanche, le laisser se promener peut l'être."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Se raser fait repousser les poils plus épais.",
        answer: "non",
        explanation: "Faux ! Le rasage coupe le poil en biseau, donnant une impression d'épaisseur. La repousse est identique."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Lire dans le noir abîme les yeux.",
        answer: "non",
        explanation: "Faux ! Ça fatigue les yeux temporairement, mais ne cause aucun dommage permanent. Ce mythe date d'avant l'électricité."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "L'être humain a exactement 5 sens.",
        answer: "non",
        explanation: "Faux ! On en a bien plus : proprioception, équilibre, thermoception, nociception (douleur)… au moins une douzaine."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Un objet tombe plus vite s'il est plus lourd.",
        answer: "non",
        explanation: "Faux ! Dans le vide, tous les objets tombent à la même vitesse (Galilée). La résistance de l'air change les choses en pratique."
    },

    // --- MCQ variées ---
    {
        category: "fakenews",
        type: "mcq",
        question: "Laquelle de ces affirmations sur les animaux est VRAIE ?",
        options: ["Les chauves-souris sont aveugles", "Les poules ne peuvent pas voler du tout", "Les pieuvres ont trois cœurs", "Les mouches ne vivent que 24 heures"],
        answer: 2,
        explanation: "Les pieuvres ont bien 3 cœurs : 2 pour les branchies, 1 pour le corps. Les chauves-souris voient, les poules volent (un peu), et les mouches vivent ~30 jours."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Lequel de ces faits historiques est FAUX ?",
        options: ["Les gladiateurs combattaient rarement à mort", "L'Université d'Oxford est plus vieille que l'Empire aztèque", "Les samouraïs n'utilisaient que des katanas", "L'Empire romain avait du béton"],
        answer: 2,
        explanation: "Les samouraïs utilisaient arcs, lances, et même des armes à feu (tanegashima). Le katana n'était qu'une arme parmi d'autres."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Laquelle de ces croyances alimentaires est VRAIE ?",
        options: ["Le chocolat donne des boutons", "Le café stoppe la croissance", "Le pain fait grossir plus que les pâtes", "Le chocolat noir est bon pour le cœur"],
        answer: 3,
        explanation: "Le cacao contient des flavonoïdes bénéfiques pour le système cardiovasculaire. Les trois autres sont des mythes."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Lequel de ces « faits » sur le corps humain est VRAI ?",
        options: ["On naît avec 300 os, mais on n'en a que 206 adulte", "Le cœur s'arrête quand on éternue", "Les cellules du cerveau ne se régénèrent jamais", "L'estomac peut digérer du métal"],
        answer: 0,
        explanation: "Vrai ! Beaucoup d'os fusionnent pendant la croissance. Le cœur ne s'arrête pas en éternuant, et le cerveau produit de nouveaux neurones (neurogenèse)."
    },

    // ═══════════════════════════════════════
    // ⭐ CÉLÉBRITÉS (culture populaire, personnalités)
    // ═══════════════════════════════════════
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel artiste est surnommé 'le King of Pop' ?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        answer: 1,
        explanation: "Michael Jackson a été surnommé le Roi de la Pop grâce à Thriller et ses chorégraphies légendaires."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel acteur français est célèbre pour ses rôles dans Astérix, Bienvenue chez les Ch'tis et Supercondriaque ?",
        answers: ["dany boon", "boon"],
        explanation: "Dany Boon a réalisé et joué dans Bienvenue chez les Ch'tis, plus grand succès français."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel rappeur français est connu pour les albums 'Que la famille' et 'Deux frères' ?",
        options: ["Booba", "PNL", "Jul", "Soprano"],
        answer: 1,
        explanation: "PNL (Peace N' Lovés), le duo formé par Ademo et N.O.S."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quelle chanteuse a interprété la cérémonie d'ouverture des JO 2024 sur la Seine ?",
        options: ["Aya Nakamura", "Lady Gaga", "Céline Dion", "Beyoncé"],
        answer: 2,
        explanation: "Céline Dion a chanté sur la Tour Eiffel lors de la cérémonie d'ouverture des JO de Paris 2024."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel humoriste et acteur français est connu pour 'Qu'est-ce qu'on a fait au Bon Dieu ?' et la série 'Dix pour cent' ?",
        answers: ["christian clavier", "clavier"],
        explanation: "Christian Clavier a joué le père de famille dans 'Qu'est-ce qu'on a fait au Bon Dieu ?'."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Qui est la youtubeuse/streameuse française connue sous le nom de Domingo ?",
        options: ["Un streamer de gaming", "Un commentateur e-sport", "Un streamer politique et culturel", "Un créateur de mode"],
        answer: 2,
        explanation: "Domingo est un streamer français connu pour ses émissions culturelles et politiques sur Twitch."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel footballeur français a remporté la Coupe du monde 2018 et est devenu capitaine de l'équipe de France ?",
        options: ["Antoine Griezmann", "Kylian Mbappé", "Paul Pogba", "Hugo Lloris"],
        answer: 1,
        explanation: "Kylian Mbappé, prodige du football français, a été décisif lors du Mondial 2018."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel acteur incarne Jack Sparrow dans Pirates des Caraïbes ?",
        answers: ["johnny depp", "depp", "johnny deep"],
        explanation: "Johnny Depp a incarné le capitaine Jack Sparrow dans 5 films Pirates des Caraïbes."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quelle artiste a chanté 'Djadja', tube mondial sorti en 2018 ?",
        options: ["Angèle", "Aya Nakamura", "Dua Lipa", "Louane"],
        answer: 1,
        explanation: "Aya Nakamura avec 'Djadja' est devenue l'artiste francophone la plus écoutée au monde."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel réalisateur français est connu pour 'Intouchables' et 'Le Sens de la fête' ?",
        options: ["Luc Besson", "Olivier Nakache & Éric Toledano", "Cédric Klapisch", "Michel Hazanavicius"],
        answer: 1,
        explanation: "Nakache et Toledano ont réalisé Intouchables, deuxième plus grand succès français."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel milliardaire est le fondateur de Tesla et SpaceX ?",
        answers: ["elon musk", "musk"],
        explanation: "Elon Musk est le CEO de Tesla, SpaceX et propriétaire de X (ex-Twitter)."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quelle chanteuse belge a eu un succès mondial avec 'Tout oublier' et 'Balance ton quoi' ?",
        options: ["Stromae", "Angèle", "Aya Nakamura", "Clara Luciani"],
        answer: 1,
        explanation: "Angèle Van Laeken, connue sous le nom d'Angèle, est une chanteuse belge francophone."
    },
    {
        category: "celebrites",
        type: "yesno",
        question: "Squeezie est le youtubeur français avec le plus d'abonnés.",
        answer: "oui",
        explanation: "Vrai ! Squeezie (Lucas Hauchard) est le premier youtubeur français avec plus de 18 millions d'abonnés."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel acteur joue le rôle de Spider-Man dans la trilogie récente Marvel (2017-2021) ?",
        options: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Miles Morales"],
        answer: 2,
        explanation: "Tom Holland incarne Peter Parker / Spider-Man depuis 'Homecoming' en 2017."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel chanteur français, coach dans The Voice, est connu pour 'Formidable' et 'Papaoutai' ?",
        answers: ["stromae", "paul van haver"],
        explanation: "Stromae (Paul Van Haver), artiste belge, a conquis le monde avec ses hits."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel acteur incarne Iron Man dans le MCU (Marvel Cinematic Universe) ?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        answer: 2,
        explanation: "Robert Downey Jr. a incarné Tony Stark / Iron Man de 2008 à 2019."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quelle chanteuse américaine est connue pour sa tournée 'Eras Tour', la plus lucrative de l'histoire ?",
        answers: ["taylor swift", "swift", "taylor"],
        explanation: "Taylor Swift et sa tournée Eras Tour ont rapporté plus de 2 milliards de dollars."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel humoriste français est connu pour ses sketchs 'Le Dîner de cons' et 'Le Père Noël est une ordure' ?",
        options: ["Gad Elmaleh", "Thierry Lhermitte", "Josiane Balasko", "La troupe du Splendid"],
        answer: 3,
        explanation: "La troupe du Splendid (Lhermitte, Balasko, Jugnot, Clavier...) a créé ces classiques du cinéma français."
    },
    {
        category: "celebrites",
        type: "yesno",
        question: "Zinédine Zidane a inscrit deux buts en finale de la Coupe du monde 1998.",
        answer: "oui",
        explanation: "Vrai ! Zidane a marqué deux buts de la tête contre le Brésil en finale (3-0)."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel rappeur marseillais est connu pour 'Bande organisée' et détient le record de ventes en France ?",
        options: ["Soprano", "Jul", "SCH", "IAM"],
        answer: 1,
        explanation: "Jul est l'artiste français ayant sorti le plus d'albums certifiés, véritable machine à tubes."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel acteur incarne James Bond depuis 'Casino Royale' (2006) jusqu'en 2021 ?",
        answers: ["daniel craig", "craig"],
        explanation: "Daniel Craig a joué 007 dans 5 films, de Casino Royale (2006) à Mourir peut attendre (2021)."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quelle youtubeuse française est connue pour ses vidéos de vulgarisation scientifique sur la chaîne 'Scilabus' ?",
        options: ["Léa Bui", "Viviane Lalande", "Marie Lopez", "Natoo"],
        answer: 1,
        explanation: "Viviane Lalande (Scilabus) est une youtubeuse québécoise de vulgarisation scientifique populaire en France."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel joueur de tennis espagnol a remporté 14 fois Roland-Garros ?",
        answers: ["nadal", "rafael nadal", "rafa nadal"],
        explanation: "Rafael Nadal, le 'Roi de la terre battue', a remporté 14 Roland-Garros entre 2005 et 2022."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel groupe de K-pop a battu tous les records mondiaux de ventes et de streams ?",
        options: ["BLACKPINK", "BTS", "EXO", "TWICE"],
        answer: 1,
        explanation: "BTS (Bangtan Sonyeondan) est devenu le groupe le plus influent de la décennie 2020."
    },
    {
        category: "celebrites",
        type: "yesno",
        question: "Teddy Riner est le judoka le plus titré de l'histoire avec 3 médailles d'or olympiques.",
        answer: "oui",
        explanation: "Vrai ! Teddy Riner a remporté l'or olympique en 2012, 2016 et 2024."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel acteur français a joué dans OSS 117 et The Artist ?",
        options: ["Gilles Lellouche", "Jean Dujardin", "Guillaume Canet", "Omar Sy"],
        answer: 1,
        explanation: "Jean Dujardin a remporté l'Oscar du meilleur acteur pour The Artist en 2012."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel créateur de contenus français est connu pour ses vidéos d'expériences et sa chaîne à plus de 15 millions d'abonnés ?",
        answers: ["squeezie", "lucas hauchard"],
        explanation: "Squeezie (Lucas Hauchard) est le youtubeur français le plus suivi."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quelle actrice française a joué dans 'La Vie d'Adèle' et la saga 'Mission Impossible' ?",
        options: ["Marion Cotillard", "Léa Seydoux", "Adèle Exarchopoulos", "Mélanie Laurent"],
        answer: 2,
        explanation: "Léa Seydoux a joué dans La Vie d'Adèle, James Bond (Spectre, Mourir peut attendre) et Mission Impossible."
    },
    {
        category: "celebrites",
        type: "yesno",
        question: "Beyoncé a remporté le plus grand nombre de Grammy Awards de l'histoire.",
        answer: "oui",
        explanation: "Vrai ! Beyoncé est l'artiste la plus récompensée aux Grammy Awards avec plus de 30 trophées."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "Quel comédien français a joué dans 'Bienvenue chez les Ch'tis' aux côtés de Dany Boon ?",
        options: ["Kad Merad", "Jean-Pierre Bacri", "Patrick Timsit", "Fabrice Luchini"],
        answer: 0,
        explanation: "Kad Merad joue Philippe Abrams, le directeur de poste muté dans le Nord."
    },

    // ═══════════════════════════════════════
    // 🎮 GEEK (tech, informatique, culture geek)
    // ═══════════════════════════════════════
    {
        category: "geek",
        type: "mcq",
        question: "Qui est considéré·e comme la première programmeuse de l'histoire ?",
        options: ["Grace Hopper","Ada Lovelace","Hedy Lamarr","Margaret Hamilton"],
        answer: 1,
        explanation: "Ada Lovelace a écrit le premier algorithme destiné à être exécuté par la machine analytique de Babbage, au XIXe siècle."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année a été créé le premier ordinateur électronique programmable, l'ENIAC ?",
        options: ["1943","1946","1951","1958"],
        answer: 1,
        explanation: "L'ENIAC a été achev�� en 1946 à l'université de Pennsylvanie."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a inventé le concept de machine universelle qui porte son nom ?",
        options: ["John von Neumann","Claude Shannon","Alan Turing","Alonzo Church"],
        answer: 2,
        explanation: "La machine de Turing (1936) est le modèle théorique fondamental de l'informatique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise a produit le premier ordinateur personnel commercial grand public en 1977 ?",
        options: ["IBM avec le PC","Apple avec l'Apple II","Commodore avec le PET","Tandy avec le TRS-80"],
        answer: 1,
        explanation: "L'Apple II est le plus emblématique des micro-ordinateurs de 1977 (le PET et le TRS-80 sortent aussi cette année-là)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le « bug » informatique doit son nom à quel incident célèbre ?",
        options: ["Un papillon mort dans un tube à vide","Un papillon de nuit coincé dans un relais du Mark II (Grace Hopper, 1947)","Une erreur de calcul de l'ENIAC","Un virus ayant planté l'ARPANET"],
        answer: 1,
        explanation: "Grace Hopper a documenté un vrai insecte (moth) trouvé dans un relais du Harvard Mark II en 1947."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a fondé Microsoft en 1975 avec Bill Gates ?",
        options: ["Steve Ballmer","Paul Allen","Nathan Myhrvold","Gabe Newell"],
        answer: 1,
        explanation: "Paul Allen et Bill Gates ont co-fondé Microsoft à Albuquerque, Nouveau-Mexique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel était le nom du premier ordinateur Apple (1976) ?",
        options: ["Apple I","Apple Lisa","Macintosh","Newton"],
        answer: 0,
        explanation: "L'Apple I, conçu par Steve Wozniak, était vendu en kit à 666,66 $."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom de la loi qui prédit le doublement du nombre de transistors tous les deux ans ?",
        options: ["Loi de Metcalfe","Loi de Moore","Loi de Kryder","Loi de Wirth"],
        answer: 1,
        explanation: "Gordon Moore a formulé cette observation en 1965. Elle s'est vérifiée pendant plus de 50 ans."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé le langage Python ?",
        options: ["Larry Wall","Guido van Rossum","Bjarne Stroustrup","James Gosling"],
        answer: 1,
        explanation: "Guido van Rossum a créé Python en 1991 aux Pays-Bas."
    },
    {
        category: "geek",
        type: "mcq",
        question: "D'où vient le nom « Python » du langage de programmation ?",
        options: ["Du serpent","De Monty Python","D'un personnage de mythologie grecque","D'un acronyme"],
        answer: 1,
        explanation: "Guido van Rossum était fan des Monty Python's Flying Circus."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a inventé le langage C ?",
        options: ["Dennis Ritchie","Ken Thompson","Brian Kernighan","Bjarne Stroustrup"],
        answer: 0,
        explanation: "Dennis Ritchie a créé le C aux Bell Labs entre 1969 et 1973."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année JavaScript a-t-il été créé ?",
        options: ["1993","1995","1998","2000"],
        answer: 1,
        explanation: "Brendan Eich a créé JavaScript en 1995 chez Netscape."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de temps Brendan Eich aurait-il mis pour concevoir la première version de JavaScript ?",
        options: ["10 jours","3 semaines","2 mois","6 mois"],
        answer: 0,
        explanation: "La légende (confirmée par Eich) veut que le prototype de JavaScript ait été écrit en 10 jours en mai 1995."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage a été créé par James Gosling chez Sun Microsystems ?",
        options: ["C++","Java","C#","Scala"],
        answer: 1,
        explanation: "Java est sorti en 1995, conçu pour être portable (« Write once, run anywhere »)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage de programmation est nommé d'après un mathématicien français ?",
        options: ["Haskell","Pascal","Ada","Erlang"],
        answer: 1,
        explanation: "Pascal est nommé d'après Blaise Pascal. Ada vient d'Ada Lovelace (anglaise), Haskell de Haskell Curry (américain)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le plus vieux langage de haut niveau encore utilisé aujourd'hui ?",
        options: ["COBOL","Fortran","Lisp","ALGOL"],
        answer: 1,
        explanation: "Fortran date de 1957 (Lisp de 1958, COBOL de 1959). ALGOL n'est plus utilisé."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage a été créé par Rasmus Lerdorf en 1994 ?",
        options: ["PHP","ASP","Perl","JSP"],
        answer: 0,
        explanation: "PHP était à l'origine « Personal Home Page Tools », un ensemble de scripts CGI."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifiait à l'origine l'acronyme PHP ?",
        options: ["Personal Home Page","PHP Hypertext Preprocessor","Programmable Hypertext Processor","Pretty Home Pages"],
        answer: 0,
        explanation: "PHP signifiait « Personal Home Page » avant d'être rétro-acronymé en « PHP: Hypertext Preprocessor »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage utilise l'indentation significative pour délimiter les blocs de code ?",
        options: ["Ruby","Python","Perl","Lua"],
        answer: 1,
        explanation: "Python impose l'indentation comme syntaxe, pas comme convention."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui est le créateur du langage C++ ?",
        options: ["Dennis Ritchie","Bjarne Stroustrup","Anders Hejlsberg","Linus Torvalds"],
        answer: 1,
        explanation: "Bjarne Stroustrup a créé C++ aux Bell Labs au début des années 1980."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le langage Go a été développé principalement par quelle entreprise ?",
        options: ["Microsoft","Google","Mozilla","Facebook"],
        answer: 1,
        explanation: "Go (2009) a été créé chez Google par Robert Griesemer, Rob Pike et Ken Thompson."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le langage Rust a été initialement développé par quelle organisation ?",
        options: ["Google","Mozilla","Apache Foundation","Red Hat"],
        answer: 1,
        explanation: "Rust a commencé comme projet personnel de Graydon Hoare chez Mozilla en 2006."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage est souvent associé à la première apparition du programme « Hello, World! » ?",
        options: ["C (via Kernighan & Ritchie)","BASIC","Pascal","COBOL"],
        answer: 0,
        explanation: "Le « Hello, World! » est apparu dans le livre « The C Programming Language » de Kernighan & Ritchie (1978)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "TypeScript est un sur-ensemble de quel langage ?",
        options: ["Java","JavaScript","CoffeeScript","Dart"],
        answer: 1,
        explanation: "TypeScript ajoute le typage statique à JavaScript. Créé par Microsoft en 2012."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année Linus Torvalds a-t-il annoncé Linux sur Usenet ?",
        options: ["1989","1991","1993","1995"],
        answer: 1,
        explanation: "Le 25 août 1991, Linus poste son célèbre message « I'm doing a (free) operating system (just a hobby) »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "De quelle nationalité est Linus Torvalds ?",
        options: ["Suédois","Finlandais","Norvégien","Danois"],
        answer: 1,
        explanation: "Linus Torvalds est finlandais, né à Helsinki. Il est finno-suédois (minorité suédophone de Finlande)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a fondé la Free Software Foundation et lancé le projet GNU ?",
        options: ["Eric S. Raymond","Linus Torvalds","Richard Stallman","Bruce Perens"],
        answer: 2,
        explanation: "Richard Stallman a lancé GNU en 1983 et fondé la FSF en 1985."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie GNU ?",
        options: ["General Network Utility","GNU's Not Unix","General New Unix","Global Network Unified"],
        answer: 1,
        explanation: "GNU est un acronyme récursif : « GNU's Not Unix »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle distribution Linux utilise le gestionnaire de paquets « pacman » ?",
        options: ["Gentoo","Arch Linux","Slackware","Void Linux"],
        answer: 1,
        explanation: "Arch Linux est connue pour pacman, sa philosophie KISS et sa documentation (le wiki Arch)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle licence open source est la plus « virale » (copyleft fort) ?",
        options: ["MIT","BSD","GPL","Apache 2.0"],
        answer: 2,
        explanation: "La GPL (General Public License) oblige tout dérivé à rester sous GPL."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom du noyau utilisé par macOS ?",
        options: ["Darwin (XNU)","Mach","BSD","Cocoa"],
        answer: 0,
        explanation: "macOS utilise le noyau XNU (X is Not Unix), qui fait partie du projet open source Darwin."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle mascotte représente le projet BSD ?",
        options: ["Un pingouin","Un diablotin rouge","Un gnou","Un caméléon"],
        answer: 1,
        explanation: "Beastie, le diablotin rouge avec une fourche, est la mascotte de BSD depuis les années 1980."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé Git en 2005 ?",
        options: ["Junio Hamano","Linus Torvalds","Guido van Rossum","Theo de Raadt"],
        answer: 1,
        explanation: "Linus Torvalds a créé Git en quelques semaines pour gérer le code du noyau Linux."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Pourquoi Linus Torvalds a-t-il créé Git ?",
        options: ["Pour remplacer Subversion trop lent","Suite à la rupture avec BitKeeper","Par défi personnel pendant un week-end pluvieux","Pour héberger le noyau Linux sur SourceForge"],
        answer: 1,
        explanation: "En 2005, la licence gratuite de BitKeeper a été révoquée, poussant Linus à créer son propre VCS."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel éditeur de texte est associé à la rivalité historique avec Vim ?",
        options: ["Nano","Emacs","Sublime Text","Notepad++"],
        answer: 1,
        explanation: "La guerre Emacs vs Vim dure depuis les années 1980. Emacs est souvent qualifié de « système d'exploitation auquel il manque un bon éditeur »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Vim, quelle commande permet de quitter sans sauvegarder ?",
        options: ["`:wq`","`:q!`","`:exit`","`Ctrl+C`"],
        answer: 1,
        explanation: "`:q!` force la sortie sans sauvegarder. La blague « comment quitter Vim » est un classique du folklore dev."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui est considéré comme l'inventeur du World Wide Web ?",
        options: ["Vint Cerf","Tim Berners-Lee","Marc Andreessen","Robert Cailliau"],
        answer: 1,
        explanation: "Tim Berners-Lee a inventé le Web au CERN en 1989-1990."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quel laboratoire le World Wide Web a-t-il été inventé ?",
        options: ["Xerox PARC","Bell Labs","CERN","MIT Media Lab"],
        answer: 2,
        explanation: "Le CERN à Genève, laboratoire de physique des particules, a vu naître le Web."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie HTTP ?",
        options: ["HyperText Transfer Protocol","High Transfer Text Protocol","HyperText Transport Protocol","Hybrid Text Transfer Protocol"],
        answer: 0,
        explanation: "HyperText Transfer Protocol, le protocole fondamental du Web."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le code de réponse HTTP pour « Not Found » ?",
        options: ["403","404","500","503"],
        answer: 1,
        explanation: "404 Not Found — probablement le code d'erreur le plus connu du grand public."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie le code HTTP 418 ?",
        options: ["Too Many Requests","I'm a teapot","Unavailable For Legal Reasons","Payment Required"],
        answer: 1,
        explanation: "« 418 I'm a teapot » est un poisson d'avril de 1998 (RFC 2324) devenu un easter egg permanent."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel fut le premier navigateur web graphique largement distribué ?",
        options: ["Netscape Navigator","Mosaic","Internet Explorer","WorldWideWeb (Nexus)"],
        answer: 1,
        explanation: "Mosaic (1993), créé par Marc Andreessen au NCSA, a démocratisé le Web auprès du grand public."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel protocole réseau est l'ancêtre d'Internet, initié par la DARPA ?",
        options: ["NSFNET","ARPANET","BITNET","USENET"],
        answer: 1,
        explanation: "ARPANET (1969) a été le premier réseau à utiliser la commutation de paquets."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année le premier email a-t-il été envoyé par Ray Tomlinson ?",
        options: ["1969","1971","1975","1980"],
        answer: 1,
        explanation: "Ray Tomlinson a envoyé le premier email réseau en 1971 sur ARPANET."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Pourquoi Ray Tomlinson a-t-il choisi le symbole @ pour séparer l'utilisateur du domaine dans les emails ?",
        options: ["C'était le seul caractère non utilisé dans les noms","Il trouvait le signe esthétique","C'était une convention militaire","Il a hérité de la tradition du langage BCPL"],
        answer: 0,
        explanation: "Le @ n'apparaissait dans aucun nom de personne, ce qui en faisait un séparateur non ambigu."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé le protocole TCP/IP avec Bob Kahn ?",
        options: ["Jon Postel","Vint Cerf","Paul Baran","Leonard Kleinrock"],
        answer: 1,
        explanation: "Vint Cerf et Bob Kahn ont publié la spécification de TCP en 1974."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie le « S » dans HTTPS ?",
        options: ["Server","Secure","Safe","Session"],
        answer: 1,
        explanation: "HTTPS = HTTP Secure, chiffré via TLS (anciennement SSL)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le port par défaut du protocole SSH ?",
        options: ["21","22","23","25"],
        answer: 1,
        explanation: "SSH utilise le port 22 (21 = FTP, 23 = Telnet, 25 = SMTP)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel moteur de recherche a été lancé en 1998 par Larry Page et Sergey Brin ?",
        options: ["AltaVista","Yahoo!","Google","Lycos"],
        answer: 2,
        explanation: "Google a été fondé en septembre 1998 dans un garage à Menlo Park."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelait Google à l'origine, pendant ses premiers mois de prototype ?",
        options: ["Archie","BackRub","PageRank","Stanford Search"],
        answer: 1,
        explanation: "BackRub analysait les « back links » pour classer les pages. Il a été renommé Google en 1997."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel site était à l'origine une encyclopédie « traditionnelle » avec comité éditorial avant de devenir Wikipedia ?",
        options: ["Citizendium","Nupedia","Everything2","Encarta"],
        answer: 1,
        explanation: "Nupedia (2000) était trop lente ; son wiki annexe est devenu Wikipedia en janvier 2001."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel ver informatique de 1988 a infecté environ 10 % d'Internet à l'époque ?",
        options: ["Code Red","Slammer","Le ver de Morris","ILOVEYOU"],
        answer: 2,
        explanation: "Le ver de Morris (Robert Tappan Morris) a paralysé environ 6000 machines, soit ~10 % d'Internet en 1988."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui est l'auteur du ver de Morris qui a infecté 10 % d'Internet en 1988 ?",
        options: ["Kevin Mitnick","Robert Tappan Morris","Adrian Lamo","Gary McKinnon"],
        answer: 1,
        explanation: "Robert Tappan Morris, alors étudiant à Cornell, a ��té le premier condamné sous le Computer Fraud and Abuse Act."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel hacker célèbre a été arrêté en 1995 après une longue traque par le FBI ?",
        options: ["Kevin Mitnick","Kevin Poulsen","Adrian Lamo","Gary McKinnon"],
        answer: 0,
        explanation: "Kevin Mitnick, le hacker le plus recherché des USA dans les années 90, a été arrêté grâce à Tsutomu Shimomura."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie l'acronyme DDoS ?",
        options: ["Digital Denial of Service","Distributed Denial of Service","Domain Denial of Server","Direct Denial of Service"],
        answer: 1,
        explanation: "Distributed Denial of Service : une attaque menée depuis de multiples machines pour saturer une cible."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom du framework open source célèbre pour les tests d'intrusion ?",
        options: ["Nmap","Wireshark","Metasploit","Burp Suite"],
        answer: 2,
        explanation: "Metasploit (2003) est le framework de référence pour le pentesting, maintenu par Rapid7."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle faille de 2014 dans OpenSSL a été baptisée du nom d'un cœur qui saigne ?",
        options: ["Shellshock","Heartbleed","Spectre","POODLE"],
        answer: 1,
        explanation: "Heartbleed (CVE-2014-0160) permettait de lire la mémoire des serveurs — catastrophe mondiale."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle faille matérielle affectant les CPU Intel a été révélée en janvier 2018 ?",
        options: ["Meltdown","Rowhammer","Foreshadow","ZombieLoad"],
        answer: 0,
        explanation: "Meltdown permettait à un processus de lire la mémoire du noyau via l'exécution spéculative."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est la devise historique des hackers au sens noble du terme ?",
        options: ["\"Information wants to be free\"","\"Code is law\"","\"Don't be evil\"","\"Move fast and break things\""],
        answer: 0,
        explanation: "Phrase de Stewart Brand (1984), devenue le credo du mouvement hacker et de l'open source."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel lanceur d'alerte a révélé les programmes de surveillance de la NSA en 2013 ?",
        options: ["Julian Assange","Chelsea Manning","Edward Snowden","Daniel Ellsberg"],
        answer: 2,
        explanation: "Edward Snowden, ex-contractuel de la NSA, a révélé PRISM et d'autres programmes de surveillance de masse."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie CPU ?",
        options: ["Central Processing Unit","Computer Processing Unit","Central Program Unit","Control Processing Unit"],
        answer: 0,
        explanation: "Central Processing Unit — le processeur central qui exécute les instructions."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle société a été co-fondée par Gordon Moore et Robert Noyce en 1968 ?",
        options: ["AMD","Intel","Texas Instruments","Motorola"],
        answer: 1,
        explanation: "Intel (Integrated Electronics) a dominé le marché des processeurs pendant des décennies."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel composant réalise le calcul massivement parallèle pour le graphisme et le deep learning ?",
        options: ["CPU","GPU","TPU uniquement","FPU"],
        answer: 1,
        explanation: "Le GPU (Graphics Processing Unit) excelle dans le calcul parallèle, essentiel au machine learning."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise conçoit les architectures ARM ?",
        options: ["AMD","Intel","Arm Ltd.","Qualcomm"],
        answer: 2,
        explanation: "Arm Ltd. (Cambridge, UK) conçoit l'architecture et la licencie à d'autres (Apple, Qualcomm, Samsung…)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle puce Apple a marqué la transition x86 → ARM sur Mac ?",
        options: ["A14","M1","M2","T2"],
        answer: 1,
        explanation: "La puce M1 (2020) a marqué l'abandon d'Intel sur les Mac avec des performances/watt spectaculaires."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie RAM ?",
        options: ["Random Access Memory","Read Access Memory","Rapid Access Memory","Runtime Active Memory"],
        answer: 0,
        explanation: "Random Access Memory — mémoire volatile à accès aléatoire (par opposition à séquentiel)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien d'octets dans un kibioctet (KiB) ?",
        options: ["1000","1024","1048","1056"],
        answer: 1,
        explanation: "1 KiB = 2^10 = 1024 octets. Le kilooctet (kB) vaut 1000 octets (norme SI)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de bits dans une adresse IPv4 ?",
        options: ["16","32","64","128"],
        answer: 1,
        explanation: "IPv4 utilise 32 bits (4 octets), soit ~4,3 milliards d'adresses possibles."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie « RTFM » ?",
        options: ["Really This File Matters","Read The Fucking Manual","Run The Full Make","Read The Fine Manual (variante polie)"],
        answer: 1,
        explanation: "« Read The Fucking Manual » — réponse classique des forums quand quelqu'un pose une question documentée."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans « Le Guide du voyageur galactique » de Douglas Adams, quelle est la réponse à la grande question sur la vie, l'univers et le reste ?",
        options: ["7","13","42","0"],
        answer: 2,
        explanation: "42, calculée par l'ordinateur Deep Thought en 7,5 millions d'années. La question, elle, reste inconnue."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelle le protagoniste de « Ready Player One » ?",
        options: ["Wade Watts","Art3mis","Halliday","Sorrento"],
        answer: 0,
        explanation: "Wade Watts (alias Parzival) est le héros du roman d'Ernest Cline (2011)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise Linux a été rachetée par IBM en 2019 pour 34 milliards de dollars ?",
        options: ["Canonical","SUSE","Red Hat","Oracle"],
        answer: 2,
        explanation: "Red Hat, éditeur de RHEL et sponsor de Fedora, a été acquis par IBM."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel easter egg est accessible en tapant « do a barrel roll » sur Google ?",
        options: ["La page clignote","La page fait un tour complet sur elle-même","Un mini-jeu apparaît","Un tonneau roule à l'écran"],
        answer: 1,
        explanation: "La page entière fait une rotation à 360°, en référence au jeu Star Fox."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est l'origine de l'expression « spam » pour désigner les courriels indésirables ?",
        options: ["Un sketch des Monty Python","Une marque de nourriture américaine (Hormel)","Les deux — la marque a inspiré le sketch, qui a inspiré le terme informatique","Un acronyme : Stupid Pointless Annoying Message"],
        answer: 2,
        explanation: "SPAM est une marque de viande en boîte ; les Monty Python en ont fait un sketch répétitif, d'où le terme pour les messages répétitifs."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelle l'écran d'erreur bleu historique de Windows ?",
        options: ["Kernel Panic","BSOD (Blue Screen of Death)","Guru Meditation","Fatal Error 404"],
        answer: 1,
        explanation: "Le BSOD (Blue Screen of Death) est l'écran d'erreur fatale de Windows depuis Windows 3.1."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Sur les ordinateurs Amiga, comment s'appelait l'écran d'erreur système ?",
        options: ["Kernel Panic","Guru Meditation","Red Screen of Annoyance","Sad Mac"],
        answer: 1,
        explanation: "« Guru Meditation » s'affichait en rouge sur fond noir — le nom venait d'un jeu interne chez Amiga."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie « FOSS » ?",
        options: ["Free Open Source Software","Freely Organized Source System","Fully Open Source System","Foundation of Open Source Standards"],
        answer: 0,
        explanation: "Free and Open Source Software — logiciel libre et open source."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est la mascotte officielle du noyau Linux ?",
        options: ["Un gnou (GNU)","Un manchot nommé Tux","Un diablotin rouge (BSD)","Un caméléon (SUSE)"],
        answer: 1,
        explanation: "Tux le manchot a été dessiné par Larry Ewing en 1996. Linus Torvalds aimait les pingouins."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel film de 1982 a popularisé le concept de cyberespace visuel avant le roman « Neuromancien » ?",
        options: ["Akira","Tron","Ghost in the Shell","WarGames"],
        answer: 1,
        explanation: "Tron (Disney, 1982) montre un programmeur aspiré dans un monde informatique. Neuromancien sort en 1984."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a écrit le roman « Neuromancien » (1984), pionnier du cyberpunk ?",
        options: ["Philip K. Dick","William Gibson","Bruce Sterling","Neal Stephenson"],
        answer: 1,
        explanation: "William Gibson a inventé le terme « cyberespace » et lancé le genre cyberpunk avec ce roman."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans « Snow Crash » de Neal Stephenson, quel mot est inventé pour désigner l'univers virtuel immersif ?",
        options: ["Cyberspace","Metaverse","Matrix","Grid"],
        answer: 1,
        explanation: "Le terme « Metaverse » vient de Snow Crash (1992), bien avant que Facebook ne le récupère."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année Wikipedia a-t-elle été lancée ?",
        options: ["1999","2001","2003","2005"],
        answer: 1,
        explanation: "Wikipedia a été lancée le 15 janvier 2001 par Jimmy Wales et Larry Sanger."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie la blague geek « There are 10 kinds of people in the world… » ?",
        options: ["Ceux qui comprennent le binaire et ceux qui ne comprennent pas","Ceux qui codent en C et les autres","Ceux qui utilisent Vim et ceux qui utilisent Emacs","Ceux qui aiment les chats et ceux qui mentent"],
        answer: 0,
        explanation: "10 en binaire = 2 en décimal. La blague est que « 10 » est interprété comme deux (en base 2) par les initiés."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelait Facebook avant de devenir Meta en 2021 ?",
        options: ["TheFacebook","FaceBook Inc.","Facebook Inc.","FaceMash"],
        answer: 2,
        explanation: "L'entreprise s'appelait Facebook Inc. Mark Zuckerberg l'a renommée Meta en octobre 2021."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel est le nom du co-fondateur d'Apple mort en 2011 ?",
        answers: ["steve jobs","jobs"],
        explanation: "Steve Jobs, visionnaire et co-fondateur d'Apple, est décédé le 5 octobre 2011."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel réseau social est connu pour ses messages limités à 280 caractères ?",
        options: ["Instagram","Facebook","Twitter / X","LinkedIn"],
        answer: 2,
        explanation: "Twitter (devenu X) a longtemps limité les tweets à 140 puis 280 caractères."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie le « Wi » dans Wi-Fi ?",
        options: ["Wireless","Wide","Rien, c'est un nom commercial inventé","Windows"],
        answer: 2,
        explanation: "Wi-Fi ne signifie rien ! C'est un nom de marque créé par une agence de pub, inspiré de Hi-Fi."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
        answers: ["minecraft"],
        explanation: "Minecraft s'est vendu à plus de 300 millions d'exemplaires, devant GTA V et Tetris."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel moteur de recherche respectueux de la vie privée plante des arbres avec ses revenus ?",
        options: ["DuckDuckGo","Ecosia","Qwant","Brave Search"],
        answer: 1,
        explanation: "Ecosia utilise ses revenus publicitaires pour planter des arbres dans le monde entier."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Le premier iPhone est sorti en 2007.",
        answer: "oui",
        explanation: "Vrai ! Steve Jobs a présenté le premier iPhone le 9 janvier 2007 lors de la keynote Apple."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quel film de 1999 le personnage de Neo découvre-t-il que le monde est une simulation ?",
        options: ["Inception","Tron","Matrix","Blade Runner"],
        answer: 2,
        explanation: "Matrix des Wachowski est devenu un film culte de la culture geek et de la philosophie."
    },
    {
        category: "geek",
        type: "free",
        question: "Comment appelle-t-on un programme malveillant qui se propage d'ordinateur en ordinateur ?",
        answers: ["virus","un virus","virus informatique"],
        explanation: "Un virus informatique se réplique en infectant d'autres programmes ou fichiers."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel géant du web est surnommé « la firme de Cupertino » ?",
        options: ["Google","Microsoft","Apple","Amazon"],
        answer: 2,
        explanation: "Apple a son siège à Cupertino, en Californie (Apple Park)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de caractères composent un mot de passe considéré comme « fort » au minimum ?",
        options: ["6","8","12","20"],
        answer: 2,
        explanation: "Les recommandations actuelles de l'ANSSI préconisent au moins 12 caractères pour un mot de passe solide."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Le Bluetooth doit son nom à un roi viking danois.",
        answer: "oui",
        explanation: "Vrai ! Harald « Bluetooth » (Dent Bleue) était un roi danois du Xᵉ siècle qui a unifié les tribus scandinaves — comme le protocole unifie les appareils."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le navigateur web le plus utilisé au monde en 2024 ?",
        options: ["Safari","Firefox","Chrome","Edge"],
        answer: 2,
        explanation: "Google Chrome domine avec environ 65 % de parts de marché mondial."
    },
    {
        category: "geek",
        type: "free",
        question: "Comment s'appelle l'assistant vocal d'Amazon ?",
        answers: ["alexa"],
        explanation: "Alexa est l'assistant vocal intégré aux enceintes Echo d'Amazon depuis 2014."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie l'acronyme PDF ?",
        options: ["Portable Document Format","Print Document File","Public Data Format","Printed Digital File"],
        answer: 0,
        explanation: "Portable Document Format, créé par Adobe en 1993 pour partager des documents de manière universelle."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel jeu mobile a rendu célèbre les oiseaux lancés sur des cochons ?",
        options: ["Candy Crush","Angry Birds","Flappy Bird","Clash of Clans"],
        answer: 1,
        explanation: "Angry Birds de Rovio (2009) a été téléchargé plus de 2 milliards de fois."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Amazon a commencé comme une librairie en ligne.",
        answer: "oui",
        explanation: "Vrai ! Jeff Bezos a fondé Amazon en 1994 comme une boutique de livres en ligne depuis son garage."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel personnage de jeu vidéo est un plombier moustachu créé par Nintendo ?",
        options: ["Sonic","Mario","Pac-Man","Donkey Kong"],
        answer: 1,
        explanation: "Mario, créé par Shigeru Miyamoto en 1981, est la mascotte de Nintendo."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel site permet de regarder et partager des vidéos, racheté par Google en 2006 ?",
        answers: ["youtube"],
        explanation: "YouTube a été créé en 2005 et racheté par Google pour 1,65 milliard de dollars en 2006."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie « Ctrl+Z » sur un ordinateur ?",
        options: ["Copier","Coller","Annuler","Fermer"],
        answer: 2,
        explanation: "Ctrl+Z est le raccourci universel pour annuler la dernière action."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le vrai nom du créateur de Facebook ?",
        options: ["Bill Gates","Jeff Bezos","Mark Zuckerberg","Elon Musk"],
        answer: 2,
        explanation: "Mark Zuckerberg a créé Facebook en 2004 depuis sa chambre à Harvard."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Le premier site web de l'histoire est toujours en ligne.",
        answer: "oui",
        explanation: "Vrai ! Le site info.cern.ch créé par Tim Berners-Lee en 1991 est toujours accessible."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quelle série un lycéen devient-il le justicier « Mr. Robot » en hackant une multinationale ?",
        options: ["Black Mirror","Mr. Robot","Silicon Valley","Halt and Catch Fire"],
        answer: 1,
        explanation: "Mr. Robot (2015-2019) suit Elliot Alderson, un hacker brillant mais instable, incarné par Rami Malek."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel emoji a été élu « mot de l'année » par Oxford Dictionaries en 2015 ?",
        options: ["❤️","😂","🤔","👍"],
        answer: 1,
        explanation: "😂 (Face with Tears of Joy) a été élu mot de l'année 2015, une première pour un emoji."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien y a-t-il environ de sites web actifs dans le monde ?",
        options: ["2 millions","200 millions","2 milliards","200 milliards"],
        answer: 1,
        explanation: "Il y a environ 200 millions de sites web actifs (sur ~2 milliards de noms de domaine enregistrés)."
    },

    // ═══════════════════════════════════════
    // 🔬 SCIENCE (nature, espace, corps humain, physique)
    // ═══════════════════════════════════════
    {
        category: "science",
        type: "mcq",
        question: "Quelle planète est la plus proche du Soleil ?",
        options: ["Vénus", "Mercure", "Mars", "Terre"],
        answer: 1,
        explanation: "Mercure est à environ 58 millions de km du Soleil."
    },
    {
        category: "science",
        type: "free",
        question: "Quel est le symbole chimique de l'or ?",
        answers: ["au"],
        explanation: "Au, du latin 'aurum'. L'or a le numéro atomique 79."
    },
    {
        category: "science",
        type: "mcq",
        question: "Combien d'os possède le corps humain adulte ?",
        options: ["186", "206", "226", "256"],
        answer: 1,
        explanation: "Un adulte a 206 os. Un bébé en a environ 270 qui fusionnent en grandissant."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quelle est la vitesse de la lumière (approximativement) ?",
        options: ["100 000 km/s", "200 000 km/s", "300 000 km/s", "400 000 km/s"],
        answer: 2,
        explanation: "La vitesse de la lumière est d'environ 299 792 km/s dans le vide."
    },
    {
        category: "science",
        type: "free",
        question: "Quel gaz représente environ 78% de l'atmosphère terrestre ?",
        answers: ["azote", "l'azote", "diazote", "n2"],
        explanation: "L'azote (N₂) compose ~78% de l'air, devant l'oxygène (~21%)."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est l'animal terrestre le plus rapide ?",
        options: ["Lion", "Guépard", "Antilope", "Lévrier"],
        answer: 1,
        explanation: "Le guépard peut atteindre 120 km/h sur de courtes distances."
    },
    {
        category: "science",
        type: "mcq",
        question: "Combien de temps met la lumière du Soleil pour atteindre la Terre ?",
        options: ["1 minute", "4 minutes", "8 minutes", "15 minutes"],
        answer: 2,
        explanation: "La lumière du Soleil met environ 8 minutes et 20 secondes."
    },
    {
        category: "science",
        type: "free",
        question: "Quel scientifique a formulé la théorie de la gravitation universelle ?",
        answers: ["newton", "isaac newton"],
        explanation: "Isaac Newton a publié ses Principia Mathematica en 1687."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est le plus grand organe du corps humain ?",
        options: ["Le foie", "Les poumons", "La peau", "L'intestin"],
        answer: 2,
        explanation: "La peau mesure environ 2 m² et pèse entre 3 et 5 kg chez l'adulte."
    },
    {
        category: "science",
        type: "mcq",
        question: "Combien de pattes a une araignée ?",
        options: ["6", "8", "10", "12"],
        answer: 1,
        explanation: "Les araignées sont des arachnides à 8 pattes, pas des insectes (6 pattes)."
    },
    {
        category: "science",
        type: "free",
        question: "Quel est le plus grand océan du monde ?",
        answers: ["pacifique", "le pacifique", "ocean pacifique", "l'ocean pacifique"],
        explanation: "L'océan Pacifique couvre environ 165 millions de km², soit un tiers de la Terre."
    },
    {
        category: "science",
        type: "yesno",
        question: "Le cerveau humain consomme environ 20% de l'énergie du corps.",
        answer: "oui",
        explanation: "Vrai ! Bien qu'il ne représente que 2% de la masse corporelle, le cerveau consomme ~20% de l'énergie."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est l'élément le plus abondant dans l'univers ?",
        options: ["Oxygène", "Carbone", "Hélium", "Hydrogène"],
        answer: 3,
        explanation: "L'hydrogène représente environ 75% de la masse de l'univers."
    },
    {
        category: "science",
        type: "yesno",
        question: "Un octopus a trois cœurs.",
        answer: "oui",
        explanation: "Vrai ! Un cœur principal et deux cœurs branchiaux pour oxygéner le sang."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quelle est la planète la plus grande du système solaire ?",
        options: ["Saturne", "Jupiter", "Neptune", "Uranus"],
        answer: 1,
        explanation: "Jupiter est la plus grande planète, avec un diamètre de ~140 000 km."
    },
    {
        category: "science",
        type: "free",
        question: "Quel est le métal liquide à température ambiante ?",
        answers: ["mercure", "le mercure", "hg"],
        explanation: "Le mercure (Hg) est le seul métal liquide à température ambiante (point de fusion : -39°C)."
    },
    {
        category: "science",
        type: "mcq",
        question: "Combien de chromosomes possède une cellule humaine normale ?",
        options: ["23", "44", "46", "48"],
        answer: 2,
        explanation: "Une cellule humaine contient 46 chromosomes (23 paires), dont 2 chromosomes sexuels."
    },
    {
        category: "science",
        type: "yesno",
        question: "La Terre est plus proche du Soleil en hiver (dans l'hémisphère nord) qu'en été.",
        answer: "oui",
        explanation: "Vrai ! La Terre est au plus proche du Soleil début janvier. Les saisons sont dues à l'inclinaison de l'axe terrestre."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est le gaz responsable de l'effet de serre le plus médiatisé ?",
        options: ["Méthane", "Ozone", "Dioxyde de carbone", "Vapeur d'eau"],
        answer: 2,
        explanation: "Le CO₂ est le gaz à effet de serre le plus médiatisé, bien que la vapeur d'eau soit le plus important en volume."
    },
    {
        category: "science",
        type: "free",
        question: "Quel est le plus petit os du corps humain ?",
        answers: ["etrier", "l'etrier", "stapes"],
        explanation: "L'étrier (stapes) dans l'oreille interne mesure environ 3 mm."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel animal peut survivre dans le vide de l'espace ?",
        options: ["Le cafard", "Le tardigrade", "La méduse", "Le scorpion"],
        answer: 1,
        explanation: "Le tardigrade, microscopique, peut survivre au vide spatial, aux radiations et aux températures extrêmes."
    },
    {
        category: "science",
        type: "yesno",
        question: "Le son voyage plus vite dans l'eau que dans l'air.",
        answer: "oui",
        explanation: "Vrai ! Le son voyage à ~1 500 m/s dans l'eau contre ~340 m/s dans l'air."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quelle est la formule chimique de l'eau ?",
        options: ["HO₂", "H₂O", "CO₂", "O₂H"],
        answer: 1,
        explanation: "H₂O : deux atomes d'hydrogène et un atome d'oxygène."
    },
    {
        category: "science",
        type: "free",
        question: "Quel organe du corps humain produit l'insuline ?",
        answers: ["pancreas", "le pancreas"],
        explanation: "Le pancréas produit l'insuline via les îlots de Langerhans pour réguler la glycémie."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel phénomène naturel est mesuré par l'échelle de Richter ?",
        options: ["Les ouragans", "Les séismes", "Les tsunamis", "Les éruptions volcaniques"],
        answer: 1,
        explanation: "L'échelle de Richter mesure la magnitude des tremblements de terre."
    },
    {
        category: "science",
        type: "yesno",
        question: "La Lune a une face que l'on ne voit jamais depuis la Terre.",
        answer: "oui",
        explanation: "Vrai ! La rotation synchrone fait que la Lune montre toujours la même face à la Terre."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est le processus par lequel les plantes convertissent la lumière en énergie ?",
        options: ["La respiration", "La fermentation", "La photosynthèse", "L'osmose"],
        answer: 2,
        explanation: "La photosynthèse convertit le CO₂ et l'eau en glucose et oxygène grâce à la lumière."
    },
    {
        category: "science",
        type: "free",
        question: "Quel est le nom de la couche de gaz qui protège la Terre des rayons UV ?",
        answers: ["couche d'ozone", "ozone", "l'ozone"],
        explanation: "La couche d'ozone (O₃) dans la stratosphère filtre les rayons ultraviolets nocifs du Soleil."
    },
    {
        category: "science",
        type: "mcq",
        question: "Quel est le mammifère le plus grand ayant jamais existé ?",
        options: ["L'éléphant d'Afrique", "Le mammouth", "La baleine bleue", "Le mégalodon"],
        answer: 2,
        explanation: "La baleine bleue peut atteindre 30 mètres et 170 tonnes, le plus grand animal ayant jamais vécu."
    },
    {
        category: "science",
        type: "mcq",
        question: "Combien de planètes composent notre système solaire ?",
        options: ["7", "8", "9", "10"],
        answer: 1,
        explanation: "8 planètes depuis 2006 : Pluton a été reclassée en planète naine par l'Union astronomique internationale."
    },

    // ═══════════════════════════════════════
    // 📜 HISTOIRE (événements historiques, civilisations)
    // ═══════════════════════════════════════
    {
        category: "histoire",
        type: "mcq",
        question: "En quelle année a eu lieu la Révolution française ?",
        options: ["1776", "1789", "1799", "1804"],
        answer: 1,
        explanation: "La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution."
    },
    {
        category: "histoire",
        type: "free",
        question: "Qui a peint la Joconde ?",
        answers: ["leonard de vinci", "vinci", "de vinci", "leonard", "leonardo da vinci", "da vinci"],
        explanation: "Léonard de Vinci a peint la Joconde (Mona Lisa) vers 1503-1519."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel événement a marqué le début de la Première Guerre mondiale ?",
        options: ["L'invasion de la Pologne", "L'assassinat de l'archiduc François-Ferdinand", "Le naufrage du Lusitania", "La bataille de Verdun"],
        answer: 1,
        explanation: "L'assassinat de l'archiduc François-Ferdinand d'Autriche le 28 juin 1914 à Sarajevo."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "En quelle année le mur de Berlin est-il tombé ?",
        options: ["1987", "1988", "1989", "1990"],
        answer: 2,
        explanation: "Le mur de Berlin est tombé le 9 novembre 1989."
    },
    {
        category: "histoire",
        type: "free",
        question: "Quel pharaon est associé au célèbre masque funéraire en or ?",
        answers: ["toutankhamon", "toutankamon", "tutankamon", "tutankhamon", "king tut"],
        explanation: "Le masque funéraire de Toutânkhamon, découvert par Howard Carter en 1922."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel explorateur est crédité de la découverte de l'Amérique en 1492 ?",
        options: ["Magellan", "Vasco de Gama", "Christophe Colomb", "Amerigo Vespucci"],
        answer: 2,
        explanation: "Christophe Colomb a atteint les Amériques le 12 octobre 1492."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
        options: ["1965", "1967", "1969", "1971"],
        answer: 2,
        explanation: "Neil Armstrong a posé le pied sur la Lune le 21 juillet 1969 (mission Apollo 11)."
    },
    {
        category: "histoire",
        type: "free",
        question: "Comment s'appelait le navire qui a coulé après avoir heurté un iceberg en 1912 ?",
        answers: ["titanic", "le titanic", "rms titanic"],
        explanation: "Le RMS Titanic a coulé dans la nuit du 14 au 15 avril 1912."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quelle civilisation a construit le Machu Picchu ?",
        options: ["Aztèques", "Mayas", "Incas", "Olmèques"],
        answer: 2,
        explanation: "Le Machu Picchu a été construit par les Incas au XVe siècle au Pérou."
    },
    {
        category: "histoire",
        type: "free",
        question: "Dans quelle ville se trouve le Colisée antique ?",
        answers: ["rome", "roma"],
        explanation: "Le Colisée de Rome, construit entre 70 et 80 apr. J.-C., pouvait accueillir 50 000 spectateurs."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel roi de France était surnommé le Roi-Soleil ?",
        options: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"],
        answer: 1,
        explanation: "Louis XIV (1638-1715), le Roi-Soleil, a régné 72 ans et fait construire Versailles."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel empire a dominé la Méditerranée pendant l'Antiquité avec des empereurs comme Auguste et Néron ?",
        options: ["L'Empire grec", "L'Empire romain", "L'Empire perse", "L'Empire carthaginois"],
        answer: 1,
        explanation: "L'Empire romain, fondé en 27 av. J.-C., a dominé la Méditerranée pendant des siècles."
    },
    {
        category: "histoire",
        type: "free",
        question: "Quel empereur français a été exilé sur l'île de Sainte-Hélène ?",
        answers: ["napoleon", "napoleon bonaparte", "napoleon 1er", "napoleon ier", "bonaparte"],
        explanation: "Napoléon Bonaparte a été exilé à Sainte-Hélène après Waterloo en 1815."
    },
    {
        category: "histoire",
        type: "yesno",
        question: "La Seconde Guerre mondiale a commencé en 1939.",
        answer: "oui",
        explanation: "Vrai ! La WWII a commencé le 1er septembre 1939 avec l'invasion de la Pologne par l'Allemagne nazie."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quelle merveille du monde antique subsiste encore aujourd'hui ?",
        options: ["Le Colosse de Rhodes", "Les Jardins de Babylone", "La Pyramide de Khéops", "Le Phare d'Alexandrie"],
        answer: 2,
        explanation: "La Grande Pyramide de Khéops à Gizeh est la seule des 7 merveilles antiques encore debout."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel peuple a inventé l'écriture cunéiforme, considérée comme la première écriture de l'histoire ?",
        options: ["Les Égyptiens", "Les Sumériens", "Les Chinois", "Les Phéniciens"],
        answer: 1,
        explanation: "Les Sumériens de Mésopotamie ont inventé l'écriture cunéiforme vers 3400 av. J.-C."
    },
    {
        category: "histoire",
        type: "free",
        question: "Quel navigateur portugais a réalisé le premier tour du monde (complété après sa mort) ?",
        answers: ["magellan", "fernand de magellan", "fernao de magalhaes"],
        explanation: "Magellan a lancé l'expédition en 1519, mais il est mort aux Philippines. Son équipage a terminé en 1522."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "En quelle année a été signée la Déclaration d'indépendance des États-Unis ?",
        options: ["1774", "1776", "1783", "1789"],
        answer: 1,
        explanation: "La Déclaration d'indépendance a été adoptée le 4 juillet 1776 à Philadelphie."
    },
    {
        category: "histoire",
        type: "yesno",
        question: "Jeanne d'Arc a été brûlée vive à Paris.",
        answer: "non",
        explanation: "Faux ! Jeanne d'Arc a été brûlée vive à Rouen le 30 mai 1431."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel peuple ancien a construit des pyramides à degrés en Amérique centrale ?",
        options: ["Les Incas", "Les Mayas", "Les Vikings", "Les Celtes"],
        answer: 1,
        explanation: "Les Mayas ont construit des pyramides à degrés comme celle de Chichén Itzá au Mexique."
    },
    {
        category: "histoire",
        type: "free",
        question: "Quel célèbre général carthaginois a traversé les Alpes avec des éléphants ?",
        answers: ["hannibal", "hannibal barca"],
        explanation: "Hannibal Barca a traversé les Alpes en 218 av. J.-C. avec ses éléphants pour attaquer Rome."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quelle dynastie a régné sur la Chine et construit la Grande Muraille ?",
        options: ["La dynastie Ming", "La dynastie Qin", "La dynastie Han", "La dynastie Tang"],
        answer: 1,
        explanation: "La dynastie Qin (221-206 av. J.-C.) a initié la construction de la Grande Muraille sous Qin Shi Huang."
    },
    {
        category: "histoire",
        type: "yesno",
        question: "Le Débarquement en Normandie a eu lieu le 6 juin 1944.",
        answer: "oui",
        explanation: "Vrai ! Le D-Day, le 6 juin 1944, est la plus grande opération amphibie de l'histoire."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel événement a mis fin à la Seconde Guerre mondiale dans le Pacifique ?",
        options: ["La bataille de Midway", "Les bombes atomiques sur Hiroshima et Nagasaki", "La bataille d'Iwo Jima", "L'invasion du Japon"],
        answer: 1,
        explanation: "Les bombes sur Hiroshima (6 août) et Nagasaki (9 août 1945) ont conduit à la capitulation du Japon."
    },
    {
        category: "histoire",
        type: "free",
        question: "Quel moine allemand a lancé la Réforme protestante en 1517 ?",
        answers: ["luther", "martin luther"],
        explanation: "Martin Luther a affiché ses 95 thèses en 1517, lançant la Réforme protestante."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel traité a mis fin à la Première Guerre mondiale ?",
        options: ["Le traité de Paris", "Le traité de Versailles", "Le traité de Vienne", "Le traité de Rome"],
        answer: 1,
        explanation: "Le traité de Versailles, signé le 28 juin 1919, a officiellement mis fin à la Première Guerre mondiale."
    },
    {
        category: "histoire",
        type: "yesno",
        question: "Vercingétorix était un chef gaulois qui s'est opposé à Jules César.",
        answer: "oui",
        explanation: "Vrai ! Vercingétorix a mené la révolte gauloise contre César en 52 av. J.-C. avant de se rendre à Alésia."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quelle reine de France a été surnommée 'l'Autrichienne' et guillotinée en 1793 ?",
        options: ["Marie de Médicis", "Marie-Antoinette", "Anne d'Autriche", "Catherine de Médicis"],
        answer: 1,
        explanation: "Marie-Antoinette, épouse de Louis XVI, a été guillotinée le 16 octobre 1793."
    },
    {
        category: "histoire",
        type: "free",
        question: "Dans quel pays les samouraïs étaient-ils des guerriers nobles ?",
        answers: ["japon", "le japon"],
        explanation: "Les samouraïs étaient la classe guerrière noble du Japon féodal, du XIIe au XIXe siècle."
    },
    {
        category: "histoire",
        type: "mcq",
        question: "Quel philosophe grec est considéré comme le père de la démocratie athénienne ?",
        options: ["Socrate", "Aristote", "Périclès", "Platon"],
        answer: 2,
        explanation: "Périclès (495-429 av. J.-C.) a renforcé et étendu la démocratie athénienne à son apogée."
    },

    // ═══════════════════════════════════════
    // 🍊 TRUMP — "Trump a dit" ou "Trump a pas (encore) dit"
    // Citations en VO pour garder la saveur du style
    // ═══════════════════════════════════════

    // --- VRAIES CITATIONS (vérifiables) ---
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment dit : \"I have the best words.\" (J'ai les meilleurs mots.) ?",
        answer: "oui",
        explanation: "Meeting en Caroline du Sud, décembre 2015. Mot pour mot."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I know more about ISIS than the generals do. Believe me.\" (J'en sais plus sur Daech que les généraux. Croyez-moi.) ?",
        answer: "oui",
        explanation: "Meeting de campagne, novembre 2015."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il écrit : \"My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.\" (Mes doigts sont longs et beaux, comme, c'est bien documenté, d'autres parties de mon corps.) ?",
        answer: "oui",
        explanation: "Tweet de 2011. Il répondait à des moqueries sur la taille de ses mains."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I'm a very stable genius.\" (Je suis un génie très stable.) ?",
        answer: "oui",
        explanation: "Tweet du 6 janvier 2018, en réponse aux doutes sur sa santé mentale."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Nobody knew healthcare could be so complicated.\" (Personne ne savait que la santé pouvait être si compliqué.) ?",
        answer: "oui",
        explanation: "Conférence avec des gouverneurs, février 2017. Tout le monde le savait, sauf lui apparemment."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré : \"I love the poorly educated.\" (J'aime les gens peu éduqués.) ?",
        answer: "oui",
        explanation: "Discours de victoire aux primaires du Nevada, février 2016."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Why are we having all these people from shithole countries come here?\" (Pourquoi on accepte tous ces gens de pays de merde ?) ?",
        answer: "oui",
        explanation: "Réunion au Bureau Ovale sur l'immigration, janvier 2018. Rapporté par le Washington Post."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit \"Maybe he did it, maybe he didn't!\" (Peut-être qu'il l'a fait, peut-être pas !) à propos de Kim Jong-un et la mort d'Otto Warmbier ?",
        answer: "oui",
        explanation: "Il a pris la défense de Kim Jong-un après la mort de l'étudiant américain détenu en Corée du Nord."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il tweeté : \"It's freezing and snowing in New York — we need global warming!\" (Il gèle et il neige à New York — on a besoin du réchauffement climatique !) ?",
        answer: "oui",
        explanation: "Tweet de 2013. Il confond météo locale et climat global."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Après avoir suggéré d'injecter du désinfectant contre le Covid, Trump a-t-il dit : \"I was sarcastic.\" (J'étais sarcastique.) ?",
        answer: "oui",
        explanation: "Avril 2020. Après le tollé, il a prétendu que c'était du sarcasme. La vidéo montre clairement le contraire."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Grab 'em by the pussy.\" (Attrapez-les par la chatte.) ?",
        answer: "oui",
        explanation: "Bande Access Hollywood enregistrée en 2005, révélée en octobre 2016 pendant la campagne."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il tweeté \"Covfefe\" sans jamais expliquer ce que ça voulait dire ?",
        answer: "oui",
        explanation: "Tweet resté inexpliqué, mai 2017. Son porte-parole Spicer a prétendu que « le président et un petit groupe de personnes savaient exactement ce que cela signifiait »."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I could stand in the middle of Fifth Avenue and shoot somebody and I wouldn't lose any voters.\" (Je pourrais me tenir au milieu de la 5e Avenue et tirer sur quelqu'un sans perdre un seul électeur.) ?",
        answer: "oui",
        explanation: "Meeting en Iowa, janvier 2016."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"And they say the noise [from windmills] causes cancer.\" (Et ils disent que le bruit [des éoliennes] cause le cancer.) ?",
        answer: "oui",
        explanation: "Dîner du NRCC, avril 2019. Aucune preuve scientifique n'existe à ce sujet."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I know more about wind than you do.\" (J'en sais plus sur le vent que vous.) ?",
        answer: "oui",
        explanation: "Même discours sur les éoliennes, avril 2019."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il proposé de bombarder les ouragans avec des bombes nucléaires — \"Why don't we nuke the hurricane?\" ?",
        answer: "oui",
        explanation: "Rapporté par Axios, août 2019, lors d'un briefing."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Nobody knows the system better than me, which is why I alone can fix it.\" (Personne ne connaît mieux le système que moi, c'est pourquoi moi seul peux le réparer.) ?",
        answer: "oui",
        explanation: "Convention républicaine nationale, juillet 2016."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit \"We fell in love. He wrote me beautiful letters.\" (On est tombés amoureux. Il m'a écrit de belles lettres.) à propos de Kim Jong-un ?",
        answer: "oui",
        explanation: "Meeting en septembre 2018, à propos du dictateur nord-coréen."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il tweeté : \"My button is much bigger & more powerful than his, and my Button works!\" (Mon bouton est bien plus gros et puissant que le sien, et mon bouton marche !) à propos de Kim Jong-un ?",
        answer: "oui",
        explanation: "Tweet de janvier 2018, en réponse aux menaces nucléaires nord-coréennes."
    },

    // --- FAUSSES CITATIONS (inventées mais plausibles) ---
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Sharks are very dangerous, but crocodiles — crocodiles are worse. Nobody talks about it. Believe me.\" (Les requins c'est dangereux, mais les crocodiles c'est pire. Personne n'en parle. Croyez-moi.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée utilisant ses tics : superlatifs, « nobody talks about it », « believe me »."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"My uncle was at MIT. Smart genes. Very smart. So when I talk about nuclear, I know nuclear. Probably better than most of the scientists.\" (Mon oncle était au MIT. Gènes intelligents. Donc quand je parle de nucléaire, je connais. Probablement mieux que la plupart des scientifiques.) ?",
        answer: "non",
        explanation: "Faux ! Bien qu'il mentionne souvent son oncle du MIT, cette citation exacte est inventée. La vraie est presque aussi absurde."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"The wind, it's beautiful, but it kills eagles. Thousands of eagles. Nobody wants to talk about the eagles.\" (Le vent, c'est beau, mais ça tue des aigles. Des milliers d'aigles. Personne ne veut en parler.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée, mais il a réellement affirmé que les éoliennes tuent les oiseaux à de nombreuses reprises."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Penguins — the way they walk — it's a very smart strategy. Very underrated animals.\" (Les pingouins — leur façon de marcher — c'est une stratégie très intelligente. Des animaux très sous-estimés.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée. Trump n'a jamais parlé de pingouins en public."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"People ask me all the time, sir, how do you know so much about submarines? I just know. It's in the genes.\" (On me demande tout le temps, monsieur, comment vous en savez autant sur les sous-marins ? Je sais, c'est tout. C'est dans les gènes.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée utilisant son tic du « sir » et sa théorie des bons gènes."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Tariffs are the most beautiful word. More beautiful than 'love'. Maybe more beautiful than 'religion'.\" (Les droits de douane, c'est le plus beau mot. Plus beau qu'« amour ». Peut-être plus beau que « religion ».) ?",
        answer: "non",
        explanation: "Faux ! Bien qu'il ait dit que « tariff » est son mot préféré, cette citation complète est inventée."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I could have been a great golfer — the best — but I chose to be president. That was my sacrifice.\" (J'aurais pu être un grand golfeur — le meilleur — mais j'ai choisi d'être président. C'était mon sacrifice.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée, combinant sa vantardise sur le golf et son auto-victimisation."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Mars — Mars is where the winners go. We're going to Mars. Big league.\" (Mars — Mars, c'est là où vont les gagnants. On va sur Mars. En grand.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée. Mais il a réellement affirmé que « la Lune fait partie de Mars » dans un tweet."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"I know more about tariffs than any economist. I've read all the books. Well, the important parts. The best parts.\" (J'en sais plus sur les tarifs que n'importe quel économiste. J'ai lu tous les livres. Enfin, les parties importantes. Les meilleures parties.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée utilisant son tic de s'auto-proclamer expert et de se corriger à mi-phrase."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : \"Autism — very sad — but it's because of shampoo. Nobody checks the shampoo.\" (L'autisme — très triste — mais c'est à cause du shampoing. Personne ne vérifie le shampoing.) ?",
        answer: "non",
        explanation: "Faux ! Citation inventée. Bien que Trump ait fait le lien entre vaccins et autisme (également faux), il n'a jamais mentionné le shampoing."
    },

    // ═══════════════════════════════════════
    // 🐭 ANIME & DISNEY (des grands classiques Disney aux shonen modernes)
    // ═══════════════════════════════════════
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quelle est l'année de sortie du premier long-métrage d'animation Disney, Blanche-Neige et les Sept Nains ?",
        options: ["1929", "1937", "1942", "1950"],
        answer: 1,
        explanation: "Sorti le 21 décembre 1937, c'est aussi le premier long-métrage d'animation en couleur et en son stéréo de l'histoire du cinéma américain."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Pinocchio (1940), comment s'appelle le grillon qui sert de conscience au pantin de bois ?",
        options: ["Jiminy Cricket", "Timothy Mouse", "Figaro", "Gideon"],
        answer: 0,
        explanation: "Jiminy Cricket devient officiellement la « conscience » de Pinocchio dans le film ; il chante « When You Wish Upon a Star »."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Bambi (1942), comment s'appelle le lapin qui devient son meilleur ami ?",
        options: ["Bugs", "Panpan", "Féline", "Fleur"],
        answer: 1,
        explanation: "Panpan (Thumper en VO) tape du pied en permanence. Fleur est la moufette, Féline est la biche amoureuse de Bambi."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans La Petite Sirène (1989), comment s'appelle le petit poisson jaune et bleu, meilleur ami d'Ariel ?",
        answers: ["polochon", "Polochon", "Flounder", "flounder"],
        explanation: "Polochon en VF, Flounder en VO. Il accompagne Ariel dans toutes ses aventures sous-marines."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans La Belle au bois dormant (1959), comment s'appellent les trois bonnes fées ?",
        options: ["Flora, Pâquerette, Pimprenelle", "Bella, Stella, Luna", "Rose, Marie, Violette", "Aurore, Éveil, Matin"],
        answer: 0,
        explanation: "Flora (rouge), Pâquerette (vert), Pimprenelle (bleu) offrent à Aurore les dons de beauté, de chant et de sommeil protecteur."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quel est le vrai nom du capitaine Crochet dans Peter Pan (1953) ?",
        options: ["James Hook", "Edward Teach", "Long John Silver", "Blackbeard Jones"],
        answer: 0,
        explanation: "Le capitaine Crochet (Hook en VO) se nomme James Bartholomew Hook. Il a perdu sa main droite, dévorée par un crocodile."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Dans Dumbo (1941), la plume magique que l'éléphanteau tient dans sa trompe est réellement enchantée ?",
        answer: "non",
        explanation: "Faux ! La plume est un simple placebo donné par Timothée. Dumbo vole grâce à ses grandes oreilles — la plume le rassure, c'est tout."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Les 101 Dalmatiens (1961), combien de chiots Pongo et Perdita ont-ils eux-mêmes (avant de recueillir les autres) ?",
        options: ["7", "12", "15", "21"],
        answer: 2,
        explanation: "Perdita donne naissance à 15 chiots. Avec les 84 dalmatiens rachetés à Cruella, cela fait un total de 99 chiots + les 2 parents = 101."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Livre de la Jungle (1967), quel animal est Baloo ?",
        options: ["Un tigre", "Un ours", "Une panthère", "Un loup"],
        answer: 1,
        explanation: "Baloo est un ours paresseux qui enseigne à Mowgli la philosophie du « il en faut peu pour être heureux »."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Les Aristochats (1970), comment s'appelle la chatte blanche, mère de la famille ?",
        options: ["Duchesse", "Marie", "Félicie", "Blanche"],
        answer: 0,
        explanation: "Duchesse est la mère. Marie, Toulouse et Berlioz sont ses trois chatons. Thomas O'Malley est le matou de gouttière qui les sauve."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Robin des Bois (1973) version Disney, quel animal incarne le prince Jean ?",
        options: ["Un renard", "Un loup", "Un lion", "Un ours"],
        answer: 2,
        explanation: "Le prince Jean est un lion (pouce qu'il suce) ; Robin des Bois est un renard ; le shérif de Nottingham, un loup."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans La Belle et la Bête (1991), quel objet enchanté est devenu l'horloge nommée « Big Ben » en VF ?",
        options: ["Une pendule de grand-père", "Une théière", "Un chandelier", "Une armoire"],
        answer: 0,
        explanation: "Big Ben (Cogsworth en VO) est la pendule strictement réglée. Lumière est le chandelier, Mrs Samovar la théière, Zip la petite tasse."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Aladdin (1992), quel est le nom du tigre de Jasmine ?",
        options: ["Shere Khan", "Rajah", "Tigger", "Simba"],
        answer: 1,
        explanation: "Rajah protège farouchement Jasmine. Il accueille Aladdin à coups de crocs lors de leur première rencontre."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Le Roi Lion (1994), comment s'appelle le roi, père de Simba ?",
        answers: ["Mufasa", "mufasa"],
        explanation: "Mufasa est tué par son propre frère Scar, qui le fait tomber dans un troupeau de gnous en faisant croire à Simba que c'est de sa faute."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Mulan (1998), quel est le nom du petit dragon rouge qui accompagne l'héroïne ?",
        options: ["Mushu", "Cri-Kee", "Shang", "Ling"],
        answer: 0,
        explanation: "Mushu est un dragon miniature envoyé par les ancêtres par erreur. Cri-Kee est le grillon porte-bonheur."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Hercule (1997), combien y a-t-il de Muses qui racontent l'histoire en chantant ?",
        options: ["3", "5", "7", "9"],
        answer: 1,
        explanation: "Les cinq Muses (Calliope, Clio, Melpomène, Terpsichore, Thalie) servent de chœur gospel tout au long du film."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Pocahontas est basé sur un personnage historique réel ?",
        answer: "oui",
        explanation: "Vrai : Pocahontas (v. 1596-1617) était fille d'un chef amérindien Powhatan. Disney a très largement romancé sa relation avec John Smith."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Lilo & Stitch (2002), quel est le numéro d'expérience de Stitch ?",
        options: ["624", "625", "626", "627"],
        answer: 2,
        explanation: "Stitch est officiellement l'Expérience 626, une créature génétiquement conçue pour détruire — mais qu'Ohana va transformer."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans La Reine des Neiges (Frozen, 2013), comment s'appelle la sœur cadette d'Elsa ?",
        options: ["Anna", "Ariel", "Aurore", "Alice"],
        answer: 0,
        explanation: "Anna part à la recherche d'Elsa quand celle-ci fuit après avoir révélé ses pouvoirs glacés."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Raiponce (2010), quelle est la longueur approximative de ses cheveux magiques ?",
        options: ["7 mètres", "14 mètres", "21 mètres", "30 mètres"],
        answer: 2,
        explanation: "Les cheveux de Raiponce mesurent environ 21 mètres (70 pieds), tissés de magie solaire qui guérit et rajeunit."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Zootopie (2016), quelle espèce animale est l'héroïne Judy Hopps ?",
        options: ["Une renarde", "Une lapine", "Une écureuille", "Une souris"],
        answer: 1,
        explanation: "Judy Hopps est la première lapine officier de police de Zootopie. Elle fait équipe avec Nick Wilde, un renard arnaqueur."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Vaiana (Moana, 2016), quel demi-dieu polynésien accompagne l'héroïne ?",
        options: ["Tangaroa", "Maui", "Pele", "Hei Hei"],
        answer: 1,
        explanation: "Maui, le demi-dieu tatoué, a volé le cœur de Te Fiti. Hei Hei est le coq stupide embarqué par accident."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Encanto (2021), quel est le seul membre de la famille Madrigal sans pouvoir magique ?",
        options: ["Isabela", "Luisa", "Mirabel", "Dolores"],
        answer: 2,
        explanation: "Mirabel est la seule sans don à son cinquième anniversaire. C'est précisément ce qui la rend centrale pour sauver la maison magique."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Wish : Asha et la bonne étoile (2023), dans quel royaume se déroule l'histoire ?",
        options: ["Rosas", "Corona", "Arendelle", "Far Far Away"],
        answer: 0,
        explanation: "Rosas est le royaume dirigé par le roi Magnifico, qui garde prisonniers les vœux de ses sujets."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Toy Story (1995), quel est le métier officiel du jouet Buzz l'Éclair ?",
        options: ["Cow-boy de l'Ouest", "Ranger de l'espace", "Pilote de course", "Super-héros"],
        answer: 1,
        explanation: "Buzz l'Éclair est un « Space Ranger » de la Star Command. Il ignore d'abord qu'il est un jouet et se croit réellement en mission."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quel est le tout premier long-métrage sorti par les studios Pixar ?",
        options: ["1001 pattes", "Toy Story", "Monstres & Cie", "Le Monde de Nemo"],
        answer: 1,
        explanation: "Toy Story (1995) est à la fois le premier Pixar et le premier long-métrage entièrement généré en images de synthèse de l'histoire."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Monstres & Cie (2001), comment s'appelle la petite fille humaine (VF) ?",
        answers: ["Bouh", "bouh", "Boo", "boo"],
        explanation: "« Bouh » (Boo en VO), en réalité Mary, se glisse à Monstropolis via sa porte de placard et bouleverse la vie de Sulli et Bob."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Monde de Nemo (2003), quel type de poisson est Nemo ?",
        options: ["Poisson-clown", "Poisson-chirurgien", "Poisson-ange", "Poisson-rouge"],
        answer: 0,
        explanation: "Nemo et son père Marin sont des poissons-clowns (Amphiprion ocellaris). Dory est, elle, un chirurgien à queue jaune (Paracanthurus hepatus)."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Les Indestructibles (2004), quels sont les super-pouvoirs de Violette, la fille aînée ?",
        options: ["Super force et vol", "Super vitesse", "Élasticité", "Invisibilité et champs de force"],
        answer: 3,
        explanation: "Violette peut devenir invisible et créer des boucliers énergétiques. Flèche court à toute vitesse, Jack-Jack a des pouvoirs multiples."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Ratatouille (2007), comment s'appelle le rat qui rêve de devenir chef cuisinier ?",
        answers: ["Rémy", "Remy", "rémy", "remy"],
        explanation: "Rémy dirige les mains de Linguini depuis sa toque pour cuisiner dans le restaurant du défunt chef Gusteau."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans WALL-E (2008), comment s'appelle le gigantesque vaisseau sur lequel vivent les humains ?",
        options: ["Axiom", "Nostromo", "Icarus", "Prometheus"],
        answer: 0,
        explanation: "L'Axiom, appartenant à la corporation Buy n Large, héberge les humains obèses et sédentaires pendant que la Terre se régénère."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Là-Haut (2009), quel oiseau exotique géant et coloré Russell adopte-t-il ?",
        options: ["Un toucan nommé Toto", "Un oiseau nommé Kevin", "Un phénix nommé Phoenix", "Un paon nommé Paulo"],
        answer: 1,
        explanation: "Kevin s'avère en fait être une femelle qui cherche à retrouver ses petits. Dug, le chien parlant, reste la mascotte comique du film."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Vice-Versa (Inside Out, 2015), combien d'émotions principales guident Riley dans le premier film ?",
        options: ["4", "5", "6", "7"],
        answer: 1,
        explanation: "Joie, Tristesse, Colère, Peur et Dégoût. Le deuxième opus en ajoute quatre nouvelles liées à l'adolescence (Anxiété, Envie, Ennui, Embarras)."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Coco (2017), quel instrument de musique joue le jeune Miguel ?",
        answers: ["guitare", "la guitare", "Guitare", "une guitare"],
        explanation: "Miguel rêve de devenir musicien comme son idole Ernesto de la Cruz. Sa guitare en forme de crâne l'emmène au Pays des Morts."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Soul (2020), quel instrument joue Joe Gardner ?",
        options: ["Saxophone", "Trompette", "Piano", "Batterie"],
        answer: 2,
        explanation: "Joe est pianiste de jazz. Il tombe dans un trou juste avant son grand concert et doit naviguer entre le Grand Avant et le Grand Après."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Luca (2021), dans quel pays se déroule l'histoire ?",
        options: ["Espagne", "Italie", "Grèce", "Portugal"],
        answer: 1,
        explanation: "L'action se passe dans le village fictif de Portorosso, sur la côte ligurienne italienne, inspiré des Cinque Terre."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Alerte Rouge (Turning Red, 2022), en quel animal Mei Lee se transforme-t-elle sous le coup de l'émotion ?",
        options: ["Un tigre rouge", "Un panda roux géant", "Un renard roux", "Un raton laveur"],
        answer: 1,
        explanation: "La transformation en panda roux est un don familial hérité de son ancêtre Sun Yee, déclenché par les émotions fortes."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Dans Cars (2006), aucun être humain n'apparaît de tout le film ?",
        answer: "oui",
        explanation: "Vrai : le monde de Cars est entièrement peuplé de véhicules anthropomorphes — pas un seul humain, pas même à l'arrière-plan."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans 1001 pattes (A Bug's Life, 1998), quel insecte est le héros Tilt ?",
        options: ["Un criquet", "Une coccinelle", "Une fourmi", "Une mante religieuse"],
        answer: 2,
        explanation: "Tilt est une fourmi ouvrière inventeuse. Il part recruter des « guerriers » pour défendre la colonie contre les sauterelles de Le Borgne."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Vaiana (2016), quel animal de basse-cour embarque par erreur avec l'héroïne ?",
        options: ["Un cochon nommé Pua", "Un coq nommé Hei Hei", "Un chien nommé Poï", "Une chèvre nommée Lei"],
        answer: 1,
        explanation: "Hei Hei, le coq aussi adorable qu'idiot, monte à bord par accident. Pua le cochon, lui, reste sur l'île de Motunui."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Roi Lion, comment s'appellent le suricate et le phacochère amis de Simba ?",
        options: ["Timon et Pumbaa", "Rafiki et Zazu", "Scar et Sarabi", "Ed et Banzai"],
        answer: 0,
        explanation: "Timon (suricate) et Pumbaa (phacochère) enseignent à Simba le « Hakuna Matata » — pas de soucis. Ed et Banzai sont deux des hyènes."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans La Belle et la Bête, quelle fleur enchantée mesure le temps qui reste à la Bête pour briser le sortilège ?",
        options: ["Un lys", "Une rose", "Une tulipe", "Une orchidée"],
        answer: 1,
        explanation: "Si le dernier pétale de la rose tombe avant que la Bête n'apprenne à aimer et à être aimée, le sortilège devient irréversible."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quel est le titre original (japonais) du manga connu en France sous le nom de Nicky Larson ?",
        options: ["Dragon Ball", "City Hunter", "Hokuto no Ken", "Lupin III"],
        answer: 1,
        explanation: "City Hunter (シティーハンター, 1985-1991) de Tsukasa Hōjō. Le héros Ryo Saeba a été rebaptisé « Nicky Larson » pour l'adaptation française."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Goldorak, comment s'appelle le pilote du robot géant ?",
        options: ["Alcor", "Actarus", "Vega", "Procyon"],
        answer: 1,
        explanation: "Actarus, prince d'Euphor réfugié sur Terre, pilote Goldorak. Alcor (Koji en VO) est son fidèle ami, pilote du Soucoupoïde."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Heidi, comment s'appelle l'ami chevrier d'Heidi dans la montagne ?",
        answers: ["Pierre", "pierre", "Peter", "peter"],
        explanation: "Pierre (Peter en VO) garde les chèvres du village. Il est amoureux d'Heidi et jaloux de Clara dans la série Nippon Animation de 1974."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Combien y a-t-il de Dragon Balls (boules de cristal) à rassembler dans le manga d'Akira Toriyama ?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        explanation: "Les sept boules, ornées de 1 à 7 étoiles, permettent d'invoquer le dragon Shenron pour obtenir un vœu."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Saint Seiya (Les Chevaliers du Zodiaque), quel chevalier porte l'armure de bronze de Pégase ?",
        options: ["Shiryu", "Hyoga", "Seiya", "Ikki"],
        answer: 2,
        explanation: "Seiya porte Pégase, Shiryu le Dragon, Hyoga le Cygne, Shun Andromède, Ikki le Phénix — les cinq chevaliers de bronze."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Quel est le vrai prénom japonais du héros connu en France sous le nom d'Olive (Captain Tsubasa) ?",
        answers: ["Tsubasa", "tsubasa", "Tsubasa Ozora", "Ozora Tsubasa"],
        explanation: "Tsubasa Ozora devient « Olivier Atton » en VF. Son ami Taro Misaki devient « Thomas Price » — le célèbre duo Olive et Tom."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Sailor Moon, quel est le nom du chat noir parlant qui guide Usagi ?",
        options: ["Artémis", "Luna", "Diana", "Phobos"],
        answer: 1,
        explanation: "Luna (noire) accompagne Usagi / Sailor Moon ; Artémis (blanc) accompagne Minako / Sailor Venus. Diana est leur fille venue du futur."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Cowboy Bebop, comment s'appelle le vaisseau de l'équipage de chasseurs de primes ?",
        options: ["Le Bebop", "Le Swordfish", "Le Nostromo", "L'Outlaw Star"],
        answer: 0,
        explanation: "Le Bebop est le vaisseau-mère, piloté par Jet Black. Le Swordfish II est le vaisseau de combat personnel de Spike Spiegel."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Neon Genesis Evangelion, quel est le prénom du pilote de l'Unité 01 ?",
        answers: ["Shinji", "shinji", "Shinji Ikari", "Ikari Shinji"],
        explanation: "Shinji Ikari, 14 ans, est le fils du commandant Gendō Ikari. Il pilote l'EVA-01, qui héberge l'âme de sa mère Yui."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Le film Akira (1988) de Katsuhiro Ōtomo se déroule dans quelle ville ?",
        options: ["Tokyo", "Neo-Tokyo", "Osaka", "Kyoto"],
        answer: 1,
        explanation: "Neo-Tokyo, en 2019, reconstruite après une explosion apocalyptique en 1988. Le film est une référence absolue du cyberpunk japonais."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quelle est la protagoniste du manga/anime Ghost in the Shell ?",
        options: ["Rei Ayanami", "Motoko Kusanagi", "Asuka Langley", "Misato Katsuragi"],
        answer: 1,
        explanation: "Le « Major » Motoko Kusanagi dirige la Section 9 de cybersécurité. Son corps est entièrement cybernétique, seul son cerveau est d'origine."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "En quelle année est sorti Mon Voisin Totoro de Hayao Miyazaki ?",
        options: ["1984", "1988", "1992", "1997"],
        answer: 1,
        explanation: "Sorti en 1988, en double programme avec Le Tombeau des lucioles de Takahata. Totoro est devenu la mascotte officielle du Studio Ghibli."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Le Voyage de Chihiro, en quel animal les parents de Chihiro sont-ils transformés pour avoir mangé la nourriture des esprits ?",
        answers: ["cochons", "cochon", "des cochons", "en cochons", "porcs"],
        explanation: "Les parents deviennent des cochons voraces dans le restaurant du monde des esprits. Chihiro doit travailler pour Yubaba pour les sauver."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Princesse Mononoké, par quels animaux San, l'héroïne, a-t-elle été élevée ?",
        options: ["Les loups", "Les sangliers", "Les cerfs", "Les singes"],
        answer: 0,
        explanation: "San a été recueillie par la déesse-louve Moro. Elle se considère elle-même comme une louve et déteste les humains qui détruisent la forêt."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Château ambulant (2004), comment s'appelle le jeune sorcier qui vit dans le château ?",
        options: ["Calcifer", "Howl", "Markl", "Mustachios"],
        answer: 1,
        explanation: "Howl (Hauru en VO) est le sorcier beau et vaniteux. Calcifer est le démon-feu qui alimente et déplace le château ; Markl est son apprenti."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Kiki la petite sorcière (1989), quel est le nom du chat noir de Kiki ?",
        options: ["Jiji", "Luna", "Totoro", "Mimi"],
        answer: 0,
        explanation: "Jiji est le familier insolent de Kiki. Quand Kiki perd ses pouvoirs, elle ne peut plus le comprendre — il redevient un simple chat."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Hayao Miyazaki est l'un des co-fondateurs du Studio Ghibli ?",
        answer: "oui",
        explanation: "Vrai : Miyazaki fonde Ghibli en juin 1985 avec Isao Takahata et le producteur Toshio Suzuki, grâce au succès de Nausicaä."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Nausicaä de la vallée du vent (1984), quel est le nom de la vallée où vit l'héroïne ?",
        options: ["La Vallée du Vent", "La Vallée du Soleil", "La Vallée des Brumes", "La Vallée Sainte"],
        answer: 0,
        explanation: "La Vallée du Vent est protégée des spores toxiques de la Mer de la Décomposition par les vents marins qui la balayent en permanence."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Château dans le ciel, quel est le nom de l'île céleste légendaire que cherchent les héros ?",
        options: ["Atlantis", "Laputa", "Avalon", "Valinor"],
        answer: 1,
        explanation: "Laputa, ancienne cité volante issue d'une civilisation disparue, est maintenue en l'air par un énorme cristal de lévitation (volucite)."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Porco Rosso (1992), en quel animal le pilote héros a-t-il été transformé par une malédiction ?",
        options: ["Un chien", "Un cochon", "Un ours", "Un renard"],
        answer: 1,
        explanation: "L'ancien as de la chasse italienne Marco Pagot est devenu un cochon anthropomorphe — cochon rouge / « Porco Rosso »."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Naruto, quel est le nom du village caché dans lequel vit le héros ?",
        options: ["Suna", "Konoha", "Kiri", "Kumo"],
        answer: 1,
        explanation: "Konohagakure (« Village caché des Feuilles ») est dirigé par le Hokage. Les quatre autres grands villages sont Suna, Kiri, Kumo et Iwa."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans One Piece, comment s'appelle le capitaine de l'équipage au Chapeau de paille ?",
        answers: ["Luffy", "luffy", "Monkey D. Luffy", "Monkey D Luffy", "Monkey D. Luffy"],
        explanation: "Monkey D. Luffy, au corps élastique après avoir mangé le fruit du Gomu Gomu, rêve de devenir le Roi des Pirates."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans One Piece, comment s'appelle le trésor légendaire que recherchent tous les pirates ?",
        options: ["Le Grand Line", "Le One Piece", "Le Gold Roger", "Le Fruit du Démon"],
        answer: 1,
        explanation: "Le « One Piece » est le trésor ultime laissé par Gol D. Roger à Raftel. Grand Line est la route dangereuse qui y mène."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Bleach, comment s'appelle le héros aux cheveux orange qui devient shinigami ?",
        options: ["Naruto Uzumaki", "Ichigo Kurosaki", "Luffy Monkey", "Natsu Dragnir"],
        answer: 1,
        explanation: "Ichigo Kurosaki reçoit les pouvoirs de Rukia Kuchiki et devient « Substitute Shinigami » pour protéger sa famille des Hollows."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Fullmetal Alchemist, comment s'appelle le frère cadet d'Edward Elric, enfermé dans une armure ?",
        options: ["Alphonse", "Roy", "Scar", "Ling"],
        answer: 0,
        explanation: "Alphonse (Al) a perdu son corps dans la transmutation ratée de leur mère. Son âme est scellée dans une armure de métal par Edward."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Death Note, quel est le nom du shinigami qui fait tomber son cahier dans le monde des humains ?",
        answers: ["Ryuk", "ryuk", "Ryuuk", "ryuuk"],
        explanation: "Ryuk laisse tomber son Death Note par ennui. Light Yagami le ramasse et entame son règne de « Kira » ; seul Ryuk peut voir Light."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Hunter × Hunter, quel est le but principal de Gon au début de l'histoire ?",
        options: ["Devenir roi des pirates", "Retrouver son père Ging", "Venger sa mère", "Devenir le plus fort"],
        answer: 1,
        explanation: "Gon Freecss passe l'examen de Hunter parce que son père Ging, qu'il n'a jamais connu, est un Hunter légendaire."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Code Geass, quel est l'alias masqué sous lequel agit le prince Lelouch vi Britannia ?",
        options: ["Zero", "Suzaku", "C.C.", "Knightmare"],
        answer: 0,
        explanation: "Zero, le leader masqué des Chevaliers Noirs, utilise le pouvoir du Geass pour imposer ses ordres d'un simple regard."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans L'Attaque des Titans, comment s'appelle le héros principal ?",
        options: ["Levi Ackerman", "Eren Jäger", "Armin Arlert", "Jean Kirschtein"],
        answer: 1,
        explanation: "Eren Jäger (ou Yeager) jure d'exterminer les titans après la mort de sa mère lors de la chute du Mur Maria."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans L'Attaque des Titans, combien de murs concentriques protègent l'humanité au début de l'histoire ?",
        answers: ["3", "trois", "3 murs", "trois murs"],
        explanation: "Trois murs : Maria (extérieur), Rose (intermédiaire), Sina (central). Chacun porte le nom d'une déesse honi de leur mythologie."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Dans Dragon Ball Z, Son Goku atteint-il le stade Super Saiyan pour la première fois lors de son combat contre Freezer ?",
        answer: "oui",
        explanation: "Vrai : sur Namek, déclenchée par la mort de Krillin tué par Freezer, la transformation fait de Goku le premier Super Saiyan depuis 1000 ans."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Demon Slayer (Kimetsu no Yaiba), comment s'appelle la sœur de Tanjiro, transformée en démone ?",
        options: ["Kanao", "Nezuko", "Shinobu", "Mitsuri"],
        answer: 1,
        explanation: "Nezuko Kamado est l'unique survivante du massacre familial. Tanjiro devient pourfendeur pour trouver un moyen de la rendre humaine."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quelle respiration Tanjiro utilise-t-il principalement au début de Demon Slayer ?",
        options: ["Respiration du Feu", "Respiration de l'Eau", "Respiration de la Foudre", "Respiration du Vent"],
        answer: 1,
        explanation: "Tanjiro apprend la Respiration de l'Eau auprès d'Urokodaki, avant de découvrir plus tard sa vraie nature : la Respiration du Soleil (Hinokami)."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans My Hero Academia, quel est le surnom public du héros All Might ?",
        options: ["Le Symbole de la Paix", "Le Héros Numéro 1 Absolu", "L'Homme le Plus Puissant", "Le Sauveur Ultime"],
        answer: 0,
        explanation: "All Might est connu comme « le Symbole de la Paix ». Son vrai nom est Toshinori Yagi ; il transmet One For All à Izuku Midoriya."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Jujutsu Kaisen, quel est le nom de l'enseignant surpuissant aux yeux bleus bandés ?",
        options: ["Geto", "Gojo", "Nanami", "Sukuna"],
        answer: 1,
        explanation: "Satoru Gojo, considéré comme le plus fort du monde, possède les « Six Yeux » et la Technique sans Limite. Il bande ses yeux pour préserver son énergie."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Chainsaw Man, comment s'appelle le petit chien-démon qui fusionne avec Denji pour le sauver ?",
        answers: ["Pochita", "pochita"],
        explanation: "Pochita, le démon-tronçonneuse minuscule, devient le cœur de Denji. C'est pourquoi tirer la corde lui fait sortir une tronçonneuse de la tête."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Spy × Family, quel est le vrai métier de Loid Forger, le père de famille ?",
        options: ["Médecin", "Espion", "Chef cuisinier", "Professeur"],
        answer: 1,
        explanation: "« Loid » est en réalité l'espion Twilight. Sa femme Yor est tueuse à gages, sa fille adoptive Anya est télépathe — aucun ne connaît les secrets des autres (sauf Anya)."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Frieren (Frieren : Au-delà de la fin du voyage), en quoi l'héroïne se distingue-t-elle de ses compagnons ?",
        options: ["C'est une déesse", "C'est une elfe quasi immortelle", "C'est une démone", "C'est un ange"],
        answer: 1,
        explanation: "Frieren est une mage elfe à la durée de vie de plusieurs millénaires. Le récit suit sa reprise de conscience de l'importance des humains après la mort de son compagnon Himmel."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Oshi no Ko, quel est le métier d'Ai Hoshino au début de l'histoire ?",
        options: ["Actrice de théâtre", "Idole de J-pop", "Mannequin", "Chanteuse d'opéra"],
        answer: 1,
        explanation: "Ai est l'idole montante du groupe B-Komachi. Elle cache sa grossesse à ses fans pour protéger sa carrière et sa vie."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Solo Leveling, comment s'appelle le chasseur faible qui devient progressivement le plus puissant ?",
        options: ["Sung Jin-Woo", "Yoo Jin-Ho", "Cha Hae-In", "Goto Ryuji"],
        answer: 0,
        explanation: "Sung Jin-Woo, classé E, reçoit un système secret qui lui permet de monter en niveau — chose impossible pour les autres chasseurs."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Le manga One Piece d'Eiichiro Oda a commencé sa publication en 1997 ?",
        answer: "oui",
        explanation: "Vrai : premier chapitre dans le Weekly Shōnen Jump du 22 juillet 1997. Il est encore en cours aujourd'hui — l'un des plus longs mangas de l'histoire."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quel studio a animé l'adaptation télévisée de Demon Slayer (Kimetsu no Yaiba) ?",
        options: ["MAPPA", "Studio Ghibli", "Ufotable", "Bones"],
        answer: 2,
        explanation: "Ufotable est célèbre pour ses décors peints et sa fusion 2D/3D, notamment spectaculaire sur l'arc du train Infini et celui des quartiers réservés."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Dan Da Dan, quels deux types de créatures surnaturelles s'affrontent dès le début ?",
        options: ["Extraterrestres et yokai", "Zombies et fantômes", "Anges et démons", "Vampires et loups-garous"],
        answer: 0,
        explanation: "Momo croit aux fantômes, Okarun aux aliens. Leur pari les fait rencontrer chacun l'autre camp — et tous deux se retrouvent possédés."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Jujutsu Kaisen, quelle relique maudite Yuji Itadori ingère-t-il dès le premier épisode ?",
        options: ["Un des doigts de Sukuna", "Un fruit du démon", "Une pierre magique", "Un sabre ancien"],
        answer: 0,
        explanation: "Yuji avale l'un des vingt doigts momifiés de Ryomen Sukuna pour sauver ses amis, devenant le réceptacle du Roi des Fléaux."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "En quelle année a commencé la publication du manga Akira de Katsuhiro Ōtomo ?",
        options: ["1972", "1982", "1988", "1995"],
        answer: 1,
        explanation: "Akira paraît de décembre 1982 à 1990 dans le magazine Young Magazine. Ōtomo réalisera lui-même l'adaptation animée de 1988."
    },
    {
        category: "anime-disney",
        type: "yesno",
        question: "Le Voyage de Chihiro a-t-il remporté l'Oscar du meilleur film d'animation ?",
        answer: "oui",
        explanation: "Vrai : Oscar en 2003. Il reste à ce jour le seul film d'animation non anglophone à avoir remporté cette récompense."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Made in Abyss, quel est le moteur principal du voyage de Riko et Reg dans le gouffre ?",
        options: ["Un trésor légendaire", "Retrouver la mère de Riko", "Un artefact magique", "Un démon scellé"],
        answer: 1,
        explanation: "Riko descend dans l'Abîme pour retrouver sa mère Lyza, exploratrice légendaire dont le sifflet blanc est revenu à la surface."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Vinland Saga, à quel peuple et quelle époque l'histoire se rattache-t-elle principalement ?",
        options: ["Samouraïs au Japon", "Vikings en Europe médiévale", "Spartiates en Grèce antique", "Mongols en Asie centrale"],
        answer: 1,
        explanation: "L'œuvre de Makoto Yukimura suit Thorfinn, Vikings d'Islande au XIᵉ siècle, inspiré des sagas historiques scandinaves."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Le Roi Lion, qui est le véritable responsable de la mort de Mufasa ?",
        options: ["Simba, par accident", "Scar", "Les hyènes", "Un gnou"],
        answer: 1,
        explanation: "Scar, jaloux du trône, déclenche la débandade et jette Mufasa dans le vide. Il fait ensuite croire à Simba que c'est de sa faute pour l'exiler."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Quelle est la célèbre devise que Buzz l'Éclair clame en levant le poing ?",
        answers: ["Vers l'infini et au-delà", "Vers l'infini et au-delà !", "vers l'infini et au-delà", "Vers l'infini, et au-delà", "To infinity and beyond"],
        explanation: "« Vers l'infini et au-delà ! » (« To infinity and beyond! ») — la devise officielle des Space Rangers de la Star Command."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Zootopie, quelle est l'espèce du compagnon arnaqueur de Judy, Nick Wilde ?",
        options: ["Loup", "Coyote", "Renard roux", "Chacal"],
        answer: 2,
        explanation: "Nick est un renard roux, espèce stigmatisée comme « sournoise » à Zootopie. Leur duo contre-pieds le préjugé prédateur/proie."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Vice-Versa 2 (2024), quelle nouvelle émotion prend le pouvoir dans la tête de Riley à l'adolescence ?",
        options: ["Jalousie", "Anxiété", "Honte", "Ennui"],
        answer: 1,
        explanation: "Anxiété devient le personnage central et antagoniste du film, aux côtés d'Ennui, Envie et Embarras — les nouvelles émotions pubertaires."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans La Reine des Neiges, quel est le nom du renne de Kristoff ?",
        options: ["Olaf", "Sven", "Marshmallow", "Hans"],
        answer: 1,
        explanation: "Sven est le fidèle renne de Kristoff, auquel Kristoff prête régulièrement sa propre voix dans leurs dialogues imaginaires."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Quel est le numéro de course de Flash McQueen sur sa carrosserie dans Cars ?",
        options: ["43", "51", "86", "95"],
        answer: 3,
        explanation: "Le « 95 » est une référence à 1995, année de sortie de Toy Story — le premier long-métrage Pixar."
    },
    {
        category: "anime-disney",
        type: "free",
        question: "Dans Le Voyage de Chihiro, comment s'appelle le dragon blanc mystérieux qui l'aide ?",
        answers: ["Haku", "haku", "Nigihayami Kohaku Nushi"],
        explanation: "Haku est en réalité l'esprit de la rivière Kohaku, asservi par la sorcière Yubaba. Chihiro lui rend son vrai nom : Nigihayami Kohaku Nushi."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans Naruto, quel démon à queues est scellé à l'intérieur du héros depuis sa naissance ?",
        options: ["Shukaku (1 queue)", "Kyubi (9 queues)", "Isobu (3 queues)", "Matatabi (2 queues)"],
        answer: 1,
        explanation: "Kurama, le renard à 9 queues (Kyubi), a été scellé dans Naruto nouveau-né par son père, le Quatrième Hokage Minato."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans My Hero Academia, quel est le nom du super-pouvoir qu'All Might transmet à Izuku Midoriya ?",
        options: ["One For All", "All For One", "Full Cowling", "Plus Ultra"],
        answer: 0,
        explanation: "One For All, un Alter qui cumule la force de tous ses porteurs successifs, s'oppose à All For One, Alter de voler les Alters des autres."
    },
    {
        category: "anime-disney",
        type: "mcq",
        question: "Dans L'Étrange Noël de Monsieur Jack (1993), quel est le nom du héros, roi des citrouilles de Halloween Town ?",
        options: ["Jack Skellington", "Oogie Boogie", "Dr. Finkelstein", "Sally"],
        answer: 0,
        explanation: "Jack Skellington, squelette filiforme et roi des citrouilles, s'éprend de Noël. Sally est la poupée de chiffon amoureuse de lui ; Oogie Boogie est le méchant."
    },

    // ═══════════════════════════════════════
    // 💬 CITATIONS (citations drôles de gens célèbres – QCM uniquement)
    // ═══════════════════════════════════════
    {
        category: "citations",
        type: "mcq",
        question: "« Je ne suis pas d'accord avec ce que vous dites, mais je me battrai pour que vous ayez le droit de le dire. »",
        options: ["Voltaire", "Victor Hugo", "Jean-Jacques Rousseau", "Napoléon"],
        answer: 0,
        explanation: "Cette phrase est attribuée à Voltaire (même si c'est en réalité sa biographe qui l'a formulée ainsi)."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« L'imagination est plus importante que le savoir. »",
        options: ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Stephen Hawking"],
        answer: 1,
        explanation: "Einstein adorait ce genre de formule choc pour taquiner les scientifiques trop sérieux."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Je suis venu, j'ai vu, j'ai vaincu. »",
        options: ["Alexandre le Grand", "Napoléon", "Jules César", "Spartacus"],
        answer: 2,
        explanation: "« Veni, vidi, vici » – Jules César après sa victoire éclair à Zéla en 47 av. J.-C."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Un petit pas pour l'homme, un bond de géant pour l'humanité. »",
        options: ["Buzz Aldrin", "Youri Gagarine", "Neil Armstrong", "Thomas Pesquet"],
        answer: 2,
        explanation: "Neil Armstrong, en posant le pied sur la Lune le 20 juillet 1969."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent. »",
        options: ["Albert Einstein", "Sigmund Freud", "Socrate", "Mark Twain"],
        answer: 0,
        explanation: "Souvent attribuée à Einstein, même si l'origine exacte est débattue."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« J'ai décidé d'être heureux parce que c'est bon pour la santé. »",
        options: ["Molière", "Oscar Wilde", "Voltaire", "Montesquieu"],
        answer: 2,
        explanation: "Voltaire, philosophe des Lumières et champion de l'optimisme (quand ça l'arrangeait)."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Donner l'exemple n'est pas le principal moyen d'influencer les autres, c'est le seul. »",
        options: ["Gandhi", "Nelson Mandela", "Albert Einstein", "Martin Luther King"],
        answer: 2,
        explanation: "Encore Einstein ! Pas mal pour un gars qui ne trouvait jamais ses chaussettes."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La culture, c'est ce qui reste quand on a tout oublié. »",
        options: ["Édouard Herriot", "Charles de Gaulle", "Victor Hugo", "Albert Camus"],
        answer: 0,
        explanation: "Édouard Herriot, ancien président du Conseil et maire de Lyon."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Le seul vrai voyage, c'est de changer de regard. »",
        options: ["Victor Hugo", "Marcel Proust", "Antoine de Saint-Exupéry", "André Malraux"],
        answer: 1,
        explanation: "Marcel Proust dans « La Prisonnière ». Plus facile que de faire ses valises."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Soyez vous-même, tous les autres sont déjà pris. »",
        options: ["Mark Twain", "Oscar Wilde", "Winston Churchill", "Groucho Marx"],
        answer: 1,
        explanation: "Oscar Wilde, le roi de la punchline en tweed."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Le travail, c'est la santé. Ne rien faire, c'est la conserver. »",
        options: ["Pierre Dac", "Coluche", "Henri Salvador", "Pierre Desproges"],
        answer: 2,
        explanation: "Henri Salvador en a fait une chanson culte en 1965."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Je pense, donc je suis. »",
        options: ["Blaise Pascal", "René Descartes", "Platon", "Emmanuel Kant"],
        answer: 1,
        explanation: "Descartes dans le Discours de la méthode (1637). Le « Cogito ergo sum » le plus célèbre de l'histoire."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La simplicité est la sophistication suprême. »",
        options: ["Steve Jobs", "Léonard de Vinci", "Pablo Picasso", "Coco Chanel"],
        answer: 1,
        explanation: "Léonard de Vinci – repris ensuite par Steve Jobs pour vendre des iPhones."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Quand on me demande si je préfère le PSG ou l'OM, je réponds Orangina. »",
        options: ["Jean-Pierre Papin", "Thierry Roland", "Coluche", "Franck Ribéry"],
        answer: 2,
        explanation: "Coluche, évidemment. Le seul candidat à la présidence qui aurait pu arbitrer le Classique."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« L'enfer, c'est les autres. »",
        options: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "Émile Zola"],
        answer: 1,
        explanation: "Sartre dans « Huis clos ». Il n'avait sûrement jamais pris le RER B un lundi matin."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Qu'ils mangent de la brioche ! »",
        options: ["Madame de Pompadour", "Marie-Antoinette", "Catherine de Médicis", "Joséphine de Beauharnais"],
        answer: 1,
        explanation: "Attribuée à Marie-Antoinette (mais probablement inventée). La reine du bad buzz avant Internet."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. »",
        options: ["Albert Einstein", "Charlie Chaplin", "Benjamin Franklin", "Henry Ford"],
        answer: 0,
        explanation: "Einstein dans une lettre à son fils en 1930. Le père du vélo motivationnel."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Ce qui ne me tue pas me rend plus fort. »",
        options: ["Sun Tzu", "Friedrich Nietzsche", "Socrate", "Carl Jung"],
        answer: 1,
        explanation: "Nietzsche dans « Le Crépuscule des idoles ». Depuis, c'est sur tous les t-shirts de salle de sport."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Impossible n'est pas français. »",
        options: ["Charles de Gaulle", "Louis XIV", "Napoléon Bonaparte", "Richelieu"],
        answer: 2,
        explanation: "Napoléon, qui n'a visiblement jamais essayé de garer une voiture à Paris."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« L'important dans la vie, ce n'est point le triomphe, mais le combat. »",
        options: ["Pierre de Coubertin", "Nelson Mandela", "Winston Churchill", "Pelé"],
        answer: 0,
        explanation: "Pierre de Coubertin, père des Jeux olympiques modernes."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Je n'ai fait celle-ci plus longue que parce que je n'ai pas eu le loisir de la faire plus courte. »",
        options: ["Victor Hugo", "Blaise Pascal", "Montesquieu", "Voltaire"],
        answer: 1,
        explanation: "Pascal dans « Les Provinciales ». L'ancêtre de ceux qui s'excusent pour leurs mails trop longs."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Je sais que je ne sais rien. »",
        options: ["Platon", "Aristote", "Socrate", "Épicure"],
        answer: 2,
        explanation: "Socrate, le premier à transformer son ignorance en flex philosophique."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Il faut cultiver notre jardin. »",
        options: ["Jean de La Fontaine", "Voltaire", "Jean-Jacques Rousseau", "Montesquieu"],
        answer: 1,
        explanation: "La dernière phrase de « Candide » de Voltaire. Conseil toujours valable le dimanche."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Houston, we've had a problem. »",
        options: ["Neil Armstrong", "Buzz Aldrin", "Jim Lovell", "John Glenn"],
        answer: 2,
        explanation: "Jim Lovell, commandant d'Apollo 13, en 1970. Understatement de l'année."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Stay hungry, stay foolish. »",
        options: ["Bill Gates", "Elon Musk", "Steve Jobs", "Mark Zuckerberg"],
        answer: 2,
        explanation: "Steve Jobs lors de son discours à Stanford en 2005. Emprunté au Whole Earth Catalog."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Le plus grand risque est de ne prendre aucun risque. »",
        options: ["Jeff Bezos", "Mark Zuckerberg", "Steve Jobs", "Elon Musk"],
        answer: 1,
        explanation: "Mark Zuckerberg. Dit comme ça, ça justifie à peu près n'importe quoi."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. »",
        options: ["Victor Hugo", "Albert Camus", "Antoine de Saint-Exupéry", "Marcel Pagnol"],
        answer: 2,
        explanation: "Le Petit Prince de Saint-Exupéry. La phrase préférée de tous les profs de français."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Après moi, le déluge. »",
        options: ["Napoléon", "Louis XV", "Marie-Antoinette", "Louis XIV"],
        answer: 1,
        explanation: "Attribuée à Louis XV (ou à Madame de Pompadour). Spoiler : le déluge est bien arrivé."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Il vaut mieux être riche et bien portant que pauvre et malade. »",
        options: ["Pierre Dac", "Coluche", "Francis Blanche", "Raymond Devos"],
        answer: 2,
        explanation: "Francis Blanche, l'homme qui élevait les évidences au rang de philosophie."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La meilleure façon de prédire l'avenir, c'est de le créer. »",
        options: ["Steve Jobs", "Abraham Lincoln", "Peter Drucker", "Winston Churchill"],
        answer: 2,
        explanation: "Peter Drucker, le gourou du management. Repris par toutes les slides LinkedIn du monde."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« I have a dream. »",
        options: ["Nelson Mandela", "Martin Luther King", "Barack Obama", "Malcolm X"],
        answer: 1,
        explanation: "Martin Luther King Jr., discours historique à Washington le 28 août 1963."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« L'État, c'est moi. »",
        options: ["Napoléon", "Louis XIV", "Charles de Gaulle", "Richelieu"],
        answer: 1,
        explanation: "Louis XIV, le Roi-Soleil. Modestie : 0/20."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« On ne naît pas femme, on le devient. »",
        options: ["George Sand", "Simone de Beauvoir", "Simone Veil", "Olympe de Gouges"],
        answer: 1,
        explanation: "Simone de Beauvoir dans « Le Deuxième Sexe » (1949)."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Paris vaut bien une messe. »",
        options: ["Louis XIV", "Henri IV", "François Ier", "Charlemagne"],
        answer: 1,
        explanation: "Henri IV, en se convertissant au catholicisme pour devenir roi de France. Le roi du pragmatisme."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Eurêka ! »",
        options: ["Platon", "Archimède", "Pythagore", "Aristote"],
        answer: 1,
        explanation: "Archimède dans son bain, découvrant le principe de la poussée. Le premier « j'ai trouvé ! » de l'histoire."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Si j'ai vu plus loin, c'est en montant sur les épaules de géants. »",
        options: ["Galilée", "Albert Einstein", "Isaac Newton", "Copernic"],
        answer: 2,
        explanation: "Isaac Newton, dans une lettre à Robert Hooke. Humble flex de niveau olympique."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Le temps, c'est de l'argent. »",
        options: ["Benjamin Franklin", "John D. Rockefeller", "Adam Smith", "Andrew Carnegie"],
        answer: 0,
        explanation: "Benjamin Franklin en 1748. Depuis, les consultants facturent à l'heure."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Ich bin ein Berliner. »",
        options: ["Willy Brandt", "John F. Kennedy", "Ronald Reagan", "Barack Obama"],
        answer: 1,
        explanation: "JFK à Berlin en 1963. Et non, ça ne veut pas dire « je suis un beignet »."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« L'homme est un loup pour l'homme. »",
        options: ["Thomas Hobbes", "Machiavel", "Jean-Jacques Rousseau", "Platon"],
        answer: 0,
        explanation: "Thomas Hobbes dans « Le Léviathan ». Plaute l'avait dit avant, mais Hobbes a mieux marketé."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Être ou ne pas être, telle est la question. »",
        options: ["Molière", "William Shakespeare", "Goethe", "Dante"],
        answer: 1,
        explanation: "Shakespeare dans « Hamlet ». Le monologue le plus célèbre du théâtre."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« J'accuse ! »",
        options: ["Victor Hugo", "Émile Zola", "Jean Jaurès", "Voltaire"],
        answer: 1,
        explanation: "Émile Zola dans « L'Aurore » en 1898, pour défendre le capitaine Dreyfus."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La guerre, c'est la paix. La liberté, c'est l'esclavage. L'ignorance, c'est la force. »",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Philip K. Dick"],
        answer: 1,
        explanation: "George Orwell dans « 1984 ». Ambiance."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La techno, c'est comme le jeu de go : les règles sont simples, c'est jouer qui est compliqué. »",
        options: ["Daft Punk", "Laurent Garnier", "David Guetta", "Jean-Michel Jarre"],
        answer: 1,
        explanation: "Laurent Garnier, le pape de la techno française."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Alea jacta est. » (Les dés sont jetés.)",
        options: ["Auguste", "Brutus", "Jules César", "Cicéron"],
        answer: 2,
        explanation: "Jules César en franchissant le Rubicon en 49 av. J.-C. Le point de non-retour ultime."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Si vous traversez l'enfer, continuez d'avancer. »",
        options: ["Charles de Gaulle", "Theodore Roosevelt", "Winston Churchill", "Franklin Roosevelt"],
        answer: 2,
        explanation: "Churchill, le maître de la punchline en temps de guerre."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Tout ce que je sais, c'est que je ne sais rien… et encore. »",
        options: ["Coluche", "Pierre Desproges", "Pierre Dac", "Raymond Devos"],
        answer: 2,
        explanation: "Pierre Dac, l'humoriste qui a élevé l'absurde au rang d'art de vivre."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« C'est ceux qui en parlent le plus qui en font le moins. »",
        options: ["Audiard (Les Tontons flingueurs)", "Coluche", "De Funès", "Bourvil"],
        answer: 0,
        explanation: "Dialogues de Michel Audiard, le roi de la réplique qui claque."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La liberté des uns s'arrête là où commence celle des autres. »",
        options: ["Voltaire", "John Stuart Mill", "Jean-Jacques Rousseau", "Montesquieu"],
        answer: 1,
        explanation: "John Stuart Mill. Le principe de base qu'on rappelle à chaque voisin bruyant."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Le génie, c'est 1 % d'inspiration et 99 % de transpiration. »",
        options: ["Albert Einstein", "Thomas Edison", "Benjamin Franklin", "Nikola Tesla"],
        answer: 1,
        explanation: "Thomas Edison. Tesla aurait sûrement répondu « et 100 % de vol de brevets »."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« La mode se démode, le style jamais. »",
        options: ["Karl Lagerfeld", "Coco Chanel", "Yves Saint Laurent", "Christian Dior"],
        answer: 1,
        explanation: "Coco Chanel, la papesse de l'élégance intemporelle."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« May the Force be with you. » (Que la Force soit avec toi.)",
        options: ["Yoda", "Obi-Wan Kenobi", "Han Solo", "Princesse Leia"],
        answer: 2,
        explanation: "C'est Han Solo qui dit cette réplique culte dans Star Wars (1977). Obi-Wan dit une variante : « The Force will be with you, always. »"
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Un intellectuel assis va moins loin qu'un con qui marche. »",
        options: ["Audiard", "Coluche", "Pierre Desproges", "Guy Bedos"],
        answer: 0,
        explanation: "Michel Audiard, scénariste et dialoguiste. La philosophie du bitume."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« En France, on n'a pas de pétrole, mais on a des idées. »",
        options: ["Jacques Chirac", "Valéry Giscard d'Estaing", "François Mitterrand", "Georges Pompidou"],
        answer: 1,
        explanation: "Slogan de l'Agence pour les économies d'énergie sous Giscard, en 1976."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Je ne suis pas superstitieux, ça porte malheur. »",
        options: ["Raymond Devos", "Pierre Dac", "Woody Allen", "Groucho Marx"],
        answer: 2,
        explanation: "Woody Allen et son humour absurde à la new-yorkaise."
    },
    {
        category: "citations",
        type: "mcq",
        question: "« Science sans conscience n'est que ruine de l'âme. »",
        options: ["Montaigne", "Rabelais", "Descartes", "Pascal"],
        answer: 1,
        explanation: "Rabelais dans « Pantagruel » (1532). Le bac de philo en une seule phrase."
    }
];
