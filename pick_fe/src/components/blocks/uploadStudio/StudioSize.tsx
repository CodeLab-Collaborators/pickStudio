
import GlobalInput from '../../props/GlobalInput'

const StudioSize = () => {
  return (
    <div>
              <h1 className='mt-7 font-semibold text-2xl max-md:text-lg'>Number of guest studio can contain?</h1>

              <div className='mt-4'>
                <GlobalInput type='number' max={6} placeholder='Number of guest'/>
              </div>
    </div>
  )
}

export default StudioSize