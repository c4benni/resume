const colors = require("tailwindcss/colors");

module.exports = {
    screens: {
        xxs: "0",
        xs: "349px",
        sm: "599px",
        md: "959px",
        lg: "1279px",
        xl: "1919px",
    },
    colors: {
        transparent: "transparent",
        current: "currentColor",
        inherit: "inherit",
        primary: "#144181",
        "primary-dark": "#65a5ff",
        surface: "#f5f5f5",
        "surface-dark": "#111",
        card: "#fff",
        "card-dark": "#181818",
        disabled: "#f1f1f1",
        white: colors.white,
        black: colors.black,
        red: colors.red,
        blue: colors.blue,
        green: colors.green,
        gray: colors.neutral,
    },
    extend: {
        zIndex: {
            1: "1",
        },
        gridTemplateRows: {
            "[auto,auto,1fr]": "auto auto 1fr",
        },
        spacing: {
            128: "32rem",
            144: "36rem",
        },
        borderRadius: {
            xs: "2px",
            sm: "4px",
            md: "8px",
            lg: "12px",
            xl: "28px",
        },
    },
};