import React from "react";

function Article({ params }) {
  console.log(params.articleId);
  return (
    <div>
      <h1>Hello Article</h1>
    </div>
  );
}

export default Article;
