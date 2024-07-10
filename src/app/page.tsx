import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div className="p-2 sm:p-6 md:p:12 lg:p-20 text-4xl text-center space-y-8">
      <h1>hey, we no longer use this domain, please go to:</h1>
      <div>
        <a href="http://poiseugm.com" target="iframe"
          className="w-full text-blue-700"> <b>Poiseugm.com</b> </a>
      </div>
    </div>
  );
}
