import sarthak from '../assets/sarthak.jpg'
import kaushal from '../assets/kaushal.jpg'
import vipul from '../assets/vipul.jpg'
const people = [
    {
        name: 'Sarthak Kapaliya',
        role: 'Techitron SDE',
        imageUrl: sarthak   },
    {
        name: 'Kaushal Soni',
        role: 'Techitron Full Stack Developer',
        imageUrl:kaushal,
    },
    {
        name: 'Vipul Chaudhary',
        role: 'Techitron Full stack developer',
        imageUrl: vipul,    },
    // More people...
]

export default function AboutUs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Developers</h2>
                    <p className="mt-6 text-2xl leading-8 text-black">
                        Printing your ideas into reality , one sheet at a time.
                    </p>
                </div>
                <br></br>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3 w-full">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6 justify-center">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}