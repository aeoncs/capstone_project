import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data } = await axios.get(
          "https://api.deadlock-api.com/v1/leaderboard/NAmerica"
        );

        setLeaderboard(data);
      } catch (err) {
        setError("Failed to load leaderboard data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p>{error}</p>;

  console.log(leaderboard.entries);

  return (
    <div className={styles.leaderboard_container}>
      {leaderboard.entries?.map((player) => (
        <div className={styles.player_card} key={player.rank}>
            <h3>#{player.rank} - {player.account_name}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
