import type { NextPage } from "next";
import { api } from "../utils/api";
import { useState } from "react";

const Types = [["Air"], ["Earth"], ["Water"], ["Fire"], ["Arcane"], ["Dark"]];

const Creature: NextPage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [health, setHealth] = useState(0);
  const [power, setPower] = useState(0);
  const [image, setImage] = useState("");
  const creatureCreate = api.creature.create.useMutation();
  return (
    <div className="  flex w-screen items-center justify-center">
      <form className="container mx-auto flex flex-col items-center justify-center border-4 border-black">
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-black text-center"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label htmlFor="type">Type</label>
        <select value={type} onChange={(e) => setType(e.currentTarget.value)}>
          {Types.map((t) => (
            <option key={t[0]} value={t[0]}>
              {t[0]}
            </option>
          ))}
        </select>
        <label htmlFor="health">Health</label>
        <input
          className="border-2 border-black text-center"
          type="number"
          name="health"
          id="health"
          value={health}
          onChange={(e) => setHealth(e.currentTarget.valueAsNumber)}
        />
        <label htmlFor="power">Power</label>
        <input
          className="border-2 border-black text-center"
          type="number"
          name="power"
          id="power"
          value={power}
          onChange={(e) => setPower(e.currentTarget.valueAsNumber)}
        />
        <label htmlFor="image">Image</label>
        <input
          className="border-2 border-black text-center"
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.currentTarget.value)}
        />
        <button
          type="button"
          onClick={() => {
            creatureCreate.mutate({
              name,
              type,
              health,
              power,
              image,
            });
          }}
        >
          Create Creature
        </button>
      </form>
    </div>
  );
};

export default Creature;
