export default function About() {
  return (
    <section className="p-8 bg-[var(--background)]"> 
<div className="first flex flex-col md:flex-row p-[40px]">
  
  <div className="left md:w-1/2 mb-[20px] md:mb-0 flex flex-col">
    
    <img src="/flechemobile.png" alt="" className="md:hidden w-[142px] mb-[12px] -mx-20"/>
    <img src="/fleche.png" alt="" className="hidden md:block w-[252px] mb-[16px] p-0 -mx-20"/>
    
    <h1 className="text-[32px] text-[var(--foreground)] font-bold text-center md:text-left md:text-[64px] mb-[20px]">
      Touring Algeria. <br />
      Sharing Knowledge.
    </h1>
    <p className="text-[16px] text-[var(--foreground)] font-normal text-center md:text-left md:text-[20px]">
      Born from a passion for learning and innovation, our workshop tour travels across Algeria to connect students, creatives, and tech enthusiasts. We believe in sharing skills, building community, and creating impact — one city at a time.
    </p>
  </div>

  <div className="right flex justify-center items-center md:w-1/2">
    <div className="relative w-[300px] h-[280px] md:w-[480px] md:h-[420px]">
      
      <img 
        src="/images/photo2.jpg" 
        alt="" 
        className="absolute border-[8px] md:border-[12px] border-white shadow-lg object-cover"
        style={{ width: '52%', transform: 'rotate(-6deg)', top: '0px', left: '0px', zIndex: 1, aspectRatio: '7/6' }}
      />
      
      <img 
        src="/images/photo2.jpg" 
        alt="" 
        className="absolute border-[8px] md:border-[12px] border-white shadow-lg object-cover"
        style={{ width: '52%', transform: 'rotate(5deg)', top: '0px', right: '0px', zIndex: 1, aspectRatio: '7/6' }}
      />
      
      <img 
        src="/images/photo2.jpg" 
        alt="" 
        className="absolute border-[8px] md:border-[12px] border-white shadow-2xl object-cover"
        style={{ width: '62%', transform: 'rotate(-3deg)', bottom: '0px', left: '50%', marginLeft: '-31%', zIndex: 2, aspectRatio: '7/6' }}
      />
      
    </div>
  </div>

</div>
<div className="stats mx-8 md:mx-16 mb-[40px] flex justify-center items-center">
  <div className="rectangle bg-[#6A8A44] rounded-2xl md:rounded-4xl flex flex-row justify-around items-center w-full md:w-1/2 px-4 md:px-8 py-3 md:py-0 md:h-[146px]">
    
    <div className="text-center">
      <h5 className="font-bold text-[20px] md:text-[40px] text-white">+25</h5>
      <p className="text-[13px] md:text-[20px] font-bold text-white">Mentors</p>
    </div>

    <div className="self-stretch w-[1px] md:w-[2px] bg-white/50 my-3 md:my-6"></div>

    <div className="text-center">
      <h5 className="font-bold text-[20px] md:text-[40px] text-white">+25</h5>
      <p className="text-[13px] md:text-[20px] font-bold text-white">Workshops</p>
    </div>

    <div className="self-stretch w-[1px] md:w-[2px] bg-white/50 my-3 md:my-6"></div>

    <div className="text-center">
      <h5 className="font-bold text-[20px] md:text-[40px] text-white">+20</h5>
      <p className="text-[13px] md:text-[20px] font-bold text-white">Wilayas</p>
    </div>

    <div className="self-stretch w-[1px] md:w-[2px] bg-white/50 my-3 md:my-6"></div>

    <div className="text-center">
      <h5 className="font-bold text-[20px] md:text-[40px] text-white">+20</h5>
      <p className="text-[13px] md:text-[20px] font-bold text-white">Clubs</p>
    </div>


    <div className="self-stretch w-[1px] md:w-[2px] bg-white/50 my-3 md:my-6 "></div>
    <div className="text-center">
      <h5 className="font-bold text-[20px] md:text-[40px] text-white">1</h5>
      <p className="text-[13px] md:text-[20px] font-bold text-white">Day</p>
    </div>

  </div>
</div>

   <div className="values flex md:flex-row flex-col items-center md:items-center px-4 md:px-16 mb-[10px]">
  
  
  <div className="left flex flex-row items-center md:w-auto md:mr-[0px]">
    <h1 className="font-bold md:text-[36px] text-[16px] text-[#313D5B] md:text-[#6A8A44] text-center md:text-left whitespace-nowrap">
      Our Values
    </h1>
    
    <img src="/flechevalues.png" alt="" className="hidden md:block w-[440px] ml-[24px]"/>
  </div>

  
  <div className="right flex flex-row w-full md:w-auto gap-[10px] md:gap-[40px] md:flex-1 justify-around md:justify-end mt-[10px] md:mt-0">
    <div className="flex flex-col justify-center items-center">
      <img src="/community.png" alt="" className="md:w-[90px] md:h-[90px] w-[40px] h-[40px]"/>
      <p className="md:text-[20px] font-bold text-[12px] text-[#313D5B] text-center">Community</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/innovation.png" alt="" className="md:w-[90px] md:h-[90px] w-[40px] h-[40px]"/>
      <p className="md:text-[20px] font-bold text-[12px] text-[#313D5B] text-center">Innovation</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/collaboration.png" alt="" className="md:w-[90px] md:h-[90px] w-[40px] h-[40px]"/>
      <p className="md:text-[20px] font-bold text-[12px] text-[#313D5B] text-center">Collaboration</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/impact.png" alt="" className="md:h-[90px] h-[40px]"/>
      <p className="md:text-[20px] font-bold text-[12px] text-[#313D5B] text-center">Impact</p>
    </div>
  </div>

</div>
    </section>
  );
}