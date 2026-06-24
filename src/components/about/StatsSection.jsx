const stats=[

{

number:"5000+",

label:"Happy Users"

},

{

number:"100+",

label:"Therapists"

},

{

number:"98%",

label:"Satisfaction"

},

{

number:"24/7",

label:"Support"

}

]



export default function StatsSection(){

return(

<section className="h-[300px] flex items-center justify-center px-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

{

stats.map(

(item,index)=>(

<div key={index}>

<h1 className="text-6xl font-bold text-violet-400">

{item.number}

</h1>

<p className="text-gray-400 mt-4">

{item.label}

</p>

</div>

)

)

}

</div>

</section>

)

}