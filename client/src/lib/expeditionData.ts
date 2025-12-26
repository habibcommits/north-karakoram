import { COMMON_SERVICES_REQUIREMENTS } from "@/constants/expeditionData";

import BroadPeakImg1 from "@assets/broad-peak/br1.jpeg";
import BroadPeakImg2 from "@assets/broad-peak/br2.jpg";
import BroadPeakImg3 from "@assets/broad-peak/br3.jpg";
import GashebrumIImg1 from "@assets/g1/g1.jpg";
import GashebrumIImg2 from "@assets/g1/g2.jpg";
import GashebrumIImg3 from "@assets/g1/g3.jpeg";
import GashebrumIIImg1 from "@assets/g2/g1.jpeg";
import GashebrumIIImg2 from "@assets/g2/g2.jpeg";
import GashebrumIIImg3 from "@assets/g2/g3.jpeg";
import GashebrumIIIImg1 from "@assets/g3/g1.jpg";
import K2Img1 from "@assets/k2/k21.jpeg";
import K2Img2 from "@assets/k2/k22.jpeg";
import K2Img3 from "@assets/k2/k23.jpg";
import NangaParbatImg1 from "@assets/nanga-parbat/n1.jpeg";
import NangaParbatImg2 from "@assets/nanga-parbat/n2.jpg";
import NangaParbatImg3 from "@assets/nanga-parbat/n3.jpg";
// import GashebrumIIImg2 from "@assets/"
// import GashebrumIIImg3 from "@assets/"
import GashebrumIVImg1 from "@assets/g4/g1.jpeg";
import GashebrumIVImg2 from "@assets/g4/g2.jpg";
import GashebrumIVImg3 from "@assets/g4/g3.jpg";

import SpantikImg1 from "@assets/spantik/s1.jfif";
// import SpantikImg2 from "@assets/"
// import SpantikImg3 from "@assets/"
// import GashebrumIIIImg1 from "@assets/"
// import GashebrumIIIImg2 from "@assets/"
// import GashebrumIIIImg3 from "@assets/"
// import GashebrumIVImg1 from "@assets/"
// import GashebrumIVImg2 from "@assets/"
// import GashebrumIVImg3 from "@assets/"
import MashebrumImg1 from "@assets/mashabrum/m1.jpeg";
import MashebrumImg2 from "@assets/mashabrum/m2.jpg";
import MashebrumImg3 from "@assets/mashabrum/m3.jpeg";
import RakaposhiImg1 from "@assets/rakaposhi/r1.jpeg";
import RakaposhiImg2 from "@assets/rakaposhi/r2.jpeg";
// import RakaposhiImg3 from "@assets/"
import ChogolisaImg1 from "@assets/chogolisa/c1.jpeg";
import TirichMirImg1 from "@assets/tirich-mir/t1.jpg";
// import TirichMirImg2 from "@assets/"
// import TirichMirImg3 from "@assets/"
import K6Img1 from "@assets/k6/k61.jpeg";
import K6Img2 from "@assets/k6/k62.jpeg";
import K6Img3 from "@assets/k6/k63.jpeg";

import LailaPeakImg1 from "@assets/laila-peak/l1.jpg";
import LailaPeakImg2 from "@assets/laila-peak/l2.jpg";
import LailaPeakImg3 from "@assets/laila-peak/l3.jpg";
import PastorePeakImg1 from "@assets/pastore/p1.jpeg";
// import PastorePeakImg2 from "@assets/"
// import PastorePeakImg3 from "@assets/"
import GandogoroPeakImg1 from "@assets/gondogoro/g1.jpg";
// import GandogoroPeakImg2 from "@assets/"
// import GandogoroPeakImg3 from "@assets/"
import BonditPeakImg1 from "@assets/bondit/b1.webp";
// import BonditPeakImg2 from "@assets/"
// import BonditPeakImg3 from "@assets/"
import DrifikaImg1 from "@assets/drifika/d1.jpeg";
import K7PeakImg1 from "@assets/k7/k1.jpeg";
import K7PeakImg2 from "@assets/k7/k2.jpeg";
import K7PeakImg3 from "@assets/k7/k3.jpeg";
// import DrifikaImg2 from "@assets/"
// import DrifikaImg3 from "@assets/"
import CigarettePeakImg1 from "@assets/cigarette/c1.jfif";
// import CigarettePeakImg2 from "@assets/"
// import CigarettePeakImg3 from "@assets/"
import KhosarGangImg1 from "@assets/khosar-gang/k1.jpg";
// import KhosarGangImg2 from "@assets/"
// import KhosarGangImg3 from "@assets/"

export interface ExpeditionTimeline {
  day: string;
  title: string;
  description: string;
}

export interface ExpeditionData {
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
  timeline: ExpeditionTimeline[];
  servicesIncluded: string[];
  servicesNotIncluded: string[];
  requirements: string[];
  highlights: string[];
}

export const expeditions: ExpeditionData[] = [
  {
    id: "k2",
    peak: "8000",
    slug: "k2-expedition",
    name: "K2 Expedition",
    altitude: "8,611m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "50-55 Days",
    difficulty: "Extremely Difficult",
    bestSeason: "February - August",
    price: 45000,
    groupSize: "6-12 climbers",
    image: K2Img1,
    gallery: [K2Img1, K2Img2, K2Img3],
    description:
      "K2, the second highest mountain in the world, stands at 8,611 meters. Known as the 'Savage Mountain,' K2 is considered the most difficult and dangerous climb of all the 8,000m peaks.",
    overview:
      "The K2 Expedition is the ultimate mountaineering challenge. Located in the Karakoram Range on the China-Pakistan border, K2 demands exceptional climbing skills, physical fitness, and mental fortitude. Our expedition provides comprehensive support including experienced high-altitude guides, premium equipment, and thorough acclimatization schedules to maximize your summit success.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to the group hotel. The rest of the day is yours to rest and prepare for the expedition ahead. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer to the airport for the spectacular flight to Skardu. In the event of a flight cancellation due to weather, we will begin the journey by road, driving along the Karakoram Highway to Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Arrival from Chilas",
        description:
          "For those who flew, today is dedicated to local sightseeing in Skardu. If traveling by road, we complete the second leg of the journey from Chilas to Skardu, following the Indus River. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Expedition Briefing and Final Preparations",
        description:
          "We attend the mandatory expedition briefing at the Ministry of Tourism in Skardu. The remainder of the day is spent on final gear checks and coordinating with the expedition staff. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive from Skardu to Askole",
        description:
          "We depart Skardu by jeep for the rugged drive to Askole, the last inhabited village before we enter the high wilderness of the Karakoram. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek from Askole to Jhola",
        description:
          "The trekking phase begins. We leave Askole and follow the Braldu River toward Jhola, navigating the rocky terrain and crossing the snout of the Biafo Glacier. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek from Jhola to Paiju",
        description:
          "We continue our trek toward the green oasis of Paiju. This section offers the first glimpses of the massive granite spires of the Cathedral and Trango groups. Altitude: 3,400m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Rest and Acclimatization at Paiju",
        description:
          "A vital day for rest and altitude adjustment at Paiju. Our crew will organize porter loads and prepare for the transition onto the Baltoro Glacier. Altitude: 3,400m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek from Paiju to Urdukas",
        description:
          "We ascend onto the Baltoro Glacier, trekking across the lateral moraine to reach Urdukas. This campsite provides a stunning vantage point over the Trango Towers. Altitude: 4,000m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek from Urdukas to Goro II",
        description:
          "Today’s trek takes us deeper onto the glacier toward Goro II. We are now surrounded by some of the world’s highest peaks, including Masherbrum and Muztagh Tower. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek from Goro II to Concordia",
        description:
          "We trek to Concordia, the famous junction of the Baltoro and Godwin-Austen glaciers. This site offers unparalleled 360-degree views of the mountain giants, including K2. Altitude: 4,600m. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Trek from Concordia to K2 Base Camp",
        description:
          "The final approach trek takes us to the foot of the world’s second-highest peak. We establish our base camp on the Godwin-Austen Glacier beneath the Abruzzi Spur. Altitude: 5,100m. Accommodation: Camping.",
      },
      {
        day: "Day 13 - 50",
        title: "K2 Climbing Period (38 Days)",
        description:
          "Thirty-eight days are dedicated to the technical ascent of K2. This window allows for acclimatization cycles, route fixing, establishing high camps, and the final summit push. Accommodation: Camping.",
      },
      {
        day: "Day 52",
        title: "Descent from K2 Base Camp to Goro II",
        description:
          "Following the conclusion of the climbing period, we dismantle our high camps and begin our descent, trekking back through Concordia to Goro II. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 53",
        title: "Trek from Goro II to Khobursay",
        description:
          "We continue our return journey down the Baltoro Glacier, trekking past Urdukas to our campsite at Khobursay. Altitude: 3,800m. Accommodation: Camping.",
      },
      {
        day: "Day 54",
        title: "Trek from Khobursay to Bardumal",
        description:
          "As we descend further, we move off the glacier and trek toward the campsite at Bardumal, following the river valley. Altitude: 3,300m. Accommodation: Camping.",
      },
      {
        day: "Day 55",
        title: "Return Trek to Askole",
        description:
          "The final trekking day takes us back to the village of Askole, where we conclude the walking portion of our expedition. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 56",
        title: "Drive from Askole to Skardu",
        description:
          "We rejoin our vehicles for the jeep drive back to Skardu. This evening marks a welcome return to the comforts of a hotel and a celebratory meal. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 57",
        title: "De-briefing and Farewell Dinner",
        description:
          "A final day in Skardu for an official debriefing with the authorities and a farewell dinner with the local staff and expedition team. Accommodation: Hotel.",
      },
      {
        day: "Day 58",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We transfer for the return flight to Islamabad. In the event of a cancellation, we will begin the two-day drive back to the capital via Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 59",
        title: "Islamabad Sightseeing or Completion of Road Journey",
        description:
          "A day for sightseeing in Islamabad or, for those traveling by road, completing the final leg of the journey from Chilas to the capital. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 60",
        title: "Final Departure",
        description:
          "We provide a transfer to Islamabad International Airport for your international flight back home. End of services.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Summit the world's second highest peak",
      "Experience the legendary Baltoro Glacier",
      "Camp at the iconic Concordia with views of four 8000m peaks",
      "Challenge yourself on the most technical 8000m mountain",
    ],
  },

  {
    id: "broad-expedition",
    peak: "8000",
    slug: "broad-expedition",
    name: "Broad Peak Expedition",
    altitude: "8,051m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "35-40 Days",
    difficulty: "Difficult",
    bestSeason: "February - August",
    price: 32000,
    groupSize: "6-12 climbers",
    image: BroadPeakImg1,
    gallery: [BroadPeakImg1, BroadPeakImg2, BroadPeakImg3],
    description:
      "Broad Peak, at 8,051m, is the 12th highest mountain in the world. Known for its massive summit plateau, it offers a technically accessible route compared to its neighbor K2.",
    overview:
      "The Broad Peak Expedition is an excellent choice for climbers seeking their first 8000m summit. While still demanding extreme fitness and mountaineering skills, the normal route is less technical than K2 or Nanga Parbat. Located just 8km from K2, Broad Peak offers stunning Karakoram views.",
    timeline: [
      {
        day: "Day 01",
        title: "Team Meeting and Briefing",
        description:
          "Meet the expedition team for a briefing at the Alpine Club of Pakistan. Activities include gear checks and last-minute purchases. Overnight at a hotel in Islamabad.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu (2,230m) via a 1-hour scenic flight or a 2-day drive via the Karakoram Highway if flights are grounded. Overnight in Skardu. Altitude: 2,230 m.",
      },
      {
        day: "Day 03",
        title: "Preparation in Skardu",
        description:
          "Rest and preparation day to obtain climbing permits and purchase fresh supplies. Optional acclimatization hikes to Shangrila Lake or Kharpocho Fort. Overnight at a hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Askole",
        description:
          "A 7-8 hour jeep journey on a rough 4x4 track along the Braldu River to Askole, the last inhabited village. Altitude: 3,000 m. Accommodation: Tent or Guesthouse.",
      },
      {
        day: "Day 05",
        title: "Trek to Jhola",
        description:
          "A 6-7 hour trek along the Braldu River, passing through Korofon and crossing suspension bridges to reach the camp at Jhula. Altitude: 3,200 m. Accommodation: Tent.",
      },
      {
        day: "Day 06",
        title: "Trek to Paiju",
        description:
          "A 6-7 hour trek entering the Baltoro Glacier region with views of Cathedral Peak and Trango Towers. Altitude: 3,450 m. Accommodation: Tent.",
      },
      {
        day: "Day 07",
        title: "Rest at Paiju",
        description:
          "Optional rest and acclimatization day involving hydration, short hikes, and recovery while porters prepare supplies. Accommodation: Tent.",
      },
      {
        day: "Day 08",
        title: "Trek to Urdukas",
        description:
          "A 6-7 hour trek marking the first day of travel on the Baltoro Glacier, featuring views of Masherbrum. Camp on rocky terraces. Altitude: 4,130 m. Accommodation: Tent.",
      },
      {
        day: "Day 09",
        title: "Trek to Goro II",
        description:
          "A 6-7 hour trek on glacier ice and moraine with views of Gasherbrum IV. The campsite is known for cold and windy conditions. Altitude: 4,300 m. Accommodation: Tent.",
      },
      {
        day: "Day 10",
        title: "Trek to Concordia",
        description:
          "A 6-7 hour trek to the heart of the Karakoram, offering panoramic views of K2, Broad Peak, and the Gasherbrums. Altitude: 4,600 m. Accommodation: Tent.",
      },
      {
        day: "Day 11",
        title: "Trek to Broad Peak Base Camp",
        description:
          "A 3-4 hour walk across the Broad Peak Glacier to establish a permanent base camp with dining and communication facilities. Altitude: 4,900 m. Accommodation: Tent.",
      },
      {
        day: "Day 12-15",
        title: "Training and Puja Ceremony",
        description:
          "Days dedicated to rest, technical training (fixed ropes, ice climbing, crevasse rescue), and a traditional Puja ceremony for safe passage. First load carries begin. Accommodation: Tent.",
      },
      {
        day: "Day 16-22",
        title: "First Rotation",
        description:
          "Acclimatization rotations reaching Camp 1 (5,700m - 6,000m) and Camp 2 (6,400m - 6,500m), including gear deposits and returns to Base Camp. Accommodation: Tent.",
      },
      {
        day: "Day 23-28",
        title: "Second Rotation",
        description:
          "Further acclimatization rotations reaching Camp 3 (7,200m - 7,300m) with descents to Base Camp for full recovery. Accommodation: Tent.",
      },
      {
        day: "Day 29-35",
        title: "Summit Push",
        description:
          "Weather-dependent window for the final push to the summit of Broad Peak (8,051m), followed by descent and recovery. Includes buffer days for weather. Altitude: 8,051 m. Accommodation: Tent.",
      },
      {
        day: "Day 36-37",
        title: "Base Camp Packing",
        description:
          "Rest, base camp clean-up operations, celebrations, and distribution of porter bonuses before departure. Accommodation: Tent.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Accessible first 8000m peak",
      "Views of K2 from base camp",
      "Trek the famous Baltoro Glacier",
      "Climb in the heart of the Karakoram",
    ],
  },

  {
    id: "nanga-parbat",
    slug: "nanga-parbat-expedition",
    name: "Nanga Parbat Expedition",
    altitude: "8,126m",
    location: "Diamer District, Pakistan",
    duration: "35-40 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 35000,
    groupSize: "6-10 climbers",
    image: NangaParbatImg1,
    gallery: [NangaParbatImg1, NangaParbatImg2, NangaParbatImg3],
    description:
      "Nanga Parbat, the 'Killer Mountain,' rises 8,126 meters in the western Himalayas. It features the world's largest mountain face - the Rupal Face - rising 4,600m from base to summit.",
    overview:
      "The Nanga Parbat Expedition offers a challenging climb on one of the world's most dramatic peaks. Known for its massive size and unpredictable weather, Nanga Parbat requires excellent mountaineering skills. We offer routes via the Diamir Face (normal route) or the more challenging Rupal Face for experienced climbers.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival in Islamabad via international flight. Following a warm welcome at the airport and transfer to the hotel, the day includes rest and a brief tour of Islamabad and Rawalpindi. Transport: Private minibus. Meals: Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via flight (weather permitting) or an 11-hour drive to Chilas by private vehicle. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "Local sightseeing in Skardu or completion of the drive from Chilas to Skardu. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Official Briefing and Preparation",
        description:
          "Official expedition briefing at the Ministry of Tourism in Skardu and final technical preparations with the staff. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Drive to Hushe",
        description:
          "Overland journey from Skardu to Hushe village. Meals: Breakfast, Lunch, Dinner. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Brum Bramah",
        description:
          "Commencement of the trek from Hushe to Brum Bramah. Meals: Breakfast, Lunch, Dinner. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Masherbrum Base Camp",
        description:
          "Trekking from Brum Bramah to establish Masherbrum Base Camp. Meals: Breakfast, Lunch, Dinner. Accommodation: Camping.",
      },
      {
        day: "Day 08-32",
        title: "Climbing Period",
        description:
          "A 26-day window dedicated to the climbing expedition. Meals: Breakfast, Lunch, Dinner. Accommodation: Camping.",
      },
      {
        day: "Day 33",
        title: "Descent to Hushe",
        description:
          "Trek down from Masherbrum Base Camp back to Hushe village. Meals: Breakfast, Lunch, Dinner. Accommodation: Camping.",
      },
      {
        day: "Day 34",
        title: "Drive to Skardu",
        description:
          "Return drive from Hushe to Skardu. Meals: Breakfast, Lunch, Dinner. Accommodation: Hotel.",
      },
      {
        day: "Day 35",
        title: "Debriefing and Farewell",
        description:
          "Official expedition debriefing in Skardu followed by a final farewell dinner. Meals: Breakfast, Lunch, Dinner. Accommodation: Hotel.",
      },
      {
        day: "Day 36",
        title: "Return to Islamabad or Chilas",
        description:
          "Return flight to Islamabad or drive to Chilas, depending on weather conditions. Meals: Breakfast, Lunch, Dinner. Accommodation: Hotel.",
      },
      {
        day: "Day 37",
        title: "Islamabad Sightseeing or Transit",
        description:
          "Sightseeing in Islamabad or completion of the drive from Chilas to Islamabad. Meals: Breakfast, Lunch, Dinner. Accommodation: Hotel.",
      },
      {
        day: "Day 38",
        title: "Final Departure",
        description:
          "Transfer to the airport for your international flight home. Meals: Breakfast.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Climb the 'Killer Mountain' - the 9th highest mountain in the world",
      "Witness the massive Rupal Face, the world's highest mountain face",
      "Experience an authentic Himalayan expedition",
      "Stunning views of the western Himalayas",
    ],
  },

  {
    id: "gasherbrum",
    peak: "8000",
    slug: "gasherbrum-I-expedition",
    name: "Gasherbrum I Expedition",
    altitude: "8,080m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "45-40 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 38000,
    groupSize: "6-10 climbers",
    image: GashebrumIImg1,
    gallery: [GashebrumIImg1, GashebrumIImg2, GashebrumIImg3],
    description:
      "Gasherbrum I, also known as Hidden Peak, rises to 8,080m and is the 11th highest mountain in the world. Located deep in the Karakoram Range, it is known for its remote setting and technically demanding upper sections.",
    overview:
      "The Gasherbrum I Expedition is a challenging 8000m climb in the heart of the Karakoram. Accessed via the Baltoro Glacier, Gasherbrum I requires strong high-altitude experience, solid acclimatization, and excellent physical conditioning. It is more technical than Gasherbrum II and is often attempted by experienced 8000m climbers.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival in the capital city of Islamabad. Altitude: 540 m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu via a domestic flight or an overland journey via the Karakoram Highway. Altitude: 2,230 m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Rest and Preparation",
        description:
          "A day in Skardu dedicated to rest and final expedition preparations. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Askole",
        description:
          "A 7-8 hour drive to the village of Askole, the gateway to the high Karakoram. Altitude: 3,000 m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Jhula",
        description:
          "Commencement of the trekking phase with a 6-7 hour journey to Jhula. Altitude: 3,200 m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Paiju",
        description:
          "A 6-7 hour trek leading to the Paiju campsite. Altitude: 3,450 m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Acclimatization at Paiju",
        description:
          "An optional day for rest and altitude acclimatization in Paiju. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek to Urdukas",
        description:
          "A 6-7 hour trek continuing up the glacier to Urdukas. Altitude: 4,130 m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Goro II",
        description:
          "Trekking for 6-7 hours across the glacial moraine to Goro II. Altitude: 4,300 m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Concordia",
        description:
          "A 6-7 hour trek to the famous Concordia junction. Altitude: 4,600 m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Gasherbrum Base Camp",
        description:
          "A 4-5 hour trek to establish the primary Base Camp for the Gasherbrum expedition. Altitude: 5,100 m. Accommodation: Camping.",
      },
      {
        day: "Day 12-15",
        title: "Base Camp Training and Puja",
        description:
          "Days focused on rest, technical training, and the traditional Puja ceremony to bless the expedition. Accommodation: Camping.",
      },
      {
        day: "Day 16-22",
        title: "First Rotation",
        description:
          "Initial acclimatization phase with rotations up to Camp 2. Accommodation: Camping.",
      },
      {
        day: "Day 23-28",
        title: "Second Rotation",
        description:
          "Advanced acclimatization phase with rotations reaching Camp 3. Accommodation: Camping.",
      },
      {
        day: "Day 29-35",
        title: "Summit Push",
        description:
          "The primary climbing window for the summit attempt, subject to weather conditions. Accommodation: Camping.",
      },
      {
        day: "Day 36-37",
        title: "Rest and Packing",
        description:
          "Recovery and packing of equipment at Base Camp following the climbing period. Accommodation: Camping.",
      },
      {
        day: "Day 38-42",
        title: "Return Trek to Skardu",
        description:
          "The multi-day return trek from the mountains back toward Skardu. Accommodation: Camping.",
      },
      {
        day: "Day 43",
        title: "Rest in Skardu",
        description:
          "A well-earned day of rest upon returning to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 44",
        title: "Return to Islamabad",
        description:
          "Travel back to Islamabad via flight or the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 45-46",
        title: "Contingency Days",
        description:
          "Extra days reserved to account for any travel or weather-related delays. Accommodation: Hotel.",
      },
      {
        day: "Day 47",
        title: "Sightseeing and Celebration",
        description:
          "A day for local sightseeing in Islamabad and celebrating the expedition’s conclusion. Accommodation: Hotel.",
      },
      {
        day: "Day 48",
        title: "Official Debriefing",
        description:
          "Final official debriefing and formal wrap-up of the expedition services. Accommodation: Hotel.",
      },
      {
        day: "Day 49",
        title: "Departure",
        description:
          "Final transfer for departure from Islamabad. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Summit Gasherbrum I (Hidden Peak), the 11th highest mountain in the world",
      "Remote and less-crowded Karakoram expedition",
      "Trek the legendary Baltoro Glacier",
      "Climb one of the most elegant 8000m peaks",
    ],
  },

  {
    id: "gasherbrum",
    slug: "gasherbrum-II-expedition",
    name: "Gasherbrum II Expedition",
    altitude: "8,035m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "45-50 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 38000,
    groupSize: "6-10 climbers",
    image: GashebrumIIImg1,
    gallery: [GashebrumIIImg1, GashebrumIIImg2, GashebrumIIImg3],
    description:
      "Gasherbrum II rises to 8,035m and is the 13th highest mountain in the world. Known for its relatively more accessible route, it is a popular first 8000m peak for experienced climbers in the Karakoram.",
    overview:
      "The Gasherbrum II Expedition offers climbers a challenging yet technically less demanding 8000m summit in the Karakoram Range. Accessed via the Baltoro Glacier, it provides an excellent high-altitude experience and preparation for more technical peaks like Gasherbrum I or K2.",
    timeline: [
      {
        day: "Day 01",
        title: "Team Assembly and Briefing",
        description:
          "Meet the expedition team for a formal briefing at the Alpine Club of Pakistan. This day includes gear checks and last-minute purchases. Accommodation: Hotel in Islamabad.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu via a 1-hour scenic flight or a 2-day drive via the Karakoram Highway should flights be cancelled. Overnight in Skardu. Altitude: 2,230m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Preparation in Skardu",
        description:
          "Rest and preparation day to obtain climbing permits from the Gilgit-Baltistan government and finalize fresh food supplies. Optional acclimatization hikes to Shigar Fort or Satpara Lake. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Askole",
        description:
          "A 7-8 hour drive via 4x4 jeep along the Braldu River to Askole, the final inhabited village before the wilderness. Altitude: 3,000m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Jhula",
        description:
          "A 6-7 hour trek along the Braldu River, involving suspension bridge crossings to reach the camp at Jhula. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Paiju",
        description:
          "A 6-7 hour trek into the Baltoro Glacier region, offering views of Cathedral Peak and Trango Towers. Altitude: 3,450m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Paiju Rest Day",
        description:
          "Optional rest and acclimatization day for recovery and short hikes while porters prepare provisions for the glacier. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek to Urdukas",
        description:
          "A 6-7 hour trek marking the first day of glacier travel on the Baltoro, featuring views of Masherbrum. Altitude: 4,130m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Goro II",
        description:
          "A 6-7 hour trek over ice and moraine with stunning views of Gasherbrum IV. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Concordia",
        description:
          "A 6-7 hour trek to the heart of the Karakoram, providing panoramic views of K2, Broad Peak, and the Gasherbrums. Altitude: 4,600m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Gasherbrum Base Camp",
        description:
          "A 4-5 hour final trek across the Upper Baltoro Glacier to establish a permanent base camp with full facilities. Altitude: 5,100m. Accommodation: Camping.",
      },
      {
        day: "Day 12-15",
        title: "Training and Puja Ceremony",
        description:
          "Technical training on fixed ropes, ice climbing, and crevasse rescue, followed by a traditional Puja ceremony. Initial load carries to Camp 1 (5,950m) begin. Accommodation: Camping.",
      },
      {
        day: "Day 16-22",
        title: "First Rotation",
        description:
          "Acclimatization rotations to Camp 1 (5,950m) and Camp 2 (6,400m), including gear deposits and overnight stays before returning to Base Camp for rest. Accommodation: Camping.",
      },
      {
        day: "Day 23-28",
        title: "Second Rotation",
        description:
          "Advanced acclimatization reaching Camp 3 (7,000m) for an overnight stay, followed by descent for full recovery and weather monitoring. Accommodation: Camping.",
      },
      {
        day: "Day 29-35",
        title: "Summit Push",
        description:
          "A weather-dependent summit attempt of the peak (8,035m). Includes ascent through camps and a 10-15 hour summit day, with buffer days for contingencies. Altitude: 8,035m. Accommodation: Camping.",
      },
      {
        day: "Day 36-37",
        title: "Rest and Packing",
        description:
          "Post-climb recovery, base camp clean-up operations, and celebrations with the porter team. Accommodation: Camping.",
      },
      {
        day: "Day 38-42",
        title: "Return Trek to Skardu",
        description:
          "Trekking back via Concordia, Goro II, Urdukas, Paiju, and Askole, followed by the drive back to Skardu. Accommodation: Camping.",
      },
      {
        day: "Day 43",
        title: "Skardu Debriefing",
        description:
          "Official debriefing with local authorities in Skardu. Optional sightseeing in Shigar Valley or Satpara Lake. Accommodation: Hotel.",
      },
      {
        day: "Day 44",
        title: "Return to Islamabad",
        description:
          "Return travel to Islamabad via flight or a 2-day drive along the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 45-46",
        title: "Extra Contingency Days",
        description:
          "Buffer days reserved for weather-related delays or additional recovery time. Accommodation: Hotel.",
      },
      {
        day: "Day 47",
        title: "Islamabad Sightseeing",
        description:
          "Visit local landmarks such as Faisal Mosque and Rawal Lake, concluding with an expedition celebration dinner. Accommodation: Hotel.",
      },
      {
        day: "Day 48",
        title: "Official Wrap-Up",
        description:
          "Final debriefing with the Alpine Club and the formal return of climbing permits. Accommodation: Hotel.",
      },
      {
        day: "Day 49",
        title: "Final Departure",
        description:
          "Transfer to Islamabad International Airport for your flight home. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Summit Gasherbrum II, the 13th highest mountain in the world",
      "Trek the legendary Baltoro Glacier",
      "Experience stunning views at Concordia",
      "Ideal first 8000m peak in the Karakoram",
    ],
  },

  {
    id: "k6",
    slug: "k6-expedition",
    name: "K6 Expedition",
    altitude: "7,281m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "30-35 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: "June - August",
    price: 23000,
    groupSize: "4-10 climbers",
    image: K6Img1,
    gallery: [K6Img1, K6Img2, K6Img3],
    description:
      "K6 at 7,281m is one of the most accessible 7000m peaks in the Karakoram, ideal for ambitious high-altitude mountaineers.",
    overview:
      "The K6 Expedition is perfect for climbers seeking their first 7000m summit or training for higher peaks. Located in the Charakusa Valley of Hushe, K6 offers a mix of rock and ice climbing with moderate technical difficulty. Its approachable base camp and established routes make it one of the more attainable high-altitude objectives in the Karakoram, while still providing dramatic views of the surrounding peaks and glaciers.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to the group hotel. The day includes an official expedition briefing at the Ministry of Tourism to finalize permits and administrative details. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer to the airport for the flight to Skardu, the gateway to the Karakoram. If weather conditions prevent flying, we will begin the drive along the Karakoram Highway to Chilas for an overnight stay. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive to Khaplu",
        description:
          "We continue our journey toward the historic town of Khaplu. The drive follows the scenic Indus and Shyok rivers, leading us into the heart of the Ghanche District. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Machulo",
        description:
          "Today's journey takes us to the village of Machulo. This leg of the trip offers stunning views of the surrounding peaks and an opportunity to experience the traditional culture of the Balti people. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Hushe and Trek to Shaicho",
        description:
          "We drive to Hushe, the final road-head, and immediately begin our trekking phase. A few hours of walking brings us to the beautiful campsite of Shaicho, situated at the junction of the Charakusa and Gondogoro valleys. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to K6 and K7 Base Camp",
        description:
          "We trek deeper into the Charakusa Valley toward the K6 Base Camp. This trek reveals an amphitheater of granite spires and spectacular glacial scenery as we establish our staging area. Accommodation: Camp.",
      },
      {
        day: "Day 07 - 26",
        title: "K6 Climbing Days",
        description:
          "A dedicated twenty-day window is reserved for the technical ascent of K6 Peak. This period allows for acclimatization, route fixing, and the final summit push with full logistical support from our base camp team. Accommodation: Camp.",
      },
      {
        day: "Day 27",
        title: "Return Trek to Hushe",
        description:
          "Following the conclusion of the climbing period, we descend from the base camp and trek back through Shaicho to return to Hushe village. Accommodation: Camp.",
      },
      {
        day: "Day 28",
        title: "Drive Back to Skardu",
        description:
          "We rejoin our vehicles for the return drive to Skardu. This evening provides a return to hotel comforts and an opportunity to celebrate the expedition's progress. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We transfer for the flight to Islamabad. In the event of a flight cancellation, we will begin the return journey by road, staying overnight in Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Free Day in Islamabad",
        description:
          "A flexible day in the capital city for rest, sightseeing, or shopping. For those traveling by road, this day ensures arrival in Islamabad in case of delays. Accommodation: Hotel.",
      },
      {
        day: "Day 31",
        title: "International Departure",
        description:
          "We provide a final transfer to Islamabad International Airport for your flight back home, marking the conclusion of the K6 Peak Expedition. End of services.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Accessible 7000m peak",
      "Perfect first 7000m mountain",
      "Great views of surrounding Karakoram peaks",
      "Good success rates for experienced climbers",
    ],
  },

  {
    id: "spantik",
    slug: "spantik-expedition",
    name: "Spantik Expedition",
    altitude: "7,027m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "15-20 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: null,
    price: 6500,
    groupSize: "4-10 climbers",
    image: SpantikImg1,
    gallery: [SpantikImg1],
    description:
      "Spantik, or Golden Peak, rises to 7,027m in the Karakoram. Known for its stunning golden color at sunset, it's an excellent introduction to high-altitude mountaineering.",
    overview:
      "The Spantik Expedition is ideal for climbers looking to gain experience on 7000m peaks. The normal route via the Southeast Ridge is technically moderate but requires solid mountaineering fundamentals. The peak offers spectacular views of Nanga Parbat, Rakaposhi, and the Karakoram giants.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport followed by a meet and greet. The day includes transfer to the hotel, expedition briefings, paperwork, equipment checks, and last-minute shopping. Altitude: 540m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu via a domestic flight or a 2-day drive via the Karakoram Highway if flights are unavailable. The afternoon offers time to explore local markets and ancient forts. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Expedition Preparations",
        description:
          "A dedicated day in Skardu for obtaining climbing permits and finalizing logistics. Optional sightseeing includes Kachura Lake and Shigar Fort. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Arandu Village",
        description:
          "A scenic 6-7 hour jeep journey through the Braldu River Valley to Arandu, the final village before the trek. Here, the team meets the porters and prepares for the march. Altitude: 2,800m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Chogo Brangsa",
        description:
          "Commencement of the trek, walking 6-7 hours through green pastures and rocky terrain along the Bolocho Glacier. Altitude: 3,500m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Spantik Base Camp",
        description:
          "A 6-7 hour trek across moraines and glacier trails to reach Spantik Base Camp. The site offers views of the Golden Pillar and surrounding peaks. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07-08",
        title: "Acclimatization and Training",
        description:
          "Rest days at Base Camp focused on altitude adjustment and technical training, including glacier travel, rope techniques, ice climbing, and load ferrying. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Climb to Camp 1",
        description:
          "A 5-6 hour steady climb over mixed terrain and crevasses to establish Camp 1. Altitude: 5,100m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Load Carry to Camp 2",
        description:
          "An acclimatization day spent carrying supplies to Camp 2 (5,900m) before returning to Camp 1 for the night. Altitude: 5,900m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Move to Camp 2",
        description:
          "A 5-6 hour ascent over steep snow and ice sections to establish a high camp in preparation for the summit push. Altitude: 5,900m. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Climb to Camp 3",
        description:
          "A 4-5 hour gradual ascent to the final high camp. The afternoon is spent resting and preparing for the summit attempt. Altitude: 6,400m. Accommodation: Camping.",
      },
      {
        day: "Day 13-14",
        title: "Summit Push and Return",
        description:
          "A 12-14 hour round-trip summit attempt of Spantik (7,027m). The climb follows a final ridge to the Golden Peak summit, offering views of Rakaposhi, Diran, K2, and Broad Peak, followed by descent to Camp 2. Altitude: 7,027m. Accommodation: Camping.",
      },
      {
        day: "Day 15-16",
        title: "Descent to Base Camp",
        description:
          "Return journey to Base Camp for rest and celebration of the climb. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 17",
        title: "Trek to Chogo Brangsa",
        description:
          "Beginning the trek back down toward Arandu Village. Altitude: 3,500m. Accommodation: Camping.",
      },
      {
        day: "Day 18",
        title: "Return to Skardu",
        description:
          "Final trek to Arandu followed by a jeep drive back to Skardu for celebrations. Altitude: 2,800m. Accommodation: Hotel.",
      },
      {
        day: "Day 19",
        title: "Buffer Day",
        description:
          "A contingency day reserved for potential weather delays or travel interruptions.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Perfect 7000m training peak",
      "Stunning 'Golden Peak' sunset views",
      "Views of Karakoram giants",
      "Experience authentic mountain culture",
    ],
  },

  {
    id: "gasherbrum-iii",
    slug: "gasherbrum-iii-expedition",
    name: "Gasherbrum III Expedition",
    altitude: "7,952m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "40-45 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 28000,
    groupSize: "4-8 climbers",
    image: GashebrumIIIImg1,
    gallery: [GashebrumIIIImg1],
    description:
      "Gasherbrum III, standing at 7,952m (26,089 ft), is the 15th highest mountain in the world and a challenging yet rewarding 7000m expedition.",
    overview:
      "Situated between Gasherbrum II and IV in the Karakoram, Gasherbrum III was the highest unclimbed peak until 1974. It was first ascended on 11th August 1975 by a Polish women's expedition led by Wanda Rutkiewicz, with Alison Chadwick, Janusz Onyszkiewicz, and K. Zdzitowiecki also summiting. This expedition marked a historic achievement in mountaineering. Today, Gasherbrum III offers climbers an intermediate high-altitude challenge between 6000m training peaks and 8000m summits, with spectacular alpine scenery and established climbing routes.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met and transferred to the group hotel for your first night in the capital city. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Islamabad Welcome Reception",
        description:
          "Today is dedicated to administrative formalities and a welcome reception. You will meet your expedition team and fellow climbers for a formal briefing regarding the journey ahead. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer for the spectacular flight to Skardu, the gateway to the high Karakoram. Should weather conditions cause a flight cancellation, we will begin the 480 km drive to Chilas via the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Skardu Exploration or Arrival from Chilas",
        description:
          "If we arrived by air, today is a free day in Skardu. For those traveling by road, we complete the 7-8 hour journey (275 km) from Chilas to Skardu, enjoying views of Nanga Parbat (8,125m) along the way. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Jeep Drive to Askole (3,000m)",
        description:
          "We depart Skardu for a rugged 6-7 hour jeep drive to Askole, the final village and the starting point for our trekking expedition into the wilderness. Accommodation: Camp.",
      },
      {
        day: "Day 06 - 12",
        title: "Trek to Gasherbrum III Base Camp",
        description:
          "A week-long trek takes us through the heart of the Karakoram. We follow the Braldu River and ascend the mighty Baltoro Glacier, passing iconic granite spires to reach the Gasherbrum III Base Camp. Accommodation: Camp.",
      },
      {
        day: "Day 13 - 57",
        title: "Acclimatization and Climbing Period",
        description:
          "Forty-five days are allocated for the technical ascent of Gasherbrum III. This period includes establishing high camps, acclimatization rotations, and wait times for optimal weather windows for the summit push. Accommodation: Camp.",
      },
      {
        day: "Day 58 - 61",
        title: "Trek to Hushe via Gondogoro La",
        description:
          "We begin our return journey by trekking across the high Gondogoro La pass. We descend into the lush Hushe Valley and finally board jeeps for the drive back to Skardu. Accommodation: Camp/Hotel.",
      },
      {
        day: "Day 62",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We transfer for our flight back to Islamabad. In the event of a flight cancellation, we will begin the return journey by road to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 63",
        title: "Leisure Day in Islamabad",
        description:
          "A day for rest and leisure in Islamabad. For those traveling by road, this day is used to complete the final leg of the journey from Chilas to the capital. Accommodation: Hotel.",
      },
      {
        day: "Day 64",
        title: "Farewell Meeting",
        description:
          "A final day in the capital for debriefing and a farewell meeting to celebrate the conclusion of the Gasherbrum III expedition. Accommodation: Hotel.",
      },
      {
        day: "Day 65",
        title: "Final Departure",
        description:
          "You will be transferred to Islamabad International Airport for your return flight home. End of services.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Climb a technical 7000m peak",
      "Experience the Baltoro Glacier",
      "Alpine climbing adventure",
      "Spectacular Karakoram views",
    ],
  },

  {
    id: "gasherbrum-iv",
    slug: "gasherbrum-iv-expedition",
    name: "Gasherbrum IV Expedition",
    altitude: "7,932m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "45-50 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 28500,
    groupSize: "4-8 climbers",
    image: GashebrumIVImg1,
    gallery: [GashebrumIVImg1, GashebrumIVImg2, GashebrumIVImg3],
    description:
      "Gasherbrum IV, rising to 7,932m in the Karakoram Range, is a highly technical and remote peak renowned for its dramatic granite faces and extreme climbing challenges.",
    overview:
      "The Gasherbrum IV Expedition is designed for elite mountaineers seeking a serious technical challenge in the Karakoram. This peak demands advanced alpine climbing skills, experience at high altitudes, and the ability to navigate one of the most remote and difficult environments in the world.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival in Islamabad followed by transfer to the hotel. The day includes a team briefing and a comprehensive equipment check. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Ministry Briefing",
        description:
          "Attend the official expedition briefing at the Ministry of Tourism and complete last-minute preparations. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu via flight (weather-dependent) or a 2-day drive via the Karakoram Highway if flights are grounded. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Preparation in Skardu",
        description:
          "A rest day in Skardu dedicated to gear checks, permit clearance, and final supply shopping. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Askole",
        description:
          "Overland journey from Skardu to Askole, the final village before the commencement of the trek. Altitude: 3,000m. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Trek to Jhola",
        description:
          "Beginning the trek from Askole to Jhola, a journey of approximately 6-7 hours. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Paiyu",
        description:
          "A 5-6 hour trek from Jhola to the Paiju campsite. Altitude: 3,450m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Acclimatization at Paiyu",
        description:
          "A scheduled day for rest and altitude acclimatization at Paiju. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Urdukas",
        description:
          "A 7-8 hour trek from Paiju to Urdukas. Altitude: 4,000m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Goro II",
        description:
          "Continuing the trek for 6-7 hours to reach the Goro II campsite. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Base Camp",
        description:
          "A 6-8 hour trek from Goro II to establish the Base Camp. Altitude: 5,000m. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Base Camp Operations",
        description:
          "Rest and acclimatization at Base Camp while setting up expedition facilities. Altitude: 5,000m. Accommodation: Camping.",
      },
      {
        day: "Day 13-15",
        title: "Technical Training",
        description:
          "Final Base Camp setup, technical training sessions, and the commencement of the first rotations. Altitude: 5,000m. Accommodation: Camping.",
      },
      {
        day: "Day 16-35",
        title: "Climbing Rotations",
        description:
          "Acclimatization rotations between Camp 1 (5,900m), Camp 2 (6,500m), and Camp 3 (7,200m). The exact schedule is determined by weather and route conditions. Altitude: 5,900m - 7,200m. Accommodation: Camping.",
      },
      {
        day: "Day 36-40",
        title: "Summit Window",
        description:
          "A weather-dependent window for the summit attempt, climbing from Camp 3 to the peak (7,925m) followed by a safe descent to lower camps. Altitude: 7,925m. Accommodation: Camping.",
      },
      {
        day: "Day 41",
        title: "Base Camp Decommissioning",
        description:
          "Packing equipment and conducting a thorough clean-up of the Base Camp area. Accommodation: Camping.",
      },
      {
        day: "Day 42-44",
        title: "Return Trek to Askole",
        description:
          "Trekking back to Askole, retracing the original route over three days. Accommodation: Camping.",
      },
      {
        day: "Day 45",
        title: "Return to Skardu",
        description: "Drive from Askole back to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 46",
        title: "Return to Islamabad",
        description: "Flight or drive back to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 47",
        title: "Debriefing and Leisure",
        description:
          "Official debriefing at the Tourism Office followed by free time for local sightseeing. Accommodation: Hotel.",
      },
      {
        day: "Day 48-49",
        title: "Contingency Days",
        description:
          "Extra days reserved for potential delays related to weather, logistics, or flight cancellations. Accommodation: Hotel.",
      },
      {
        day: "Day 50",
        title: "International Departure",
        description:
          "Transfer for your international departure flight. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Extremely technical high-altitude climb",
      "Remote and pristine Karakoram wilderness",
      "Dramatic granite faces and alpine routes",
      "For experienced mountaineers seeking elite challenges",
    ],
  },

  {
    id: "masherbrum",
    peak: "7000",
    slug: "masherbrum-expedition",
    name: "Masherbrum Expedition",
    altitude: "7,806m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "40-45 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 26000,
    groupSize: "4-10 climbers",
    image: MashebrumImg1,
    gallery: [MashebrumImg1, MashebrumImg2, MashebrumImg3],
    description:
      "Masherbrum, standing at 7,806m in the Karakoram Range, is a technically demanding peak renowned for its steep snow and ice routes, glacier travel, and remote, rugged beauty.",
    overview:
      "The Masherbrum Expedition offers experienced mountaineers a challenging high-altitude climb in a remote Karakoram setting. The peak requires strong alpine skills, glacier navigation, and prior experience on 6000m+ peaks. Climbers are rewarded with dramatic views of the surrounding Karakoram giants and pristine mountain landscapes.",

    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport followed by a meet and greet. The day includes transfer to the hotel, rest, a briefing at the Tourism Office, and final preparations for the expedition. Altitude: 540m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "A one-hour scenic flight to Skardu (weather dependent). In the event of a cancellation, the team will drive to Chilas (12-14 hrs) along the Karakoram Highway. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Free Day in Skardu or Transit",
        description:
          "If the flight operated, this day is reserved for gear checks, permit processing, and shopping. If driving, the journey continues from Chilas to Skardu (8-9 hrs). Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Hushe Valley",
        description:
          "A 6-7 hour jeep departure from Skardu through local valleys to reach Hushe, the final village before the trek. Altitude: 3,050m. Accommodation: Camping (Tent or Guesthouse).",
      },
      {
        day: "Day 05",
        title: "Trek to Saicho Camp",
        description:
          "The trek commences along the Hushe River with a gentle 5-6 hour ascent through meadows and moraines to Saicho. Altitude: 3,350m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Masherbrum Base Camp",
        description:
          "A 5-6 hour trek through rocky and icy terrain, gaining elevation to establish the Base Camp facilities amidst the surrounding peaks. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07-35",
        title: "Acclimatization and Climbing Period",
        description:
          "A dedicated window for acclimatization, technical briefings, and establishing high camps: Camp 1 (5,600m), Camp 2 (6,400m) with fixed ropes, and Camp 3 (7,000m). The summit push to 7,821m involves mixed rock and ice slopes, followed by a descent to high camps. Altitude: 5,600m - 7,821m. Accommodation: Camping.",
      },
      {
        day: "Day 36-37",
        title: "Descent and Cleanup",
        description:
          "A safe descent from the high camps back to Base Camp. Activities include packing expedition gear and conducting environmental waste removal. Accommodation: Camping.",
      },
      {
        day: "Day 38",
        title: "Return Trek to Hushe",
        description:
          "Retracing the trekking route back to Hushe village, concluded by a celebration dinner with the local staff. Accommodation: Camping.",
      },
      {
        day: "Day 39",
        title: "Return to Skardu",
        description:
          "Return journey to Skardu via 4x4 jeeps with time to rest and explore the town. Accommodation: Hotel.",
      },
      {
        day: "Day 40",
        title: "Travel to Islamabad or Chilas",
        description:
          "Transfer to Islamabad via flight (weather permitting) or a drive to Chilas if flights are grounded. Accommodation: Hotel.",
      },
      {
        day: "Day 41",
        title: "Free Day in Islamabad or Transit",
        description:
          "A day for sightseeing in Islamabad for those who flew, or completion of the road journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 42",
        title: "International Departure",
        description:
          "Final transfer to Islamabad International Airport for your departure flight, marking the end of the expedition services. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Technically demanding 7000m peak",
      "Glacier and alpine climbing experience",
      "Remote Karakoram adventure",
      "Stunning high-altitude scenery",
    ],
  },

  {
    id: "rakaposhi",
    slug: "rakaposhi-expedition",
    name: "Rakaposhi Expedition",
    altitude: "7,788m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: null,
    price: 24000,
    groupSize: "4-10 climbers",
    image: RakaposhiImg1,
    gallery: [RakaposhiImg1, RakaposhiImg2],
    description:
      "Rakaposhi, at 7,788m, towers over the Hunza Valley with its stunning pyramid-shaped peak. It is a technically moderate 7000m mountain offering spectacular high-altitude scenery.",
    overview:
      "The Rakaposhi Expedition provides climbers with an accessible yet serious 7000m climb in the Karakoram. While technically moderate, it requires prior high-altitude experience. The peak offers breathtaking views of the Hunza Valley and surrounding mountains, making it both rewarding and scenic.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport followed by a meet and greet. The day includes transfer to the hotel, an expedition briefing, paperwork, equipment checks, and last-minute shopping. Altitude: 540m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu",
        description:
          "Transfer to Skardu via a one-hour domestic flight (weather permitting) or a 2-day drive via the Karakoram Highway. The afternoon offers time to explore Skardu's local markets and ancient forts. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Expedition Preparations in Skardu",
        description:
          "A day dedicated to obtaining climbing permits and finalizing logistics. Optional sightseeing includes Kachura Lake or Shigar Fort. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Arandu Village",
        description:
          "A scenic 6-7 hour jeep journey through the Braldu River Valley to Arandu, the final village before the trek. Here, the team meets the porters and prepares for the march. Altitude: 2,800m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Chogo Brangsa",
        description:
          "The trek commences with a 6-7 hour journey through green pastures and rocky terrain along the Bolocho Glacier. Altitude: 3,500m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Spantik Base Camp",
        description:
          "A 6-7 hour trek across moraines and glacier trails to reach Base Camp. The site offers stunning views of the Golden Pillar and surrounding peaks. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07-08",
        title: "Acclimatization and Training",
        description:
          "Rest days at Base Camp for altitude adjustment and technical training, including glacier travel, rope techniques, and ice climbing. Load ferrying to higher camps begins. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Climb to Camp 1",
        description:
          "A steady 5-6 hour climb over crevasses and mixed terrain to establish and rest at Camp 1. Altitude: 5,100m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Load Carry to Camp 2",
        description:
          "Supplies are carried to Camp 2 (5,900m) as part of the acclimatization process before returning to Camp 1 for the night. Altitude: 5,900m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Move to Camp 2",
        description:
          "A 5-6 hour ascent through steep snow and ice sections to establish Camp 2 in preparation for the summit push. Altitude: 5,900m. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Climb to Camp 3",
        description:
          "A 4-5 hour gradual ascent to the high camp. The day is spent resting and preparing for the final summit attempt. Altitude: 6,400m. Accommodation: Camping.",
      },
      {
        day: "Day 13-14",
        title: "Summit Push and Return",
        description:
          "An early morning summit attempt involving a 12-14 hour round trip. The climb follows the final ridge to the Golden Peak summit, offering views of Rakaposhi, Diran, K2, and Broad Peak, followed by a descent to Camp 2. Altitude: 7,027m. Accommodation: Camping.",
      },
      {
        day: "Day 15-16",
        title: "Descent to Base Camp",
        description:
          "Return to Base Camp for rest and celebration of the expedition's progress. Altitude: 4,200m. Accommodation: Camping.",
      },
      {
        day: "Day 17",
        title: "Return Trek to Chogo Brangsa",
        description:
          "Descending from Base Camp back toward Arandu Village. Altitude: 3,500m. Accommodation: Camping.",
      },
      {
        day: "Day 18",
        title: "Trek to Arandu and Return to Skardu",
        description:
          "Final trek to Arandu followed by a jeep drive to Skardu for hot showers and celebrations. Altitude: 2,800m. Accommodation: Hotel.",
      },
      {
        day: "Day 19",
        title: "Contingency Day",
        description:
          "An extra day reserved to account for potential bad weather or travel delays.",
      },
      {
        day: "Day 20",
        title: "Travel to Islamabad",
        description:
          "Return to Islamabad via flight or a 2-day drive along the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 21",
        title: "Departure from Islamabad",
        description:
          "Free time for shopping and sightseeing at locations such as Faisal Mosque and Lok Virsa Museum, followed by transfer to the airport for your flight home. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Accessible 7000m climb with moderate technical difficulty",
      "Spectacular views of Hunza Valley",
      "Ideal for climbers gaining high-altitude experience",
      "Stunning Karakoram scenery",
    ],
  },

  {
    id: "chogolisa",
    slug: "chogolisa-expedition",
    name: "Chogolisa Expedition",
    altitude: "7,668m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "40-45 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 25500,
    groupSize: "4-10 climbers",
    image: ChogolisaImg1,
    gallery: [ChogolisaImg1],
    description:
      "Chogolisa, at 7,668m in the Karakoram Range, is a high-altitude peak offering moderate technical climbing and excellent experience for mountaineers preparing for higher summits.",
    overview:
      "The Chogolisa Expedition serves as a stepping stone for climbers aiming for 8000m peaks. While technically moderate, it demands strong high-altitude skills and careful acclimatization. The peak rewards climbers with spectacular views of the surrounding Karakoram mountains.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival in Islamabad followed by a transfer to the hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Expedition Briefing",
        description:
          "Attend the official expedition briefing session at the Alpine Club of Pakistan. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive to Chilas",
        description:
          "An 11-12 hour overland journey from Islamabad to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Skardu",
        description:
          "An 8-9 hour drive continuing from Chilas to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Rest Day in Skardu",
        description:
          "A dedicated day for rest and final preparations in Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Drive to Askoli",
        description:
          "Overland journey to Askoli, where Chogolisa Peak can be viewed in the distance from the Baltoro glacier route. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Bardumal",
        description:
          "Commencement of the trek from Askoli to Bardumal. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek to Paiju",
        description:
          "Continuing the trek from Bardumal to Paiju. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Rest Day at Paiju",
        description:
          "A scheduled rest and recovery day at the Paiju campsite. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Urdukas",
        description: "Trekking from Paiju to Urdukas. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Goro II",
        description:
          "Trekking from Urdukas to Goro II. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Trek to Vigne Glacier",
        description:
          "Proceeding from Goro II to the Vigne Glacier. Accommodation: Camping.",
      },
      {
        day: "Day 13",
        title: "Trek to Base Camp",
        description:
          "Final trek from the Vigne Glacier to establish Chogolisa Base Camp. Accommodation: Camping.",
      },
      {
        day: "Day 14-36",
        title: "Climbing Period",
        description:
          "A 23-day window dedicated to the climbing ascent and summit operations. Accommodation: Camping.",
      },
      {
        day: "Day 37",
        title: "Descent to Goro II",
        description:
          "Trek back from Base Camp to Goro II. Accommodation: Camping.",
      },
      {
        day: "Day 38",
        title: "Trek to Paiju",
        description:
          "Continuing the return trek from Goro II back to Paiju. Accommodation: Camping.",
      },
      {
        day: "Day 39",
        title: "Trek to Korofong",
        description: "Trekking from Paiju to Korofong. Accommodation: Camping.",
      },
      {
        day: "Day 40",
        title: "Trek to Askoli",
        description:
          "Final day of trekking, returning to Askoli village. Accommodation: Camping.",
      },
      {
        day: "Day 41",
        title: "Drive to Skardu",
        description:
          "Overland drive from Askoli back to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 42",
        title: "Drive to Chilas",
        description:
          "Beginning the return road journey from Skardu to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 43",
        title: "Return to Islamabad",
        description:
          "Concluding the road journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 44",
        title: "Debriefing",
        description:
          "Final expedition debriefing session in Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 45",
        title: "Final Departure",
        description:
          "Transfer for your departure to your respective international destinations.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Moderate technical 7000m peak",
      "Ideal for gaining high-altitude experience",
      "Stunning Karakoram scenery",
      "Suitable for climbers building 8000m readiness",
    ],
  },

  {
    id: "trich-mir",
    slug: "trich-mir-expedition",
    name: "Trich Mir Expedition",
    altitude: "7,708m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "30-35 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 25500,
    groupSize: "4-10 climbers",
    image: TirichMirImg1,
    gallery: [TirichMirImg1],
    description:
      "Trich Mir, at 7,708m in the Hindu Kush, is the highest peak of the range, offering a challenging high-altitude climb with spectacular views of Afghanistan and northern Pakistan.",
    overview:
      "The Trich Mir Expedition is ideal for experienced climbers seeking a remote 7000m+ peak. While technically moderate, it requires strong high-altitude skills, proper acclimatization, and preparation for remote mountain conditions. The climb provides breathtaking vistas and a true adventure in the Hindu Kush region.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival and Briefing",
        description:
          "Arrival in Islamabad followed by an official briefing with the Alpine Club of Pakistan to finalize permit clearance. Altitude: 540m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Chitral",
        description:
          "Transfer to Chitral via a domestic flight or overland drive, noting that flights are weather-dependent. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Chitral Preparations",
        description:
          "A day dedicated to final preparations in Chitral, including comprehensive gear checks and initial acclimatization. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Shagrom Village",
        description:
          "Overland journey to Shagrom Village, the final road-accessible point before the trek. Altitude: 2,400m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Tirich Glacier Base Camp",
        description:
          "Commencement of the trek from Shagrom (2,800m) to the Tirich Glacier Base Camp. Altitude: 3,600m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Base Camp Acclimatization",
        description:
          "A scheduled day for rest and altitude acclimatization at Base Camp. Altitude: 3,600m. Accommodation: Camping.",
      },
      {
        day: "Day 07-09",
        title: "Establish Advanced Base Camp",
        description:
          "Moving supplies via load ferry to establish the Advanced Base Camp. Altitude: 4,500m. Accommodation: Camping.",
      },
      {
        day: "Day 10-12",
        title: "Establish Camp 1",
        description:
          "Setting up Camp 1, involving technical ice climbing and careful crevasse navigation. Altitude: 5,200m. Accommodation: Camping.",
      },
      {
        day: "Day 13-15",
        title: "Establish Camp 2",
        description:
          "Technical ascent across steep snow and ice slopes to establish Camp 2. Altitude: 6,100m. Accommodation: Camping.",
      },
      {
        day: "Day 16-18",
        title: "Establish Camp 3",
        description:
          "Pushing further to set up Camp 3, requiring tough technical climbing. Altitude: 6,800m. Accommodation: Camping.",
      },
      {
        day: "Day 19-21",
        title: "Summit Preparations",
        description:
          "Days reserved for rest and final preparations for the summit attempt. Accommodation: Camping.",
      },
      {
        day: "Day 22",
        title: "Summit Push",
        description:
          "Early morning summit attempt of Tirich Mir (7,708m) via steep ice and rock slopes. Altitude: 7,708m. Accommodation: Camping.",
      },
      {
        day: "Day 23",
        title: "Descent for Recovery",
        description:
          "Safe descent back to Camp 3 for post-summit recovery. Altitude: 6,800m. Accommodation: Camping.",
      },
      {
        day: "Day 24-25",
        title: "Return to Base Camp",
        description:
          "Continuing the descent back to the primary Base Camp. Altitude: 3,600m. Accommodation: Camping.",
      },
      {
        day: "Day 26-27",
        title: "Trek to Shagrom Village",
        description:
          "Retracing the trekking route back to Shagrom Village. Altitude: 2,800m. Accommodation: Camping.",
      },
      {
        day: "Day 28",
        title: "Return to Chitral",
        description:
          "Drive from Shagrom Village back to Chitral. Altitude: 1,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Rest and Contingency",
        description:
          "A rest day in Chitral also serving as a buffer for weather contingencies. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Return to Islamabad",
        description:
          "Transfer back to Islamabad via flight or overland drive. Accommodation: Hotel.",
      },
      {
        day: "Day 31",
        title: "Debriefing and Farewell",
        description:
          "Official expedition debriefing followed by a farewell dinner in Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 32",
        title: "International Departure",
        description:
          "Transfer to the airport for your international departure flight home.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Highest peak of the Hindu Kush",
      "Moderate technical 7000m+ climb",
      "Remote and adventurous expedition",
      "Stunning views of Afghanistan and Pakistan",
    ],
  },

  {
    id: "laila-peak",
    slug: "laila-expedition",
    name: "Laila Peak Expedition",
    altitude: "6,096m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 18000,
    groupSize: "4-10 climbers",
    image: LailaPeakImg1,
    gallery: [LailaPeakImg1, LailaPeakImg2, LailaPeakImg3],
    description:
      "Laila Peak, at 6,096m in the Karakoram Range, is a strikingly steep and technical 6000m peak, offering climbers an excellent introduction to high-altitude alpine mountaineering.",
    overview:
      "The Laila Peak Expedition is ideal for climbers seeking their first high-altitude experience in the Karakoram. While the routes are relatively straightforward, the peak requires good alpine skills and proper acclimatization. Climbers are rewarded with stunning views of the surrounding mountains and valleys.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, our staff will meet and transfer you to the group hotel. The remainder of the day is yours to recover from your journey. Once the group has assembled, we will conduct a formal briefing regarding the Laila Peak Expedition. Depending on the schedule, there may be an opportunity for afternoon sightseeing in Islamabad, the nation's purpose-built capital. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Spectacular Flight to Skardu (2,230m)",
        description:
          "We transfer to Islamabad Airport for a breathtaking 45-minute flight to Skardu, the capital of Baltistan. This aerial route offers stunning vistas of the Himalayas and Karakoram, including Nanga Parbat, K2, and the Gondogoro Pass. After checking into the hotel, the afternoon is free to explore the local bazaar or visit the 8th-century Manthal Lord Buddha Rock. Note: If the flight is cancelled due to weather, we will drive the Karakoram Highway to Chilas for an overnight stay. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Sightseeing and Expedition Preparation",
        description:
          "Today includes an official briefing at the tourism department and a meeting with your expedition crew, including porters and guides. Later, we visit the historic Kharpocho Fort for panoramic views of the Indus River and Skardu town—a prime location for photography. You may also visit the nearby Organic Village to see traditional local farming. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Hushe Village (3,170m)",
        description:
          "We begin an exciting 6-hour jeep journey from Skardu, crossing the Indus and Shyok rivers. The route winds through Khaplu and picturesque lower Hushe Valley villages. We arrive in Hushe by early afternoon to establish our camp, dominated by the massive presence of Masherbrum (7,821m) to the north. Duration: 6 hours drive. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Saicho (3,300m)",
        description:
          "Our first trekking day is a smooth 5-hour walk toward Saicho. The trail offers pleasant views of Masherbrum Peak as our porters transport the expedition equipment. We arrive at the Saicho campsite by lunchtime, leaving the afternoon free for rest. Duration: 5 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Laila Peak Base Camp (4,535m)",
        description:
          "After breakfast, we trek toward the Laila Peak Base Camp. This 4-5 hour journey takes us close to the Gondogoro Glacier, providing an exceptional vantage point for Masherbrum. We establish our camp by early afternoon. Duration: 4 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07 - 17",
        title: "Acclimatization and Climbing Period",
        description:
          "This period is dedicated to the non-guided climbing of Laila Peak. We utilize an advanced base camp at 5,765m on the east side of the Gondogoro Glacier. The climb involves approximately 1,500m of ascent on 55-degree slopes, featuring mixed terrain at the base and ice toward the summit. Our professional staff remains at base camp to provide logistical support and nutritious meals. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Return Trek to Saicho (3,300m)",
        description:
          "Upon concluding the climbing session, we dismantle our high camps and trek back to Saicho. This is a day for packing gear and ensuring the mountain environment is left clean. Duration: 4 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "Return Trek to Hushe (3,170m)",
        description:
          "An early start for our final short trek back to Hushe village. We celebrate the successful expedition with our porters and distribute tips and equipment as tokens of gratitude for their hard work. Duration: 4 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 20",
        title: "Drive to Skardu via Khaplu Valley",
        description:
          "We bid farewell to our local staff and drive down the valley to Khaplu. We visit the historic Khaplu Fort and the Chaqchan Mosque before continuing along the Indus River back to Skardu. This evening marks a welcome return to hotel comforts and a warm shower. Duration: 6 hours drive. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 21",
        title: "Return Flight to Islamabad",
        description:
          "We transfer to Skardu Airport for the return flight to Islamabad, once again viewing Nanga Parbat from the air. Upon arrival, we transfer to the hotel. The afternoon is free for independent sightseeing or rug shopping. Note: In case of flight cancellation, we will drive the Karakoram Highway to Naran for an overnight stay. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 22",
        title: "Contingency and Sightseeing Day",
        description:
          "This is a vital contingency day to account for potential travel delays. If we arrived in Islamabad as scheduled, the day is free for further city exploration. In the evening, we convene for a final celebratory group dinner featuring traditional Pakistani cuisine. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 23",
        title: "Final Departure",
        description:
          "Following breakfast, we provide a final transfer to Islamabad International Airport for your departure flight. End of services. Meals: Breakfast.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Technical yet accessible 6000m peak",
      "Good alpine climbing routes",
      "Stunning Karakoram scenery",
      "Ideal introduction to high-altitude mountaineering",
    ],
  },

  {
    id: "pastore-expedition",
    slug: "pastore-expedition",
    name: "Pastore Peak Expedition",
    altitude: "4,708m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 1300,
    groupSize: "4-10 trekkers",
    image: PastorePeakImg1,
    gallery: [PastorePeakImg1],
    description:
      "Pastore Peak, at 4,708m near Skardu, offers a scenic trekking and mountaineering experience with sweeping views of the Karakoram and Hindukush ranges.",
    overview:
      "The Pastore Peak Expedition combines trekking with light alpine climbing, making it ideal for acclimatization and beginners seeking high-altitude experience. The summit provides panoramic vistas of the surrounding mountains.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to the group hotel. The remainder of the day is dedicated to recovery and a group briefing regarding the Pastore Peak, K2, and Gondogoro La expedition. If time permits, optional sightseeing in the purpose-built capital of Islamabad is available. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Transfer to the airport for a spectacular 45-minute flight to Skardu, the capital of Baltistan, offering views of the Himalayas and Karakoram, including Nanga Parbat (8,126m). If weather prevents flying, the journey proceeds via a scenic 8-9 hour drive on the Karakoram Highway to Naran or Chilas. Afternoon activities include visiting local bazaars and the 8th-century Manthal Buddha Rock. Altitude: 2,230m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing and Preparation",
        description:
          "A day to explore the ancient gateway to the high peaks. Activities include a hike to the early 18th-century Kharpocho Fort for panoramic views of the Indus River and a visit to the Organic Village. Optional jeep tours to Satpara Lake are available. Final preparations for the trek are completed here. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Johla via Askole",
        description:
          "A dramatic 8-hour drive along the Indus, Shigar, and Braldu rivers leads to Askole, the final settlement. After meeting the porter team, the trek begins across the snout of the Biafo Glacier to Korofong. The route continues through side valleys and across the Braldu River bridge to reach Johla camp, offering views of Bakhor Das (5,809m) and Paiju Peak. Altitude: 3,100m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Paiju",
        description:
          "The first full walking day follows the Braldu River, ascending toward the green oasis of Paiju. The 6-hour trek offers excellent views of Paiju Peak (6,611m) and the first glimpses of the immense Baltoro Glacier and the Trango Towers. Altitude: 3,380m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Khoburtse",
        description:
          "A challenging 7-hour day begins with a walk to the snout of the Baltoro Glacier. The trail climbs onto the glacier's rubble-covered surface, undulating across the moraine toward the southern side. The day concludes at Khoburtse, featuring sensational views of the Cathedral Towers, Uli Biaho, and the Trango Group. Altitude: 3,760m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Urdukas",
        description:
          "A shorter but strenuous 4-hour ascent along the undulating lateral moraine. The route passes the Great Trango and the 'Nameless Tower' to reach Urdukas, a site perched high above the glacier with rampart-like views of Cathedral Peak and Lobsang. Altitude: 4,130m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Acclimatization at Urdukas",
        description:
          "A dedicated rest day to facilitate the acclimatization process. This is the last organized campsite on grassy slopes, providing facilities for washing and short hikes among alpine flowers. This 'climb high, sleep low' strategy is essential preparation for Pastore Peak. Altitude: 4,130m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Trek to Goro II",
        description:
          "Follow the moraine edge before climbing back onto the broad back of the Baltoro Glacier. The 6-7 hour trek passes the Yermanandu Glacier and offers views of Muztagh (7,270m) and Gasherbrum IV. The campsite is established directly on the glacier ice. Altitude: 4,250m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek to Concordia",
        description:
          "A 5-hour trek into the heart of the Karakoram. Passing Mustagh Tower, the route leads to the famous glacial junction of Concordia. Here, the full height of K2 is revealed, standing within 24 kilometers of four 8,000-meter peaks and surrounded by giants like Mitre Peak and Chogolisa. Altitude: 4,600m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Trek to Broad Peak Base Camp",
        description:
          "A 4-hour trek through ice fins and moraine ridges leads to the medial moraine of the Godwin Austen glacier. Established at the base of the Broad Peak climbing route, this camp offers one of the most iconic views of K2. Altitude: 5,000m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "K2 Base Camp and Pastore Base Camp",
        description:
          "An early morning start for a scenic walk to the Mighty K2 Base Camp, a highlight of the trek. After exploring the actual base of the world's second-highest peak, the team returns to establish Pastore Peak Base Camp. Altitude: 5,100m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13-16",
        title: "Pastore Peak Climbing Period",
        description:
          "This window is dedicated to the ascent of Pastore Peak. Following a day of technical training on the Pastore Glacier, the team attempts the summit on Day 15—a challenging 10-12 hour climb led by an experienced high-altitude guide. Logistical support remains stationed at Base Camp throughout. On Day 16, the team returns to Broad Peak Base Camp. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 17",
        title: "Trek to Ali Camp",
        description:
          "Navigate the Upper Baltoro and the Vigne Glacier toward the base of the Gondogoro La. The 6-hour trek across flatter glacial surfaces leads to Ali Camp. The afternoon includes a technical skills session to practice the use of jumars on fixed lines for the upcoming pass crossing. Altitude: 5,000m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Gondogoro La Crossing to Khuspang",
        description:
          "An alpine start at 2 a.m. to safely cross the Gondogoro La (5,600m) before the sun increases rockfall risk. A 10-11 hour day involving steep 50-degree snow slopes and fixed ropes. The summit offers views of K2, Broad Peak, and the Gasherbrums, before a descent into the Gondogoro Valley to the oasis of Khuspang. Altitude: 5,600m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "Contingency Day",
        description:
          "A buffer day reserved for potential delays or inclement weather. If the pass was crossed successfully on schedule, this day serves as an opportunity for rest or exploration in the Hushe Valley. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 20",
        title: "Trek to Saicho",
        description:
          "A 6-7 hour descent across moraine and ice to reach Dalsangpa and eventually Saicho. This pleasant walk passes yak pastures and the first trees encountered since Paiju, returning to oxygen-rich air at the junction of the Gondogoro and Charakusa valleys. Altitude: 3,350m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 21",
        title: "Return to Hushe and Skardu",
        description:
          "A final 2-hour walk to the village of Hushe, followed by a 7-hour drive through the lush Khaplu Valley. The journey concludes on paved roads back to Skardu, where the team enjoys a hotel stay and a real bed. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 22",
        title: "Return to Islamabad",
        description:
          "A scenic return flight to Islamabad, once again passing Nanga Parbat. In the event of flight cancellation, a two-day drive begins along the Karakoram Highway to Chilas. The evening in the capital is reserved for a celebratory meal. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 23",
        title: "Contingency and Sightseeing",
        description:
          "A final buffer day to account for travel from Chilas to Islamabad or for sightseeing in the capital if the flight was successful. This ensures all travelers have ample time for international connections. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 24",
        title: "Final Departure",
        description:
          "Following breakfast, transfer to Islamabad International Airport for your return flight home, marking the conclusion of the Pastore Peak expedition. Meals: Breakfast.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Scenic summit views",
      "Ideal for acclimatization",
      "Beginner-friendly alpine climbing",
      "Panoramic views of Karakoram and Hindukush",
    ],
  },

  {
    id: "gondogoro-peak",
    slug: "gondogoro-expedition",
    name: "Gondogoro Peak Expedition",
    altitude: "5,950m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: GandogoroPeakImg1,
    gallery: [GandogoroPeakImg1],
    description:
      "Gondogoro Peak, at 5,950m in the Karakoram, is a high-altitude peak offering an accessible yet rewarding alpine climbing experience for climbers with basic mountaineering skills.",
    overview:
      "The Gondogoro Peak Expedition provides an excellent introduction to high-altitude mountaineering. While technically less demanding than higher peaks, it involves glacier travel and snow climbing, making it perfect for climbers gaining experience in the Karakoram.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival in the capital city of Islamabad. Our team will meet you for an initial expedition briefing followed by a transfer to the group hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via a 1-hour domestic flight. Skardu serves as the administrative, commercial, and transportation hub of Baltistan. In the event of a flight cancellation, we will undertake a 480km drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Transit and Sightseeing",
        description:
          "A free day in Skardu to explore the town. If traveling from Chilas, the 7-8 hour morning drive offers spectacular views of Nanga Parbat (8,125m) at the junction of the Indus River. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Hushe",
        description:
          "An early morning departure for the drive to Hushe village, passing through Kande and the scenic junction of the Hushe and Shyok Rivers. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Shaieshcho",
        description:
          "A scenic 4-5 hour trek along the lateral moraine, winding through wild rose and gooseberry bushes. Shaieshcho is located at the junction of the Charakusa and Gondogoro valleys, where the routes to K6 and K7 Base Camps bifurcate. Altitude: 3,330m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Gondogoro Camp",
        description:
          "A 2-3 hour walk through the ablation valley on the eastern side of the Gondogoro Glacier. The trail leads past grassy expanses and juniper groves to reach the campsite. Altitude: 3,950m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Dalzampa",
        description:
          "Follow a well-established trail to Golong for lunch. The journey continues over glacial rubble—requiring caution for rockfall—and climbs toward the beautiful pastures of Dalzampa, sheltered within an ablation valley. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek to Khuspang",
        description:
          "A 4-5 hour trek along the moraine and glacial trails to reach the next camp at Khuspang. Altitude: 4,680m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Gondogoro Peak Base Camp",
        description:
          "Trek to the higher established Base Camp of Gondogoro Peak to prepare for the ascent. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Return to Dalzampa",
        description:
          "Following the activities at Base Camp, trek back down to the Dalzampa campsite. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Descent to Shaieshcho",
        description:
          "A 6-7 hour walk descending through the lateral moraine, surrounded by wild roses, cedar, and tamarisk bushes, returning to the junction at Shaieshcho. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Return to Hushe and Skardu",
        description:
          "A 2-3 hour final trek to Hushe followed by a 5-6 hour drive to Skardu via Khaplu. Khaplu was once the second-largest kingdom in Baltistan, guarding the ancient trade routes to Ladakh. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "Return to Islamabad or Chilas",
        description:
          "Flight to Islamabad (subject to weather) and transfer to the hotel. In the event of a cancellation, the journey proceeds via an overland drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 14",
        title: "Leisure Day in Islamabad",
        description:
          "A day for rest and leisure in Islamabad. Those traveling by road will complete the final leg of the journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 15",
        title: "Debriefing and Departure",
        description:
          "Official farewell meeting and debriefing session. The afternoon is available for sightseeing in Islamabad before the final evening transfer to the airport for your return flight home.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Accessible 6000m peak for acclimatization",
      "Introduction to glacier and alpine climbing",
      "Great training mountain for high-altitude experience",
      "Scenic views of the Karakoram",
    ],
  },

  {
    id: "bondit-peak",
    slug: "bondit-expedition",
    name: "Bondit Peak Expedition",
    altitude: "5,800m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: BonditPeakImg1,
    gallery: [BonditPeakImg1],
    description:
      "Bondit Peak, at 5,800m in the Karakoram near Hushe, is a trekking and climbing peak ideal for gaining high-altitude experience with minimal technical challenges.",
    overview:
      "The Bondit Peak Expedition provides climbers with an accessible high-altitude climb suitable for acclimatization and training. The routes are relatively straightforward, making it perfect for trekkers and beginner mountaineers seeking their first 5000–6000m summit.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport followed by a meet and greet and transfer to your hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via flight PK-451. In the event of inclement weather preventing the flight, the journey will proceed via an overland drive from Islamabad to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "A day dedicated to local sightseeing in Skardu or completing the road journey from Chilas to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Official Briefing and Preparation",
        description:
          "Attend the official expedition briefing at the Ministry of Tourism and finalize all logistical preparations with the staff. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Kanday",
        description:
          "Overland journey from Skardu to the village of Kanday. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Khotid",
        description:
          "The first day of trekking, moving from Kanday toward the Khotid campsite. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Bondit Peak Base Camp",
        description:
          "Continue the trek from Khotid to establish the Bondit Peak Base Camp. Accommodation: Camping.",
      },
      {
        day: "Day 08-23",
        title: "Climbing Period",
        description:
          "A 16-day window dedicated to the climbing phase, technical rotations, and summit attempts of Bondit Peak. Accommodation: Camping.",
      },
      {
        day: "Day 25",
        title: "Return Trek to Kanday",
        description:
          "Descend from the Base Camp and trek back to Kanday village. Accommodation: Camping.",
      },
      {
        day: "Day 26",
        title: "Drive to Skardu",
        description:
          "Overland drive from Kanday back to Skardu for rest and recovery. Accommodation: Hotel.",
      },
      {
        day: "Day 27",
        title: "Debriefing and Farewell",
        description:
          "Official expedition debriefing followed by a celebratory farewell dinner with the crew. Accommodation: Hotel.",
      },
      {
        day: "Day 28",
        title: "Return Travel to Islamabad",
        description:
          "Flight to Islamabad via PK-452 or a drive to Chilas if the flight is unavailable due to weather. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Islamabad Sightseeing or Transit",
        description:
          "A day for local sightseeing in Islamabad or completion of the road journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Final Departure",
        description:
          "Transfer to the airport for your international flight home. End of expedition services. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Accessible 5000–6000m peak",
      "Ideal for acclimatization and training",
      "Minimal technical difficulty",
      "Scenic views of the Karakoram mountains",
    ],
  },

  {
    id: "k7-peak",
    slug: "k7-expedition",
    name: "K7 Peak Expedition",
    altitude: "6,934m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "30-35 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: K7PeakImg1,
    gallery: [K7PeakImg1, K7PeakImg2, K7PeakImg3],
    description:
      "K7, at 6,934m in the Karakoram Range, is a technical high-altitude peak offering climbers a serious alpine challenge with glacier travel, snow, and mixed climbing sections.",
    overview:
      "The K7 Expedition is designed for experienced mountaineers seeking a demanding 6000m+ climb. The peak requires strong alpine skills, glacier navigation, and proper acclimatization. Climbers are rewarded with spectacular views of the Charakusa and Hushe valleys, along with surrounding Karakoram giants.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our team and transferred to the group hotel. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via flight PK-451. In the event of a flight cancellation due to weather, the journey will proceed via an overland drive from Islamabad to Chilas. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "A day dedicated to local sightseeing in Skardu or completing the road journey from Chilas to Skardu. Altitude: 2,300m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Official Briefing and Preparation",
        description:
          "Attend the mandatory expedition briefing at the Ministry of Tourism and finalize all technical preparations with the expedition staff. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Hushe Village",
        description:
          "A scenic jeep journey from Skardu to Hushe, the final gateway before the trek into the Charakusa Valley. Altitude: 3,048m. Accommodation: Hotel.",
      },
      {
        day: "Day 06",
        title: "Trek to Shaicho",
        description:
          "Commencement of the trek from Hushe to the Shaicho campsite, a pleasant walk through local summer pastures. Altitude: 3,300m. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Trek to Spangser",
        description:
          "Continue the ascent from Shaicho to Spangser, gaining altitude as the granite spires of the valley come into view. Altitude: 4,000m. Accommodation: Camp.",
      },
      {
        day: "Day 08",
        title: "Trek to Charakusa Base Camp",
        description:
          "Final trek from Spangser to establish the primary Base Camp for K6 and K7. Altitude: 4,600m. Accommodation: Camp.",
      },
      {
        day: "Day 09-29",
        title: "K7 Peak Climbing Period",
        description:
          "A 20-day dedicated window for acclimatization, technical climbing, and summit attempts on K7 Peak. Accommodation: Camp.",
      },
      {
        day: "Day 30",
        title: "Descent to Shaicho",
        description:
          "Following the conclusion of the climbing period, the team treks down from the K7 Base Camp to reach Shaicho. Accommodation: Camp.",
      },
      {
        day: "Day 31",
        title: "Return to Hushe and Skardu",
        description:
          "A final 4-hour trek down to Hushe village, followed immediately by a jeep drive back to Skardu town.",
      },
      {
        day: "Day 32",
        title: "Return to Islamabad or Chilas",
        description:
          "Transfer to Islamabad via flight or, in the event of a cancellation, begin the return drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 33",
        title: "Drive from Chilas to Islamabad",
        description:
          "Complete the final leg of the road journey from Chilas back to the capital city of Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 34",
        title: "International Departure",
        description:
          "Final transfer to Islamabad International Airport for your return flight home. End of expedition services.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Technical 6000m+ climb",
      "Glacier and alpine climbing experience",
      "Challenging high-altitude expedition",
      "Breathtaking views of Karakoram valleys and peaks",
    ],
  },

  {
    id: "drifika-peak",
    slug: "drifika-expedition",
    name: "Drifika Peak Expedition",
    altitude: "6,200m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: DrifikaImg1,
    gallery: [DrifikaImg1],
    description:
      "Drifika Peak, at 6,200m in the Karakoram near Hushe, is a moderately technical high-altitude peak offering climbers excellent experience in glacier travel and alpine climbing.",
    overview:
      "The Drifika Peak Expedition is ideal for mountaineers seeking to gain high-altitude experience before attempting more challenging 6000–7000m peaks. The climb involves glacier navigation and moderate alpine technical sections, rewarding climbers with panoramic views of the Hushe and Charakusa valleys.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport followed by a meet and greet. Transfer to your hotel for rest and orientation. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via flight PK-451. In the event of inclement weather, the journey proceeds via an overland drive from Islamabad to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "A day dedicated to local sightseeing in Skardu or completing the road journey from Chilas to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Official Briefing and Preparation",
        description:
          "Attend the official expedition briefing at the Ministry of Tourism and finalize all logistical preparations with the staff. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Kanday",
        description:
          "Overland journey from Skardu to the village of Kanday, the starting point of the trek. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Mingulo Broq",
        description:
          "The trekking phase begins with a walk from Kanday to the scenic pastures of Mingulo Broq. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Drifika Base Camp",
        description:
          "Continue the trek from Mingulo Broq into the Nangma Valley to establish the Drifika Base Camp. Accommodation: Camping.",
      },
      {
        day: "Day 08-23",
        title: "Drifika Peak Climbing Period",
        description:
          "A 16-day window dedicated to technical climbing, high camp rotations, and summit attempts of Drifika Peak. Accommodation: Camping.",
      },
      {
        day: "Day 25",
        title: "Return Trek to Kanday",
        description:
          "Following the climbing phase, descend from the Nangma Valley and trek back to Kanday village. Accommodation: Camping.",
      },
      {
        day: "Day 26",
        title: "Drive to Skardu",
        description:
          "Overland drive from Kanday back to Skardu for a well-deserved rest. Accommodation: Camping.",
      },
      {
        day: "Day 27",
        title: "Debriefing and Farewell",
        description:
          "Official expedition debriefing in Skardu followed by a celebratory farewell dinner with the crew. Accommodation: Hotel.",
      },
      {
        day: "Day 28",
        title: "Return Travel to Islamabad",
        description:
          "Flight to Islamabad via PK-452 or a drive to Chilas if the flight is unavailable due to weather. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Islamabad Sightseeing or Transit",
        description:
          "A day for local sightseeing in Islamabad or completion of the road journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Final Departure",
        description:
          "Transfer to the airport for your international flight home. End of expedition services. Transport: Fly out.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Moderately technical 6000m peak",
      "Glacier and alpine climbing experience",
      "High-altitude training peak",
      "Panoramic Karakoram views",
    ],
  },

  {
    id: "cigarette-peak",
    slug: "cigarette-expedition",
    name: "Cigarette Peak Expedition",
    altitude: "6,160m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: CigarettePeakImg1,
    gallery: [CigarettePeakImg1],
    description:
      "Cigarette Peak, at 6,160m in the Karakoram near the Charakusa Glacier, is a moderately technical high-altitude peak offering climbers excellent experience in alpine and glacier climbing.",
    overview:
      "The Cigarette Peak Expedition is ideal for mountaineers seeking to gain experience on technical 6000m peaks before attempting higher 7000m expeditions. The climb involves glacier travel and moderate alpine sections, with rewarding panoramic views of the Charakusa and Hushe valleys.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival in Islamabad, you will be met by our team and transferred to your hotel for rest and orientation. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via a domestic flight. In the event of a flight cancellation due to weather, the journey will proceed via an 11-12 hour overland drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Transit and Leisure",
        description:
          "A free day to explore the town of Skardu. For those traveling by road, this day involves an 8-9 hour drive from Chilas to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Hushe Village",
        description:
          "A 5-6 hour scenic jeep journey from Skardu to the village of Hushe, the final gateway before the trek begins. Accommodation: Camp.",
      },
      {
        day: "Day 05",
        title: "Trek to Cigarette Peak Base Camp",
        description:
          "Commencement of the trek with a 3-4 hour walk to Humbroq, establishing the primary Base Camp for Cigarette Peak. Accommodation: Camp.",
      },
      {
        day: "Day 06-20",
        title: "Cigarette Peak Climbing Period",
        description:
          "A 15-day dedicated window for acclimatization, technical climbing, and summit attempts on Cigarette Peak. Accommodation: Camp.",
      },
      {
        day: "Day 21",
        title: "Return Trek to Hushe",
        description:
          "Following the conclusion of the climbing phase, a 3-4 hour trek back down to Hushe village. Accommodation: Camp.",
      },
      {
        day: "Day 22",
        title: "Drive to Skardu",
        description:
          "A 6-7 hour return jeep drive from Hushe back to Skardu for a well-deserved rest. Accommodation: Hotel.",
      },
      {
        day: "Day 23",
        title: "Travel to Islamabad or Chilas",
        description:
          "Flight to Islamabad (weather permitting). If the flight is cancelled, the day involves an 8-9 hour drive to Chilas for an overnight stay. Accommodation: Hotel.",
      },
      {
        day: "Day 24",
        title: "Return to Islamabad",
        description:
          "Complete the final 11-12 hour leg of the road journey from Chilas back to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 25",
        title: "Final Departure",
        description:
          "Transfer to the airport for your onward flight to your own destination. End of expedition services. Accommodation: Hotel.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Moderately technical 6000m peak",
      "Glacier and alpine climbing experience",
      "High-altitude training peak",
      "Panoramic views of Charakusa and Hushe valleys",
    ],
  },

  {
    id: "khosar-gang-peak",
    slug: "khosar-gang-expedition",
    name: "Khosar Gang Expedition",
    altitude: "6,400m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Moderate",
    bestSeason: null,
    price: 17500,
    groupSize: "4-10 climbers",
    image: KhosarGangImg1,
    gallery: [KhosarGangImg1],
    description:
      "Khosar Gang Peak, at 6,400m in the Karakoram near Hushe, is a challenging high-altitude peak offering steep snow, ice, and glacier climbing for mountaineers seeking advanced alpine experience.",
    overview:
      "The Khosar Gang Expedition is ideal for climbers looking to build experience on technical 6000m peaks. The ascent involves steep glacier and snow routes, requiring solid alpine skills and proper acclimatization. Climbers are rewarded with panoramic views of the Charakusa and Hushe valleys and surrounding Karakoram giants.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be transferred to your hotel. The day includes completing official procedures, attending a welcome reception, and resting. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "A 45-minute domestic flight to Skardu (PK-451). Flights are subject to weather conditions. In the event of a cancellation, the journey proceeds via a 13-14 hour (480 km) coach drive to Chilas along the Karakoram Highway. Altitude: 500m to 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Transit to Skardu and Official Briefing",
        description:
          "For those who flew, this is a free day in Skardu. If driving, you will complete the remaining 10-11 hour (275 km) journey from Chilas, offering views of Nanga Parbat (8,125m) and the Indus River rapids. The day concludes with official procedures and a welcome briefing at the Ministry of Tourism in Skardu. Altitude: 1,200m to 2,300m. Accommodation: Hotel.",
      },
      {
        day: "Day 04-10",
        title: "Approach and Khosar Gang Climbing Period",
        description:
          "Depart Skardu by road for Shigar's Sildi village to begin the trek. This week is dedicated to establishing camps, acclimatization, and the climbing phase of Khosar Gang Peak. Accommodation: Camp.",
      },
      {
        day: "Day 11",
        title: "Return to Skardu",
        description:
          "Conclude the expedition in the mountains and drive back to Skardu town for rest and recovery. Accommodation: Camp.",
      },
      {
        day: "Day 12",
        title: "Travel to Islamabad or Chilas",
        description:
          "Return flight to Islamabad via PK-451 (weather dependent). Upon arrival, transfer to the hotel. In case of flight cancellation, the team will drive to Chilas for an overnight stay. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "Leisure Day in Islamabad",
        description:
          "A day at leisure in the capital. For those traveling by road, this day is used to complete the journey from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 14",
        title: "International Departure",
        description:
          "Transfer to Islamabad International Airport for your return flight home. Transport: On board.",
      },
    ],
    servicesIncluded: [],
    servicesNotIncluded: [],
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Challenging technical 6000m peak",
      "Steep glacier and snow climbing",
      "Advanced high-altitude training peak",
      "Panoramic views of Charakusa and Hushe valleys",
    ],
  },
];

export function getExpeditionBySlug(slug: string): ExpeditionData | undefined {
  return expeditions.find((exp) => exp.slug === slug);
}

export function getExpeditionById(id: string): ExpeditionData | undefined {
  return expeditions.find((exp) => exp.id === id);
}
