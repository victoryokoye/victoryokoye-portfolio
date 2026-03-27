
export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: null,
      username: "victory.c.okoye@gmail.com",
      link: ""
    },
    {
      id: 2,
      icon: null,
      username: "Victory Okoye",
      link: ""
    },
    {
      id: 3,
      icon: null,
      username: "victory.c.okoye",
      link: ""
    },
    {
      id: 4,
      icon: null,
      username: "+234 810 571 5843",
      link: ""
    },
    {
      id: 5,
      icon: null,
      username: "Victory Okoye",
      link: ""
    }
  ]
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: ""
    },
    {
      id: 2,
      name: "Projects",
      link: ""
    },
    {
      id: 3,
      name: "Services",
      link: ""
    },
    {
      id: 4,
      name: "About",
      link: ""
    },
  ]
  return(
    <section className="bg-white">
      <div className="flex gap-5 py-15 px-5">
        <div>
          <h3>Let's{" "}<span>Connect</span></h3>
          <ul>
            {
              socialLinks.map(link => (
                <li className="text-blue-500">
                  <div></div>
                  <p>{link.username}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            {
              navLinks.map(link => (
                <li className="text-blue-500">
                  <div></div>
                  <p>{link.name}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <hr />
      <div className="py-5 px-2 flex justify-between">
        <p>@2026. All Rights Reserved.</p>
        <p>Designed by Victory Okoye.</p>
      </div>
    </section>
  )
}