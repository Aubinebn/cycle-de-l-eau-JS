const weatherTexts = {
    'urbain' : {
        cold: {
            none:   "",
            
            low:    "<p>Possibilité d'infiltration à la parcelle</p><p>Bonne collecte par les réseaux d'eau pluviale</p><p>Pas de débordement</p>",
            
            high:   "<p>Risque d'engorgement des réseaux d'eau pluviale, risque d'inondations.</p>"
        },
        
        hot: {
            none:   "",
            
            low:    "<p>Évaporation importante.</p>",
            
            high:   "<p>Évaporation importante.</p>" +
                    "<p>Risque d'engorgement des réseaux d'eau pluviale, risque d'inondation.</p>" +
                    "<p>Difficulté d'infiltration à la parcelle si le sol est sec.</p>"
        }
    },
    
    'agricole' : {
        cold: {
            none:   "",
            
            low:    "<p>Infiltration, recharge des nappes phréatiques.</p>",
                    
            high:   "<p>Ruissellement en surface.</p>" +
                    "<p>Infiltration, recharge des nappes phréatiques.</p>"
        },
        
        hot: {
            none:   "",
            
            low:    "<p>Interception Absorption de l'eau par les plantes</p>" +
                    "<p>Évapotranspiration importante, pas de recharge des nappes phréatiques.</p>",
                    
            high:   "<p>Évapotranspiration importante, pas de recharge des nappes phréatiques.</p>" +
                    "<p>Ruissellement et risque de glissement de terrain ou coulée de boue si les sols sont nus.</p>"
        }
    },
    
    'naturel' : {
        cold: {
            none:   "",
            
            low:    "<p>Infiltration, recharge des nappes phréatiques.</p>",
                    
            high:   "<p>Infiltration, recharge des nappes phréatiques.</p>" +
                    "<p>Ruissellement en surface.</p>"
        },
        
        hot: {
            none:   "",
            
            low:    "<p>Interception / absorption de l'eau par les plantes, évapotranspiration importante.</p>" +
                    "<p>Infiltration et recharge des nappes moindre.</p>",
                    
            high:   "<p>Évapotranspiration importante, pas de recharge des nappes.</p>" +
                    "<p>Ruissellement en surface.</p>"
        }
    }
};