import Link from 'next/link';
import GoogleMap from './components/GoogleMap';

export default function Home(){
    const features = [
        {
          icon: '📍',
          title: '地圖瀏覽',
          description: '查看監視器與即時災情標記位置',
          link: '/map',
        },
        {
          icon: '📷',
          title: '我要通報',
          description: '通報現場災情，協助其他人了解狀況',
          link: '/report',
        },
        {
          icon: '🔒',
          title: '登入/註冊',
          description: '進入會員功能與後台管理',
          link: '/login',
        },
      ];
    return(
    <>
        <section
            className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/1...jpeg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">防災資訊平台</h1>
            <p className="text-base md:text-lg">即時掌握災情，守護你的安全</p>
            </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10 bg-gray-100">
            {features.map((feature, index) => (
            <Link
            key={index}
            href={feature.link}
            className="bg-white shadow-lg rounded-2xl p-6 hover:bg-teal-50 transition-all border border-gray-200"
            >
            <div className="text-3xl">{feature.icon}</div>
            <h2 className="text-xl font-bold mt-3">{feature.title}</h2>
            <p className="text-gray-600 mt-1">{feature.description}</p>
            </Link>
        ))}
        </section>

        <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-teal-700">
            即時掌握災害資訊
          </h2>
          <p className="text-gray-600 mb-10">
            整合AI分析與監視器影像，提供您最新的災情警報與資訊。
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">即時地圖</h3>
              <p className="text-gray-600 text-sm">透過地圖查看最新災情地點。</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-2">災害通報</h3>
              <p className="text-gray-600 text-sm">手機拍照回報災害現場。</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">志工管理</h3>
              <p className="text-gray-600 text-sm">志工審核與資料協助處理。</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">資料分析</h3>
              <p className="text-gray-600 text-sm">AI資料統整與統計分析。</p>
            </div>
          </div>
        </div>
      </section>
        <GoogleMap/>
    </>
    )
}