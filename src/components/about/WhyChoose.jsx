import {

Brain,

ShieldCheck,

HeartHandshake,

Users,

} from "lucide-react";



const items=[

{

icon:<Brain size={40}/>,

title:"Expert Therapists",

desc:"Certified professionals helping you improve your mental health."

},

{

icon:<ShieldCheck size={40}/>,

title:"Private & Secure",

desc:"Your personal information is fully protected."

},

{

icon:<HeartHandshake size={40}/>,

title:"Personalized Care",

desc:"Every person receives guidance tailored to their needs."

},

{

icon:<Users size={40}/>,

title:"Community Support",

desc:"Connect with people who understand your journey."

}

]



export default function WhyChoose(){

return(

<section className="h-[500px] flex items-center justify-center px-6">

<div className="max-w-7xl mx-auto">

<h1 className="text-center text-5xl font-bold mb-16">

Why Choose MindVerse

</h1>
<br></br>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

{

items.map(

(item,index)=>(

<div

key={index}

className="

bg-white/5

border

border-white/10

backdrop-blur-xl

rounded-[30px]

p-8

hover:border-violet-500

hover:-translate-y-2

transition

"

>

<div className="text-violet-400 mb-6">

{item.icon}

</div>

<h2 className="text-2xl font-bold mb-4">

{item.title}

</h2>

<p className="text-gray-400 leading-7">

{item.desc}

</p>

</div>

)

)

}

</div>

</div>

</section>

)

}