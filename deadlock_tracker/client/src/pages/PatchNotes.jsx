import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./PatchNotes.module.css";

const PatchNotes = () => {
  const [patchNotes, setPatchNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatchNotes = async () => {
      try {
        const { data } = await axios.get(
          "https://api.deadlock-api.com/v1/patches"
        );

        setPatchNotes(data);
      } catch (err) {
        setError("Failed to load patch notes data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatchNotes();
  }, []);

  if (loading) return <p>Loading patch notes...</p>;
  if (error) return <p>{error}</p>;

  console.log(patchNotes);

  return (
    <div className={styles._container}>
      {patchNotes?.map((patch) => (
        <div className={styles.patch_card} key={patch.pub_date}>
            <h3>{patch.title} - {patch.pub_date}</h3>     
        </div>
      ))}
    </div>
  );
};

export default PatchNotes;
