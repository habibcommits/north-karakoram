import {
  COMMON_SERVICES_INCLUDED,
  COMMON_SERVICES_NOT_INCLUDED,
  COMMON_SERVICES_REQUIREMENTS,
} from "@/constants/expeditionData";
import heroImage1 from "@assets/stock_images/majestic_mountain_pe_743f6593.jpg";

import DeosaiPlateauImg1 from "@assets/deosai/d1.jpeg";
import DeosaiPlateauImg2 from "@assets/deosai/d2.jpeg";
import DeosaiPlateauImg3 from "@assets/deosai/d3.jpeg";
import AstoreValleyImg1 from "@assets/astore/a1.jpeg";
import AstoreValleyImg2 from "@assets/astore/a2.jpeg";
// import AstoreValleyImg3 from "@assets/"
import FairyMeadowTourImg1 from "@assets/fairy-medow-tour/f1.jpeg";
// import FairyMeadowTourImg2 from "@assets/"
// import FairyMeadowTourImg3 from "@assets/"
import KhunjarabPassImg1 from "@assets/khunjuarab/k1.jpeg";
import KhunjarabPassImg2 from "@assets/khunjuarab/k2.jpeg";
// import KhunjarabPassImg3 from "@assets/"
import HunzaValleyImg1 from "@assets/hunza-valley/h1.jpeg";
import HunzaValleyImg2 from "@assets/hunza-valley/h2.jpeg";
import HunzaValleyImg3 from "@assets/hunza-valley/h3.jpeg";
import ShandoorPoloImg1 from "@assets/shandoor/s1.jpg";
// import ShandoorPoloImg2 from "@assets/"
// import ShandoorPoloImg3 from "@assets/"
import SkarduValleyImg1 from "@assets/skardu-valley/s1.jpeg";
import SkarduValleyImg2 from "@assets/skardu-valley/s2.jpg";
import SkarduValleyImg3 from "@assets/skardu-valley/s3.jpg";
import KhapluValleyImg1 from "@assets/khaplu-valley/k1.jpeg";
import KhapluValleyImg2 from "@assets/khaplu-valley/k2.jpeg";
import KhapluValleyImg3 from "@assets/khaplu-valley/k3.jpeg";
import PhandarValleyImg1 from "@assets/phandar/p1.jpg";
// import PhandarValleyImg2 from "@assets/"
// import PhandarValleyImg3 from "@assets/"

export interface TourTimeline {
  day: string;
  title: string;
  description: string;
}

export interface TourData {
  id: string;
  peak?: string;
  slug: string;
  name: string;
  altitude: string;
  location: string;
  duration: string;
  difficulty: string;
  bestSeason: string | null;
  price: number;
  groupSize: string;
  image: string;
  gallery?: string[];
  description: string;
  overview: string;
  timeline: TourTimeline[];
  servicesIncluded: string[];
  servicesNotIncluded: string[];
  requirements: string[];
  highlights: string[];
}

export const tours: TourData[] = [
  {
    id: "deosai-plateau-tour",
    slug: "deosai-plateau-tour",
    name: "Deosai Plateau Tour",
    altitude: "4,114m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "15-20 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: DeosaiPlateauImg1,
    gallery: [DeosaiPlateauImg1, DeosaiPlateauImg2, DeosaiPlateauImg3],
    description:
      "The Deosai Plateau Tour explores the vast high-altitude plains of Deosai National Park, known for its unique alpine landscape, rich biodiversity, and breathtaking mountain scenery.",
    overview:
      "Situated between Skardu, Astore, and Kharmang in Gilgit-Baltistan, Deosai Plateau lies at an average elevation of around 4,114m and is often referred to as the ‘Land of Giants.’ As the second highest plateau in the world after the Tibetan Changtang Plateau, Deosai covers an area of approximately 3,000 square kilometers and forms part of the Karakoram–West Tibetan Plateau alpine eco-region. Accessible during the summer months, the plateau transforms into a colorful landscape of wildflowers, flowing streams, and abundant wildlife, including Himalayan brown bears, marmots, and a wide variety of birdlife. The Deosai Plateau Tour is ideal for nature lovers, photographers, and travelers seeking a unique high-altitude experience without technical trekking or mountaineering.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, our representative will meet you and provide a private transfer to your hotel. The remainder of the day is available for rest and acclimatization to the local environment. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Drive from Islamabad to Chilas",
        description:
          "Today marks the beginning of our journey north. We depart from the capital city and travel along the scenic mountain roads toward Chilas. This transit day offers a transition from the plains into the rugged foothills of the Karakoram. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive from Chilas to Skardu",
        description:
          "Continuing our journey deeper into the Gilgit-Baltistan region, we follow the Indus River toward Skardu. The drive provides a dramatic introduction to the high-altitude desert landscapes of Baltistan. Altitude: 2,467m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Skardu Excursion: Buddha Rock and Kachura Lakes",
        description:
          "A day dedicated to exploring the cultural and natural highlights of Skardu. We visit the historic Buddha Rock, a testament to the region's ancient heritage, followed by excursions to the beautiful Shangrila Resort and the serene Upper Kachura Lake. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Deosai via Satpara Lake",
        description:
          "We ascend from Skardu toward the Deosai Plateau, often referred to as the 'Land of Giants.' En route, we stop at the turquoise Satpara Lake before reaching the high-altitude wilderness of the plateau. Altitude: 4,114m. Accommodation: Full-service Camping.",
      },
      {
        day: "Day 06",
        title: "Deosai National Park and Sheosar Lake",
        description:
          "A full day is spent exploring the vast, rolling plains of the Deosai National Park. The highlight of the day is a visit to Sheosar Lake, which offers breathtaking reflections of the surrounding Himalayan peaks. Accommodation: Full-service Camping.",
      },
      {
        day: "Day 07",
        title: "Drive from Sheosar Lake to Rama Lake",
        description:
          "We depart the high plateau and descend toward the Astore region. Our destination is the picturesque Rama Lake, located in a lush alpine forest zone beneath the massive Raikot Face of Nanga Parbat. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 08",
        title: "Explore Astore Valley",
        description:
          "Today is dedicated to exploring the verdant Astore Valley. We enjoy the cooler mountain air and the traditional hospitality of this remote Himalayan valley, surrounded by towering peaks. Altitude: 2,600m. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 09",
        title: "Drive from Astore to Gilgit",
        description:
          "We rejoin the Karakoram Highway and travel toward Gilgit, the administrative hub of the region. The drive takes us through varied geographical landscapes where the world’s greatest mountain ranges meet. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 10",
        title: "Drive from Gilgit to Karimabad, Hunza",
        description:
          "A scenic drive takes us into the heart of the Hunza Valley. We arrive in Karimabad, a town famous for its terraced fields and direct views of Rakaposhi and Ultar peaks. Altitude: 2,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 11",
        title: "Hunza Exploration: Altit, Baltit, and Duiker",
        description:
          "A full day of cultural immersion in Hunza. We visit the historic Altit and Baltit Forts, which offer insights into the royal history of the valley. In the evening, we travel to Duiker for a panoramic sunset view over the Karakoram. Accommodation: Hotel.",
      },
      {
        day: "Day 12",
        title: "Excursion to Khunjerab Pass and Return to Sost",
        description:
          "We travel to the Khunjerab Pass, the highest paved international border crossing in the world, connecting Pakistan and China. After exploring the pass, we return to the border town of Sost for the night. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "Return Drive: Sost to Gilgit via Hunza",
        description:
          "We begin our journey south, driving from Sost back through the Hunza Valley to Gilgit. This provides a second chance to admire the dramatic peaks and glaciers of Upper Hunza. Accommodation: Hotel.",
      },
      {
        day: "Day 14",
        title: "Gilgit to Naran via Babusar Top",
        description:
          "Weather permitting, we cross the spectacular Babusar Top to enter the Naran Valley. This high alpine pass serves as a stunning gateway between the Gilgit-Baltistan and Khyber Pakhtunkhwa regions. Accommodation: Hotel.",
      },
      {
        day: "Day 15",
        title: "Full Day in Naran Valley",
        description:
          "A day to relax and explore the popular alpine scenery of the Naran Valley. You may choose to visit local landmarks or simply enjoy the lush greenery and mountain streams of this Himalayan retreat. Accommodation: Hotel.",
      },
      {
        day: "Day 16",
        title: "Drive to Islamabad via Taxila Museum",
        description:
          "We continue our return to the capital. Along the way, we stop at the UNESCO-listed Taxila Museum to explore the rich archaeological history of the Gandhara civilization before arriving in Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 17",
        title: "Islamabad Sightseeing and Departure",
        description:
          "The final day includes a sightseeing tour of Islamabad’s modern highlights and landmarks. Following the tour, you will be transferred to the airport for your international flight home. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Deosai Plateau – the second highest plateau in the world",
      "Vast alpine plains and rolling landscapes",
      "Rich flora, wildflowers, and butterfly species",
      "Wildlife viewing in Deosai National Park",
      "Scenic drive between Skardu, Astore, and Kharmang",
      "Unique high-altitude West Tibetan Plateau ecosystem",
    ],
  },

  {
    id: "astore-valley-tour",
    slug: "astore-valley-tour",
    name: "Astore Valley Tour",
    altitude: "2,600m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "5-10 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: AstoreValleyImg1,
    gallery: [AstoreValleyImg1, AstoreValleyImg2],
    description:
      "The Astore Valley Tour is a scenic journey into one of Pakistan’s most beautiful Himalayan valleys, known for its lush landscapes, dramatic peaks, and tranquil natural beauty.",
    overview:
      "Located in Gilgit-Baltistan and surrounded by the towering peaks of the Himalayas and Karakoram ranges, Astore Valley is a hidden paradise of green meadows, dense forests, glistening streams, and snow-capped mountains. The valley offers breathtaking views of Nanga Parbat (8,126m), along with access to glaciers, alpine lakes, and diverse trekking routes. Visitors experience a blend of natural beauty and cultural richness through encounters with welcoming local communities and traditional village life. Ideal for nature lovers, photographers, and adventure seekers, the Astore Valley Tour provides a peaceful yet inspiring escape into one of Pakistan’s most unspoiled mountain regions.",
    timeline: [
      {
        day: "Day 01",
        title: "Islamabad to Chilas via Karakoram Highway",
        description:
          "Our journey begins with an early morning departure from Islamabad. We travel north along the Karakoram Highway (KKH), passing through the scenic towns of Mansehra, Shinkiari, and Battagram. The route follows the Indus River, taking us through Besham and Dasu, and offering views of the Diamer-Bhasha dam construction sites before we arrive in Chilas for our overnight stay. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Astore Valley and Rama Lake Exploration",
        description:
          "After breakfast, we take a 4-hour drive from Chilas into the heart of the Astore Valley, following the Astore River through traditional villages. After a brief stop at the local Astore Bazaar, we transition to 4x4 jeeps for an ascent on non-metalled roads to Rama. We will visit Rama Lake for photography and breathtaking views of Nanga Parbat. Accommodation: Hotel/Guest House in Rama or Astore.",
      },
      {
        day: "Day 03",
        title: "Deosai Plateau Traverse to Skardu",
        description:
          "Following a morning walk through the lush forest and vegetation near the Rama Polo ground, we depart early for the Deosai Plateau. We cross Bara Pani and enjoy a picnic lunch within Deosai National Park. The day includes stops at the serene Sheosar Lake and Satpara Lake/Dam before we descend into Skardu city. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Kachura Lakes and Shigar Valley",
        description:
          "Today features a visit to the iconic Shangrila Resort and the crystal-clear Upper Kachura Lake. We then drive through the unique Cold Desert to reach the Shigar Valley for lunch at the historic Shigar Fort Residence. In the late afternoon, we return to Skardu where you have the option of a 40-minute hike to the hilltop Kharpocho Fort. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Ghanche and Kharmang Districts",
        description:
          "We travel to the Ghanche district to explore Sailing village and visit the Haji Mushtaq fish farm. The journey continues to Khaplu to visit the 700-year-old Chaqchan Mosque and the restored Khaplu Fort Residence. Finally, we drive to the Kharmang district to witness the magnificent Manthokha Waterfalls before returning to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Return Journey to Naran or Besham",
        description:
          "We begin our return journey toward Islamabad. Depending on seasonal accessibility, we will travel via the Babusar Pass into the Naran/Kaghan Valley. If the pass is closed, we will follow the Karakoram Highway back toward Besham. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 07",
        title: "Final Descent to Islamabad",
        description:
          "On our final day, we complete the drive back to the capital city. We arrive in Islamabad in the afternoon, where our staff will provide a final drop-off at your designated location, marking the conclusion of our Astore Valley tour. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Lush green meadows and alpine landscapes",
      "Views of Nanga Parbat (8,126m), the world’s ninth-highest peak",
      "Crystal-clear streams, rivers, and waterfalls",
      "Traditional villages and local hospitality",
      "Gateway to scenic treks, glaciers, and mountain passes",
      "Peaceful Himalayan valley away from mass tourism",
    ],
  },

  {
    id: "fair-meadow-tour",
    slug: "fairy-meadow-tour",
    name: "Fairy Meadow Tour",
    altitude: "3,300m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: FairyMeadowTourImg1,
    gallery: [FairyMeadowTourImg1],
    description:
      "The Fairy Meadow Tour offers a scenic and accessible trekking experience to one of the most famous high-altitude grasslands in Pakistan, with breathtaking views of Nanga Parbat’s Raikot Face.",
    overview:
      "Located in the Raikot Valley of Gilgit-Baltistan, Fairy Meadows is a serene alpine grassland reachable via a short jeep ride to Tato village followed by a 3-hour trek. The site provides camping and wooden hut accommodations managed by local inhabitants, offering a unique cultural experience alongside stunning mountain scenery. Visitors can enjoy easy treks to nearby Beyal Camp for closer views of Nanga Parbat (8,126m) and its Raikot Face. Fairy Meadows is ideal for nature lovers, photographers, and families, with a trekking season that runs from April to the end of September.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. This day is reserved for rest and personal exploration of the capital city. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Drive from Islamabad to Naran Valley",
        description:
          "After breakfast, we begin our journey north toward the lush Naran Valley. The drive takes us through scenic landscapes and traditional towns, arriving in Naran for an overnight stay in the heart of the Kaghan Valley. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Naran to Chilas via Babusar Top",
        description:
          "We continue our journey toward Chilas, crossing the high-altitude Babusar Top. This mountain pass offers panoramic views of the surrounding peaks and serves as the gateway to the Gilgit-Baltistan region. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Tatu and Trek to Fairy Meadows",
        description:
          "Today, we drive from Chilas to Raikot Bridge, where we transfer to 4x4 jeeps for the rugged drive to Tatu village. From Tatu, we begin a scenic trek to Fairy Meadows, a lush alpine grassland situated beneath Nanga Parbat. Altitude: 3,300m. Accommodation: Huts/Camping.",
      },
      {
        day: "Day 05",
        title: "Excursion to Beyal Camp",
        description:
          "We enjoy a day trek from Fairy Meadows to Beyal Camp, moving closer to the base of Nanga Parbat. After taking in the impressive glacial views and the Raikot Face, we return to Fairy Meadows for the evening. Accommodation: Huts/Camping.",
      },
      {
        day: "Day 06",
        title: "Drive from Fairy Meadows to Astore Valley",
        description:
          "After descending back to the Raikot Bridge, we continue our journey to the Astore Valley. This region is known for its diverse landscapes and serves as a gateway to the southern side of the mountain. Altitude: 2,600m. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 07",
        title: "Drive to Tarishing Valley",
        description:
          "We travel deeper into the Astore region to reach the Tarishing Valley. This picturesque settlement is the traditional starting point for expeditions toward the massive Rupal Face. Altitude: 3,200m. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 08",
        title: "Trek to Rupal and Return to Tarishing",
        description:
          "A day dedicated to exploring the Rupal side of Nanga Parbat. We trek from Tarishing toward the base of the world's highest rock wall before returning to the village for the night. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 09",
        title: "Drive to Rama Lake",
        description:
          "We depart Tarishing and travel to the serene Rama Lake. Surrounded by alpine forests and punctuated by views of the Himalayan peaks, it is one of the most tranquil spots in the region. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 10",
        title: "Drive to Deosai National Park",
        description:
          "Our journey takes us onto the Deosai Plateau, the world's second-highest plateau. We spend the day traversing the high-altitude wilderness, home to unique flora and fauna. Altitude: 4,114m. Accommodation: Full-service Camping.",
      },
      {
        day: "Day 11",
        title: "Deosai to Skardu",
        description:
          "We descend from the Deosai National Park into Skardu, the capital of Baltistan. The landscape shifts from high plains to the dramatic mountains of the Karakoram. Altitude: 2,467m. Accommodation: Hotel.",
      },
      {
        day: "Day 12",
        title: "Skardu Sightseeing",
        description:
          "A full day of sightseeing in Skardu. Highlights include a visit to the historic Buddha Rock, the iconic Shangrila Resort, and the crystal-clear waters of Upper Kachura Lake. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "Travel to Islamabad or Chilas",
        description:
          "Depending on flight availability, we will either fly to Islamabad or begin the return drive to Chilas along the Indus River. Altitude: 1,265m (if driving). Accommodation: Hotel.",
      },
      {
        day: "Day 14",
        title: "Return to Islamabad",
        description:
          "Either enjoy a day of sightseeing in Islamabad (if flown) or complete the return drive from Chilas to the capital. This is an ideal time for final souvenir shopping and a farewell dinner. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 15",
        title: "International Departure",
        description:
          "Our staff will provide a transfer to Islamabad International Airport for your departure flight, marking the end of your Fairy Meadows tour. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Close-up views of Nanga Parbat (8,126m) Raikot Face",
      "Easy 3-hour trek from Tato village",
      "Scenic alpine grasslands and meadows",
      "Camping and wooden hut facilities",
      "Panoramic mountain landscapes and photography",
      "Accessible from April to September",
    ],
  },

  {
    id: "khunjerab-pass-tour",
    slug: "khunjerab-pass-tour",
    name: "Khunjerab Pass Tour",
    altitude: "4,733m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: KhunjarabPassImg1,
    gallery: [KhunjarabPassImg1, KhunjarabPassImg2],
    description:
      "The Khunjerab Pass Tour takes you to the highest border crossing in the world, located at the northern tip of Pakistan along the Karakoram Highway, offering breathtaking high-altitude scenery.",
    overview:
      "Situated at 4,733m on the Pakistan-China border, Khunjerab Pass is the highest point of the Karakoram Highway and one of the most dramatic mountain passes in the world. Visitors can enjoy panoramic views of the surrounding Karakoram peaks, observe wildlife such as Marco Polo sheep, and experience the unique cultural atmosphere of this high-altitude region. The tour is accessible by vehicle and provides an unforgettable journey through one of the most spectacular landscapes in northern Pakistan.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. The remainder of the day is yours to relax or explore the modern capital city at your own pace. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Drive from Islamabad to Naran Valley",
        description:
          "Today we begin our journey north, driving toward the picturesque Naran Valley. The route takes us through lush green landscapes and winding mountain roads, arriving in Naran for an overnight stay amidst the Himalayan foothills. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Lulusar Lake and Lake Saiful Malook",
        description:
          "A day dedicated to the alpine beauty of the Kaghan Valley. We will take an excursion to the crystal-clear Lulusar Lake before heading to the legendary Lake Saiful Malook. Surrounded by snow-capped peaks, it is one of the most iconic natural landmarks in Pakistan. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Gilgit via Babusar Top",
        description:
          "We depart Naran and ascend the spectacular Babusar Top. After enjoying the panoramic views from the pass, we descend into the Gilgit-Baltistan region, following the Karakoram Highway to reach the historic city of Gilgit. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Nagar Valley and Hunza Karimabad",
        description:
          "Our journey continues into the Nagar Valley, offering views of the massive Rakaposhi mountain. We then proceed to Karimabad, the heart of the Hunza Valley, known for its terraced fields and unique cultural heritage. Altitude: 2,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Hunza Culture: Altit, Baltit, and Duiker",
        description:
          "A full day of exploration in Hunza. We visit the UNESCO-listed Altit and Baltit Forts to learn about the Mirs of Hunza. In the evening, we travel to the high-altitude viewpoint of Duiker for a spectacular sunset over the Karakoram range. Accommodation: Hotel.",
      },
      {
        day: "Day 07",
        title: "Attabad Lake and Passu",
        description:
          "We travel further north, passing through the tunnels of Attabad Lake, where we can enjoy the turquoise waters. Our journey continues to the tranquil Borith Lake and the striking village of Passu, famous for its iconic 'cones' and glaciers. Accommodation: Hotel.",
      },
      {
        day: "Day 08",
        title: "Excursion to Khunjerab Pass",
        description:
          "Today we reach the highlight of our tour: the Khunjerab Pass. At 4,733m, this is the highest paved international border crossing in the world. After exploring the pass and the Pakistan-China border, we return to the border town of Sost for the night. Accommodation: Hotel.",
      },
      {
        day: "Day 09",
        title: "Return Drive: Sost to Gilgit",
        description:
          "We begin our journey southward, driving from Sost back through the Hunza Valley to Gilgit. This return leg offers another opportunity to witness the dramatic mountain vistas along the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 10",
        title: "Drive from Gilgit to Besham",
        description:
          "We continue our descent along the Indus River, traveling down the Karakoram Highway toward Besham. The drive showcases the rugged engineering of the highway and the deep canyons of the Indus. Accommodation: Hotel.",
      },
      {
        day: "Day 11",
        title: "Besham to Islamabad via Taxila",
        description:
          "On our way back to the capital, we visit the Taxila Museum to explore the ancient archaeological ruins of the Gandhara civilization. We arrive in Islamabad in the evening for our final night. Accommodation: Hotel.",
      },
      {
        day: "Day 12",
        title: "Sightseeing and Final Departure",
        description:
          "The morning is spent sightseeing in Islamabad, visiting the Faisal Mosque and other city landmarks. Following the tour, you will be transferred to Islamabad International Airport for your flight home. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Highest paved border crossing in the world",
      "Stunning Karakoram Highway views",
      "Panoramic vistas of snow-capped peaks",
      "Cultural interaction with local communities",
      "Wildlife spotting including Marco Polo sheep",
      "Gateway to Pakistan-China border region",
    ],
  },

  {
    id: "hunza-valley-tour",
    slug: "hunza-valley-tour",
    name: "Hunza Valley Tour",
    altitude: "2,438m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: HunzaValleyImg1,
    gallery: [HunzaValleyImg1, HunzaValleyImg2, HunzaValleyImg3],
    description:
      "The Hunza Valley Tour offers an immersive journey through one of Pakistan’s most picturesque valleys, combining breathtaking mountain scenery with rich cultural heritage and local traditions.",
    overview:
      "Located in Gilgit-Baltistan, Hunza Valley is renowned for its dramatic landscapes, snow-capped peaks, and historic villages. Travelers explore iconic landmarks such as Baltit and Altit forts, cruise along the turquoise waters of Attabad Lake, and enjoy the legendary views of Rakaposhi and Ultar Sar. The journey along the Karakoram Highway provides breathtaking scenery at every turn, with opportunities for short hikes, photography, and interaction with welcoming local communities. Ideal for travelers seeking a blend of natural beauty, cultural insight, and relaxing exploration.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, our staff will greet you and provide a transfer to our group hotel. This day is dedicated to recovering from your travels. Once all participants have arrived, we will convene for a comprehensive briefing on our upcoming Hunza Valley Tour. Depending on the schedule, an optional afternoon tour of Islamabad—the nation’s purpose-built capital established in 1961—may be available. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Drive to Chilas or Naran",
        description:
          "After breakfast, we depart the capital and begin our journey north via mini-coach along the legendary Karakoram Highway. The drive takes us through historical towns and vibrant green valleys as we head toward the high mountains. We will spend the night in a comfortable hotel in either Naran or Chilas, both serving as traditional gateways to the deep north. Distance: 461km. Duration: 8-9 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Travel to Karimabad",
        description:
          "We continue our journey toward Karimabad, traveling along the ancient Silk Road route now occupied by the modern Karakoram Highway. Following the Indus and Hunza Rivers, this drive is a spectacular introduction to the region’s geography; twenty-one of the world’s one hundred highest peaks are visible from this road. As civilization fades behind us, we enter the heart of the Karakoram. Distance: 150km. Duration: 5 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Sightseeing in Karimabad",
        description:
          "Today is dedicated to exploring Karimabad, the ancient capital of the Hunza Valley. You can wander through cobblestone streets, browse local handicrafts and rubies, or sample authentic Hunza cuisine. We will visit the UNESCO-listed Baltit and Altit Forts to learn about the region’s complex history. From Altit Fort, enjoy a commanding view of the old Silk Road and a spectacular sunset over the river. Altitude: 2,440m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Excursion to Eagle’s Nest",
        description:
          "Following a morning in Karimabad, we ascend a steep switchback road to reach Eagle’s Nest. Known as the premier viewpoint in Hunza, it offers a 360-degree panorama of jagged cliffs and pink-hued peaks. We will spend the evening here to witness a magical sunset and a star-filled sky, followed by an early sunrise the next morning. Altitude: 2,850m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Khunjerab Pass and the Chinese Border",
        description:
          "Today features an epic drive to the Khunjerab Pass (4,880m), the highest paved border crossing in the world, connecting Pakistan and China. En route, we stop at the mesmerising Attabad Lake and the Hussaini Suspension Bridge. The pass is located within the Khunjerab National Park, home to the rare snow leopard and Marco Polo sheep. After exploring this high-altitude frontier, we return to the iconic village of Passu for the night. Duration: 4 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Drive and Trek to Fairy Meadows",
        description:
          "We depart Passu and head to Raikot Bridge, where we transfer to 4x4 jeeps for an exhilarating ride on the legendary Fairy Meadows track. From the end of the road at Tattu Village, a 3-hour hike brings us to Fairy Meadows. Here, you will have your first close-up view of Nanga Parbat, the ninth-highest mountain in the world and one of the most beautiful peaks in Pakistan. Altitude: 3,300m. Accommodation: Cabins/Huts. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08 - 09",
        title: "Acclimatization and Relaxation at Fairy Meadows",
        description:
          "Two free days are reserved to soak in the tranquil mountain atmosphere. You can relax at our log cabins, watch the clouds dance around Nanga Parbat, or explore the dense pine forests. For those seeking activity, we offer guided treks ranging from two to seven hours, including the walk to the Nanga Parbat Base Camp. This is arguably the best place in the world to experience high-altitude serenity. Accommodation: Cabins/Huts. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Return to Islamabad",
        description:
          "Our tour concludes its mountain phase as we descend to Tattu, take the jeeps back to Raikot Bridge, and rejoin our minibus for the drive back to Islamabad. Upon arrival, you can enjoy a hot shower and the comforts of the city after your wilderness adventure. Duration: 10 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Contingency and Exploration Day",
        description:
          "A flexible day in Islamabad to rest, prepare for your journey home, or conduct some last-minute shopping in the local markets. We will enjoy a final group dinner to celebrate the conclusion of our journey through the Hunza Valley. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Final Departure",
        description:
          "Following breakfast, we will provide a private transfer to Islamabad International Airport for your flight home, marking the official end of your Hunza Valley Tour. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Stunning views of Rakaposhi (7,788m) and Ultar Sar",
      "Historic Baltit and Altit forts",
      "Deep blue waters of Attabad Lake",
      "Scenic drive along the Karakoram Highway",
      "Cultural experiences in traditional Hunza villages",
      "Short hikes to panoramic viewpoints",
    ],
  },

  {
    id: "shandoor-polo-festival-tour",
    slug: "shandoor-polo-festival-tour",
    name: "Shandoor Polo Festival Tour",
    altitude: "3,700m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: ShandoorPoloImg1,
    gallery: [ShandoorPoloImg1],
    description:
      "The Shandur Polo Festival is a unique cultural and sporting event held at the high-altitude Shandur Pass, celebrating the traditional sport of polo along with local music, dance, and festivities.",
    overview:
      "Located at approximately 3,700m in Gilgit-Baltistan, the Shandur Polo Festival is renowned as the 'highest polo ground in the world.' The week-long festival features exciting polo matches between the Chitral and Gilgit teams, along with performances of traditional music, dance, and local cuisine. Visitors experience the region’s unique cultural heritage while enjoying panoramic views of the surrounding mountains and valleys. The festival is best attended in July, with accommodations and travel arrangements recommended in advance due to its popularity.",
    timeline: [
      {
        day: "Day 01",
        title: "Islamabad and Rawalpindi Exploration",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be transferred to your hotel. In the afternoon, we embark on a comprehensive city tour of the twin cities. Highlights include the iconic Faisal Mosque, Shakar Parian, the Pakistan Monument, Damen-e-Koh, and the Lok Virsa Museum. We will also explore the vibrant history of Rawalpindi through its traditional Raja Bazaar. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Islamabad to Swat via Taxila",
        description:
          "We depart for the Swat Valley, a drive of approximately 4-5 hours. En route, we stop at the UNESCO World Heritage site of Taxila to explore the museum and ancient archaeological sites including Jaulian, Mohra Moradu, and Sirkap. Upon arrival in Swat, we transfer to the hotel followed by an afternoon of local sightseeing. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Drive from Swat to Chitral",
        description:
          "Today's journey takes us 254 km toward Chitral. After settling in, we spend the afternoon visiting the architectural landmarks of the region, including the Shahi Mosque, the Chitral Museum, and the historic Chitral Fort, followed by a walk through Chitral town. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Excursion to the Kalash Valleys",
        description:
          "We take a 60 km drive to Bumburet to immerse ourselves in the unique culture of the Kalash people. The day includes visits to the Rumbur, Bumburet, and Birir valleys to witness their distinct traditions and architecture. We return to Chitral in the evening. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Chitral to Shandur Pass (The Roof of the World)",
        description:
          "We drive 157 km (approx. 6-7 hours) to reach the Shandur Pass at an elevation of 3,700 meters. Often called the 'Roof of the World,' this plateau offers a stunning landscape crossed by small streams. We cross the boundary between the Ghizer and Chitral districts to set up our overnight camp. Accommodation: Tents. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Shandur Polo Festival matches",
        description:
          "Today is dedicated to the thrilling spectacle of the Shandur Polo Festival. We witness fiercely contested polo matches played at a frenetic pace in a vibrant, festive atmosphere. The title match is the main attraction, with enthusiastic crowds supporting their teams at the world's highest polo ground. Accommodation: Tents/Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Shandur Pass to Phander and Gahkuch",
        description:
          "We begin our descent from the pass, driving 50 km to the scenic Phander Valley. After a lakeside lunch, we continue our 104 km journey to Gahkuch, the administrative center of the Ghizer District. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Drive from Gahkuch to Karimabad",
        description:
          "A 176 km drive takes us into the heart of the Hunza Valley. The route offers numerous opportunities for photography and refreshments as we travel toward Karimabad, surrounded by some of the world's highest peaks. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Baltit and Altit Forts & Duiker Valley",
        description:
          "The morning is spent at the historic Baltit Fort, a UNESCO World Heritage Centre recently restored by the Aga Khan Trust for Culture. In the afternoon, we visit the ancient Altit Fort and ascend to Duiker Valley for a panoramic view of the Karakoram range. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Duiker to Passu and Gulmit Exploration",
        description:
          "We take a short drive to Passu, stopping at the turquoise Attabad Lake along the way. After checking in, we explore the upper Hunza region, including Borith Lake, Gulkin and Gulmit villages, the Passu Glacier, and the famous Hussaini Suspension Bridge. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Excursion to Khunjerab Pass",
        description:
          "A full-day excursion takes us to the Khunjerab Pass at 4,733 meters, the highest paved international border crossing in the world. We travel through small mountain villages to reach the Chinese border before returning to Karimabad in the evening. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Drive from Karimabad to Naran",
        description:
          "We begin our journey south toward Naran, covering 355 km via the Babusar Pass (4,173m). En route, we stop at the unique junction point where three of the world’s greatest mountain ranges meet: the Karakoram, the Himalaya, and the Hindukush. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Return to Islamabad via Taxila",
        description:
          "Our 279 km return drive to Islamabad includes a final visit to the Taxila Museum and its surrounding historical sites to appreciate the deep archaeological roots of the region. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "International Departure",
        description:
          "After breakfast, we provide a final transfer to Islamabad International Airport for your return flight home. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "World-famous polo matches between Chitral and Gilgit teams",
      "Traditional music, dance, and local festivities",
      "Spectacular high-altitude plateau at Shandur Pass",
      "Cultural immersion in Gilgit-Baltistan traditions",
      "Stunning mountain and valley views",
      "Held annually in July, attracting visitors from around the world",
    ],
  },

  {
    id: "skardu-valley-tour",
    slug: "skardu-valley-tour",
    name: "Skardu Valley Tour",
    altitude: "2,300m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: SkarduValleyImg1,
    gallery: [SkarduValleyImg1, SkarduValleyImg2, SkarduValleyImg3],
    description:
      "The Skardu Valley Tour offers an authentic journey into the heart of Baltistan, combining breathtaking mountain scenery with cultural and historical exploration.",
    overview:
      "Located at approximately 2,300m, Skardu serves as the gateway to some of the world's highest peaks, including K2, Broad Peak, Gasherbrum I & II, and Masherbrum. The tour takes visitors through picturesque valleys, ancient forts, and along the historic Karakoram Highway, providing panoramic views of the Karakoram and Himalayan ranges. Travelers experience the rich culture, traditions, and hospitality of the Baltistan region, while enjoying access to alpine landscapes, glaciers, and trekking routes that have made this area a renowned destination for adventure enthusiasts.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, your guide will meet you and provide a transfer to the group hotel. The day is yours to recover from your journey. In the evening, we will convene for a group briefing regarding the Skardu Tour. Depending on the schedule, optional sightseeing in Islamabad—the purpose-built capital established in 1961—may be available. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu: The Gateway to the Karakoram",
        description:
          "We transfer to the airport for a spectacular 45-minute flight to Skardu, offering aerial views of K2, Nanga Parbat, and the Karakoram giants. Upon arrival in Skardu, the historical capital of Baltistan (often called 'Little Tibet'), you will be escorted to the hotel. The afternoon is free to explore the town and its unique Tibetan-influenced culture. Note: In the rare event of a flight cancellation, we travel by road via the Karakoram Highway with an overnight stay in Naran. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Shigar Valley and the Cold Desert",
        description:
          "After a luxury breakfast, we travel to the picturesque Shigar Valley, the gateway to the world's highest peaks. We visit the 17th-century Shigar Fort, a masterfully restored heritage site, and the 14th-century Amburiq Masjid, the first mosque built in the valley. The day includes a visit to the Sarfaranga Cold Desert, a high-altitude landscape of sand dunes framed by snow-capped mountains. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Skardu Sightseeing: Lakes and Ancient History",
        description:
          "Today's exploration begins with a drive to the turquoise Satpara Lake, the primary water source for Skardu. We then visit the 8th-century Manthal Buddha Rock, an ancient granite carving testifying to the region's Buddhist history. In the afternoon, we visit the Kachura village to see the serene Upper Kachura Lake and the famous Shangrila Resort (Lower Kachura Lake). The evening is free to explore the local markets. Altitude: 2,230m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Journey to Khaplu Valley",
        description:
          "We continue our tour toward Khaplu, following the Indus and Shyok Rivers. Khaplu was the second-largest kingdom in old Baltistan and served as a crucial guardian of the trade route to Ladakh. Today, it remains the administrative capital of the Ghanche District and a primary base for trekkers heading toward Masherbrum and the Hushe Valley. Distance: 103km. Duration: 2-3 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Khaplu Heritage: Palace and Chaqchan Mosque",
        description:
          "We spend the day exploring Khaplu’s rich heritage. We visit the 700-year-old Chaqchan Mosque, one of the region's oldest mosques dating back to the mass conversion from Buddhism to Islam. We also tour the iconic Khaplu Palace (Yabgo Khar), a four-story architectural marvel built in 1840 that blends Tibetan, Kashmiri, and Central Asian influences, now serving as a museum and heritage hotel. Altitude: 2,600m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Return to Skardu",
        description:
          "We begin our return journey to Skardu, winding through picturesque valleys and traditional Balti villages along the Shyok River. The drive offers a stunning contrast between the lush green fields of the valley and the rugged, arid terrain as we approach the wider Skardu Valley. This scenic transfer provides ample opportunities to witness local life and the constant backdrop of the Karakoram Range. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Deosai Plateau to Astore",
        description:
          "We embark on a scenic drive to Astore via the Deosai Plateau, the world's second-highest plateau at 4,111m. This 'Land of Giants' is a vast wilderness home to the Himalayan brown bear and unique flora. Though the road is rugged and bumpy, the landscape of open grasslands and alpine lakes is unparalleled. We stop for lunch on the plateau before descending into the Astore Valley. Distance: 152km. Duration: 6 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Astore to Naran via Babusar Pass",
        description:
          "Today’s drive follows the Astore River to the junction of the Karakoram Highway, where we catch glimpses of the mighty Nanga Parbat (8,126m). We then ascend the Babusar Pass (4,173m), the highest point of our road journey, offering panoramic views of snow-capped peaks. From the pass, we descend into the lush Kaghan Valley to reach Naran. Distance: 210km. Duration: 6 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Return to Islamabad via Taxila",
        description:
          "We travel from Naran back to Islamabad, rejoining the Karakoram Highway at Mansehra. The route passes through the colonial-era hill station of Abbottabad and the historical town of Hasan Abdal. Before reaching the capital, we visit the UNESCO World Heritage site of Taxila, an ancient center of learning and Gandharan civilization. Distance: 280km. Duration: 6 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Contingency and Exploration in Islamabad",
        description:
          "This is a free day in Islamabad to ensure flexibility in our itinerary. You can relax at the hotel or visit the city’s landmarks, including the Faisal Mosque, Daman-e-Koh viewpoint, the Pakistan Monument, and the Lok Virsa Museum. It is an ideal time for souvenir shopping or enjoying a peaceful afternoon at Rawal Lake. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Final Departure",
        description:
          "After breakfast, we provide a final transfer to Islamabad International Airport for your return flight, marking the conclusion of our Skardu Valley Tour. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Explore Skardu town and neighboring Baltistan valleys",
      "Spectacular views of Karakoram and Himalayan peaks",
      "Visit medieval forts: Kharpocho, Shigar, and Khaplu",
      "Drive along the legendary Karakoram Highway",
      "Experience local culture and traditional Baltistan lifestyle",
      "Sneaky views of Nanga Parbat (8,126m) from the highway",
    ],
  },

  {
    id: "khaplu-valley-tour",
    slug: "khaplu-valley-tour",
    name: "Khaplu Valley Tour",
    altitude: "2,600m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: KhapluValleyImg1,
    gallery: [KhapluValleyImg1, KhapluValleyImg2, KhapluValleyImg3],
    description:
      "The Khaplu Valley Tour immerses visitors in the natural beauty and rich culture of Khaplu, a scenic valley known for its traditional villages, alpine landscapes, and proximity to towering peaks like Masherbrum.",
    overview:
      "Located in the heart of Baltistan, Khaplu Valley offers a breathtaking experience during spring and summer when the valleys are lush and colorful with blooming trees and flowers. The tour includes visits to local villages, opportunities to witness traditional Balti culture, and panoramic views of snow-capped mountains. Khaplu serves as a gateway for trekking and mountaineering expeditions to nearby peaks such as Masherbrum (7,781m), providing a mix of natural beauty, adventure, and cultural immersion.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. This day is reserved for rest and recovery after your journey to the capital city. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Drive from Islamabad to Besham",
        description:
          "Today we begin our journey north along the Karakoram Highway. The drive to Besham takes us through diverse landscapes as we follow the path of the Indus River. We will stay overnight in Besham, a key stopover on the route to the high mountains. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Besham to Chilas",
        description:
          "We continue our drive along the rugged Karakoram Highway toward Chilas. This leg of the journey offers dramatic views of the deep Indus canyon and the surrounding arid mountain scenery. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive from Chilas to Skardu",
        description:
          "Departing Chilas, we head toward Skardu, the gateway to the Karakoram. The route provides breathtaking views as the landscape shifts into the high-altitude desert and towering peaks of Baltistan. Altitude: 2,467m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Skardu to Khaplu Valley",
        description:
          "Today we travel toward the beautiful Khaplu Valley. The drive along the Shyok River is remarkably scenic, passing through traditional Balti villages before arriving in the historic town of Khaplu. Altitude: 2,600m. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Blossom Photography: Khanjor and Khaplu Fort",
        description:
          "We dedicate the day to capturing the stunning spring blossoms in Khanjor. The afternoon is spent exploring and photographing the iconic Khaplu Fort (Yabgo Khar), a masterpiece of regional architecture and a testament to the valley's royal history. Accommodation: Hotel.",
      },
      {
        day: "Day 07",
        title: "Blossom Photography: Khako and Balghar",
        description:
          "A full day of photography and exploration in the villages of Khako and Balghar. We will focus on the vibrant colors of the fruit blossoms against the backdrop of the rugged Karakoram peaks, documenting local life and natural beauty. Accommodation: Hotel.",
      },
      {
        day: "Day 08",
        title: "Saling Photography and Return to Skardu",
        description:
          "In the morning, we visit the village of Saling for further blossom photography and panoramic views. Afterward, we begin our return drive to Skardu for an evening of relaxation. Accommodation: Hotel.",
      },
      {
        day: "Day 09",
        title: "Drive from Skardu to Chilas",
        description:
          "We begin our journey south, departing Skardu and driving back toward Chilas. This provides another opportunity to witness the dramatic mountain vistas of the Karakoram Highway from a different perspective. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 10",
        title: "Return to Islamabad",
        description:
          "The final long drive takes us from Chilas back to Islamabad. We descend from the mountains to the capital city, where you can enjoy a comfortable evening and reflect on your journey through Baltistan. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 11",
        title: "Islamabad Sightseeing and Departure",
        description:
          "The day is spent sightseeing in Islamabad, visiting key cultural and historical landmarks. Following the tour, you will be transferred to Islamabad International Airport for your departure flight home. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Gateway to Masherbrum (7,781m) and surrounding peaks",
      "Lush green meadows and blooming spring flora",
      "Traditional villages and Balti culture",
      "Scenic alpine landscapes and mountain views",
      "Ideal for trekking, photography, and cultural exploration",
      "Explore nearby valleys and natural beauty of Gilgit-Baltistan",
    ],
  },

  {
    id: "phandar-valley-tour",
    slug: "phandar-valley-tour",
    name: "Phandar Valley Tour",
    altitude: "2,610m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28000,
    groupSize: "4-8 climbers",
    image: PhandarValleyImg1,
    gallery: [PhandarValleyImg1],
    description:
      "The Phandar Valley Tour showcases the stunning beauty of Phandar, famous for its colorful autumn scenery, pristine rivers, and surrounding alpine landscapes.",
    overview:
      "Located in the Ghizer district of Gilgit-Baltistan, Phandar Valley is renowned for its natural beauty, particularly during autumn when the valley is painted with vibrant shades of red, orange, and yellow. Visitors can explore peaceful villages, enjoy the serene riverbanks, and capture breathtaking photographs of the colorful landscape. The valley is ideal for nature lovers, photographers, and trekkers seeking a tranquil and visually stunning experience away from crowded tourist areas.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. The rest of the day is available for relaxation as you prepare for the journey ahead. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Islamabad to Bisham",
        description:
          "Today we begin our journey north, driving toward Bisham. The route follows the winding path of the Indus River along the Karakoram Highway, offering a transition from the plains into the foothills of the Himalayas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive from Bisham to Gilgit",
        description:
          "We continue our drive along the spectacular Karakoram Highway toward Gilgit. This journey showcases rugged mountain landscapes and the dramatic deep canyons of the Indus. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Gilgit to Hunza Karimabad",
        description:
          "A short but scenic drive takes us from Gilgit to Karimabad, the heart of the Hunza Valley. You will be greeted by panoramic views of Rakaposhi and other towering peaks of the Karakoram. Altitude: 2,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Explore Hunza: Baltit Fort and Duiker",
        description:
          "A full day dedicated to the heritage of Hunza. We explore the ancient Baltit and Altit Forts, learning about the region's royal history. In the evening, we visit the Duiker viewpoint for a spectacular sunset over the valley. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Hunza to Attabad Lake and Passu",
        description:
          "We travel further north, crossing the turquoise Attabad Lake. The journey continues toward Borith Lake and the iconic village of Passu, famous for its striking 'Passu Cones' and glaciers. Accommodation: Hotel.",
      },
      {
        day: "Day 07",
        title: "Excursion to Khunjerab Pass",
        description:
          "Today we drive to the Khunjerab Pass, the highest paved international border crossing in the world. After exploring the border area with China, we return to the border town of Sost for the evening. Accommodation: Hotel.",
      },
      {
        day: "Day 08",
        title: "Sost to Phandar Valley via Gupis",
        description:
          "We depart the main highway and head toward the serene Phandar Valley in the Ghizer District. Traveling via Gupis, we enter a landscape of crystal-clear rivers and tranquil turquoise lakes. Accommodation: Hotel/Guest House.",
      },
      {
        day: "Day 09",
        title: "Phandar Valley to Gilgit",
        description:
          "After enjoying the morning in the peaceful Phandar Valley, known for its trout-filled waters and lush meadows, we begin our return drive toward the regional hub of Gilgit. Accommodation: Hotel.",
      },
      {
        day: "Day 10",
        title: "Gilgit to Fairy Meadows via Raikot Bridge",
        description:
          "We travel to Raikot Bridge and transfer to 4x4 jeeps for an adventurous ride, followed by a hike to reach Fairy Meadows. Here, you will experience unparalleled views of the Nanga Parbat massif. Accommodation: Huts/Cabins.",
      },
      {
        day: "Day 11",
        title: "Fairy Meadows to Bisham",
        description:
          "We descend from Fairy Meadows and rejoin our vehicle at Raikot Bridge to begin our southward journey. We follow the Karakoram Highway back to Besham for an overnight stay. Accommodation: Hotel.",
      },
      {
        day: "Day 12",
        title: "Bisham to Islamabad via Taxila Museum",
        description:
          "The final leg of our road journey takes us toward Islamabad. En route, we stop at the Taxila Museum to explore the ancient archaeological ruins of the Gandhara civilization. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "Islamabad Sightseeing and Departure",
        description:
          "The morning is spent sightseeing in the capital, including a visit to the Faisal Mosque. Following the tour, you will be transferred to Islamabad International Airport for your departure flight. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Vibrant autumn foliage with red and golden leaves",
      "Scenic alpine landscapes and river views",
      "Traditional villages and local Balti/Ghizer culture",
      "Ideal for photography, trekking, and nature walks",
      "Panoramic views of surrounding mountains",
      "Tranquil and less-visited valley in northern Gilgit-Baltistan",
    ],
  },
];

export function getTourBySlug(slug: string): TourData | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourById(id: string): TourData | undefined {
  return tours.find((tour) => tour.id === id);
}
