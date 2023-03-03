import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
// import '../app/globals.css';

export default function StudioNavbar(props: any) {
  return (
    <div>
      {/* <h1 className='text-xl text-cyan-600'>Studio Navbar</h1> */}
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A]mr-2 px-1' />
          Back to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
