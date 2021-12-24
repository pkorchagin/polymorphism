import { IWriter, IArticleFields } from './interface'
import { AbstractWriter } from './abstract'

class XMLWriter extends AbstractWriter implements IWriter {
    public write(article: IArticleFields): string {
        const { title, author, date, category } = article
        return `<article>\n\t<title>${title}</title>\n\t<author>${author}</author>\n\t<date>${date}</date>\n\t<category>${category}</category>\n</article>\n`
    }
}

export default XMLWriter
