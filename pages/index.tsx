import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { queryAmenities, queryPropertyTypes } from '../api/collections'
import { queryRooms } from '../api/rooms'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import Rooms from '../components/rooms'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const amenities = await queryAmenities();
  const rooms = await queryRooms({
    page: context.query['page'] || 1,
    limit: 10,
    sid: context.query['sid'],
    property_type: context.query['property_type']
  });
  const propertyTypes = await queryPropertyTypes();
  return {
    props: {
      amenities: amenities.data.data,
      rooms: rooms.data,
      propertyTypes: propertyTypes.data.data
    }
  }
}

const Home: NextPage = ({ amenities, rooms, propertyTypes }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="root">
      <Head>
        <title>Những chuyến vi vu bất tận cùng trip.defzone.net</title>
        <meta name="description" content="Đặt phòng, homestay, căn hộ studio đi du lịch, nghỉ dưỡng trên cả nước" />
        <meta name="zalo-platform-site-verification" content="JjQK5vhhCJL2-QigdSi1DNlSZpcNhbjlD3a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='container px-2 md:px-0 md:flex gap-4'>
        <main className='md:w-2/3'>
          <Rooms dataSource={rooms} />
        </main>
        <aside className='md:w-1/3'>
          <Sidebar amenities={amenities} propertyTypes={propertyTypes} />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Home
