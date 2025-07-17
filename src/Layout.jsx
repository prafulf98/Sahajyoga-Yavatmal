import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <main className='w-full flex items-center justify-center bg-gray-50'>
        <div className="w-full max-w-screen-xl min-h-[70vh]">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
