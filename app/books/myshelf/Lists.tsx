"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleList from "./SingleList";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("/api/books");
        let data = res.data;
        setLists(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="my-5 text-[#F8FAE5]">
      <div className="flex flex-row gap-[27px] flex-wrap">
        {[
          "Explorations in Ethereal Realms: A Journey Through Magical Realism",
          "Whispers of the Cosmos: Mystical Tales from Beyond",
          "Echoes of Ancient Wisdom: Unraveling the Threads of History",
          "Luminous Landscapes: A Visual Odyssey Through Nature's Wonders",
          "Wanderlust Chronicles: Adventures Across Continents",
          "Enchanted Encounters: Stories of Serendipity and Fate",
          "Sonnets of the Soul: Poetry for the Heart and Mind",
          "Celestial Constellations: Exploring the Universe Through Literature",
          "Whispers of the Wild: Tales of Wilderness and Wonder",
          "Echoes of Eternity: Timeless Classics and Modern Marvels",
          "Chronicles of Courage: Inspiring Stories of Resilience and Triumph",
          "Songs of the Sages: Wisdom from the Ages",
          "Tales of Tranquility: Finding Peace in a Chaotic World",
          "Enigmatic Enigmas: Mysteries and Thrillers for the Inquisitive Mind",
          "Echoes of Emotion: Love, Loss, and Life's Journey",
          "Savoring Silence: Meditative Reads for Inner Reflection",
          "Whispers of the Wind: Stories of Change and Transformation",
          "Luminous Legends: Mythology and Folklore From Around the World",
          "Infinite Imagination: Exploring Fantasy Realms and Otherworldly Adventures",
          "Harmony of Humanity: Diverse Voices and Perspectives",
          "Whispers of Whimsy: Delightful Tales for the Young at Heart",
          "Sagas of the Sea: Maritime Adventures and Naval Epics",
          "Chronicles of Creativity: Nurturing the Artistic Spirit",
          "Echoes of Empires: Historical Epics and Tales of Grandeur",
        ].map((t) => (
          <SingleList key={t} title={t} />
        ))}
      </div>
    </div>
  );
};

export default Lists;
