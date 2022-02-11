_Send help_
# Chitty Pokemon
  ## Project Plan


### STAGE ONE
- As a user, you should immediately see a welcome message
- A user should use a search bar at the top with a button
* When a user types a pokemon’s NAME or NUMBER into the search bar and hits the button, the pokemon should be search via the pokeAPI and its picture and some data should appear on the app
    * WHICH data you show is up to your group - choose several things from the giant (10,000+ lines) pokedata object and decide how to make sure they are displayed.
    * Data you might consider could include:
        * the description
        * the pokemon’s pokedex number - may be stored as the ‘id’
    * This object returned from the API will be more complex than the data pokeData dummy app!
    * The picture should have the pokemon’s name above
- Add a logo of some sort

### STAGE TWO
* Once you’ve gotten the above set up working, add a componentDidMount method with a fetch call to your class component that grab a random pokemon and display it on load instead of the welcome message
    * Use Math.random() to generate a random number within a certain range
    * Look up how to do this if you don’t know
* Add a button to the data section that can ‘add this pokemon to my team’ - you’ll need to store the list of pokemon on ‘the team’
* Make it so that your app can track which pokemon have been ‘added to my team’ and should display those in a side bar on the right.
    * The pokemon’s picture and name should be visible in their card in this bar
    * The most recently added pokemon should be at the top
    * clicking on a pokemon’s card in this list should cause its data to be displayed as if it had just been searched.
* Get creative - use color and styles; challenge yourself and your team to dive deeper into CSS to get a good looking pokedex to show off to your classmates

### STRETCH GOALS
* Add a SEARCH HISTORY button so that you can toggle between viewing ‘my team’ and a list of all pokemon that have been searched recently
    * The pokemon’s picture and name should be visible in their card in this bar
    * The most recently added pokemon should be at the top
* Make it so that clicking on a pokemon in the search history brings its details back up on the main page and moves it to the top of the search history
    * it should not remain in the search history in two places, so any pokemon whose card is clicked should switch places from wherever it is to the top of the list.
* Make it so that you can select a light/dark theme that changes the colors in the styles (hint - maybe add some alternate classes for your CSS…)
    * Add a button to the top bar to toggle this (and show which it’s on) - perhaps you can alternate a sun/moon icon…
* Give ‘my team’ a maximum size of six (like in the GameBoy game) and add a button to each pokemon on the team roster’s card to let you remove them from the team to make space for a new pokemon\

### KICKSTARTER SUPER STRETCH GOALS
* Make further requests of different endpoints in the PokeAPI (such as the ones that are linked in each data entry as the 'url' for that entry.
* Install and refactor with Material UI
* Add language support -
    * the PokeAPI has multiple languages for each pokemon - but they're all a little different
    * Make it so the user can switch between the AVAILABLE language for that pokemon's description



- McGigger Loads Page
- Querry API

    - Can I haz DB
- Recieve JSON
    - TDD: Mock here
    - Get ton of info
- Parse JSON
    - Map data into array, sort, obj (some sort of data type.)
- Push out cards - 100 pokemon -> objects live in DOM (roster crew member here)

Wait for event

- User searches for card <>


Pokemon Card Object
    - Name
    - IMG URL