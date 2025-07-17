import { Paragraph, SubTitle, Title, InfoImage } from '../shared';

const Home = () => {
  return (
    <section id='sec-1' className="w-full">
      <img
        src="https://meditationvancouver.wordpress.com/wp-content/uploads/2015/04/banner9.jpg?w=1024&h=303"
        alt="display-img"
        className="w-full"
      />

      <section id='sec-2' className="custom-grid p-6 px-24 py-12 items-stretch">
        <div className="h-full">
          <Title titleName={"Demo title"} />
          <SubTitle subTitleName={"Demo sub title"} />
          <Paragraph paragraphItem={"paragraph"} />
        </div>
        <div className="h-full">
          <InfoImage imgSrc="https://static.wixstatic.com/media/b7207a_d687894044c64a15bf54acb04cfe9fde~mv2.jpg/v1/fill/w_576,h_749,al_c,lg_1,q_85,enc_avif,quality_auto/b7207a_d687894044c64a15bf54acb04cfe9fde~mv2.jpg" />
        </div>
      </section>


      <section id='sec-2' className="custom-grid p-6 px-24 py-12 items-stretch">
        <div className="h-full">
          <Title titleName={"Demo 2"} />
          <SubTitle subTitleName={"This is demo acc for nothing"} />
          <Paragraph paragraphItem={"This is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothingThis is demo acc for nothing"} />
        </div>
        <div className="h-full">
          <InfoImage imgSrc="https://www.pratishthanpune.in/wp-content/uploads/2023/07/shri-mataji-as-a-young-child.webp" />
        </div>
      </section>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/fwKd9hUtc4w?si=FAYdSilV-yMtwBg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </section>
  );
};

export default Home;
