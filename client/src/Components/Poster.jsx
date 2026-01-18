
const images = [
  "img.png"
];

export default function Poster() {
  return (
    <div className="space-y-24 border-2 w-full  bg-white flex  h-[400px] ">
 {
    images.map((img,index)=> (
        <img src={img} className="object-contain w-full h-full"    key={index} />
       
    ))
   } 
    </div>
  );
}
