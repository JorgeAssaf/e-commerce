

import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      // use axios with an https proxy
      provider: 'fontshare',
      fonts: {
        sans: 'Satoshi',
        mono: ['Satoshi', 'Satoshi:400,700'],
      },
    }),
  ] as any,
})
