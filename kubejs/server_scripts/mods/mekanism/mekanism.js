ServerEvents.recipes(e => {
  // inert nether star
  e.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 10,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:ethene"
    },
    "itemInput": {
      "amount": 1,
      "ingredient": {
        "item": "minecraft:wither_skeleton_skull"
      }
    },
    "itemOutput": {
      "amount": 1,
      "item": "kubejs:inert_nether_star"
    },
    "gasOutput": {
      "amount": 100,
      "gas": "kubejs:neutron_gas"
    }
  }).id('kubejs:reaction/inert_star/water_ethene')

  // inert nether star duping
  e.custom({
    "type": "mekanism:reaction",
    "duration": 400,
    "energyRequired": 200,
    "fluidInput": {
      "amount": 200,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "kubejs:neutron_gas"
    },
    "gasOutput": {
      "amount": 10,
      "gas": "mekanism:hydrogen"
    },
    "itemInput": {
      "ingredient": {
        "item": "kubejs:inert_nether_star"
      }
    },
    "itemOutput": {
      "count": 16,
      "item": "kubejs:inert_nether_star"
    }
  }).id('kubejs:reaction/inert_star/water_neutron')

  // inert nether star activation
  e.custom({
    "type": "mekanism:nucleosynthesizing",
    "itemInput": {
      "amount": 16,
      "ingredient": {
        "item": "kubejs:inert_nether_star"
      }
    },
    "gasInput": {
      "amount": 1,
      "gas": "mekanism:antimatter"
    },
    "output": {
      "count": 16,
      "item": "minecraft:nether_star"
    },
    "duration": 200
  }).id('kubejs:nucleosynthesizing/nether_star')
  
})
