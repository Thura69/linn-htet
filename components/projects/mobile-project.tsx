import { cn } from '@/lib/utils';
import styles from './style.module.scss';
import Image from 'next/image';



export default function Index({
  projects,
  reversed,
}: {
  projects: any;
  reversed?: any;
}) {
  return (
    <div className='w-full'>
      <div  className={''}>
        <div className={'w-full'}>
          <Image  src={`/images/${projects[0].src}`} width={500} height={500}  alt={"image"} />
        </div>
        <div className={cn(styles.body,'space-y-2 my-2')}>
          <h3 className=' font-semibold'>{projects[0].name}</h3>
          <p className='text-textSecondary'>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>
    </div>
  );
}
