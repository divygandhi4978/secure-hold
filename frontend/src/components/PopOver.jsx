import { useNavigate } from "react-router-dom";

export default function PopOver() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg text-[#222725]">
      <div className="p-3">
        
          <p className="font-semibold text-[#0c1618] text-2xl" onClick={()=>{
            navigate('/home')
          }}>Home</p>
        <hr />
        
          <p className="font-semibold text-[#0c1618]  text-2xl" onClick={()=>{
            navigate('/features')
          }}>Features</p>
        <hr />
          <p className="font-semibold text-[#222b2d]  text-2xl" onClick={()=>{
            navigate('/faqs')
          }}>FAQs</p>
      </div> 
    </div>
  );
}
