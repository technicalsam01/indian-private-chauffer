export interface DescriptionContent {
    type: 'heading' | 'text' | 'list';
    content: string | string[];
  }
  
  // Define the interface for Tours
  export interface Tour {
    id: string;
    title: string;
    cities: string;
    description: DescriptionContent[];
    image: string; // Assuming the image is a path or URL string
  }

export const tours = [
    {
        id: "1",
        title: 'Golden Triangle Tour: 6 Days',
        cities: 'Delhi – Agra – Jaipur – Delhi in 6 days',
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi',
            },
            {
                type: 'text',
                content: 'A warm traditional welcome at Indira Gandhi International Airport awaits you at Delhi, followed by a transfer to your hotel for dinner and an overnight stay. You will also receive the full details of the tour itinerary during dinner.',
            },
            {
                type: 'heading',
                content: 'Day 02: Delhi',
            },
            {
                type: 'list',
                content: [
                    'New Delhi Highlights: Rashtrapati Bhawan (President\'s Palace), Parliament House, and India Gate, where you can enjoy a boat ride and well-maintained lawns. Explore Humayun\'s Tomb and Qutub Minar.',
                    'Old Delhi Highlights: Red Fort, Jama Masjid (India\'s largest mosque), Raj Ghat (memorial to Mahatma Gandhi), and Chandni Chowk bazaar, where you can shop and enjoy famous delicacies.',
                    'End the day with a sound and light show at Red Fort. Overnight stay at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 03: Agra',
            },
            {
                type: 'text',
                content: 'In the morning, leave for Agra, visiting Fatehpur Sikri en route.',
            },
            {
                type: 'list',
                content: [
                    'Fatehpur Sikri Highlights: Panch Mahal, Anup Talao, Diwan-e-Khas, sacred Tomb of Salim Chisti, and Buland Darwaza.',
                    'On arrival in Agra, check in at the hotel. Spend the evening exploring Agra\'s markets for souvenirs like marble crafts, leather items, brass handicrafts, and the famous sweet "Petha." Overnight stay at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 04: Agra',
            },
            {
                type: 'list',
                content: [
                    'Highlights: Taj Mahal (emblem of love), Agra Fort (with its palaces and mosques), and Sikandra (tomb of Emperor Akbar).',
                    'Overnight stay at the hotel in Agra.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 05: Jaipur',
            },
            {
                type: 'text',
                content: 'In the morning, drive to Jaipur, the capital of Rajasthan. Witness colorful traditional attire and turbans of locals.',
            },
            {
                type: 'list',
                content: [
                    'Check in at the hotel and freshen up.',
                    'Enjoy a royal elephant ride to Amber Fort and visit the Hall of Victory and Jal Mahal (situated amidst Man Sagar Lake).',
                    'Overnight stay at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 06: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Highlights: City Palace (with its museum), Jantar Mantar, Hawa Mahal, and local bazaars.',
                    'Spend the evening at leisure, shopping, or savoring traditional Rajasthani cuisine like Dal Bati Churma and Bajre Ki Roti. Overnight stay at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 07: Delhi',
            },
            {
                type: 'text',
                content: 'After breakfast, return to Delhi. Enjoy a farewell lunch at the hotel, followed by a transfer to the airport to catch your flight.',
            },
        ],
        image: '/images/slider/GoldenTriangle.jpeg',
    }
    ,

    {
        id: "2",
        title: 'Rajasthan: 11 Days',
        cities: 'Delhi - Agra - Jaipur - Jodhpur - Jaisalmer - Udaipur - Delhi',
        description: [
            {
                type: 'heading',
                content: 'Day 1: Delhi',
            },
            {
                type: 'text',
                content: 'Arrival at Indira Gandhi International Airport. Transfer to hotel by car. Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 2: Delhi',
            },
            {
                type: 'list',
                content: [
                    'Red Fort',
                    'Jama Masjid',
                    'Raj Ghat (cremation place of Mahatma Gandhi)',
                    'Qutub Minar',
                    'Lotus Temple',
                    'Humayun’s Tomb',
                    'Indira Gandhi Museum',
                    'India Gate',
                    'President House',
                    'Birla Temple',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 3: Delhi to Agra',
            },
            {
                type: 'list',
                content: [
                    'Sikandra',
                    'Dayal Bagh',
                    'Agra Fort',
                    'Itimad-ud-Daula',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in Agra.',
            },
            {
                type: 'heading',
                content: 'Day 4: Agra to Jaipur',
            },
            {
                type: 'text',
                content: 'Early morning visit to the Taj Mahal. Afternoon drive to Jaipur via Fatehpur Sikri. Overnight stay in Jaipur.',
            },
            {
                type: 'heading',
                content: 'Day 5: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Early morning visit to Amber Fort with an elephant ride to ascend the hilltop fort.',
                    'Visit Jal Mahal ("The Water Palace").',
                    'Sightseeing tour of Jaipur: Hawa Mahal, City Palace, Royal Observatory, and Jaigarh Fort.',
                    'Enjoy a traditional Rajasthani Thali dinner.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 6: Jaipur to Jodhpur',
            },
            {
                type: 'list',
                content: [
                    'Early morning transfer to Jodhpur (5-6 hours drive).',
                    'Half-day village safari.',
                    'Afternoon visit to Mehrangarh Fort, Jaswant Thada, and Mandore Garden.',
                    'Evening free time at Old City Market.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 7: Jodhpur to Jaisalmer',
            },
            {
                type: 'text',
                content: 'Early morning drive to Jaisalmer (4-5 hours drive). Half-day city visit or leisure time. Overnight stay in Jaisalmer hotel.',
            },
            {
                type: 'heading',
                content: 'Day 8: Jaisalmer',
            },
            {
                type: 'list',
                content: [
                    'After breakfast, visit Golden Jaisalmer Fort, Jain Temple, Manak Chowk, and Havelis.',
                    'Visit Sam Sand Dunes (42 km): enjoy camel rides, gypsy dances, and dinner.',
                    'Optional overnight stay in Royal Tents or in Jaisalmer hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 9: Jaisalmer to Udaipur',
            },
            {
                type: 'text',
                content: 'After breakfast, drive to Udaipur. Visit the city and enjoy an optional boat ride in Lake Pichola and visit Jag Mandir. Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 10: Udaipur',
            },
            {
                type: 'list',
                content: [
                    'City Palace',
                    'Jagdish Temple',
                    'Bhartiya Lok Kala Museum',
                    'Sahelion-ki-Bari',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in Udaipur.',
            },
            {
                type: 'heading',
                content: 'Day 11: Udaipur to Delhi',
            },
            {
                type: 'text',
                content: 'Morning sightseeing of Udaipur includes Lake Pichola and other attractions. Evening flight to your next destination.',
            },
        ],
        image: '/images/slider/Rajasthan11Days.jpeg',
    }

    ,
    {
        id: "3",
        title: 'Rajasthan Tour: 8 Days',
        cities: {
            destinations: 'Jaipur - Bikaner - Jaisalmer - Jodhpur - Mount Abu - Udaipur',
            duration: '08 Nights / 09 Days',
        },
        description: [
            {
                type: 'heading',
                content: 'Day 01: Jaipur',
            },
            {
                type: 'text',
                content: 'Arrival at Jaipur Airport and transfer to the hotel. After a traditional Rajasthani breakfast, proceed for a sightseeing tour of Jaipur.',
            },
            {
                type: 'list',
                content: [
                    'Visit Jantar Mantar, City Palace, and its museum, and Hawa Mahal.',
                    'Evening excursion to Amer Fort with an elephant ride.',
                    'Leisure time or explore the local markets.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 02: Bikaner',
            },
            {
                type: 'text',
                content: 'Morning drive to Bikaner. Upon arrival, check in at the hotel.',
            },
            {
                type: 'list',
                content: [
                    'Visit the Camel Breeding Farm and explore other palaces and parks.',
                    'Shop for camel-leather items and enjoy Bikaneri snacks.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Bikaner / Jaisalmer',
            },
            {
                type: 'text',
                content: 'After breakfast, visit Junagarh Fort in Bikaner.',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jaisalmer and check in at the hotel.',
                    'Visit Patwon-ki-Haveli.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel in Jaisalmer.',
            },
            {
                type: 'heading',
                content: 'Day 04: Jaisalmer',
            },
            {
                type: 'text',
                content: 'After breakfast, explore the highlights of Jaisalmer:',
            },
            {
                type: 'list',
                content: [
                    'Jaisalmer Fort and Jain Temples.',
                    'Enjoy a camel ride at Sam Sand Dunes followed by music and dance performances.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 05: Jodhpur',
            },
            {
                type: 'text',
                content: 'Morning drive to Jodhpur and check in at the hotel.',
            },
            {
                type: 'list',
                content: [
                    'Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace.',
                    'Evening leisure time or explore the local market.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 06: Mount Abu',
            },
            {
                type: 'text',
                content: 'Drive to Mount Abu, Rajasthan’s only hill station.',
            },
            {
                type: 'list',
                content: [
                    'Visit Delwara Jain Temples, Nakki Lake, and Sunset Point.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 07: Udaipur',
            },
            {
                type: 'text',
                content: 'After breakfast, drive to Udaipur.',
            },
            {
                type: 'list',
                content: [
                    'Visit Ranakpur Temples and the marble complex of Adinath Shrine en route.',
                    'Check in at the hotel in Udaipur.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in Udaipur.',
            },
            {
                type: 'heading',
                content: 'Day 08: Udaipur',
            },
            {
                type: 'text',
                content: 'Full-day sightseeing in Udaipur:',
            },
            {
                type: 'list',
                content: [
                    'Enjoy a boat ride on Lake Pichola.',
                    'Visit Kumbhalgarh Fort, City Palace, and other famous landmarks.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in Udaipur.',
            },
        ],
        image: '/images/slider/Rajasthan8Days.jpeg',
    }

    ,
    {
        id: "4",
        title: 'Rajasthan PALACE Tour: 10 Days',
        cities: {
            destinations: 'Delhi - Jaipur - Jodhpur - Udaipur - Jaisalmer - Bikaner - Mandawa - Delhi',
            duration: '09 Nights / 10 Days',
        },
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi – Jaipur',
            },
            {
                type: 'text',
                content: 'Upon arrival at Delhi airport, meet our representatives. Drive to Jaipur and check in at the hotel.',
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 02: Jaipur Sightseeing',
            },
            {
                type: 'list',
                content: [
                    'Explore Amber Fort, Jagmandir, Jal Mahal, and Lake Pichola.',
                    'Visit City Palace, Hawa Mahal, and Jantar Mantar.',
                ],
            },
            {
                type: 'text',
                content: 'Dinner and overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Jaipur – Kota – Bundi',
            },
            {
                type: 'list',
                content: [
                    'Drive to Kota and visit Taragarh Fort and the 84-pillared cenotaph.',
                    'Proceed to Bundi and check in at the hotel.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 04: Bundi – Udaipur',
            },
            {
                type: 'text',
                content: 'Drive to Udaipur. Visit City Palace Museum and Jagdish Temple.',
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 05: Udaipur Sightseeing',
            },
            {
                type: 'list',
                content: [
                    'Visit Sahelion Ki Bari, Lake Pichola, and Jag Mandir.',
                    'Leisure time to explore Udaipur markets.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 06: Udaipur – Jodhpur',
            },
            {
                type: 'text',
                content: 'Drive to Jodhpur, visiting Ranakpur Jain Temples en route.',
            },
            {
                type: 'text',
                content: 'Check in at the hotel in Jodhpur.',
            },
            {
                type: 'heading',
                content: 'Day 07: Jodhpur – Jaisalmer',
            },
            {
                type: 'list',
                content: [
                    'Visit Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, and Clock Tower.',
                    'Drive to Jaisalmer and check in at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 08: Jaisalmer Sightseeing',
            },
            {
                type: 'list',
                content: [
                    'Explore Jaisalmer Fort, Jain Temples, Havelis, and Sam Sand Dunes.',
                    'Enjoy cultural performances.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 09: Jaisalmer – Bikaner',
            },
            {
                type: 'list',
                content: [
                    'Drive to Bikaner and visit Junagadh Fort, Bhand Sagar Temple, Lal Garh Palace, and Camel Breeding Farm.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 10: Bikaner – Mandawa',
            },
            {
                type: 'list',
                content: [
                    'Visit the havelis of Mandawa and explore their magnificent paintings.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 11: Mandawa – Delhi',
            },
            {
                type: 'list',
                content: [
                    'Drive to Delhi.',
                    'Visit Red Fort, Jama Masjid, and Chandni Chowk.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 12: Departure from Delhi',
            },
            {
                type: 'list',
                content: [
                    'Explore New Delhi’s landmarks, including the President\'s Palace, Parliament House, and India Gate.',
                    'Visit Akshardham Mandir and Qutub Minar.',
                ],
            },
            {
                type: 'text',
                content: 'Evening flight to your destination.',
            },
        ],
        image: '/images/slider/Rajasthan10DayesOne.jpeg',
    }

    ,
    {   id: "5",
        title: 'Rajasthan Palace Tour: 10 Days',
        cities: {
            destinations: 'Delhi - Jaipur - Sariska - Mandawa - Bikaner - Khimsar - Jodhpur - Delhi',
            duration: '09 Nights / 10 Days',
        },
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi',
            },
            {
                type: 'text',
                content: 'Warm traditional welcome at the airport. Transfer to the hotel for an overnight stay.',
            },
            {
                type: 'heading',
                content: 'Day 02: Delhi',
            },
            {
                type: 'list',
                content: [
                    'Visit Red Fort, Jama Masjid, and Chandni Chowk.',
                    'Explore Rajghat, India Gate, Rashtrapati Bhavan, and Mughal Gardens.',
                    'Visit Qutub Minar and Humayun\'s Tomb.',
                    'Evening sound and light show at Red Fort.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jaipur and check in at the hotel.',
                    'Visit Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Jai Garh Fort, and Sisodia-Rani-Ka-Bagh.',
                    'Evening shopping or leisure time.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 04: Sariska',
            },
            {
                type: 'text',
                content: 'Drive to Sariska Wildlife Sanctuary and spot wildlife species, including tigers. Overnight stay at Sariska resort.',
            },
            {
                type: 'heading',
                content: 'Day 05: Mandawa',
            },
            {
                type: 'text',
                content: 'Drive to Mandawa. Explore the painted Havelis from the 18th and 19th centuries. Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 06: Bikaner',
            },
            {
                type: 'list',
                content: [
                    'Drive to Bikaner and visit Camel Breeding Farm, Junagarh Fort, Lalgarh Palace, and Jain Temples.',
                    'Leisure time in the evening.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 07: Bikaner',
            },
            {
                type: 'list',
                content: [
                    'Sightseeing tour of Bikaner, including Junagarh Fort and Jain Temples.',
                    'Relish the famous Bikaneri Bhujia.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 08: Khimsar',
            },
            {
                type: 'list',
                content: [
                    'Travel to Khimsar and check in at the hotel.',
                    'Visit Khimsar Fort and enjoy traditional Rajasthani cuisine.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 09: Jodhpur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jodhpur and visit Mehrangarh Fort, Umaid Bhawan Palace, and Jaswant Thada.',
                    'Evening visit to the local markets.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 10: Delhi',
            },
            {
                type: 'text',
                content: 'Drive back to Delhi and depart for your onward journey.',
            },
        ],
        image: '/images/slider/Rajasthan10DayesTwo.jpeg',
    }
    ,
    {
        id: "6",
        title: 'Rajasthan Ethnic Tour : 10 Days',
        cities: 'Destinations Covered: Delhi - Agra - Jaipur - Jodhpur - Udaipur - Kishangarh - Delhi',
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi',
            },
            {
                type: 'text',
                content: 'You will be received at the Indira Gandhi International Airport in New Delhi and transferred to the hotel, where a warm traditional welcome awaits you, complete with garlands, a welcome drink, and sweets. Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 02: Delhi',
            },
            {
                type: 'list',
                content: [
                    'In the morning, go on a sightseeing tour of Delhi after breakfast in an A/C deluxe coach.',
                    'Visit Raj Ghat, Mahatma Gandhi\'s memorial, Jama Masjid, Red Fort, Chandani Chowk, and its delicacies in Old Delhi.',
                    'Explore Humayun\'s Tomb, Qutub Minar, Rajpath, India Gate, Parliament House, President\'s Residence in New Delhi.',
                    'Shop at Connaught Place and Palika Bazaar.',
                    'In the evening, enjoy traditional dance performances.',
                ],
            },
            {
                type: 'text',
                content: 'Dinner and overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Agra',
            },
            {
                type: 'list',
                content: [
                    'Drive to Agra (4-5 hours) and visit Taj Mahal, Agra Fort, Tomb of Itmad-ud-Daulah, and shopping markets.',
                    'Enjoy Mughlai cuisine for dinner.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel in Agra.',
            },
            {
                type: 'heading',
                content: 'Day 04: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jaipur, visiting Fatehpur Sikri enroute. Explore Sheikh Chi\'s Tomb, Buland Darwaza, Panch Mahal, and Jodha Bai\'s Palace.',
                    'Check in at the hotel in Jaipur, also known as the Pink City.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel in Jaipur.',
            },
            {
                type: 'heading',
                content: 'Day 05: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Excursion to Amber Palace, enjoy a royal ride on an elephant to the hilltop.',
                    'Visit City Palace, Chandra Mahal, Shri Govind Deo Temple, City Palace Museum, Jantar Mantar, and Hawa Mahal.',
                    'Spend the evening at leisure or shop in the colorful bazaars of Jaipur.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 06: Jodhpur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jodhpur and visit Mehrangarh Fort, Jaswant Thada Memorial.',
                    'Overnight stay at the hotel.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 07: Udaipur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Udaipur, visiting the Jain Temple of Ranakpur enroute.',
                    'Check in at the hotel in Udaipur, the City of Lakes.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 08: Udaipur',
            },
            {
                type: 'list',
                content: [
                    'Sightseeing tour of Udaipur, including City Palace, Shish Mahal, and the royal museum.',
                    'Motor launch cruise on Lake Pichola, Jag Mandir and Jag Niwas islands, Jagdish Temple, and the Royal Cenotaphs.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 09: Pushkar',
            },
            {
                type: 'list',
                content: [
                    'Drive to Pushkar, visiting Dargah Sharif in Ajmer on the way.',
                    'Visit the Brahma Temple, Pushkar Lake, 52 bathing Ghats, and more than 500 temples.',
                    'Explore the Rose Garden and witness the famous Pushkar Camel Fair (if lucky).',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel in Pushkar.',
            },
            {
                type: 'heading',
                content: 'Day 10: Kishangarh/ Delhi',
            },
            {
                type: 'list',
                content: [
                    'Drive to Kishangarh, known for its miniature paintings and handicrafts.',
                    'Visit the Fort of Kishangarh and have lunch at Phool Mahal.',
                    'Watch birds at Gundalao Lake and drive to Delhi for departure.',
                ],
            },
            {
                type: 'text',
                content: 'Evening transfer to Delhi airport for onward flight.',
            },
        ],
        image: '/images/slider/Rajasthan10DaysThree.jpeg',
    }
    ,
    {
        id: "7",
        title: 'Rajasthan DESERT Tour : 16 Days',
        cities: 'Destinations Covered: Delhi - Mandawa - Bikaner - Jaisalmer - Jodhpur - Jaipur - Delhi',
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi',
            },
            {
                type: 'text',
                content: 'You will be received at Indira Gandhi International Airport at New Delhi and then transferred to the hotel for an overnight stay.',
            },
            {
                type: 'heading',
                content: 'Day 02: Delhi',
            },
            {
                type: 'list',
                content: [
                    'Sightseeing tour of Delhi including Red Fort, Jama Masjid, a rickshaw ride in the 400 years old market of Chandni Chowk, and Raj Ghat in Old Delhi.',
                    'Visit Birla Temple, Parliament House, Presidential House, India Gate, Government buildings, and Qutub Minar in New Delhi.',
                    'Enjoy Mughlai cuisine for dinner and watch Indian cultural dance performances in the evening.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Mandawa',
            },
            {
                type: 'list',
                content: [
                    'Drive to Mandawa in the Shekhawati region after breakfast.',
                    'Visit the 150 to 200-year-old carved and painted Havelis with beautiful frescoes done in natural colors.',
                ],
            },
            {
                type: 'text',
                content: 'Check-in at the hotel for an overnight stay.',
            },
            {
                type: 'heading',
                content: 'Day 04: Bikaner',
            },
            {
                type: 'list',
                content: [
                    'Drive to Bikaner and check-in at the hotel.',
                    'Visit the world-famous Camel Breeding Farms to ride camels and taste camel milk.',
                    'Explore Junagarh Fort, Lalgarh Palace, and the Fort Museum in the afternoon.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 05: Khimsar',
            },
            {
                type: 'list',
                content: [
                    'Drive to Khimsar after breakfast, visiting the 600-year-old Deshnok Rat Temple enroute.',
                    'Visit Khimsar Fort and go on a camel safari to nearby villages, capturing sunset views of the Thar Desert.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel in Khimsar.',
            },
            {
                type: 'heading',
                content: 'Day 06: Ossian/Jaisalmer',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jaisalmer, visiting the 7th century Mahavira Jain Temple and the 2000-year-old Jija Mata Temple at Ossian village enroute.',
                ],
            },
            {
                type: 'text',
                content: 'Check-in at the hotel in Jaisalmer for an overnight stay.',
            },
            // Add remaining days' itinerary here for completeness...
            {
                type: 'heading',
                content: 'Day 17: Delhi',
            },
            {
                type: 'list',
                content: [
                    'Drive back to Delhi in the morning and check-in at the hotel.',
                    'Spend the day at leisure or go shopping.',
                    'Enjoy a farewell dinner at the hotel.',
                ],
            },
            {
                type: 'text',
                content: 'You will be escorted to the international airport for your onward journey.',
            },
        ],
        image: '/images/slider/Rajasthan16Days.jpeg',
    }
    ,

    {
        id: "8",
        title: "Rajasthan FORT– PALACE Tour : 20 Days",
        cities: "Destinations Covered: Delhi - Agra - Jaipur - Pushkar - Ranthambhore - Kota - Bundi - Chittaurgarh - Bijaipur - Udaipur - Kumbhalgarh - Jodhpur - Jaisalmer - Bikaner - Mandawa - Delhi",
        description: [
            {
                type: 'heading',
                content: 'Day 01: Arrival at Delhi',
            },
            {
                type: 'text',
                content: 'You will arrive at Delhi, the capital of India, a sprawling metropolis with a fascinating blend of the past and the present. Our representatives will receive you at the international airport and guide you to your hotel for an overnight stay.',
            },
            {
                type: 'heading',
                content: 'Day 02: Agra',
            },
            {
                type: 'list',
                content: [
                    'Drive to Agra, the City of Taj.',
                    'Visit the Taj Mahal, Agra Fort, and Itmad-ud-Daulah\'s Tomb.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 03: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Drive to Jaipur, visiting Fatehpur Sikri en route.',
                    'Check in and enjoy an overnight stay in Jaipur.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 04: Jaipur',
            },
            {
                type: 'list',
                content: [
                    'Visit Amber Fort with an optional elephant ride.',
                    'Tour Jaipur\'s City Palace, Jantar Mantar, Hawa Mahal, and local artisans\' workshops.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in Jaipur.',
            },
            {
                type: 'heading',
                content: 'Day 05: Pushkar',
            },
            {
                type: 'list',
                content: [
                    'Visit Pushkar Lake, Brahma Temple, and Rose Garden.',
                    'Enjoy a sunset cruise on Pushkar Lake.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 06-07: Ranthambhore',
            },
            {
                type: 'list',
                content: [
                    'Explore Ranthambhore Tiger Reserve and its wildlife.',
                    'Visit attractions like Jogi Mahal and Ranthambore Fort.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at a jungle resort.',
            },
            {
                type: 'heading',
                content: 'Day 08: Kota',
            },
            {
                type: 'list',
                content: [
                    'Explore Kota, including City Palace, Jagmandir Temple, Kishore Sagar Lake, and Chambal Gardens.',
                    'Kota is also known for its sarees and miniature paintings.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 09: Bundi/Chittaurgarh',
            },
            {
                type: 'list',
                content: [
                    'Explore Bundi\'s Taragarh Fort, murals, and Sukh Mahal.',
                    'In Chittaurgarh, visit its historic fort.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 10-11: Udaipur',
            },
            {
                type: 'list',
                content: [
                    'Tour Udaipur, including City Palace, Sahelion-ki-Bari, Lake Pichola, and Jag Mandir.',
                    'Enjoy a cruise and overnight stays in Udaipur.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 12: Kumbhalgarh',
            },
            {
                type: 'list',
                content: [
                    'Visit the Ranakpur Jain Temples and Kumbhalgarh Fort.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 13-14: Jodhpur',
            },
            {
                type: 'list',
                content: [
                    'Explore Jodhpur with a village safari.',
                    'Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stays in Jodhpur.',
            },
            {
                type: 'heading',
                content: 'Day 15-16: Jaisalmer',
            },
            {
                type: 'list',
                content: [
                    'Visit Jaisalmer Fort, Patwon-Ki-Haveli, and Sam Sand Dunes.',
                    'Enjoy cultural performances and a barbecue.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay in camping grounds.',
            },
            {
                type: 'heading',
                content: 'Day 17: Bikaner',
            },
            {
                type: 'list',
                content: [
                    'Explore Bikaner\'s Camel Breeding Farm and wells.',
                ],
            },
            {
                type: 'text',
                content: 'Overnight stay at the hotel.',
            },
            {
                type: 'heading',
                content: 'Day 18-19: Mandawa',
            },
            {
                type: 'list',
                content: [
                    'Discover Mandawa Fort and painted Havelis like Chowkhani and Gulab Rai Ladia.',
                    'Return to Delhi on Day 19 for an overnight stay.',
                ],
            },
            {
                type: 'heading',
                content: 'Day 20: Delhi',
            },
            {
                type: 'list',
                content: [
                    'Take a sightseeing tour of Delhi, including Raj Ghat, Jama Masjid, Red Fort, Humayun\'s Tomb, and Qutub Minar.',
                    'End with a farewell dinner and transfer to the airport for your onward journey.',
                ],
            },
        ],
        image: '/images/slider/Rajasthan20Days.jpeg',
    }


];
