const effects = {
    'progress' :
    {
        infiltration: {
            label: 'Infiltration',
            default: 2.5,
            modifiers: {
                cold: {
                    rain_none: 0,
                    rain_low: .5,
                    rain_high: 1
                },
                hot: {
                    rain_none: 0,
                    rain_low: 0.5,
                    rain_high: 0
                },
            }
        }
        ,
        evaporation: {
            label: 'Évaporation',
            default: 3,
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
            default: 2.5,
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
            default: 3
        }
        ,
        biodiversite: {
            label: 'Biodiversité',
            default:  3
        }
        ,
        reseauEau: {
            label: 'Réseau d\'eau',
            default: 5,
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