ServerEvents.tags('item', event => {
    event.add('c:nether_bricks', ['minecraft:nether_bricks', 'minecraft:red_nether_bricks'])
    event.add('minecraft:boats', /byg:\w+?_boat/)
    event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
    event.add('forge:cheese', '#forge:cheeses')
    event.add('forge:dusts/ender', 'ae2:ender_dust')
    event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
    event.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
    event.add('forge:rubber', ['industrialforegoing:dryrubber', 'thermal:cured_rubber'])
    event.add('mysticalagriculture:essences', [
        'mysticalagriculture:azure_silver_essence',
        'mysticalagriculture:crimson_iron_essence',
    ])
    event.add('mysticalagriculture:seeds', [
        'mysticalagriculture:azure_silver_seeds',
        'mysticalagriculture:crimson_iron_seeds',
    ])
    event.add('forge:dusts', 'alltheores:netherite_dust')
    event.add('forge:dusts/netherite', 'alltheores:netherite_dust')

    event.add('forbidden_arcanus:modifier/eternal_incompatible', [
        '#alltheores:ore_hammers', 'minecraft:nether_star', 'bloodmagic:sanguinereverter', '#occultism:miners/ores', 'apotheosis:potion_charm'
    ])

    // Add tags for Elite tier and above botany pots
    const botanypots = event.get('botanypots:all_botany_pots').getObjectIds()
    const whitelistElite = Ingredient.of(/.*botanypotstiers:elite_.*/)
    const whitelistUltra = Ingredient.of(/.*botanypotstiers:ultra_.*/)
    const whitelistCreative = Ingredient.of(/.*botanypotstiers:creative_.*/)
    botanypots.forEach(botanypot => {
        if (whitelistElite.test(botanypot)) event.add('botanypots:elite', botanypot)
        else if (whitelistUltra.test(botanypot)) event.add('botanypots:ultra', botanypot)
        else if (whitelistCreative.test(botanypot)) event.add('botanypots:creative', botanypot)
    })
})

ServerEvents.tags('block', event => {
    event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
    event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
    event.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', '@waystones'])
    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz'
    ])
    event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
    event.add('mysticalagriculture:crops', [
        'mysticalagriculture:azure_silver_crop',
        'mysticalagriculture:crimson_iron_crop',
    ])

})

ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water', [
        'ad_astra:oil', 'ad_astra:flowing_oil',
        'ad_astra:cryo_fuel', 'ad_astra:flowing_cryo_fuel',
        'ad_astra:fuel', 'ad_astra:flowing_fuel',
        'createaddition:flowing_seed_oil', 'createaddition:seed_oil'])
})

ServerEvents.tags('entity_type', event => {
    event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'artifacts:mimic', 'minecraft:iron_golem', 'minecraft:wither'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
    event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
    event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
})
