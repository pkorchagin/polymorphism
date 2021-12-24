import type { IArticleFields, IWriter } from './interface'
import Article from './Article'
import { AbstractWriter } from './abstract'
import XMLWriter from './XMLWriter'
import JSONWriter from './JSONWriter'

interface Writer<T extends AbstractWriter> {
    new (): T
}

const writers: { [key: string]: Writer<AbstractWriter> } = {
    JSON: JSONWriter,
    XML: XMLWriter,
}

class Factory {
    public static getWriter(): IWriter {
        const format =
            process.env?.WRITE_TYPE ||
            ['XML', 'JSON'][Math.round(Math.random())]
        const writer = new writers[format]()
        if (writer instanceof AbstractWriter) {
            return writer
        } else {
            throw new Error('Unsupported format')
        }
    }
}

const data: IArticleFields = {
    title: 'Polymorphism',
    author: 'Philip',
    date: new Date(Date.now()).toTimeString(),
    category: 0,
}

const article = new Article(data)
let writer

try {
    writer = Factory.getWriter()
} catch (error: any) {
    console.error(error.message)
    writer = new XMLWriter()
}

console.log(article.write(writer))
