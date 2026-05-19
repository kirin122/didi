export interface CardItem {
  id: string
  badge: string | null
  title: string
  description: string
  thumbnail: string
  duration: string
  isLocked: boolean
  tags: string[]
  stats: {
    likes: number
    favorites: number
    views: number
  }
}