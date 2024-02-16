import { Link } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";

export const Navbars = () => {
  return (
    <header className=" flex w-full   h-[60px] px-4 justify-between items-center fixed bg-opacity-50 bg-[#000000BF] top-0 z-50">
      <NextTopLoader color="#FBFC05" />
      <div className="flex">
        <img
          className="h-[44px] mr-6"
          src="https://www.takapedia.com/_next/image?url=https%3A%2F%2Fcdn.takapedia.com%2Fmeta%2Flogo-1-83168561.png&w=384&q=75"
          alt=""
        />
        <div className="flex justify-between items-center text-white font-semibold px-4">
          <Link to="/" className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
            <div className="ml-2">Beranda</div>
          </Link>

          <Link to="/invoices" className="flex items-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
            <div className="ml-2">Cek Transaksi</div>
          </Link>

          <Link to="/gift-skin" className="flex items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
            </svg>
            <div className="ml-2">Gift Skin</div>
          </Link>

          <Link to="/calculator" className="flex items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path>
            </svg>
            <div className="ml-2">Kalkulator</div>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex items-center border border-gray-200 text-white pr-3 py-1 rounded-md font-semibold mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 lg:h-5 lg:w-5 mx-2"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
          Search
        </button>

        <button className="flex items-center text-white px-2 py-3  font-semibold ">
          ID
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"></path>
          </svg>
        </button>

        <button className="px-4 py-2 text-white font-semibold ">Masuk</button>
        <button className="px-4 py-[6px] bg-[#FBFC05] text-[#E5E7EB] rounded-md font-semibold ml-2">
          Daftar
        </button>
      </div>
    </header>
  );
};
