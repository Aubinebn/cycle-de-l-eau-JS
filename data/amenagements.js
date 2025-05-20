const urbain = [
    {
        milieu: "urbain",
        label: "Parcs",
        x: 31,
        y: 49,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/parc.png",
            x: 234,
            y: 781
        },
        imageFocus: {
            path: "amenagements/urbain-cropped/parc-focus.png",
            x: 234,
            y: 781
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 951,
                    y: 937
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 396,
                    y: 1162
                }
            },
            ruissellement: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "<p>En ville, les parcs végétalisés permettent de créer une zone perméable (qui laisse traverser l'eau) ce qui permet de laisser l'eau intégrer le sol et remplir les nappes phréatiques.</p><p>De plus ces espaces sont des refuges pour la biodiversité qui peine à trouver sa place en ville.</p>",
    },
    {
        milieu: "urbain",
        label: "Densification urbaine",
        x: 20,
        y: 30,
        positionFiche: 'right',
        active: false,
        imageInactive: {
            path: "amenagements/urbain-cropped/colline-ville.png",
            x: 0,
            y: 502
        },
        imageActive: {
            path: "amenagements/urbain-cropped/immeubles.png",
            x: 133,
            y: 290
        },
        effects: {
            infiltration: {
                modifier: +1,
            },
            ruissellement: {
                modifier: +1,
                indicator: {
                    image: 'img/indicators/ruissellements-cropped/ruissellement-immeubles.png',
                    x: 210,
                    y: 616
                }
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: +1
            },
        },
        description: "<p>L'augmentation du nombre de construction, la densification de l'habitat impactent le milieu naturel en empêchant les eaux de pluie de s'infiltrer et en créant des îlots de chaleur. Lorsque l'on urbanise fortement et que l'espace ne permet pas d'infiltrer les eaux de pluie à la parcelle, celles-ci sont collectés par des réseaux. Elles sont acheminées à la station d'épuration si le réseau est unitaire ou directement vers le milieu naturel si le réseau est séparatif. </p>" +
            "<p>Lors de forts épisodes pluvieux, les réseaux peuvent être saturés et créer des débordements sur la chaussée. La collecte des eaux pluviales par les réseaux accélère le transport de l'eau vers un même exutoire, ce qui contribue à augmenter le débit des cours d'eau et créer des inondations.</p>",
    },
    {
        milieu: "urbain",
        label: "Noues d'infiltration",
        x: 39,
        y: 46,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/noue.png",
            x: 986,
            y: 861
        },
        effects: {
            evaporation: {
                modifier: -1
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 951,
                    y: 1371
                }
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
            },
        },
        description: "<p>Les noues et fossés d'infiltration facilitent la régulation des inondations et des macro-polluants. Ils peuvent également constituer un bon support de sensibilisation à la gestion des eaux pluviales, notamment dans les zones urbaines.</p>",
    },
    {
        milieu: "urbain",
        label: "Infiltration à la parcelle",
        x: 84,
        y: 64,
        positionFiche: 'top',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/infiltration-parcelle.png",
            x: 2927,
            y: 1357
        },
        effects: {
            evaporation: {
                modifier: -1
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 3015,
                    y: 1527
                }
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
                modifier: -1
            },
        },
        description: "<p>L'infiltration des eaux pluviales à la parcelle consiste à créer des aménagements permettant l'infiltration sur place de l'eau de pluie et donc une restitution au milieu naturel ou le stockage temporaire des eaux pluviales pour ainsi maitriser le déversement dans les réseaux d'assainissement collectif.</p>",
    },
    {
        milieu: "urbain",
        label: "Séparation Eaux usées / Eaux pluviales",
        x: 70,
        y: 73,
        positionFiche: 'top',
        active: false,
        imageInactive: {
            path: "amenagements/urbain-cropped/reseau-commun.png",
            x: 2162,
            y: 1034
        },
        imageActive: {
            path: "amenagements/urbain-cropped/reseau-separatif-v2.png",
            x: 2011,
            y: 1034
        },
        effects: {
            qualiteEau: {
                modifier: +1
            },
        },
        description: "<p>La séparation des eaux usées et des eaux pluviales permet de limiter l'engorgement des réseaux d'assainissement et d'éviter les débordements avec rejet au milieu naturel.</p>",
    },
    {
        milieu: "urbain",
        label: "Stockage des eaux de pluies",
        x: 78,
        y: 61,
        positionFiche: 'top',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/cuve-eau.png",
            x: 2623,
            y: 903
        },
        effects: {
            ruissellement: {
                modifier: -1
            },
            reseauEau: {
                modifier: -1
            },
        },
        description: "<p>Le stockage des eaux pluviales permet en période de sécheresse d'utiliser cette eau en substitution de l'eau potable. Cela réduit l'impact sur la ressource en eau potable lorsque la ressource est déjà en tension.</p>",
    },
    {
        milieu: "urbain",
        label: "Bassin de rétention des eaux pluviales",
        x: 59,
        y: 48,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/bassin-retention.png",
            x: 2017,
            y: 991
        },
        effects: {
            ruissellement: {
                modifier: -1,
                indicator: {
                    inactiveIndicator: true,
                    image: 'img/indicators/ruissellements-cropped/ruissellement-bassin-retention.png',
                    x: 2076,
                    y: 1062
                }
            },
            reseauEau: {
                modifier: -1
            },
        },
        description: "<p>Un bassin de rétention des eaux pluviales, aussi appelé bassin tampon, est une infrastructure essentielle dans la gestion des eaux pluviales, surtout pour les terrains soumis à un urbanisme croissant. Il sert à recueillir temporairement les excédents d'eau de pluie, évitant ainsi les inondations et la surcharge des réseaux d'assainissement.</p>",
    },
    {
        milieu: "urbain",
        label: "Parking infiltrant",
        x: 48,
        y: 58,
        positionFiche: 'top',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/parking-infiltrant.png",
            x: 1325,
            y: 1152
        },
        effects: {
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 1443,
                    y: 1447
                }
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1,
                indicator: {
                    inactiveIndicator: true,
                    image: 'img/indicators/ruissellements-cropped/ruissellement-parking.png',
                    x: 1667,
                    y: 1112
                }
            },
            reseauEau: {
                modifier: -1,
            },
        },
        description: "<p>Le parking perméable permet l'infiltration des eaux pluviales, évite un maximum le ruissellement de surface et désengorge le réseau d'assainissement. Le parking perméable végétalisé améliore le climat urbain et diminue l'effet îlot de chaleur en ville.</p>" +
            "<p>Le parking perméable est aussi un atout pour capter les polluants (dont les hydrocarbures). Enfin il améliore le développement de la biodiversité en ville, s'il remplace un parking à l'origine complètement imperméable.</p>",
    },
    {
        milieu: "urbain",
        label: "Végétalisation",
        x: 35,
        y: 60,
        positionFiche: 'top',
        active: false,
        imageActive: {
            path: "amenagements/urbain-cropped/parking-vegetalise.png",
            x: 1121,
            y: 844
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 1950,
                    y: 1050
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 1718,
                    y: 1440
                }
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
            },
        },
        description: "</p>La désimperméabilisation concourt à l'adaptation au changement climatique par :</p>" +
            "<p>- la réduction du risque inondation en limitant le ruissellement sur les surfaces imperméabilisées,</p>" +
            "<p>- la préservation des ressources naturelles (eau et sol), en limitant l'accumulation de contaminants dans les eaux de pluies et dans les milieux récepteurs, en réduisant les débordements de réseaux d'assainissement par temps de pluie dans les milieux aquatiques, en permettant la recharge des nappes phréatiques, en redonnant vie aux sols;</p>" +
            "<p>- la réintroduction de la nature en ville : certaines techniques vertes vont dans le sens de la végétalisation de la ville.</p>",
    },
];

const agricole = [
    {
        milieu: "agricole",
        label: "Diversité culturale",
        x: 35.8,
        y: 34.8,
        active: false,
        positionFiche: 'right middle',
        imageActive: {
            path: "amenagements/agricole-cropped/diversite-cultures.png",
            x: 3842,
            y: 587
        },
        imageInactive: {
            path: "amenagements/agricole-cropped/monoculture.png",
            x: 3868,
            y: 601
        },
        effects: {
            evaporation: {
                modifier: -1,
                indicator: {
                    inactiveIndicator: true,
                    x: 4470,
                    y: 601
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 4198,
                    y: 1225
                }
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
        description: "<p>Qu’elle soit pratiquée à l’échelle du paysage, des cultures ou des variétés, la diversité en agriculture est une solution efficace et naturelle.</p><p>Elle améliore la résilience face aux aléas climatiques, limite les ravageurs, réduit le besoin en produits chimiques et favorise une meilleure gestion des ressources comme l’eau et les sols.</p><p>En associant différentes cultures ou en intégrant des arbres (agroforesterie), on tire parti des complémentarités naturelles, tout en diminuant l’impact environnemental.</p>",
    },
    {
        milieu: "agricole",
        label: "Labour superficiel",
        x: 40,
        y: 48,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/agricole-cropped/labour-superficiel-V2.png",
            x: 4499,
            y: 842
        },
        imageInactive: {
            path: "amenagements/agricole-cropped/labour-classique-V2.png",
            x: 4492,
            y: 838
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 5098,
                    y: 838
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 4998,
                    y: 1237
                }
            },
            ruissellement: {
                modifier: -1,
                indicator: {
                    inactiveIndicator: true,
                    image: 'img/indicators/ruissellements-cropped/ruissellements-labour.png',
                    x: 4604,
                    y: 865,
                }
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "<p>Le labour superficiel des sols, les cultures de semis sous couvert, ainsi que le sens du labour perpendiculaire au sens de la pente sont autant de techniques pour limiter l'érosion des sols et le ruissellement. Ces techniques doivent être favorisées pour infiltrer l'eau dans les sols.</p>",
    },
    {
        milieu: "agricole",
        label: "Irrigation",
        x: 13,
        y: 54,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/agricole-cropped/irrigation.png",
            x: 4065,
            y: 883
        },
        effects: {
            // infiltration: {
                // modifier: +1,
                // indicator: {
                    // x: 6915,
                    // y: 1380
                // }
            // },
            // qualiteEau: {
                // modifier: +1
            // },
            // ruissellement: {
                // modifier: -1,
                // indicator: {
                    // inactiveIndicator: true,
                    // image: 'img/indicators/ruissellements-cropped/ruissellement-elevageclassique.png',
                    // x: 6447,
                    // y: 928
                // }
            // },
            // reseauEau: {
                // modifier: -1
            // },
            // biodiversite: {
                // modifier: +1
            // }
        },
        description: "<p>Certaines cultures sont gourmandes en eau. En fonction des conditions climatiques elles peuvent nécessiter une irrigation.</p><p>Des puits sont installés dans les parcelles agricoles pour pomper dans la nappe phréatique l'eau nécessaire. Les quantités prélevées sont réglementées (volumes maximum, période de prélévement définie).</p><p>Un puit est un forage équipée de crépine qui permet de capter la nappe. A l'aide d'une pompe l'eau est relevée jusqu'au niveau du terrain naturel pour irriguer les cultures.</p>",
    },
    {
        milieu: "agricole",
        label: "Pâturage extensif",
        x: 80,
        y: 44,
        positionFiche: 'left',
        active: false,
        imageActive: {
            path: "amenagements/agricole-cropped/elevage-extensif-barrieres.png",
            x: 6243,
            y: 512
        },
        imageInactive: {
            path: "amenagements/agricole-cropped/elevage-classique-barriere.png",
            x: 6295,
            y: 826
        },
        effects: {
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 6915,
                    y: 1380
                }
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -1,
                indicator: {
                    inactiveIndicator: true,
                    image: 'img/indicators/ruissellements-cropped/ruissellement-elevageclassique.png',
                    x: 6447,
                    y: 928
                }
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "<p>Le chargement moins important à l'hectare évite le compactage des sols et permet l'infiltration.</p><p>Il permet également une pression limitée sur la prairie.</p>",
    },
    {
        milieu: "agricole",
        label: "Mise en défend des berges",
        x: 93.8,
        y: 39,
        positionFiche: 'left middle',
        active: false,
        imageActive: {
            path: "amenagements/agricole-cropped/mise-en-defend.png",
            x: 7323,
            y: 801
        },
        imageInactive: {
            path: "amenagements/agricole-cropped/mise-en-defend-inactive.png",
            x: 7305,
            y: 827
        },
        effects: {
            qualiteEau: {
                modifier: +5
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "<p>La mise en défend des berges permet de limiter l'érosion des berges de cours d'eau et limiter son piétinement. Cela préserve la qualité de l'eau.</p><p>Plusieurs techniques existent pour permettre l'abreuvement du bétail dans ces conditions : passage à gué, pompe à nez, aménagement de mare.</p>",
    },
    {
        milieu: "agricole",
        label: "Haies",
        x: 23.5,
        y: 40,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/agricole-cropped/haies.png",
            x: 3836,
            y: 563
        },
        effects: {
            infiltration: {
                modifier: +1,
            },
            qualiteEau: {
                modifier: +1
            },
            ruissellement: {
                modifier: -2
            },
            reseauEau: {
                modifier: -1
            },
            biodiversite: {
                modifier: +1
            }
        },
        description: "<p>Tout végétal transpire et donc relargue de l'eau dans l'athmosphère.</p><p>En fonction des espèces, la haie va donc dans un sens favoriser l'évaporation de l'eau des végétaux dans l'atmosphère et contribuer au cycle hydrologique.</p><p>A contrario, le fait qu'elle transpire couplé à l'ombrage portée va diminuer la température et le rayonnement au niveau du sol, et de ce fait, diminuer l'évaporation.</p>",
    },
];

const naturel = [
    {
        milieu: "naturel",
        label: "Travaux de reconnexion de bras morts",
        x: 29,
        y: 52,
        positionFiche: 'top',
        active: false,
        imageActive: {
            path: "amenagements/naturel-cropped/rattachement-bras-mort.png",
            x: 8208,
            y: 996
        },
        imageInactive: {
            path: "amenagements/naturel-cropped/bras-mort.png",
            x: 8291,
            y: 1075
        },
        effects: {
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 8584,
                    y: 1351
                }
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
        description: "<p>La reconnexion des anciens méandres ou bras morts des rivières permet de ralentir le flux de l’eau, limitant l’érosion et filtrant naturellement les polluants.</p><p>Ces zones favorisent l’infiltration de l’eau dans le sol, réduisent les risques d’inondation et rechargent les nappes phréatiques.</p><p>Elles offrent aussi des habitats essentiels pour de nombreuses espèces, renforçant ainsi la biodiversité.</p><p>Une solution naturelle, efficace et durable pour mieux gérer l’eau et protéger les écosystèmes.</p>",
    },
    {
        milieu: "naturel",
        label: "Reméandrement de la rivière et effacement des ouvrages",
        x: 23.7,
        y: 34,
        positionFiche: 'right middle',
        active: false,
        imageInactive: {
            path: "amenagements/naturel-cropped/riviere-classique-v2.png",
            x: 7731,
            y: 731
        },
        imageActive: {
            path: "amenagements/naturel-cropped/riviere-remeandree-v2.png",
            x: 7731,
            y: 733
        },
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
        description: "<p>Restaurer les cours d’eau en recréant leurs méandres naturels et en supprimant les obstacles artificiels améliore la qualité de l’eau, réduit l’érosion et facilite la recharge des nappes.</p><p>Ces actions renforcent l’oxygénation, limitent les inondations et créent des habitats propices à la biodiversité, notamment pour les poissons migrateurs.</p><p>En rendant les rivières plus naturelles, on les aide à mieux faire face aux effets du changement climatique.</p>"
    },
    {
        milieu: "naturel",
        label: "Maintien de la ripisylve",
        x: 18,
        y: 45,
        positionFiche: 'right middle',
        active: false,
        imageActive: {
            path: "amenagements/naturel-cropped/ripisylve.png",
            x: 7562,
            y: 840
        },
        effects: {
            evaporation: {
                modifier: -1,
                indicator: {
                    invalidIndicator: true,
                    x: 8072,
                    y: 765
                }
            },
            infiltration: {
                modifier: +1,
                indicator: {
                    x: 7684,
                    y: 1376
                }
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
        description: "<p>La végétation des berges (ripisylve) joue un rôle clé pour la qualité de l’eau et la biodiversité.</p><p>Elle stabilise les sols, filtre les polluants, limite l’évaporation et favorise l’infiltration, contribuant à la recharge des nappes et à la prévention des inondations.</p><p>En créant de l’ombre et des refuges, elle protège la vie aquatique et renforce la diversité des espèces.</p>"
    },
    {
        milieu: "naturel",
        label: "Monoculture de sapins",
        x: 72,
        y: 27,
        positionFiche: 'right',
        active: false,
        imageActive: {
            path: "amenagements/naturel-cropped/sapins.png",
            x: 9970,
            y: 438
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 10227,
                    y: 360
                }
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
        description: "<p>Les plantations de résineux (comme les pins ou les épicéas), souvent organisées en monocultures, peuvent avoir des effets importants sur les milieux naturels.</p><p>Leur feuillage dense augmente l’évaporation et réduit l’humidité des sols, tandis que leurs racines superficielles limitent l’infiltration de l’eau. Cela favorise le ruissellement et peut accentuer le risque d’inondations.</p><p>En acidifiant les sols et l’eau, ces plantations perturbent les écosystèmes aquatiques en aval.</p><p>La faible diversité végétale et animale dans ces forêts appauvrit la biodiversité locale.</p><p>De plus, l’usage d’intrants chimiques (pesticides, désherbants) et les pratiques comme la coupe à blanc accentuent l’érosion des sols et la pollution de l’eau.</p><p>Pour limiter ces impacts, une gestion plus écologique et diversifiée des plantations est essentielle.</p>",
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
        positionFiche: 'top',
        active: false,
        imageInactive: {
            path: "amenagements/naturel-cropped/foret-1.png",
            x: 10340,
            y: 578
        },
        imageActive: {
            path: "amenagements/naturel-cropped/coupe-rase.png",
            x: 10340,
            y: 989
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 10950,
                    y: 579
                }
            },
            infiltration: {
                modifier: -1,
                indicator: {
                    invalidIndicator: true,
                    x: 11150,
                    y: 1223
                }
            },
            qualiteEau: {
                modifier: -1
            },
            ruissellement: {
                modifier: +3,
                indicator: {
                    image: 'img/indicators/ruissellements-cropped/ruissellement-couperase.png',
                    x: 10698,
                    y: 1003,
                }
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: -1
            }
        },
        description: "<p>La coupe rase supprime brutalement la couverture végétale, ce qui accélère l’évaporation, assèche les sols et favorise le ruissellement.</p><p>Cela entraîne l’érosion et une dégradation de la qualité de l’eau, avec des sédiments et nutriments en excès dans les rivières.</p><p>L’infiltration est réduite, limitant la recharge des nappes phréatiques et augmentant le risque d’inondations.</p><p>Sur le plan écologique, cette pratique détruit les habitats et provoque un effondrement de la biodiversité locale.</p><p>Pour limiter ces effets, des alternatives durables comme la coupe sélective ou la gestion en futaie irrégulière permettent de préserver l’équilibre des écosystèmes et des ressources en eau.</p>"
    },
    {
        milieu: "naturel",
        label: "Plantation d'une peupleraie",
        x: 59,
        y: 45,
        active: false,
        positionFiche: 'right middle',
        imageActive: {
            path: "amenagements/naturel-cropped/peupliers.png",
            x: 9342,
            y: 641
        },
        imageInactive: {
            path: "amenagements/naturel-cropped/zone_humide.png",
            x: 9202,
            y: 770
        },
        effects: {
            evaporation: {
                modifier: +1,
                indicator: {
                    x: 9737,
                    y: 559
                }
            },
            infiltration: {
                modifier: -1
            },
            qualiteEau: {
                modifier: -1
            },
            ruissellement: {
                modifier: +1,
            },
            reseauEau: {
                modifier: +1
            },
            biodiversite: {
                modifier: -1
            }
        },
        description: "<p>L’implantation d’une peupleraie (plantation de peupliers) dans une zone humide modifie profondément son fonctionnement écologique.</p><p>Les peupliers, en raison de leur forte capacité d’absorption de l’eau, entraînent un assèchement progressif des sols, réduisant ainsi la disponibilité en eau pour la flore et la faune locales.</p><p>De plus, la plantation en ligne et l’entretien des peupleraies nécessitent souvent un drainage, qui altère la capacité naturelle de la zone humide à stocker et filtrer l’eau.</p><p>La biodiversité spécifique de ces milieux est alors menacée, car l’ombrage dense des peupliers limite le développement de la végétation herbacée typique, réduisant ainsi les habitats et les ressources pour de nombreuses espèces.</p><p>Enfin, l’exploitation des peupleraies implique souvent des interventions mécaniques (labour, fertilisation, traitements phytosanitaires) qui peuvent accentuer la pollution des sols et de l’eau, fragilisant davantage cet écosystème précieux.</p>"
    }
];

const amenagements = [...urbain, ...agricole, ...naturel];

