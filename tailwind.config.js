module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            'sans': ['Noto Sans']
        },
        extend: {},
    },
    plugins: [
        require('daisyui'),
        require("@tailwindcss/typography")
    ],
    daisyui: {
        styled: true,
        // TODO: Theme needs works
        themes: [
            {
                'portfolio': {                          /* your theme name */
                    fontFamily: {
                        display: ['PT Mono, monospace'],
                        body: ['Inter, sans-serif'],
                    },
                    'primary': '#8332AC',           /* Primary color */

                    'secondary': '#EF8275',         /* Secondary color */

                    'aquamarine': '#5DD39E',
                },
            },
            // backup themes:
            // 'dark',
            // 'synthwave'
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
}