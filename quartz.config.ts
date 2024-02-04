import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🥙 Graceful Kitchen",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "graceful.sspaeti.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // Pink style
        darkMode: {
          light: "#010507", // Almost black, deep background
          lightgray: "#5D737E", // Very dark blue, for secondary backgrounds
          gray: "#7f7f7f", // Gray for text and less important elements
          darkgray: "#cccdcd", // Dark gray for lighter text and highlights
          dark: "#00A99D", // Very dark blue, almost black, for accents
          tertiary: "#FFE0E6", // Teal for vibrant, lively accents
          secondary: "#FF7BAC", // Pink for warm, inviting contrasts
          highlight: "#FFE0E6", // Light pink for subtle highlights and accents
        },
        lightMode: {
          light: "#FFFFFF", // Pure white for the background
          lightgray: "#F0F0F0", // Soft light gray for secondary backgrounds
          gray: "#B0B0B0", // Neutral gray for text and less important elements
          darkgray: "#7f7f7f", // Gray for deeper contrast in text and UI elements
          dark: "#5D737E", // Softened version of dark blue for text and accents
          secondary: "#00A99D", // Teal, carried over for consistency in vibrant accents
          tertiary: "#FF7BAC", // Pink, for inviting contrasts and elements
          highlight: "#FFE0E6", // Light pink for highlights, maintaining the theme's essence
        },



        //        //Modern Simplicity
        //        lightMode: {
        //          light: "#FFFFFF", // Pure white, for a crisp, clean look
        //          lightgray: "#F0F0F0", // Very light gray, for subtle shadows
        //          gray: "#D9D9D9", // Neutral gray, for unobtrusive text
        //          darkgray: "#A6A6A6", // Medium gray, for depth
        //          dark: "#707070", // Dark gray, for strong contrast in text
        //          secondary: "#6D8EA0", // Soft blue, for a splash of color
        //          tertiary: "#829B84", // Gentle green, for balance
        //          highlight: "rgba(109,142,160,0.15)", // Light blue highlight
        //        },


        //        darkMode: {
        //          light: "#242424", // Almost black, for deep backgrounds
        //          lightgray: "#3D3D3D", // Charcoal, for layered design elements
        //          gray: "#555555", // Steel gray, for legible text
        //          darkgray: "#CCCCCC", // Light gray, for contrast against dark backgrounds
        //          dark: "#EFEFEF", // Almost white, for key texts and accents
        //          secondary: "#8FAAB5", // Muted blue, for serene highlights
        //          tertiary: "#97B1A6", // Soft green, echoing the light mode's balance
        //          highlight: "rgba(143,170,181,0.15)", // Muted blue highlight
        //        },


        ////Rustic Elegance
        //lightMode: {
        //  light: "#FDF6E3", // Creamy white, evoking natural light
        //  lightgray: "#E3E0DB", // Soft stone
        //  gray: "#C8BFB2", // Warm gray, like aged wood
        //  darkgray: "#857D75", // Deep stone gray
        //  dark: "#5E503F", // Rich soil
        //  secondary: "#DAA49A", // Terracotta, for accents
        //  tertiary: "#A8A087", // Sage green, for a touch of nature
        //  highlight: "rgba(218,164,154,0.2)", // Soft terracotta highlight
        //},
        //darkMode: {
        //  light: "#2E2D2A", // Deep night sky
        //  lightgray: "#504A43", // Smoky gray
        //  gray: "#736D65", // Moonlit stone
        //  darkgray: "#A9A295", // Faded parchment
        //  dark: "#D3CEC4", // Soft lunar glow
        //  secondary: "#B48A76", // Warm wood
        //  tertiary: "#9AA9A4", // Misty green, like dew on leaves
        //  highlight: "rgba(180,138,118,0.2)", // Warm wood highlight
        //},


        // default:
        // {
        //   lightMode: {
        //     light: "#faf8f8",
        //     lightgray: "#e5e5e5",
        //     gray: "#b8b8b8",
        //     darkgray: "#4e4e4e",
        //     dark: "#2b2b2b",
        //     secondary: "#284b63",
        //     tertiary: "#84a59d",
        //     highlight: "rgba(143, 159, 169, 0.15)",
        //   },
        //   darkMode: {
        //     light: "#161618",
        //     lightgray: "#393639",
        //     gray: "#646464",
        //     darkgray: "#d4d4d4",
        //     dark: "#ebebec",
        //     secondary: "#7b97aa",
        //     tertiary: "#84a59d",
        //     highlight: "rgba(143, 159, 169, 0.15)",
        //   },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
