import fs from 'fs'
import ru from '../src/languages/dictionary/ru'
import en from '../src/languages/dictionary/en'

function hoistKeys(dict: any, locale: any) {
  const dict2: any = {}
  for (const screen in dict) {
    for (const key in dict[screen]) {
      dict2[`${locale}.${screen}.${key}`] = dict[screen][key]
    }
  }
  return dict2
}

fs.writeFileSync(
  './src/languages/dictionary/ruJson.json',
  JSON.stringify(hoistKeys(ru, 'ru')),
)

fs.writeFileSync(
  './src/languages/dictionary/enJson.json',
  JSON.stringify(hoistKeys(en, 'en')),
)
