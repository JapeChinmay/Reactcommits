import { useRouter } from "next/Router";

function Detail() {
  const router = useRouter();

  const newsId = router.query.newsId;
  // POST METHOD FOR BACKEND USING NEWSID to fetch specific news

  return <h1>Detailed news page</h1>;
}

export default Detail;
