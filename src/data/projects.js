const _projects = [
  {
    'id': 1,
    'title': 'China Convitto',
    'path': 'chinaconvitto',
    'category': 'iOS App',
    'icon': './static/assets/apps/chinaconvitto.png',
    'description': 'This application is part of Convitto Nazionale Vittorio Emanuele II student mobility project. Convitto is a high school in Rome that has an annual 3-weeks trip to China. During the stay, students will have to participate in morning classes at university, followed by evening cultural tours. To facilitate their permanence, I decided to create this application. Being a student of this high school, I lived firsthand this fantastic experience. Although during the visits, I noticed that the culture shock was substantial. Therefore the goal of this application is to make the students prepare for the trip beforehand.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 5: Homepage, Monuments, Map, Tips and Rewind.',
      '**Homepage:** *[Screenshot 1]* In this page, we can find the meteorological condition of the city of Beijing or Shanghai (depending on where the user is – the default  is Beijing), the current local time and the links to the other sections.',
      '**Monuments:** *[Screenshot 2]* The monuments page contains photos and a written description of the place that the students will visit. These descriptions are written entirely by students and classified into years.',
      '**Map:** A map is displayed for users to see their position at all times, and monuments\' locations are displayed too.',
      '**Tips:** *[Screenshot 3]* In this section, suggestions are given mainly for new students. These range from suitcase preparation, to smog, water and internet issues, electrical socket\'s shape and useful phrases to use in case of an emergency.',
      '**Rewind:** This last section contains photos and videos taken by students of past years. Here the goal is for old students to relive the beautiful moments of the trip. While for new students, is a way to understand what they will do during those 3 weeks.'],
    'achievements': ['_May 28 2018:_', 'The app became **n. 74** in the Italian education leaderboard of the App Store']
  },
  {
    'id': 2,
    'title': 'Montessori',
    'path': 'montessori',
    'category': 'iOS App',
    'icon': './static/assets/apps/montessori.png',
    'description': 'This app was commissioned by the head student of the Liceo Maria Montessori, which is a highschool in Rome. The main goal of this app is to facilitate the life of the students of this highschool. Tools such as the class schedule, class register and school circulars are available.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 8: Homepage, Convenzioni, Vestiti, Circolari, Orario, Registro, Tutoraggio and Sito Web.',
      '**Homepage:** *[Screenshot 1]* In this page, we can find links to all the other seven sections of the application.',
      '**Convenzioni:** This section contains all he discounts vouchers available for the students of Liceo Maria Montessori.',
      '**Vestiti:** *[Screenshot 2]* This is an online shop for official merchandise for highschool students. Students can choose between sweatshirts and t-shirts.',
      '**Circolari:** Students can read all the school\'s circulars in this section.',
      '**Orario:** Here, students can look at their classes\' time table.',
      '**Tutoraggio:** This opens the school\'s electronic register, to check homework, grades, upcoming quizzes and more.',
      '**Orario:** *[Screenshot 3]* This section is the reason why the application was created in the first place. Here students can ask for help in various subjects to professors or older, more competent students.',
      '**Sito Web:** This opens the school\'s official website.'],
    'achievements': []
  },
  {
    'id': 3,
    'title': 'Airlinr',
    'path': 'airlinr',
    'category': 'iOS App',
    'icon': './static/assets/apps/airlinr.png',
    'description': 'I consider this application one of my best works design-wise to date. The goal of this app is to give the user the ability to check if the dimensions and weight of their luggage is within the limits of a certain airline (such that you wouldn\'t need to pay extra). User can also look at detailed information of a certain airline.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 3: Homepage, Tickets and Gadgets.',
      '**Airlines:** *[Screenshot 1]* Here, users can look for any airline company. By clicking on the blue button next to each company, a screen will pop up with all of the airline\'s info. *[Screenshot 2]*',
      '**My Luggage:** *[Screenshot 3]* In this section, users can log their luggage\'s dimensions and compare them with the various airline companies. If the luggage is accepted (for weight and dimension), a blue checkmark will appear near the airline name.',
      '**Favorites:** Favorites airline companies will appear here.'],
    'achievements': []
  },
  {
    'id': 4,
    'title': 'Party!',
    'path': 'party',
    'category': 'App Design',
    'icon': './static/assets/apps/party!.png',
    'description': 'This application is the mockup of an application that was ment to be developed. Given that the project never saw the light of day, I decided to give it a new life by redesigning it a little bit and developing it. The aim of this app was to give the user the possibility to discover some of the most important and famous music festivals in the world. In this app you would have had the possibility to buy tickets and official merchandising too.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 3: Homepage, Tickets and Gadgets.',
      '**Homepage:** *[Screenshot 1]* In this page, users can see a sort of calendar where the next main events are displayed. By clicking on them the user can get more info on the festival, as well as buy tickets for that event. *[Screenshot 2]*',
      '**Tickets:** *[Screenshot 3]* Here users can find tickets for all the available festivals and their price.',
      '**Gadgets:** This is an online shop for official merchandise. Here users can buy gadgets from the festivals\' official stores.'],
    'achievements': []
  },
  {
    'id': 5,
    'title': 'USI Productivity',
    'path': 'usi-productivity',
    'category': 'App Design',
    'icon': './static/assets/apps/usi_productivity.png',
    'description': 'This application is the mockup of an application that was ment to be developed. Given that the project never saw the light of day, I decided to give it a new life by redesigning it a little bit and developing it. The aim of this app was to give the user the possibility to discover some of the most important and famous music festivals in the world. In this app you would have had the possibility to buy tickets and official merchandising too.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 3: Homepage, Tickets and Gadgets.',
      '**Homepage:** *[Screenshot 1]* In this page, users can see a sort of calendar where the next main events are displayed. By clicking on them the user can get more info on the festival, as well as buy tickets for that event. *[Screenshot 2]*',
      '**Tickets:** *[Screenshot 3]* Here users can find tickets for all the available festivals and their price.',
      '**Gadgets:** This is an online shop for official merchandise. Here users can buy gadgets from the festivals\' official stores.'],
    'achievements': []
  }
]

export default {
  getProjects (cb) {
    cb(_projects)
  }
}
