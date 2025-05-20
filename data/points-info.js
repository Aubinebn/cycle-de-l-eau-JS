const pointsInfo = [
    {
        milieu: "urbain",
        label: "Artificialisation des sols",
        positionFiche: 'top',
        x: 54,
        y: 37,
        description: "<p>L'artificialisation des sols est définie comme l'altération durable de tout ou partie des fonctions écologiques d'un sol, en particulier de ses fonctions biologiques, hydriques et climatiques, ainsi que de son potentiel agronomique par son occupation ou son usage.</p>" +
                "<p>L'artificialisation des sols est préjudiciable avec : l'accélération de la perte de biodiversité, la réduction de l'alimentation des eaux souterraines, le réchauffement climatique, l'amplification des risques d'inondations, la réduction de la capacité des terres agricoles à nous nourrir, l'accroissement des dépenses liées aux réseaux, l'amplification de la fracture territoriale.</p>" +
                "<p>A contrario les sols\"vivants\" favorisent la biodiversité, limitent les risques d'inondation par ruissellement, stockent du carbone.</p>",
    },
    {
        milieu: "urbain",
        label: "Chateau d'eau",
        positionFiche: 'left',
        x: 95.2,
        y: 23,
        description: "<p>Le château d'eau est une construction destinée à entreproser l'eau en hauteur pour permettre de la distribuer sous pression par gravité.</p>" +
                "<p>L'entreposage de l'eau dans un réseau (château d'eau, cuve enterrée,...) joue un rôle de tampon entre le débit demandé par les abonnés et le débit fourni par la station de pompage.</p>" +
                "<p>L'eau est acheminée du point d'eau de prélèvement au réservoir. Si l'altitude du point d'eau est inférieur à l'altitude du réservoir, on utilise des pompes pour relever l'eau jusqu'à ce dernier.</p>" +
                "<p>Attention l'eau n'est contenue que dans la partie supérieure de l'ouvrage, la colonne permet de monter jusqu'au réservoir.</p>"
    },
    {
        milieu: "urbain",
        label: "Bassin versant",
        positionFiche: 'top',
        x: 73,
        y: 24,
        description: "<p>Un bassin versant est une portion d'espace terrestre à l'intérieur de laquelle tous les écoulements, en surface ou en profondeur, se dirigent vers le même exutoire (cours d'eau, lac, mer). La ligne de délimitation du bassin versant avec ces voisins est appelée ligne de partage des eaux.</p>",
    },
    {
        milieu: "agricole",
        label: "Eaux souterraines",
        positionFiche: 'top',
        x: 25,
        y: 70,
        description: "<p>Les eaux souterraines sont constituées des réserves d'eau stockées dans les roches poreuses et perméables du sous-sol. Les nappes d'eau souterraines ne sont ni des lacs ni des cours d'eau souterrains : c'est de l'eau contenue dans les roches poreuses saturées par les eaux de pluie qui se sont infliltrées. Elles communiquent plus ou moins avec les milieux aquatiques de surface. Les nappes libres communiquent avec la surface car une couche perméable les recouvre. Les nappes captives sont recouvertes par au moins une couche géologique imperméable qui confine l'eau.</p>",
    },
    {
        milieu: "agricole",
        label: "Intrants",
        positionFiche: 'top',
        x: 57,
        y: 44,
        description: "<p>Les intrants peuvent être de différents types, de synthèse via les pestcicides mais aussi organiques via l'apport de matière. Il s'agira d'être vigilant sur leur utilisation et d'en avoir une approche raisonnée.</p>",
    },
    {
        milieu: "agricole",
        label: "Prairies",
        positionFiche: 'top',
        x: 75,
        y: 32,
        description: "<p>La prairie humide constitue une forme particulière de zone humide qui peut être préservée grâce à une agriculture raisonnée.</p><p>Le maintien d’un couvert végétal permanent, une gestion pastorale extensive ou encore la fauche tardive sont autant de gestes qui contribuent à l’entretien de ces milieux et renforcent les nombreux services qu’ils rendent.</p>",
    },
    /*{
        milieu: "agricole",
        label: "Récupération d'eau de pluie",
        positionFiche: 'top',
        x: 75,
        y: 32,
        description: "Identique à la récupération de l'eau de pluie sur les toitures, la récupération de l'eau de pluie sur les bâtiments agricoles peut permettre l'arrosage, le lavage des sols, l'évacuation des excrétas...</p><p>C'est une solution alternative qui permet de protéger l'environnement en limitant les prélèvements notamment en période de sécheresse.",
    },*/
    {
        milieu: "naturel",
        label: "Libre évolution",
        positionFiche: 'top',
        x: 40,
        y: 50,
        description: "<p>Une zone humide laissée en libre évolution évolue naturellement selon plusieurs facteurs, notamment le climat, la topographie et les dynamiques écologiques locales.</p><p>Cette évolution est composée de différentes étapes qui se succéderont avec pour commencer la densification des herbier puis l'arrivée des ligneux pour enfin former un milieu de type forestier.</p><p>Une zone humide en libre évolution peut rester une prairie humide, évoluer en marais, en forêt alluviale, ou même en tourbière, selon les conditions locales.</p><p>C’est un processus lent et naturel qui favorise la biodiversité et les fonctions écologiques du milieu.</p>",
    },
    // {
        // milieu: "naturel",
        // label: "Plan d'aménagement forestier",
        // positionFiche: 'top',
        // x: 85,
        // y: 36,
        // description: "<p>Un plan d’aménagement forestier est un document qui sert à organiser et gérer une forêt de manière durable. Il définit comment exploiter les arbres tout en protégeant l’environnement et en préservant la biodiversité. Ce plan précise quelles zones seront exploitées, reboisées ou laissées intactes, ainsi que les actions à mener pour garantir la santé de la forêt sur le long terme. Son objectif est d’équilibrer la production de bois, la conservation de la nature et les besoins des humains.</p>",
    // },
    
    {
        milieu: "naturel",
        label: "Forêt de feuillus",
        positionFiche: 'bottom',
        x: 85,
        y: 36,
        description: "<p>Riches en espèces et dotées de sols vivants, les forêts de feuillus jouent un rôle clé dans la gestion durable de l’eau.</p><p>Leurs racines profondes et leur sol riche en humus favorisent l’infiltration, limitent le ruissellement et réduisent l’érosion.</p><p>Contrairement aux résineux, elles n’acidifient pas les sols et contribuent à une meilleure qualité de l’eau.</p><p>En hiver, lorsque les arbres perdent leurs feuilles, l’évapotranspiration diminue, ce qui facilite la recharge des nappes phréatiques.</p><p>Ces forêts offrent aussi une grande diversité d’habitats pour la faune et la flore, renforçant la résilience des écosystèmes face aux maladies et au changement climatique.</p>",
    }
]