import shreeMatajiInfo from '../json/shreeMatajiInformation';
import { useLanguage } from '../context/languageContext';
import { InfoImage, Paragraph, Title } from '../shared'

const AboutShreeMataji = () => {
  const { language } = useLanguage();
  const info = language === 'mar' ? shreeMatajiInfo.shreeMatajiInfoMar : shreeMatajiInfo.shreeMatajiInfoEng;

  return (
    <>
      <section className="p-2 md:p-4 lg:p-8 md:max-w-[1000px] my-20 mx-auto w-full border border-pink-50 shadow-2xl bg-pink-50" id={document.title}>
        {info.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between mb-10 mobile-flex ${i % 2 !== 0 ? 'flex-row-reverse' : null}`}
          >
            <div className="w-full lg:w-1/2">
              {item.heading.length >= 1 && (<Title customStyle={''} titleName={item.heading} devider={true} />)}
              {item.info.length >= 1 && (<Paragraph paragraphItem={item.info} customStyle={''} />)}
            </div>

            <div className="w-full lg:w-1/2 h-full">
              {item.img.length >= 1 && (
                <InfoImage imgSrc={item.img} />
              )}
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default AboutShreeMataji;
