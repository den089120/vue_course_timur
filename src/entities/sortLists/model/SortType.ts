import { ArticleType } from '@/entities/Article/model/articleTypes/article'

export const SortType: Record<string, string> = {
  All: 'All',
  IT: ArticleType.IT,
  SCIENCE: ArticleType.SCIENCE,
  ECONOMICS: ArticleType.ECONOMICS
}
