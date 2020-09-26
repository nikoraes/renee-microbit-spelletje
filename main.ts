input.onButtonPressed(Button.A, function () {
    if (ronde == 0) {
        ronde = 1
        index = 0
        basic.showString("" + (jongenmeisje[index]))
    } else if (ronde == 1) {
        if (index == 0) {
            index = 1
        } else {
            index = 0
        }
        basic.showString("" + (jongenmeisje[index]))
    } else if (ronde == 2) {
        if (index == 0) {
            index = kusschopknuffelsla.length - 1
        } else {
            index = index - 1
        }
        basic.showString("" + (kusschopknuffelsla[index]))
    } else if (ronde == 3) {
        if (keuzes[0] == "J") {
            if (index == 0) {
                index = jongens.length - 1
            } else {
                index = index - 1
            }
            basic.showNumber(index + 1)
        } else {
            if (index == 0) {
                index = meisjes.length - 1
            } else {
                index = index - 1
            }
            basic.showNumber(index + 1)
        }
    } else {
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ronde == 0) {
        ronde = 1
        index = 0
        basic.showString("" + (jongenmeisje[0]))
    } else if (ronde == 1) {
        ronde = 2
        keuzes[0] = jongenmeisje[index]
        index = 0
        basic.showString("" + (kusschopknuffelsla[index]))
    } else if (ronde == 2) {
        ronde = 3
        keuzes[1] = kusschopknuffelsla[index]
        index = 0
        basic.showNumber(index + 1)
    } else if (ronde == 3) {
        ronde = 4
        if (keuzes[0] == "J") {
            basic.showString("" + (keuzes[1]))
            basic.showString("" + (jongens[index]))
        } else {
            basic.showString("" + (keuzes[1]))
            basic.showString("" + (meisjes[index]))
        }
    } else {
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (ronde == 0) {
        ronde = 1
        index = 1
        basic.showString("" + (jongenmeisje[index]))
    } else if (ronde == 1) {
        if (index == 0) {
            index = 1
        } else {
            index = 0
        }
        basic.showString("" + (jongenmeisje[index]))
    } else if (ronde == 2) {
        if (index == kusschopknuffelsla.length - 1) {
            index = 0
        } else {
            index = index + 1
        }
        basic.showString("" + (kusschopknuffelsla[index]))
    } else if (ronde == 3) {
        if (keuzes[0] == "J") {
            if (index == jongens.length - 1) {
                index = 0
            } else {
                index = index + 1
            }
            basic.showNumber(index + 1)
        } else {
            if (index == 0) {
                index = meisjes.length - 1
            } else {
                index = index - 1
            }
            basic.showNumber(index + 1)
        }
    } else {
        control.reset()
    }
})
let jongens: string[] = []
let meisjes: string[] = []
let kusschopknuffelsla: string[] = []
let jongenmeisje: string[] = []
let index = 0
let ronde = 0
let keuzes: string[] = []
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
keuzes = []
ronde = 0
index = 0
jongenmeisje = ["J", "M"]
kusschopknuffelsla = ["KUS", "SLA", "KNUF", "SCHOP"]
meisjes = ["RENEE", "MEREL", "MIA", "TENZ", "MARI", "FEBE", "JANNE", "ANNA"]
jongens = ["JENS", "JERO", "TIAG", "MIRO", "MO", "BRIE", "KIES", "FELI"]
