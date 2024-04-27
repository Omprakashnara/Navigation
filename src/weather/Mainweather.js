import App1 from './App1'
import './index1.css'

function Mainweather({onNavigate}){
    const handleLogout = () => {
        onNavigate('Home');
      };
      const handleback = () => {
        onNavigate('Navigation');
      };
    return(
       
        <div className='weather-page'>

            <App1 />
            <div className='Logoutstyle'>
            <label  className='button-style'>
                    <input type="button" onClick={handleLogout} style={{ display: 'none' }} />
                    Logout
                </label>
                <label className='style1'>
                    <input type="button"  onClick={handleback} />Back
                </label>

        </div>
        </div>
    )
}

export default Mainweather