import {

useEffect,

useState

} from "react";

import TherapistCard

from "../components/TherapistCard";

import {

getTherapists

}

from "../services/therapistService";

export default function TherapistsPage(){

const [

therapists,

setTherapists

]

=

useState([]);

useEffect(()=>{

// eslint-disable-next-line react-hooks/immutability
loadTherapists();

},[]);

const loadTherapists = async()=>{

try{

const data = await getTherapists();

setTherapists(data);

}

catch(err){

console.log(err);

}

};

return(

<div

className="

min-h-screen

bg-[#070B14]

text-white

px-10

pt-32

"

>

<h1

className="

text-6xl

font-bold

text-center

"

>

Find Your

<span

className="

bg-gradient-to-r

from-indigo-400

via-purple-400

to-cyan-400

text-transparent

bg-clip-text

"

>

Therapist

</span>

</h1>

<p

className="

text-center

text-gray-400

mt-6

mb-20

"

>

Choose from experienced

and verified therapists

</p>

<div

className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-10

"

>

{

therapists.map(

(therapist)=>(

<TherapistCard

key={therapist.id}

therapist={therapist}

/>

)

)

}

</div>

</div>

);

}
