import PortfolioPreviewBento from "../PortfolioPreviewBento";
import portfolio1 from "../../../public/images/shoe-junky.png";
import portfolio2 from "../../../public/images/url-shorty.png";
import portfolio3 from "../../../public/images/bookmarker.png";
import portfolio4 from "../../../public/images/taste-oasis.png";

export default function PortfolioSection() {
  return (
    <section className="mb-64">
      <h2 className="sectionTitle">Portfolio</h2>
      <div className="flex overflow-x-scroll pb-6 scroll-container">
        <div className="flex flex-nowrap gap-4">
          <PortfolioPreviewBento
            title="shoe junky"
            image={portfolio1}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/shoe-junky"
            bgCol="bg-neutral-800">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="url shorty"
            image={portfolio2}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/url-shorty"
            bgCol="bg-red-500">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="bookmarker"
            image={portfolio3}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/bookmarker"
            bgCol="bg-neutral-800">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
          <PortfolioPreviewBento
            title="taste oasis"
            image={portfolio4}
            tech={["Next.js", "Tailwind", "Node.js"]}
            link="/taste-oasis"
            bgCol="bg-red-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi fuga optio eligendi ratione aspernatur voluptate
              doloremque doloribus, vero quas facilis excepturi?
            </p>
          </PortfolioPreviewBento>
        </div>
      </div>
    </section>
  );
}
