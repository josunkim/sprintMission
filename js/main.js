import { article } from "../api/ArticleService.js";
import { product } from "../api/ProductService.js";

console.log(await product.getProduct(16));
console.log(await product.getProductList());
console.log(await product.createProduct(16));
console.log(await product.deleteProduct(16));
console.log(await product.patchProduct(16));

console.log(await article.getArticleList());
console.log(await article.getArticle(120));
console.log(await article.createArticle());
console.log(await article.patchArticle());
console.log(await article.deleteArticle(120));
