ItemEvents.tooltip(event => {
    event.add('allthemodium:teleport_pad',[
        Text.of('Place the pad down in the specified Dimension'),
        Text.of('Sneak Right Click with both hands empty to teleport'),
        Text.of('§aOverworld TO Mining Dimension').red(),
        Text.of('§cThe Nether TO The Other').red(),
        Text.of('§bThe End TO The Beyond')
    ])

    event.add('enderchests:ender_chest', [
        Text.of('Shift right click with dye to change the color'),
        Text.of('Make private by shift right clicking with a diamond').aqua(),
        Text.of('Make global by breaking while sneaking').gold(),
        Text.of('Shift right click with an ender pearl to increase size by 3 or an eye of ender to increase by 9').green()
    ])

    event.add('endertanks:ender_tank', [
        Text.of('Shift right click with dye to change the color'),
        Text.of('Make private by shift right clicking with a diamond').aqua(),
        Text.of('Make global by breaking while sneaking').gold(),
        Text.of('Shift right click with an ender pearl to increase size by 3 or an eye of ender to increase by 9').green()
    ])

    event.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
        text.add(3, Text.of("Created from Cursed Chicken Feed").yellow())
    })
    event.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
        text.add(3, Text.of("Created from Nutritious Chicken Feed").yellow())
    })

    event.add('rsinfinitybooster:infinity_card', [
        Text.of('Infinite range for RS wireless'),
        Text.of('Only works in the same dimension')
    ])
    event.add('rsinfinitybooster:dimension_card', [
        Text.of('Infinite range for RS wireless'),
        Text.of('Works across dimensions')
    ])

    event.add('aeinfinitybooster:infinity_card', [
        Text.of('Infinite range for AE2 wireless'),
        Text.of('Only works in the same dimension')
    ])
    event.add('aeinfinitybooster:dimension_card', [
        Text.of('Infinite range for AE2 wireless'),
        Text.of('Works across dimensions')
    ])

    event.add('pipez:item_pipe', [
        [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
        [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
        [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
        [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
        [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()]
    ])
    event.add('pipez:fluid_pipe', [
        [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
        [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
        [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
        [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
        [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    ])
    event.add('pipez:gas_pipe', [
        [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
        [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
        [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
        [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
        [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
    ])
    event.add('pipez:energy_pipe', [
        [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
        [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
        [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
        [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
        [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
    ])
    
    //upgrades
    event.add('pipez:basic_upgrade', [
        [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
        [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
        [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
        [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    ])
    event.add('pipez:improved_upgrade', [
        [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
        [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
        [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
        [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    ])
    event.add('pipez:advanced_upgrade', [
        [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
        [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
        [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
        [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    ])
    event.add('pipez:ultimate_upgrade', [
        [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
        [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
        [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
        [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    ])
})