// app/teams/page.js
import Image from "next/image";
export default async function TeamsPage() {
  const url = "https://api-nba-v1.p.rapidapi.com/teams";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "13efea50b3msh0fa1a2ddb7b5addp1155e8jsn0e2f94595bb1",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    },
  };

  let teams = [];

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
    teams = data.response; // Array of teams
  } catch (error) {
    console.error("Failed to fetch teams:", error);
  }

  return (
    <div>
      <h1>NBA Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Image
            src={team.logo}
            width={200}
            height={200}
            alt="NBA Team Logo"
            />
            {team.name}</li>
        ))}
      </ul>
    </div>
  );
}