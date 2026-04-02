
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const contacts = [
    {
      icon: FiMail,
      medium: "Email me",
      username: "victory.c.okoye@gmail.com"
    },
    {
      icon: FiMail,
      medium: "LinkedIn",
      username: "Victory Okoye"
    },
    {
      icon: FiMail,
      medium: "WhatsApp",
      username: "+234 810 571 5843"
    }
  ]
  return(
    <section className="px-8 py-10 flex flex-col gap-5 lg:py-20">
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="md:w-[50%] flex lg:justify-center">
          <div className="flex flex-col w-max gap-8 lg:gap-12">
            <h2><span className="text-brand">Contact</span>{" "}me</h2>
            <ul className="flex flex-col gap-5 w-max">
              {
                contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return(
                    <li key={index} className="flex gap-2">
                      <div className="bg-brand size-12 rounded-lg flex justify-center items-center">
                        <Icon className="text-lg text-white"/>
                      </div>
                      <div>
                        <p>{contact.medium}</p>
                        <h4>{contact.username}</h4>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          
        </div>
        
        <div className="md:w-[50%]">
          <div className="max-w-120 m-auto">
            <form action="" method="post" className="flex flex-col gap-4">
              <input type="text" name="name" id="name" placeholder="Name:" className="bg-white h-12 w-full p-5 rounded-sm"/>
              <input type="email" name="email" id="email"  placeholder="Email:" className="bg-white h-12 w-full p-5 rounded-sm"/>
              <textarea name="message" id="message" placeholder="Message:" className="bg-white h-30 w-full p-5 rounded-sm"></textarea>
              <button type="submit" className="bg-brand h-12 w-full rounded-sm text-white px-4 flex items-center justify-between">SEND<FiArrowRight/></button>
            </form>
            <p className="text-center mt-3">Prefer WhatsApp?{" "}<a href="#" className="text-brand">Message me</a></p>
          </div>
        </div>
      </div>
      
    </section>
  )
}