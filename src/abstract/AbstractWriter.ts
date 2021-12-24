import { IWritable, IArticleFields } from '../interface'

export abstract class AbstractWriter implements IWritable {
    public abstract write(article: IArticleFields): string
}
