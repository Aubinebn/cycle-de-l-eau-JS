const effects = {
    'progress' :
    {
        infiltration: {
            label: 'Infiltration',
            default: {
                'urbain' : 1,
                'agricole' : 2.5,
                'naturel' : 4
            },
            modifiers: {
                cold: {
                    rain_none: 0,
                    rain_low: .5,
                    rain_high: 1
                },
                hot: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 0.1
                },
            }
        }
        ,
        evaporation: {
            label: 'Évaporation',
            default: {
                'urbain' : 1,
                'agricole' : 2.5,
                'naturel' : 4
            },
            modifiers: {
                cold: {
                    rain_none: 0,
                    rain_low: 0,
                    rain_high: 0
                },
                hot: {
                    rain_none: 0.25,
                    rain_low: 0.5,
                    rain_high: 1
                },
            }
        }
        ,
        ruissellement: {
            label: 'Ruissellement',
            default: {
                'urbain' : 5,
                'agricole' : 3.5,
                'naturel' : 1
            },
            modifiers: {
                cold: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 1
                },
                hot: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 1
                },
            }
        }
    },
    'score':
    {
        qualiteEau: {
            label: 'Qualité de l\'eau',
            default: {
                'urbain' : 5,
                'agricole' : 1,
                'naturel' : 3
            },
        }
        ,
        biodiversite: {
            label: 'Biodiversité',
            default: {
                'urbain' : 1,
                'agricole' : 2,
                'naturel' : 5
            },
        }
        ,
        reseauEau: {
            label: 'Réseau d\'eau',
            ficheLabel: 'Disponibilité du réseau d\'eau',
            default: {
                'urbain' : 2.5,
                'agricole' : 0,
                'naturel' : 0
            },
            modifiers: {
                cold: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 1
                },
                hot: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 1
                },
            }
        }
    }
};

//-- tableau contenant tous les effets indifférenciés, pour pouvoir chercher un effet par nom
const allEffects = {};

for (var effectName in effects.progress)
    allEffects[effectName] = effects.progress[effectName];
for (var effectName in effects.score)
    allEffects[effectName] = effects.score[effectName];