import React, { useEffect } from 'react'
import donationItem from '../json/donation'
import { KeyValueList, Paragraph, SubTitle, Title } from '../shared'

const Donation = () => {

  useEffect(() => {
    document.title = "Donation - Sahajyoga Yavatmal";
  }, []);

  return (
    <>
      <section className="p-6 md:p-24 max-w-[1000px] my-20 mx-auto w-full border border-pink-50 shadow-2xl">
        <Title customStyle={'text-center'} titleName={'Bank Details For Donation From Indian Citizens'} devider={true} />

        {/* Account details section  */}
        <div className='mt-6'>
          <SubTitle customStyle={'text-secondary font-semibold !text-xl'} subTitleName={'Account Details'} />
          <div className='gap-2 mt-4 flex flex-col'>
            {
              donationItem.accountDetails.map((item, i) =>
                <div key={i}>
                  <KeyValueList listKey={item.label} listValue={item.value} />
                </div>
              )
            }
          </div>
        </div>


        {/* Contact details section  */}
        <section className='mt-6'>
          <SubTitle customStyle={'text-secondary font-semibold !text-xl'} subTitleName={'Contact Details'} />
          <div className='gap-2 mt-4 flex flex-col'>
            {
              donationItem.contactPerson.map((item, i) =>
                <div key={i}>
                  <KeyValueList listKey={item.label} listValue={item.value} />
                </div>
              )
            }
          </div>
        </section>

        {/* note section  */}

        <div className="mt-3">
          <Paragraph customStyle={'!text-base !text-black'} paragraphItem={'- Kindly send us the following information via email after sending donations to the designated account'} />
          <Paragraph customStyle={'!text-base !text-black'} paragraphItem={'- UTR Number /Cheque Number Bank Name Donor’s Name, PAN CARD and Postal Address'} />
        </div>
      </section>
    </>
  )
}

export default Donation
