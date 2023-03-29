import Card from "./Card";

function App() {
  const info = [
    {
      name: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      icon: '/images/icon-supervisor.svg',
      color: 'border-Cyan'
    },
    {
      name: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      icon: '/images/icon-team-builder.svg',
      color: 'border-Red'
    },
    {
      name: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      icon: '/images/icon-karma.svg',
      color: 'border-Orange'
    },
    {
      name: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates',
      icon: '/images/icon-calculator.svg',
      color: 'border-Blue',
    }
  ]

  return (
    <div className=" bg-Very-Light-Gray w-screen h-full md:h-screen md:py-12 py-20 font-Poppins flex flex-col justify-start items-center">
      <h1 className=" font-extralight text-Very-Dark-Blue text-2xl text-center md:text-3xl md:px-[400px]">Reliable, efficient delivery <span className=" font-semibold">Powered by Technology</span></h1>
      <p className="text-normal text-Grayish-Blue px-6 mt-4 mb-12 md:mb-8 text-base text-center md:px-[400px] md:text-sm">Our Artificial Intelligence powerded tools use millions of project data points to ensure that your project is successfull</p>
      <div className="md:flex">
        {info.map(card => (
          <Card key={card.name} name={card.name} description={card.description} icon={card.icon} borderColor={card.color} />
        ))}
      </div>
    </div>
  )
}

export default App
