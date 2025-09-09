import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['var(--text-xs)', { lineHeight: '1.5' }],
        'sm': ['var(--text-sm)', { lineHeight: '1.5' }],
        'base': ['var(--text-base)', { lineHeight: '1.6' }],
        'lg': ['var(--text-lg)', { lineHeight: '1.6' }],
        'xl': ['var(--text-xl)', { lineHeight: '1.5' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.4' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '1.3' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '1.2' }],
        '5xl': ['var(--text-5xl)', { lineHeight: '1.1' }],
        '6xl': ['var(--text-6xl)', { lineHeight: '1' }],
      },
      spacing: {
        'px': 'var(--space-px)',
        '0': 'var(--space-0)',
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
        '32': 'var(--space-32)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
          variant: "hsl(var(--surface-variant))",
          glass: "hsl(var(--surface-glass))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glass: "hsl(var(--card-glass))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-mesh': 'var(--gradient-mesh)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'inner': 'var(--shadow-inner)',
        'glow-sm': 'var(--glow-sm)',
        'glow-md': 'var(--glow-md)',
        'glow-lg': 'var(--glow-lg)',
      },
      transitionTimingFunction: {
        'fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
        '600': '600ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
