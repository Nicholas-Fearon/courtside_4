import Image from "next/image";
export default async function SingleTeam({ params }) {
  const teamId = params.singleTeam;

  const url = "https://api-nba-v1.p.rapidapi.com/teams";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "13efea50b3msh0fa1a2ddb7b5addp1155e8jsn0e2f94595bb1",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const teams = data.response;
  const team = teams.find((t) => String(t.id) === String(teamId));
  console.log("My single team:", team);
  return (
    <>
      <div>
        {" "}
        <p>{team.name}</p>
        <Image src={team.logo} height={100} width={100} alt="Team Logo" />
        <p>City: {team.city}</p>
        <p>Conference: {team.leagues.standard.conference}</p>
      </div>
    </>
  );
}
