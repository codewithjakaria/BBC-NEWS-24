import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const section = data.data;
  const mainNews = section?.[0]?.articles ?? [];

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
              {mainNews
                .slice(1, 6)
                .map((item: { id?: string; title: string }, index: number) => (
                  <div
                    key={item.id ?? index}
                    className="border-b border-gray-200 pb-3"
                  >
                    <span className="text-sm font-semibold text-red-700">
                      প্রধান খবর
                    </span>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-green-700 lg:col-span-1"></div>
      </div>
    </div>
  );
}
