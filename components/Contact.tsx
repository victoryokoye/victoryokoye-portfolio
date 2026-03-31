
export default function Contact() {
  const contacts = [
    {
      icon: null,
      medium: "Email me",
      username: "victory.c.okoye@gmail.com"
    },
    {
      icon: null,
      medium: "LinkedIn",
      username: "Victory Okoye"
    },
    {
      icon: null,
      medium: "WhatsApp",
      username: "+234 810 571 5843"
    }
  ]
  return(
    <section className="px-8 py-10 flex flex-col gap-5">
      <h2><span className="text-brand">Contact</span>{" "}me</h2>
      <ul className="flex flex-col gap-5">
        {
          contacts.map((contact, index) => (
            <li key={index} className="flex gap-2">
              <div className="bg-brand size-12 rounded-lg"></div>
              <div>
                <p>{contact.medium}</p>
                <h4>{contact.username}</h4>
              </div>
            </li>
          ))
        }
      </ul>
      <div>
        <form action="" method="post" className="flex flex-col gap-4">
          <input type="text" name="name" id="name" placeholder="Name:" className="bg-white h-12 w-full p-5 rounded-sm"/>
          <input type="email" name="email" id="email"  placeholder="Email:" className="bg-white h-12 w-full p-5 rounded-sm"/>
          <textarea name="message" id="message" placeholder="Message:" className="bg-white h-30 w-full p-5 rounded-sm"></textarea>
          <button type="submit" className="bg-brand h-12 w-full rounded-sm text-white">SEND</button>
        </form>
        <p className="text-center mt-3">Prefer WhatsApp?{" "}<a href="#" className="text-brand">Message me</a></p>
      </div>
    </section>
  )
}