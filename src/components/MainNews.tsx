import Image from 'next/image';
import Link from 'next/link';

type News = {
  id?: string;
  title: string;
  imageUrl: string;
  description?: string;
};

const MainNews = ({ news }: { news: News[] }) => {
  const firstNews = news[0];

  if (!firstNews) return null;

  return (
    <div className="card w-full overflow-hidden border border-gray-200 bg-base-100 shadow-sm">
      <figure>
        <Image
          height={600}
          width={100}
          src={firstNews.imageUrl}
          alt={firstNews.title}
          className="h-80 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl">{firstNews.title}</h2>

        {firstNews.description && (
          <p className="line-clamp-3 text-gray-600">{firstNews.description}</p>
        )}

        
      </div>
    </div>
  );
};

export default MainNews;
