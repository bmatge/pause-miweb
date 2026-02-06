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
    // 🧩 CASSE-TÊTE
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
        explanation: "Ils sont 3 : un grand-père, son fils, et son petit-fils. Deux pères (le grand-père et le père) et deux fils (le père et le petit-fils)."
    },

    // ═══════════════════════════════════════
    // 📰 ACTUALITÉS
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
        question: "Quel événement spatial historique a eu lieu avec la mission Artemis I en 2022 ?",
        options: ["Atterrissage sur Mars", "Retour vers la Lune", "Station spatiale chinoise", "Satellite record"],
        answer: 1,
        explanation: "Artemis I a marqué le retour du programme lunaire de la NASA après Apollo."
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
        question: "Quelle ville a accueilli la COP28 fin 2023 ?",
        options: ["Le Caire", "Dubaï", "Riyad", "Doha"],
        answer: 1,
        explanation: "La COP28 s'est tenue à Dubaï, aux Émirats arabes unis, fin 2023."
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
        question: "Quel phénomène climatique a provoqué des températures record en Europe durant l'été 2023 ?",
        options: ["La Niña", "El Niño", "Le vortex polaire", "L'effet papillon"],
        answer: 1,
        explanation: "El Niño combiné au réchauffement a causé des records de chaleur en 2023."
    },

    // ═══════════════════════════════════════
    // 🤥 FAKE NEWS (Vrai ou Faux)
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
        explanation: "Faux ! Napoléon mesurait environ 1,69 m, taille moyenne pour l'époque. La confusion vient des pouces français vs anglais."
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
        explanation: "Vrai ! On estime à ~10²⁴ étoiles contre ~10¹⁹ grains de sable."
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
        question: "Le cerveau humain consomme environ 20% de l'énergie du corps.",
        answer: "oui",
        explanation: "Vrai ! Bien qu'il ne représente que 2% de la masse corporelle, le cerveau consomme ~20% de l'énergie."
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
        type: "yesno",
        question: "Un octopus a trois cœurs.",
        answer: "oui",
        explanation: "Vrai ! Un cœur principal et deux cœurs branchiaux pour oxygéner le sang."
    },

    // ═══════════════════════════════════════
    // ⭐ CÉLÉBRITÉS
    // ═══════════════════════════════════════
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé Michael Jackson ?",
        options: ["2007", "2009", "2011", "2013"],
        answer: 1,
        explanation: "Michael Jackson est décédé le 25 juin 2009 à Los Angeles."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédée la Reine Elizabeth II ?",
        options: ["2020", "2021", "2022", "2023"],
        answer: 2,
        explanation: "Elizabeth II est décédée le 8 septembre 2022 au château de Balmoral."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé l'acteur Chadwick Boseman, star de Black Panther ?",
        options: ["2019", "2020", "2021", "2022"],
        answer: 1,
        explanation: "Chadwick Boseman est décédé le 28 août 2020 des suites d'un cancer du côlon."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé Johnny Hallyday ?",
        options: ["2015", "2016", "2017", "2018"],
        answer: 2,
        explanation: "Johnny Hallyday est décédé le 5 décembre 2017 à Marnes-la-Coquette."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé le scientifique Stephen Hawking ?",
        options: ["2016", "2017", "2018", "2019"],
        answer: 2,
        explanation: "Stephen Hawking est décédé le 14 mars 2018, jour du Pi Day et anniversaire d'Einstein."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé le basketteur Kobe Bryant ?",
        options: ["2019", "2020", "2021", "2022"],
        answer: 1,
        explanation: "Kobe Bryant est décédé le 26 janvier 2020 dans un accident d'hélicoptère."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel acteur français, célèbre pour ses rôles dans 'Belmondo' et 'Le Professionnel', est décédé en 2021 ?",
        answers: ["belmondo", "jean-paul belmondo", "jean paul belmondo"],
        explanation: "Jean-Paul Belmondo est décédé le 6 septembre 2021 à Paris."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé le chanteur Prince ?",
        options: ["2014", "2015", "2016", "2017"],
        answer: 2,
        explanation: "Prince est décédé le 21 avril 2016 dans son domaine de Paisley Park."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé David Bowie ?",
        options: ["2014", "2015", "2016", "2017"],
        answer: 2,
        explanation: "David Bowie est décédé le 10 janvier 2016, deux jours après la sortie de son dernier album."
    },
    {
        category: "celebrites",
        type: "free",
        question: "Quel célèbre physicien est connu pour la formule E=mc² ?",
        answers: ["einstein", "albert einstein"],
        explanation: "Albert Einstein a publié sa théorie de la relativité restreinte en 1905."
    },
    {
        category: "celebrites",
        type: "mcq",
        question: "En quelle année est décédé le chef cuisinier français Paul Bocuse ?",
        options: ["2016", "2017", "2018", "2019"],
        answer: 2,
        explanation: "Paul Bocuse, pape de la gastronomie française, est décédé le 20 janvier 2018."
    },

    // ═══════════════════════════════════════
    // 🎮 GEEK
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
        question: "Quel est le vrai nom de Mario (plombier de Nintendo) de famille ?",
        answers: ["mario", "mario mario"],
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
        type: "free",
        question: "Quel est le code mythique de triche dans les jeux Konami (haut, haut, bas, bas...) ?",
        answers: ["konami code", "code konami", "haut haut bas bas gauche droite gauche droite b a"],
        explanation: "Le Konami Code : ↑↑↓↓←→←→ B A — inventé par Kazuhisa Hashimoto en 1986."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien pèse un octet en bits ?",
        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
        answer: 1,
        explanation: "Un octet (byte) = 8 bits. C'est l'unité fondamentale en informatique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le langage de programmation créé par Guido van Rossum ?",
        options: ["Java", "Ruby", "Python", "JavaScript"],
        answer: 2,
        explanation: "Python a été créé par Guido van Rossum et publié en 1991."
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
        question: "Quel est le nom de l'IA maléfique dans '2001, l'Odyssée de l'espace' ?",
        options: ["Skynet", "HAL 9000", "WOPR", "Ultron"],
        answer: 1,
        explanation: "HAL 9000 (Heuristically programmed ALgorithmic computer) du film de Kubrick."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Fortnite, comment s'appelle le bus qui transporte les joueurs ?",
        options: ["Le Bus Royal", "Le Battle Bus", "Le Bus Storm", "Le Sky Bus"],
        answer: 1,
        explanation: "Le Battle Bus est le bus volant qui transporte les joueurs au début de chaque partie."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel super-héros se cache derrière le masque de Spider-Man (version originale) ?",
        answers: ["peter parker", "peter", "parker"],
        explanation: "Peter Parker, créé par Stan Lee et Steve Ditko en 1962."
    },

    // ═══════════════════════════════════════
    // 🔬 SCIENCE
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
        question: "Quel scientifique a formulé la théorie de la gravitation universelle après avoir vu tomber une pomme ?",
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

    // ═══════════════════════════════════════
    // 📜 HISTOIRE
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
        type: "mcq",
        question: "Qui était le premier président des États-Unis ?",
        options: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"],
        answer: 2,
        explanation: "George Washington a été le premier président des USA de 1789 à 1797."
    },
    {
        category: "histoire",
        type: "free",
        question: "Dans quelle ville se trouve le Colisée antique ?",
        answers: ["rome", "roma"],
        explanation: "Le Colisée de Rome, construit entre 70 et 80 apr. J.-C., pouvait accueillir 50 000 spectateurs."
    }
];
