import Completed from '../components/Home/Completed';
import New from '../components/Home/New';
import Popular from '../components/Home/Popular';
import Update from '../components/Home/Update';

const Home = () => {
  return (
    <div className='leftbar flex flex-col gap-5 grow-[2.3] min-w-0'>
        <Popular/>
        <Update/>
        <Completed/>
        <New/>
    </div>
  )
}
export default  Home;