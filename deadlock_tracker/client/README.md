# capstone_project
Gonzaga Bootcamp Capstone Project

Initial Project Ideas

1. Deadlock(video game) stat tracking site
  - Allow users to login to steam and track their player stats
  - Allow searching of players to see their stats
  - Show hero win rate/pick rate stats ( see if we can compare win rates in specific matches to suggest possible counter picks)
  - Individual hero cards that show builds, items, abilities, lore etc
  - https://deadlock-api.com/
    
2. Recipe App (light social media aspects)
   - Search recipes by multiple different filter options, custom categories, ingredients available, rating etc
   - Add custom recipes
   - shop by recipe
   - meal plan tool
   - serving size adjustment slider
   - recipe share
   - user based reviews, recipes, potential to follow users
   - https://spoonacular.com/food-api/pricing (academic access option)
     
3. Movie Review
   - Search for movies based on multiple filters
   - Allow user to favorite and apply custom tags
   - User based review system, allow following of "user profiles"
   - watchlist with personalized recommendations based on previous reviews/favorites

 
 
 
 - ----------------- Step 2 Project Proposal ----------------- -

 1. Goal is to build a Deadlock stat tracking site using the MERN stack.
 2.  The primary focus will be the front-end UI design with react.
 3.  It will be a website & mobile app.
 4.  The goal of the project is to provide a clean efficient UI for easily tracking stats related to the deadlock video game.
 5.  The primary demographic of users will be males ~ 13-35 that play the videogame Deadlock and are looking for information related to their performance.
 6.  Our primary data source will be the [deadlock api](https://deadlock-api.com/)



  Project Approach

1. Database Schema

 - Mongodb steam user database using steamid unique identifier
 - Backend will redirect user to steam
 - Steam authenticates user
 - Backend verifies steam response

 - Relational database necessary for potential stretch goals of individual login and user "favorite" tracking


3. Potential API Issues

4. Sensitive Information
 - No sensitive or personal information will be collected. Login will be handled through steam, and profile data will be fetched through api using steam id.

4. Functionality
  - Content Display: Users can view information relating to deadlock heros, items, and ranked leaderboards.
  - Search & Filter: Users can search and filter content based on categories and keywords.

  
  User flow diagram - https://app.eraser.io/workspace/M7xajfkABhAf7gS4WGuJ?origin=share

  Homepage - Displays featured content and nav options - Search bar in middle of screen
  Login - Players can login with steam user id, replacing login nav with a profile link.
  Content - Profile page will contain user specific content - rank, match history etc.
  Navlinks will go to specific content pages.

  Heroes Link > Individual Hero Cards > Lore/Overview/Abilities
  Items Link > Individual Item Card
  Patchnotes Link > Patchnotes list > Individual patchnote
  Leaderboard Link > Leaderboards(Dropdown Region Select) > Individual player profiles
  
  
  Stretch Goals - 
  1. Allow users to track favorites (users theyve searched for, heroes etc)
  
  2. Allow users to login without steam id creating their own username
  
  
