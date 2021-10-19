module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    },
  },
  theme: {
    extend: {
      darkMode: 'class',
      spacing: {
        80: '20rem',
        108: '27rem',
      },
      borderWidth: {
        14: '14px',
      },
      width: {
        '1/7': '17.2857143%',
        '2/7': '25.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
    container: {
      padding: '1rem',
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      primary: {
        50: '#e9faf8',
        100: '#bdf6f0',
        200: '#8feee4',
        300: '#61eee0',
        400: '#28e2d0',
        500: '#03dac6',
        600: '#01aa99',
        700: '#00665d',
        800: '#013e39',
        900: '#012421',
      },

      secondary: {
        50: '#faebf0',
        100: '#fce2eb',
        200: '#fdd6e3',
        300: '#fac1d4',
        400: '#f5aac3',
        500: '#f49bb9',
        600: '#dc6a91',
        700: '#d7517f',
        800: '#d5376d',
        900: '#ac0f44',
      },

      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Ubuntu',
        'Cantarell',
        'Noto Sans',
        'sans-serif',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Arial',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
}
