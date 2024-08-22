import BentoLarge from "../components/BentoLarge";

export default function Home() {
  return (
    <>
      <BentoLarge className="bg-white/10 my-4">
        <h1 className="text-white text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquid voluptatibus amet repellat? Beatae voluptatem nostrum
          perspiciatis, officiis aspernatur optio.
        </p>
      </BentoLarge>
      <BentoLarge className="bg-yellow-400 mb-4">
        <form className="flex flex-col gap-2">
          <label htmlFor="name" className="grid gap-1">
            Name
            <input id="name" type="text" className="px-2 py-1 rounded-lg" />
          </label>
          <label htmlFor="email" className="grid gap-1">
            Email
            <input id="email" type="text" className="px-2 py-1 rounded-lg" />
          </label>
          <label htmlFor="number" className="grid gap-1">
            Number
            <input id="number" type="text" className="px-2 py-1 rounded-lg" />
          </label>
          <label htmlFor="message" className="grid gap-1">
            Message
            <textarea
              id="message"
              rows={3}
              className="px-2 py-1 rounded-lg"></textarea>
          </label>
          <button className="rounded-lg bg-green-400 font-semibold py-2 uppercase">
            Submit
          </button>
        </form>
      </BentoLarge>
    </>
  );
}
