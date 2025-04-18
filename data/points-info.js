const pointsInfo = [
    {
        milieu: "urbain",
        label: "Artificialisation des sols",
        positionFiche: 'top',
        x: 54,
        y: 37,
        description: "L'artificialisation des sols est définie comme l'altération durable de tout ou partie des fonctions écologiques d'un sol, en particulier de ses fonctions biologiques, hydriques et climatiques, ainsi que de son potentiel agronomique par son occupation ou son usage. \n" +
                "L'artificialisation des sols sont préjudiciables avec : l'accélération de la perte de biodiversité, la réduction de l'alimentation des eaux souterraines, le réchauffement climatique, l'amplification des risques d'inondations, la réduction de la capacité des terres agricoles à nous nourrir, l'accroissement des dépense liées aux réseaux, l'amplification de la fracture territoriale.\n" +
                "A contrario les sols\"vivants\" favorisent la biodiversité, limitent les risques d'inondation par ruissellement, stockent du carbone. ",
    },
    {
        milieu: "urbain",
        label: "Chateau d'eau",
        positionFiche: 'top',
        x: 95.2,
        y: 23,
        description: "Le château d'eau est une construction destinée à entreproser l'eau en hauteur pour permettre de la distribuer sous pression par gravité. \n" +
                "L'entreposage de l'eau dans un réseau (château d'eau, cuve enterrée,...) joue un rôle de tampon entre le débit demandé par les abonnés et le débit fourni par la station de pompage.\n" +
                "L'eau est acheminée du point d'eau de prélèvement au réservoir. Si l'altitude du point d'eau est inférieur à l'altitude du réservoir, on utilise des pompes pour relever l'eau jusqu'à ce dernier.\n" +
                "Attention l'eau n'est contenu que dans la partie supérieure de l'ouvrage, la colonne permet de monter jusqu'au réservoir."
    },
    {
        milieu: "urbain",
        label: "Bassin versant",
        positionFiche: 'top',
        x: 73,
        y: 24,
        description: "Un bassin versant est une portion d'espace terrestre à l'intérieur de laquelle tous les écoulements, en surface ou en profondeur, se dirigent vers le même exutoire (cours d'eau, lac, mer). La ligne de délimitation du bassin versant avec ces voisins est appelée ligne de partage des eaux.",
    },
    {
        milieu: "agricole",
        label: "Eaux souterraines",
        positionFiche: 'top',
        x: 25,
        y: 70,
        positionFiche: 'higher',
        description: "Les eaux souterraines sont constituées des réserves d'eau stockées dans les roches poreuses et perméables du sous-sol. Les nappes d'eau souterraine ne sont ni des lacs ni des cours d'eau souterrains : c'est de l'eau contenue dans les roches poreuses saturées par les eaux de pluie qui se sont infliltrées. Elles communiquent plus ou moins avec les milieux aquatiques de surface. Les nappes libres communiquent avec la surface car une couche perméable les recouvre. Les nappes captives sont recouvertes par au moins une couche géologique imperméable qui confine l'eau.",
    },
    {
        milieu: "agricole",
        label: "Intrants",
        positionFiche: 'top',
        x: 57,
        y: 44,
        description: "Un intrant peut tout autant être un pesticide de synthèse qui va avoir un impact négatif sur la qualité de l'eau tout comme un apport d'inoculum mycorhizien pour favoriser la tolérance de la culture vis à vis de la sécheresse. Ou encore, un amendement organique peut permettre d'accroitre la réserve utile des sols, améliore la perméabilité de la surface du sol, l'infiltration de l'eau et le ressuyage des sols ..." +
                "Attention à ne pas diaboliser les intrants. N'importe qui faisant du jardinage se rend compte qu'on ne peut pas exporter des productions sans rapporter quelque chose au sol (en tout cas sur le long terme).",
    },
    {
        milieu: "agricole",
        label: "Prairies",
        positionFiche: 'top',
        x: 67,
        y: 34,
        description: "Quelle que soit la nature de la prairie, son mode de conduite et sa localisation, une prairie joue un rôle important au regard de la protection de l'eau du fait qu'elle présente une couverture végétale permanente toute l'année et qu'elle est moins consommatrice d'intrants. Qui plus est, dans le cadre d'une prairie temporaire, elle permet de casser le cycle des adventices, d'apporter de l'azote et donc de diminuer l'usage d'intrants de synthèse pour les cultures qui lui succèdent.",
    },
    {
        milieu: "naturel",
        label: "Libre évolution",
        positionFiche: 'top',
        x: 47,
        y: 40,
        description: "Une zone humide laissée en libre évolution évolue naturellement selon plusieurs facteurs, notamment le climat, la topographie et les dynamiques écologiques locales. Voici les principales étapes et tendances possibles :\n" +
                "\n" +
                "1. Végétation herbacée et marais\n" +
                "Dans un premier temps, la zone humide reste dominée par des plantes aquatiques et semi-aquatiques (roseaux, joncs, carex…). La diversité végétale s’accroît, attirant une faune spécifique (amphibiens, oiseaux d’eau, insectes).\n" +
                "\n" +
                "2. Progression vers un milieu boisé (boisement spontané)\n" +
                "Sans intervention, certaines zones humides évoluent vers un boisement naturel. Des espèces adaptées aux milieux humides, comme les saules, aulnes ou frênes, s’installent progressivement, transformant le paysage en forêt alluviale ou ripisylve. Ce boisement modifie l’hydrologie et peut réduire l’ouverture du milieu.\n" +
                "\n" +
                "3. Stabilisation en forêt humide ou en tourbière\n" +
                "Selon l’humidité résiduelle et les conditions locales :\n" +
                "\n" +
                "Si l’eau reste abondante, la zone peut évoluer en tourbière où la matière organique s’accumule (sphaignes, mousses). Ce type de milieu stocke du carbone et joue un rôle majeur dans la régulation climatique.\n" +
                "Si l’eau se fait plus rare, la forêt humide peut s’épaissir et ressembler à une forêt classique, avec une biodiversité adaptée aux sols encore humides.\n" +
                "\n" +
                "En résumé : Une zone humide en libre évolution peut rester une prairie humide, évoluer en marais, en forêt alluviale, ou même en tourbière, selon les conditions locales. C’est un processus lent et naturel qui favorise la biodiversité et les fonctions écologiques du milieu.",
    },
    {
        milieu: "naturel",
        label: "Plan d'aménagement forestier",
        positionFiche: 'top',
        x: 81,
        y: 41,
        positionFiche: 'left',
        description: "Un plan d’aménagement forestier est un document qui sert à organiser et gérer une forêt de manière durable. Il définit comment exploiter les arbres tout en protégeant l’environnement et en préservant la biodiversité. Ce plan précise quelles zones seront exploitées, reboisées ou laissées intactes, ainsi que les actions à mener pour garantir la santé de la forêt sur le long terme. Son objectif est d’équilibrer la production de bois, la conservation de la nature et les besoins des humains.",
    }
]