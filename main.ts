input.onButtonPressed(Button.A, function () {
    if (ronde == 0) {
        ronde = 1
        basic.showString("" + (jongenmeisje[0]))
    } else if (ronde == 1) {
        if (index == 0) {
            index = 1
        } else {
            index = 0
        }
        basic.showString("" + (jongenmeisje[index]))
    } else if (ronde == 2) {
        if (index == 0) {
            index = meisjes.length - 1
        } else {
            index = index - 1
        }
        basic.showString("" + (kusschopknuffelsla[index]))
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ronde == 0) {
        ronde = 1
        basic.showString("" + (jongenmeisje[0]))
    } else if (ronde == 1) {
        ronde = 2
        keuzes[0] = jongenmeisje[index]
        index = 0
        basic.showString("" + (kusschopknuffelsla[index]))
    } else {
        ronde = 3
        keuzes[1] = kusschopknuffelsla[index]
        index = 0
        if (keuzes[0] == "J") {
            basic.showString("" + (jongens[index]))
            index = 0
        } else {
            index = index + 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (ronde == 0) {
        ronde = 1
        basic.showString("" + (jongenmeisje[1]))
    } else if (ronde == 1) {
        if (index == 0) {
            index = 1
        } else {
            index = 0
        }
        basic.showString("" + (jongenmeisje[index]))
    } else {
        if (index == kusschopknuffelsla.length - 1) {
            index = 0
        } else {
            index = index + 1
        }
        basic.showString("" + (kusschopknuffelsla[index]))
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
kusschopknuffelsla = ["KUS", "SLA", "KNUFFEL", "SCHOP"]
meisjes = ["RENEE", "MEREL", "MIA", "TENZIN", "MARILOU", "FEBE", "JANNE", "ANNABEL"]
jongens = ["JENS", "JEROM", "TIAGO", "MIROM", "MOHAMED", "BRIEK", "KIES", "FELIX"]
