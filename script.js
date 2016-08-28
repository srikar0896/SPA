// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){


return function(arr, searchString){

  if(!searchString){
    return arr;
  }

  var result = [];

  searchString = searchString.toLowerCase();


  angular.forEach(arr, function(item){

    if(item.title.toLowerCase().indexOf(searchString) !== -1 || item.category.toLowerCase().indexOf(searchString)!== -1){
      result.push(item);
    }

  });

  return result;
};

});

// The controller

function InstantSearchController($scope){

// The data model. These items would normally be requested via AJAX,
// but are hardcoded here for simplicity. See the next example for
// tips on using AJAX.

$scope.items = [


  {
    url: '#',
    title: 'Arashimaya Forest,Japan',
    info:'The famous forest is literally littered with famous tombs, temples is close to the "Moon Crossing Bridge".  Its worth exploring.',
    image: 'http://listogre.com/wp-content/uploads/2014/02/Sagano-Bamboo-Forest-Arashiyama-Japan-wallpaper-Full-HD.jpg',
    category: "Exotic Places",
    likes:2114

  },
  {
    url: '#',
    title: 'Barnes Sand Bay, Anguilla',
    info:'One of the more exclusive and less visited of Anguilla,s beaches is Barnes Bay on the northwestern shore of Anguilla.straight stretch of sand.',
    image: 'http://media.cntraveler.com/photos/5697f66cc58591430b12ac6d/master/w_2880,c_limit/Barnes-Bay-beach-cr-alamy.jpg',
    likes:1470,
    category: "Beaches"
  },
  {
    url: '#',
    title: 'Mendenhall Ice Caves',
    info:'After watching the film "Frozen", I felt compelled to include an icy wonderland. The ice caves fit the bill. The caves exists because the glacier is melting.',
    image: 'http://listogre.com/wp-content/uploads/2014/02/2048.jpg',
    likes:1291,
    category: "Exotic Places"
  },
  {
    url: '#',
    title: 'Bagan, Bhuddist Temple',
    info:'Bagan is home to the largest and densest concentration of Buddhist temples and stupas in the world. Once a mighty city was eventually sacked by the mongols.',
    image: 'http://listogre.com/wp-content/uploads/2014/02/bagan-again.jpg',
    likes:432,
    category: "Exotic Places"
  },
  {
    url: '#',
    title: 'Mount Huang, China',
    info:'Mount Huang is a mountain range in eastern China also known as "Yellow Mountain".The tallest peak in the Huangshan mountain range is at 1,864 meters (6,115 ft).' ,
    image: 'http://resources.touropia.com/gfx/d/mountains-of-the-world/mount_huang.jpg',
    likes:361,
    category: "Mountains"
  },
  {
    url: '#',
    title: 'North Tanzania',
    info:'Now for something completely different. Tanzania is one of the best places to go for a safari and home to Mount Kilimanjaro.One of the last undiscovered jewels of Africa.',
    image: 'http://listogre.com/wp-content/uploads/2014/02/Ngorongoro-Crater-in-Northern-Tanzania.jpg',
    likes:916,
    category: "Exotic Places"
  },
  {
    url: '#',
    title: 'Lotus Temple, India',
    info:'This is a true oasis of tranquility. Built in 1980, the flower-shaped temple is surrounded by gardens and interior space is reserved for people of all faiths to come and meditate.',
    image: 'http://images.huffingtonpost.com/2014-05-20-LotusTempleSebastianDelgadoCaicedo-thumb.jpg',
    likes:197,
    category: "Sacred Places"
  },
  {
    url: '#',
    title: 'Meiji Shinto Shrine, Japan',
    info:'The Meiji Shrine is a Shinto shrine in Tokyo originally built in honor of Japan,s first modern emperor.This is nestled in over 150 acres is traditional favorite of Tokyo residents',
    image: 'http://images.huffingtonpost.com/2014-05-20-MeijiShrinePatrick-thumb.jpg',likes:891,
    category: "Sacred Places"
  },
  {
    url: '#',
    title: 'Shwedagon Pagoda, Myanmar',
    info:'Rising 100 yards above the city of Rangoon, Myanmar,s Shwedagon Pagoda is, according to many travelers, one of the world,s great wonders.',
    image: 'http://images.huffingtonpost.com/2014-05-20-ShwedagonPayaGerardDecq.jpg',likes:1564,
    category: "Sacred Places"
  },
  {
    url: '#',
    title: 'Lopes Mendes, Brazil',
    info:'One of the most beautiful and unspoiled beaches in Brazil, Lopes Mendes, which is only accessible by boat (and a short hike) and blissful silent seclusion.',
    image: 'http://www.ilhagrande.es/wp-content/uploads/2013/10/lopes-mendes-ilha-grande-4.jpg',likes:741,
    category: "Beaches"

  },
  {
    url: '#',
    title: 'Blinky Beach,  Australia',
    info:'Located on the islands east side, the beach is the most popular place to catch a ride on some of Australia’s least crowded waves.White beach is a top spot to enjoy a relaxing picnic',
    image: 'http://www.snowfallcreative.com/wp-content/uploads/2016/02/Blinky-Beach-Lord-Howe-Island-Australia.jpg',likes:241,
    category: "Beaches"
  },
  {
    url: '#',
    title: 'St John, Trunk Bay',
    image: 'http://soulofamerica.com/soagalleries/stjohn/StJohn-Trunk-BayTB.jpg',
    info: 'Beautiful waters and wonderful white sand.Renowned for its underwater snorkeling trail. Six hundred and fifty (650) feet of underwater trails are a highlight for Trunk Bays visitors.',
    likes:89,
    category: "Beaches"
  },

  {
    url: '#',
    title: 'Temae and Teavora, France',
    info:'This is a perfect place to swim, snorkel and surf. When it breaks right the Temae surf spot is a perfect barrel that is as breathtaking to watch as it is to surf.',
    image: 'http://media.cntraveler.com/photos/5697f696c58591430b12acbe/master/w_2880,c_limit/Temae-beach-cr-getty.jpg',likes:1791,
    category: "Beaches"
  },
  {
    url: '#',
    title: 'Mount Kinabalu',
    info:'Mount Kinabalu is the highest mountain in Borneo. The mountain is known worldwide.Over 600 species of ferns, 326 species of birds, and 100 mammalian species have been identified .',
    image: 'http://farm1.static.flickr.com/184/434687604_bf98751fe7_b.jpg',likes:1291,
    category: "Mountains"
  },
  {
    url: '#',
    title: 'Amphitheatre, Drakensberg',
    info:'The name is derived from the dutch and means “dragons mountain”.It has precipitous cliffs rising approximately 1200 meters (4000 ft) along its entire length.',
    image: 'http://farm3.static.flickr.com/2210/2050851428_a66f571346_b.jpg',likes:1291,
    category: "Mountains"
  },

  {
    url: '#',
    title: 'Aoraki Mount Cook',
    info:'Aoraki Mount Cook is the highest mountain in New Zealand. The mountain lies in a national park of the same name which contains 27 other mountains which peak at over 3000 meters.',
    image: 'http://farm3.static.flickr.com/2415/2377113600_195e1713a1_b.jpg',likes:1291,
    category: "Mountains"
  },
  {
    url: '#',
    title: 'Monte Fitz Roy',
    info:'Monte Fitz Roy is a 3,375 meter (11,073 ft) high mountain on the border between Argentina and Chile. It was first climbed in 1952 by French alpinists Lionel Terray and Guido Magnone.',
    image: 'http://resources.touropia.com/gfx/d/mountains-of-the-world/monte_fitz_roy.jpg',likes:1291,
    category: "Mountains"
  },
  {
    url: '#',
    title: 'Saint-Michel, France',
    info:'None are quite as breathtaking as the chapel of Saint-Michel dAiguilhe. After climbing over 200 steps up a craggy volcanic rock, church and absolutely gorgeous views of the surrounding village.',
    image: 'http://images.huffingtonpost.com/2014-05-20-SaintMichelAiguilheChapelSoleilhacMarieLaure-thumb.jpg',likes:1291,
    category: "Sacred Places"
  },
  {
    url: '#',
    title: ' Hagia Sophia, Turkey',
    info:'It,s one of the oldest and most architecturally influential places of worship in the world. All cultures a flock to behold her glories is what truly makes the Hagia Sophia special.',
    image: 'http://images.huffingtonpost.com/2014-05-20-HagiaSofiaDriptaRoy-thumb.jpg',likes:1291,
    category: "Sacred Places"
  },

  {
    url: '#',
    title: 'Cano Cristales',
    info:'Known as the most beautiful river in the world, and even the "Liquid Rainbow", is someplace you have to visit if you travel to South America. The river itself has no fish at all.',
    image: 'http://listogre.com/wp-content/uploads/2014/02/Cano-Cristales-el-rio-de-colores-en-La-Macarena-Meta.jpg',likes:1291,
    category: "Exotic Places"
  },
  {
    url: '#',
    title: 'Bali',
    info:'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.',
    image: 'http://www.edreams.com/blog/wp-content/uploads/sites/3/2014/07/Photo-by-Alex-Hanoko-via-Flickr.jpg',likes:1291,
    category: "Romantic Places"
  },
  {
    url: '#',
    title: 'Easter Island',
    info:'Early settlers called the island "Te Pito O Te Henua" (Navel of The World). Officially a territory of Chile, it lies far off in the Pacific Ocean.It is most famous for its enigmatic giant stone statues,built centuries ago.',
    image: 'http://www.edreams.com/blog/wp-content/uploads/sites/3/2014/07/easter-Island-Photo-by-Yulin-Lu-via-Flickr.jpg',likes:2461,
    category: "Romantic Places"
  },
  {
    url: '#',
    title: 'Ushuaia, Argentina',
    info:'For the romantic duo, however,If that doesn"t make this destination the second most romantic place in the world.',
    image: 'http://blog.edreams.es/images/2012/02/Ushuaia_Foto_di_drand10.jpg',likes:391,
    category: "Romantic Places"
  },
  {
    url: '#',
    title: 'Paris, France',
    info:'Paris,Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.The city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honore.',
    image: 'http://blog.edreams.es/images/2012/02/Paris_foto_di_Ferran_Moreno_Lanza.jpg',likes:141,
    category: "Romantic Places"
  },

  {
    url: '#',
    title: 'Las Vegas, Nevada',
    info:'Las Vegas, in Nevadas Mojave Desert, is a resort city famed for its vibrant nightlife, centered around 24-hour casinos and other entertainment options.',
    image: 'http://www.edreams.com/blog/wp-content/uploads/sites/3/2014/07/Photo-by-Justin-Brown-via-Flickr.jpg',likes:161,
    category: "Romantic Places"
  }
];

}
