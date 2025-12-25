import {
  COMMON_SERVICES_INCLUDED,
  COMMON_SERVICES_NOT_INCLUDED,
  COMMON_SERVICES_REQUIREMENTS,
} from "@/constants/expeditionData";
import nangaParbatImage1 from "@assets/nanga_parbat_1_1766090260999.png";
import nangaParbatImage2 from "@assets/nanga_perbat_2_1766090261000.png";
import heroImage2 from "@assets/stock_images/majestic_mountain_pe_34e27685.jpg";
import heroImage1 from "@assets/stock_images/majestic_mountain_pe_743f6593.jpg";
import expeditionImage1 from "@assets/stock_images/mountain_expedition__228548ef.jpg";
import expeditionImage3 from "@assets/stock_images/mountain_expedition__494acab3.jpg";

export interface RockClimbingTimeline {
  day: string;
  title: string;
  description: string;
}

export interface RockClimbingData {
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
  timeline: RockClimbingTimeline[];
  servicesIncluded: string[];
  servicesNotIncluded: string[];
  requirements: string[];
  highlights: string[];
}

export const rockClimbings: RockClimbingData[] = [
  {
    id: "trango-tower",
    slug: "trango-tower",
    name: "Trango Tower Climbing",
    altitude: "6,286m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "35-40 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 22000,
    groupSize: "2-6 climbers",
    image: heroImage1,
    description:
      "Trango Tower is one of the most challenging and iconic rock climbing destinations in the world, featuring pristine granite walls.",
    overview:
      "The Trango Tower Climbing expedition offers world-class rock climbing on one of the most magnificent granite towers. This advanced technical climb requires serious mountaineering and rock climbing expertise.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Most international flights arrive at Islamabad International Airport in the morning. Your guide will meet and greet you upon arrival and provide a transfer to our group hotel. The remainder of the day is yours to rest and recover from your journey. Once all participants have arrived, we will convene for a comprehensive briefing regarding the Trango Tower Rock Climbing expedition. Depending on the schedule, there may be an option for afternoon sightseeing in Islamabad, the nation's purpose-built capital. Accommodation: Hill View Hotel or equivalent. Meals: Dinner.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu (2,230m)",
        description:
          "We transfer to Islamabad Airport for a spectacular 45-minute flight across the Himalayas and Karakoram ranges to Skardu. This flight offers breathtaking views of Nanga Parbat (8,126m), and on clear days, K2 and Gondogoro Pass. After checking into the hotel, we will visit the local bazaar, historical forts, and the 8th-century Manthal Buddha Rock, a significant trace of Buddhist influence in the region. Note: If the flight is cancelled due to weather, we will begin an 8-9 hour drive to Chilas (461km) via the Karakoram Highway. Accommodation: Summit Hotel or equivalent. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 03",
        title: "Sightseeing and Expedition Preparation",
        description:
          "The morning features a walk to the remains of the early 18th-century Kharpocho Fort, offering panoramic views of the Indus River and Skardu town. We will also visit the nearby Organic Village to see traditional sustainable farming. The afternoon is free for final gear preparations or an optional jeep tour to Satpara Lake. Accommodation: Summit Hotel or equivalent. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 04",
        title: "Drive to Jhola via Askole (3,100m)",
        description:
          "We drive along the Indus, Shigar, and Braldu Rivers to Askole, the final settlement before entering the high wilderness. After meeting our porters in this hardy Balti village, we continue toward Jhola camp. The route reveals the Biafo Glacier and the impressive needles of Paiju Peak in the distance. We reach the green oasis of Korofong before arriving at Jhola for our first night of camping. Duration: 8 hours drive. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 05",
        title: "Trek to Paiju (3,380m)",
        description:
          "Our first day of trekking begins as we follow the river toward Paiju. The path offers excellent views of the massive Paiju Peak (6,611m). We will negotiate several glacial streams today, making sports sandals useful. Our camp at Paiju serves as a green oasis under the shadow of the peaks and offers the first immense views of the Baltoro Glacier and the granite spires of the Trango group. Duration: 6 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 06",
        title: "Trek to Trango Tower Base Camp (4,900m)",
        description:
          "We ascend onto the debris-covered Baltoro Glacier, navigating the undulating moraine of this great ice giant. At the snout of the glacier, the trail divides; we take the left branch to reach the Trango Tower Base Camp. The journey provides a sensational mountain panorama including Uli Biaho Tower and Gasherbrum IV. We establish our camp at the foot of the Great Trango Tower, surrounded by the world's most striking rock towers. Duration: 8 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 07 - 32",
        title: "Acclimatization and Climbing Period",
        description:
          "This period is dedicated to the non-guided climbing of Trango Tower. Our professional staff will remain at the Base Camp throughout this duration to provide full logistical support and assistance to the climbers. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 33",
        title: "Return Trek to Paiju (3,380m)",
        description:
          "Following the climbing period, we begin our return journey. We trek back across the Baltoro Glacier, detouring around the Liligo Glacier to navigate its shifting ice. We pass the roaring cascade where the Braldu River erupts from the glacier's snout and finish with an easy walk back to the warmth and greenery of the Paiju oasis. Duration: 6 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 34",
        title: "Return Trek to Jhola (3,170m)",
        description:
          "Our final walking day takes us back down the valley. As the elevation drops, the temperature rises, so we make an early start. We follow the Braldu River downstream to its confluence with the Panma River. In the evening, we celebrate the success of the expedition with our porters at the Jhola camp, often sharing tips and equipment as tokens of appreciation. Duration: 7 hours walk. Accommodation: Full-service camping. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 35",
        title: "Drive to Skardu via Shigar Valley",
        description:
          "We rejoin our vehicles at Jhola and drive back toward civilization. The route passes through Korofon and the 'King’s Polo Ground' before descending into the fertile Shigar Valley. We cross the Braldu on a suspension bridge and navigate the gorge road to meet the Indus River. Upon arriving in Skardu, we enjoy a welcome shower and the comfort of a real bed. Duration: 8 hours drive. Accommodation: Summit Hotel or equivalent. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 36",
        title: "Return Flight to Islamabad",
        description:
          "We take the flight from Skardu to Islamabad, once again passing the majestic Nanga Parbat. Upon arrival in the capital, our private bus will transfer us to the hotel. The afternoon is free for independent sightseeing or shopping for traditional Afghan and Iranian rugs. In the event of a flight cancellation, we will drive the Karakoram Highway to Chilas. Accommodation: Hill View Hotel or equivalent. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 37",
        title: "Contingency and Sightseeing Day",
        description:
          "This is a vital contingency day to allow for the two-day drive from Skardu if flights are grounded. If we have already arrived in Islamabad, the day is dedicated to sightseeing at landmarks like the Faisal Mosque or exploring the city’s markets. We will conclude the evening with a final group celebratory meal. Accommodation: Hill View Hotel or equivalent. Meals: Breakfast, Lunch, Dinner.",
      },
      {
        day: "Day 38",
        title: "Final Departure",
        description:
          "Following breakfast, you will be transferred to Islamabad International Airport for your flight home, marking the conclusion of the Trango Tower Rock Climbing expedition. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Iconic granite tower",
      "World-class climbing",
      "Advanced technical routes",
      "Alpine adventure",
    ],
  },

  {
    id: "great-tower",
    slug: "great-tower",
    name: "Great Tower Climbing",
    altitude: "5,800m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "Great Tower is a striking granite spire in Nangma Valley, offering some of the most technical and demanding rock climbing in the Karakoram.",
    overview:
      "Located in the renowned Nangma Valley of Baltistan, Great Tower rises to approximately 5,800 meters and is considered one of the premier big-wall climbing objectives in the region. Known for its high-quality granite, steep faces, and sustained technical routes, the tower demands advanced rock climbing skills combined with alpine experience. Far less frequented than the Trango Towers, Great Tower offers climbers a remote and pure climbing experience in a spectacular Karakoram setting, making it an ideal objective for elite climbers seeking challenging lines away from crowded routes.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to the hotel. The afternoon includes a formal expedition briefing and final gear checks. Altitude: 540m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer for the scenic flight to Skardu, the gateway to the Karakoram. If weather conditions prevent flying, we will begin the drive along the Karakoram Highway to Chilas. Altitude: 2,228m / 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Preparation in Skardu or Arrival from Chilas",
        description:
          "A day for final administrative formalities and preparation in Skardu. For those traveling by road, this day marks the completion of the journey from Chilas to Skardu. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive from Skardu to Askole",
        description:
          "We depart Skardu by jeep for Askole, the last inhabited village before entering the high wilderness of the Baltoro region. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 05",
        title: "Trek from Askole to Jhula",
        description:
          "The trekking phase begins as we follow the Braldu River toward Jhola. This initial walk serves as a vital transition into the rugged terrain of the approach. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek from Jhula to Paiju",
        description:
          "We continue our trek to the green oasis of Paiju. The trail offers spectacular views of the surrounding peaks and the snout of the Baltoro Glacier. Altitude: 3,400m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek from Paiju to Urdukas",
        description:
          "We ascend onto the massive Baltoro Glacier. Today’s trek leads to the historic campsite at Urdukas, providing a dramatic vantage point over the granite spires. Altitude: 4,000m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Trek from Urdukas to Goro II",
        description:
          "We navigate the rocky moraine of the central Baltoro toward Goro II. The campsite offers a panoramic view of the heart of the Karakoram, including Gasherbrum IV. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek to Great Trango Base Camp",
        description:
          "A final approach trek brings us to the Great Trango Base Camp. We establish our staging area directly beneath the immense granite walls of the Great Tower. Altitude: 4,500m. Accommodation: Camping.",
      },
      {
        day: "Day 10 - 25",
        title: "Great Trango Tower Climbing Period",
        description:
          "A dedicated sixteen-day window for the technical ascent of Great Trango Tower. This period includes route fixing, establishing bivouacs, and the final summit push. Altitude: 6,286m. Accommodation: Camping.",
      },
      {
        day: "Day 26",
        title: "Descent to Goro II",
        description:
          "Following the conclusion of the climbing period, we dismantle our high camps and descend back onto the central Baltoro Glacier to Goro II. Altitude: 4,300m. Accommodation: Camping.",
      },
      {
        day: "Day 27",
        title: "Trek from Goro II to Urdukas",
        description:
          "We continue our return journey, trekking through the glacier's moraine back to the more comfortable grounds of Urdukas. Altitude: 4,000m. Accommodation: Camping.",
      },
      {
        day: "Day 28",
        title: "Trek from Urdukas to Paiju",
        description:
          "We descend from the glacier and return to the Paiju campsite, enjoying the increased oxygen and warmth of the lower altitude. Altitude: 3,400m. Accommodation: Camping.",
      },
      {
        day: "Day 29",
        title: "Trek to Askole and Drive to Skardu",
        description:
          "We complete the final leg of the trek to Askole and immediately board jeeps for the drive back to Skardu for a celebratory evening. Altitude: 3,050m / 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Return Flight to Islamabad and Departure",
        description:
          "We transfer for the flight to Islamabad. In the event of a cancellation, we begin the return drive. This marks the conclusion of the expedition and your final departure. Altitude: 540m. Accommodation: Hotel / Fly Out.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "World-class granite rock climbing",
      "Remote alpine environment in Nangma Valley",
      "Highly technical big-wall routes",
      "Untouched Karakoram wilderness",
    ],
  },

  {
    id: "mitre-peak",
    slug: "mitre-peak",
    name: "Mitre Peak",
    altitude: "6,010m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "35-40 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "Mitre Peak is a striking alpine peak near Concordia, offering climbers spectacular views of the world’s greatest Karakoram mountains.",
    overview:
      "Rising above the legendary Concordia at the junction of the Baltoro, Godwin-Austen, and Gasherbrum Glaciers, Mitre Peak (6,010m) is one of the most recognizable summits in the heart of the Karakoram. The climb involves a combination of snow, ice, and rock, making it an excellent alpine objective for experienced mountaineers acclimatizing in the Baltoro region. From the summit, climbers are rewarded with breathtaking panoramic views of K2, Broad Peak, Gasherbrum I & II, and the surrounding glaciated landscape. Mitre Peak is often attempted as a challenging trekking peak or as preparation for higher Karakoram expeditions.",
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be met by our representative and transferred to the group hotel for rest and recovery. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Drive from Islamabad to Chilas",
        description:
          "We begin our journey north, driving to Chilas via the Karakoram Highway or the scenic Naran Valley, depending on seasonal road conditions. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive from Chilas to Skardu",
        description:
          "We continue our drive from Chilas to Skardu, following the Indus River through dramatic mountain scenery into the heart of Baltistan. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Briefing and Expedition Preparations",
        description:
          "Today is dedicated to administrative formalities and an official expedition briefing at the Ministry of Tourism in Skardu. This is also a final opportunity for local shopping and gear preparations. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive from Skardu to Askole",
        description:
          "We depart Skardu by jeep for Askole, the last inhabited settlement and the traditional starting point for expeditions into the Baltoro wilderness. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 06",
        title: "Trek from Askole to Jhola",
        description:
          "Our trek begins with a walk from Askole to Jhola Camp. The route takes us across the Braldu River and serves as an introduction to the rugged terrain ahead. Altitude: 3,200m. Accommodation: Camping.",
      },
      {
        day: "Day 07",
        title: "Trek from Jhola to Paiju",
        description:
          "We continue our trek toward Paiju, navigating rocky terrain and river crossings. This section of the trail offers the first hints of the grand scale of the Karakoram. Altitude: 3,380m. Accommodation: Camping.",
      },
      {
        day: "Day 08",
        title: "Acclimatization Day at Paiju",
        description:
          "A vital rest and acclimatization day at Paiju. Our team will finalize porter load arrangements while you adjust to the rising altitude. Altitude: 3,380m. Accommodation: Camping.",
      },
      {
        day: "Day 09",
        title: "Trek from Paiju to Urdukas",
        description:
          "We ascend onto the Baltoro Glacier, trekking toward Urdukas. The day provides spectacular views of the Trango Towers and the Cathedral Peaks. Altitude: 4,050m. Accommodation: Camping.",
      },
      {
        day: "Day 10",
        title: "Trek from Urdukas to Goro II",
        description:
          "Today’s trek along the glacier leads us to Goro II, surrounded by legendary peaks including Masherbrum and the Muztagh Tower. Altitude: 4,350m. Accommodation: Camping.",
      },
      {
        day: "Day 11",
        title: "Trek to Mitre Peak Base Camp",
        description:
          "We trek from Goro II to our Base Camp located near Concordia. Our staging area is established directly below the striking spire of Mitre Peak. Altitude: 4,650m. Accommodation: Camping.",
      },
      {
        day: "Day 12 - 33",
        title: "Mitre Peak Climbing Period",
        description:
          "A dedicated three-week window for the technical climb. This period includes high-altitude acclimatization, route fixing on the peak, and the final summit attempt. Altitude: 6,010m. Accommodation: Camping.",
      },
      {
        day: "Day 34",
        title: "Return Trek to Urdukas",
        description:
          "After concluding the climbing period, we begin our descent, trekking back across the Baltoro Glacier to the campsite at Urdukas. Altitude: 4,050m. Accommodation: Camping.",
      },
      {
        day: "Day 35",
        title: "Trek from Urdukas to Skambusohk",
        description:
          "We continue our return journey down the valley, trekking from Urdukas to the campsite at Skambusohk. Altitude: 3,500m. Accommodation: Camping.",
      },
      {
        day: "Day 36",
        title: "Trek to Askole",
        description:
          "The final trekking day takes us from Skambusohk back to the village of Askole, marking the end of our journey on foot. Altitude: 3,050m. Accommodation: Camping.",
      },
      {
        day: "Day 37",
        title: "Drive to Skardu and Debriefing",
        description:
          "We return to Skardu by jeep. Upon arrival, we will hold an official expedition debriefing with the local authorities. Altitude: 2,228m. Accommodation: Hotel.",
      },
      {
        day: "Day 38",
        title: "Drive from Skardu to Naran or Besham",
        description:
          "We begin our southward drive, stopping overnight in either Naran or Besham depending on current road conditions and travel speed. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 39",
        title: "Return to Islamabad",
        description:
          "The final leg of our drive brings us back to Islamabad. The afternoon is free for sightseeing, shopping, or relaxing after the expedition. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 40",
        title: "International Departure",
        description:
          "We provide a transfer to Islamabad International Airport for your return flight home. End of services.",
      },
    ],
    highlights: [
      "Iconic peak overlooking Concordia",
      "Panoramic views of K2, Broad Peak, and Gasherbrums",
      "Alpine rock and ice climbing",
      "Classic objective in the Baltoro Glacier region",
    ],
  },

  {
    id: "k7-charakusa-valley-hushe",
    slug: "k7-charakusa-valley-hushe",
    name: "K7 Charakusa Valley Hushe",
    altitude: "6,934m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "10-15 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "K7 is a formidable technical peak in the Charakusa Valley, renowned for its vast granite faces and demanding rock and ice climbing routes.",
    overview:
      "Located in the remote Charakusa Valley above Hushe village, K7 (6,934m) is one of the most impressive technical climbing peaks in the Karakoram. The mountain is famed for its immense granite walls, including one of the largest continuous granite faces in the world. Surrounded by legendary peaks such as K6 (7,281m), Link Sar (7,041m), and Drifika (6,650m), the Charakusa Valley offers exceptional opportunities for high-level alpine rock and ice climbing. K7 is a serious objective suited only to highly experienced climbers seeking challenging, committing routes in a remote and spectacular setting.",
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to the group hotel. The rest of the day is available for rest and recovery in the capital city. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer to the airport for the scenic flight to Skardu. Should weather conditions prevent flying, we will begin the drive along the Karakoram Highway to Chilas for an overnight stay. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Skardu Sightseeing or Arrival from Chilas",
        description:
          "If we arrived by air, today is dedicated to local sightseeing and final preparations in Skardu. For those traveling by road, we complete the journey from Chilas to Skardu, following the Indus River. Altitude: 2,300m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Drive from Skardu to Hushe",
        description:
          "We depart Skardu by jeep for the scenic Hushe Valley. This drive takes us through traditional Balti villages to Hushe, the final settlement and the gateway to the Charakusa Valley. Altitude: 3,048m. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Trek from Hushe to Shaicho",
        description:
          "The trekking portion of the journey begins. We walk from Hushe to the beautiful campsite of Shaicho, located at the confluence of the Gondogoro and Charakusa rivers. Altitude: 3,300m. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek from Shaicho to Spangser",
        description:
          "We continue our ascent toward Spangser. This trek offers increasingly dramatic views of the granite spires that define the Charakusa Valley, providing excellent acclimatization. Altitude: 4,000m. Accommodation: Camp.",
      },
      {
        day: "Day 07 - 08",
        title: "K6 and K7 Charakusa Base Camp",
        description:
          "We reach the K6 and K7 Base Camp in the heart of the Charakusa Valley. This amphitheater is surrounded by some of the world's most impressive peaks and technical rock faces. We will spend two days exploring the base camp area. Altitude: 4,600m. Accommodation: Camp.",
      },
      {
        day: "Day 09",
        title: "Return Trek to Shaicho",
        description:
          "We begin our descent, trekking back from the high K6 and K7 base camps through the alpine meadows of the Charakusa Valley to return to Shaicho. Accommodation: Camp.",
      },
      {
        day: "Day 10",
        title: "Trek to Hushe and Drive to Skardu",
        description:
          "The final 4-hour trek brings us back to Hushe village. From there, we board our jeeps for the return drive to Skardu for a well-deserved rest and a warm shower. Accommodation: Hotel.",
      },
      {
        day: "Day 11",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We transfer for the return flight to Islamabad. In the event of a flight cancellation, we will begin the return journey by road, staying overnight in Chilas. Accommodation: Hotel.",
      },
      {
        day: "Day 12",
        title: "Return to Islamabad via Chilas",
        description:
          "For those traveling by road, the final leg of the drive from Chilas brings us back to Islamabad by late afternoon. Accommodation: Hotel.",
      },
      {
        day: "Day 13",
        title: "International Departure",
        description:
          "We provide a final transfer to Islamabad International Airport for your return flight home, marking the conclusion of the K7 Charakusa Valley Hushe tour. End of services.",
      },
    ],
    highlights: [
      "Massive granite walls of K7 (6,934m)",
      "World-class rock and ice climbing in Charakusa Valley",
      "Remote and pristine Karakoram wilderness",
      "Views of K6, Link Sar, Drifika, and surrounding peaks",
    ],
  },

  {
    id: "amin-braq",
    slug: "amin-braq",
    name: "Amin Braq Climbing",
    altitude: "5,850m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "30-35 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "Amin Brakk offers highly challenging rock climbing with stunning Karakoram views and technical alpine routes.",
    overview:
      "The Amin Brakk Climbing expedition combines extreme technical rock climbing with high-altitude alpine mountaineering. It is one of the most spectacular and difficult objectives in the Karakoram, ideal for experienced climbers seeking a serious challenge.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met by our representative and transferred to your hotel. The remainder of the day is available for rest and acclimatization in the capital city. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Flight to Skardu or Drive to Chilas",
        description:
          "We transfer to the airport for the scenic flight to Skardu. In the event of a flight cancellation due to weather conditions, we will commence the journey by road, driving along the Karakoram Highway to Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Free Day in Skardu or Continue Drive",
        description:
          "If we arrived by air, today is a free day in Skardu for final preparations and local sightseeing. If traveling by road, we complete the second leg of the journey from Chilas to Skardu, following the Indus River. Altitude: 2,400m. Accommodation: Hotel/Camp.",
      },
      {
        day: "Day 04",
        title: "Drive from Skardu to Kanday",
        description:
          "Leaving Skardu, we drive toward the remote village of Kanday. This journey takes us through the rugged landscapes of Baltistan, where we will establish our first camp and meet our local porter team. Altitude: 3,000m. Accommodation: Camp.",
      },
      {
        day: "Day 05",
        title: "Trek to Mingulu Brok",
        description:
          "We begin our trek toward the high pastures of Mingulu Brok. The path offers initial views of the surrounding granite spires and allows for steady acclimatization as we move deeper into the mountain range. Altitude: 3,200m. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to Amin Brakk Base Camp",
        description:
          "Today we trek to the base of the majestic Amin Brakk. The route brings us into direct view of the tower's immense vertical face, where we will establish our primary base of operations for the climb. Altitude: 3,450m. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Trek to K6/K7 Base Camp",
        description:
          "An exploratory trek leads us further into the amphitheater toward the K6 and K7 base camps. This region is renowned for having some of the most spectacular mountain vistas and technical climbing peaks in the world. Altitude: 4,000m. Accommodation: Camp.",
      },
      {
        day: "Day 08 - 30",
        title: "Amin Brakk Climbing Period",
        description:
          "This three-week window is dedicated to the climbing expedition. This period allows for route setting, haulage, and the push for the summit, with full logistical support provided at the base camp. Altitude: 4,000m. Accommodation: Camp.",
      },
      {
        day: "Day 31",
        title: "Return Trek to Kanday",
        description:
          "Following the climbing period, we begin our descent. We trek back through the high pastures, returning to the village of Kanday to conclude the trekking portion of the expedition. Altitude: 3,000m. Accommodation: Camp.",
      },
      {
        day: "Day 32",
        title: "Drive Back to Skardu",
        description:
          "We rejoin our vehicles for the return drive to Skardu. Upon arrival, we check into the hotel for a well-deserved rest and a celebratory evening. Altitude: 2,400m. Accommodation: Hotel.",
      },
      {
        day: "Day 33",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We board the return flight to Islamabad. If weather prevents flying, we will begin the two-day return journey by road, staying overnight in Chilas. Altitude: 1,265m. Accommodation: Hotel.",
      },
      {
        day: "Day 34",
        title: "Return to Islamabad via Chilas",
        description:
          "For those traveling by road, an early morning departure from Chilas brings us back to Islamabad by late afternoon. This marks the return to the capital and a transition back to the city. Altitude: 512m. Accommodation: Hotel.",
      },
      {
        day: "Day 35",
        title: "Final Departure",
        description:
          "Following breakfast, we provide a final transfer to Islamabad International Airport for your onward flight to your home destination. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Excellent rock climbing",
      "Alpine environment",
      "Advanced technical routes",
      "Karakoram wilderness",
    ],
  },

  {
    id: "shipton-spire",
    slug: "shipton-spire",
    name: "Shipton Spire Climbing",
    altitude: "6,090m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "Shipton Spire is a striking granite tower near Trango Towers, offering highly technical big-wall climbing with superb rock quality and breathtaking Karakoram views.",
    overview:
      "The Shipton Spire Climbing expedition is a premier objective for experienced rock climbers, featuring a 29-pitch, 4,400 ft route with pitches rated 6c, 7b, and 7b+. Located just above the confluence of the North and South Hainabroq Glaciers, the climb combines extreme technical difficulty with the stunning alpine scenery of the Karakoram. Ideal for seasoned climbers seeking one of the most challenging granite towers in the region.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon arrival at Islamabad International Airport, you will be greeted and transferred to the group hotel. The day is available for rest and recovery as we prepare for the expedition ahead. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Fly to Skardu or Drive to Chilas",
        description:
          "We transfer for the scenic flight to Skardu. Should weather conditions prevent flying, we will begin the drive to Chilas via the Karakoram Highway, a journey of approximately 12-13 hours. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive from Chilas to Skardu",
        description:
          "For those traveling by road, we continue the 8-9 hour journey from Chilas to Skardu, following the dramatic course of the Indus River into the heart of Baltistan. Altitude: 2,450m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Preparation and Sightseeing in Skardu",
        description:
          "A dedicated day for final gear checks, administrative formalities, and expedition preparation. You may also enjoy local sightseeing around the Skardu bazaar and historical sites. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Askole by Jeep",
        description:
          "We embark on a 6-7 hour rugged jeep drive to Askole, the last inhabited village before entering the high wilderness of the Karakoram. Altitude: 3,000m. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to Jhola",
        description:
          "The trekking portion of the expedition begins. We walk for 5-6 hours toward Jhola camp, crossing the snout of the Biafo Glacier and following the Braldu River. Altitude: 3,250m. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Trek to Paiju Camp",
        description:
          "A 6-7 hour trek takes us to the green oasis of Paiju. From here, we enjoy the first grand views of the Baltoro Glacier and the distant granite towers. Altitude: 3,460m. Accommodation: Camp.",
      },
      {
        day: "Day 08",
        title: "Trek to Shipton Spire Base Camp",
        description:
          "We ascend toward the magnificent Shipton Spire. This 5-6 hour trek leads us to our primary base camp, situated directly below the sheer vertical walls of the spire. Altitude: 4,700m. Accommodation: Camp.",
      },
      {
        day: "Day 09 - 25",
        title: "Acclimatization and Climbing Days",
        description:
          "This extended period is dedicated to the technical climb of Shipton Spire. Climbers will manage route fixing, haulage, and summit attempts with the support of our base camp staff. Accommodation: Camp.",
      },
      {
        day: "Day 26",
        title: "Return Trek to Korofong",
        description:
          "Following the climbing period, we begin our descent from the high camp, trekking for 5-6 hours back toward the lush grounds of Korofong. Altitude: 3,150m. Accommodation: Camp.",
      },
      {
        day: "Day 27",
        title: "Trek to Askole and Drive to Skardu",
        description:
          "We complete the final leg of the trek back to Askole and immediately board jeeps for the return drive to Skardu, arriving late in the evening. Altitude: 2,450m. Accommodation: Hotel.",
      },
      {
        day: "Day 28",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We board the return flight to Islamabad. In case of flight cancellation, we commence the two-day return drive, stopping in Chilas after 8-9 hours on the road. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Return to Islamabad via Chilas",
        description:
          "The final 12-13 hour drive from Chilas brings us back to Islamabad, where we enjoy a farewell dinner and the comforts of the capital. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "International Departure",
        description:
          "You will be transferred to Islamabad International Airport for your onward flight home, marking the end of the Shipton Spire expedition. Meals: Breakfast.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Challenging big-wall climbing",
      "Technical granite routes (6c–7b+)",
      "Stunning Karakoram alpine environment",
      "Proximity to Trango Towers and North/South Hainabroq Glaciers",
    ],
  },

  {
    id: "shingo-chatpa-peak",
    slug: "shingo-chatpa-peak",
    name: "Shingo Chatpa Peak",
    altitude: "5,600m",
    location: "Karakoram, Gilgit Baltistan, Pakistan",
    duration: "25-30 Days",
    difficulty: "Very Difficult",
    bestSeason: null,
    price: 20000,
    groupSize: "2-6 climbers",
    image: heroImage2,
    description:
      "Shingo Chatpa Peak is a magnificent climbing objective in the Nangma Valley, offering technical routes and a pristine alpine environment ideal for experienced climbers.",
    overview:
      "The Shingo Chatpa Climbing expedition takes place in the famed rock climbing playground of Nangma Valley, Baltistan. Climbers can attempt the Gentian Traverse (PD) and other challenging lines, exploring glaciers and alpine terrain while enjoying dramatic Karakoram scenery. The expedition is suited for advanced climbers seeking a combination of technical rock climbing and high-altitude alpine adventure.",
    timeline: [
      {
        day: "Day 01",
        title: "Arrival in Islamabad",
        description:
          "Welcome to Pakistan. Upon your arrival at Islamabad International Airport, you will be met and transferred to our group hotel. This initial day is dedicated to rest and recovery in the capital city before our departure for the mountains. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 02",
        title: "Fly to Skardu or Drive to Chilas",
        description:
          "We transfer for the flight to Skardu, which offers spectacular mountain views. In the event of a flight cancellation due to local weather conditions, we will begin the drive along the Karakoram Highway to Chilas. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 03",
        title: "Drive from Chilas to Skardu",
        description:
          "For those traveling by road, we continue the journey from Chilas to Skardu. This scenic route follows the Indus River and serves as a transition into the high-altitude desert landscape of Baltistan. Altitude: 2,450m. Accommodation: Hotel.",
      },
      {
        day: "Day 04",
        title: "Expedition Preparation and Sightseeing",
        description:
          "A free day in Skardu dedicated to final expedition preparations, administrative formalities, and sightseeing. It is an ideal opportunity to explore the local bazaar and ensure all climbing equipment is ready for the field. Accommodation: Hotel.",
      },
      {
        day: "Day 05",
        title: "Drive to Kanday",
        description:
          "We depart Skardu by jeep for the village of Kanday. This drive takes us into the heart of the valley where we will establish our first camp and coordinate with our local porter team. Altitude: 2,850m. Accommodation: Camp.",
      },
      {
        day: "Day 06",
        title: "Trek to Minguloo Broq",
        description:
          "The trekking phase begins as we ascend toward the high summer pastures of Minguloo Broq. This steady climb provides essential acclimatization while offering views of the surrounding granite peaks. Altitude: 3,250m. Accommodation: Camp.",
      },
      {
        day: "Day 07",
        title: "Trek to Shingo Chatpa Base Camp",
        description:
          "We continue our trek to the Shingo Chatpa Base Camp. This location serves as our primary staging area, situated at the foot of the granite walls where we will establish our climbing operations. Altitude: 4,200m. Accommodation: Camp.",
      },
      {
        day: "Day 08 - 25",
        title: "Acclimatization and Climbing Period",
        description:
          "This extended window is dedicated to the technical ascent of Shingo Chatpa. The period allows for route fixing, load ferrying, and summit attempts, supported by our experienced base camp staff. Accommodation: Camp.",
      },
      {
        day: "Day 26",
        title: "Return Trek to Kanday",
        description:
          "Following the conclusion of the climbing period, we begin our descent. We trek back through the alpine meadows, returning to the village of Kanday for our final night in the field. Altitude: 2,850m. Accommodation: Camp.",
      },
      {
        day: "Day 27",
        title: "Drive Back to Skardu",
        description:
          "We rejoin our vehicles for the return drive to Skardu. This evening provides a welcome return to hotel comforts and an opportunity to celebrate the expedition's achievements. Altitude: 2,450m. Accommodation: Hotel.",
      },
      {
        day: "Day 28",
        title: "Return Flight to Islamabad or Drive to Chilas",
        description:
          "We transfer for the return flight to Islamabad. If weather prevents flying, we will commence the two-day drive back to the capital, staying overnight in Chilas. Altitude: 1,200m. Accommodation: Hotel.",
      },
      {
        day: "Day 29",
        title: "Return to Islamabad via Chilas",
        description:
          "For those on the road, an early morning departure from Chilas brings us back to Islamabad by late afternoon, completing our journey through the mountains. Altitude: 500m. Accommodation: Hotel.",
      },
      {
        day: "Day 30",
        title: "Final Departure",
        description:
          "After breakfast, you will be transferred to Islamabad International Airport for your onward flight to your home destination. End of services.",
      },
    ],
    servicesIncluded: COMMON_SERVICES_INCLUDED,
    servicesNotIncluded: COMMON_SERVICES_NOT_INCLUDED,
    requirements: COMMON_SERVICES_REQUIREMENTS,
    highlights: [
      "Technical rock climbing in Nangma Valley",
      "Alpine environment with glacier approaches",
      "Gentian Traverse route (PD) and other classic lines",
      "Spectacular Karakoram scenery",
      "Remote and pristine climbing location",
    ],
  },
];

export function getRockClimbingsBySlug(
  slug: string
): RockClimbingData | undefined {
  return rockClimbings.find((climbing) => climbing.slug === slug);
}

export function getRockClimbingsById(id: string): RockClimbingData | undefined {
  return rockClimbings.find((climbing) => climbing.id === id);
}
