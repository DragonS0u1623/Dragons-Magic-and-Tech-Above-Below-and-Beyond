local rla = peripheral.wrap("back")

local lastEff = 0
local curEff = 0
local adjustment = 1

print("Starting Reactor control...\nHold Ctrl+T to stop...")
os.sleep(3)

local function updateEfficiency()
    curEff = rla.getEfficiency()
    if curEff > 0 then
        if curEff < lastEff then
            adjustment = -adjustment
        end

        rla.adjustReactivity(adjustment)
        term.clear()
        term.setCursorPos(1,1)
        print("Efficiency: " .. curEff .. "\nAdjustment: " .. adjustment)
        lastEff = curEff
    end
end

while rla.getEfficiency() > 0 do
    updateEfficiency()
    os.sleep(5.5)
end