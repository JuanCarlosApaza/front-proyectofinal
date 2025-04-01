interface MiComponenteProps {
    children: React.ReactNode;
}
const MiComponente:React.FC<MiComponenteProps> = ({ children }) => {
return(
    <div>
        <div className=" h-screen bg-gray-100  flex items-center justify-center">
            <div className="w-1/2 h-1/2 mx-auto p-6 rounded-lg shadow-md">

            {children}
        </div>
        </div>
        
    </div>
)
}
export default MiComponente;