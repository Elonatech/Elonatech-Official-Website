import React from 'react'
import './WhatsAppFloat.css'

const WhatsAppFloat = () => {
  // ─────────────────────────────────────────────────────────────────────────
  // 📌 CHANGE YOUR WHATSAPP LINK HERE
  //    Format:  https://wa.me/<country-code><phone-number>
  //    Example: https://wa.me/2348012345678  (Nigeria +234, number 08012345678)
  //    You can also pre-fill a message:
  //    https://wa.me/2348012345678?text=Hello%20Elonatech!
  // ─────────────────────────────────────────────────────────────────────────
  const whatsappLink = 'https://wa.me/message/NW4HSVIHRNRLA1'

  return (
    <a
      href={whatsappLink}
      className='whatsapp-float'
      target='_blank'           /* opens in a new tab */
      rel='noopener noreferrer' /* security best-practice for external links */
      aria-label='Chat with us on WhatsApp'
    >
      {/* WhatsApp SVG icon — no extra library needed */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
        className='whatsapp-icon'
        aria-hidden='true'
      >
        <circle cx='24' cy='24' r='24' fill='#25D366' />
        <path
          fill='#fff'
          d='M34.5 13.5A14.9 14.9 0 0 0 24 9C16.27 9 10 15.27 10 23a13.9 13.9 0 0 0 2 7.2L9 39l9.1-2.38A14.94 14.94 0 0 0 24 38c7.73 0 14-6.27 14-14a13.9 13.9 0 0 0-3.5-10.5zm-10.5 21.4a12.36 12.36 0 0 1-6.3-1.72l-.45-.27-4.67 1.22 1.25-4.55-.3-.47A12.4 12.4 0 1 1 24 34.9zm6.8-9.3c-.37-.19-2.2-1.08-2.54-1.21s-.59-.19-.84.19-1 1.21-1.2 1.46-.44.28-.81.09a10.17 10.17 0 0 1-5.1-4.45c-.39-.67.39-.62 1.1-2.07a.69.69 0 0 0-.03-.65c-.09-.19-.84-2-.95-2.65-.25-1.05-.5-.9-.69-.92h-.58a1.12 1.12 0 0 0-.81.38 3.42 3.42 0 0 0-1.06 2.54 5.94 5.94 0 0 0 1.24 3.14c1.5 2.05 3.27 4.06 7.15 5.52 2.66 1.02 3.7.88 4.37.75a3.12 3.12 0 0 0 2.05-1.45 2.53 2.53 0 0 0 .18-1.45c-.08-.13-.31-.22-.68-.41z'
        />
      </svg>
    </a>
  )
}

export default WhatsAppFloat
