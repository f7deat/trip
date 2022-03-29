import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { queryAmenities } from '../api/amenities'
import { queryRooms } from '../api/rooms'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='container flex gap-4'>
        <main className='md:w-2/3'>
          <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2 mb-1">Bạn muốn đi đâu?</div>
          <Rooms dataSource={rooms} />
        </main>
        <Sidebar data={amenities} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
