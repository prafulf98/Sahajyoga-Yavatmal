import React from 'react';
import { IoCall, MdOutlineEmail } from '../shared/icons'

const contactItem = [
    {
        icon: <IoCall size={25} />,
        head: "Contact No. :",
        info: "123456789"
    },
    {
        icon: <MdOutlineEmail size={25} />,
        head: "Email Id :",
        info: "sahajyogayavatmal@gamil.com"
    }
];

const ContactContainer = ({mainContainerStyle, customStyle}) => {
    return (
        <>
            {
                contactItem.map((item, i) =>
                    <div className={`flex items-center justify-between w-fit gap-4 ${mainContainerStyle}`} key={i}>
                        <div>{item.icon}</div>
                        <div className={customStyle}>
                            <h6 className="text-sm">{item.head}</h6>
                            <a href={item.info} className="text-sm font-semibold">{item.info}</a>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ContactContainer
