'use client'
import { useState } from 'react'
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const ContactUs = () => {
  const tours = [
    {
      id: '1',
      title: 'Same Day Jaipur Private Tour',
      image: '/images/slider/jaipurOne.jpeg',
      description: `
          One day Jaipur to Samode and come back to Jaipur.
    
          **Pricing (for 8hrs):**
          - With Toyota Etios: EUR 26 + EUR 3 (Parking and Toll tax)
          - With Toyota Innova: EUR 29 + EUR 4 (Parking)
    
          **Tour 01: Jaipur – Samode – Jaipur**
          To visit Samode, you will be welcomed at Jaipur and then proceed to Samode.
    
          One of the beautiful places in the Indian state of Rajasthan is Samode. This is a town situated on the way to Shekhawati. It is well-known for its fort and palace, located near a beautiful garden. A unique way to explore Samode is through a camel ride during the daytime, allowing you to enjoy the scenic beauty of the countryside.
    
          **The well-known sightseeing attractions in Samode are:**
    
          **Samode Palace:**
          In the deep desert, through the dry and stony hills, there is a majestic haveli known as Samode Palace. This haveli stands out as a luxurious and magnificent attraction in the middle of rugged hills. It is around four hundred years old and belonged to the Rawals of Samode.
    
          Today, this haveli has been converted into a comfortable hotel. It is a three-story building with its own courtyards. The walls of the haveli are painted in warm colors, highlighting intricate marble work. The most attractive feature of the haveli is the *Diwan-i-Khas*, adorned with original paintings and mirror work. The palace also showcases antiques, colorful artwork, and traditional artifacts.
    
          Visitors to the palace will experience magnificence, elegance, and good taste. The entrance to the palace is through the village, where locals will welcome you with excitement and smiles.
    
          After exploring this place, you will be taken back to Jaipur for departure.
        `,
    },
    {
      id: '2',
      title: 'Same Day Pushkar City Tour',
      image: '/images/slider/PushkarOne.jpeg',
      description: `
          **Highlights of Pushkar include:**
      
          - **Camel Safari (2hrs):** Tourists can explore the rugged terrain of the Great Indian Desert of Thar using camels.
      
          - **Pushkar Lake (1.5hrs):** The prime attraction of Pushkar is the Pushkar Lake. The water of this lake is considered sacred, akin to the Mansarovar Lake in Tibet.
      
          - **Brahma Temple (1hr):** Pushkar is dedicated to Lord Brahma, the creator of the universe according to Indian mythology. It is said that Brahma performed penance here for 60,000 years.
      
          - **Savitri Temple (1hr):** Located on top of the Ratnagiri hill, the highest hill around the Pushkar Lake, this temple is dedicated to Savitri, the estranged wife of Lord Brahma.
      
          - **Varaha Temple (30 min):** This fortified temple is the largest and most ancient temple in Pushkar. It is dedicated to Varaha (The Boar), the third avatar (incarnation) of Lord Vishnu.
      
          - **Ranganath Venugopal Temple (30 min):** Also referred to as the Old Rang-Jee Temple, this temple was built in 1844 by Seth Puranmal Ganeriwal of Lakshmangarh, Shekhawati.
        `,
    }
    ,
    {
      id: '3',
      title: 'Jaipur City Sightseeing Tour',
      image: '/images/slider/JaipurSightseeing.jpeg',
      description: `
          **Highlights of the Jaipur City Sightseeing Tour:**
      
          - **A ride on an elephant (20 minutes):** Enjoy the most luxurious way to enter the Amer Fort, like royalty.
      
          - **Exploring the Amer Fort (1.5-2 hours):** Discover the grandeur and history of this iconic fort.
      
          - **Photographing the Jal Mahal (30 minutes):** Capture the beauty of this stunning water palace surrounded by picturesque landscapes.
      
          - **The City Palace (around 2 hours):** Marvel at the architecture, royal artifacts, and opulence of this magnificent palace.
      
          - **The Jantar Mantar (30 minutes):** Visit this historic astronomical observatory, a UNESCO World Heritage Site.
      
          - **The Hawa Mahal (20 minutes):** Admire the intricate latticework of the iconic “Palace of Winds.”
      
          - **The Pink City Gates and Central Jaipur (30 minutes - 1 hour):** Stroll through the vibrant streets and iconic gates of the Pink City.
      
          - **Short hike to the Sun Temple (45-60 minutes):** Take a scenic hike and watch the sunset from this beautiful vantage point.
      
          - **Dinner at Chokhi Dhani, Sanganer (1.5-2 hours):** Experience authentic Rajasthani cuisine and cultural performances at this renowned village-themed resort.
        `,
    }
    ,
    {
      id: '4',
      title: 'Agra City Same Day Tour',
      image: '/images/slider/AgraOne.jpeg',
      description: `
          **Highlights of the Agra City Tour:**
      
          - **Taj Mahal:** 
            The Taj Mahal was built by Mughal emperor Shah Jahan in memory of his third wife, Mumtaz Mahal. It is regarded as the finest example of Mughal architecture. This white marble mausoleum, widely recognized as the "jewel of Muslim art" in India, is a universally admired masterpiece of world heritage. The architectural style of the Taj Mahal combines elements from Persian, Ottoman Turkish, and Indian styles.
      
          - **Agra Fort:** 
            Agra Fort, located about 2.5 km northwest of the Taj Mahal, served as the royal residence of the Mughal emperors for generations. This fort played a crucial role during the Indian rebellion of 1857. It has a semicircular plan, with walls that are seventy feet high. The double ramparts feature massive circular bastions, battlements, embrasures, and string courses. The fort has four gates, one on each side, and is an impressive example of Mughal fort architecture.
      
          - **Fatehpur Sikri:** 
            Fatehpur Sikri is a city near the older Sikri, built by Akbar the Great. Originally named Fatehabad, derived from the Arabic word "Fateh," meaning "victory," it later became known as Fatehpur Sikri. This city served as the Mughal capital for a brief period and reflects Akbar's vision and architectural prowess. The complex was planned based on Persian principles and showcases a blend of Mughal architecture with Persian influences.
        `,
    }
    ,
    {
      id: '5',
      title: 'Delhi City Same Day Tour',
      image: '/images/slider/DelhiOne.jpeg',
      description: `
          **Highlights of the Delhi City Tour:**
      
          - **Laxmi Narayan Temple (Birla Mandir):** 
            A large Hindu temple built in 1938 by the Birla family in Orissa style. Open to people of all faiths, it is a peaceful and spiritual destination.
      
          - **Qutub Minar:** 
            A UNESCO World Heritage Site, this 72.5-meter-high victory tower is a fine example of Afghan architecture. Its construction began in the 12th century under Qutubuddin Aibak and was completed by his successors.
      
          - **Bahai Temple (Lotus Temple):** 
            Located on Kalkaji Hill, this marble temple, shaped like a lotus flower, was built in 1987 by the followers of the Bahai faith. It represents the purity and equality of all religions. *(Closed on Mondays)*
      
          - **Gandhi Smriti:** 
            This memorial preserves Mahatma Gandhi's personal effects and showcases photographs, sculptures, paintings, and relics from his life. The site reflects the values and ideals that made Gandhi a global figure of peace and nonviolence.
      
          - **Red Fort:** 
            Built by Shah Jahan (1639-1648), this iconic fort is a UNESCO World Heritage Site and a major historical landmark. *(Closed on Mondays)*
      
          - **Rajghat:** 
            A simple square platform of black marble marks the cremation site of Mahatma Gandhi, known as the "Father of the Nation."
      
          - **Humayun's Tomb:** 
            Built by Queen Haji Begum in the 16th century, this architectural marvel is considered the precursor to the Taj Mahal.
      
          - **Old Fort (Purana Qila):** 
            This ancient fort is open only on Mondays and is a significant example of Mughal-era architecture.
      
        `,
    }
    ,
    {
      id: '6',
      title: 'Jodhpur City Same Day Tour',
      image: '/images/slider/JodhpurOne.jpeg',
      description: `
          **Highlights of the Jodhpur City Tour:**
      
          1. **Mehrangarh Fort:**
             - Perched on a 150-meter-high hill, this is one of the most formidable and magnificent forts in Rajasthan.
             - Founded by Rao Jodha in 1459, the fort showcases additions by successive rulers over centuries.
             - Visitors can see battle scars, such as cannonball marks, on the gates.
             - Key attractions include Jayapol (Victory Gate), built by Maharaja Man Singh, and Fatehpol, commemorating victories over Mughals.
      
          2. **Jaswant Thada:**
             - Located on the way down from Mehrangarh Fort, this graceful marble cenotaph was built in memory of Maharaja Jaswant Singh II.
             - Known as the "Taj Mahal of Marwar," it features intricately carved marble stones and temple-like architecture.
             - Timings: 9 AM to 5 PM.
      
          3. **Mandore Garden:**
             - Former capital of Marwar, located about 5 miles north of Jodhpur, later abandoned for the security of Mehrangarh Fort.
             - Features cenotaphs (dewals) of Jodhpur's rulers built in Hindu temple style with fine columns and spires in red sandstone.
             - Attractions include the dewal of Maharaja Ajit Singh, Hall of Heroes, and Shrine of the Three Hundred Million.
             - Extensive gardens and rocky terraces make it a popular local attraction.
      
          4. **Clock Tower and Sardar Market:**
             - A bustling market area near the iconic Clock Tower.
             - Known for its narrow alleys and shops selling textiles, antiques, silverware, and handicrafts.
        `,
    }
    ,
    {
      id: '7',
      title: 'Jaipur Walking Day Tour',
      image: '/images/slider/JaipurWalking.jpeg',
      description: `
          **Highlights of the Jaipur Walking Day Tour:**
      
          1. **Albert Hall Museum:**
             - Commissioned by Sawai Ram Singh II in 1876 A.D., this museum is a stunning example of Indo-Saracenic architecture designed by Sir Samuel Swinton Jacob.
             - The construction was started as famine relief for the craftsmen of the state.
      
          2. **New Gate:**
             - Originally, the old city was encircled by a formidable wall with seven gates.
             - New Gate, the eighth gate, was opened in the mid-20th century and overlooks Ram Niwas Bagh.
      
          3. **Thatheron Ka Rasta / Nanak Ram Patel Ki Gali:**
             - A hub of craftsmen making traditional brass utensils using age-old hand tools and techniques.
      
          4. **Anant Bhagwan Ka Mandir (Nataniyon Ka Rasta):**
             - A 250-year-old temple showcasing traditional building skills and materials. 
             - Recently renovated to preserve its historic charm.
      
          5. **Sarvajanik Kaun (Public Well):**
             - A former meeting place for women drawing water, now undergoing restoration to revive its historical significance and open space.
      
          6. **Sanghi Ji - Jain Temple:**
             - Built in 1731, this Digamber Jain temple is renowned for its intricate traditional Kundan work on the walls.
      
          7. **Andheri Darwaja:**
             - A dark passage connecting Sanghon Ka Rasta to Kishanpole Bazaar, located under a building and steeped in history.
        `,
    }
    ,
    {
      id: '8',
      title: 'Slums Day Tour',
      image: '/images/slider/SlumsTour.jpeg',
      description: `
          **Highlights:**
          - Explore the Kathputli colony.
          - Watch the Bhat community crafting wooden puppets.
          - Experience old traditions thriving in humble settings.
      
          **Detailed Description:**
          A half-day trip to the Kathputli colony is a must for those who seek to explore beyond the conventional tourist spots. This tour offers a glimpse into the lives of the keepers of a thousand-year-old tradition, preserving it against all odds.
      
          After an early pick-up from your hotel post-breakfast, you will be driven to the Kathputli colony located on the outskirts of the city. Like most slums in India, the colony is characterized by congested habitation and narrow lanes. However, the true charm lies in interacting with the "Bhat Tribal Community," who are pioneers of the unique art of making "Kathputlis" (traditional puppets).
      
          Observing the stages of kathputli-making is a fascinating experience. Witness how skillful artisans transform simple pieces of wood into lifelike puppets. These puppets serve as storytellers, communicating folk tales, social messages, and family histories through music and vocals. While they once entertained royalty, today they perform at posh hotels, social events, and cultural festivals.
      
          An inspiring aspect of this community is their dedication to their craft. Despite better economic opportunities elsewhere, many continue to make puppets, as the art defines their identity and heritage.
      
          The tour concludes with a complimentary souvenir for tourists. Before heading back, enjoy a delicious Rajasthani meal. As the day ends, take with you memories of the artistry and vibrancy of these enchanting "Kathputlis."
        `,
    }
    ,
    {
      id: '9',
      title: 'Bicycling City Day Tour',
      image: '/images/slider/CyclingTour.jpeg',
      description: `
          **Overview:**
          If you are an adventure enthusiast looking to explore Jaipur beyond traditional sightseeing tours, our cycling tours are the perfect way to discover the hidden gems of this vibrant city. Experience the charming walled city with its historic pink stucco buildings, hilltop forts, serene hills, scrub forests, scenic villages, and ancient temples—all on a bicycle.
      
          **Tour Options:**
      
          **1) Ramgarh Lake Cycling Tour**
          - **Distance:** Approximately 41 km from Jaipur
          - **Description:** Located amidst the Aravali hills, Ramgarh Lake spans an area of 15.5 sq. km and was once Jaipur’s primary water source. The area is rich in wildlife and birdlife, making it a serene escape from the city.
          - **Tour Highlights:** 
            - Ride through picturesque landscapes.
            - Visit ethnic villages, ancient ruins, and famous shrines.
            - Enjoy views of lush farmlands and the tranquil environment.
          - **Duration:** Full-day guided tour.
      
          **2) Nahargarh Cycling Tour**
          - **Description:** A half-day ride exploring Jaipur city and its prominent landmarks. Begin your journey through the streets of the Pink City, passing iconic sites such as Hawa Mahal and Jal Mahal. Transition from urban charm to the peaceful Aravali hills, with panoramic views of the city.
          - **Tour Highlights:**
            - Ride through the vibrant streets of Jaipur.
            - See historical monuments and cultural landmarks.
            - Enjoy the scenic beauty of the Aravali hills.
          - **Duration:** Half-day guided tour.
      
          Both tours provide an immersive experience, blending adventure with Jaipur’s rich culture and natural beauty.
        `,
    },
  ];

  return (
    <>
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Explore India" subHeading="Discover India" />
      </div>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Tour Options</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {tours.map((tour) => (
            <a
              href={`/tour/${tour.id}`}
              key={tour.id}
              className="block rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={tour.image}
                alt={tour.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-secondary">{tour.title}</h2>
                <p className="text-gray-700 text-sm">
                  {/* {tour.description} */}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <section className="py-10 md:py-24 px-4 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={'/images/slider/JaipurTwo.jpeg'}
                alt="Elephant Ride"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                className="transition duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-75 transition duration-500 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl transition duration-500 ease-in-out transform group-hover:translate-y-2">
                <p>Elephant Ride</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={'/images/slider/Jalmahal.jpeg'}
                alt="Jal Mahal"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                className="transition duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-75 transition duration-500 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl transition duration-500 ease-in-out transform group-hover:translate-y-2">
                <p>Jal Mahal Visit</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={'/images/slider/Gatore.jpeg'}
                alt="Gatore ki chatri"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                className="transition duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-75 transition duration-500 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl transition duration-500 ease-in-out transform group-hover:translate-y-2">
                <p>Gatore Ki Chatri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
