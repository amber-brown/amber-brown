import Typography from "typography"
import funstonTheme from "typography-theme-funston"

funstonTheme.headerFontFamily = ["Montserrat", "serif"]
funstonTheme.bodyFontFamily = ["Oxygen", "serif"]
funstonTheme.googleFonts = [
  { name: "Montserrat", styles: ["400", "700"] },
  { name: "Oxygen", styles: ["400", "700&display=swap"] },
]
funstonTheme.baseLineHeight = 1.6
funstonTheme.baseFontSize = "18px"

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
