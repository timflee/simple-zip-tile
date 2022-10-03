def on_button_pressed_a():
    list2[0][0][0]=list2[0][0][0] + 5
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def setToRandomColours():
    pass
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.clear()
tileDisplay.set_brightness(25)
tileDisplay.show()
list2 = [[[randint(0, 255), randint(0, 255), randint(0, 255)],
        [randint(0, 255), randint(0, 255), randint(0, 255)],
        [randint(0, 255), randint(0, 255), randint(0, 255)],
        [randint(0, 255), randint(0, 255), randint(0, 255)]]]
for index in range(3):
    list2.append([[randint(0, 255), randint(0, 255), randint(0, 255)],
            [randint(0, 255), randint(0, 255), randint(0, 255)],
            [randint(0, 255), randint(0, 255), randint(0, 255)],
            [randint(0, 255), randint(0, 255), randint(0, 255)]])

def on_forever():
    setToRandomColours()
basic.forever(on_forever)
