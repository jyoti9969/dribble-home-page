import Image from "next/image"
const DesignCard=()=>{
return(
 
        <div className=" bg-white py-10 justify-center text-center align-middle">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mb-8">Explore inspiring designs</h1>
        
        {/* Flex container for the designs */}
        <div className="flex flex-wrap  gap-8 items-center justify-center">
          {/* Card 1 */}
          <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image1.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/circle.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>

<div className="h-auto bg-white   overflow-hidden">
  <Image src="/image2.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo8.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>

<div className="h-auto bg-white   overflow-hidden">
  <Image src="/image3.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo9.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>

<div className="h-auto bg-white   overflow-hidden">
  <Image src="/image4.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo10.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image14.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/circle.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>

<div className="h-auto bg-white   overflow-hidden">
  <Image src="/image6.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo11.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image7.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo12.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image8.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/circle.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image7.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo9.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image10.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo10.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image6.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo11.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image2.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo12.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image8.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo13.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image14.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo14.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
   
   <div className="h-auto bg-white   overflow-hidden">
  <Image src="/image2.png " alt="Emote Design" width={150} height={150} className="object-cover  rounded-md" />
  <div className="flex flex-row justify-between items-center  py-2">
    <div className="flex flex-row items-center space-x-2">
      <Image src="/logo8.png" alt="logo" width={15} height={15} className="object-cover rounded-full" />
      <div className="text-[8px] font-semibold">Emote</div>
      <button className="bg-gray-400 text-white text-[6px] font-semibold rounded px-1 py-0">Team</button>
    </div>
    <div className="flex flex-row items-center text-[8px] text-gray-600 space-x-1 ">
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg><span>20</span> </div>
      <div className="flex flex-row"><svg class="h-3 w-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg><span>1.5k</span></div>
    </div>
  </div>
</div>
 

   
          </div>

    </div>
    <button className="text-[9px] font-semibold py-2 mt-8 border px-5  border-black rounded-2xl justify-center" >Browse more inspiration</button>
    </div>
)
}
export default DesignCard