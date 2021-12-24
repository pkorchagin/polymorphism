export interface IArticleFields {
    title: string
    author: string
    date: string
    category: number
}

export interface IWritable {
    write(article: IArticleFields): string
}
