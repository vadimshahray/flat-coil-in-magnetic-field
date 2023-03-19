export const getStorageItem = (item: StorageItem) => localStorage.getItem(item)

export const setStorageItem = (item: StorageItem, value: string) =>
  localStorage.setItem(item, value)
