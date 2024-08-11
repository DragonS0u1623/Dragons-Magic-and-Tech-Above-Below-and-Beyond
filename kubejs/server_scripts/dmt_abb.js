ServerEvents.recipes(event => {
    event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"])
    event.shapeless("4x minecraft:magma_cream", ["minecraft:magma_block"])
    event.shaped("ironfurnaces:rainbow_coal", ["CCC", "CCC", "CCC"], { C: "allthecompressed:coal_block_9x" })

    event.campfireCooking("minecraft:torch", "minecraft:stick")

    event.shaped("productivebees:sturdy_bee_cage", ["III", "ICI", "III"], { I: "#forge:ingots/iron", C: "productivebees:bee_cage" })

    event.shapeless("4x create:brass_ingot", ["3x #forge:ingots/copper", "#forge:ingots/zinc", "minecraft:fire_charge"])
    event.recipes.create.mixing("4x create:brass_ingot", ["3x #forge:ingots/copper", "#forge:ingots/zinc"]).heated()

    event.smelting('silentcompat:voidmetal_ingot', 'kubejs:dust_voidmetal').xp(0.5)
    event.blasting('silentcompat:voidmetal_ingot', 'kubejs:dust_voidmetal').xp(0.5)
    event.smelting('silentcompat:arcmetal_ingot', 'kubejs:dust_arcmetal').xp(0.5)
    event.blasting('silentcompat:arcmetal_ingot', 'kubejs:dust_arcmetal').xp(0.5)
    event.smelting('silentcompat:solarmetal_ingot', 'kubejs:dust_solarmetal').xp(0.5)
    event.blasting('silentcompat:solarmetal_ingot', 'kubejs:dust_solarmetal').xp(0.5)
    event.smelting('aether_redux:veridium_ingot', 'kubejs:dust_veridium').xp(0.5)
    event.blasting('aether_redux:veridium_ingot', 'kubejs:dust_veridium').xp(0.5)

    event.remove({})

    event.remove( { id: 'apotheosis:hellshelf'})
    event.shaped('apotheosis:hellshelf', 
    [
        'AAA',
        'CBD',
        'AAA'
    ],
    {
        A: '#c:nether_bricks',
        C: 'minecraft:blaze_rod',
        B: '#forge:bookshelves',
        D: Item.of('minecraft:potion', '{Potion:"minecraft:regeneration"}').strongNBT()
    })

    event.shaped('pipez:infinity_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ],
    { A: 'allthemodium:allthemodium_block', B: 'allthecompressed:redstone_block_6x', C: 'pipez:ultimate_upgrade' })

    event.shaped('cobblefordays:tier_2', [
        'AAA',
        'WGL',
        'AAA'
    ],
    {
        A: 'minecraft:cobblestone',
        W: 'minecraft:water_bucket',
        G: 'cobblefordays:tier_1',
        L: 'minecraft:lava_bucket'
    })
    event.shaped('cobblefordays:tier_3', [
        'AAA',
        'WGL',
        'AAA'
    ],
    {
        A: 'minecraft:iron_ingot',
        W: 'minecraft:water_bucket',
        G: 'cobblefordays:tier_2',
        L: 'minecraft:lava_bucket'
    })
    event.shaped('cobblefordays:tier_4', [
        'AAA',
        'WGL',
        'AAA'
    ],
    {
        A: 'minecraft:gold_ingot',
        W: 'minecraft:water_bucket',
        G: 'cobblefordays:tier_3',
        L: 'minecraft:lava_bucket'
    })
    event.shaped('cobblefordays:tier_5', [
        'AAA',
        'WGL',
        'AAA'
    ],
    {
        A: 'minecraft:diamond',
        W: 'minecraft:water_bucket',
        G: 'cobblefordays:tier_4',
        L: 'minecraft:lava_bucket'
    })

    event.shaped('cookingforblockheads:milk_jar', [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: '#forge:glass',
            B: '#minecraft:planks',
            C: 'forbidden_arcanus:edelwood_milk_bucket'
    })
})