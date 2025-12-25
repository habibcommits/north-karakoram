import {
  COMMON_SERVICES_INCLUDED,
  COMMON_SERVICES_NOT_INCLUDED,
  COMMON_SERVICES_REQUIREMENTS,
} from "@/constants/expeditionData";
import heroImage2 from "@assets/stock_images/majestic_mountain_pe_34e27685.jpg";
import heroImage1 from "@assets/stock_images/majestic_mountain_pe_743f6593.jpg";

import K2BasecampGondogorlaImg1 from "@assets/k2-base-camp-trek/k1.jpeg";
import K2BasecampGondogorlaImg2 from "@assets/k2-base-camp-trek/k2.jpeg";
import K2BasecampGondogorlaImg3 from "@assets/k2-base-camp-trek/k3.jpeg";
import K2BasecampConcordiaImg1 from "@assets/k2-base-camp-concordia-trek/k1.jpeg";
import K2BasecampConcordiaImg2 from "@assets/k2-base-camp-concordia-trek/k2.jpeg";
import K2BasecampConcordiaImg3 from "@assets/k2-base-camp-concordia-trek/k3.jpg";
import Five8000mBasecampImg1 from "@assets/five-8000m-base-camp/f1.jpeg";
import Five8000mBasecampImg2 from "@assets/five-8000m-base-camp/f2.jpg";
import Five8000mBasecampImg3 from "@assets/five-8000m-base-camp/f3.jpeg";
import NangmaValleyImg1 from "@assets/nangma-valley-trek/n1.jpeg";
import NangmaValleyImg2 from "@assets/nangma-valley-trek/n2.jpg";
// import NangmaValleyImg3 from "@assets/nangma-valley-trek/n1.jpeg"
import ThalleLaImg1 from "@assets/thalle-la-trek/t1.jpeg";
import ThalleLaImg2 from "@assets/thalle-la-trek/t2.jpeg";
import ThalleLaImg3 from "@assets/thalle-la-trek/t3.jpeg";
import FairyMeadowImg1 from "@assets/fairy-meadow/f1.jpeg";
import FairyMeadowImg2 from "@assets/fairy-meadow/f2.jpeg";
import FairyMeadowImg3 from "@assets/fairy-meadow/f3.jpeg";
import AroundNangaParbatImg1 from "@assets/around-nanga-parbat/a1.jpeg";
import AroundNangaParbatImg2 from "@assets/around-nanga-parbat/a2.jpeg";
import AroundNangaParbatImg3 from "@assets/around-nanga-parbat/a3.jpeg";
import SnowLakeHisperLaImg1 from "@assets/snow-lake/s1.jpeg";
// import SnowLakeHisperLaImg2 from "@assets/"
// import SnowLakeHisperLaImg3 from "@assets/"
import BaraBroqImg1 from "@assets/bara-broq/b1.jpeg";
import BaraBroqImg2 from "@assets/bara-broq/b2.jpeg";
import BaraBroqImg3 from "@assets/bara-broq/b3.jpeg";
import MasherbrumBasecampImg1 from "@assets/mashabrum-trek/m1.jpg";
import MasherbrumBasecampImg2 from "@assets/mashabrum-trek/m2.jpeg";
import MasherbrumBasecampImg3 from "@assets/mashabrum-trek/m3.jpeg";
import CharkusaValleyImg1 from "@assets/charakusa/c1.jfif";
// import CharkusaValleyImg2 from "@assets/"
// import CharkusaValleyImg3 from "@assets/"
import MachuloLaImg1 from "@assets/machulo/m1.jpeg";
// import MachuloLaImg2 from "@assets/"
// import MachuloLaImg3 from "@assets/"
import IqbalTopImg1 from "@assets/iqbal-top/i1.jpg";
// import IqbalTopImg2 from "@assets/"
// import IqbalTopImg3 from "@assets/"
import ShimshalPassImg1 from "@assets/shimshal/s1.jpeg";
import ShimshalPassImg2 from "@assets/shimshal/s2.jpeg";
import ShimshalPassImg3 from "@assets/shimshal/s3.jpeg";
import NalterPassImg1 from "@assets/naltar/n1.jfif";
// import NalterPassImg2 from "@assets/"
// import NalterPassImg3 from "@assets/"

export interface TrekkingTimeline {
  day: string;
  title: string;
  description: string;
}

export interface TrekkingData {
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
  timeline: TrekkingTimeline[];
  servicesIncluded: string[];
  servicesNotIncluded: string[];
  requirements: string[];
  highlights: string[];
}

export const trekkings: TrekkingData[] = [
  {
    id: "k2-gondogoro-trek",
    slug: "k2-gondogoro-trek",
    name: "K2 and Gondogoro La Trek",
    altitude: "5,128m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 1800,
    groupSize: "4-12 trekkers",
    image: K2BasecampGondogorlaImg1,
    gallery: [
      K2BasecampGondogorlaImg1,
      K2BasecampGondogorlaImg2,
      K2BasecampGondogorlaImg3,
    ],
    description:
      "The K2 Base Camp via Gondogoro La Trek is one of the most spectacular and adventurous trekking routes in the Karakoram, combining the iconic K2 Base Camp with a high-altitude crossing of Gondogoro La Pass.",
    overview:
      "This challenging trek begins from Askole and follows the Baltoro Glacier to K2 Base Camp before crossing the technical Gondogoro La Pass (5,128m) into the Hushe Valley. The route offers breathtaking views of the world’s greatest mountains, including K2, Broad Peak, Gasherbrum I–IV, Masherbrum, Laila Peak, and the Trango Towers, along with vast glaciers such as Baltoro and Trango. It is regarded as one of the finest mountain treks in the world and is suitable for experienced trekkers with good fitness and prior high-altitude experience.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Upon arrival at Islamabad International Airport, you will be met and transferred to your hotel to begin your journey. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "A transfer to Skardu via flight PK451. In the event of inclement weather, the journey will proceed via an overland drive from Islamabad to Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "A day dedicated to local sightseeing in Skardu or completing the road journey from Chilas to Skardu. Altitude: 2,400m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Official Briefing and Preparation",
        description:
          "Attend the official expedition briefing and finalize all logistical preparations with the trekking staff. Altitude: 2,400m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Askoli",
        description:
          "An overland journey from Skardu to Askoli, the final roadhead before the trek begins. Altitude: 3,000m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Jhola",
        description:
          "Commencement of the trek, walking from Askoli to the Jhola campsite. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek to Paju",
        description:
          "Continuing the trek from Jhola toward the Paju campsite, offering views of the Karakoram giants. Altitude: 3,450m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Rest and Acclimatization at Paju",
        description:
          "A scheduled rest day at Paju for altitude adjustment, including an optional acclimatization walk toward Paju Peak (3,800m). Altitude: 3,450m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Urdukas",
        description:
          "A trekking leg from Paju to Urdukas, established on the lateral moraine with stunning vistas. Altitude: 3,930m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Goro II",
        description:
          "The trek continues from Urdukas to Goro II, camping directly on the Baltoro Glacier. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Concordia",
        description:
          "Trek from Goro II to the legendary glacial junction of Concordia, the heart of the Karakoram. Altitude: 4,650m. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "Excursion to K2 Base Camp",
        description:
          "A day trek from Concordia to Broad Peak Base Camp and onward to K2 Base Camp and the Art Gilkey Memorial. Altitude: 4,850m. Accommodation: Camping.",
      },
      {
        day: "Day 13",
        title: "Return to Concordia",
        description:
          "Descending from K2 Base Camp back to the campsite at Concordia. Altitude: 4,650m. Accommodation: Camping.",
      },
      {
        day: "Day 14",
        title: "Trek to Ali Camp",
        description:
          "Trekking from Concordia toward Ali Camp in preparation for the Gondogoro La crossing. Altitude: 5,010m. Accommodation: Camping.",
      },
      {
        day: "Day 15",
        title: "Reserve Day",
        description:
          "A contingency day reserved at Ali Camp in case of inclement weather or route conditions. Altitude: 5,010m. Accommodation: Camping.",
      },
      {
        day: "Day 16",
        title: "Gondogoro La Crossing to Khuspang",
        description:
          "An early start to cross the Gondogoro La (5,585m) before descending into the Hushe Valley to reach Khuspang. Altitude: 4,600m. Accommodation: Camping.",
      },
      {
        day: "Day 17",
        title: "Trek to Laila Peak and Shaircho",
        description:
          "Trekking from Khuspang, passing the iconic spire of Laila Peak, to reach the campsite at Shaircho. Altitude: 3,400m. Accommodation: Camping.",
      },
      {
        day: "Day 18",
        title: "Return to Hushe and Kanday",
        description:
          "A final 4-hour trek to Hushe village followed by a jeep drive to Kanday village. Altitude: 2,900m. Accommodation: Camping.",
      },
      {
        day: "Day 19",
        title: "Return to Skardu",
        description:
          "Drive from Kanday via Khaplu back to Skardu for an official debriefing at the Ministry of Tourism. Altitude: 2,400m. Accommodation: Hotel.",
      },
      {
        day: "Day 20",
        title: "Return Travel to Islamabad",
        description:
          "Transfer to Skardu airport for flight PK 452. If the flight is cancelled, the journey proceeds via a drive to Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 21",
        title: "Islamabad Sightseeing or Transit",
        description:
          "A day for sightseeing at Margalla Hills or completing the road journey from Chilas to Islamabad. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 22",
        title: "Final Departure",
        description:
          "Transfer for your international flight home. End of expedition services. Transport: Fly out.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Iconic K2 Base Camp trek",
      "High-altitude Gondogoro La pass crossing (5,128m)",
      "Views of K2, Broad Peak, Gasherbrums, Masherbrum, and Laila Peak",
      "Spectacular Baltoro and Trango glacier scenery",
    ],
  },

  {
    id: "k2-base-camp-concordia-trek",
    slug: "k2-base-camp-concordia-trek",
    name: "K2 Base Camp Concordia Trek",
    altitude: "5,150m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: null,
    price: 1500,
    groupSize: "4-12 trekkers",
    image: K2BasecampConcordiaImg1,
    gallery: [
      K2BasecampConcordiaImg1,
      K2BasecampConcordiaImg2,
      K2BasecampConcordiaImg3,
    ],
    description:
      "The K2 Base Camp and Concordia Trek is one of the world’s greatest high-altitude treks, leading through the legendary Baltoro Glacier to the base of K2, the world’s second-highest mountain.",
    overview:
      "This iconic trek takes adventurers deep into the heart of the Karakoram Range, following the Baltoro Glacier to Concordia—often called the ‘Throne Room of the Mountain Gods.’ From this spectacular natural amphitheater, trekkers enjoy breathtaking views of four 8,000m peaks: K2, Broad Peak, Gasherbrum I, and Gasherbrum II. Surrounded by towering granite spires, vast glaciers, and some of the wildest landscapes on Earth, the trek to K2 Base Camp and Concordia is considered one of the finest mountain trekking experiences in the world.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Upon arrival at Islamabad International Airport, you will be met and transferred to your hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to Skardu via a domestic flight. In the event of a flight cancellation, the journey will proceed via a 12-14 hour overland drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Transit and Rest",
        description:
          "A rest day in Skardu for those who flew, or the completion of the road journey from Chilas to Skardu. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Askoli",
        description:
          "A 6-7 hour jeep journey from Skardu to Askoli. Altitude: 3,000m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 05",
        title: "Trek to Jhola",
        description:
          "Commencement of the trek from Askoli to the Jhola campsite. Altitude: 3,200m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to Paiyu",
        description:
          "A 6-7 hour trek through the valley to reach Paiyu. Altitude: 3,450m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Rest and Exploration",
        description:
          "A free day at Paiju for rest, acclimatization, and local exploration. Accommodation: Camp.",
      },
      {
        day: "Day 08",
        title: "Trek to Khoburtse",
        description:
          "A 4-5 hour trek as the route moves onto the lateral moraine. Altitude: 3,566m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 09",
        title: "Trek to Urdukas",
        description:
          "A 3-4 hour trek to the Urdukas campsite, situated high above the glacier. Altitude: 4,050m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 10",
        title: "Trek to Goro-II",
        description:
          "A 5-6 hour trek across the glacier to reach Goro-II. Altitude: 4,380m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 11",
        title: "Trek to Concordia",
        description:
          "A 4-5 hour trek to the legendary glacial junction of Concordia. Altitude: 4,650m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 12",
        title: "Excursion to K2 Base Camp",
        description:
          "A day trek from Concordia to K2 Base Camp (5,135m) and return to Concordia. Altitude: 5,135m / 4,650m. Accommodation: Camp.",
      },
      {
        day: "Day 13",
        title: "Rest and Photography",
        description:
          "A free day at Concordia dedicated to photography, rest, or further local exploration. Accommodation: Camp.",
      },
      {
        day: "Day 14",
        title: "Return Trek to Goro-II",
        description:
          "Beginning the descent by trekking back to Goro-II. Altitude: 4,380m. Overnight stay in tents. Accommodation: Camp.",
      },
      {
        day: "Day 15",
        title: "Descent to Urdukas",
        description:
          "Continue the return journey by trekking down to Urdukas. Altitude: 4,050m. Overnight stay in tents. Accommodation: Camp.",
      },
      {
        day: "Day 16",
        title: "Descent to Paiyu",
        description:
          "Trek down the moraine to reach the campsite at Paiyu. Altitude: 3,450m. Overnight stay in tents. Accommodation: Camp.",
      },
      {
        day: "Day 17",
        title: "Return to Jhola",
        description:
          "Trekking from Paiyu back to Jhola. Altitude: 3,200m. Overnight stay in tents. Accommodation: Camp.",
      },
      {
        day: "Day 18",
        title: "Final Trek to Askoli",
        description:
          "The final trekking leg back to Askoli village. Altitude: 3,000m. Meals and overnight stay provided in tents. Accommodation: Camp.",
      },
      {
        day: "Day 19",
        title: "Drive to Skardu",
        description:
          "Return jeep drive from Askoli back to Skardu town. Meals and overnight stay at hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 20",
        title: "Travel to Islamabad or Chilas",
        description:
          "Transfer to Islamabad via flight or an 8-9 hour (290km) overland drive to Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 21",
        title: "Islamabad Sightseeing or Transit",
        description:
          "Sightseeing in Islamabad or the completion of the drive from Chilas to Islamabad. Accommodation: Hotel.",
      },
      {
        day: "Day 22",
        title: "Final Departure",
        description:
          "Transfer to Islamabad International Airport for your return flight home. Transport: Home.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "K2 Base Camp trek",
      "Concordia – the Throne Room of the Mountain Gods",
      "Views of four 8,000m peaks",
      "Baltoro Glacier alpine scenery",
    ],
  },

  {
    id: "five-8000m-base-camp",
    slug: "five-8000m-base-camp-trek",
    name: "Five 8000m Base Camp Trek",
    altitude: "5,585m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2200,
    groupSize: "4-10 trekkers",
    image: Five8000mBasecampImg1,
    gallery: [
      Five8000mBasecampImg1,
      Five8000mBasecampImg2,
      Five8000mBasecampImg3,
    ],
    description:
      "The Five Base Camps Trek is one of the most comprehensive and adventurous high-altitude treks in Pakistan, visiting the base camps of five 8000m peaks across the Karakoram and Himalaya.",
    overview:
      "This extraordinary circuit trek explores the heart of the Karakoram Range, visiting the base camps of K2, Broad Peak, Gasherbrum I, Gasherbrum II, and Nanga Parbat. The route follows the legendary Baltoro Glacier to Concordia—known as the Throne Room of the Mountain Gods—before crossing the high and scenic Gondogoro La Pass (5,585m) into the Hushe Valley. Trekkers experience vast glaciers, dramatic granite spires, remote valleys, and some of the wildest mountain scenery on Earth, making this trek one of the ultimate high-altitude adventures in the world.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met and transferred to your hotel. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Transfer to the airport for a spectacular flight to Skardu, the gateway to the Karakoram mountains. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Leisure Day in Skardu",
        description:
          "A free day in Skardu for final preparations, altitude adjustment, and exploring the local landscape. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Askole",
        description:
          "A scenic jeep journey from Skardu to Askole village, the final road-accessible settlement before the trek. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek to Jhola",
        description:
          "The trekking begins with a march from Askole to Jhola, crossing the snout of the Biafo Glacier along the way. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek to Paiju",
        description:
          "Continuing the journey from Jhola to Paiju, following the course of the Braldu River. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Rest and Acclimatization",
        description:
          "A scheduled rest day in Paiju for acclimatization, essential before moving onto the Baltoro Glacier. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek to Khoburtse",
        description:
          "Commencing the glacial walk as you trek from Paiju to the Khoburtse campsite. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Urdukus",
        description:
          "A day of crossing small glaciers and navigating the moraine to reach Urdukus. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek to Goro II",
        description:
          "Trekking to Goro II, situated at the dramatic junction of the Baltoro and Younghusband glaciers. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Concordia",
        description:
          "A final push through rocky moraine to reach Concordia, the legendary throne room of the mountain gods. Accommodation: Camping.",
      },
      {
        day: "Day 12",
        title: "K2 and Broad Peak Base Camps",
        description:
          "A memorable trek to Broad Peak Base Camp, the Gilkey Memorial, and the primary K2 Base Camp. Accommodation: Camping.",
      },
      {
        day: "Day 13",
        title: "Return to Concordia",
        description:
          "Trek back from the high base camps to Concordia for a period of rest. Accommodation: Camping.",
      },
      {
        day: "Day 14",
        title: "Trek to Shahring",
        description:
          "Continuing the expedition with a trek from Concordia toward the Shahring campsite. Accommodation: Camping.",
      },
      {
        day: "Day 15",
        title: "Gasherbrum I & II Base Camp",
        description:
          "A day dedicated to reaching the base camps of the Gasherbrum massifs, including Gasherbrum I and II. Accommodation: Camping.",
      },
      {
        day: "Day 16",
        title: "Return to Concordia",
        description:
          "Descent back to the Concordia glacial junction for rest and recovery. Accommodation: Camping.",
      },
      {
        day: "Day 17",
        title: "Trek to Ali Camp",
        description:
          "Trekking toward Ali Camp, the staging point for the technical crossing of the Gondogoro La. Accommodation: Camping.",
      },
      {
        day: "Day 18",
        title: "Gondogoro La to Khuispang",
        description:
          "Crossing the high Gondogoro La pass and descending into the Hushe Valley to reach Khuispang. Accommodation: Camping.",
      },
      {
        day: "Day 19",
        title: "Trek to Saicho",
        description:
          "Descending further from Khuispang to the green pastures of Saicho. Accommodation: Camping.",
      },
      {
        day: "Day 20",
        title: "Return to Skardu",
        description:
          "A final trek to Hushe village followed by a jeep drive back to Skardu town. Accommodation: Hotel.",
      },
      {
        day: "Day 21",
        title: "Contingency Day",
        description:
          "A buffer day in Skardu reserved for rest or potential travel delays. Accommodation: Hotel.",
      },
      {
        day: "Day 22",
        title: "Drive to Raikot Bridge",
        description:
          "Departure from Skardu for an overland journey to Raikot Bridge and Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 23",
        title: "Hike to Fairy Meadows",
        description:
          "A jeep drive to Tatu village followed by a scenic hike up to the lush Fairy Meadows. Accommodation: Camping.",
      },
      {
        day: "Day 24",
        title: "Trek to Beyal Camp",
        description:
          "An alpine trek through the forest from Fairy Meadows to Beyal Camp. Accommodation: Camping.",
      },
      {
        day: "Day 25",
        title: "Nanga Parbat Base Camp",
        description:
          "The final base camp visit, trekking to the foot of the mighty Nanga Parbat. Accommodation: Camping.",
      },
      {
        day: "Day 26",
        title: "Return to Fairy Meadows",
        description:
          "Trekking back from the high camp to the meadows for a final night in the mountains. Accommodation: Camping.",
      },
      {
        day: "Day 27",
        title: "Return to Islamabad",
        description:
          "A long drive back to Islamabad via the Karakoram Highway or the Babusar Pass. Accommodation: Hotel.",
      },
      {
        day: "Day 28",
        title: "Islamabad Sightseeing",
        description:
          "A day for urban exploration and final sightseeing in Pakistan's capital city. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Final Departure",
        description:
          "Transfer to Islamabad International Airport for your flight back home.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Base camps of five 8000m peaks (K2, Broad Peak, Gasherbrum I & II, Nanga Parbat)",
      "Concordia – the Throne Room of the Mountain Gods",
      "Gondogoro La Pass crossing (5,585m)",
      "Baltoro, Godwin-Austen, Vigne, and Gondogoro glaciers",
      "Circular trek linking Baltoro and Hushe valleys",
      "Views of iconic Karakoram peaks including Trango Towers, Masherbrum, Laila Peak, and Chogolisa",
      "Remote alpine wilderness and glacier scenery",
    ],
  },

  {
    id: "nangma-valley-trek",
    slug: "nangma-valley-trek",
    name: "Nangma Valley Trek",
    altitude: "3,950m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Moderate to Difficult",
    bestSeason: null,
    price: 1100,
    groupSize: "4-12 trekkers",
    image: NangmaValleyImg1,
    gallery: [NangmaValleyImg1, NangmaValleyImg2],
    description:
      "The Nangma Valley Trek is a scenic and culturally rich journey through one of the most beautiful valleys in the Karakoram, known for its dramatic granite spires, alpine meadows, and traditional mountain villages.",
    overview:
      "This off-the-beaten-path trek explores the pristine Nangma Valley near Hushe, offering breathtaking views of towering granite walls such as Amin Brakk and Mingulo Broq. Designed for acclimatization, safety, and enjoyment, the trek provides an authentic mountain experience with opportunities to interact with local communities, enjoy alpine landscapes, and experience traditional Balti culture in a remote Karakoram setting.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. The afternoon is reserved for recovery and a group briefing regarding the Nangma Valley Trek. If time permits, optional sightseeing in the capital is available. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Transfer to the airport for a spectacular 45-minute mountain flight to Skardu, offering views of Nanga Parbat, K2, and the Gondogoro Pass. In the event of a flight cancellation, the journey proceeds via an 8-9 hour drive (461km) on the Karakoram Highway to Chilas. Altitude: 2,230m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Contingency and Exploration",
        description:
          "A free day to explore Skardu, the capital of Baltistan. Nestled between the Karakoram and Himalayan ranges, the town offers access to Shangrila Resort, Upper Kachura Lake, Skardu Fort, and the historic 8th-century Manthal Buddha Rock. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Khaplu",
        description:
          "A spectacular 3-hour jeep journey along the Indus and Shyok rivers to the town of Khaplu. Known for its rich cultural heritage, the town features the Chaqchan Mosque and the 19th-century Khaplu Palace. Altitude: 2,500m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Drive to Kanday and Trek to Mingulu Broq",
        description:
          "After a 2-hour drive to Kanday village, begin a rewarding 2-hour trek to the Mingulu Broq meadow. The trail crosses rustic wooden bridges and winds through lush landscapes where local shepherds tend their flocks. Altitude Gain: 600m. Accommodation: Fully serviced camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Nangma Valley Basecamp",
        description:
          "A 3-hour hike to the heart of Nangma Valley. This stunning basecamp is encircled by the jagged spires of the Great Tower, Grey Tower, Changi Tower, and the majestic King and Son Peak. Other visible summits include Brak Zang and Denbor Peak. Altitude: 3,900m. Accommodation: Fully serviced camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Excursion to Amin Braq Basecamp",
        description:
          "A 4-5 hour round-trip trek through picturesque alpine meadows to the base of Amin Braq. The ascent offers panoramic vistas of Drefekhar Peak, Kodra Peak, and Nawaz Braq. After exploring the high camp, return to Nangma Valley for the night. Altitude: 4,450m. Accommodation: Fully serviced camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Return Trek to Kanday",
        description:
          "A 3-hour descent from the high valley back to Kanday village. Enjoy the scenic transition from mountain spires to green pastures. The evening offers an opportunity to experience local Balti hospitality in the village. Altitude: 3,170m. Accommodation: Fully serviced camping or Guest House. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Drive to Skardu via Khaplu",
        description:
          "Bid farewell to the local porter team and depart via jeep. The route follows the Shyok River to its confluence with the Indus, eventually returning to Skardu on tarmac roads for a hot shower and a comfortable hotel stay. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Return to Islamabad",
        description:
          "Transfer to Skardu airport for the return flight over Nanga Parbat. Upon arrival in Islamabad, the afternoon is free for independent sightseeing or rug shopping. The day concludes with a celebratory farewell dinner. In case of flight cancellation, the team will drive to Chilas. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Contingency Day",
        description:
          "A final buffer day to account for travel delays. If already in Islamabad, this day is used for sightseeing at the city’s many landmarks or relaxing. If driving, the team completes the final leg of the Karakoram Highway. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "International Departure",
        description:
          "After breakfast, transfer to Islamabad International Airport for your flight back home, marking the conclusion of the Nangma Valley trek.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Spectacular Nangma Valley scenery",
      "Traditional mountain villages and local culture",
      "Dramatic granite spires and alpine landscapes",
      "Peaceful off-the-beaten-path trekking experience",
    ],
  },

  {
    id: "thalle-la-trek",
    slug: "thalle-la-trek",
    name: "Thalle La Trek",
    altitude: "4,600m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Difficult",
    bestSeason: null,
    price: 1400,
    groupSize: "4-10 trekkers",
    image: ThalleLaImg1,
    gallery: [ThalleLaImg1, ThalleLaImg2, ThalleLaImg3],
    description:
      "The Thalle La Trek is a challenging high-altitude pass crossing in the Karakoram, offering panoramic views of surrounding peaks and pristine alpine landscapes.",
    overview:
      "The Thalle La Trek follows a remote mountain route and crosses the scenic Thalle La Pass at approximately 4,600m. Designed with a strong focus on acclimatization, safety, and enjoyment, this trek rewards experienced trekkers with dramatic alpine scenery, wide mountain vistas, and a true wilderness experience. Changing weather and high-altitude conditions make flexibility and teamwork essential throughout the journey.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, our staff will meet and greet you before transferring you to the group hotel. The remainder of the day is yours to recover from your travels. Later in the evening, we will convene for a comprehensive group briefing on the Thalle La Trek. Optional sightseeing in the purpose-built capital is available depending on arrival times. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Transfer to the airport for a spectacular 45-minute mountain flight to Skardu, the capital of Baltistan, offering vistas of Nanga Parbat, K2, and Gondogoro Pass. Should the flight be cancelled, we will undertake an 8-9 hour (461km) drive to Naran via the Karakoram Highway. The afternoon in Skardu includes visits to local bazaars, historical forts, and the 8th-century Manthal Buddha Rock. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing",
        description:
          "Begin the morning with a hike to the 18th-century Kharpocho Fort for panoramic views of the Indus River and Skardu town. We will then visit the Organic Village, known for its traditional sustainable farming. The afternoon is free for independent exploration, with optional jeep tours to Satpara Lake or local market visits available upon request. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Khaplu",
        description:
          "A 3-hour journey following the Indus and Shyok rivers leads us 105 kilometers east to Khaplu. The drive provides a dramatic contrast between seasonal blossoms and rugged peaks. After checking into the hotel, we will visit the 14th-century Chaqchan Monastery, one of the oldest and most significant religious sites in Baltistan. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 05",
        title: "Drive to Thalle Village",
        description:
          "We depart by 4x4 jeep, crossing the Shyok River via a wooden suspension bridge to follow the Thalle Lungma. The drive winds through picturesque barley and potato fields to Olmo Village, the highest summer settlement in the valley. After a warm welcome and tea, we will conduct an acclimatization hike. While daytime temperatures are pleasant, nights can drop to -5°C. Ascent: 250m. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Azalan",
        description:
          "The trekking phase begins with a 6-hour walk through the Thalle Valley. The trail features lush green slopes where herds of Yak and cattle graze freely. We will pause at traditional shepherd huts to experience local hospitality and sample fresh milk products. Following a hot lunch, we continue to our camp at the foot of Thalle La. Ascent: 400m. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Cross Thalle La to Raseppi",
        description:
          "An early start is required to climb the Thalle La pass (4,572m). The ascent is adorned with alpine flowers and leads to a summit view of the Haramosh group to the west and the Siachen Mountains to the east. The 3-hour descent passes through thick juniper forests and heavenly meadows to reach the Raseppi campsite. Ascent: 900m. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek to Shigar",
        description:
          "Our final walking day involves a 4-hour descent through green pastures and across the Bangma River. The trek concludes in Shigar town, where we walk directly into the Shigar Fort Residence. This 17th-century restored Raja palace offers a unique heritage experience and a well-earned hot shower. Ascent: 500m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Return Flight to Islamabad",
        description:
          "Weather permitting, we fly back to Islamabad, passing Nanga Parbat once more. Upon arrival, a private bus transfers the group to the hotel. The afternoon is free for self-guided sightseeing or shopping for hand-made Iranian and Afghan rugs. We will gather in the evening for a celebratory farewell meal. In case of flight cancellation, we will drive to Chilas. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Contingency Day",
        description:
          "This day is reserved as a buffer for travel delays. If the road journey from Chilas is required, we will arrive in the capital by late afternoon. If the flight was successful, the day is dedicated to further sightseeing in Islamabad with recommendations provided by our staff. We will enjoy a final group dinner together. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "International Departure",
        description:
          "Following breakfast, you will be transferred to Islamabad International Airport for your departure flight. This marks the end of the Thalle La Trek Pakistan.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "High-altitude Thalle La pass crossing",
      "Dramatic alpine and mountain scenery",
      "Panoramic views of Karakoram peaks",
      "Remote and adventurous trekking experience",
    ],
  },

  {
    id: "snow-lake-hispar-trek",
    slug: "snow-lake-hispar-trek",
    name: "Snow Lake - Hispar La Trek",
    altitude: "5,151m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "20-25 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: SnowLakeHisperLaImg1,
    gallery: [SnowLakeHisperLaImg1],
    description:
      "The Snow Lake – Hispar La Trek is one of the most remote and spectacular high-altitude treks in the world, traversing vast glaciers and crossing the iconic Hispar La Pass in the heart of the Karakoram Range.",
    overview:
      "This legendary trek links the mountain regions of Baltistan and Hunza through an extraordinary glacial route often referred to as the ‘Highway of Ice.’ Beginning near Skardu, the journey follows the immense Biafo Glacier to the surreal expanse of Snow Lake before crossing the Hispar La Pass at 5,151m and descending the Hispar Glacier into Hunza Valley. Spanning over 120 kilometers of continuous ice, moraine, and high mountain terrain, the Snow Lake – Hispar La Trek is widely regarded as one of the most challenging and rewarding trekking adventures in the Karakoram, suitable only for experienced high-altitude trekkers seeking true wilderness.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met and transferred to the group hotel. The day is yours to recover from your journey. In the evening, we will conduct a comprehensive briefing for the Snow Lake – Hispar La Trek. If time permits, an optional self-guided tour of the capital, purpose-built in 1961, is available. Overnight: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Transfer to the airport for a spectacular 45-minute flight to Skardu (2,228m), offering breathtaking views of Nanga Parbat, K2, and the Gondogoro La. Upon arrival, you may explore the local bazaar or the 8th-century Manthal Lord Buddha Rock. Note: In the event of a flight cancellation, we will undertake an 8-9 hour (461km) drive to Chilas on the Karakoram Highway. Overnight: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Sightseeing and Preparation in Skardu",
        description:
          "A day dedicated to acclimatization and exploration in the capital of Baltistan. Highlights include a hike to the 18th-century Kharpocho Fort for views of the Indus River, a visit to an organic farming village, and a jeep excursion to the turquoise waters of Satpara and Kachura Lakes. If you traveled by road, this day will be used to complete the drive from Chilas to Skardu. Overnight: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Askole",
        description:
          "A 7-hour journey following the Mighty Indus and Shigar valleys to reach Askole (3,000m), the final settlement of the region. The village is characterized by its traditional wooden houses and apricot groves. This evening marks the first night of camping under the stars as we prepare for the trek ahead. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Namla",
        description:
          "The trekking phase begins (6-7 hours) by following the K2 trail before turning west onto the Biafo Glacier. We navigate the lateral moraine to reach Namla (3,566m), a grassy campsite tucked behind the moraine wall, offering spectacular mountain vistas. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Mango",
        description:
          "A challenging 5-6 hour walk across the fracture zones and moraine ridges of the Biafo Glacier. Navigating loose rocks requires focus, but the views of the snow-covered Karakoram peaks provide a majestic backdrop. We establish camp at Mango (3,720m) on a grassy patch on the left side of the glacier. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Biantha",
        description:
          "We continue our journey along the 'highway of ice,' trekking for 6 hours along the lateral moraine. The terrain is smoother today as we cross to the right bank to reach the green pastures of the Biantha campsite (4,035m). Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Rest and Acclimatization",
        description:
          "A crucial rest day to allow your body to adjust to the high altitude. You may relax at camp or hike the ridges behind the site for exceptional photography of the Latok group and the Ogre. Keep a keen eye out for Ibex grazing on the upper slopes. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Trek to Marfogoro",
        description:
          "A 6-hour trek involves a steep trail to rejoin the Biafo Glacier. As we encounter crevasses, the team will use fixed ropes and walk in a secured queue. The effort is rewarded with views of the Ogre (7,813m), Kanjut Sar, and your first glimpse of Snow Lake and Hispar La. Altitude: 4,300m. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek to Karphogoro",
        description:
          "Wake to a sunrise over the Hispar Pass. Today's 6-hour trek (4,680m) follows an ancient trail used by warriors and monks for centuries. The route remains on the glacier, surrounded by the high-altitude architecture of the Karakoram range. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Trek to Hispar La Base Camp",
        description:
          "A 6-hour trek leads us into the heart of Snow Lake—a vast 16km-wide glacial basin. First named by Martin Conway in 1892, it is often described as the finest mountain view in the world. We navigate a network of crevasses to reach the Hispar La Base Camp (4,590m). Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Cross Snow Lake to Hispar La Pass",
        description:
          "A strenuous 6-hour ascent to the summit of Hispar La (5,150m). While the gradient is not extreme, the altitude makes the trek challenging. From the top, enjoy unparalleled views of the Biafo and Hispar glaciers and the peaks of the Hunza Valley. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Trek to Kani Basa",
        description:
          "After sunrise at the pass, we begin our descent into the Hunza Valley (5 hours). We cross the collision zone where the Hispar and Kani Basa glaciers meet, reaching a grassy ablation valley. Enjoy views of Kanju Sar (7,760m) from our camp. Altitude: 4,510m. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "Trek to Bakhtur Baig",
        description:
          "Continuing our descent (6 hours) along the Hispar glacier. The day involves navigating moraine ridges and crossing several glacial streams before arriving at the Bakhtur Baig camp (4,470m) on the right side of the glacier. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 15",
        title: "Trek to Shigham Baris",
        description:
          "A 7-hour trek descending further down the glacier. The trail winds through loose scree and eventually into areas adorned with wildflowers as we approach the beautiful, grassy Shigham Baris campsite (4,170m). Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 16",
        title: "Trek to Bitenmal",
        description:
          "The descent becomes smoother today (6 hours). After crossing to the other side of the glacier, we enter a large meadow known as Bitenmal (3,760m). Here, we may meet local shepherds from Hispar village who often share fresh dairy products with trekkers. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 17",
        title: "Trek to Hispar Village",
        description:
          "A 4-hour walk brings us back to civilization. The vibrant green of terraced fields and orchards provides a stark contrast to the glacial scenery. This is our final night under the stars, camping near the village at 2,300m. Overnight: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Drive to Karimabad",
        description:
          "We transition to jeeps for a 4-hour drive along the Nagar River to reach the Karakoram Highway. We proceed to Karimabad (2,440m) in the Hunza Valley, where you can enjoy a hot shower and the comfort of a hotel room. Overnight: 3-Star Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "Sightseeing in Hunza and Drive to Gilgit",
        description:
          "Explore Karimabad, visiting the UNESCO-listed Altit and Baltit Forts, which date back to the 13th century. These historic sites offer a glimpse into the rule of the Mirs of Hunza. In the afternoon, we drive to Gilgit. Overnight: 3-Star Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 20",
        title: "Return Flight to Islamabad",
        description:
          "We aim for the early morning 40-minute flight from Gilgit to Islamabad. Should weather conditions prevent flying, we will begin the return drive via the Karakoram Highway to Chilas or Besham. Overnight: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 21",
        title: "Contingency Day",
        description:
          "A buffer day to account for travel delays. If already in Islamabad, this is a free day for urban exploration. If driving, we will arrive in the capital by late afternoon. Overnight: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 22",
        title: "Final Departure",
        description:
          "Following breakfast, you will be transferred to Islamabad International Airport for your departure flight home. We trust the Snow Lake – Hispar La Trek has provided lifelong memories. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Snow Lake – one of the largest high-altitude glacial basins on Earth",
      "Hispar La Pass crossing (5,151m)",
      "Traverse of Biafo and Hispar glaciers, the ‘Highway of Ice’",
      "Remote and untouched alpine wilderness",
      "Panoramic views of Karakoram peaks and glaciers",
      "One of the world’s most challenging high-altitude treks",
    ],
  },

  {
    id: "barah-broq-trk",
    slug: "barah-broq-trek",
    name: "Barah Broq Trek",
    altitude: "5,350m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: BaraBroqImg1,
    gallery: [BaraBroqImg1, BaraBroqImg2, BaraBroqImg3],
    description:
      "The Barah Broq (Moses Peak) Trek is a short yet challenging K2 viewpoint trek in the Ganche Valley, offering spectacular mountain scenery without the need for glacier travel.",
    overview:
      "Starting from the traditional village of Barah near Skardu, this multi-day trek ascends through a dramatic gorge into the beautiful Barah Broq valley. The route leads to high alpine pastures at around 4,300m, where two pristine alpine lakes sit beneath towering peaks. An optional day hike to Moses Peak (5,350m) rewards trekkers with breathtaking panoramic views of K2, Nanga Parbat, and the Gasherbrum range. Ideal for trekkers seeking a shorter but rewarding high-altitude experience, the Barah Broq Trek combines stunning scenery, cultural interaction, and exceptional viewpoints in the heart of Baltistan.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Travel to Skardu or Chilas",
        description:
          "Transfer to the airport for your flight to Skardu. In the event of a flight cancellation, the journey will proceed via an overland drive on the Karakoram Highway (KKH) to Chilas. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Transit",
        description:
          "A day dedicated to exploring the local sights of Skardu. For those traveling by road, this day involves completing the journey from Chilas to Skardu via the KKH. Altitude: 2,400m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive to Barah Valley",
        description:
          "Departure from Skardu for a scenic drive to the Barah Valley, the gateway to your trekking adventure. Altitude: 2,500m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Trek to Summer Pastures",
        description:
          "Commencement of the trekking phase, ascending through the valley to reach the high-altitude Summer Pastures. Altitude: 3,150m. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to Blue Lake",
        description:
          "Continuing the ascent toward the stunning Blue Lake, a highlights of the Barah Broq region. Altitude: 4,150m. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Ascent of Moses Peak",
        description:
          "The summit day involves climbing Moses Peak, offering panoramic views of the surrounding Karakoram giants. Altitude: 5,150m. Accommodation: Camp.",
      },
      {
        day: "Day 08",
        title: "Descent to Summer Pastures",
        description:
          "Begin the return journey by trekking back down from the high camps to the Summer Pastures. Altitude: 3,150m. Accommodation: Camp.",
      },
      {
        day: "Day 09",
        title: "Return to Barah Valley and Skardu",
        description:
          "Final trek back to Barah Valley followed by a return drive to Skardu town. Accommodation: Hotel.",
      },
      {
        day: "Day 10",
        title: "Return to Islamabad",
        description:
          "Fly back to Islamabad or undertake the return drive via the Karakoram Highway. Accommodation: Hotel.",
      },
      {
        day: "Day 11",
        title: "International Departure",
        description:
          "Transfer to the airport for your return flight home. Transport: On board.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "K2 viewpoint trek without glacier travel",
      "Optional ascent of Moses Peak (5,350m)",
      "Spectacular views of K2, Nanga Parbat, and the Gasherbrums",
      "Beautiful Barah Broq valley with alpine lakes",
      "Authentic Balti village culture and scenery",
      "Ideal short high-altitude trek near Skardu",
    ],
  },

  {
    id: "mashebrum-base-camp-trek",
    slug: "mashebrum-base-camp-trek",
    name: "Mashebrum Base Camp Trek",
    altitude: "4,280m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: MasherbrumBasecampImg1,
    gallery: [
      MasherbrumBasecampImg1,
      MasherbrumBasecampImg2,
      MasherbrumBasecampImg3,
    ],
    description:
      "The Masherbrum Base Camp Trek is a scenic and accessible trek in the Hushe Valley, leading to the base of Masherbrum (K1), one of the most iconic peaks of the Karakoram Range.",
    overview:
      "Starting from the picturesque village of Hushe in Gilgit-Baltistan, this trek follows ancient mountain trails through green valleys, waterfalls, and high alpine terrain. The route gradually ascends into the Masherbrum Valley, offering impressive views of surrounding peaks and glaciated landscapes. The journey culminates at Masherbrum Base Camp, located at approximately 4,280m, directly beneath the towering north face of Masherbrum (7,821m). Known as one of the easiest and shortest base camp treks in the Karakoram, the Masherbrum Base Camp Trek is ideal for trekkers seeking a rewarding high-mountain experience without technical difficulty.",
    timeline: [
      {
        day: "Day 01",
        title: "Islamabad and Rawalpindi",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad airport, you will be met and transferred to your hotel. In the afternoon, proceed for a comprehensive city tour of Islamabad and Rawalpindi, visiting landmarks such as the Faisal Mosque, Shakar Parian, Pakistan Monument, Damen-e-Koh, Lok Virsa Museum, and the vibrant old bazaars including Raja Bazaar. Altitude: 540m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight from Islamabad to Skardu",
        description:
          "Today, we take a short but spectacular one-hour flight to Skardu. The afternoon is free to explore the local town. Note: If the flight is cancelled due to weather, we will drive to Chilas via the Babusar Pass (4,173m), covering 461km. Altitude: 2,228m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Free Day in Skardu",
        description:
          "A dedicated preparation day in Skardu. Enjoy local exploration with visits to the Skardu Bazaar and the historic Kharpocho Fort. Note: If the previous day's flight was cancelled, this day will be spent completing the 8-9 hour drive from Chilas to Skardu along the Indus River. Altitude: 2,228m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive from Skardu to Hushe",
        description:
          "Travel by jeep to Hushe, the starting point of our trek. This 6-7 hour (120km) scenic journey crosses the Shyok River and passes through the traditional villages of Khaplu, Macholo, Kanday, and Khane. Altitude: 3,050m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek from Hushe to Parbisan",
        description:
          "Commence the trekking phase with a 3-4 hour (6.9km) walk from Hushe village to the Parbisan campsite. Altitude: 3,475m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek from Parbisan to Brumbrama",
        description:
          "Continue the trek through the valley from Parbisan to Brumbrama. This leg takes approximately 3-4 hours and covers 4.1km. Altitude: 4,050m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek from Brumbrama to Base Camp",
        description:
          "Ascend from Brumbrama to the Masherbrum Base Camp. The trek takes approximately 3-4 hours, leading you to the foot of one of the world's most impressive peaks. Altitude: 4,280m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Free Day at Masherbrum Base Camp",
        description:
          "A free day at the base camp dedicated to rest and local exploration of the surrounding glacial landscapes. Altitude: 4,280m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Trek from Base Camp to Brumbrama",
        description:
          "Begin the return journey by trekking 4 hours back down to the Brumbrama campsite. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek from Brumbrama to Hushe",
        description:
          "Continue the descent from Brumbrama back to Hushe village, completing the trekking circuit. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Drive from Hushe to Skardu",
        description:
          "Return to Skardu via a 6-7 hour jeep drive, retracing the scenic route through the valley. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Fly from Skardu to Islamabad",
        description:
          "Take the return flight to Islamabad, with the afternoon free for further exploration. Note: If the flight is cancelled, we will begin a 9-hour drive along the Indus River to reach Chilas. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Free Day in Islamabad",
        description:
          "Enjoy a final free day in the capital for sightseeing, shopping, and relaxation. Note: If the flight on Day 12 was cancelled, this day involves the 11-12 hour drive from Chilas to Islamabad via the Babusar Pass. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "Return Flight",
        description:
          "Transfer to Islamabad International Airport for your flight back home. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Masherbrum (K1) Base Camp at 4,280m",
      "Close-up views of Masherbrum (7,821m)",
      "Trek through the scenic Hushe Valley",
      "Views of peaks between 5,000m and 7,000m",
      "One of the easiest and quickest Karakoram base camp treks",
      "Traditional villages and mountain culture of Hushe",
    ],
  },

  {
    id: "charkusa-valley-trek",
    slug: "charkusa-valley-trek",
    name: "Charkusa Valley Trek",
    altitude: "4,600m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: CharkusaValleyImg1,
    gallery: [CharkusaValleyImg1],
    description:
      "The Charakusa Valley Trek is a remote and visually stunning journey into the heart of the Karakoram, offering close-up views of the iconic K6 and K7 peaks.",
    overview:
      "Beginning in the historic village of Hushe, the Charakusa Valley Trek leads trekkers through quiet settlements, alpine pastures, and shepherd huts before entering the wild terrain of the Charakusa Glacier. Surrounded by towering peaks such as K6 (7,281m) and K7 (6,934m), the valley is renowned for its dramatic landscapes, technical climbing routes, and pristine mountain environment. This trek is ideal for experienced trekkers and climbers seeking an adventurous route into one of the Karakoram’s most beautiful and less-traveled valleys, combining high mountain scenery with authentic Balti culture.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, our guides will receive you and transfer you to the group hotel. The first day is dedicated to relaxation and recovery. A group briefing, final payments, and a welcome dinner will take place around 6:00 PM. Please provide flight details at least five days prior to arrival. Altitude: 540m. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "Take a spectacular morning flight from Islamabad to Skardu. Weather permitting, you will enjoy views of Nanga Parbat and the Karakoram range. Upon arrival in Skardu, the remainder of the day is at your leisure to adjust to the mountain air. Altitude: 2,498m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Exploration and Preparation in Skardu",
        description:
          "After breakfast, enjoy a walk to the historic Kharpocho Fort for panoramic views of the Indus River and Skardu town. Optional excursions to Satpara Lake and the Skardu Bazaar for shopping are also available. Meanwhile, our staff will finalize the necessary government documentation and permits for the trek. Altitude: 2,598m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Hushe Valley",
        description:
          "An early 6-hour jeep journey (127km) takes us through picturesque villages to Hushe, the highest village in the region. We navigate small tributary valleys that are best crossed in the morning before glacial melt increases. Our camp is set below the village, dominated by the massive bulk of Masherbrum (7,821m). Altitude: 3,050m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Saicho",
        description:
          "We begin our approach into the wilderness with a 2.5-hour (10km) trek. The path leads through terraced fields of corn and turnips before entering rugged mountain scenery. After crossing the Charakusa River via a wooden cantilever bridge, we reach the idyllic, tree-shaded campsite at Saicho, situated at the junction of the Charakusa and Gondogoro valleys. Altitude: 3,348m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Spangsar",
        description:
          "A 5-6 hour trek heading east into the ablation valley of the Sarak Tsa Glacier. Along the route, we witness the spires of K7 and Link Sar. We cross the Chogolisa Glacier to reach the verdant, flowery pastures of Spangsar (4,000m), set against the backdrop of granite slabs and Namika Peak. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to K6/K7 Base Camp",
        description:
          "Moving into higher terrain, we navigate the difficult ablation valley north of the Tsarak Tsa Glacier. The trek involves steady movement over uneven terrain and slippery rocks. Upon reaching the base camp, we focus on hydration and acclimatization while surrounded by the region's most iconic summits. Altitude: 4,600m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08-09",
        title: "Rest and Exploration at Base Camp",
        description:
          "Two days dedicated to exploring the breathtaking surroundings of the Charkusa Valley. These days allow for acclimatization and leisurely excursions to various vantage points for panoramic views of K6 and K7. It is an ideal time for photography and observing the local alpine flora and fauna. Altitude: 4,600m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Return Trek to Saicho",
        description:
          "We begin our descent back toward civilization. The trek becomes significantly easier as we move from rocky heights to the lush landscapes of the Hushe Valley. We pass the Gondogoro Glacier and navigate through valleys of wild rhubarb to return to the sandy, forested camp at Saicho. Altitude: 3,350m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Trek to Hushe and Drive to Skardu",
        description:
          "A 3-4 hour final trek brings us back to Hushe village. After exploring the village and interacting with locals, we depart via jeep for Skardu. The journey includes crossing a suspension bridge over the Shyok River near Khaplu. Arriving in Skardu, you can finally enjoy a hot shower and a celebratory meal. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Contingency and Rest in Skardu",
        description:
          "A buffer day reserved for any potential delays encountered during the trek. This ensures you do not miss your return travel arrangements. Please note that additional hotel and meal expenses in Skardu on this day are the responsibility of the guest. Altitude: 2,400m. Accommodation: Hotel. Meals: Breakfast (Hotel).",
      },
      {
        day: "Day 13",
        title: "Return Flight to Islamabad",
        description:
          "Board the domestic flight from Skardu to Islamabad. Upon arrival, transfer to your hotel for a day of relaxation. In the event of a flight cancellation, we will undertake a 10-hour drive to Chilas for an overnight stay. Altitude: 590m. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 14",
        title: "Flight Contingency Day",
        description:
          "A secondary buffer day for flight cancellations. If we drove to Chilas the previous day, we will complete the final 10-hour leg to Islamabad today. If the flight was successful, this is a free day for sightseeing or shopping in the capital. Altitude: 538m. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 15",
        title: "International Departure",
        description:
          "Our staff will transfer you to Islamabad International Airport according to your flight schedule. Check-out time is 12:00 PM. We wish you a safe journey home. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Spectacular views of K6 (7,281m) and K7 (6,934m)",
      "Trek through the remote Charakusa Valley",
      "Charakusa Glacier exploration",
      "Starting point at the traditional village of Hushe",
      "Remote alpine wilderness and dramatic Karakoram scenery",
      "Cultural experience in Balti mountain villages",
    ],
  },

  {
    id: "machulo-la-k2-view-trek",
    slug: "machulo-la-k2-view-trek",
    name: "Machulo La K2 View Trek",
    altitude: "4,900m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: MachuloLaImg1,
    gallery: [MachuloLaImg1],
    description:
      "The Machulo La Trek is a scenic high mountain pass trek in Baltistan, offering trekkers breathtaking views of K2 and surrounding Karakoram peaks.",
    overview:
      "The Machulo La Trek takes trekkers deep into the rugged landscapes of the Karakoram Mountains, combining cultural exploration with spectacular high-altitude scenery. The trail passes through remote villages, alpine meadows, and rocky mountain terrain before ascending to Machulo La Pass, a renowned viewpoint for K2 and neighboring peaks. Although relatively short in duration, the trek involves steep ascents and high-altitude conditions, making it an ideal choice for trekkers seeking a challenging yet accessible K2 viewpoint adventure without extended glacier travel.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, our guides will meet you at the international arrivals gate (look for the orange placard with your name) and transfer you to the group hotel. The day is reserved for rest and recovery. A group briefing and orientation session will be held at 6:00 PM, followed by a welcome dinner. Altitude: 540m. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu",
        description:
          "This morning, we take a spectacular 45-minute flight from Islamabad to Skardu. Weather permitting, the flight offers extraordinary views of Nanga Parbat and the Karakoram peaks. Upon arrival, the rest of the day is free for you to acclimatize and enjoy the local atmosphere. Altitude: 2,498m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Exploration and Preparation in Skardu",
        description:
          "After breakfast, we hike to the historic Kharpocho Fort, perched on a mountain overlooking the Indus River and Skardu town. You may also choose to visit the serene Satpara Lake or explore the Skardu Bazaar. During this time, our staff will finalize the necessary government permits and documentation for the trek. Altitude: 2,498m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Machulo via Khaplu",
        description:
          "We depart Skardu for the Hushe Valley. En route, we visit Saling Spangtoq and the historic town of Khaplu. We continue to Machulo, a beautiful village in the Ghanche district surrounded by 6,000-meter peaks. The valley offers views of Laila Peak, K6, K7, and Masherbrum. Accommodation: Hotel/Guest House. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Camp I (Khadi Broq)",
        description:
          "The trekking begins with a manageable 3-hour ascent following the Machulo main stream. We reach our first campsite, Khadi Broq, located at 3,800m. This gradual climb allows for proper acclimatization. We establish our camp here with full support from our guide and kitchen staff. Altitude: 3,800m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Camp II (Qouli Brangsa)",
        description:
          "Today’s trek is a gentle ascent toward our second camp. The trail leads us near the summer settlements of the Machulo people, where you can witness local life and traditional butter and cheese making. You will see cattle, sheep, and Zomo (a cross between a cow and a yak). Altitude: 4,150m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Machulo La K2 Viewpoint",
        description:
          "A steep but rewarding hike leads to the Machulo La viewpoint. From this high-altitude vantage point, you are treated to a 360-degree sweep of the Karakoram. The view includes K2, Broad Peak, Gasherbrum I, II, and IV, Masherbrum, and Nanga Parbat. You can also see the Siachen Glacier, Chorbat Valley, and the Indus and Shyok rivers. Altitude: 5,200m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek back to Machulo",
        description:
          "We begin our descent from the K2 viewpoint, trekking back down through the pastures and fields to reach Machulo village. The descent takes approximately 6 hours, allowing for a final look at the surrounding peaks. Accommodation: Hotel/Guest House. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Return to Skardu via Khaplu and Shigar",
        description:
          "We travel back to Skardu by road. The return journey includes cultural stops at the iconic Khaplu Fort and Shigar Fort. We also visit the turquoise Upper Kachura Lake before checking into our hotel in Skardu for the night. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Return Flight to Islamabad",
        description:
          "We take the domestic flight from Skardu back to the capital. Upon arrival in Islamabad, you will be transferred to your hotel for a well-earned rest. In case of flight cancellation due to weather, we will travel overland to Chilas (8-10 hours). Altitude: 538m. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 11",
        title: "Contingency Day",
        description:
          "A buffer day to protect against travel delays. If we traveled to Chilas the previous day, we will complete the drive to Islamabad today. If the flight was successful, this is a free day for sightseeing or shopping in Islamabad. Accommodation: Hotel. Meals: Breakfast, Dinner.",
      },
      {
        day: "Day 12",
        title: "Departure",
        description:
          "Following breakfast, our staff will provide a timely transfer to Islamabad International Airport for your flight back home. Standard hotel check-out is at 12:00 PM. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "K2 viewpoint from Machulo La Pass",
      "Panoramic views of Karakoram giants including K2",
      "High mountain pass crossing",
      "Remote alpine scenery and dramatic landscapes",
      "Traditional villages and culture of Baltistan",
      "Short but rewarding high-altitude trek",
    ],
  },

  {
    id: "iqbal-top-k2-view-trek",
    slug: "iqbal-top-k2-view-trek",
    name: "Iqbal Top K2 View Trek",
    altitude: "5,100m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 2000,
    groupSize: "4-10 trekkers",
    image: IqbalTopImg1,
    gallery: [IqbalTopImg1],
    description:
      "The Iqbal Top Trek is a high-altitude K2 viewpoint trek in the Karakoram, offering spectacular panoramic views of K2 and neighboring peaks from a remote vantage point.",
    overview:
      "Discovered in 1998 by Iqbal Qadri, the Iqbal Top Trek is one of the most exclusive and lesser-known K2 viewpoint treks in the Karakoram Mountains. The route ascends through rugged alpine terrain to reach Iqbal Top, a high viewpoint overlooking K2 and surrounding Karakoram giants. Although shorter in duration compared to longer glacier treks, the ascent is steep and physically demanding due to altitude and terrain. This trek is ideal for experienced trekkers seeking a unique K2 viewing experience without extended glacier travel or technical mountaineering.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, our guides will greet you and transfer you to the group hotel. The day is dedicated to rest and recovery from your journey. A briefing and orientation session will be held at 6:00 PM, followed by a welcome dinner. Altitude: 540m. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Fly to Skardu or Drive to Chilas",
        description:
          "Take a morning flight to Skardu, offering views of Nanga Parbat. In the event of a flight cancellation, we will undertake a 13-14 hour (480 km) drive via the Karakoram Highway to Chilas, crossing the high-altitude Babusar Pass (4,173m). Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing Day",
        description:
          "A day for exploration and acclimatization in Skardu. Visit the mountaintop Kharpocho Fort for stunning views of the Indus River and Skardu town. Optional excursions to Satpara Lake and the Skardu Bazaar are also available while we finalize trek documentation. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Kanday Village",
        description:
          "Travel by jeep along the Indus and Shyok rivers to Kanday village (2,900m). The journey passes through diverse communities, each with a unique culture, and follows a route punctuated by glacial meltwater streams and mountain springs. Accommodation: Hotel/Guest House. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Khotid",
        description:
          "The trek begins with an hour-long walk along an agricultural water canal. We pass through Daltit, an ancient settlement, and cross a walking bridge near the Khotid valley. The day concludes with an overnight stay in tents at our first high-altitude camp. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Bondit Base Camp",
        description:
          "Ascend toward Bondit Base Camp, beginning with a 45-minute climb to Lawab. From here, enjoy views of Bondit Peak and the surrounding glacial terrain. The trail continues alongside a melting river to the base camp, located near traditional summer cabins used by local herders. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Iqbal Top",
        description:
          "The journey reaches its primary objective today as we trek from Bondit Base Camp to Iqbal Top. This vantage point offers one of the most spectacular panoramas of the Karakoram giants, including K2. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek back to Laa Valley",
        description:
          "Begin the return journey by trekking from the heights of Iqbal Top down into the Laa Valley. This descent allows for a more relaxed pace to appreciate the surrounding mountain scenery. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Trek to Kanday and Drive to Skardu",
        description:
          "Complete the final trekking leg back to Kanday village. After a brief rest, we transfer to jeeps for the drive back to Skardu town. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Drive from Skardu to Chilas",
        description:
          "Begin the overland return journey by driving from Skardu to Chilas along the Indus River. This route offers a final look at the rugged landscapes of the Karakoram Highway. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Drive from Chilas to Islamabad",
        description:
          "Complete the final overland leg as we drive from Chilas back to the capital city of Islamabad. Upon arrival, check into the hotel for a well-earned rest and final group dinner. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "International Departure",
        description:
          "Our staff will provide timely transfers to Islamabad International Airport for your respective departure flights. Standard hotel check-out time is 12:00 PM. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "K2 viewpoint from Iqbal Top",
      "Panoramic views of K2 and surrounding Karakoram giants",
      "Remote and less-visited K2 viewpoint trek",
      "High-altitude trekking without technical climbing",
      "Dramatic alpine terrain and mountain scenery",
      "Short but challenging trek for experienced trekkers",
    ],
  },

  {
    id: "shimshal-pass-trek",
    slug: "shimshal-pass-trek",
    name: "Shimshal Pass Trek",
    altitude: "4,720m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "15-20 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 1700,
    groupSize: "4-8 trekkers",
    image: ShimshalPassImg1,
    gallery: [ShimshalPassImg1, ShimshalPassImg2, ShimshalPassImg3],
    description:
      "The Shimshal Pass Trek is a remote high-altitude adventure through the isolated Shimshal Valley, leading to the historic Shimshal Pass on the border between Pakistan and China.",
    overview:
      "Located in the far reaches of Gilgit-Baltistan, the Shimshal Pass Trek offers trekkers a rare combination of cultural immersion and dramatic Karakoram scenery. The route travels through the rugged Shimshal Valley, home to the resilient Shimshali people, whose traditional lifestyle and hospitality are central to the trekking experience. Ascending to Shimshal Pass at approximately 4,720m, trekkers are rewarded with breathtaking views of K2 (8,611m) and numerous other iconic Karakoram peaks. With its remote setting, vast landscapes, and minimal outside influence, the Shimshal Pass Trek is considered one of the most authentic and rewarding wilderness treks in the Karakoram.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, our representative will meet you and provide a private transfer to your hotel. The day is reserved for rest and recuperation from your international journey. In the evening, the group will gather for a comprehensive briefing on the Shimshal Pass Trek. Depending on arrival times, optional sightseeing in the capital city, established in 1961, may be available. Altitude: 540m. Accommodation: Hotel. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Drive to Naran",
        description:
          "After breakfast, we depart the capital and journey north toward Naran. The route traverses the historical towns of Taxila, Hassan Abdal, and Abbottabad. We join the Karakoram Highway (KKH) at Hassan Abdal and follow it to Mansehra before turning toward the lush Naran Valley. Naran offers a significantly cooler climate and alpine scenery. Distance: 231km. Duration: 8 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Drive to Karimabad",
        description:
          "We continue our epic journey along Naran Road to rejoin the famous Karakoram Highway, a feat of engineering completed in 1973. The drive offers spectacular vistas as we cross the Babusar Pass and pass the unique junction where the Karakoram, Himalaya, and Hindukush ranges meet. We will enjoy views of Nanga Parbat and Rakaposhi (7,788m) while following the Hunza River to Karimabad. Distance: 320km. Duration: 7 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Sightseeing in Karimabad",
        description:
          "A full day is dedicated to exploring Karimabad, the historic capital of the Hunza Valley, situated beneath Ultar Peak (7,833m). Highlights include visits to the local bazaar and the UNESCO-listed Baltit and Altit Forts, which date back over 700 years. The evening features a trip to Eagle’s Nest for a panoramic sunset view over the Hunza Valley and Rakaposhi. Altitude: 2,440m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Drive to Shimshal Village",
        description:
          "We rejoin the KKH, passing Attabad Lake and Gulmit, before turning onto the dramatic Shimshal Road. Upon arrival in Shimshal village around lunchtime, the afternoon is free to engage with the local Wakhi community and observe their traditional way of life. Shimshal is a historic settlement with a population of approximately 1,100 people. Distance: 120km. Duration: 3-4 hours. Altitude: 3,100m. Accommodation: Guest House/Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Past Furzeen",
        description:
          "The trekking phase commences today. The initial day is often the most demanding as your body adjusts to the high-altitude environment. We cross two bridges to reach Garsar for lunch, followed by a steady ascent to the Past Furzeen campsite. Duration: 6-7 hours. Altitude: 3,360m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Arbob Peryeen",
        description:
          "We continue toward Arbob Peryeen, often passing local Shimshali residents moving between the village and the high pastures. The route involves steep sections and a crossing of the Chichan Bridge. Throughout the day, we are treated to magnificent views of Manglik Sar (6,050m) and Chashkin (6,000m). Duration: 6 hours. Altitude: 3,930m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek to Shuijarab",
        description:
          "This is a scenic and relatively easy trekking day leading to the summer herd settlements at Shuijarab. These green meadows are maintained by Shimshali women who spend the summer months here tending to Yaks, goats, and sheep. This offers a rare, authentic look at the region’s pastoral traditions and renowned hospitality. Duration: 6 hours. Altitude: 4,450m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Acclimatization at Shuijarab",
        description:
          "A rest day to facilitate acclimatization and fully immerse in the local culture. Early risers can witness the morning activity of the herds leaving for pasture. Spend time with the Shimshali shepherds to learn about their daily routines in these high-altitude summer grazing grounds. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek to Shimshal Pass",
        description:
          "We ascend to the Shimshal Pass. While the first few hours are challenging, the reward is a lush green meadow and the crystal-clear turquoise lakes of the pass. We establish our camp on the banks of the lake with views of Manglik Sar. If visiting in late July or early August, you may witness the ancient Yak racing festival. Duration: 5 hours. Altitude: 4,750m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Optional Climb: Manglik Sar (6,050m)",
        description:
          "An optional summit day for those seeking a challenge. Manglik Sar is a non-technical peak, but requires high physical fitness for the 10-12 hour return journey (1,500m ascent/descent). Crampons and an ice axe may be required. The summit offers views of K2 and the Muztagh Range. Non-climbers may enjoy a relaxing day exploring the beauty of the pass. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Return Trek to Shuijarab",
        description:
          "After breaking camp at the Shimshal Pass, we begin our descent back to the Shuijarab meadows. This return leg allows for further appreciation of the high-altitude flora and mountain vistas. Duration: 5 hours. Altitude: 4,450m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Return Trek to Arbob Peryeen",
        description:
          "We retrace our steps back to Arbob Peryeen, enjoying a familiar yet different perspective of the surrounding glaciers and the Karakoram peaks. Duration: 6 hours. Altitude: 3,930m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "Return Trek to Past Furzeen",
        description:
          "Continue the descent toward Past Furzeen. This marks our final night camping under the spectacular stars of the Karakoram. Duration: 5 hours. Altitude: 3,360m. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 15",
        title: "Trek to Shimshal Village",
        description:
          "Our final walking day follows the Shimshal River back into the village, arriving by early afternoon. This is a final opportunity to explore the historical settlement and visit with the local community after the successful completion of the trek. Duration: 4 hours. Altitude: 3,100m. Accommodation: Guest House/Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 16",
        title: "Drive to Karimabad",
        description:
          "After bidding farewell to our porters, we drive back to the KKH and follow the Hunza River to Karimabad. We travel through the Attabad tunnels, bypassing the lake formed by the 2010 landslide. The afternoon is free for shopping for handmade souvenirs or relaxing in Karimabad. Distance: 120km. Duration: 4 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 17",
        title: "Drive to Naran",
        description:
          "We head south on the KKH, passing the Rakaposhi viewpoint and the junction of the three great mountain ranges. We depart the KKH near Chilas to cross the Babusar Pass once more, arriving in the alpine surroundings of Naran for the night. Distance: 320km. Duration: 6 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Drive to Islamabad",
        description:
          "Our journey continues through the Naran Valley to Mansehra, where we rejoin the KKH. We pass through Abbottabad, known for its military academy and prestigious schools, and reach Hassan Abdal before the final stretch to Islamabad. Distance: 231km. Duration: 8 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "International Departure",
        description:
          "We provide a final transfer to Islamabad International Airport for your return flight home. End of services. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Remote and isolated Shimshal Valley",
      "Shimshal Pass on the Pakistan–China border",
      "Panoramic views of K2 and major Karakoram peaks",
      "Traditional lifestyle and hospitality of the Shimshali people",
      "Spectacular high-altitude alpine scenery",
      "One of the most remote and culturally rich treks in the Karakoram",
    ],
  },

  {
    id: "naltar-pass-trek",
    slug: "naltar-pass-trek",
    name: "Naltar Pass Trek",
    altitude: "4,600m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "15-20 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 1700,
    groupSize: "4-8 trekkers",
    image: NalterPassImg1,
    gallery: [NalterPassImg1],
    description:
      "The Naltar Pass Trek is a scenic high-altitude journey linking the beautiful Naltar Valley with Ishkoman, offering breathtaking views of the Hindukush range and surprisingly lush alpine landscapes.",
    overview:
      "Reaching an altitude of approximately 4,600m, the Naltar–Ishkoman Pass Trek showcases a unique side of northern Pakistan, where green valleys and dense forests contrast sharply with high mountain terrain. Beginning in the famous Naltar Valley—known for its greenery and winter skiing—the route ascends through flowery meadows and wooded slopes before crossing the Naltar Pass. From the top, trekkers enjoy sweeping views of the Hindukush range before descending into the remote Ishkoman Valley. With its moderate difficulty, rich vegetation, and scenic diversity, the Naltar Pass Trek is ideal for trekkers seeking a rewarding high-altitude experience without extreme remoteness or technical difficulty.",
    timeline: [
      {
        day: "Day 01",
        title: "Islamabad and Rawalpindi Exploration",
        description:
          "Welcome to Islamabad. Upon arrival at the airport, you will be transferred to your hotel for check-in. In the afternoon, enjoy a guided tour of the twin cities, visiting the iconic Faisal Mosque, Shakar Parian, the Pakistan Monument, and Daman-e-Koh. We will also explore the Lok Virsa Museum and the vibrant heritage of Rawalpindi’s Old Bazaar and Raja Bazaar. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Islamabad to Chilas via Babusar Pass",
        description:
          "We begin our journey north with a 279 km drive to Naran. After lunch, we continue for 113 km to Chilas via the spectacular Babusar Pass. At 4,173m, this pass is the highest point in the Kaghan Valley and serves as a vital link to the Karakoram Highway. The route is world-renowned for its dramatic hairpin turns and alpine vistas. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Drive to Gilgit and Naltar Lake",
        description:
          "A 134 km drive takes us to Gilgit for lunch. From there, we proceed on a 2-hour journey (65 km) into the heart of the mountains to reach the turquoise Naltar Lake. We establish our first camp here amidst the serene alpine scenery. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Trek to Lower Shani",
        description:
          "Our trekking expedition officially begins today with a 3-4 hour hike (9.5 km) to Lower Shani. The trail involves a gradual ascent of 420m, providing an excellent opportunity to find your trekking rhythm and begin acclimatizing to the higher elevation. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Pakora High Camp",
        description:
          "Today is a shorter but more focused ascent as we trek to Pakora High Camp. The 4.4 km journey takes approximately 2-3 hours, involving a 540m climb. This position places us in the ideal location for the following day’s pass crossing. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Jut via the Pass",
        description:
          "This is a significant day of trekking, lasting 6-8 hours and covering 12.1 km. We ascend 480m to navigate the high terrain before beginning a long 1,320m descent to the campsite at Jut (also known as Uts). The views throughout this traverse are among the most striking in the region. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Pakora",
        description:
          "We continue our descent with a 3-4 hour trek (9.5 km) toward the settlement of Pakora. The trail loses 117m in altitude, making for a relatively relaxing day as we move into lower, more inhabited valley sections. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek to Asumbar",
        description:
          "A 3-4 hour trek brings us to Asumbar. The route is culturally enriching as we pass through the small, traditional settlements of Asumbar village, offering a glimpse into the local mountain lifestyle. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Trek to Lower Charinj",
        description:
          "Moving deeper into the valley system, we trek for 4-6 hours (8.4 km) to reach Lower Charinj. The path involves a gentle 270m ascent through rugged terrain. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek to Upper Borta Bort",
        description:
          "Today's trek is an 8 km journey taking 3-4 hours. We gain a significant 810m in altitude as we move up to the high pastures of Upper Borta Bort. This elevation gain is rewarded with expansive views of the surrounding peaks. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Trek to Mayur",
        description:
          "A demanding 5-6 hour trek (10.6 km) across varied terrain. We ascend 570m before a steep 930m descent leads us to the Mayur campsite. The landscape here is characterized by dramatic shifts in geography. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Trek to Dal Sandhi",
        description:
          "Continuing our descent, we trek for 5-6 hours over a distance of 17.7 km to reach Dal Sandhi. This day is focused on following the valley floor, losing another 930m in altitude. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Trek to Darkot",
        description:
          "Today involves a 3-4 hour combination of trekking and driving as we move toward the historic village of Darkot. This area is a significant gateway within the Hindu Raj range. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "Trek to Boimoshani",
        description:
          "We begin a fresh ascent today, trekking 9.6 km over 5-6 hours to Boimoshani. This leg involves a challenging 1,200m climb into a high-alpine environment. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 15",
        title: "Trek to Galtir",
        description:
          "We trek 8.5 km (5-6 hours) to reach Galtir. This area is known for its summer settlements, where local herders graze their livestock in the high pastures during the warmer months. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 16",
        title: "Trek to Handis",
        description:
          "We begin our final major descent, trekking for 4-5 hours (8.6 km) down to Handis. The trail drops 940m in altitude, bringing us back toward the greener sections of the lower valley. Accommodation: Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 17",
        title: "Trek to Ghotulti and Return to Gilgit",
        description:
          "The final trekking leg brings us to Ghotulti. From here, we transition to vehicles for the drive back to Gilgit town. After two weeks in the wilderness, you will enjoy the comforts of a hotel stay. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Return to Naran",
        description:
          "We drive 234 km (5-6 hours) back to Naran. After checking into the hotel and refreshing, we will take an evening excursion to the legendary Saif-ul-Maluk Lake, famous for its beauty and local folklore. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "Drive to Islamabad via Taxila",
        description:
          "A 6-7 hour drive (279 km) returns us to Islamabad. En route, we stop to visit the Taxila Museum and its ancient archaeological sites, exploring the rich Gandharan history of the region. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 20",
        title: "Final Departure",
        description:
          "Our staff will transfer you to Islamabad International Airport for your return flight home. End of services. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Naltar–Ishkoman Pass crossing (4,600m)",
      "Panoramic views of the Hindukush mountain range",
      "Lush green valleys and alpine meadows",
      "Dense forests of pine, spruce, birch, and juniper",
      "Contrast between Naltar and Ishkoman landscapes",
      "Scenic and relatively less-traveled mountain route",
    ],
  },

  {
    id: "fairy-meadows-trek",
    slug: "fairy-meadows-trek",
    name: "Fairy Meadows Trek",
    altitude: "3,300m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "8-10 Days",
    difficulty: "Moderate",
    bestSeason: "May - September",
    price: 900,
    groupSize: "4-15 trekkers",
    image: FairyMeadowImg1,
    gallery: [FairyMeadowImg1, FairyMeadowImg2, FairyMeadowImg3],
    description:
      "The Fairy Meadows Trek is a classic Himalayan adventure leading to the famous Fairy Meadows and onward to the base camp of Nanga Parbat, the world’s ninth-highest mountain.",
    overview:
      "Located in the western Himalayas of northern Pakistan, the Fairy Meadows Trek offers one of the most spectacular close-up views of Nanga Parbat’s massive Raikot Face. The journey involves a thrilling jeep ride to Tato village, followed by a scenic hike through pine forests to Fairy Meadows at approximately 3,300m. Many itineraries continue to Nanga Parbat Base Camp, making this trek a complete high-mountain experience. With its lush alpine meadows, dramatic mountain scenery, and relatively moderate difficulty, the Fairy Meadows Trek is ideal for trekkers seeking an unforgettable Himalayan adventure without technical mountaineering.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, usually in the afternoon, our representative will meet you and provide a transfer to your hotel. This first day is dedicated to relaxation and recovery from your international flight. Altitude: 540m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Drive to Chilas via Karakoram Highway",
        description:
          "Today we begin our journey north, driving along the legendary Karakoram Highway. The route takes us through the towns and villages of Abbottabad, Mansehra, Besham, Dasu, and Sazin before arriving in Chilas for the night. Altitude: 1,265m. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Drive to Tatu and Hike to Fairy Meadows",
        description:
          "After breakfast, we head toward the Raikot Bridge where we transfer to 4x4 jeeps for an adventurous drive to Tatu village. From Tatu, we begin a 2-3 hour hike to reach the iconic Fairy Meadows. Once there, you can relax, explore the meadows, or enjoy the hospitality of the local community. Altitude: 3,300m. Accommodation: Camp. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Trek to Beyal Camp",
        description:
          "We continue our trek a few kilometers further to Beyal Camp. This site offers a quieter atmosphere and even more intimate views of the surrounding peaks. The trail gradually transitions from lush alpine forests into a more rugged, impressive landscape characterized by ice blocks and snow. Altitude: 3,500m. Accommodation: Dome Tent (Twin-sharing). Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Nanga Parbat Base Camp Trek",
        description:
          "A hike of several hours brings us to the Nanga Parbat Base Camp. Here, the silence of the high mountains is only broken by the distant thunder of occasional avalanches. We will spend the night at the foot of the 'Himalayan Beast' (8,126m), surrounded by some of the most dramatic mountain scenery on earth. Altitude: 3,850m. Accommodation: Dome Tent (Twin-sharing). Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Return to Fairy Meadows",
        description:
          "We retrace our steps back to Fairy Meadows. The remainder of the day is yours to enjoy at leisure. It is an ideal time for photography, sketching, or simply watching the play of light on Nanga Parbat during sunset and moonrise. Altitude: 3,300m. Accommodation: Camp. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Return to Islamabad via Naran or Besham",
        description:
          "We depart Fairy Meadows and begin our return journey. Depending on weather and road conditions, we will aim to travel via the scenic Naran road and Babusar Pass, allowing for further exploration. Alternatively, we will return via the Karakoram Highway through Besham and the Indus River valley. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Sightseeing in Islamabad and Rawalpindi",
        description:
          "Enjoy a day exploring the distinct personalities of the twin cities. Islamabad offers modern architecture and wide boulevards perfect for sightseeing, while the historic city of Rawalpindi features bustling British-era streets and intricate traditional bazaars. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Final Departure",
        description:
          "Our staff will coordinate your transfer to the airport in time for your return flight home. Standard hotel check-out is 12:00 PM. We hope you leave with unforgettable memories of the killer mountain. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Close-up views of Nanga Parbat (8,126m)",
      "Fairy Meadows – one of the most scenic alpine meadows in Pakistan",
      "Trek to Nanga Parbat Base Camp",
      "Dense pine forests and alpine landscapes",
      "Ideal trek for photography and nature lovers",
      "Accessible and rewarding Himalayan adventure",
    ],
  },

  {
    id: "around-nanga-parbat-trek",
    slug: "around-nanga-parbat-trek",
    name: "Around Nanga Parbat Trek",
    altitude: "5,300m",
    location: "Gilgit Baltistan, Pakistan",
    duration: "14-16 Days",
    difficulty: "Very Difficult",
    bestSeason: "June - August",
    price: 1900,
    groupSize: "4-8 trekkers",
    image: AroundNangaParbatImg1,
    gallery: [
      AroundNangaParbatImg1,
      AroundNangaParbatImg2,
      AroundNangaParbatImg3,
    ],
    description:
      "The Around Nanga Parbat Trek is an epic high-altitude circuit that encircles Nanga Parbat, offering rare access to all three of its legendary faces and the remote valleys that surround the mountain.",
    overview:
      "Located in Gilgit-Baltistan in the western Himalayas, the Around Nanga Parbat Trek is one of Pakistan’s most demanding and rewarding long-distance treks. The route circles the massive bulk of Nanga Parbat (8,126m), revealing dramatically different landscapes in the Diamir, Rupal, and Raikot valleys. Trekkers traverse high alpine meadows, rugged moraines, glaciers, and challenging mountain passes—most notably the Mazeno Pass—while following sections of the Indus River along the mountain’s base. Known as the ‘Killer Mountain,’ Nanga Parbat dominates the trek with its immense scale and raw beauty. This trek is suitable only for experienced high-altitude trekkers seeking a true expedition-style Himalayan adventure.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Islamabad, the primary gateway to the Karakoram and Himalayan ranges. Upon your morning arrival at Islamabad International Airport, our representative will meet you and provide a transfer to the group hotel. The remainder of the day is at your leisure to recover from your journey. In the evening, we will convene for a comprehensive group briefing regarding the Around Nanga Parbat Trek. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 02",
        title: "Drive to Chilas or Naran",
        description:
          "We depart the capital city today for an epic journey north along the famous Karakoram Highway. The route traverses lush green valleys and traditional towns as we head toward Chilas. Known as the gateway to Nanga Parbat and Fairy Meadows, Chilas will be our stopping point for the night. Distance: 461km. Duration: 8-9 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Drive to Tarishing via Astore",
        description:
          "Our journey continues toward the Rupal side of the mountain. We drive for approximately 6 hours, passing through the Astore Valley to reach the village of Tarishing (2,911m). This picturesque village serves as the starting point for our trek on the southern face of Nanga Parbat. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Trek to Herrligkoffer Base Camp",
        description:
          "The trekking phase begins with a 6-hour walk toward Herrligkoffer Base Camp. This site is named after the famous German physician and expedition leader who organized numerous attempts on Nanga Parbat. We set up camp in view of the mountain's massive Rupal Face. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Latobah",
        description:
          "A 5-hour walk takes us further along the base of the mountain to Latobah. This section of the trek offers a close-up perspective of the world's highest wall, the Rupal Face, which rises over 4,000 meters from its base. Altitude: 3,530m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Local Exploration Day",
        description:
          "A free day dedicated to local exploration and acclimatization. This is an ideal time to soak in the monumental scale of the Rupal Face and explore the surrounding alpine environment at a relaxed pace. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07",
        title: "Trek to Mazeno Base Camp",
        description:
          "We begin our approach to the high pass, trekking for 6 hours to reach Mazeno Base Camp. The terrain becomes more rugged as we gain altitude in preparation for the crossing. Altitude: 4,050m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 08",
        title: "Trek to Mazeno High Camp",
        description:
          "A 5-hour ascent brings us to Mazeno High Camp. This camp is strategically positioned for the final push over the pass the following morning. Proper hydration and rest are vital at this elevation. Altitude: 4,700m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 09",
        title: "Cross Mazeno Pass to Upper Loiba",
        description:
          "Today is the most challenging leg of the trek. A 7-hour journey takes us over the Mazeno Pass (5,399m), the highest point of our journey. From the pass, we descend into the Loiba Valley on the Diamer side of the mountain. Altitude: 5,399m (Pass). Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 10",
        title: "Trek to Airi Goah",
        description:
          "We continue our descent through the alpine meadows of the Diamer side, trekking for 5 hours to reach the pastures of Airi Goah. Altitude: 3,200m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 11",
        title: "Trek to Zangot",
        description:
          "A 4-hour hike leads us further down into the valley toward Zangot. The scenery changes as we move into more vegetated areas, transitioning away from the high-altitude glaciers. Altitude: 2,800m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 12",
        title: "Trek to Kutagali",
        description:
          "We head toward the base camp of the Diamer Face, trekking for 4 hours to reach Kutagali. This location offers a different perspective of Nanga Parbat, showcasing the face where most successful climbs take place. Altitude: 3,100m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 13",
        title: "Trek to Nanga Parbat Diamer Base Camp",
        description:
          "We move into the heart of the Diamer side, trekking to the base camp used by international expeditions. This historic site is where much of the mountain's climbing history has been written. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 14",
        title: "Rest Day at Diamer Base Camp",
        description:
          "A well-deserved free day at the Diamer Base Camp. This is a fantastic opportunity to explore the surrounding glaciers or simply relax and take in the sheer verticality of the mountain's western face. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 15",
        title: "Trek back to Kutagali",
        description:
          "We begin the transition toward the northern side of the mountain, trekking back down from the base camp to our previous campsite at Kutagali. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 16",
        title: "Trek to Shaichi",
        description:
          "Moving across the foothills, we trek toward Shaichi. This leg of the journey offers unique views as we navigate between the different faces of the mountain. Altitude: 4,400m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 17",
        title: "Trek to Gutum Sagar",
        description:
          "A 5-hour walk brings us to Gutum Sagar. The trail provides excellent vantage points for photography and a chance to observe the local alpine flora. Altitude: 3,500m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 18",
        title: "Trek to Jalipur High Camp",
        description:
          "We ascend once more to reach Jalipur High Camp. This 5-hour trek places us in a high-altitude environment overlooking the northern valleys. Altitude: 4,400m. Accommodation: Full-service Camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 19",
        title: "Trek to Beyal Camp",
        description:
          "A 3-hour trek leads us into the lush forest zone of the Raikot side. We arrive at Beyal Camp, a serene location set amidst alpine trees with direct views of the Raikot Face. Altitude: 3,500m. Accommodation: Huts/Cabins. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 20",
        title: "Nanga Parbat Base Camp and Fairy Meadows",
        description:
          "We trek to the Raikot Base Camp of Nanga Parbat, where the alpine forest gives way to an arid landscape of snow and ice. After enjoying lunch with spectacular views, we hike back to the world-famous Fairy Meadows. Spend the evening capturing photos of the 'Killer Mountain' during sunset. Accommodation: Huts/Cabins. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 21",
        title: "Fairy Meadows to Naran",
        description:
          "We depart Fairy Meadows and travel back to Raikot Bridge. From there, we join the Karakoram Highway briefly before turning onto Naran Road. We cross the high Babusar Pass to arrive in the popular alpine town of Naran. Duration: 6 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 22",
        title: "Naran to Islamabad via Taxila",
        description:
          "Our final drive takes us through the Naran Valley toward Islamabad. En route, we pass through Abbottabad and visit Taxila, a UNESCO World Heritage site and a center of ancient Gandharan civilization dating back to 1000 BCE. Distance: 231km. Duration: 9 hours. Accommodation: Hotel. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 23",
        title: "International Departure",
        description:
          "We provide a private transfer to Islamabad International Airport for your return flight home. Your circuit of Nanga Parbat concludes here. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Complete circuit of Nanga Parbat (8,126m)",
      "Views of the Diamir, Rupal, and Raikot faces",
      "Crossing high mountain passes including Mazeno Pass",
      "Remote Himalayan valleys and high alpine meadows",
      "Glacier travel and dramatic mountain scenery",
      "One of the most challenging trekking routes in Pakistan",
    ],
  },
];

export function getTrekkingBySlug(slug: string): TrekkingData | undefined {
  return trekkings.find((trek) => trek.slug === slug);
}

export function getTrekkingById(id: string): TrekkingData | undefined {
  return trekkings.find((trek) => trek.id === id);
}
