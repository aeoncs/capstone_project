import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Heroes.module.css";

const ALLOWED_HEROES = [
  "Abrams",
  "Warden",
  "Vindicta",
  "Grey Talon",
  "Infernus",
  "Seven",
  "Lady Geist",
  "Wraith",
  "Mcginnis",
  "Paradox",
  "Dynamo",
  "Kelvin",
  "Haze",
  "Holliday",
  "Bebop",
  "Calico",
  "Mo & Krill",
  "Shiv",
  "Ivy",
  "Vyper",
  "Yamato",
  "Lash",
  "Mirage",
  "Mina",
  "Drifter",
  "Viscous",
  "Pocket",
  "Victor",
  "Sinclair",
  "Paige",
  "The Doorman",
  "Billy"
];

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchHeroes = async () => {
    try {
      const [heroesRes, statsRes] = await Promise.all([
        axios.get("https://assets.deadlock-api.com/v2/heroes"),
        axios.get("https://api.deadlock-api.com/v1/analytics/hero-stats"),
      ]);

      const heroesData = heroesRes.data;
      const statsData = statsRes.data;

      // Create a lookup map for stats by hero name
      const statsById = statsData.reduce((acc, stat) => {
        acc[stat.hero_id] = stat;
        return acc;
      }, {});

      const mergedHeroes = heroesData
        .filter((hero) => ALLOWED_HEROES.includes(hero.name))
        .map((hero) => ({
          ...hero,
          stats: statsById[hero.id] || null,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setHeroes(mergedHeroes);
    } catch (err) {
      setError("Failed to load hero data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchHeroes();
}, []);


  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading heroes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search}
      />

      <div className={styles.heroes_grid}>
        {filteredHeroes.map((hero) => (
          <div key={hero.id} className={styles.hero_card}>
            <img
              src={hero.images?.minimap_image}
              alt={hero.name}
              className={styles.heroImage}
            />
            <h3>{hero.name}</h3>
            <p>Win Rate: {hero.stats.wins / hero.stats.matches * 100}%</p>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Heroes;
