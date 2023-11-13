import React from 'react'

function FooterComponent() {
    return (
        <>
            <footer className="row">
                <div className='col-md-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <span className='text__footer'>Conócenos.</span>
                    <div className='w-100 logos__redes' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + "/logos/facebook.png"} alt='X' />
                            <a href='https://facebook.com'>Facebook</a></div>

                        <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + "/logos/instagram.jpg"} alt='X' />
                            <a href='https://instagram.com'>Instagram</a>
                        </div>

                        <div className='p-3' style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={process.env.PUBLIC_URL + "/logos/x.png"} alt='X' />
                            <a href='https://tiktok.com'>X</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default FooterComponent