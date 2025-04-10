/*
    {
        milieu: "urbain",
        label: "Parcs",
        x: 20,
        y: 10,
        imageInactive: "nothing.png",
        imageActive: "parcs.png",
        effects: {
            evaporation: +1,
            infiltration: +1,
            qualiteEau: +1,
            ruissellement: -1,
            reseauEau: +1,
            biodiversite: +1,
        },
        description: "",
    },
 */


const amenagements = [
    {
        milieu: "urbain",
        label: "Parcs",
        x: 29,
        y: 48,
        active: true,
        imageInactive: "zone-urbaine1.png",
        imageActive: "parc+zoneurbaine.png",
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
        active: true,
        imageInactive: "nothing.png",
        imageActive: "immeubles.png",
        effects: {
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
        },
        description: "\"L'augmentation du nombre de construction, la densification de l'habitat impactent le milieu naturel en empêchant les eaux de pluie de s'infiltrer et en créant des îlots de chaleur. Lorsque l'on urbanise fortement et que l'espace ne permet pas d'infiltrer les eaux de pluie à la parcelle, celles-ci sont collectés par des réseaux. Elles sont acheminées à la station d'épuration si le réseau est unitaire ou directement vers le milieu naturel si le réseau est séparatif. \n" +
            "Lors de forts épisodes pluvieux les réseaux peuvent être saturés et créer des débordements sur la chaussée. La collecte des eaux pluviales par les réseaux accélère le transport de l'eau vers un même exutoire, ce qui contribue à augementer le débit des cours d'eau et créer des inondations.\"",
    },
    {
        milieu: "urbain",
        label: "Noues d'infiltration",
        x: 38,
        y: 45,
        active: false,
        imageInactive: "nothing.png",
        imageActive: "noue.png",
        effects: {
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
        },
        description: "Les noues et fossés d'infiltration facilitent la régulation des inondations et des macro-polluants. Ils peuvent également constituer un bon support de sensibilisation à la gestion des eaux pluviales, notamment dans les zones urbaines.",
    },
    {
        milieu: "urbain",
        label: "Infiltration à la parcelle",
        x: 82,
        y: 63,
        active: false,
        imageInactive: "nothing.png",
        imageActive: "infiltration-parcelle.png",
        effects: {
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
        },
        description: "L'infiltration des eaux pluviales à la parcelle consiste à créer des aménagements permettant l'infiltration sur place de l'eau de pluie et donc une restitution au milieu naturel ou le stockage temporaire des eaux pluviales pour ainsi maitriser le déversement dans les réseaux d'assainissement collectif.",
    },
    {
        milieu: "urbain",
        label: "Séparation Eaux usées / Eaux pluviales",
        x: 70,
        y: 73,
        active: false,
        imageInactive: "nothing.png",
        imageActive: "reseau-separatif.png",
        effects: {
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
        },
        description: "La séparation des eaux usées et des eaux pluviales permet de limiter l'engorgement des réseaux d'assainissement et d'éviter les débordements avec rejet au milieu naturel.",
    },
    {
        milieu: "urbain",
        label: "Stockage des eaux de pluies",
        x: 79.5,
        y: 59,
        active: true,
        imageInactive: "nothing.png",
        imageActive: "cuve-eau.png",
        effects: {
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
        },
        description: "Le stockage des eaux pluviales permet en période de sécheresse d'utiliser cette eau en substitution de l'eau potable. Cela réduit l'impact sur la ressource en eau potable lorsque la ressource est déjà en tension.",
    },
    {
        milieu: "urbain",
        label: "Bassin de rétention des eaux pluviales",
        x: 59,
        y: 47,
        active: false,
        imageInactive: "nothing.png",
        imageActive: "bassin-retention.png",
        effects: {
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
        },
        description: "Un bassin de rétention des eaux pluviales aussi appelé bassin tampon est une infrastructure essentielle dans la gestion des eaux pluviales, surtout pour les terrains soumis à un urbanisme croissant. Il sert à recueillir temporairement les excédents d'eau de pluie, évitant ainsi les inondations et la surcharge des réseaux d'assainissement. ",
    },
    {
        milieu: "urbain",
        label: "Parking infiltrant",
        x: 26,
        y: 11,
        active: true,
        imageInactive: "nothing.png",
        imageActive: "parking-infiltrant.png",
        effects: {
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
        },
        description: "\"Le parking perméable permet l'infiltration des eaux pluviales, évite un maximum le ruissellement de surface et désengorge le réseau d'assainissement. Le parking perméable végétalisé améliore le climat urbain et diminue l'effet îlot de chaleur en ville.\n" +
            "Le parking perméable est aussi un atout pour capter les polluants (dont les hydrocarbures). Enfin il améliore le développement de la biodiversité en ville, s'il remplace un parking à l'origine complètement imperméable.\"",
    },
    {
        milieu: "urbain",
        label: "Végétalisation",
        x: 20,
        y: 10,
        active: false,
        imageInactive: "nothing.png",
        imageActive: "parking-vegetalise.png",
        effects: {
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
        },
        description: "La désimperméabilisation concourt à l'adaptation au changement climatique par :\n" +
            "- la réduction du risque inondation en limitant le ruissellement sur les surfaces imperméabilisées,\n" +
            "- la préservation des ressources naturelles (eau et sol), en limitant l'accumulation de contaminants dans les eaux de pluies et dans les milieux récepteurs, en réduisant les débordements de réseaux d'assainissement par temps de pluie dans les milieux aquatiques, en permettant la recharge des nappes phréatiques, en redonnant vie aux sols;\n" +
            "- la réintroduction de la nature en ville : certaines techniques vertes vont dans le sens de la végétalisation de la ville.",
    },

    {
        milieu: "agricole",
        label: "Test 3",
        x: 50,
        y: 50,
        active: true,
        imageInactive: "nothing.png",
        effects: {
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
        },
        description: "",
    },

    {
        milieu: "naturel",
        label: "Test 5",
        x: 20,
        y: 70,
        active: false,
        imageInactive: "nothing.png",
        effects: {
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
        },
        description: "",
    }
];
