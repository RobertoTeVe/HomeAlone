import Logo from '@/assets/EvolveText.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Some test it is not interesting at all.</p>
                <p>Copyright 2023 - All rights reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Some text here</p>
                <p className='my-5'>Some text</p>
                <p className='my-5'>Text</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Avd. Vida, 291, Bajo</p>
                <p className='my-5'>+55 123 123 123</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer