import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import NewsCard from '@/components/newsCard';

type Article = {
  id?: string;
  title: string;
  imageUrl?: string;
  description?: string;
  firstPublished?: string | null;
  type?: string;
};

type Section = {
  title: string;
  articles?: Article[];
};

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections: Section[] = data.data ?? [];

  const mainNews = sections[0]?.articles ?? [];

  const otherNews = sections
    .slice(1)
    .filter(section =>
      section.articles?.some(article => article.type !== 'link'),
    );

  return (
    <div className="font-bengali">
      <Marquee />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <MainNews news={mainNews} />
            </div>

            <div className="flex flex-col gap-4">
              {mainNews.slice(1, 6).map(article => (
                <div key={article.id} className="border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-red-700">
                    প্রধান খবর
                  </span>
                  <h3 className="text-lg font-medium">{article.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {otherNews.map(section => (
              <div key={section.title} className="mb-10">
                <h2 className="border-b-2 border-red-700 pb-2 text-xl font-bold">
                  {section.title}
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.articles?.map(article => (
                    <NewsCard
                      key={article.id}
                      news={article}
                      category={section.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-700 lg:col-span-1"></div>
      </div>
    </div>
  );
}
