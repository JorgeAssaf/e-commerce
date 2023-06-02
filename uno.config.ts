import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetDaisy } from 'unocss-preset-daisy'

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
        sans: ['Satoshi', 'Satoshi:400,500,700,900'],
        mono: ['Satoshi', 'Satoshi:400,500,700,900'],
      },
    }),
  ],
})
