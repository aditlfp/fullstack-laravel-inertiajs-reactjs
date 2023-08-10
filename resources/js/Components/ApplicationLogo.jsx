

export default function ApplicationLogo(props) {
    const baseUrl = window.location.origin;
    return (
        <div className="flex justify-center">
            <img src={`${baseUrl}/image/logo/logo.png`} alt="" srcset="" className="w-[49%] my-2 rounded-[20%]"/>
        </div>
    );
}
