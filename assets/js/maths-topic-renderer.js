import { articles } from "./maths-featured.js";

const articleContainer = document.querySelector(".wander[data-topic]");
const articleTemplate = document.querySelector("#topicArticleTemplate");

const topicArticles = articles.filter(
    (article) => article.section === articleContainer.dataset.topic
);
const fragment = document.createDocumentFragment();

topicArticles.forEach((article) => {
    const entry = articleTemplate.content.cloneNode(true);
    const link = entry.querySelector("h3 a");
    const description = entry.querySelector("p");

    link.textContent = article.title;
    link.href = article.url;
    description.textContent = article.descriptions;

    fragment.appendChild(entry);
});

articleContainer.replaceChildren(fragment);
