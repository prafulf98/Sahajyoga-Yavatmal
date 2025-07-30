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
      <div id={document.title}>
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
          <div className="max-w-3xl mx-auto p-2 sm:p-4 md:p-8">
            <CenterInformation />
          </div>
        </div>
      </div>
    </>
  )
}

export default Center
