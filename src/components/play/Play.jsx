import React from 'react'
import YoutubePlay from 'react-player/youtube'
import "./styles.css"

//const url1 = "https://mundotec.pro/plano-de-expansao-de-recursos-do-google-chrome-pode-conter-serios-risco-de-seguranca.html?cc"
//const url2 = "https://drive.google.com/file/d/1qXOz_HtyCZmPBFFgq6_Br9-KjLTFfe4B/view?usp=sharing"

export default function Play() {
	return (
		<div className='position'>
			<div className=" mt-5 positionPlay">
				<div className="ml-">
					<YoutubePlay url='https://youtu.be/5GIAbgCXfKQ?t=1' 
					controls
					muted
					/>  
					<br /><br /><br /> 
				</div>
			</div>
		</div>
	)
}
