import { IArticleFields } from './article.interface'

export interface IWriter {
    write(article: IArticleFields): string
}
