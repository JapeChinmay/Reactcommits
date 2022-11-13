import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1> All News </h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-greate-framework">
            Next js is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/demo-article">Demo Article</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
