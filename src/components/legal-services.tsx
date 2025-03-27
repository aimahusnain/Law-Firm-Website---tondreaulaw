import { ArrowRight, BookOpen, HomeIcon, Scale, Users } from "lucide-react";

export const LegalServicesSection = () => {
    const services = [
      {
        title: "Family Law",
        description: "Compassionate legal guidance through complex family challenges.",
        icon: <Users className="h-8 w-8 text-neutral-300" />,
      },
      {
        title: "Divorce",
        description: "Strategic counsel for navigating life's most difficult transitions.",
        icon: <Scale className="h-8 w-8 text-neutral-300" />,
      },
      {
        title: "Guardianship",
        description: "Protecting vulnerable individuals with expert legal representation.",
        icon: <HomeIcon className="h-8 w-8 text-neutral-300" />,
      },
      {
        title: "Estates",
        description: "Comprehensive planning to preserve and protect your legacy.",
        icon: <BookOpen className="h-8 w-8 text-neutral-300" />,
      }
    ];
  
    return (
      <section className="w-full bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="
              text-3xl 
              md:text-5xl 
              lg:text-6xl 
              font-light 
              text-neutral-100 
              mb-6 
              tracking-tight
            ">
              Precision Legal Solutions
            </h2>
            <p className="
              text-neutral-400 
              text-base 
              md:text-lg 
              max-w-3xl 
              mx-auto 
              leading-relaxed
            ">
              Thoughtful legal strategies crafted with meticulous attention 
              to your unique circumstances. We deliver nuanced counsel 
              with unwavering professionalism.
            </p>
          </div>
  
          {/* Mobile-Friendly Grid Keeping Desktop Layout */}
          <div className="grid grid-cols-12 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`
                  col-span-12 
                  md:col-span-6 
                  lg:col-span-3 
                  group 
                  relative 
                  overflow-hidden 
                  rounded-2xl 
                  border 
                  border-neutral-800 
                  bg-neutral-900 
                  transition-all 
                  duration-300 
                  hover:border-neutral-700 
                  hover:shadow-xl
                  transform 
                  ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'}
                  ${index === 0 || index === 3 ? 'sm:col-start-2 lg:col-start-auto' : ''}
                `}
              >
                <div className="p-6 md:p-8 relative z-10 h-full flex flex-col">
                  {/* Subtle Icon Container */}
                  <div className={`
                    w-14 
                    md:w-16 
                    h-14 
                    md:h-16 
                    rounded-full 
                    mb-4 
                    md:mb-6 
                    flex 
                    items-center 
                    justify-center 
                    bg-neutral-800
                    transition-all 
                    group-hover:scale-105
                  `}>
                    {service.icon}
                  </div>
  
                  <h3 className="
                    text-xl 
                    md:text-2xl 
                    font-light 
                    text-neutral-200
                    mb-3 
                    md:mb-4 
                    transition-colors
                  ">
                    {service.title}
                  </h3>
                  <p className="
                    text-neutral-400 
                    text-sm 
                    md:text-base 
                    mb-4 
                    md:mb-6 
                    flex-grow 
                    leading-relaxed
                  ">
                    {service.description}
                  </p>
  
                  {/* Understated Learn More Link */}
                  <div className="flex items-center group/link">
                    <a 
                      href="#" 
                      className="
                        text-neutral-300 
                        font-light 
                        flex 
                        items-center 
                        hover:text-white
                        transition-colors
                        text-sm 
                        md:text-base
                      "
                    >
                      Learn More
                      <ArrowRight 
                        className="
                          ml-2 
                          h-4 
                          w-4 
                          transform 
                          transition-transform 
                          group-hover/link:translate-x-1
                        " 
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };