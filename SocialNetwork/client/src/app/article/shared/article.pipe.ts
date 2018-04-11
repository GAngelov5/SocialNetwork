import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sliceArticleContent'})
export class ArticleContentPipe implements PipeTransform {
    transform(content: string): string {
        let article = content.split(". ");
        if (article.length > 3) {
            content = article.slice(0,3).join(". ");
            content += "..."
        }
        return content;
    }
}