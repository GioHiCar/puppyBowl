// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2206-FTB-ET-WEB-FT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const allPlayers = await fetch(`${APIURL}/players`);
    const result = await allPlayers.json();
    if (result.error) throw result.error;
    return result.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }

};


export const fetchSinglePlayer = async (playerId) => {
  try {
    console.log(`${APIURL}players/${playerId}`)
    const playerInfo = await fetch(`${APIURL}players/${playerId}`)
    const result = await playerInfo.json();
    if (result.error) throw result.error;
    return result.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const addNewPlayer = async (playerObj) => {
  const response = await fetch (`${APIURL}players`,
  { method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerObj)
});
const result = await response.json()
console.log(result)

//fetchallplayers in store var
//pass player store in variables 
//call renderallp playres functions passing in players 
//then reset the values back to empty strings
}



export const removePlayer = async (playerId) => {};



export default fetchAllPlayers;