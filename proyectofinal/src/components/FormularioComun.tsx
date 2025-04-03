interface MiComponenteProps {
    children: React.ReactNode;
}
const MiComponente:React.FC<MiComponenteProps> = ({ children }) => {
return(
    <div>
        <div className=" h-screen   bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center">
            <div className="w-1/2 h-1/2 mx-auto px-4 rounded-lg shadow-2xl ">

            {children}
        </div>
        </div>
        
    </div>
)
}
export default MiComponente;