
import { headers } from 'next/headers';

function getHost() {
  const headersList = headers();
  console.log(headersList);
  let host = headersList.get('host');
  if (host) {
    const protocol = headersList.get('x-forwarded-proto');
    return `${protocol}://${host}`
     
  }
  else { 
    const referer = headersList.get('x-forwarded-host');
    const protocol = headersList.get('x-forwarded-proto');
    return `${protocol}://${referer}`
  }
}

 
 

function Page() {
    return (
       <>
       
    <div className='p-10 text-lg font-light text-center'>
    You can create the upload mapping in the Cloudinary console upload settings, or using the CLI as follows:
 
        <div className="mockup-code mt-7">
        <pre data-prefix=">"><code>{`cld admin create_upload_mapping "dall-e" template="${getHost()}/api/dall-e/"`}</code></pre> 
      </div>
      
         
         

 <div className="flex flex-col mt-7">
 <div className='px-5'>
Next: 
</div>
 

<div className='felx flex justify-center mt-7'>
    <div>{`https://res.cloudinary.com/`}</div><div className='text-orange-500'>{'<your cloud name>'}</div><div>{'/image/upload/f_auto,q_auto/dall-e/'}</div><div className='text-orange-500'>{'<text>'}</div>

    </div>
 
</div>
</div>
     
 
        
         
     
        </>
 
    )
  }



export default Page;