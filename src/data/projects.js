const _projects = [
  {
    'id': 1,
    'title': 'China Convitto',
    'category': 'iOS App',
    'icon': '/static/assets/apps/chinaconvitto.png',
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
    'id': 1,
    'title': 'China Convitto',
    'category': 'iOS App',
    'icon': '/static/assets/apps/chinaconvitto.png',
    'description': 'This application is part of Convitto Nazionale Vittorio Emanuele II student mobility project. Convitto is a high school in Rome that has an annual 3-weeks trip to China. During the stay, students will have to participate in morning classes at university, followed by evening cultural tours. To facilitate their permanence, I decided to create this application. Being a student of this high school, I lived firsthand this fantastic experience. Although during the visits, I noticed that the culture shock was substantial. Therefore the goal of this application is to make the students prepare for the trip beforehand.',
    'screenshots': ['', '', ''],
    'contents': ['The sections of the application are 5: Homepage, Monuments, Map, Tips and Rewind.',
      '**Homepage:** *[Screenshot 1]* In this page, we can find the meteorological condition of the city of Beijing or Shanghai (depending on where the user is – the default  is Beijing), the current local time and the links to the other sections.',
      '**Monuments:** *[Screenshot 2]* The monuments page contains photos and a written description of the place that the students will visit. These descriptions are written entirely by students and classified into years.',
      '**Map:** A map is displayed for users to see their position at all times, and monuments\' locations are displayed too.',
      '**Tips:** *[Screenshot 3]* In this section, suggestions are given mainly for new students. These range from suitcase preparation, to smog, water and internet issues, electrical socket\'s shape and useful phrases to use in case of an emergency.',
      '**Rewind:** This last section contains photos and videos taken by students of past years. Here the goal is for old students to relive the beautiful moments of the trip. While for new students, is a way to understand what they will do during those 3 weeks.'],
    'achievements': ['_May 28 2018:_', 'The app became **n. 74** in the Italian education leaderboard of the App Store']
  }
]

export default {
  getProjects (cb) {
    cb(_projects)
  }
}
