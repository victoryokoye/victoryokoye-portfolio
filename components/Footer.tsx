
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
      <div className="flex gap-5 py-10 px-8 md:gap-10 lg:hidden">
        <div className="flex flex-col gap-5 w-[50%]">
          <h3>Let's{" "}<span className="text-brand">Connect</span></h3>
          <ul className="flex flex-col gap-3">
            {
              socialLinks.map(link => (
                <li key={link.id}>
                  <div></div>
                  <p className="text-brand">{link.username}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-[50%]">
          <h3>Navigation</h3>
          <ul className="flex flex-col gap-3">
            {
              navLinks.map(link => (
                <li key={link.id}>
                  <div></div>
                  <p className="text-brand">{link.name}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <hr className="lg:hidden"/>
      <div className="py-5 px-2 flex justify-between items-center lg:px-20">
        <p>@2026. All Rights Reserved.</p>
        <p>Designed by Victory Okoye.</p>
        <div className="hidden lg:block">
          <ul className="flex gap-3">
            {
              socialLinks.map(link => (
                <li key={link.id}>
                  <div className="size-5 bg-gray-200"></div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}