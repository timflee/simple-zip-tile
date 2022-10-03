input.onButtonPressed(Button.A, function () {
    list2[0][0][0] = list2[0][0][0] + 5
    basic.pause(100)
})
function setToRandomColours () {
	
}
let list2: number[][][] = []
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
tileDisplay.setBrightness(25)
tileDisplay.show()
list2 = [[
[randint(0, 255), randint(0, 255), randint(0, 255)],
[randint(0, 255), randint(0, 255), randint(0, 255)],
[randint(0, 255), randint(0, 255), randint(0, 255)],
[randint(0, 255), randint(0, 255), randint(0, 255)]
]]
for (let index = 0; index < 3; index++) {
    list2.push([
    [randint(0, 255), randint(0, 255), randint(0, 255)],
    [randint(0, 255), randint(0, 255), randint(0, 255)],
    [randint(0, 255), randint(0, 255), randint(0, 255)],
    [randint(0, 255), randint(0, 255), randint(0, 255)]
    ])
}
basic.forever(function () {
    setToRandomColours()
})
