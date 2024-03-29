import tailwindAnimate from "tailwindcss-animate"
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "separate-sm": "4px 4px 0 0 rgba(0, 0, 0, 0.2)",
      },

      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },

      colors: {
        main: "var(--clr-main)",
        bg: "var(--clr-bg)",
        text: "var(--clr-text)",

        "shade-0": "var(--clr-shade-0)",
        "shade-100": "var(--clr-shade-100)",
        "shade-200": "var(--clr-shade-200)",
        "shade-300": "var(--clr-shade-300)",
        "shade-400": "var(--clr-shade-400)",
        "shade-500": "var(--clr-shade-500)",
        "shade-600": "var(--clr-shade-600)",
        "shade-700": "var(--clr-shade-700)",
        "shade-800": "var(--clr-shade-800)",
        "shade-900": "var(--clr-shade-900)",

        "primary-100": "var(--clr-primary-100)",
        "primary-200": "var(--clr-primary-200)",
        "primary-300": "var(--clr-primary-300)",
        "primary-400": "var(--clr-primary-400)",
        "primary-500": "var(--clr-primary-500)",
        "primary-600": "var(--clr-primary-600)",
        "primary-700": "var(--clr-primary-700)",
        "primary-800": "var(--clr-primary-800)",
        "primary-900": "var(--clr-primary-900)",

        "success-100": "var(--clr-success-100)",
        "success-200": "var(--clr-success-200)",
        "success-300": "var(--clr-success-300)",
        "success-400": "var(--clr-success-400)",
        "success-500": "var(--clr-success-500)",
        "success-600": "var(--clr-success-600)",
        "success-700": "var(--clr-success-700)",
        "success-800": "var(--clr-success-800)",
        "success-900": "var(--clr-success-900)",

        "info-100": "var(--clr-info-100)",
        "info-200": "var(--clr-info-200)",
        "info-300": "var(--clr-info-300)",
        "info-400": "var(--clr-info-400)",
        "info-500": "var(--clr-info-500)",
        "info-600": "var(--clr-info-600)",
        "info-700": "var(--clr-info-700)",
        "info-800": "var(--clr-info-800)",
        "info-900": "var(--clr-info-900)",

        "warning-100": "var(--clr-warning-100)",
        "warning-200": "var(--clr-warning-200)",
        "warning-300": "var(--clr-warning-300)",
        "warning-400": "var(--clr-warning-400)",
        "warning-500": "var(--clr-warning-500)",
        "warning-600": "var(--clr-warning-600)",
        "warning-700": "var(--clr-warning-700)",
        "warning-800": "var(--clr-warning-800)",
        "warning-900": "var(--clr-warning-900)",

        "danger-100": "var(--clr-danger-100)",
        "danger-200": "var(--clr-danger-200)",
        "danger-300": "var(--clr-danger-300)",
        "danger-400": "var(--clr-danger-400)",
        "danger-500": "var(--clr-danger-500)",
        "danger-600": "var(--clr-danger-600)",
        "danger-700": "var(--clr-danger-700)",
        "danger-800": "var(--clr-danger-800)",
        "danger-900": "var(--clr-danger-900)",

        // social
        facebook: "#3b5999",
        messenger: "#0084ff",
        github: "#fafbfc",
        twitter: "#55acee",
        linkedin: "#0077b5",
        skype: "#00aff0",
        dropbox: "#007ee5",
        wordpress: "#21759b",
        vimeo: "#1ab7ea",
        slideshare: "#0077b5",
        vk: "#4c75a3",
        tumblr: "#34465d",
        yahoo: "#410093",
        "google-plus": "#dd4b39",
        pinterest: "#bd081c",
        youtube: "#cd201f",
        stumbleupon: "#eb4924",
        reddit: "#ff5700",
        quora: "#b92b27",
        yelp: "#af0606",
        weibo: "#df2029",
        producthunt: "#da552f",
        hackernews: "#ff6600",
        soundcloud: "#ff3300",
        blogger: "#f57d00",
        whatsapp: "#25d366",
        wechat: "#09b83e",
        line: "#00c300",
        medium: "#02b875",
        vine: "#00b489",
        slack: "#3aaf85",
        instagram: "#e4405f",
        dribbble: "#ea4c89",
        flickr: "#ff0084",
        foursquare: "#f94877",
        behance: "#131418",
        snapchat: "#fffc00",
      },
    },
  },
  plugins: [tailwindAnimate],
}
