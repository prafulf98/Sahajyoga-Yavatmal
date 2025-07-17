import { useNavigate } from 'react-router-dom'
import centerList from '../json/centerList'
import { SubTitle, Title } from '../shared'
import CenterInformation from './CenterInformation'
import { useEffect } from 'react'

const Center = () => {
  const navigate = useNavigate()

  const handleClick = (taluka) => {
    navigate(`/centers/${taluka}`)
  }

  useEffect(() => {
    document.title = "Our centers - Sahajyoga Yavatmal";
  }, [])
  

  return (
    <>
      <section className="py-4 md:py-8 max-w-[1000px] my-20 mx-auto w-full border border-pink-50 shadow-2xl" id={document.title}>
        <Title customStyle={'text-center justify-center'} titleName={'Center list and details'} />
        <div className="w-full mx-auto">

          <div className="flex items-center flex-wrap space-x-6 mt-6 border-pink-100 border-b-2 bg-primary px-4">
            {centerList.map((item, i) =>
              <button
                key={i}
                onClick={() => handleClick(item.taluka)}
                className="mb-4 cursor-pointer text-primary"
              >
                <SubTitle subTitleName={item.taluka} customStyle={'text-primary font-semibold '} />
              </button>
            )}
          </div>
          <div className="max-w-3xl mx-auto">
            <CenterInformation />
          </div>
        </div>
      </section>
    </>
  )
}

export default Center
