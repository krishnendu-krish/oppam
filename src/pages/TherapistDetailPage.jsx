import {

useEffect,

useState

}

from "react";

import {

useParams,

useNavigate

}

from "react-router-dom";

import {

getTherapist

}

from "../services/therapistService";

export default function TherapistDetailPage(){

const { id } = useParams();

const navigate = useNavigate();

const [

therapist,

setTherapist

]

=

useState(null);

const [

loading,

setLoading

]

=

useState(true);

useEffect(()=>{

// eslint-disable-next-line react-hooks/immutability
loadTherapist();

},[]);

const loadTherapist = async()=>{

try{

const data = await getTherapist(id);

setTherapist(data);

}

catch(err){

console.log(err);

}

finally{

setLoading(false);

}

};

if(loading){

return(

<div

className="

min-h-screen

bg-[#070B14]

text-white

flex

justify-center

items-center

"

>

Loading...

</div>

);

}

return(

<div

className="

min-h-screen

bg-[#070B14]

text-white

pt-32

px-8

"

>

<div

className="

max-w-6xl

mx-auto

grid

md:grid-cols-3

gap-10

"

>

{/* LEFT CARD */}

<div

className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-8

text-center

"

>

<div

className="

w-36

h-36

rounded-full

mx-auto

bg-gradient-to-r

from-violet-500

to-indigo-500

flex

items-center

justify-center

text-6xl

font-bold

"

>

{

therapist?.full_name

?.charAt(0)

?.toUpperCase()

}

</div>

<h1

className="

mt-8

text-3xl

font-bold

"

>

{

therapist.full_name

}

</h1>

<p

className="

mt-2

text-indigo-300

"

>

{

therapist.specialization

}

</p>

<p

className="

mt-4

text-gray-400

"

>

{

therapist.experience

}

Years Experience

</p>

<div

className="

mt-8

text-5xl

font-bold

text-indigo-400

"

>

₹

{

therapist.fee

}

</div>

<p

className="

text-gray-400

mt-2

"

>

Per Session

</p>

</div>

{/* RIGHT SIDE */}

<div

className="

md:col-span-2

space-y-8

"

>

<div

className="

bg-white/5

border

border-white/10

rounded-3xl

p-8

"

>

<h2

className="

text-3xl

font-bold

mb-6

"

>

About

</h2>

<p

className="

text-gray-300

leading-8

"

>

{

therapist.about

}

</p>

</div>

<div

className="

bg-white/5

border

border-white/10

rounded-3xl

p-8

"

>

<h2

className="

text-3xl

font-bold

mb-6

"

>

Available Days

</h2>

<div

className="

flex

gap-4

flex-wrap

"

>

{

therapist.available_days

?.map((day,index)=>(

<div

key={index}

className="

px-6

py-3

rounded-full

bg-indigo-500/20

text-indigo-300

"

>

{day}

</div>

))

}

</div>

</div>

<div

className="

flex

gap-6

"

>

<button

onClick={()=>

navigate(

`/chat/${therapist.id}`

)

}

className="

h-14

px-10

rounded-2xl

bg-gradient-to-r

from-purple-600

to-pink-600

font-semibold

hover:scale-105

transition

"

>

Chat

</button>

<button

onClick={()=>

navigate(

`/appointments/create/${therapist.id}`

)

}

className="

h-14

px-10

rounded-2xl

bg-gradient-to-r

from-indigo-600

to-violet-600

font-semibold

hover:scale-105

transition

"

>

Book Appointment

</button>

</div>

</div>

</div>

</div>

);

}
