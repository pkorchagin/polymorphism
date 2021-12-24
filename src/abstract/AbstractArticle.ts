import { IArticleFields, IWriter } from '../interface'

export abstract class AbstractArticle {
    public article: IArticleFields

    protected constructor(article: IArticleFields) {
        this.article = article
    }

    public abstract write(writer: IWriter): string
}
