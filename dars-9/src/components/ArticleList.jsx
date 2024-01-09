import React from "react";
import Link from "next/link";

function ArticleList({ articles }) {
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <div className="flex justify-between items-center mb-[30px]  gap-8">
                <div>
                  <h1>{article.title}</h1>
                  <h3>{article.author}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione ex ea rerum eligendi culpa at perferendis vel
                    provident, nobis, autem mollitia. Repellendus aliquid
                    possimus placeat modi delectus aperiam earum doloremque
                    omnis recusandae ut ratione, dolores quos repudiandae dolore
                    assumenda tempora, architecto, maxime aliquam nobis illum.
                    Ratione sint quod obcaecati similique illum et, inventore
                    dignissimos. A, accusamus ipsum? Aut, commodi consequuntur
                  </p>
                  <Link className="btn glass" href={`/articles/${article.id}`}>Read More</Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
