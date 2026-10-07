import Image from 'next/image';
import Link from 'next/link';

type Article = {
  id?: string;
  title: string;
  imageUrl?: string;
  description?: string;
  publishedAt?: string;
};

type NewsCardProps = {
  news: Article;
  category?: string;
};

export default function NewsCard({ news, category }: NewsCardProps) {
  return (
    <Link
      href={`/article/${news.id}`}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-red-300 hover:shadow-md"
    >
      {news.imageUrl && (
        <Image
          height={400}
          width={600}
          src={news.imageUrl}
          alt={news.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        {category && (
          <span className="text-sm font-semibold text-red-700">{category}</span>
        )}

        <h3 className="line-clamp-3 text-lg font-semibold">{news.title}</h3>

        {news.description && (
          <p className="line-clamp-2 text-sm text-gray-600">
            {news.description}
          </p>
        )}

        {news.publishedAt && (
          <p className="mt-auto pt-2 text-xs text-gray-400">
            {news.publishedAt}
          </p>
        )}
      </div>
    </Link>
  );
}
