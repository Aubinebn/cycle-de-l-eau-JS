const weatherCombination = [
        {
                milieu: 'urbain',
                cold: {
                    none: "",
                    low: "<p>Possibilité d'infiltration à la parcelle</p><p>Bonne collecte par les réseaux d'eau pluviale</p><p>Pas de débordement</p>",
                    high: "<p>Risque d'engorgement des réseaux d'eau pluviale</p><p>Risque d'inondation</p>"
                },
                hot: {
                    none: "",
                    low: "Évaporation importante",
                    high: "<p>Évaporation importante</p>" +
                            "<p>d'engorgement des réseaux d'eau pluviale</p>" +
                            "<p>Risque d'inondation</p>" +
                            "<p>Difficulté d'infiltration à parcelle si sol sec</p>"
                }
        },
        {
                milieu: 'agricole',
                cold: {
                    none: "",
                    low: "<p>Infiltration</p>" +
                            "<p>Recharge des nappes</p>",
                    high: "<p>Ruissellement</p>" +
                            "<p>Infiltration</p>" +
                            "<p>Recharge des nappes</p>"
                },
                hot: {
                    none: "",
                    low: "<p>Interception Absorption de l'eau par les plantes</p>" +
                            "<p>Évapotranspiration importante</p>" +
                            "<p>Pas de Recharge des nappes</p>",
                    high: "<p>Évapotranspiration importante</p>" +
                            "<p>Pas de recharge des nappes</p>" +
                            "<p>Ruissellement</p>" +
                            "<p>Risque de glissement de terrain ou coulée de boue si les sols sont nus</p>"
                }
        },
        {
                milieu: 'naturel',
                cold: {
                    none: "",
                    low: "<p>Infiltration</p>" +
                            "<p>Recharge des nappes</p>",
                    high: "<p>Infiltration</p>" +
                            "<p>Recharge des nappes</p>" +
                            "<p>Ruissellement</p>"
                },
                hot: {
                    none: "",
                    low: "<p>Interception Absorption de l'eau par les plantes</p>" +
                            "<p>Évapotranspiration importante</p>" +
                            "<p>Infiltration / Recharge des nappes moindre</p>",
                    high: "<p>Évapotranspiration importante</p>" +
                            "<p>Pas de recharge des nappes</p>" +
                            "<p>Ruissellement</p>"
                }
        }
]
