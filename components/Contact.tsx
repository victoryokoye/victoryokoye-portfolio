import FadeUp from "@/components/ui/FadeUp"
import StaggerContainer from "@/components/ui/StaggerContainer"
import ContactForm from "@/components/ui/ContactForm"

import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const contacts = [
    {
      icon: <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 1.875H13.125C13.4702 1.875 13.75 2.15483 13.75 2.5V12.5C13.75 12.8452 13.4702 13.125 13.125 13.125H1.875C1.52983 13.125 1.25 12.8452 1.25 12.5V2.5C1.25 2.15483 1.52983 1.875 1.875 1.875ZM7.53788 7.30181L3.52951 3.89856L2.72049 4.85144L7.54569 8.94819L12.284 4.8476L11.466 3.9024L7.53788 7.30181Z" fill="#FFFFFF"/>
            </svg>,
      medium: "Email me",
      username: "victory.c.okoye@gmail.com",
      link: "mailto:victory.c.okoye@gmail.com"
    },
    {
      icon: <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4601 11.4619H9.79419V8.85138C9.79419 8.22888 9.78156 7.42781 8.92606 7.42781C8.0575 7.42781 7.92481 8.10519 7.92481 8.80544V11.4619H6.25887V6.09375H7.85919V6.82544H7.88075C8.10437 6.40356 8.64812 5.95828 9.46044 5.95828C11.1484 5.95828 11.4606 7.06925 11.4606 8.51531L11.4601 11.4619ZM4.37733 5.35922C3.84108 5.35922 3.4103 4.92516 3.4103 4.39125C3.4103 3.85781 3.84155 3.42422 4.37733 3.42422C4.91171 3.42422 5.34483 3.85781 5.34483 4.39125C5.34483 4.92516 4.91124 5.35922 4.37733 5.35922ZM5.21264 11.4619H3.54202V6.09375H5.21264V11.4619ZM12.2936 1.875H2.70577C2.24686 1.875 1.87561 2.23781 1.87561 2.68547V12.3146C1.87561 12.7626 2.24686 13.125 2.70577 13.125H12.2922C12.7506 13.125 13.1256 12.7626 13.1256 12.3146V2.68547C13.1256 2.23781 12.7506 1.875 12.2922 1.875H12.2936Z" fill="#FFFFFF"/>
            </svg>,
      medium: "LinkedIn",
      username: "Victory Okoye",
      link: "https:www.linkedin.com/in/victory-okoye"
    },
    {
      icon: <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.50063 1.25C10.9524 1.25 13.7506 4.04822 13.7506 7.5C13.7506 10.9517 10.9524 13.75 7.50063 13.75C6.35444 13.75 5.28032 13.4415 4.35679 12.9029L1.25322 13.75L2.0982 10.6447C1.55934 9.721 1.25061 8.64656 1.25061 7.5C1.25061 4.04822 4.04883 1.25 7.50063 1.25ZM5.2452 4.56771C5.16433 4.57339 5.08504 4.59314 5.01286 4.63007C4.9587 4.65778 4.90842 4.69782 4.82943 4.77241C4.75484 4.84284 4.71161 4.90436 4.66606 4.96366C4.43499 5.2645 4.31081 5.63378 4.31311 6.01311C4.31437 6.31975 4.39402 6.61775 4.51981 6.896C4.77489 7.46025 5.19555 8.05675 5.75121 8.60994C5.88469 8.74281 6.01546 8.87713 6.15646 9.00125C6.84612 9.6085 7.668 10.0464 8.55669 10.2801C8.55669 10.2801 8.90669 10.3339 8.91181 10.3342C9.02775 10.3404 9.1435 10.3321 9.25956 10.3261C9.44162 10.3167 9.61938 10.2675 9.78025 10.1818C9.88369 10.1267 9.93262 10.0994 10.0194 10.0446C10.0194 10.0446 10.0461 10.0266 10.0974 9.98837C10.1818 9.9255 10.2339 9.88125 10.3041 9.80838C10.3559 9.75463 10.4004 9.69112 10.4347 9.61956C10.4836 9.51756 10.5328 9.32288 10.5524 9.16119C10.5673 9.03769 10.5628 8.97019 10.5612 8.92838C10.5585 8.86113 10.5029 8.79194 10.4421 8.76256L10.0786 8.59919C10.0786 8.59919 9.53519 8.36269 9.20281 8.21106C9.16819 8.19525 9.13031 8.18794 9.09225 8.18563C9.00887 8.1805 8.91544 8.20225 8.856 8.26487C8.85287 8.26362 8.8115 8.29938 8.35931 8.84719C8.33437 8.877 8.27594 8.94181 8.17487 8.93575C8.15962 8.93469 8.14444 8.9325 8.12962 8.92863C8.08869 8.91781 8.04881 8.90356 8.00981 8.88706C7.9325 8.85425 7.90537 8.84181 7.85256 8.81906C7.49175 8.66144 7.16062 8.45056 6.86794 8.1925C6.78944 8.12337 6.71644 8.04894 6.64119 7.976C6.37856 7.72144 6.16356 7.45069 6.00361 7.18363C5.99487 7.16906 5.98142 7.148 5.96692 7.12444C5.94076 7.08188 5.91189 7.03125 5.90284 6.9965C5.87961 6.90456 5.94124 6.83069 5.94124 6.83069C5.94124 6.83069 6.09337 6.66437 6.16405 6.57394C6.23205 6.48688 6.29075 6.40175 6.32812 6.34106C6.40175 6.22271 6.42506 6.10039 6.38637 6.00602C6.21102 5.57853 6.03011 5.15335 5.84366 4.73059C5.80686 4.64716 5.69741 4.58654 5.59787 4.57504C5.56416 4.57115 5.53047 4.56724 5.49662 4.56501C5.41283 4.56093 5.32887 4.56183 5.2452 4.56771Z" fill="#FFFFFF"/>
            </svg>,
      medium: "WhatsApp",
      username: "+234 810 571 5843",
      link: "https://wa.me/2348105715843"
    }
  ]
  return(
    <section id="contact" className="px-8 py-10 flex flex-col gap-5 lg:py-20">
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="md:w-[50%] flex lg:justify-center">
          <div className="flex flex-col w-max gap-8 lg:gap-12">
            <FadeUp><h2 className="md-text"><span className="text-brand">Contact</span>{" "}me</h2></FadeUp>
            <StaggerContainer className="flex flex-col gap-5 w-max">
              {
                contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return(
                    <FadeUp key={index} className="flex gap-2">
                      <a href={contact.link} target="_blank" rel="noopener noreferrer" className="w-max h-max">
                        <button className="button cursor-pointer bg-brand size-12 rounded-lg flex justify-center items-center">
                          {Icon}
                        </button>
                      </a>
                      <div>
                        <p>{contact.medium}</p>
                        <h4>{contact.username}</h4>
                      </div>
                    </FadeUp>
                  )
                })
              }
            </StaggerContainer>
          </div>
          
        </div>
        
        <div className="md:w-[50%]">
          <div className="max-w-120 m-auto">
            <ContactForm />
            <p className="text-center mt-3">Prefer WhatsApp?{" "}<a target="_blank" rel="noopener noreferrer"
              href="https://wa.me/2348105715843?text=Hello%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20inerested%20in%20your%20web%20development%20services.%0A%0AProject%20type%3A%0ABudget%3A%0ATimeline%3A%0A%0ACan%20we%20discuss%20further%3F"
             className="text-brand hover:underline">Message me</a>
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}