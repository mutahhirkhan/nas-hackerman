import { Item } from '@src/utils/interfaces'
import { SwitchConstants } from './switcher/switcherConstants'
import { LoadPastArticlesConstants } from './loadPast/loadPastConstants'
import { LoadNewArticlesConstants } from './loadNew/loadNewConstants'

export type SwitchReducer = {
  switchValue: boolean
  searchQuery: string
}

export type SwitchActions = {
  type: SwitchConstants // #type of constants in switcherConstants
  payload?: string
}

export type PastArticlesReducer = {
  articles?: Partial<Item>[]
  loading?: boolean
  counter?: number
}
export type PastArticlesActions = {
  type: LoadPastArticlesConstants
  payload: PastArticlesReducer
}

export type NewArticlesReducer = {
  articles?: Partial<Item>[]
  loading?: boolean
  counter?: number
}

export type NewArticlesActions = {
  type: LoadNewArticlesConstants
  payload: NewArticlesReducer
}
