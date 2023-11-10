import { Article } from '@/entities/Article'

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
  articleId: string;
  listArticles?: Array<Article>;
  page: string;
  limit: string;
  allPages: number | null;
  scrollNumber: number;
}
