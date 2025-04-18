const politiquesGestion = [
        {
                isPolitiqueGestion: true,
                milieu: "urbain",
                label: "Zonage pluvial",
                x: 38,
                y: 15,
                active: false,
                effects: {
                        evaporation: {
                                modifier: -1,
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
                        }
                },
                description: "Le zonage pluvial est l'outil technique et juridique, constitué d'un document cartographique et d'un réglement. Il permet d'identifier comment favoriser l'infiltration à la parcelle et de réduire les conséquences des eaux de ruissellement. Les objectifs de la gestion des eaux pluviales sont nombreux : la préservation de la ressource en eau, la protection des milieux aquatiques par la maîtreise des flux de pollution et la prévention des risques inondations par ruissellement.",
        },
        {
                isPolitiqueGestion: true,
                milieu: "naturel",
                label: "Gestion écologique maintien du milieu ouvert",
                x: 33,
                y: 15,
                active: false,
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
                description: "Le maintien de zones humides en bon état favorise leur rôle naturel d’éponge, permettant d’absorber l’eau en excès durant l’hiver ou en période de crue, puis de la restituer, épurée, lorsque l’eau se fait plus rare. La prairie humide constitue une forme particulière de zone humide qui peut être préservée grâce à une agriculture raisonnée. Un pâturage bien géré contribue à l’entretien de ces milieux et renforce les nombreux services qu’ils rendent.\n" +
                        "\n" +
                        "Les zones humides agricoles offrent en effet des bénéfices écologiques et économiques gratuits. Leur position, souvent en fond de vallée ou en cuvette, les rend particulièrement sensibles au ruissellement et au lessivage des sols (phosphates, nitrates, etc.). De plus, leurs sols fragiles, à faible portance, compliquent leur exploitation. Pour limiter ces risques et optimiser leur usage, plusieurs pratiques peuvent être mises en place, comme le maintien d’un couvert végétal permanent, une gestion pastorale extensive ou encore une fauche tardive.\n" +
                        "\n" +
                        "Parmi les services qu’elles rendent, les zones humides agricoles :\n" +
                        "\n" +
                        "- fournissent une ressource fourragère plus tardive en période de sécheresse ;\n" +
                        "- assurent une source d’eau pour le bétail ;\n" +
                        "- régulent les crues et réduisent la force du courant ;\n" +
                        "- favorisent l’infiltration de l’eau vers les nappes phréatiques ;\n" +
                        "- améliorent la qualité de l’eau en absorbant jusqu’à 18 % de l’azote terrestre grâce à la végétation ;\n" +
                        "- capturent 30 % du carbone terrestre dans les sols via la photosynthèse ;\n" +
                        "- constituent un habitat essentiel pour une biodiversité spécifique.",
        },
        {
                isPolitiqueGestion: true,
                milieu: "naturel",
                label: "Plan Territoriaux de Gestion des Eaux",
                x: 66,
                y: 15,
                active: false,
                effects: {
                        evaporation: {
                                modifier: +1,
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
                description: "Un Plan Territorial de Gestion des Eaux (PTGE) est un outil qui permet de mieux gérer l’eau à l’échelle d’un territoire. Il rassemble les acteurs locaux (élus, agriculteurs, industries, associations…) pour trouver un équilibre entre les différents usages de l’eau (agriculture, consommation, environnement…). Son objectif est d’assurer une gestion durable de la ressource en eau, en prévenant les pénuries, les pollutions et les conflits d’usage, tout en protégeant les écosystèmes aquatiques.",
        }
];