const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-fira)']
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      typography: (theme:any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.300"),
            letterSpacing: "-0.01em",
            a: {
              color: theme("colors.green.500"),
              transition: "color 0.2s ease",
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.semibold"),
              letterSpacing: "-0.02em",
              color: theme("colors.slate.200")
            },
            "h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
              color: "inherit",
              textDecoration: "inherit",
              "&::after": {
                visibility: "hidden",
                marginLeft: "0.5rem",
                fontSize: "1.5rem",
                content: '"#"',
              },
              "&:hover": {
                color: "inherit",
                "&::after": {
                  visibility: "visible",
                },
              },
              "&:focus": {
                outline: "none",
                "&::after": {
                  visibility: "visible",
                },
              },
            },
            pre: {
              padding: theme("spacing.6"),
              backgroundColor: theme("colors.neutral.900"),
            },
            ":not(pre) > code": {
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              backgroundColor: theme("colors.neutral.200"),
              color: "inherit",
              fontWeight: "inherit",
              "&::before, &::after": {
                content: '""',
              },
            },
            table: {
              display: "block",
              overflowX: "auto",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.neutral.400"),
            ":not(pre) > code": {
              backgroundColor: theme("colors.neutral.800"),
            },
          },
        },
      }),
      
    },
  },
  plugins: [
    typography,
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
