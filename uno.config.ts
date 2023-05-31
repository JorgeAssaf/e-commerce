

import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import { presetDaisy } from 'unocss-preset-daisy'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({


      themes: ['light'],

    }),
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
