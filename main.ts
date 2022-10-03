function refreshColours () {
    for (let X2 = 0; X2 <= 7; X2++) {
        for (let Y2 = 0; Y2 <= 7; Y2++) {
            tileDisplay.setMatrixColor(X2, Y2, Kitronik_Zip_Tile.rgb(list2[X2][Y2][0], list2[X2][Y2][1], list2[X2][Y2][2]))
        }
        tileDisplay.show()
    }
}
// Adjust the RGB colour by and random amount
function randomize () {
    for (let X3 = 0; X3 <= 7; X3++) {
        for (let Y3 = 0; Y3 <= 7; Y3++) {
            list2[X3][Y3] = [randint(0, 255), randint(0, 255), randint(0, 255)]
        }
    }
    refreshColours()
}
function gameOfLife () {
    for (let X = 0; X <= 7; X++) {
        if (X == 0 || X == 7) {
            continue;
        }
        for (let Y = 0; Y <= 7; Y++) {
            if (Y == 0 || Y == 7) {
                continue;
            }
            for (let rgb = 0; rgb <= 2; rgb++) {
                Value = list2[X][Y][rgb]
                Left = list2[X - 1][Y][rgb]
                Right = list2[X + 1][Y][rgb]
                Up = list2[X][Y + 1][rgb]
                Down = list2[X][Y - 1][rgb]
                Value = (Value + Left + Right + Up + Down) / 7
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                list2[X][Y][rgb] = Value
            }
        }
    }
    refreshColours()
}
// Adjust the RGB colour by and random amount
function randomWalk () {
    for (let X32 = 0; X32 <= 7; X32++) {
        for (let Y32 = 0; Y32 <= 7; Y32++) {
            for (let rgb22 = 0; rgb22 <= 2; rgb22++) {
                Value = list2[X32][Y32][rgb22]
                Value = Value + randint(-10, 10)
                if (Down > 255) {
                    Value = 255
                } else if (Value < 0) {
                    Value = 0
                }
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                list2[X32][Y32][rgb22] = Value
            }
        }
    }
    refreshColours()
}
function binarySplit (threshold: number, max2: number) {
    for (let X322 = 0; X322 <= 7; X322++) {
        for (let Y322 = 0; Y322 <= 7; Y322++) {
            for (let rgb222 = 0; rgb222 <= 2; rgb222++) {
                Value = list2[X322][Y322][rgb222]
                if (Value > threshold) {
                    Value = max2
                } else {
                    Value = 0
                }
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                // Update the RGB value in the reference array
                list2[X322][Y322][rgb222] = Value
            }
        }
    }
    refreshColours()
}
function gameOfLife2 (threshold2: number, max3: number) {
    for (let X4 = 0; X4 <= 7; X4++) {
        for (let Y4 = 0; Y4 <= 7; Y4++) {
            for (let rgb3 = 0; rgb3 <= 2; rgb3++) {
                numNeighbours = 0
                if (X4 > 0) {
                    if (list2[X4 - 1][Y4][rgb3] > threshold2) {
                        numNeighbours += 1
                    }
                }
                if (X4 < 7) {
                    if (list2[X4 + 1][Y4][rgb3] > threshold2) {
                        numNeighbours += 1
                    }
                }
                if (Y4 > 0) {
                    if (list2[X4][Y4 - 1][rgb3] > threshold2) {
                        numNeighbours += 1
                    }
                }
                if (Y4 < 7) {
                    if (list2[X4][Y4 + 1][rgb3] > threshold2) {
                        numNeighbours += 1
                    }
                }
                if (list2[X4][Y4][rgb3] >= threshold2 && (numNeighbours < 2 || numNeighbours > 3)) {
                    list2[X4][Y4][rgb3] = 0
                }
                if (list2[X4][Y4][rgb3] < threshold2 && (numNeighbours == 2 || numNeighbours == 3)) {
                    list2[X4][Y4][rgb3] = max3
                }
            }
        }
    }
    refreshColours()
}
input.onButtonPressed(Button.AB, function () {
    randomize()
    binarySplit(maxRed / 2, maxRed)
})
let numNeighbours = 0
let Down = 0
let Up = 0
let Right = 0
let Left = 0
let Value = 0
let list2: number[][][] = []
let maxRed = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
let brightness = 25
maxRed = 255
let maxGreen = 255
let maxBlue = 255
tileDisplay.setBrightness(brightness)
tileDisplay.show()
basic.pause(1000)
list2 = [[
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)]
]]
for (let index = 0; index < 7; index++) {
    list2.push([
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)],
    [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)]
    ])
}
basic.forever(function () {
    binarySplit(maxRed / 2, maxRed)
    refreshColours()
    basic.pause(1000)
    while (true) {
        gameOfLife2(maxRed / 1.5, maxRed)
        basic.pause(25)
    }
})
