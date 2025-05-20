const weatherTexts = {
    'urbain' : {
        cold: {
            none:   "<p>Lorsque que les températures sont froides et les sécheresses prolongées les nappes phréatiques ne se rechargent plus, le stockage des eaux de surface n'est pas non plus possible.</p><p>Les débits des cours d'eau diminuent.</p><p>Les sécheresses prolongées peut avoir des impacts sur les cultures ou les forêts les rendant plus vulnérables (difficulté de germination, baisse de la production, risque d'incendie de forêt).</p>",
            
            low:    "<p>L'infiltration à la parcelle est possible car l'intensité de la pluie est faible.</p><p>Les réseaux de collecte de l'eau pluviale sont suffisamment dimensionnés, il n'y a pas de risque de débordement.</p>",
            
            high:   "<p>Lorsque les pluies sont intenses les réseaux de collecte des eaux pluviales n'arrivent plus à collecter toute l'eau de la chaussée.</p><p>Les réseaux débordent, il y a un risque d'inondation des routes et des habitations.</p><p>Les eaux collectées sont rejetées plus en aval dans la rivière ce qui augmente le risque inondation pour les habitations à proximité des cours d'eau</p>",
        },
        
        hot: {
            none:   "<p>La chaleur augmente d'autant plus si la ville est très peu végétalisée.</p><p>Les consommations en eau augmentent (douches, piscine, arrosage). Ces prélèvements plus importants ont un impact sur la ressource en eau.</p><p>Le niveau des nappes phréatiques baisse. Des restrictions d'usage peuvent être mis en place pour garantir un équilibre entre ressource et prélèvements.</p>",
            
            low:    "<p>Dans les villes, plus l'imperméabilisation des sols est importante plus il y a d'évaporation de l'eau lorsque les pluies sont faibles et que les températures sont chaudes.</p>",
            
            high:   "<p>En milieu urbanisé lorsque les température sont élevées et que la pluie tombe avec intensité, une partie de l'eau s'évapore et le reste ruisselle, les sols secs ne permettant pas d'infiltrer à la parcelle.</p><p>Il y a un risque plus élevé d'inondation car les réseaux d'eau pluviale peuvent saturer et les cours d'eau déborder.</p>",
        }
    },
    
    'agricole' : {
        cold: {
            none:   "<p>Après de longues période sans pluie la pollution se dépose sur la chaussée, lorsque les pluies reprennent le lessivage des sols a un impact sur la pollution des cours d'eau.</p>",
            
            low:    "<p>Lorsque la pluie tombe en faible quantité mais sur une longue durée et que les températures ne sont pas trop élevées, l'eau s'infiltre dans le sols et les nappes se rechargent.</p>",
                    
            high:   "<p>Lorsque les pluies sont intenses une partie de l'eau qui tombent au sol ne s'infiltre pas et ruisselle. Le reste de la pluie s'infiltre et contribue à la recharge des nappes phréatiques.</p>"
        },
        
        hot: {
            none:   "<p>La chaleur augmente, les plantes évapotranspirent, si les sols sont nus ils s'assèchent.</p><p>Le niveau des nappes phréatiques baissent.</p><p>Des restrictions d'usage pour l'irrigation peuvent être mis en place pour garantir un équilibre entre ressource et prélèvements.</p>",
            
            low:    "<p>Lorsque les pluies sont faibles et que les températures sont chaudes, l'eau est interceptée par les plantes.</p><p>L'évapotranspiration est importante et la recharge de nappes n'est pas possible.</p>",
                    
            high:   "<p>Lorsque les températures sont chaudes et que les pluies sont intenses (ex : gros orage), l'évapotranspiration des plantes est importante, l'eau n'a pas le temps de pénétrer dans les sols.</p><p>Elle ruisselle et lorsque les sols sont nus (champs labourés) il y a d'important risque de glissement de terrain ou de coulée de boue.</p><p>Le bocage ou les zones enherbée créent des zones tampons qui limitent le ruissellement et favorise l'infiltration dans les sols. Cela limite le risque d'érosion et de propagation des pollutions.</p>"
        }
    },
    
    'naturel' : {
        cold: {
            none:   "<p>Malgrès les températures froides, la prolongation des périodes de sécheresse hivernale peut avoir un impact sur la diminution des débits des cours d'eau et l'arrêt de la recharge des nappes.</p>",
            
            low:    "<p>Lorsque les températures ne sont pas trop élevées et que la pluie est de faible intensité, l'infiltration dans les sols est facilité et les recharges des nappes sont efficaces.</p>",
                    
            high:   "<p>Lorsque les températures ne sont pas trop élevées et que la pluie est de forte intensité, l'infiltration dans les sols est possible au début mais lorsque les sols sont saturés en eaux, l'eau ruisselle.</p><p>La recharge des nappes est moindre.</p>"
        },
        
        hot: {
            none:   "<p>La chaleur augmente, les plantes évapotranspirent.</p><p>Si les cours d'eau ont peu de ripisylve la température du cours d'eau augmente avec un risque élevée de mortalité piscicole.</p><p>Les débits des cours d'eau diminuent petit à petit.</p><p>Le niveau des nappes baisse.</p>",
            
            low:    "<p>Les plantes interceptent une grande partie de l'eau de pluie.</p><p>Les températures élevées augmentent l'évaporation et l'évapotranspiration.</p><p>L'infiltration est très limitée et la recharge des nappes est amoindrie.</p>",
                    
            high:   "<p>L'évaporation est importante lorsque les température sont trop élevées.</p><p>L'eau arrive en trop grande quantité sur des sols secs, l'infiltration n'est pas possible.</p><p>Il n'y a pas de recharge des nappes et l'eau ruisselle.</p>",
        }
    }
};