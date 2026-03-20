import { useEffect, useMemo, useState } from "react";
import { apiLinks } from "../../data/apiLinks";

const TIER_CONFIG = {
  Platinum: {
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    filter: "",
  },
  Gold: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "brightness-0 invert",
  },
  Silver: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "brightness-0 invert",
  },
  Bronze: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "",
  },
};

const LOGO_HEIGHT = {
  Platinum: "max-h-[120.21px]",
  Gold: "max-h-[68.41px]",
  Silver: "max-h-[78px]",
  Bronze: "max-h-[118px]",
};

export default function Demo() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchSponsors() {
      try {
        const res = await fetch(apiLinks.getSponsors, {
          headers: { accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          setSponsors(Array.isArray(json?.data) ? json.data : []);
        }
      } catch {
        if (!cancelled) setError("Failed to load sponsors");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSponsors();
    return () => {
      cancelled = true;
    };
  }, []);

  const grouped = useMemo(() => {
    const byTier = { Platinum: [], Gold: [], Silver: [], Bronze: [] };

    sponsors.forEach(s => {
      const tier = (s.tier || "").toLowerCase();
      if (tier === "platinum") byTier.Platinum.push(s);
      else if (tier === "gold") byTier.Gold.push(s);
      else if (tier === "silver") byTier.Silver.push(s);
      else if (tier === "bronze") byTier.Bronze.push(s);
    });

    return byTier;
  }, [sponsors]);

  const tiers = Object.keys(grouped);

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <h2 className="mb-12 text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl">
          Sponsors
        </h2>

        {loading && <p className="text-text">Loading sponsors...</p>}
        {error && <p className="text-yellow">{error}</p>}

        {!loading &&
          !error &&
          tiers.map(tier => {
            const items = grouped[tier];
            if (!items.length) return null;

            const config = TIER_CONFIG[tier];

            return (
              <div key={tier} className="mb-14 w-full">
                <h3 className="mb-4 font-poppins font-semibold tracking-widest text-text text-3xl sm:text-4xl">
                  {tier}
                </h3>

                <div
                  className={`grid ${config.cols} border border-text bg-white/5`}
                >
                  {items.map((sponsor, idx) => (
                    <a
                      key={`${tier}-${idx}`}
                      href={sponsor.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center min-h-[140px] sm:min-h-[180px] border border-text p-3"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.alt || sponsor.name || "Sponsor"}
                        className={`
                          object-contain
                          max-w-full
                          ${LOGO_HEIGHT[tier]}
                          ${config.filter}
                          ${tier === "Bronze" &&
                            sponsor.name?.toLowerCase().includes("swoc")
                            ? "max-h-[190px] max-w-[120%]"
                            : ""
                          }
                        `}
                        onError={e => {
                          e.currentTarget.src = "/logos/placeholder.png";
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { apiLinks } from "../../data/apiLinks";

// export default function Sponsors() {
//     const [sponsorsData, setSponsorsData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSponsors = async () => {
//             try {
//                 setLoading(true);
//                 const res = await fetch(apiLinks.getSponsors);
//                 if (!res.ok) throw new Error("Failed to fetch sponsors");
//                 const json = await res.json();

//                 const data = Array.isArray(json?.data) ? json.data : [];

//                 // Group by tier
//                 const grouped = data.reduce((acc, sponsor) => {
//                     const tier = sponsor.tier || "Bronze";
//                     // Capitalize first letter for display
//                     const displayTier = tier.charAt(0).toUpperCase() + tier.slice(1).toLowerCase();

//                     if (!acc[displayTier]) acc[displayTier] = [];
//                     acc[displayTier].push(sponsor);
//                     return acc;
//                 }, {});

//                 setSponsorsData(grouped);
//             } catch (err) {
//                 setError(err.message);
//                 console.error("Error fetching sponsors:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSponsors();
//     }, []);
//     const sortedTiers = Object.keys(sponsorsData).sort((a, b) => {
//         const priority = { Platinum: 1, Gold: 2, Silver: 3, Bronze: 4 };
//         return (priority[a] || 99) - (priority[b] || 99);
//     });

//     if (loading) {
//         return (
//             <section className="relative w-full overflow-hidden bg-background px-4 py-16 md:py-24">
//                 <div className="mx-auto flex max-w-[1440px] flex-col items-center">
//                     <div className="mb-16 h-12 w-64 animate-pulse rounded bg-text/20 md:h-24 md:w-96"></div>
//                     <div className="flex w-full flex-col gap-12">
//                         {[1, 2, 3].map((i) => (
//                             <div key={i} className="flex w-full flex-col">
//                                 <div className="mb-4 h-8 w-32 animate-pulse rounded bg-text/20 md:h-12 md:w-48"></div>
//                                 <div className="grid w-full grid-cols-1 p-[2px] md:grid-cols-2 lg:grid-cols-4">
//                                     {[1, 2, 3, 4].map((j) => (
//                                         <div
//                                             key={j}
//                                             className="flex h-[200px] w-full items-center justify-center border-2 border-text/10 bg-background p-4 -ml-[2px] -mt-[2px]"
//                                         >
//                                             <div className="h-20 w-40 animate-pulse rounded bg-text/10"></div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     if (error) return null;

//     if (sortedTiers.length === 0) return null;

//     return (
//         <section className="relative w-full overflow-hidden bg-background px-4 py-16 md:py-24">
//             <div className="mx-auto flex max-w-[1440px] flex-col items-center">
//                 <h2 className="mb-16 text-center font-poppins text-[48px] font-bold leading-none text-yellow md:text-[96px]">
//                     Sponsors
//                 </h2>

//                 <div className="flex w-full flex-col gap-12">
//                     {sortedTiers.map((tier) => {
//                         const items = sponsorsData[tier];
//                         if (!items || items.length === 0) return null;

//                         return (
//                             <div key={tier} className="flex w-full flex-col">
//                                 <h3 className="mb-4 ml-4 text-left font-poppins text-[32px] font-semibold tracking-[2.4px] text-text md:ml-0 md:text-[48px]">
//                                     {tier}
//                                 </h3>

//                                 <div className="grid w-full grid-cols-1 p-[2px] md:grid-cols-2 lg:grid-cols-4">
//                                     {items.map((sponsor, idx) => (
//                                         <a
//                                             key={`${tier}-${idx}-${sponsor._id || sponsor.name}`}
//                                             href={sponsor.link || "#"}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             className="group relative flex h-[200px] w-full items-center justify-center overflow-hidden border-2 border-text bg-background p-4 transition-all duration-300 -ml-[2px] -mt-[2px] hover:z-10 hover:border-yellow"
//                                         >
//                                             <div className="relative h-[60%] w-[80%] transition-transform duration-300 group-hover:scale-110">
//                                                 <Image
//                                                     src={sponsor.logo}
//                                                     alt={sponsor.alt || sponsor.name}
//                                                     fill
//                                                     className="object-contain"
//                                                     sizes="(max-width: 768px) 100vw, 335px"
//                                                 />
//                                             </div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }