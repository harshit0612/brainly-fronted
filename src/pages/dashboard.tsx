import {Button} from '../components/ui/Button';
import { PlusIcon } from '../icons/plusIcon';
import { ShareIcon } from '../icons/shareIcon';
import { Card } from '../components/ui/Card';
import { CreateContentModel } from '../components/ui/CreateContentModel';
import { useEffect, useState } from 'react';
import { SideBar } from '../components/ui/SideBar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from 'axios';




export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents,refresh} = useContent();
  function closeModel(){
    setModelOpen(false);
  }
  useEffect(()=>{
    refresh();
  },[])

  return( 
    <div>
      <SideBar/>
      <div className='p-4 ml-76  bg-slate-100 min-h-screen'>
        <CreateContentModel open={modelOpen} onClick={closeModel}/>
        
        <div className='flex justify-end'>
          <Button onClick={()=>{
            setModelOpen(true);
          }} variant='primary' text='Add Content' size='lg' startIcon={<PlusIcon size={'lg'}/>}  />
          <Button onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
              share : true
            },{
              headers : {
                "authorization" : localStorage.getItem("token")
              }
            })
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
          }} variant='secondary' text='Share Brain' size='lg' startIcon={<ShareIcon size={'lg'}/>}/>
        </div>


        <div className='flex gap-4 flex-wrap'>
          {contents.map(({ type, link, title , _id}) => {
            return <Card type={type} link={link} title={title} contentId={_id}/>;
          })}
        </div>
        
      </div>
    </div>
  )
}





