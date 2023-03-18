type Languages = 'ru' | 'en'

/**
 * Интерфейс словаря для любого из языков
 * @interface ISchema
 */
type ISchema = typeof import('@languages').ru

/**
 * Интерфейс ключей словаря для любого из языков
 * @interface DictMainProps
 */
type DictMainProps = keyof ISchema

/**
 * Интерфейс значений словаря для конкретного ключа
 * @interface LangDictKeys
 */
type LangDictKeys<T extends DictMainProps> = keyof ISchema[T]
