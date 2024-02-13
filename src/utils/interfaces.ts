type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt'

export interface Item {
  id: number
  deleted: boolean
  type: ItemType
  by: string
  time: number // Unix Time
  text?: string // HTML
  dead: boolean
  parent?: number // Either another comment's id or the relevant story's id
  poll?: number // Pollopt's associated poll id
  kids?: number[] // The ids of the item's comments, in ranked display order
  url?: string // URL of the story
  score?: number // The story's score or the votes for a pollopt
  title?: string // The title of the story, poll, or job (HTML)
  parts?: number[] // A list of related pollopts, in display order
  descendants?: number // In the case of stories or polls, the total comment count
}
