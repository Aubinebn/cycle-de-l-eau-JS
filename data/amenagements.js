const urbain = [
    {
        milieu: "urbain",
        label: "Parcs",
        x: 31,
        y: 49,
        active: false,
        imageActive: "urbain/parc.png",
        imageFocus: "urbain/parc-focus.png",
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 25,
                    y: 45
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 19,
                    y: 58
                }
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "En ville, les parcs végétalisés permettent de créer une zone perméable (qui laisse traverser l'eau) ce qui permet de laisser l'eau intégrer le sol et remplir les nappes phréatiques. De plus ces espaces sont des refuges pour la biodiversité qui peine à trouver sa place en ville.",
    },
    {
        milieu: "urbain",
        label: "Densification urbaine",
        x: 20,
        y: 30,
        active: false,
        imageInactive: "urbain/colline-ville.png",
        imageActive: "urbain/immeubles.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "\"L'augmentation du nombre de construction, la densification de l'habitat impactent le milieu naturel en empêchant les eaux de pluie de s'infiltrer et en créant des îlots de chaleur. Lorsque l'on urbanise fortement et que l'espace ne permet pas d'infiltrer les eaux de pluie à la parcelle, celles-ci sont collectés par des réseaux. Elles sont acheminées à la station d'épuration si le réseau est unitaire ou directement vers le milieu naturel si le réseau est séparatif. \n" +
            "Lors de forts épisodes pluvieux les réseaux peuvent être saturés et créer des débordements sur la chaussée. La collecte des eaux pluviales par les réseaux accélère le transport de l'eau vers un même exutoire, ce qui contribue à augementer le débit des cours d'eau et créer des inondations.\"",
    },
    {
        milieu: "urbain",
        label: "Noues d'infiltration",
        x: 39,
        y: 46,
        active: false,
        imageActive: "urbain/noue.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "Les noues et fossés d'infiltration facilitent la régulation des inondations et des macro-polluants. Ils peuvent également constituer un bon support de sensibilisation à la gestion des eaux pluviales, notamment dans les zones urbaines.",
    },
    {
        milieu: "urbain",
        label: "Infiltration à la parcelle",
        x: 79,
        y: 67,
        active: false,
        imageActive: "urbain/infiltration-parcelle.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "L'infiltration des eaux pluviales à la parcelle consiste à créer des aménagements permettant l'infiltration sur place de l'eau de pluie et donc une restitution au milieu naturel ou le stockage temporaire des eaux pluviales pour ainsi maitriser le déversement dans les réseaux d'assainissement collectif.",
    },
    {
        milieu: "urbain",
        label: "Séparation Eaux usées / Eaux pluviales",
        x: 70,
        y: 73,
        active: false,
        imageInactive: "urbain/reseau-commun.png",
        imageActive: "urbain/reseau-separatif.png",
        effects: {
            qualiteEau: {
                modifier: +1
            },
        },
        description: "La séparation des eaux usées et des eaux pluviales permet de limiter l'engorgement des réseaux d'assainissement et d'éviter les débordements avec rejet au milieu naturel.",
    },
    {
        milieu: "urbain",
        label: "Stockage des eaux de pluies",
        x: 78,
        y: 61,
        active: false,
        imageActive: "urbain/cuve-eau.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "Le stockage des eaux pluviales permet en période de sécheresse d'utiliser cette eau en substitution de l'eau potable. Cela réduit l'impact sur la ressource en eau potable lorsque la ressource est déjà en tension.",
    },
    {
        milieu: "urbain",
        label: "Bassin de rétention des eaux pluviales",
        x: 59,
        y: 48,
        active: false,
        imageActive: "urbain/bassin-retention.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "Un bassin de rétention des eaux pluviales aussi appelé bassin tampon est une infrastructure essentielle dans la gestion des eaux pluviales, surtout pour les terrains soumis à un urbanisme croissant. Il sert à recueillir temporairement les excédents d'eau de pluie, évitant ainsi les inondations et la surcharge des réseaux d'assainissement. ",
    },
    {
        milieu: "urbain",
        label: "Parking infiltrant",
        x: 48,
        y: 58,
        active: false,
        imageActive: "urbain/parking-infiltrant.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1,
                indicator: {
                    image: 'img/amenagements/ruissellement/ruissellement-parking.png',
                    x: 43.5,
                    y: 52
                }
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "\"Le parking perméable permet l'infiltration des eaux pluviales, évite un maximum le ruissellement de surface et désengorge le réseau d'assainissement. Le parking perméable végétalisé améliore le climat urbain et diminue l'effet îlot de chaleur en ville.\n" +
            "Le parking perméable est aussi un atout pour capter les polluants (dont les hydrocarbures). Enfin il améliore le développement de la biodiversité en ville, s'il remplace un parking à l'origine complètement imperméable.\"",
    },
    {
        milieu: "urbain",
        label: "Végétalisation",
        x: 35,
        y: 60,
        active: false,
        imageActive: "urbain/parking-vegetalise.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            },
            qualiteEau: {
                modifier: -10
            },
        },
        description: "La désimperméabilisation concourt à l'adaptation au changement climatique par :\n" +
            "- la réduction du risque inondation en limitant le ruissellement sur les surfaces imperméabilisées,\n" +
            "- la préservation des ressources naturelles (eau et sol), en limitant l'accumulation de contaminants dans les eaux de pluies et dans les milieux récepteurs, en réduisant les débordements de réseaux d'assainissement par temps de pluie dans les milieux aquatiques, en permettant la recharge des nappes phréatiques, en redonnant vie aux sols;\n" +
            "- la réintroduction de la nature en ville : certaines techniques vertes vont dans le sens de la végétalisation de la ville.",
    },
];

const agricole = [
    {
        milieu: "agricole",
        label: "Diversité culturale",
        x: 11,
        y: 50,
        active: false,
        imageActive: "agricole/diversite-cultures.png",
        imageInactive: "agricole/monoculture.png",
        effects: {
            evaporation: {
                modifier: -1
            },
            infiltration: {
                modifier: +1
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "Qu'elle soit à l'échelle du paysage (multi productions), du système de culture (rotation diversifiée, agroforesterie ...) ou de la culture (association de cultures ou mélanges de variétés), la diversité est une question de bon sens. Elle permet de tirer de multiples bénéfices de la complémentarité culturale (ombrage aux pics de chaleur, captation d'azote atmosphérique, limitation du travail du sol...), de limiter la propagation des bioagresseurs (ex : insectes ravageurs ...), de diversifier les risques face aux aléas climatiques, etc. Elle permet ainsi de réduire l'impact sur l'environnement (moins d'intrants de synthèse utilisés, moins de lessivage d'azote ...).",
    },
    {
        milieu: "agricole",
        label: "Travail du sol superficiel",
        x: 38,
        y: 56,
        active: false,
        imageActive: "agricole/labour-superficiel.png",
        imageInactive: "agricole/labour-classique.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "",
    },
    {
        milieu: "agricole",
        label: "Pâturage extensif",
        x: 82,
        y: 48,
        active: false,
        imageActive: "agricole/elevage-extensif-barrieres.png",
        imageInactive: "agricole/elevage-classique-barriere.png",
        effects: {
            infiltration: {
                modifier: +1
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "La mise en défend des berges permet de limiter l'érosion des berges de cours d'eau et limiter son piétinement. Cela préserve la qualité de l'eau. Le chargement moins important à l'hectar évite le compactage des sols et permet l'infiltration.\n" +
                "Plusieurs techniques existent pour permettre l'abreuvement du bétail dans ces conditions : passage à gué, pompe à nez, aménagement de mare.",
    },
    {
        milieu: "agricole",
        label: "Haies",
        x: 50.7,
        y: 50,
        active: false,
        imageActive: "agricole/haies.png",
        effects: {
            infiltration: {
                modifier: +1
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "Tout végétal transpire et donc relargue de l'eau dans l'atmosphère. Fonction des espèces, la haie va donc puiser de l'eau dans les sols. A contrario, le fait qu'elle transpire couplé à l'ombrage portée va diminuer respectivement la température de l'air et le rayonnement au niveau du sol (et donc sa température), et de ce fait, diminuer l'évaporation de l'eau du sol. ",
    },
];

const naturel = [
    {
        milieu: "naturel",
        label: "Plantation d'une peupleraie",
        x: 59,
        y: 34,
        active: true,
        imageActive: "naturel/peupliers.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: -1
            },
            qualiteEau: {
                modifier: -1
            },
            ruissellement: {
                modifier: +1
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: -1
            }
        },
        description: "L’implantation d’une peupleraie (plantation de peupliers) dans une zone humide modifie profondément son fonctionnement écologique. Les peupliers, en raison de leur forte capacité d’absorption de l’eau, entraînent un assèchement progressif des sols, réduisant ainsi la disponibilité en eau pour la flore et la faune locales.\n" +
                "\n" +
                "De plus, la plantation en ligne et l’entretien des peupleraies nécessitent souvent un drainage, qui altère la capacité naturelle de la zone humide à stocker et filtrer l’eau. La biodiversité spécifique de ces milieux est alors menacée, car l’ombrage dense des peupliers limite le développement de la végétation herbacée typique, réduisant ainsi les habitats et les ressources pour de nombreuses espèces.\n" +
                "\n" +
                "Enfin, l’exploitation des peupleraies implique souvent des interventions mécaniques (labour, fertilisation, traitements phytosanitaires) qui peuvent accentuer la pollution des sols et de l’eau, fragilisant davantage cet écosystème précieux.\n" +
                "\n" +
                "En résumé, bien que les peupleraies puissent être une ressource économique, leur implantation dans une zone humide doit être soigneusement évaluée afin de préserver les fonctions écologiques essentielles de ces milieux naturels.",
    },
    {
        milieu: "naturel",
        label: "Travaux reconnexion bras morts",
        x: 47,
        y: 54,
        active: true,
        imageInactive: "naturel/zone_humide.png",
        imageActive: "naturel/rattachement-bras-morts.png",
        effects: {
            infiltration: {
                modifier: +1
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "Les travaux de reconnexion des bras morts (réouverture d'anciens méandres ou bras de rivière) offrent de nombreux avantages pour l'eau et la biodiversité. En ralentissant le flux de l'eau, ces zones permettent de réduire le ruissellement et l’érosion des berges tout en améliorant la qualité de l’eau. Elles agissent comme des filtres naturels, capturant les polluants et les sédiments avant qu'ils n'atteignent le cours principal de la rivière.\n" +
                "Ces zones d’eau stagnante favorisent également l’infiltration de l’eau dans le sol, aidant à recharger les nappes phréatiques et réduisant le risque d’inondations en offrant un espace de stockage pour l’eau en période de crue.\n" +
                "En plus de ces bienfaits pour l’eau, les bras morts restaurent des habitats précieux pour la faune et la flore. Ils servent de refuges pour de nombreuses espèces aquatiques et terrestres, soutenant ainsi la biodiversité locale.\n" +
                "En somme, la reconnexion des bras morts est une mesure efficace pour améliorer la gestion de l’eau, limiter les inondations et préserver la biodiversité des milieux aquatiques. ",
    },
    {
        milieu: "naturel",
        label: "Reméandrement de la rivière et effacement des ouvrages",
        x: 8,
        y: 58,
        active: true,
        imageInactive: "naturel/riviere-classique.png",
        imageActive: "naturel/riviere-remeandree.png",
        effects: {
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "Le reméandrement des rivières et l’effacement des ouvrages permettent de restaurer le fonctionnement naturel des cours d’eau, avec de nombreux bénéfices pour l’eau et la biodiversité. En ralentissant le débit et en diversifiant les habitats, ces actions réduisent l’érosion et améliorent l’infiltration, favorisant ainsi la recharge des nappes phréatiques. Elles contribuent également à limiter l’évaporation en rétablissant des zones ombragées et en évitant la stagnation de l’eau.\n" +
                "La suppression des obstacles artificiels améliore la qualité de l’eau en favorisant son oxygénation et en réduisant la pollution par sédiments et nutriments. Elle diminue aussi le risque d’inondations en offrant aux rivières des espaces naturels pour absorber les crues.\n" +
                "Enfin, ces restaurations redonnent aux milieux aquatiques leur richesse écologique, permettant le retour de nombreuses espèces, notamment les poissons migrateurs et la faune des zones humides. En restaurant les rivières à leur état naturel, on renforce leur résilience face aux changements climatiques et on préserve durablement les écosystèmes. "
    },
    {
        milieu: "naturel",
        label: "Maintien de la ripisylve",
        x: 18,
        y: 45,
        active: true,
        imageActive: "naturel/ripisylve.png",
        effects: {
            evaporation: {
                modifier: -1
            },
            infiltration: {
                modifier: +1
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "Le maintien de la ripisylve et la protection des berges jouent un rôle essentiel dans la gestion de l’eau et la préservation de la biodiversité. En stabilisant les sols avec leurs racines, les arbres et arbustes des berges réduisent l’érosion et le ruissellement, limitant ainsi l’apport de sédiments et de polluants dans les cours d’eau. Cette végétation filtre naturellement l’eau, améliorant sa qualité tout en favorisant son infiltration, ce qui aide à recharger les nappes phréatiques.\n" +
                "En offrant de l’ombre, la ripisylve limite l’évaporation et maintient une température stable dans les rivières, essentielle à la vie aquatique. De plus, en ralentissant l’écoulement de l’eau lors des fortes pluies, elle atténue les risques d’inondations. Enfin, elle constitue un refuge précieux pour de nombreuses espèces animales et végétales, renforçant la biodiversité locale.\n" +
                "Protéger les berges et leur végétation naturelle, c’est préserver l’équilibre des écosystèmes tout en garantissant une ressource en eau de qualité.\n" +
                "Il est possible d'aménager des passages à gué pour permettre aux animaux de rejoindre l'autre rive et ainsi éviter le piétinement. Des aménagements sont également possible pour l'abreuvement du bétail (ex pompe à nez). "
    },
    {
        milieu: "naturel",
        label: "Mono culture de sapins",
        x: 72,
        y: 27,
        active: false,
        imageActive: "naturel/sapins.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: -1
            },
            qualiteEau: {
                modifier: -1
            },
            ruissellement: {
                modifier: +1
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: -1
            }
        },
        description: "Les plantations de résineux (comme les pins et épicéas) ont divers effets sur l’environnement. Ces arbres peuvent augmenter l’évaporation de l’eau en raison de leur feuillage dense, tout en réduisant l'humidité du sol. De plus, le sol sous ces arbres est souvent moins perméable, ce qui peut entraîner un ruissellement plus important, notamment lors de fortes pluies. Les résineux peuvent aussi acidifier le sol et l’eau, ce qui perturbe les écosystèmes aquatiques en aval. Leurs racines superficielles limitent la capacité du sol à absorber l’eau, accélérant ainsi l’écoulement. Ce phénomène, combiné à un faible taux d’infiltration, peut augmenter le risque d'inondation en période de fortes précipitations. Enfin, la monoculture de résineux, composée généralement d’une seule espèce, offre une diversité végétale et animale plus faible, ce qui impacte négativement la biodiversité locale.\n" +
                "\n" +
                "En somme, bien que les plantations de résineux présentent des avantages pour la production de bois, elles peuvent avoir des conséquences néfastes sur l’eau, les inondations et la biodiversité. Il est crucial de les gérer correctement pour limiter ces impacts. Par ailleurs, l’utilisation d’intrants chimiques comme des insecticides, fongicides et désherbants pour optimiser ces monocultures a également des effets nuisibles sur la qualité de l’eau et les écosystèmes. Enfin, la coupe à blanc peut provoquer l’érosion des sols et perturber le cycle naturel des sols en apportant excessivement de matière organique et azotée lors des récoltes",
    },
    // {
    //     milieu: "naturel",
    //     label: "Forêt de feuillus",
    //     x: 11,
    //     y: 50,
    //     active: true,
    //     effects: {
    //         infiltration: {
    //             modifier: +1
    //         },
    //         qualiteEau: {
    //             modifier: +1
    //         },
    //         ruissellement: {
    //             modifier: -1
    //         },
    //         reseauEau: {
    //             modifier: -1
    //         },
    //         biodiversite: {
    //             modifier: +1
    //         }
    //     },
    //     description: "Une forêt diversifiée de feuillus joue un rôle essentiel dans la gestion de l’eau et la préservation de la biodiversité. Grâce à ses arbres aux racines profondes et à son sol riche en matière organique, elle favorise une meilleure infiltration de l’eau, limitant ainsi le ruissellement et l’érosion. Contrairement aux résineux, elle ne rend pas les sols acides et contribue à la filtration naturelle de l’eau, améliorant ainsi sa qualité.\n" +
    //             "En ralentissant l’écoulement de l’eau vers les rivières, ces forêts atténuent les risques d’inondation et permettent une meilleure recharge des nappes phréatiques, notamment en hiver lorsque les feuillus/arbres perdent leurs feuilles et réduisent l’évapotranspiration.\n" +
    //             "En plus de ces bénéfices hydriques, elles offrent un habitat diversifié pour la faune et la flore, favorisant une grande biodiversité et rendant l’écosystème plus résilient face aux maladies et aux changements climatiques.\n" +
    //             "Ainsi, les forêts de feuillus ne sont pas seulement bénéfiques pour la production de bois, mais elles sont aussi précieuses pour la régulation de l’eau et la préservation de la nature."
    // },
    {
        milieu: "naturel",
        label: "Coupe rase",
        x: 83,
        y: 55,
        active: false,
        imageInactive: "naturel/foret-1.png",
        imageActive: "naturel/coupe-rase.png",
        effects: {
            evaporation: {
                modifier: +1
            },
            infiltration: {
                modifier: -1
            },
            qualiteEau: {
                modifier: -1
            },
            ruissellement: {
                modifier: +1
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: -1
            }
        },
        description: "La coupe rase forestière a de lourdes conséquences sur l’eau et la biodiversité. En supprimant la couverture végétale, elle accélère l’évaporation et assèche les sols. L’absence de racines favorise le ruissellement et l’érosion, entraînant une dégradation de la qualité de l’eau par l’apport de sédiments et de nutriments dans les rivières. De plus, la réduction de l’infiltration limite la recharge des nappes phréatiques et accentue le risque d’inondations en cas de fortes pluies.\n" +
                "Sur le plan écologique, la destruction soudaine des habitats entraîne une forte perte de biodiversité. De nombreuses espèces animales et végétales disparaissent ou peinent à se réinstaller, perturbant l’équilibre naturel.\n" +
                "Face à ces impacts, il est essentiel de privilégier des pratiques forestières durables, comme la coupe sélective ou la gestion en futaie irrégulière, afin de préserver les ressources en eau et la richesse des écosystèmes."
    },
];

const amenagements = [...urbain, ...agricole, ...naturel];

