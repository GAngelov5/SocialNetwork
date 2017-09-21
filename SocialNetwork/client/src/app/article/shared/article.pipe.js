var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var ArticleContentPipe = (function () {
    function ArticleContentPipe() {
    }
    ArticleContentPipe.prototype.transform = function (content) {
        var article = content.split(". ");
        if (article.length > 3) {
            content = article.slice(0, 3).join(". ");
            content += "...";
        }
        return content;
    };
    return ArticleContentPipe;
}());
ArticleContentPipe = __decorate([
    Pipe({ name: 'sliceArticleContent' })
], ArticleContentPipe);
export { ArticleContentPipe };
//# sourceMappingURL=article.pipe.js.map