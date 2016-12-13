const fontSize = 16
const fontFamily = "'Fira Code', monospace"
const cursorColor = "rgba(248,28,229,0.7)"
const cursorShape = "BLOCK"
const foregroundColor = "#EFE9FE"
const backgroundColor = "#2C2734"
const borderColor = "rgba(255,255,255,0.1)"

const coreColors = {
  black: "#2C2734",
  lightBlack: "#746d7d",
  white: "#5A5267",
  lightWhite: "#F0EAFF",
  red: "#ff5d9e",
  green: "#b1fe7d",
  yellow: "#fec38e",
  blue: "#68a6fe",
  magenta: "#cab1fa",
  cyan: "#7bfdff"
}

const colors = Object.assign({}, coreColors, {
  lightRed: coreColors.red,
  lightGreen: coreColors.green,
  lightYellow: coreColors.yellow,
  lightBlue: coreColors.blue,
  lightMagenta: coreColors.magenta,
  lightCyan: coreColors.cyan
})

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontSize,
    fontFamily,
    cursorColor,
    cursorShape,
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    termCSS: `
      ${config.termCSS || ""}
    `,
    css: `
      ${config.css || ""}
      .tab_tab {
        color: #656565
      }

      .tab_active {
        color: #F0EAFF
      }

      .term_fit:not(.term_term) {
        opacity: 0.6;
      }

      .term_fit.term_active {
        opacity: 1;
        transition: opacity 0.12s ease-in-out;
        will-change: opacity;
      }
    `
  })
}
