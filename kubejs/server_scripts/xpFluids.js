ServerEvents.recipes((event) => {
    let xpFluid = [
        'industrialforegoing:essence',
        'mob_grinding_utils:fluid_xp',
        'reliquary:xp_juice_still',
        'sophisticatedcore:xp_still',
        'create_enchantment_industry:experience'
    ]
    xpFluid.sort()

    let woolOrder = [
        'minecraft:orange_wool',
        'minecraft:magenta_wool',
        'minecraft:light_blue_wool',
        'minecraft:yellow_wool',
        'minecraft:lime_wool',
        'minecraft:pink_wool',
        'minecraft:gray_wool',
        'minecraft:light_gray_wool',
        'minecraft:cyan_wool',
        'minecraft:purple_wool',
        'minecraft:blue_wool',
        'minecraft:brown_wool',
        'minecraft:green_wool',
        'minecraft:red_wool',
        'minecraft:black_wool'
    ]
    for (var i in xpFluid) {
        if (Platform.isLoaded('thermal_expansion')) {
            let recipe = {
                type: "thermal:brewer",
                ingredients: [
                    { fluid_tag: "forge:experience", amount: 250 },
                    { item: woolOrder[i] }
                ],
                result: { fluid: xpFluid[i], amount: 250 }
            }
            event.custom(recipe).id(`kubejs:thermal/brewer/xp_conv_${i}`)
        }
        if (Platform.isLoaded('create')) {
            let recipe = {
                type: "create:mixing",
                ingredients: [
                    { fluidTag: "forge:experience", amount: 250 },
                    { item: woolOrder[i] }
                ],
                results: [{ fluid: xpFluid[i], amount: 250 }]
            }
            event.custom(recipe).id(`kubejs:create/mixing/xp_conv_${i}`)
        }
    }
})