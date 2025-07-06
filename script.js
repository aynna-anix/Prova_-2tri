let teams = [];

document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault();

        if (teams.length >= 4) {
                alert("Máximo de 4 times cadastrados. Não é possível cadastrar mais.");
                        return;
                            }

                                const teamName = document.getElementById('teamName').value;
                                    const player1 = document.getElementById('player1').value;
                                        const age1 = parseInt(document.getElementById('age1').value);
                                            const player2 = document.getElementById('player2').value;
                                                const age2 = parseInt(document.getElementById('age2').value);
                                                    const player3 = document.getElementById('player3').value;
                                                        const age3 = parseInt(document.getElementById('age3').value);

                                                            const averageAge = (age1 + age2 + age3) / 3;

                                                                if (averageAge > 15) {
                                                                        document.getElementById('alertMessage').innerHTML = "A média de idade do time é maior que 15. Cadastre um novo time válido.";
                                                                                return;
                                                                                    }

                                                                                        teams.push({ teamName, players: [{ name: player1, age: age1 }, { name: player2, age: age2 }, { name: player3, age: age3 }] });

                                                                                            displayTeams();
                                                                                                document.getElementById('teamForm').reset();
                                                                                                });

                                                                                                function displayTeams() {
                                                                                                    const teamList = document.getElementById('teamList');
                                                                                                        teamList.innerHTML = '';

                                                                                                            teams.forEach(team => {
                                                                                                                    const teamDiv = document.createElement('div');
                                                                                                                            teamDiv.classList.add('team');
                                                                                                                                    teamDiv.innerHTML = `<strong>${team.teamName.toUpperCase()}, ${((team.players[0].age + team.players[1].age + team.players[2].age) / 3).toFixed(2)}</strong><br>
                                                                                                                                                ${team.players.map(player => `${player.name.toLowerCase()}, ${player.age}`).join('<br>')}`;
                                                                                                                                                        teamList.appendChild(teamDiv);
                                                                                                                                                            });
                                                                                                                                                            }
                                                                                                                                                            