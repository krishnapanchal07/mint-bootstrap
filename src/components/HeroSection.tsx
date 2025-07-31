
const HeroSection = () => {
  return (
        <div className='Hero_container'>

            <div className='Hero_wrapper page-width d-flex align-items-center justify-content-between'>
            <div className='Hero_Description'>
                <img src="/Checkbox.png" alt=""  className="banner-bg-1"/>
                <h1> Like new.</h1>
                <h2>
                    Half the price. <br />
                    All the power.
                </h2>
                <img src="/Checkbox.png" alt=""  className="banner-bg-2"/>


                <button className='bg-dark text-white rounded-2'>
                    shop phones 
                </button>
             </div>
            <div className='Hero_image'>
                <img src="/mobilephotos.png" />
            </div>
            </div>

        </div>


  )
}


export  default HeroSection