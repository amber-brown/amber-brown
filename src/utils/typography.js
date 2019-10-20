import Typography from "typography"
import funstonTheme from "typography-theme-funston"

funstonTheme.headerFontFamily = ["Roboto Slab", "serif"]
funstonTheme.bodyFontFamily = ["Oxygen", "serif"]
funstonTheme.googleFonts = [
  { name: "Roboto Slab", styles: ["700"] },
  { name: "Oxygen", styles: ["400", "700"] },
]
funstonTheme.baseLineHeight = 1.6
funstonTheme.baseFontSize = "18px"

const typography = new Typography(funstonTheme)

/*
Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)
*/

console.log(funstonTheme)
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
