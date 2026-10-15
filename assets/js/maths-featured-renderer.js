import { articles } from "./maths-featured.js";

const articleContainer = document.querySelector(".featuredArticles");
const articleTemplate = document.querySelector("#featuredArticleTemplate");

const sortedArticles = articles
    .filter((article) => Number.isFinite(article.position) && article.position > 0)
    .sort((a, b) => a.position - b.position);
const fragment = document.createDocumentFragment();

sortedArticles.forEach((article) => {
    const entry = articleTemplate.content.cloneNode(true);
    const link = entry.querySelector("h3 a");
    const description = entry.querySelector("p");

    link.textContent = article.title;
    link.href = article.url;
    description.textContent = article.descriptions;

    fragment.appendChild(entry);
});

articleContainer.replaceChildren(fragment);
