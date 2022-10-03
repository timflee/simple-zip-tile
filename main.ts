function refreshColours() {
    for (let X2 = 0; X2 < 8; X2++) {
        for (let Y2 = 0; Y2 < 8; Y2++) {
            tileDisplay.setMatrixColor(X2, Y2, Kitronik_Zip_Tile.rgb(list2[X2][Y2][0], list2[X2][Y2][1], list2[X2][Y2][2]))
        }
        tileDisplay.show()
    }
}

function gameOfLife() {
    
    for (let X = 0; X < 8; X++) {
        if (X == 0 || X == 7) {
            continue
        }
        
        for (let Y = 0; Y < 8; Y++) {
            if (Y == 0 || Y == 7) {
                continue
            }
            
            for (let rgb = 0; rgb < 3; rgb++) {
                Value = list2[X][Y][rgb]
                Left = list2[X - 1][Y][rgb]
                Right = list2[X + 1][Y][rgb]
                Up = list2[X][Y + 1][rgb]
                Down = list2[X][Y - 1][rgb]
                Value = (Value + Left + Right + Up + Down) / 7
                //  Update the RGB value in the reference array
                //  Update the RGB value in the reference array
                list2[X][Y][rgb] = Value
            }
        }
    }
    refreshColours()
}

//  Adjust the RGB colour by and random amount
function randomWalk() {
    
    for (let X3 = 0; X3 < 8; X3++) {
        for (let Y3 = 0; Y3 < 8; Y3++) {
            for (let rgb2 = 0; rgb2 < 3; rgb2++) {
                Value = list2[X3][Y3][rgb2]
                Value = Value + randint(-10, 10)
                if (Down > 255) {
                    Value = 255
                } else if (Value < 0) {
                    Value = 0
                }
                
                //  Update the RGB value in the reference array
                //  Update the RGB value in the reference array
                list2[X3][Y3][rgb2] = Value
            }
        }
    }
    refreshColours()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    list2[0][0][0] = list2[0][0][0] + 5
    basic.pause(100)
})
function gameOfLife2() {
    
    for (let X4 = 0; X4 < 8; X4++) {
        if (X4 == 0 || X4 == 7) {
            continue
        }
        
        for (let Y4 = 0; Y4 < 8; Y4++) {
            if (Y4 == 0 || Y4 == 7) {
                continue
            }
            
            for (let rgb3 = 0; rgb3 < 2; rgb3++) {
                numNeighbours = 0
                if (list2[X4 - 1][Y4][rgb3] < 125) {
                    numNeighbours += 1
                }
                
                if (list2[X4 + 1][Y4][rgb3] > 125) {
                    numNeighbours += 1
                }
                
                if (list2[X4][Y4 + 1][rgb3] > 125) {
                    numNeighbours += 1
                }
                
                if (list2[X4][Y4 + 1][rgb3] > 125) {
                    numNeighbours += 1
                }
                
                if (list2[X4][Y4][rgb3] > 125) {
                    numNeighbours += 1
                }
                
                Left = 0
                Right = 0
                Up = 0
                Down = list2[X4][Y4 - 1][rgb3]
                Value = (Value + Left + Right + Up + Down) / 7
                //  Update the RGB value in the reference array
                //  Update the RGB value in the reference array
                list2[X4][Y4][rgb3] = Value
            }
        }
    }
    refreshColours()
}

let numNeighbours = 0
let Down = 0
let Up = 0
let Right = 0
let Left = 0
let Value = 0
let list2 : number[][][] = []
let tileDisplay : Kitronik_Zip_Tile.ZIPTileDisplay = null
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
let brightness = 50
let maxRed = 255
let maxGreen = 1
let maxBlue = 1
tileDisplay.setBrightness(brightness)
tileDisplay.show()
basic.pause(1000)
list2 = [[[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)]]]
for (let index = 0; index < 7; index++) {
    list2.push([[randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)], [randint(0, maxRed), randint(0, maxGreen), randint(0, maxBlue)]])
}
basic.forever(function on_forever() {
    refreshColours()
    while (true) {
        gameOfLife2()
        basic.pause(10)
    }
})
