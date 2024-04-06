JEIEvents.hideItems(event => {
    event.hide(/extrastorage:(block|disk|storagepart)_.+/)
    event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
    event.hide(/extrastorage:advanced_(importer|exporter)/)
    event.hide(/ae2:facade/)
    event.hide(/apotheosis:gem/)
    event.hide(/enderio:broken_spawner/)
    event.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
    event.hide('mekanism:upgrade_anchor')
    event.hide('ars_nouveau:glyph_animate_block')

    event.hide(/refinedstorage:(red|orange|yellow|lime|green|blue|light_blue|magenta|purple|light_gray|gray|pink|white|black|cyan|brown)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|detector|security_manager|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor)/)
    
    event.hide(/sophisticatedstorage:(chest|barrel|shulker_box)/)
    event.hide(/sophisticatedstorage:limited_barrel_(1|2|3|4)/)
    event.hide(/sophisticatedstorage:(copper|iron|gold|diamond|netherite)_(chest|barrel|shulker_box)/)
    event.hide(/sophisticatedstorage:limited_(copper|iron|gold|diamond|netherite)_barrel_(1|2|3|4)/)
    
    event.hide(/enderio:clear_glass_(red|orange|yellow|lime|green|blue|light_blue|magenta|purple|light_gray|gray|pink|white|black|cyan|brown)/)
    event.hide(/enderio:clear_glass_(p|np|m|nm|a|na|d|dp|dnp|dm|dnm|da|dna|e|ep|enp|em|enm|ea|ena)_(red|orange|yellow|lime|green|blue|light_blue|magenta|purple|light_gray|gray|pink|white|black|cyan|brown)/)

    event.hide(/botanypots:(red|orange|yellow|lime|green|blue|light_blue|magenta|purple|light_gray|gray|pink|white|black|cyan|brown)_(terracotta_botany_pot|terracotta_hopper_botany_pot|glazed_terracotta_botany_pot|glazed_terracotta_hopper_botany_pot|concrete_botany_pot|concrete_hopper_botany_pot)/)
    event.hide(/botanypotstiers:(elite|ultra|creative)_(red|orange|yellow|lime|green|blue|light_blue|magenta|purple|light_gray|gray|pink|white|black|cyan|brown)_(terracotta_botany_pot|terracotta_hopper_botany_pot|glazed_terracotta_botany_pot|glazed_terracotta_hopper_botany_pot|concrete_botany_pot|concrete_hopper_botany_pot)/)
})