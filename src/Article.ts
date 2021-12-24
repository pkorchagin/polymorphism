import { IArticleFields } from './interface'
import { AbstractArticle, AbstractWriter } from './abstract'

class Article extends AbstractArticle {
    public constructor(article: IArticleFields) {
        super(article)
    }

    public write(writer: AbstractWriter): string {
        return writer.write(this.article)
    }
}

export default Article
