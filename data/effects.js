const effects = [
    'evaporation',
    'infiltration',
    'qualiteEau',
    'ruissellement',
    'reseauEau',
    'biodiversite'
];

function getEffect(effectName)
{
    effects.forEach(function(effectName)
    {
        for (let i in amenagements)
        {
            let modifier = amenagements[i].effects[effectName];
        }
    });
}