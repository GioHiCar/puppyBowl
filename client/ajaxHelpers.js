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
    //console.log(`${APIURL}players/${playerId}`)
    let playerInfo = await fetch(`${APIURL}players/${playerId}`);
    let result = await playerInfo.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
};
  //fetchallplayers in store var
  //pass player store in variables
  //call renderallp playres functions passing in players
  //then reset the values back to empty strings


export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();

    if(result.error) throw result.error;

    return;
    
  } catch (err) {
    console.error(err);
  }
};


export default fetchAllPlayers;
