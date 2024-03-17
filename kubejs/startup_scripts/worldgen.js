WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
        "create:zinc_ore",
        "create:deepslate_zinc_ore",
        "occultism:silver_ore",
        "occultism:silver_ore_deepslate",
        "iceandfire:silver_ore",
        "bigreactors:yellorite_ore"
        ]
    })
})