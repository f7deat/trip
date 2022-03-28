import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { queryAmenities } from '../api/amenities'
import { queryRooms } from '../api/rooms'
import Footer from '../components/layout/footer'
import Sidebar from '../components/layout/sidebar'
import Rooms from '../components/rooms'

export const getServerSideProps: GetServerSideProps = async () => {
  const amenities = await queryAmenities();
  const rooms = await queryRooms({
    page: 1
  });
  return {
    props: {
        amenities: amenities.data.data,
        rooms: rooms.data.data
    }
  }
}

const Home: NextPage = ({ amenities, rooms }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="root">
      <Head>
        <title>Những chuyến vi vu bất tận cùng trip.defzone.net</title>
        <meta name="description" content="Đặt phòng, homestay, căn hộ studio đi du lịch, nghỉ dưỡng trên cả nước" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='mb-4'>
        <nav className="shadow mb-3 z-10 bg-white inset-x-0 top-0">
          <div className="container flex h-16 items-center">
            <Link href="/" passHref>
              <div className="font-bold text-xl px-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span className="text-green-500">Trip.</span>DefZone.Net
              </div>
            </Link>
            <div className="flex-grow md:hidden flex justify-end">
              <button type="button" className="py-4 px-6">
                <i className="fas fa-bars" />
              </button>
            </div>
            <div id="sidebar" className="transform -translate-x-full md:translate-x-0 w-64 z-10">
              <ul className="flex flex-grow font-medium list-none p-0 m-0 flex-col md:flex-row">
                <li className="nav-item dropdown">
                  <button className="text-gray-700 px-4 h-16 w-full flex items-center justify-between font-medium navbar-action" type="button" id="dropdownMenuWatch" data-bs-toggle="dropdown" aria-expanded="false">
                    <div><i className="fa fa-film mr-2" /> Xem gì</div><i className="fas fa-angle-down ml-2" />
                  </button>
                  <div className="shadow z-10 min-w-full md:min-w-64 dropdown-menu bg-white" aria-labelledby="dropdownMenuWatch">
                    <a className="py-2 px-4 hover:bg-gray-200 flex items-center text-gray-800 flex" href="/videos"><i className="fas fa-caret-right mr-2" />Video</a>
                    <a className="py-2 px-4 hover:bg-gray-200 flex items-center text-gray-800 flex" href="/albums"><i className="fas fa-caret-right mr-2" />Albums</a>
                    <a className="py-2 px-4 hover:bg-gray-200 flex items-center text-gray-800 flex" href="/trip/bookings"><i className="fas fa-caret-right mr-2" />Ăn chơi</a>
                  </div>
                </li>
                <li className="navbar-item">
                  <a className="text-gray-700 flex items-center px-4 h-16" href="/game"><i className="fas fa-gamepad mr-2" /> Game</a>
                </li>
                <li className="navbar-item">
                  <a className="text-gray-700 flex items-center px-4 h-16" href="/blogs">
                    <i className="fas fa-rss mr-2" />Blog
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="text-gray-700 flex items-center px-4 h-16" href="/shop">
                    <i className="fas fa-cart-plus mr-2" />Shop
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="text-gray-700 flex items-center px-4 h-16" href="/news"><i className="fas fa-newspaper mr-2" /> Tin tức</a>
                </li>
              </ul>
              <ul className="flex list-none px-2 m-0">
                <li className="p-2">
                  <button type="button" id="search-button"><i className="fa fa-search" /> Tìm kiếm</button>
                  <form className="hidden flex items-center" id="search-form" action="/search/index" method="get">
                    <input className="mr-2 border py-2 px-3 rounded w-32 md:w-auto" type="text" placeholder="Nhập từ khóa" aria-label="Search" name="searchTerm" />
                    <button className="border rounded border-blue-600 flex w-10 h-10 items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600 mr-2" type="submit"><i className="fa fa-search" /></button>
                    <button className="border rounded border-red-600 flex w-10 h-10 items-center justify-center text-red-600 hover:text-white hover:bg-red-600" type="button"><i className="fa fa-times" /></button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className='container flex gap-4'>
        <main className='md:w-2/3'>
          <Rooms dataSource={rooms}/>
        </main>
        <Sidebar data={amenities} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
