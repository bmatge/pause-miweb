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
    {
        category: "casse-tete",
        type: "free",
        question: "On me trouve une fois dans la minute, deux fois dans le moment, mais jamais dans cent ans. Que suis-je ?",
        answers: ["la lettre m", "m", "lettre m"],
        explanation: "La lettre M apparaît 1 fois dans 'minute', 2 fois dans 'moment', et 0 fois dans 'cent ans'."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "J'ai des villes mais pas de maisons, des forêts mais pas d'arbres, de l'eau mais pas de poissons. Que suis-je ?",
        options: ["Un rêve", "Un désert", "Une carte", "Un tableau"],
        answer: 2,
        explanation: "Une carte géographique a des villes, des forêts et de l'eau, mais en représentation uniquement."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel est le comble pour un dentiste ?",
        answers: ["d'en avoir plein les dents", "en avoir plein les dents", "avoir plein les dents"],
        explanation: "Un dentiste qui en a plein les dents... quel comble !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Marie a 3 filles et chaque fille a un frère. Combien d'enfants a Marie ?",
        options: ["3", "4", "6", "9"],
        answer: 1,
        explanation: "Marie a 4 enfants : 3 filles et 1 garçon. Le frère est le même pour toutes les filles."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je peux voyager autour du monde en restant dans un coin. Que suis-je ?",
        answers: ["un timbre", "timbre", "le timbre"],
        explanation: "Un timbre-poste voyage dans le coin d'une enveloppe autour du monde !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Si tu as 3 pommes et que tu en prends 2, combien en as-tu ?",
        options: ["1", "2", "3", "5"],
        answer: 1,
        explanation: "Tu en as 2 car ce sont celles que tu as prises !"
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Il est possible de faire 3 traits droits pour séparer un gâteau rond en 7 parts.",
        answer: "oui",
        explanation: "Vrai ! Trois coupes bien placées qui se croisent toutes permettent de faire 7 parts."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Plus on en enlève, plus c'est grand. Qu'est-ce que c'est ?",
        answers: ["un trou", "trou", "le trou"],
        explanation: "Plus on creuse un trou, plus il est grand !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Un bus part avec 7 passagers. Au 1er arrêt, 3 montent et 2 descendent. Au 2e, 5 montent et 4 descendent. Combien d'arrêts le bus a-t-il fait ?",
        options: ["1", "2", "3", "On ne sait pas"],
        answer: 1,
        explanation: "Le piège : la question porte sur les arrêts (2), pas sur les passagers !"
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis plein de trous mais je retiens l'eau. Que suis-je ?",
        answers: ["une eponge", "eponge", "l'eponge"],
        explanation: "L'éponge est pleine de trous mais absorbe et retient l'eau !"
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Quelle est la suite logique : 1, 1, 2, 3, 5, 8, ... ?",
        options: ["10", "11", "13", "15"],
        answer: 2,
        explanation: "C'est la suite de Fibonacci : chaque nombre est la somme des deux précédents (5 + 8 = 13)."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Quel mot de 8 lettres contient un seul mot quand on lui retire 5 lettres ?",
        answers: ["tronçon", "troncon"],
        explanation: "TRONÇON → en retirant 5 lettres on obtient 'TON', mais l'énigme classique est TRONÇON."
    },
    {
        category: "casse-tete",
        type: "yesno",
        question: "Un père donne 5€ à chacun de ses deux fils. Les deux fils ont maintenant 5€ chacun. Le père a dépensé 10€.",
        answer: "non",
        explanation: "Pas nécessairement ! Si les fils avaient déjà de l'argent avant, ils ont plus que 5€. Et si le père récupère quelque chose en échange, il n'a pas 'dépensé'."
    },
    {
        category: "casse-tete",
        type: "mcq",
        question: "Tu participes à une course et tu dépasses le 2e. À quelle place es-tu ?",
        options: ["1er", "2e", "3e", "Dernier"],
        answer: 1,
        explanation: "Tu prends la place de celui que tu dépasses : tu es donc 2e (pas 1er !)."
    },
    {
        category: "casse-tete",
        type: "free",
        question: "Je suis la seule chose qu'on peut casser sans la toucher. Que suis-je ?",
        answers: ["une promesse", "promesse", "le silence", "silence"],
        explanation: "On peut casser une promesse ou le silence sans aucun contact physique."
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
    {
        category: "fakenews",
        type: "yesno",
        question: "Les tournesols suivent le soleil tout au long de la journée.",
        answer: "non",
        explanation: "Seuls les jeunes tournesols tournent. Une fois adultes, ils restent orientés vers l'est."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les chiens ne voient qu'en noir et blanc.",
        answer: "non",
        explanation: "Faux ! Les chiens voient en nuances de bleu et jaune, mais pas le rouge ni le vert."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Lequel de ces faits est VRAI ?",
        options: ["Les chauves-souris sont aveugles", "Les éléphants ont peur des souris", "Les corbeaux peuvent reconnaître des visages humains", "Les poules ne peuvent pas voler"],
        answer: 2,
        explanation: "Les corbeaux ont une mémoire remarquable et peuvent se souvenir de visages humains pendant des années."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "On perd la majorité de sa chaleur corporelle par la tête.",
        answer: "non",
        explanation: "Faux ! La tête ne représente que ~10% de la surface corporelle. La perte de chaleur est proportionnelle."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les Vikings portaient des casques à cornes.",
        answer: "non",
        explanation: "Faux ! C'est une invention du XIXe siècle. Les vrais casques vikings étaient simples en métal."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Quelle affirmation sur l'espace est FAUSSE ?",
        options: ["Il n'y a pas de son dans l'espace", "Le Soleil est une étoile", "Il fait toujours froid dans l'espace", "La Lune s'éloigne de la Terre chaque année"],
        answer: 2,
        explanation: "Dans l'espace, la température varie énormément : au soleil elle dépasse 120°C, à l'ombre elle descend sous -150°C."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Albert Einstein a échoué en mathématiques à l'école.",
        answer: "non",
        explanation: "Faux ! Einstein excellait en maths. Cette légende vient d'une confusion avec le système de notes suisse."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Le lait maternel change de composition en fonction des besoins du bébé.",
        answer: "oui",
        explanation: "Vrai ! Le lait maternel s'adapte en temps réel aux besoins nutritionnels et immunitaires du nourrisson."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Laquelle de ces idées reçues est en réalité VRAIE ?",
        options: ["La langue a des zones de goût distinctes", "Craquer ses doigts donne de l'arthrite", "Les arbres communiquent entre eux via leurs racines", "Nager après manger donne des crampes mortelles"],
        answer: 2,
        explanation: "Les arbres communiquent via le 'Wood Wide Web', un réseau de champignons mycorhiziens reliant leurs racines."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les chameaux stockent de l'eau dans leurs bosses.",
        answer: "non",
        explanation: "Faux ! Les bosses contiennent de la graisse, pas de l'eau. L'eau est stockée dans leur sang."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Il est dangereux de réveiller un somnambule.",
        answer: "non",
        explanation: "Faux ! C'est un mythe. Le réveiller peut le désorienter mais ce n'est pas dangereux."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Lequel de ces mythes alimentaires est VRAI ?",
        options: ["Le chocolat donne des boutons", "Manger du pain fait grossir", "Le café stoppe la croissance", "Le chewing-gum met 7 ans à être digéré"],
        answer: 3,
        explanation: "Le chewing-gum n'est pas digéré par le corps mais il est évacué naturellement, pas en 7 ans !"
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "Les abeilles meurent toujours après avoir piqué.",
        answer: "non",
        explanation: "Seules les abeilles mellifères meurent après avoir piqué un humain. Les autres espèces non."
    },
    {
        category: "fakenews",
        type: "yesno",
        question: "L'eau de mer est salée principalement à cause de l'érosion des roches terrestres.",
        answer: "oui",
        explanation: "Vrai ! Les rivières transportent des sels minéraux issus de l'érosion des roches jusqu'aux océans depuis des milliards d'années."
    },
    {
        category: "fakenews",
        type: "mcq",
        question: "Quelle affirmation sur le corps humain est FAUSSE ?",
        options: ["Les empreintes digitales sont uniques", "Le corps contient assez de fer pour un clou", "Les cheveux poussent plus vite quand on les coupe", "L'estomac se renouvelle tous les 3-4 jours"],
        answer: 2,
        explanation: "Couper les cheveux ne change pas leur vitesse de pousse. C'est une illusion car les pointes coupées paraissent plus épaisses."
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
    {
        category: "geek",
        type: "mcq",
        question: "Dans Dragon Ball, comment s'appelle la transformation ultime des Saiyans aux cheveux dorés ?",
        options: ["Kaio-ken", "Super Saiyan", "Ultra Instinct", "Fusion"],
        answer: 1,
        explanation: "Le Super Saiyan est la transformation iconique de Goku, apparue pour la première fois face à Freezer."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel est le nom du robot aspirateur intelligent devenu un mème sur internet ?",
        answers: ["roomba", "irobot roomba"],
        explanation: "Le Roomba d'iRobot est devenu un mème culte, souvent filmé avec des chats dessus."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel jeu de survie en ligne met 100 joueurs sur une île avec une zone qui rétrécit ?",
        options: ["Minecraft", "Fortnite", "Roblox", "Fall Guys"],
        answer: 1,
        explanation: "Fortnite Battle Royale, lancé en 2017, a popularisé le concept de Battle Royale."
    },
    {
        category: "geek",
        type: "free",
        question: "Dans Naruto, quel est le jutsu signature de Naruto Uzumaki ?",
        answers: ["rasengan", "multi clonage", "kage bunshin", "multiclonage"],
        explanation: "Le Rasengan et le Multi-Clonage sont les techniques signatures de Naruto."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom du méchant principal de la saga 'L'Attaque des Titans' ?",
        options: ["Eren Jäger", "Reiner Braun", "Levi Ackerman", "Zeke Jäger"],
        answer: 0,
        explanation: "Eren Jäger, initialement héros, devient l'antagoniste principal dans la dernière partie du manga."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Le premier jeu vidéo de l'histoire est Pong (1972).",
        answer: "non",
        explanation: "Faux ! Le premier est généralement considéré comme 'Tennis for Two' (1958) ou 'Spacewar!' (1962)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quelle saga un anneau doit-il être détruit dans les flammes du Mont Doom ?",
        options: ["Harry Potter", "Le Seigneur des Anneaux", "Game of Thrones", "Narnia"],
        answer: 1,
        explanation: "Dans Le Seigneur des Anneaux de Tolkien, l'Anneau Unique doit être détruit dans la Montagne du Destin."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel est le nom du vaisseau de Han Solo dans Star Wars ?",
        answers: ["faucon millenium", "millennium falcon", "millenium falcon", "le faucon millenium"],
        explanation: "Le Faucon Millenium est le cargo corellien modifié de Han Solo et Chewbacca."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel jeu Nintendo Switch open-world a été élu jeu de l'année 2017 ?",
        options: ["Super Mario Odyssey", "Zelda: Breath of the Wild", "Splatoon 2", "Xenoblade Chronicles 2"],
        answer: 1,
        explanation: "Zelda: Breath of the Wild a révolutionné les jeux en monde ouvert et raflé les prix."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans le MCU, quel objet contient les 6 Pierres d'Infinité ?",
        options: ["Le Tesseract", "Le Gantelet de l'Infini", "Le Sceptre de Loki", "L'Orbe"],
        answer: 1,
        explanation: "Le Gantelet de l'Infini, forgé par les nains de Nidavellir, est utilisé par Thanos dans Infinity War."
    },
    {
        category: "geek",
        type: "free",
        question: "Quel personnage bleu de jeu vidéo Sega est connu pour sa vitesse ?",
        answers: ["sonic", "sonic the hedgehog"],
        explanation: "Sonic le Hérisson, mascotte de Sega depuis 1991, est connu pour sa vitesse supersonique."
    },
    {
        category: "geek",
        type: "yesno",
        question: "Dans Minecraft, on peut aller dans un monde appelé 'Le Nether' en construisant un portail en obsidienne.",
        answer: "oui",
        explanation: "Vrai ! Le portail du Nether nécessite un cadre de 4x5 blocs d'obsidienne activé par du feu."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel jeu de cartes à collectionner japonais est le plus vendu au monde ?",
        options: ["Yu-Gi-Oh!", "Pokémon", "Magic: The Gathering", "Dragon Ball Super Card Game"],
        answer: 1,
        explanation: "Les cartes Pokémon sont le jeu de cartes à collectionner le plus vendu avec plus de 52 milliards de cartes."
    },
    {
        category: "geek",
        type: "free",
        question: "Dans Harry Potter, comment s'appelle l'école de sorcellerie ?",
        answers: ["poudlard", "hogwarts"],
        explanation: "Poudlard (Hogwarts en anglais) est l'école de sorcellerie dirigée par Albus Dumbledore."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel jeu mobile a provoqué une folie mondiale en 2016 en utilisant la réalité augmentée ?",
        options: ["Candy Crush", "Pokémon GO", "Clash Royale", "Angry Birds"],
        answer: 1,
        explanation: "Pokémon GO de Niantic a fait sortir des millions de joueurs dans les rues pour attraper des Pokémon."
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
    // 🍊 TRUMP (Fake or Real Trump quotes)
    // ═══════════════════════════════════════
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment dit : « J'ai la meilleure mémoire du monde » ?",
        answer: "oui",
        explanation: "Il l'a déclaré en novembre 2015 lors d'un meeting de campagne, mot pour mot."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je pourrais tirer sur quelqu'un sur la Cinquième Avenue et je ne perdrais aucun électeur » ?",
        answer: "oui",
        explanation: "Déclaration faite le 23 janvier 2016 lors d'un meeting à Sioux Center, Iowa."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il suggéré d'injecter de l'eau de Javel pour combattre le COVID-19 ?",
        answer: "oui",
        explanation: "Lors d'un briefing en avril 2020, il a évoqué l'idée d'injecter du désinfectant dans le corps, provoquant une vague d'indignation."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Le réchauffement climatique a été inventé par les Chinois » ?",
        answer: "oui",
        explanation: "Il a tweeté en 2012 : « The concept of global warming was created by and for the Chinese ». Il a ensuite prétendu que c'était une blague."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé avoir inventé l'expression « priming the pump » (amorcer la pompe) ?",
        answer: "oui",
        explanation: "En mai 2017, lors d'une interview avec The Economist, il a affirmé avoir inventé cette expression qui existe depuis le 19e siècle."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je suis, genre, un génie très stable » ?",
        answer: "oui",
        explanation: "Il a tweeté le 6 janvier 2018 : « I think that would qualify as not smart, but genius....and a very stable genius at that! »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré : « La Finlande n'a pas de feux de forêt parce qu'ils ratissent leurs forêts » ?",
        answer: "oui",
        explanation: "En novembre 2018, il a affirmé que le président finlandais lui avait expliqué qu'ils ratissaient leurs forêts. Le président finlandais a nié."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il proposé de bombarder les ouragans avec des bombes nucléaires pour les arrêter ?",
        answer: "oui",
        explanation: "Selon Axios en 2019, Trump a effectivement posé la question lors d'un briefing sur les ouragans. La Maison Blanche a d'abord nié puis il a confirmé sur Twitter."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je comprends le nucléaire mieux que quiconque » ?",
        answer: "oui",
        explanation: "Il l'a affirmé à plusieurs reprises, notamment en expliquant que son oncle était professeur au MIT."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que la Tour Eiffel « est une horreur architecturale » ?",
        answer: "non",
        explanation: "Faux ! Trump n'a jamais fait cette déclaration. Il a même évoqué Paris comme une belle ville à plusieurs reprises."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Personne en a plus fait pour les Noirs que moi, à l'exception peut-être d'Abraham Lincoln » ?",
        answer: "oui",
        explanation: "Il a fait cette déclaration lors d'un town hall de Fox News en juin 2020."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que le bruit des éoliennes cause le cancer ?",
        answer: "oui",
        explanation: "En avril 2019, lors d'un discours, il a déclaré : « They say the noise causes cancer ». Il n'existe aucune preuve scientifique de cela."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré : « La Belgique est une belle ville » ?",
        answer: "oui",
        explanation: "Il a effectivement qualifié la Belgique de « beautiful city » (belle ville) lors d'une conférence de presse en 2017."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « J'ai les plus grands pieds de tous les présidents américains » ?",
        answer: "non",
        explanation: "Faux ! Il n'a jamais fait cette déclaration. C'est une invention."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il proposé d'acheter le Groenland au Danemark ?",
        answer: "oui",
        explanation: "En août 2019, il a confirmé son intérêt pour l'achat du Groenland, et a annulé une visite au Danemark quand la Première ministre a qualifié l'idée d'« absurde »."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je connais les mots. J'ai les meilleurs mots » ?",
        answer: "oui",
        explanation: "Déclaration faite en décembre 2015 : « I know words. I have the best words. »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que « l'exercice physique vide la batterie du corps et raccourcit la vie » ?",
        answer: "oui",
        explanation: "Il a partagé cette théorie à plusieurs reprises, comparant le corps humain à une batterie avec une énergie finie."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « J'aurais pu éviter la Guerre de Sécession en négociant un deal » ?",
        answer: "oui",
        explanation: "En mai 2017, il a déclaré que si Andrew Jackson avait été président un peu plus tard, il aurait pu empêcher la guerre civile et s'est demandé « pourquoi personne n'a négocié »."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré : « Le Canada fait partie des États-Unis, ils ne le savent juste pas encore » ?",
        answer: "non",
        explanation: "Faux ! Bien qu'il ait fait des blagues sur le Canada comme « 51e État », il n'a jamais prononcé cette phrase exacte."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé avoir vu « des milliers de musulmans célébrer le 11 septembre à Jersey City » ?",
        answer: "oui",
        explanation: "Il l'a affirmé en novembre 2015. Aucune preuve vidéo ou journalistique n'a jamais confirmé cette affirmation."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Covfefe » dans un tweet et affirmé ensuite que c'était un message codé volontaire ?",
        answer: "oui",
        explanation: "Après son tweet « covfefe » de mai 2017, Sean Spicer a déclaré que le président et un petit groupe de personnes savaient exactement ce que cela signifiait."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré que « Frédéric Douglass fait un travail formidable » en parlant au présent d'un homme mort en 1895 ?",
        answer: "oui",
        explanation: "En février 2017, il a dit : « Frederick Douglass is an example of somebody who's done an amazing job and is being recognized more and more », comme s'il était encore vivant."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Mon QI est l'un des plus élevés, et vous le savez tous » ?",
        answer: "oui",
        explanation: "Il a tweeté en 2013 : « Sorry losers and haters, but my I.Q. is one of the highest - and you all know it! »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que « la Lune fait partie de Mars » ?",
        answer: "oui",
        explanation: "En juin 2019, il a tweeté : « For all of the money we are spending, NASA should NOT be talking about going to the Moon - We did that 50 years ago. They should be focused on the much bigger things we are doing, including Mars (of which the Moon is a part). »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « J'ai construit la plus grande entreprise de crêpes du monde » ?",
        answer: "non",
        explanation: "Faux ! Trump n'a jamais fait cette déclaration. C'est une pure invention."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dessiné au marqueur une extension d'un ouragan sur une carte météo officielle pour prouver qu'il avait raison ?",
        answer: "oui",
        explanation: "En septembre 2019, lors du « Sharpiegate », il a montré une carte NOAA de l'ouragan Dorian modifiée au marqueur pour inclure l'Alabama, qu'il avait à tort mentionné comme menacé."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit qu'il « s'entend très bien avec Kim Jong-un » et qu'ils « sont tombés amoureux » ?",
        answer: "oui",
        explanation: "Lors d'un meeting en septembre 2018, il a déclaré : « We fell in love » en parlant de sa relation avec le dictateur nord-coréen."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé avoir « inventé le mot fake » ?",
        answer: "oui",
        explanation: "En octobre 2017, lors d'une interview avec Mike Huckabee, il a dit : « I think one of the greatest of all terms I've come up with is 'fake' ». Le mot existe depuis le 18e siècle."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré que « Napoléon Bonaparte était français et n'a jamais perdu une bataille » ?",
        answer: "non",
        explanation: "Faux ! Trump n'a jamais fait cette déclaration. Napoléon a d'ailleurs perdu plusieurs batailles, dont Waterloo."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il regardé directement une éclipse solaire sans lunettes de protection ?",
        answer: "oui",
        explanation: "Le 21 août 2017, malgré les avertissements des experts, Trump a été photographié regardant directement l'éclipse solaire sans protection, avant qu'un assistant ne lui donne des lunettes.",
        image: "img/trump/eclipse.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment posté cette photo de lui en Rocky Balboa torse nu ?",
        answer: "oui",
        explanation: "En novembre 2019, il a tweeté un montage de sa tête sur le corps musclé de Rocky Balboa, sans aucun commentaire.",
        image: "img/trump/rocky.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment fait un câlin au drapeau américain sur scène ?",
        answer: "oui",
        explanation: "Il l'a fait à de nombreuses reprises lors de meetings et à la conférence CPAC, embrassant et serrant le drapeau américain dans ses bras.",
        image: "img/trump/flag-hug.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment servi des hamburgers McDonald's lors d'un dîner officiel à la Maison Blanche ?",
        answer: "oui",
        explanation: "En janvier 2019, lors du shutdown, il a offert un banquet de fast-food (McDonald's, Burger King, Wendy's, Domino's) à l'équipe de football de Clemson.",
        image: "img/trump/mcdonalds-whitehouse.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Cette photo de Trump tenant une Bible devant une église a-t-elle été prise après avoir fait disperser des manifestants avec des gaz lacrymogènes ?",
        answer: "oui",
        explanation: "Le 1er juin 2020, la police a dispersé des manifestants pacifiques avec des gaz lacrymogènes devant l'église St. John à Washington pour que Trump puisse poser avec une Bible.",
        image: "img/trump/bible-church.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vraiment jeté des rouleaux d'essuie-tout sur des sinistrés à Porto Rico ?",
        answer: "oui",
        explanation: "En octobre 2017, après l'ouragan Maria, Trump a lancé des rouleaux de papier essuie-tout dans la foule des sinistrés comme des ballons de basket.",
        image: "img/trump/paper-towels.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il déclaré : « Je suis le président le moins raciste de l'histoire » ?",
        answer: "oui",
        explanation: "Il l'a affirmé à plusieurs reprises, notamment en juillet 2019 : « I am the least racist person there is anywhere in the world. »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit que « la presse est l'ennemi du peuple américain » ?",
        answer: "oui",
        explanation: "En février 2017, il a tweeté : « The FAKE NEWS media is not my enemy, it is the enemy of the American People! »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que « les toilettes modernes nécessitent 15 tirages de chasse » ?",
        answer: "oui",
        explanation: "En décembre 2019, il s'est plaint : « People are flushing toilets 10 times, 15 times, as opposed to once » pour critiquer les réglementations environnementales."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il poussé le Premier ministre du Monténégro lors d'un sommet de l'OTAN pour se mettre devant ?",
        answer: "oui",
        explanation: "En mai 2017, lors du sommet de l'OTAN à Bruxelles, Trump a écarté le Premier ministre Duško Marković pour se placer au premier rang des dirigeants.",
        image: "img/trump/nato-push.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit que « le vent tue toutes les oiseaux » en parlant des éoliennes ?",
        answer: "oui",
        explanation: "Il a déclaré en décembre 2019 : « I never understood wind. They're manufactured tremendous — if you're into this — tremendous fumes. Gases. They kill all the birds. »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il prétendu que sa cérémonie d'investiture en 2017 avait attiré plus de monde que celle d'Obama ?",
        answer: "oui",
        explanation: "Malgré des photos aériennes montrant clairement une foule plus petite, Trump et son attaché de presse Sean Spicer ont affirmé que c'était « la plus grande audience d'investiture, point final »."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je suis un très bon joueur de golf. Probablement le meilleur de tous les présidents » ?",
        answer: "oui",
        explanation: "Il s'est vanté de ses talents de golfeur à de multiples reprises et a affirmé avoir gagné plusieurs tournois dans ses propres clubs de golf."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il affirmé que « George Washington aurait dû mieux protéger ses aéroports » pendant la guerre d'Indépendance ?",
        answer: "oui",
        explanation: "Lors du discours du 4 juillet 2019, il a déclaré que l'armée continentale avait « pris le contrôle des aéroports » pendant la guerre de 1775. Les avions n'ont été inventés qu'en 1903."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit : « Je pourrais être le meilleur président que Dieu ait jamais créé » ?",
        answer: "non",
        explanation: "Faux ! Bien qu'il se soit souvent qualifié de meilleur président, il n'a jamais utilisé cette formulation exacte impliquant Dieu."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il utilisé un faux billet de 1 million de dollars à son effigie comme cadeau lors de meetings ?",
        answer: "non",
        explanation: "Faux ! Des supporters ont créé de faux billets, mais Trump ne les a jamais distribués lui-même."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il fait vendre des baskets dorées à son effigie à 399$ la paire ?",
        answer: "oui",
        explanation: "En février 2024, lors de la Sneaker Con, Trump a lancé ses « Trump Gold Sneakers » à 399$, qui se sont vendues en quelques heures.",
        image: "img/trump/gold-sneakers.jpg"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il vendu des NFT de lui-même déguisé en super-héros, cowboy et astronaute ?",
        answer: "oui",
        explanation: "En décembre 2022, il a lancé sa collection de « Trump Digital Trading Cards » à 99$ chacune, le montrant dans des poses héroïques diverses."
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il dit que « Tim Cook est un grand dirigeant d'entreprise parce qu'il m'appelle quand il a un problème » ?",
        answer: "oui",
        explanation: "En août 2019, il a déclaré : « I had a very good meeting with Tim Cook. He's become a friend of mine... He calls me whenever there's a problem. »"
    },
    {
        category: "trump",
        type: "yesno",
        question: "Trump a-t-il appelé Tim Cook « Tim Apple » en public ?",
        answer: "oui",
        explanation: "En mars 2019, lors d'une réunion du conseil consultatif, il a appelé le PDG d'Apple « Tim Apple ». Il a ensuite prétendu que c'était pour « gagner du temps ».",
        image: "img/trump/tim-apple.jpg"
    }
];
