import { IArticleFields, IWriter } from './interface'
import { AbstractWriter } from './abstract'

export default class JSONWriter extends AbstractWriter implements IWriter {
    public write(article: IArticleFields): string {
        return JSON.stringify({ article }, null, 4)
    }
}
