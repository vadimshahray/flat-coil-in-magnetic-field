import { i18n } from './translateMethods'
import { useSelector } from 'react-redux'
import { selectUserLanguage } from '@selectors'

export function useTranslate<T extends DictMainProps>(screen: T) {
  useSelector(selectUserLanguage)

  return (translateKey: LangDictKeys<T>, config?: any) => {
    return i18n.t(`${screen}.${String(translateKey)}`, config)
  }
}
