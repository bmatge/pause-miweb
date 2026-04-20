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
    // 🎮 GEEK (tech, informatique, culture geek)
    // ═══════════════════════════════════════

    // --- Histoire de l'informatique ---
    {
        category: "geek",
        type: "mcq",
        question: "Qui est considéré·e comme la première programmeuse de l'histoire ?",
        options: ["Grace Hopper", "Ada Lovelace", "Hedy Lamarr", "Margaret Hamilton"],
        answer: 1,
        explanation: "Ada Lovelace a écrit le premier algorithme destiné à être exécuté par la machine analytique de Babbage, au XIXe siècle."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année a été créé le premier ordinateur électronique programmable, l'ENIAC ?",
        options: ["1943", "1946", "1951", "1958"],
        answer: 1,
        explanation: "L'ENIAC a été achev�� en 1946 à l'université de Pennsylvanie."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a inventé le concept de machine universelle qui porte son nom ?",
        options: ["John von Neumann", "Claude Shannon", "Alan Turing", "Alonzo Church"],
        answer: 2,
        explanation: "La machine de Turing (1936) est le modèle théorique fondamental de l'informatique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise a produit le premier ordinateur personnel commercial grand public en 1977 ?",
        options: ["IBM avec le PC", "Apple avec l'Apple II", "Commodore avec le PET", "Tandy avec le TRS-80"],
        answer: 1,
        explanation: "L'Apple II est le plus emblématique des micro-ordinateurs de 1977 (le PET et le TRS-80 sortent aussi cette année-là)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le « bug » informatique doit son nom à quel incident célèbre ?",
        options: ["Un papillon mort dans un tube à vide", "Un papillon de nuit coincé dans un relais du Mark II (Grace Hopper, 1947)", "Une erreur de calcul de l'ENIAC", "Un virus ayant planté l'ARPANET"],
        answer: 1,
        explanation: "Grace Hopper a documenté un vrai insecte (moth) trouvé dans un relais du Harvard Mark II en 1947."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a fondé Microsoft en 1975 avec Bill Gates ?",
        options: ["Steve Ballmer", "Paul Allen", "Nathan Myhrvold", "Gabe Newell"],
        answer: 1,
        explanation: "Paul Allen et Bill Gates ont co-fondé Microsoft à Albuquerque, Nouveau-Mexique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel était le nom du premier ordinateur Apple (1976) ?",
        options: ["Apple I", "Apple Lisa", "Macintosh", "Newton"],
        answer: 0,
        explanation: "L'Apple I, conçu par Steve Wozniak, était vendu en kit à 666,66 $."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a écrit le livre fondateur « The Art of Computer Programming » ?",
        options: ["Edsger Dijkstra", "Donald Knuth", "Niklaus Wirth", "Brian Kernighan"],
        answer: 1,
        explanation: "Donald Knuth a commencé cette œuvre monumentale en 1962, toujours en cours d'écriture."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année Douglas Engelbart a-t-il présenté « The Mother of All Demos » (souris, hypertexte, visioconférence…) ?",
        options: ["1962", "1968", "1972", "1976"],
        answer: 1,
        explanation: "Le 9 décembre 1968, Engelbart a présenté en 90 minutes la souris, le traitement de texte collaboratif et la visioconférence."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom de la loi qui prédit le doublement du nombre de transistors tous les deux ans ?",
        options: ["Loi de Metcalfe", "Loi de Moore", "Loi de Kryder", "Loi de Wirth"],
        answer: 1,
        explanation: "Gordon Moore a formulé cette observation en 1965. Elle s'est vérifiée pendant plus de 50 ans."
    },

    // --- Langages de programmation ---
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé le langage Python ?",
        options: ["Larry Wall", "Guido van Rossum", "Bjarne Stroustrup", "James Gosling"],
        answer: 1,
        explanation: "Guido van Rossum a créé Python en 1991 aux Pays-Bas."
    },
    {
        category: "geek",
        type: "mcq",
        question: "D'où vient le nom « Python » du langage de programmation ?",
        options: ["Du serpent", "De Monty Python", "D'un personnage de mythologie grecque", "D'un acronyme"],
        answer: 1,
        explanation: "Guido van Rossum était fan des Monty Python's Flying Circus."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a inventé le langage C ?",
        options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
        answer: 0,
        explanation: "Dennis Ritchie a créé le C aux Bell Labs entre 1969 et 1973."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année JavaScript a-t-il été créé ?",
        options: ["1993", "1995", "1998", "2000"],
        answer: 1,
        explanation: "Brendan Eich a créé JavaScript en 1995 chez Netscape."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de temps Brendan Eich aurait-il mis pour concevoir la première version de JavaScript ?",
        options: ["10 jours", "3 semaines", "2 mois", "6 mois"],
        answer: 0,
        explanation: "La légende (confirmée par Eich) veut que le prototype de JavaScript ait été écrit en 10 jours en mai 1995."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage a été créé par James Gosling chez Sun Microsystems ?",
        options: ["C++", "Java", "C#", "Scala"],
        answer: 1,
        explanation: "Java est sorti en 1995, conçu pour être portable (« Write once, run anywhere »)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage est connu pour son slogan « There's more than one way to do it » (TMTOWTDI) ?",
        options: ["Python", "Ruby", "Perl", "PHP"],
        answer: 2,
        explanation: "Perl, créé par Larry Wall en 1987, est célèbre pour cette philosophie permissive."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage a été créé par Yukihiro Matsumoto (« Matz ») ?",
        options: ["Ruby", "Lua", "Elixir", "Crystal"],
        answer: 0,
        explanation: "Matz a créé Ruby au Japon en 1995 avec l'objectif de rendre la programmation agréable."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage de programmation est nommé d'après un mathématicien français ?",
        options: ["Haskell", "Pascal", "Ada", "Erlang"],
        answer: 1,
        explanation: "Pascal est nommé d'après Blaise Pascal. Ada vient d'Ada Lovelace (anglaise), Haskell de Haskell Curry (américain)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le plus vieux langage de haut niveau encore utilisé aujourd'hui ?",
        options: ["COBOL", "Fortran", "Lisp", "ALGOL"],
        answer: 1,
        explanation: "Fortran date de 1957 (Lisp de 1958, COBOL de 1959). ALGOL n'est plus utilisé."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage a été créé par Rasmus Lerdorf en 1994 ?",
        options: ["PHP", "ASP", "Perl", "JSP"],
        answer: 0,
        explanation: "PHP était à l'origine « Personal Home Page Tools », un ensemble de scripts CGI."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifiait à l'origine l'acronyme PHP ?",
        options: ["Personal Home Page", "PHP Hypertext Preprocessor", "Programmable Hypertext Processor", "Pretty Home Pages"],
        answer: 0,
        explanation: "PHP signifiait « Personal Home Page » avant d'être rétro-acronymé en « PHP: Hypertext Preprocessor »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage utilise l'indentation significative pour délimiter les blocs de code ?",
        options: ["Ruby", "Python", "Perl", "Lua"],
        answer: 1,
        explanation: "Python impose l'indentation comme syntaxe, pas comme convention."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui est le créateur du langage C++ ?",
        options: ["Dennis Ritchie", "Bjarne Stroustrup", "Anders Hejlsberg", "Linus Torvalds"],
        answer: 1,
        explanation: "Bjarne Stroustrup a créé C++ aux Bell Labs au début des années 1980."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le langage Go a été développé principalement par quelle entreprise ?",
        options: ["Microsoft", "Google", "Mozilla", "Facebook"],
        answer: 1,
        explanation: "Go (2009) a été créé chez Google par Robert Griesemer, Rob Pike et Ken Thompson."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Le langage Rust a été initialement développé par quelle organisation ?",
        options: ["Google", "Mozilla", "Apache Foundation", "Red Hat"],
        answer: 1,
        explanation: "Rust a commencé comme projet personnel de Graydon Hoare chez Mozilla en 2006."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage est souvent associé à la première apparition du programme « Hello, World! » ?",
        options: ["C (via Kernighan & Ritchie)", "BASIC", "Pascal", "COBOL"],
        answer: 0,
        explanation: "Le « Hello, World! » est apparu dans le livre « The C Programming Language » de Kernighan & Ritchie (1978)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "TypeScript est un sur-ensemble de quel langage ?",
        options: ["Java", "JavaScript", "CoffeeScript", "Dart"],
        answer: 1,
        explanation: "TypeScript ajoute le typage statique à JavaScript. Créé par Microsoft en 2012."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage fonctionnel est souvent associé à la plateforme téléphonique d'Ericsson ?",
        options: ["Haskell", "OCaml", "Erlang", "F#"],
        answer: 2,
        explanation: "Erlang a été créé chez Ericsson pour gérer la téléphonie à haute disponibilité."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel langage utilise des parenthèses à profusion et des listes comme structure fondamentale ?",
        options: ["Prolog", "Lisp", "Smalltalk", "Forth"],
        answer: 1,
        explanation: "Lisp (1958) est célèbre pour ses parenthèses imbriquées — « Lots of Irritating Superfluous Parentheses »."
    },

    // --- Systèmes d'exploitation & Open Source ---
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année Linus Torvalds a-t-il annoncé Linux sur Usenet ?",
        options: ["1989", "1991", "1993", "1995"],
        answer: 1,
        explanation: "Le 25 août 1991, Linus poste son célèbre message « I'm doing a (free) operating system (just a hobby) »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "De quelle nationalité est Linus Torvalds ?",
        options: ["Suédois", "Finlandais", "Norvégien", "Danois"],
        answer: 1,
        explanation: "Linus Torvalds est finlandais, né à Helsinki. Il est finno-suédois (minorité suédophone de Finlande)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a fondé la Free Software Foundation et lancé le projet GNU ?",
        options: ["Eric S. Raymond", "Linus Torvalds", "Richard Stallman", "Bruce Perens"],
        answer: 2,
        explanation: "Richard Stallman a lancé GNU en 1983 et fondé la FSF en 1985."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie GNU ?",
        options: ["General Network Utility", "GNU's Not Unix", "General New Unix", "Global Network Unified"],
        answer: 1,
        explanation: "GNU est un acronyme récursif : « GNU's Not Unix »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle distribution Linux utilise le gestionnaire de paquets « pacman » ?",
        options: ["Gentoo", "Arch Linux", "Slackware", "Void Linux"],
        answer: 1,
        explanation: "Arch Linux est connue pour pacman, sa philosophie KISS et sa documentation (le wiki Arch)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle licence open source est la plus « virale » (copyleft fort) ?",
        options: ["MIT", "BSD", "GPL", "Apache 2.0"],
        answer: 2,
        explanation: "La GPL (General Public License) oblige tout dérivé à rester sous GPL."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom du noyau utilisé par macOS ?",
        options: ["Darwin (XNU)", "Mach", "BSD", "Cocoa"],
        answer: 0,
        explanation: "macOS utilise le noyau XNU (X is Not Unix), qui fait partie du projet open source Darwin."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle mascotte représente le projet BSD ?",
        options: ["Un pingouin", "Un diablotin rouge", "Un gnou", "Un caméléon"],
        answer: 1,
        explanation: "Beastie, le diablotin rouge avec une fourche, est la mascotte de BSD depuis les années 1980."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé Git en 2005 ?",
        options: ["Junio Hamano", "Linus Torvalds", "Guido van Rossum", "Theo de Raadt"],
        answer: 1,
        explanation: "Linus Torvalds a créé Git en quelques semaines pour gérer le code du noyau Linux."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Pourquoi Linus Torvalds a-t-il créé Git ?",
        options: ["Pour remplacer Subversion trop lent", "Suite à la rupture avec BitKeeper", "Par défi personnel pendant un week-end pluvieux", "Pour héberger le noyau Linux sur SourceForge"],
        answer: 1,
        explanation: "En 2005, la licence gratuite de BitKeeper a été révoquée, poussant Linus à créer son propre VCS."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel shell Unix est l'ancêtre de la plupart des shells modernes ?",
        options: ["csh", "bash", "sh (Bourne shell)", "zsh"],
        answer: 2,
        explanation: "Le Bourne shell (sh), créé par Stephen Bourne en 1979, est l'ancêtre de bash, zsh, etc."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle commande Unix affiche les processus en cours ?",
        options: ["`ls`", "`ps`", "`top` uniquement", "`proc`"],
        answer: 1,
        explanation: "La commande `ps` (process status) liste les processus. `top` les affiche en temps réel."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel éditeur de texte est associé à la rivalité historique avec Vim ?",
        options: ["Nano", "Emacs", "Sublime Text", "Notepad++"],
        answer: 1,
        explanation: "La guerre Emacs vs Vim dure depuis les années 1980. Emacs est souvent qualifié de « système d'exploitation auquel il manque un bon éditeur »."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans Vim, quelle commande permet de quitter sans sauvegarder ?",
        options: ["`:wq`", "`:q!`", "`:exit`", "`Ctrl+C`"],
        answer: 1,
        explanation: "`:q!` force la sortie sans sauvegarder. La blague « comment quitter Vim » est un classique du folklore dev."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel projet est à l'origine du système de fichiers ext4 ?",
        options: ["FreeBSD", "Linux", "Solaris", "HP-UX"],
        answer: 1,
        explanation: "ext4 est le système de fichiers par défaut de la plupart des distributions Linux depuis 2008."
    },

    // --- Internet & Web ---
    {
        category: "geek",
        type: "mcq",
        question: "Qui est considéré comme l'inventeur du World Wide Web ?",
        options: ["Vint Cerf", "Tim Berners-Lee", "Marc Andreessen", "Robert Cailliau"],
        answer: 1,
        explanation: "Tim Berners-Lee a inventé le Web au CERN en 1989-1990."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans quel laboratoire le World Wide Web a-t-il été inventé ?",
        options: ["Xerox PARC", "Bell Labs", "CERN", "MIT Media Lab"],
        answer: 2,
        explanation: "Le CERN à Genève, laboratoire de physique des particules, a vu naître le Web."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie HTTP ?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transport Protocol", "Hybrid Text Transfer Protocol"],
        answer: 0,
        explanation: "HyperText Transfer Protocol, le protocole fondamental du Web."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le code de réponse HTTP pour « Not Found » ?",
        options: ["403", "404", "500", "503"],
        answer: 1,
        explanation: "404 Not Found — probablement le code d'erreur le plus connu du grand public."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie le code HTTP 418 ?",
        options: ["Too Many Requests", "I'm a teapot", "Unavailable For Legal Reasons", "Payment Required"],
        answer: 1,
        explanation: "« 418 I'm a teapot » est un poisson d'avril de 1998 (RFC 2324) devenu un easter egg permanent."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel fut le premier navigateur web graphique largement distribué ?",
        options: ["Netscape Navigator", "Mosaic", "Internet Explorer", "WorldWideWeb (Nexus)"],
        answer: 1,
        explanation: "Mosaic (1993), créé par Marc Andreessen au NCSA, a démocratisé le Web auprès du grand public."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel protocole réseau est l'ancêtre d'Internet, initié par la DARPA ?",
        options: ["NSFNET", "ARPANET", "BITNET", "USENET"],
        answer: 1,
        explanation: "ARPANET (1969) a été le premier réseau à utiliser la commutation de paquets."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année le premier email a-t-il été envoyé par Ray Tomlinson ?",
        options: ["1969", "1971", "1975", "1980"],
        answer: 1,
        explanation: "Ray Tomlinson a envoyé le premier email réseau en 1971 sur ARPANET."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Pourquoi Ray Tomlinson a-t-il choisi le symbole @ pour séparer l'utilisateur du domaine dans les emails ?",
        options: ["C'était le seul caractère non utilisé dans les noms", "Il trouvait le signe esthétique", "C'était une convention militaire", "Il a hérité de la tradition du langage BCPL"],
        answer: 0,
        explanation: "Le @ n'apparaissait dans aucun nom de personne, ce qui en faisait un séparateur non ambigu."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a créé le protocole TCP/IP avec Bob Kahn ?",
        options: ["Jon Postel", "Vint Cerf", "Paul Baran", "Leonard Kleinrock"],
        answer: 1,
        explanation: "Vint Cerf et Bob Kahn ont publié la spécification de TCP en 1974."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie le « S » dans HTTPS ?",
        options: ["Server", "Secure", "Safe", "Session"],
        answer: 1,
        explanation: "HTTPS = HTTP Secure, chiffré via TLS (anciennement SSL)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le port par défaut du protocole SSH ?",
        options: ["21", "22", "23", "25"],
        answer: 1,
        explanation: "SSH utilise le port 22 (21 = FTP, 23 = Telnet, 25 = SMTP)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel moteur de recherche a été lancé en 1998 par Larry Page et Sergey Brin ?",
        options: ["AltaVista", "Yahoo!", "Google", "Lycos"],
        answer: 2,
        explanation: "Google a été fondé en septembre 1998 dans un garage à Menlo Park."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelait Google à l'origine, pendant ses premiers mois de prototype ?",
        options: ["Archie", "BackRub", "PageRank", "Stanford Search"],
        answer: 1,
        explanation: "BackRub analysait les « back links » pour classer les pages. Il a été renommé Google en 1997."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel site était à l'origine une encyclopédie « traditionnelle » avec comité éditorial avant de devenir Wikipedia ?",
        options: ["Citizendium", "Nupedia", "Everything2", "Encarta"],
        answer: 1,
        explanation: "Nupedia (2000) était trop lente ; son wiki annexe est devenu Wikipedia en janvier 2001."
    },

    // --- Hackers, sécurité & folklore ---
    {
        category: "geek",
        type: "mcq",
        question: "Quel ver informatique de 1988 a infecté environ 10 % d'Internet à l'époque ?",
        options: ["Code Red", "Slammer", "Le ver de Morris", "ILOVEYOU"],
        answer: 2,
        explanation: "Le ver de Morris (Robert Tappan Morris) a paralysé environ 6000 machines, soit ~10 % d'Internet en 1988."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui est l'auteur du ver de Morris qui a infecté 10 % d'Internet en 1988 ?",
        options: ["Kevin Mitnick", "Robert Tappan Morris", "Adrian Lamo", "Gary McKinnon"],
        answer: 1,
        explanation: "Robert Tappan Morris, alors étudiant à Cornell, a ��té le premier condamné sous le Computer Fraud and Abuse Act."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel hacker célèbre a été arrêté en 1995 après une longue traque par le FBI ?",
        options: ["Kevin Mitnick", "Kevin Poulsen", "Adrian Lamo", "Gary McKinnon"],
        answer: 0,
        explanation: "Kevin Mitnick, le hacker le plus recherché des USA dans les années 90, a été arrêté grâce à Tsutomu Shimomura."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie l'acronyme DDoS ?",
        options: ["Digital Denial of Service", "Distributed Denial of Service", "Domain Denial of Server", "Direct Denial of Service"],
        answer: 1,
        explanation: "Distributed Denial of Service : une attaque menée depuis de multiples machines pour saturer une cible."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel est le nom du framework open source célèbre pour les tests d'intrusion ?",
        options: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"],
        answer: 2,
        explanation: "Metasploit (2003) est le framework de référence pour le pentesting, maintenu par Rapid7."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle faille de 2014 dans OpenSSL a été baptisée du nom d'un cœur qui saigne ?",
        options: ["Shellshock", "Heartbleed", "Spectre", "POODLE"],
        answer: 1,
        explanation: "Heartbleed (CVE-2014-0160) permettait de lire la mémoire des serveurs — catastrophe mondiale."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle faille matérielle affectant les CPU Intel a été révélée en janvier 2018 ?",
        options: ["Meltdown", "Rowhammer", "Foreshadow", "ZombieLoad"],
        answer: 0,
        explanation: "Meltdown permettait à un processus de lire la mémoire du noyau via l'exécution spéculative."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est la devise historique des hackers au sens noble du terme ?",
        options: ["\"Information wants to be free\"", "\"Code is law\"", "\"Don't be evil\"", "\"Move fast and break things\""],
        answer: 0,
        explanation: "Phrase de Stewart Brand (1984), devenue le credo du mouvement hacker et de l'open source."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a écrit « The Cathedral and the Bazaar », essai fondateur sur l'open source ?",
        options: ["Richard Stallman", "Eric S. Raymond", "Bruce Perens", "Lawrence Lessig"],
        answer: 1,
        explanation: "Eric S. Raymond a publié cet essai en 1997, comparant le développement propriétaire (cathédrale) et open source (bazar)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel lanceur d'alerte a révélé les programmes de surveillance de la NSA en 2013 ?",
        options: ["Julian Assange", "Chelsea Manning", "Edward Snowden", "Daniel Ellsberg"],
        answer: 2,
        explanation: "Edward Snowden, ex-contractuel de la NSA, a révélé PRISM et d'autres programmes de surveillance de masse."
    },

    // --- Matériel & réseaux ---
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie CPU ?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
        answer: 0,
        explanation: "Central Processing Unit — le processeur central qui exécute les instructions."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle société a été co-fondée par Gordon Moore et Robert Noyce en 1968 ?",
        options: ["AMD", "Intel", "Texas Instruments", "Motorola"],
        answer: 1,
        explanation: "Intel (Integrated Electronics) a dominé le marché des processeurs pendant des décennies."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel composant réalise le calcul massivement parallèle pour le graphisme et le deep learning ?",
        options: ["CPU", "GPU", "TPU uniquement", "FPU"],
        answer: 1,
        explanation: "Le GPU (Graphics Processing Unit) excelle dans le calcul parallèle, essentiel au machine learning."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise conçoit les architectures ARM ?",
        options: ["AMD", "Intel", "Arm Ltd.", "Qualcomm"],
        answer: 2,
        explanation: "Arm Ltd. (Cambridge, UK) conçoit l'architecture et la licencie à d'autres (Apple, Qualcomm, Samsung…)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle puce Apple a marqué la transition x86 → ARM sur Mac ?",
        options: ["A14", "M1", "M2", "T2"],
        answer: 1,
        explanation: "La puce M1 (2020) a marqué l'abandon d'Intel sur les Mac avec des performances/watt spectaculaires."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie RAM ?",
        options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Runtime Active Memory"],
        answer: 0,
        explanation: "Random Access Memory — mémoire volatile à accès aléatoire (par opposition à séquentiel)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien d'octets dans un kibioctet (KiB) ?",
        options: ["1000", "1024", "1048", "1056"],
        answer: 1,
        explanation: "1 KiB = 2^10 = 1024 octets. Le kilooctet (kB) vaut 1000 octets (norme SI)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel standard de câble est associé au port USB-C ?",
        options: ["IEEE 1394", "USB 3.1 / 3.2 / 4", "eSATA", "HDMI 2.0"],
        answer: 1,
        explanation: "USB-C est le connecteur physique utilisé par USB 3.1, 3.2, 4 et aussi Thunderbolt 3/4."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle couche du modèle OSI gère les adresses IP ?",
        options: ["Couche 2 (Liaison)", "Couche 3 (Réseau)", "Couche 4 (Transport)", "Couche 7 (Application)"],
        answer: 1,
        explanation: "La couche 3 (Réseau) gère l'adressage IP et le routage."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de bits dans une adresse IPv4 ?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explanation: "IPv4 utilise 32 bits (4 octets), soit ~4,3 milliards d'adresses possibles."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Combien de bits dans une adresse IPv6 ?",
        options: ["64", "96", "128", "256"],
        answer: 2,
        explanation: "IPv6 utilise 128 bits, soit 3,4 × 10^38 adresses possibles."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel périphérique convertit les signaux numériques en analogiques pour Internet via ligne téléphonique ?",
        options: ["Routeur", "Modem", "Switch", "Hub"],
        answer: 1,
        explanation: "MOdulateur-DEModulateur : le modem convertit entre numérique et analogique."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise a tenté de racheter Arm Ltd. en 2020 avant que l'acquisition n'échoue ?",
        options: ["Apple", "Nvidia", "Microsoft", "Samsung"],
        answer: 1,
        explanation: "Nvidia a proposé 40 milliards $ à SoftBank en 2020, mais l'opération a échoué en 2022 face à l'opposition des régulateurs."
    },

    // --- Folklore & culture geek ---
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie « RTFM » ?",
        options: ["Really This File Matters", "Read The Fucking Manual", "Run The Full Make", "Read The Fine Manual (variante polie)"],
        answer: 1,
        explanation: "« Read The Fucking Manual » — réponse classique des forums quand quelqu'un pose une question documentée."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans « Le Guide du voyageur galactique » de Douglas Adams, quelle est la réponse à la grande question sur la vie, l'univers et le reste ?",
        options: ["7", "13", "42", "0"],
        answer: 2,
        explanation: "42, calculée par l'ordinateur Deep Thought en 7,5 millions d'années. La question, elle, reste inconnue."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelle le protagoniste de « Ready Player One » ?",
        options: ["Wade Watts", "Art3mis", "Halliday", "Sorrento"],
        answer: 0,
        explanation: "Wade Watts (alias Parzival) est le héros du roman d'Ernest Cline (2011)."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle entreprise Linux a été rachetée par IBM en 2019 pour 34 milliards de dollars ?",
        options: ["Canonical", "SUSE", "Red Hat", "Oracle"],
        answer: 2,
        explanation: "Red Hat, éditeur de RHEL et sponsor de Fedora, a été acquis par IBM."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel easter egg est accessible en tapant « do a barrel roll » sur Google ?",
        options: ["La page clignote", "La page fait un tour complet sur elle-même", "Un mini-jeu apparaît", "Un tonneau roule à l'écran"],
        answer: 1,
        explanation: "La page entière fait une rotation à 360°, en référence au jeu Star Fox."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est l'origine de l'expression « spam » pour désigner les courriels indésirables ?",
        options: ["Un sketch des Monty Python", "Une marque de nourriture américaine (Hormel)", "Les deux — la marque a inspiré le sketch, qui a inspiré le terme informatique", "Un acronyme : Stupid Pointless Annoying Message"],
        answer: 2,
        explanation: "SPAM est une marque de viande en boîte ; les Monty Python en ont fait un sketch répétitif, d'où le terme pour les messages répétitifs."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Comment s'appelle l'écran d'erreur bleu historique de Windows ?",
        options: ["Kernel Panic", "BSOD (Blue Screen of Death)", "Guru Meditation", "Fatal Error 404"],
        answer: 1,
        explanation: "Le BSOD (Blue Screen of Death) est l'écran d'erreur fatale de Windows depuis Windows 3.1."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Sur les ordinateurs Amiga, comment s'appelait l'écran d'erreur système ?",
        options: ["Kernel Panic", "Guru Meditation", "Red Screen of Annoyance", "Sad Mac"],
        answer: 1,
        explanation: "« Guru Meditation » s'affichait en rouge sur fond noir — le nom venait d'un jeu interne chez Amiga."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie « FOSS » ?",
        options: ["Free Open Source Software", "Freely Organized Source System", "Fully Open Source System", "Foundation of Open Source Standards"],
        answer: 0,
        explanation: "Free and Open Source Software — logiciel libre et open source."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quelle est la mascotte officielle du noyau Linux ?",
        options: ["Un gnou (GNU)", "Un manchot nommé Tux", "Un diablotin rouge (BSD)", "Un caméléon (SUSE)"],
        answer: 1,
        explanation: "Tux le manchot a été dessiné par Larry Ewing en 1996. Linus Torvalds aimait les pingouins."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel nombre est traditionnellement associé au « leet speak » dans la culture hacker ?",
        options: ["1337", "42", "666", "101"],
        answer: 0,
        explanation: "1337 = LEET = « elite ». Le leet speak remplace les lettres par des chiffres/symboles."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel site d'actualités tech, né en 1997, a popularisé la devise « News for nerds. Stuff that matters. » ?",
        options: ["Digg", "Reddit", "Slashdot", "Hacker News"],
        answer: 2,
        explanation: "Slashdot (slashdot.org), créé par Rob Malda, a dominé l'actualité tech/geek avant Reddit."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Quel film de 1982 a popularisé le concept de cyberespace visuel avant le roman « Neuromancien » ?",
        options: ["Akira", "Tron", "Ghost in the Shell", "WarGames"],
        answer: 1,
        explanation: "Tron (Disney, 1982) montre un programmeur aspiré dans un monde informatique. Neuromancien sort en 1984."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Qui a écrit le roman « Neuromancien » (1984), pionnier du cyberpunk ?",
        options: ["Philip K. Dick", "William Gibson", "Bruce Sterling", "Neal Stephenson"],
        answer: 1,
        explanation: "William Gibson a inventé le terme « cyberespace » et lancé le genre cyberpunk avec ce roman."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Dans « Snow Crash » de Neal Stephenson, quel mot est inventé pour désigner l'univers virtuel immersif ?",
        options: ["Cyberspace", "Metaverse", "Matrix", "Grid"],
        answer: 1,
        explanation: "Le terme « Metaverse » vient de Snow Crash (1992), bien avant que Facebook ne le récupère."
    },
    {
        category: "geek",
        type: "mcq",
        question: "En quelle année Wikipedia a-t-elle été lancée ?",
        options: ["1999", "2001", "2003", "2005"],
        answer: 1,
        explanation: "Wikipedia a été lancée le 15 janvier 2001 par Jimmy Wales et Larry Sanger."
    },
    {
        category: "geek",
        type: "mcq",
        question: "Que signifie la blague geek « There are 10 kinds of people in the world… » ?",
        options: ["Ceux qui comprennent le binaire et ceux qui ne comprennent pas", "Ceux qui codent en C et les autres", "Ceux qui utilisent Vim et ceux qui utilisent Emacs", "Ceux qui aiment les chats et ceux qui mentent"],
        answer: 0,
        explanation: "10 en binaire = 2 en décimal. La blague est que « 10 » est interprété comme deux (en base 2) par les initiés."
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
    }
];
