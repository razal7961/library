import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

function Home() {
  return (
    <div className='container'>
      <div>
        <Carousel>
            <CarouselItem>
                <img src="https://srpubliclibrary.org/wp-content/uploads/sites/4/2021/01/CAROUSEL-FInd-a-book.png" className='mt-5' style={{width:'1600px',height:'400px'}} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://th.bing.com/th/id/OIP._IKnEYY37F_PXF5M0yPw8wHaDq?w=303&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='mt-5' style={{width:'1600px',height:'400px'}} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://th.bing.com/th/id/OIP.xZ9STg57qGKdqqGTOi4hGgHaB8?w=332&h=92&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='mt-5' style={{width:'1600px',height:'400px'}} alt="" />
            </CarouselItem>
        </Carousel>
        </div>

        <div  className=' m-5 '>


          <div className='d-flex justify-content-evenly' style={{overflowX:"scroll"}}>

            <div>
              <img src="https://th.bing.com/th/id/OIP.j_LCONUE58k8D0-FYF0xKQAAAA?pid=ImgDet&w=159&h=254&c=7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.HKA9oSdvRRqGifg92PPoswAAAA?pid=ImgDet&w=159&h=248&c=7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.d1DO_90dKcaN77HAGLYbfQHaM2?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.zrWG5G9BFngn48byyu_94QAAAA?pid=ImgDet&w=159&h=244&c=7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.fm-nKIup-TaP9PTo_sSOyAAAAA?w=115&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

          </div>

          <div className='d-flex justify-content-evenly' style={{overflowX:"scroll"}}>
            <div>
              <img src="https://th.bing.com/th/id/OIP.YKMfmtiwurEnx9ertgQg-gHaL6?w=115&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.r6T5qDSPDohIIOm1ee6_vgHaL6?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.IXWB-ONFVtdRVFsywwRk-gAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.xQ5FqC7uoEfb1gqXY6NNoQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>
            </div>

            <div>
              <img src="https://th.bing.com/th/id/OIP.y9MMOz3csFn9TuB4-6b6gwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='d-grid m-3'><button className='btn btn-info btn-block'>Read</button></div>

            </div>
          </div>
          
        </div>

      
    </div>
  )
}

export default Home
