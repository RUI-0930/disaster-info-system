import Link from "next/link";

export default function TopNav() {
  return (
    <div className="bg-teal-700 text-white text-sm p-2 flex justify-between px-6 items-center">
      <Link href="/">
        <h1 className="text-black font-bold text-3xl cursor-pointer hover:text-blue-600 transition-colors duration-300">
          ROC
        </h1>
      </Link>

      <div className="hidden md:flex space-x-2">
        <a href="#">網站導覽</a> /
        <a href="/">回首頁</a> /
        <a href="#">意見信箱</a> /
        <a href="#">常見問答</a> /
        <a href="#">English</a>
      </div>

      <div className="flex items-right space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-l px-3 py-1 text-sm"
        />
        <button className="bg-gray-300 px-3 py-1 rounded-r">🔍</button>
      </div>

      <Link
        href="/login"
        className="ml-4 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition"
      >
        登入
      </Link>
    </div>
  );
}
