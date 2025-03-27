import { ArrowRight, BookOpen, HomeIcon, Scale, Users } from "lucide-react";

export const LegalServicesSection = () => {
    const services = [
      {
        title: "Family Law",
        description: "Compassionate legal guidance through complex family challenges.",
        icon: <Users className="h-6 sm:h-8 w-6 sm:w-8 text-neutral-300" />,
      },
      {
        title: "Divorce",
        description: "Strategic counsel for navigating life's most difficult transitions.",
        icon: <Scale className="h-6 sm:h-8 w-6 sm:w-8 text-neutral-300" />,
      },
      {
        title: "Guardianship",
        description: "Protecting vulnerable individuals with expert legal representation.",
        icon: <HomeIcon className="h-6 sm:h-8 w-6 sm:w-8 text-neutral-300" />,
      },
      {
        title: "Estates",
        description: "Comprehensive planning to preserve and protect your legacy.",
        icon: <BookOpen className="h-6 sm:h-8 w-6 sm:w-8 text-neutral-300" />,
      }
    ];
  
    return (
      <section className="w-full bg-black py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="
              text-2xl 
              sm:text-3xl 
              md:text-5xl 
              lg:text-6xl 
              font-light 
              text-neutral-100 
              mb-4 
              sm:mb-6 
              tracking-tight
            ">
              Precision Legal Solutions
            </h2>
            <p className="
              text-neutral-400 
              text-sm 
              sm:text-base 
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
  
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`
                  w-full 
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
                  ${index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8'}
                `}
              >
                <div className="p-5 sm:p-6 md:p-8 relative z-10 h-full flex flex-col">
                  {/* Subtle Icon Container */}
                  <div className={`
                    w-12 
                    sm:w-14 
                    md:w-16 
                    h-12 
                    sm:h-14 
                    md:h-16 
                    rounded-full 
                    mb-3 
                    sm:mb-4 
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
                    text-lg 
                    sm:text-xl 
                    md:text-2xl 
                    font-light 
                    text-neutral-200
                    mb-2 
                    sm:mb-3 
                    md:mb-4 
                    transition-colors
                  ">
                    {service.title}
                  </h3>
                  <p className="
                    text-neutral-400 
                    text-xs 
                    sm:text-sm 
                    md:text-base 
                    mb-3 
                    sm:mb-4 
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
                        text-xs 
                        sm:text-sm 
                        md:text-base
                      "
                    >
                      Learn More
                      <ArrowRight 
                        className="
                          ml-1 
                          sm:ml-2 
                          h-3 
                          w-3 
                          sm:h-4 
                          sm:w-4 
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