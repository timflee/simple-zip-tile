def refreshColours():
    for X2 in range(8):
        for Y2 in range(8):
            tileDisplay.set_matrix_color(X2,
                Y2,
                Kitronik_Zip_Tile.rgb(list2[X2][Y2][0], list2[X2][Y2][1], list2[X2][Y2][2]))
        tileDisplay.show()
# Adjust the RGB colour by and random amount
def randomize():
    for X3 in range(8):
        for Y3 in range(8):


            list2[X3][Y3] = [randint(-10, 10),randint(-10, 10),randint(-10, 10)]
    refreshColours()
def gameOfLife():
    global Value, Left, Right, Up, Down
    for X in range(8):
        if X == 0 or X == 7:
            continue
        for Y in range(8):
            if Y == 0 or Y == 7:
                continue
            for rgb in range(3):
                Value = list2[X][Y][rgb]
                Left = list2[X - 1][Y][rgb]
                Right = list2[X + 1][Y][rgb]
                Up = list2[X][Y + 1][rgb]
                Down = list2[X][Y - 1][rgb]
                Value = (Value + Left + Right + Up + Down) / 7
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                list2[X][Y][rgb] = Value
    refreshColours()
# Adjust the RGB colour by and random amount
def randomWalk():
    global Value
    for X32 in range(8):
        for Y32 in range(8):
            for rgb22 in range(3):
                Value = list2[X32][Y32][rgb22]
                Value = Value + randint(-10, 10)
                if Down > 255:
                    Value = 255
                elif Value < 0:
                    Value = 0
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                list2[X32][Y32][rgb22] = Value
    refreshColours()
def binarySplit(threshold: number, max2: number):
    global Value
    for X322 in range(8):
        for Y322 in range(8):
            for rgb222 in range(3):
                Value = list2[X322][Y322][rgb222]
                if Value > threshold:
                    Value = max2
                else:
                    Value = 0
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                # Update the RGB value in the reference array
                list2[X322][Y322][rgb222] = Value
    refreshColours()
def gameOfLife2(threshold2: number, max3: number):
    global numNeighbours
    for X4 in range(8):
        for Y4 in range(8):
            for rgb3 in range(3):
                numNeighbours = 0
                if X4 > 0:
                    if list2[X4 - 1][Y4][rgb3] > threshold2:
                        numNeighbours += 1
                if X4 < 7:
                    if list2[X4 + 1][Y4][rgb3] > threshold2:
                        numNeighbours += 1
                if Y4 > 0:
                    if list2[X4][Y4 - 1][rgb3] > threshold2:
                        numNeighbours += 1
                if Y4 < 7:
                    if list2[X4][Y4 + 1][rgb3] > threshold2:
                        numNeighbours += 1
                if list2[X4][Y4][rgb3] >= threshold2 and (numNeighbours < 2 or numNeighbours > 3):
                    list2[X4][Y4][rgb3] = 0
                if list2[X4][Y4][rgb3] < threshold2 and (numNeighbours == 2 or numNeighbours == 3):
                    list2[X4][Y4][rgb3] = max3
    refreshColours()
numNeighbours = 0
Down = 0
Up = 0
Right = 0
Left = 0
Value = 0
list2: List[List[List[number]]] = []
tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = None
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.clear()
brightness = 25
maxRed = 255
maxGreen = 255
maxBlue = 255
tileDisplay.set_brightness(brightness)
tileDisplay.show()
basic.pause(1000)
list2 = [[[randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)],
        [randint(0, maxRed),
            randint(0, maxGreen),
            randint(0, maxBlue)]]]
for index in range(7):
    list2.append([[randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)],
            [randint(0, maxRed),
                randint(0, maxGreen),
                randint(0, maxBlue)]])

def on_forever():
    refreshColours()
    basic.pause(200)
    binarySplit(maxRed / 2, maxRed)
    basic.pause(200)
    while True:
        gameOfLife2(maxRed / 1.5, maxRed)
        basic.pause(100)
basic.forever(on_forever)
