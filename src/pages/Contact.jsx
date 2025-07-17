import { useEffect } from "react";
import { Paragraph, Table, Title } from "../shared";
import contactItem from '../json/contactItem';
import { ContactContainer, SocialMediaContainer } from '../components';

const distComitee = [
  {
    name: 'Sau. Yamini Wandile',
    designation: 'District co-ordinator',
    contactNo: <a href="12345678900">12345678900</a>
  },
  {
    name: 'Sau. Rushikesh Koychade',
    designation: 'District Yuvashakti co-ordinator',
    contactNo: <a href="12345678900">12345678900</a>
  },
]

const comiteeTableHeade = ["Name", "Designation", "Contact No."]

const Contact = () => {
  useEffect(() => {
    console.log(contactItem)
    document.title = "Contact Us - Sahajyoga Yavatmal";
  }, [])

  return (
    <>
      <section className="p-4 md:p-8 max-w-[1000px] my-20 mx-auto w-full border border-pink-50 shadow-2xl" id={document.title}>
        <Title customStyle={''} titleName={'Note'} devider={true} />

        {/* note sectin  */}
        {contactItem.noteItem.map((items, i) =>
          <div key={i} className="gap-4 text-secondary grid grid-cols-1 lg:grid-cols-3 mt-6">
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.mar}</div>
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.hin}</div>
            <div className="w-full bg-pink-100 p-4 md:p-6 border rounded-xl">{items.eng}</div>
          </div>
        )}

        {/* contact section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          <div id="contact-add-section">
            <Title customStyle={'mt-4'} titleName={'Address'} devider={true} />
            <Paragraph customStyle={''} paragraphItem={contactItem.Address.Address}></Paragraph>
          </div>
          <div className="contact-no-email">
            <Title customStyle={'mt-4'} titleName={'Contact'} devider={true} />
            <ContactContainer customStyle={'flex items-center gap-2'} mainContainerStyle={'my-2'} />
            <SocialMediaContainer customStyle={'mt-4'} />
          </div>
        </div>

        {/* dist comitee section  */}
        <Title customStyle={'mt-8 w-full'} titleName={'District comitee'} devider={true} />
        <Table tHead={comiteeTableHeade} tBody={distComitee} customStyle={'mt-8'} />

        {/* google map  */}
        <Title customStyle={'mt-8 w-full'} titleName={'Yavatmal Sahajyoga Ashram Location'} devider={true} />
        <div className="w-full h-[400px] mt-12 max-w-[95%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.633384771787!2d78.07295160814117!3d20.32503133073662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e7a26c3ad13f%3A0xf1e005b6b1de537a!2sArjuna%2C%20Maharashtra%20445002!5e0!3m2!1sen!2sin!4v1752734804502!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </section>
    </>
  )
}

export default Contact
