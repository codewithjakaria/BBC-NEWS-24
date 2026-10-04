import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';
interface Marquee{
  id: string,
  title:string
}
const Marquee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
  const data = await res.json();
  console.log(data);
  const filterMarquee:Marquee[] = data.data;
  console.log(filterMarquee);
  return (
    <div className='bg-red-700 text-white'>
      <div className= " flex items-center max-w-7xl mx-auto">
        <div className="bg-red-800 text-white py-3 px-2 font-bold">সর্বশেষ</div>
        <MarqueeText direction="right" duration={15} className="py-2">
          {filterMarquee.map(h => (
            <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-7">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
