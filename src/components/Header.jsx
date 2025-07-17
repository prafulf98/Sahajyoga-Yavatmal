import { Link } from "react-router-dom"
import { FaAngleDown, FaAngleUp, GrLogin } from "../shared/icons"
import { Logo, Heading, ContactContainer } from '../components';
import navList from '../json/navbar'
import { useState } from "react";

const Header = () => {

  const [togglePopup, settogglePopup] = useState(false);

  const toggleNavItems = () => {
    settogglePopup(!togglePopup);
  }

  return (
    <>
      <header className="bg-primary pt-3">
        <nav className="flex items-center w-full max-w-screen-xl gap-6 mx-auto ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
          </Link>
          <div className="w-full">
            <div className="flex items-center justify-between w-full px-5 pb-3">
              <div className="text-primary"><Heading /></div>
              <div className="gap-5 flex items-center justify-center me-6">
                <ContactContainer mainContainerStyle={'text-primary'} />
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full gap-10 mx-auto p-4 bg-primary border-t border-gray-200 dark:bg-teal-900 text-primary">
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div className="hidden w-full md:block md:w-full" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row space-x-2 md:mt-0 md:border-0 md:justify-between w-full">
                  {
                    navList.map((item, i) =>
                      <div key={i}>
                        <li className="flex items-center">
                          <Link
                            to={item.navRoute}
                            className="block py-2 px-3 relative"
                          >
                            {item.name}
                          </Link>
                          {item.toggleBtn ?
                            <button onClick={toggleNavItems}>{!togglePopup ? <FaAngleDown /> : <FaAngleUp />}</button>
                            :
                            null}
                          {
                            item.aboutItems && togglePopup && (
                              <div className="absolute top-32 w-52 bg-pink-100 text-secondary border-primary rounded-sm">
                                {
                                  item.aboutItems.map((aboutI) => (
                                    <div key={aboutI.id}>
                                      <Link to={aboutI.navRoute} className="block py-2 px-3">
                                        {aboutI.name}
                                      </Link>
                                    </div>
                                  ))
                                }
                              </div>
                            )
                          }

                        </li>
                      </div>
                    )
                  }
                  <li>
                    {/* <Link
                      to='/login'
                      className=" py-2 px-3 flex items-center gap-2"
                    >
                      Login <GrLogin />
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
