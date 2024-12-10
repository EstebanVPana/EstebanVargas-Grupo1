import {PulseLoader} from 'react-spinners'

const Loading = () => {
    return(
        <div className="container mx-auto max-w-[1170px] flex justify-center items-center h-[50vh]">
            <PulseLoader color="#2D3A4B" size="20px" />
        </div>
    )
}

export default Loading