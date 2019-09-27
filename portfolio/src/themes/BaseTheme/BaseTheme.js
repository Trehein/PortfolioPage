const theme = {
    space: [0,4,8,16,32,64,128,256,512],
    lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacings: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid',
    ],
    colors: {
        primary: {
            light: 'hsl(208, 13%, 35%)',
            main: 'hsl(208, 13%, 25%)',
            dark: 'hsl(208, 13%, 15%)',
            contrastText: '#ffffff'
        },
        text: {
            primary: 'hsl(208, 13%, 15%)',
            secondary: 'hsl(208, 13%, 45%)',
            disabled: 'hsl(208, 13%, 75%)',
            hint: 'hsl(208, 13%, 75%)'
        },
        red: {
            darker: 'rgba(183, 28, 28,1.0)',
            dark: 'rgba(211, 47, 47,1.0)',
            base: 'rgba(244, 67, 54,1.0)',
            light: 'rgba(229, 115, 115,1.0)',
            lighter: 'rgba(255, 205, 210,1.0)',
        },
        pink: {
            darker: '#880E4F',
            dark: '#C2185B',
            base: '#E91E63',
            light: 'rgba(240, 98, 146,1.0)',
            lighter: 'rgba(248, 187, 208,1.0)',
        },
        deepPurple: {
            darker: 'rgba(49, 27, 146,1.0)',
            dark: 'rgba(81, 45, 168,1.0)',
            base: 'rgba(103, 58, 183,1.0)',
            light: 'rgba(149, 117, 205,1.0)',
            lighter: 'rgba(209, 196, 233,1.0)',
        },
        indigo: {
            darker: 'rgba(26, 35, 126,1.0)',
            dark: 'rgba(48, 63, 159,1.0)',
            base: 'rgba(63, 81, 181,1.0)',
            light: 'rgba(121, 134, 203,1.0)',
            lighter: 'rgba(197, 202, 233,1.0)',
        },
        blue: {
            darker: 'rgba(13, 71, 161,1.0)',
            dark: 'rgba(25, 118, 210,1.0)',
            base: 'rgba(33, 150, 243,1.0)',
            light: 'rgba(100, 181, 246,1.0)',
            lighter: 'rgba(187, 222, 251,1.0)',
        },
        purple: {
            darker: 'rgba(74, 20, 140,1.0)',
            dark: 'rgba(123, 31, 162,1.0)',
            base: '#9C27B0',
            light: 'rgba(186, 104, 200,1.0)',
            lighter: 'rgba(225, 190, 231,1.0)',
        },
        lightBlue: {
            darker: 'rgba(1, 87, 155,1.0)',
            dark: 'rgba(2, 136, 209,1.0)',
            base: 'rgba(3, 169, 244,1.0)',
            light: 'rgba(79, 195, 247,1.0)',
            lighter: 'rgba(179, 229, 252,1.0)',
        },
        teal: {
            darker: 'rgba(0, 77, 64,1.0)',
            dark: 'rgba(0, 121, 107,1.0)',
            base: 'rgba(0, 150, 136,1.0)',
            light: 'rgba(77, 182, 172,1.0)',
            lighter: 'rgba(178, 223, 219,1.0)',
        },
        green: {
            darker: 'rgba(27, 94, 32,1.0)',
            dark: 'rgba(56, 142, 60,1.0)',
            base: '#4CAF50',
            light: 'rgba(129, 199, 132,1.0)',
            lighter: 'rgba(200, 230, 201,1.0)',
        },
        lime: {
            darker: 'rgba(130, 119, 23,1.0)',
            dark: 'rgba(175, 180, 43,1.0)',
            base: 'rgba(205, 220, 57,1.0)',
            light: 'rgba(220, 231, 117,1.0)',
            lighter: 'rgba(240, 244, 195,1.0)',
        },
        lightGreen: {
            darker: 'rgba(51, 105, 30,1.0)',
            dark: 'rgba(104, 159, 56,1.0)',
            base: 'rgba(139, 195, 74,1.0)',
            light: 'rgba(174, 213, 129,1.0)',
            lighter: 'rgba(220, 237, 200,1.0)',
        },
        cyan: {
            darker: 'rgba(0, 96, 100,1.0)',
            dark: 'rgba(0, 151, 167,1.0)',
            base: 'rgba(0, 188, 212,1.0)',
            light: 'rgba(77, 208, 225,1.0)',
            lighter: 'rgba(178, 235, 242,1.0)',
        },
        yellow: {
            darker: 'rgba(245, 127, 23,1.0)',
            dark: 'rgba(251, 192, 45,1.0)',
            base: 'rgba(255, 235, 59,1.0)',
            light: '#FFF176',
            lighter: 'rgba(255, 249, 196,1.0)',
        },
        amber: {
            darker: 'rgba(255, 111, 0,1.0)',
            dark: 'rgba(255, 160, 0,1.0)',
            base: 'rgba(255, 193, 7,1.0)',
            light: 'rgba(255, 213, 79,1.0)',
            lighter: 'rgba(255, 236, 179,1.0)',
        },
        grey: {
            darker: 'rgba(33, 33, 33,1.0)',
            dark: 'rgba(97, 97, 97,1.0)',
            base: 'rgba(158, 158, 158,1.0)',
            light: 'rgba(224, 224, 224,1.0)',
            lighter: 'rgba(245, 245, 245,1.0)',
        },
        orange: {
            darker: 'rgba(230, 81, 0,1.0)',
            dark: 'rgba(245, 124, 0,1.0)',
            base: 'rgba(255, 152, 0,1.0)',
            light: 'rgba(255, 183, 77,1.0)',
            lighter: 'rgba(255, 224, 178,1.0)',
        },
        deepOrange: {
            darker: 'rgba(191, 54, 12,1.0)',
            dark: 'rgba(230, 74, 25,1.0)',
            base: 'rgba(255, 87, 34,1.0)',
            light: 'rgba(255, 138, 101,1.0)',
            lighter: 'rgba(255, 204, 188,1.0)',
        },
        blueGrey: {
            darker: 'rgba(38, 50, 56,1.0)',
            dark: 'rgba(69, 90, 100,1.0)',
            base: 'rgba(96, 125, 139,1.0)',
            light: 'rgba(144, 164, 174,1.0)',
            lighter: 'rgba(207, 216, 220,1.0)',
        }
    }
}

const defaults = {
    button: {
        padding: `${theme.space[2] / 16}em ${(theme.space[3] + 4) / 16}em`,
        // border: theme.borders[3],
        textTransform: 'uppercase',
        letterSpacing: theme.letterSpacings.tracked,
        boxShadow: '0 3px 5px 2px rgba(158, 158, 158,1.0)',
        borderRadius: '5px',
    }
}

const variants = {
    button: {
        primary: {
            ...defaults.button,
            color: theme.colors.blue.dark,
            borderColor: theme.colors.primary.main
        },
        contrast: {
            ...defaults.button,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        },
        indigo: {
            ...defaults.button,
            color: theme.colors.indigo.base,
            borderColor: theme.colors.indigo.darker,
            backgroundColor: theme.colors.indigo.lighter
        }
    },
    linkButton: {
        primary: {
            color: theme.colors.primary.main
        },
        contrast: {
            color: theme.colors.primary.contrastText
        }
    },
}

const BaseTheme = { ...theme, defaults, variants }
export { BaseTheme }