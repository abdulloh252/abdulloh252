import ArticleList from "@/components/ArticleList";

async function getData() {
  const req = await fetch("http://localhost:2255/articles");
  const data = await req.json();

  return data;
}
async function Articles() {
  const articles = await getData();
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Articles;
