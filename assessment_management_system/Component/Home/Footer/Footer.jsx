export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 items-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-4xl font-bold mb-5'>AMS Hub</h3>
            <p className='text-gray-400 mr-10 items-center'>
              Streamlining assessment creation, delivery, and evaluation for the
              modern world.
            </p>
          </div>
          
          <div>
            <h4 className='font-bold text-2xl mb-5'>Product</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-2xl mb-5'>Support</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Status
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className='font-bold text-2xl mb-5'>Company</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; 2025 AMS Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
