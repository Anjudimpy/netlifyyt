import Accordion from 'react-bootstrap/Accordion';
import { IoIosArrowDropdown, IoMdArrowDropleft, IoMdArrowDropright,} from 'react-icons/io';
import Banner from './Banner';
import MyCarousel from './OwlCarousel';

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
      <div className=' absolute border  rounded-full flex left-[50%] top-[-49px] justify-center items-center'>
      <Accordion.Header className='absolute  w-44  h-1  text-white rounded-full'>  <span className='text-red-500 font-bold'> Find Products</span>
          <div className='relative  bottom-[-39px] flex justify-center items-center'>
            <div className='absolute w-[200px] ml-5 font-bold flex justify-center  items-center'>
              {/* <div className='h-10 bg-red-500 text-center  text-white p-2 px-4 rounded-tl-[10px] rounded-tr-[10px] '>
                Find Products
              </div> */}
              {/* <IoIosArrowDropdown className='absolute text-red-500 font-bold top-[-16px] text-[30px] bg-white rounded-full'/> */}
            </div>
          </div>
        </Accordion.Header>
      </div>
        <Accordion.Body>
       <div className='mx-auto h-auto py-3 w-full '>
       <MyCarousel/>
       </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  );
}

export default FlushExample;