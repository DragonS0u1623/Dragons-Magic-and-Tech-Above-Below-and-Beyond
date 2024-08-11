WorldgenEvents.remove(event => {
    event.removeOres(ores => {
        ores.biomes = '#forge:is_overworld'
        ores.worldgenLayer = 'underground_ores'
        ores.blocks = [
            /^create:.*zinc_ore/,
            /^occultism:silver_ore.*/,
            'iceandfire:silver_ore',
            'bigreactors:yellorite_ore'
        ]
    })
})