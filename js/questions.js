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
    // 🧩 CASSE-TÊTE (devinettes, énigmes, logique)
    // ═══════════════════════════════════════
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis toujours devant toi mais tu ne peux jamais me voir. Que suis-je ?",
        answers: ["le futur", "l'avenir", "futur", "avenir"],
        explanation: "Le futur est toujours devant nous, mais on ne peut jamais le voir !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Plus je sèche, plus je suis mouillée. Que suis-je ?",
        answers: ["une serviette", "serviette", "la serviette"],
        explanation: "La serviette sèche ce qu'elle touche mais absorbe l'eau !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un fermier a 17 moutons. Tous meurent sauf 9. Combien en reste-t-il ?",
        options: ["8", "9", "17", "0"],
        answer: 1,
        explanation: "\"Tous meurent sauf 9\" signifie qu'il en reste 9 !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Qu'est-ce qui a des mains mais ne peut pas applaudir ?",
        answers: ["une horloge", "horloge", "une montre", "montre", "pendule", "une pendule"],
        explanation: "L'horloge a des aiguilles (mains en anglais) mais ne peut pas applaudir."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Si tu me laisses tomber, je me casse. Si tu me souris, je te souris. Que suis-je ?",
        options: ["Un miroir", "Un œuf", "Un téléphone", "Une vitre"],
        answer: 0,
        explanation: "Le miroir se casse quand il tombe et reflète ton sourire !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un électricien ?",
        answers: ["de ne pas être au courant", "ne pas etre au courant", "pas au courant", "pas être au courant"],
        explanation: "Un électricien qui n'est pas au courant... c'est le comble !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Combien de mois dans l'année ont 28 jours ?",
        options: ["1 (février)", "6 mois", "12 mois", "Aucun"],
        answer: 2,
        explanation: "Tous les 12 mois ont au moins 28 jours !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je commence la nuit et je finis le matin. Que suis-je ?",
        answers: ["la lettre n", "n", "lettre n"],
        explanation: "La lettre N commence 'nuit' et finit 'matin' !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un père et son fils ont ensemble 36 ans. Le père a 30 ans de plus que le fils. Quel âge a le fils ?",
        options: ["6 ans", "3 ans", "5 ans", "8 ans"],
        answer: 1,
        explanation: "Le fils a 3 ans et le père 33 ans : 3 + 33 = 36 et 33 - 3 = 30."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Qu'est-ce qui monte et qui descend sans bouger ?",
        answers: ["la temperature", "temperature", "un escalier", "escalier", "les escaliers"],
        explanation: "La température et l'escalier montent et descendent sans se déplacer."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Qu'est-ce qui pèse plus lourd : un kilo de plumes ou un kilo de plomb ?",
        options: ["Le plomb", "Les plumes", "Ils pèsent pareil", "Ça dépend"],
        answer: 2,
        explanation: "Un kilo est un kilo, quelle que soit la matière !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Deux pères et deux fils vont pêcher. Ils attrapent 3 poissons et chacun repart avec un poisson. Comment ?",
        answers: ["ils sont trois", "trois", "3", "grand-pere pere fils", "3 personnes", "trois personnes", "il y a un grand-pere"],
        explanation: "Ils sont 3 : un grand-père, son fils, et son petit-fils."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un escargot est au fond d'un puits de 10 mètres. Chaque jour il monte 3 m et glisse de 2 m la nuit. En combien de jours sort-il ?",
        options: ["10 jours", "8 jours", "7 jours", "5 jours"],
        answer: 1,
        explanation: "Après 7 jours il est à 7 m. Le 8e jour il monte de 3 m et atteint 10 m avant la nuit."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis dans l'eau mais je ne me mouille jamais. Que suis-je ?",
        answers: ["le reflet", "reflet", "une ombre", "ombre", "ton reflet"],
        explanation: "Le reflet apparaît dans l'eau sans jamais se mouiller !"
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Si je retourne un verre contenant de l'eau sur une table, l'eau reste dans le verre tant que je ne le soulève pas.",
        answer: "non",
        explanation: "L'eau s'écoulerait par les côtés puisqu'un verre retourné sur une surface plane laisse passer l'air."
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

    // ═══════════════════════════════════════
    // 🤥 FAKE NEWS (mythes, idées reçues, vrai/faux)
    // ═══════════════════════════════════════
    {
        category: "fakenews",
        type: "yesno",
        question: "La Grande Muraille de Chine est visible depuis l'espace à l'œil nu.",
        answer: "non",
        explanation: "C'est un mythe ! La Grande Muraille est trop étroite pour être vue depuis l'espace."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les humains n'utilisent que 10% de leur cerveau.",
        answer: "non",
        explanation: "Faux ! Les IRM montrent que nous utilisons la quasi-totalité de notre cerveau."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le miel est le seul aliment qui ne se périme jamais.",
        answer: "oui",
        explanation: "Vrai ! Du miel vieux de 3000 ans retrouvé dans des tombes égyptiennes était encore comestible."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Napoléon était très petit pour son époque.",
        answer: "non",
        explanation: "Faux ! Napoléon mesurait environ 1,69 m, taille moyenne pour l'époque."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les poissons rouges ont une mémoire de 3 secondes.",
        answer: "non",
        explanation: "Faux ! Des études montrent que les poissons rouges peuvent se souvenir de choses pendant des mois."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "La foudre ne frappe jamais deux fois au même endroit.",
        answer: "non",
        explanation: "Faux ! L'Empire State Building est frappé environ 25 fois par an !"
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Il y a plus d'étoiles dans l'univers que de grains de sable sur Terre.",
        answer: "oui",
        explanation: "Vrai ! On estime environ 10²⁴ étoiles contre 10¹⁹ grains de sable."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les carottes améliorent la vision nocturne.",
        answer: "non",
        explanation: "C'est une légende créée par la propagande britannique pendant la WWII pour cacher l'existence du radar."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Cléopâtre vivait plus proche dans le temps de l'alunissage que de la construction des pyramides.",
        answer: "oui",
        explanation: "Vrai ! Les pyramides datent de ~2560 av. J.-C., Cléopâtre de ~30 av. J.-C., et l'alunissage de 1969."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les bananes sont radioactives.",
        answer: "oui",
        explanation: "Vrai ! Les bananes contiennent du potassium-40, un isotope radioactif. Mais en quantité inoffensive."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "On avale en moyenne 8 araignées par an en dormant.",
        answer: "non",
        explanation: "Faux ! C'est un mythe. Les vibrations du sommeil éloignent les araignées."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les autruches mettent leur tête dans le sable quand elles ont peur.",
        answer: "non",
        explanation: "Faux ! Elles se couchent au sol pour se fondre dans le paysage, ce qui donne cette impression."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Quelle affirmation sur les chats est VRAIE ?",
        options: ["Ils voient en noir et blanc", "Ils ont 9 vies", "Ils ronronnent pour se soigner", "Ils retombent toujours sur leurs pattes"],
        answer: 2,
        explanation: "Le ronronnement des chats produit des vibrations qui favorisent la cicatrisation osseuse."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Lequel de ces faits est FAUX ?",
        options: ["Les koalas dorment 22h par jour", "Les dauphins dorment un œil ouvert", "Les flamants sont roses à la naissance", "Les vaches ont des meilleurs amis"],
        answer: 2,
        explanation: "Les flamants naissent gris/blancs. Leur couleur rose vient des pigments de leur alimentation (crevettes)."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le sucre rend les enfants hyperactifs.",
        answer: "non",
        explanation: "Faux ! Plusieurs études scientifiques n'ont trouvé aucun lien entre sucre et hyperactivité."
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

    // ═══════════════════════════════════════
    // 🎮 GEEK (jeux vidéo, tech, pop culture, manga, SF)
    // ═══════════════════════════════════════
    {
        category: "geek",
        type: "mcq",
        question: "Dans Minecraft, quel minerai est le plus rare ?",
        options: ["Diamant", "Émeraude", "Netherite", "Lapis-lazuli"],
        answer: 2,
        explanation: "La Netherite (débris antiques) est le minerai le plus rare de Minecraft."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel est le vrai nom complet de Mario (le plombier de Nintendo) ?",
        answers: ["mario mario"],
        explanation: "Son nom complet est Mario Mario ! Confirmé par Nintendo et le film de 1993."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Star Wars, quelle est la couleur du sabre laser de Mace Windu ?",
        options: ["Bleu", "Vert", "Violet", "Rouge"],
        answer: 2,
        explanation: "Mace Windu (Samuel L. Jackson) a un sabre laser violet, unique chez les Jedi."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle console a popularisé le jeu Tetris dans les années 90 ?",
        options: ["NES", "Game Boy", "Mega Drive", "Super Nintendo"],
        answer: 1,
        explanation: "Tetris sur Game Boy (1989) s'est vendu à plus de 35 millions d'exemplaires."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Harry Potter, quel est le Patronus de Harry ?",
        options: ["Un phénix", "Un loup", "Un cerf", "Un aigle"],
        answer: 2,
        explanation: "Le Patronus de Harry est un cerf, comme celui de son père James."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel héros de jeu vidéo porte un bonnet vert et est le frère de Mario ?",
        answers: ["luigi"],
        explanation: "Luigi, le frère de Mario, toujours dans son ombre mais très apprécié !"
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Fortnite, comment s'appelle le bus qui transporte les joueurs ?",
        options: ["Le Bus Royal", "Le Battle Bus", "Le Bus Storm", "Le Sky Bus"],
        answer: 1,
        explanation: "Le Battle Bus transporte les joueurs au début de chaque partie."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quel manga Monkey D. Luffy cherche-t-il le trésor 'One Piece' ?",
        options: ["Naruto", "Dragon Ball", "One Piece", "Bleach"],
        answer: 2,
        explanation: "One Piece d'Eiichiro Oda, commencé en 1997, est le manga le plus vendu de l'histoire."
    },
    {
        category: "geek",
        type: "free",
        question: "Dans le Seigneur des Anneaux, comment s'appelle le magicien qui accompagne les hobbits ?",
        answers: ["gandalf", "gandalf le gris", "gandalf le blanc", "mithrandir"],
        explanation: "Gandalf le Gris, puis Gandalf le Blanc, aussi connu sous le nom de Mithrandir."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel personnage de manga possède un cahier capable de tuer quiconque dont le nom y est écrit ?",
        options: ["Naruto", "Light Yagami", "Goku", "Eren"],
        answer: 1,
        explanation: "Light Yagami utilise le Death Note dans le manga éponyme de Tsugumi Ohba."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
        options: ["GTA V", "Tetris", "Minecraft", "Wii Sports"],
        answer: 2,
        explanation: "Minecraft s'est vendu à plus de 300 millions d'exemplaires toutes plateformes confondues."
    },
    {
        category: "geek",
        type: "free",
        question: "Comment s'appelle le personnage principal de la série de jeux Zelda ?",
        answers: ["link"],
        explanation: "C'est Link, pas Zelda ! Zelda est la princesse qu'il doit sauver."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Pokémon, quel est le premier Pokémon du Pokédex ?",
        options: ["Pikachu", "Bulbizarre", "Salamèche", "Mewtwo"],
        answer: 1,
        explanation: "Bulbizarre (Bulbasaur) est le numéro 001 du Pokédex national."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Dans Among Us, les joueurs doivent trouver l'imposteur parmi l'équipage.",
        answer: "oui",
        explanation: "Vrai ! Among Us est un jeu de déduction sociale où les crewmates cherchent les imposteurs."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel studio a créé les films d'animation 'Le Voyage de Chihiro' et 'Mon voisin Totoro' ?",
        options: ["Pixar", "Studio Ghibli", "DreamWorks", "Toei Animation"],
        answer: 1,
        explanation: "Le Studio Ghibli, fondé par Hayao Miyazaki et Isao Takahata, est un trésor de l'animation japonaise."
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
        question: "En quelle année Christophe Colomb a-t-il atteint les Amériques ?",
        options: ["1453", "1478", "1492", "1501"],
        answer: 2,
        explanation: "Christophe Colomb a atteint les Amériques le 12 octobre 1492."
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
    }
];
