type CardT = {
  heading: string
  date: string
  pattern: string
  paragraph: string

}
const Card = ({ heading, paragraph, date, pattern }: CardT) => {
  return (
    <div className="bg-white p-4 space-y-4">
      <h3>{heading}</h3>
      <div className="flex items-center gap-4 text-light">
        <h5>{date}</h5>
        <h5>{pattern}</h5>
      </div>
      <p>{paragraph}</p>
    </div>
  )
}

export const Hero = () => {
  const photoPath = "/profile.png"
  return (
    <div className="my-4">
      <div className="container space-y-4">
        <div className='block md:flex items-center justify-center lg:justify-between lg:h-[50vh] space-y-4'>
          <div className="space-y-4">
            <h2>Hi, I am John,<br />
              Creative Technologist</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. <br /> Exercitation veniam consequat sunt nostrud amet.</p>
            <button className="bg-primary text-[18px] lg:text-[27px] text-white px-4 py-2 cursor-pointer"> Download Resume</button>
          </div>
          <div>
            <div className="max-w-sm">
              <img src={photoPath} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#edf7fa]">
        <div className="container py-4 space-y-4">
          <div className='flex items-center justify-between'>
            <h5>Recent projects</h5>
            <p className="text-secondary">View All</p>
          </div>
          <div className="block md:flex space-y-4 md:space-y-0 gap-4">
            <Card heading={"Making a Design System from Scrach"} date={"12 Feb 2020"} pattern={"Design Pattern"} paragraph={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
            <Card heading={"Creating pixel Perfect icons in figma"} date={"12 Feb 2020"} pattern={"Design Pattern"} paragraph={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
          </div>
        </div>
      </div>
    </div>
  )
}
