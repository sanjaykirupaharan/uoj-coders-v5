"use client";
import { useState, useMemo } from "react";

const FINALISTS_DATA = [
  // University of Jaffna (18)
  { id: "team-1", name: "Compile3", university: "Jaffna" },
  { id: "team-2", name: "Hackstreet_Boys", university: "Jaffna" },
  { id: "team-3", name: "Yarl_Phantoms", university: "Jaffna" },
  { id: "team-4", name: "TeamX", university: "Jaffna" },
  { id: "team-5", name: "Team_HawkEye", university: "Jaffna" },
  { id: "team-6", name: "Team_BitBusters", university: "Jaffna" },
  { id: "team-7", name: "Team_Coding_Super_Kings", university: "Jaffna" },
  { id: "team-8", name: "Team_GigaByte", university: "Jaffna" },
  { id: "team-9", name: "Team_Karuppu", university: "Jaffna" },
  { id: "team-10", name: "Team_Heiwa", university: "Jaffna" },
  { id: "team-11", name: "Team_PairCode", university: "Jaffna" },
  { id: "team-12", name: "Team_Binary_Beast", university: "Jaffna" },
  { id: "team-13", name: "Team_Cobra Coderz", university: "Jaffna" },
  { id: "team-14", name: "Team_SimpleCode", university: "Jaffna" },
  { id: "team-15", name: "Team_Virtual_Pirates", university: "Jaffna" },
  { id: "team-16", name: "Team_WhyTho", university: "Jaffna" },
  { id: "team-17", name: "Team_Xcode", university: "Jaffna" },
  { id: "team-18", name: "Team_XYZ _team_02", university: "Jaffna" },

  // University of Moratuwa (4)
  { id: "team-19", name: "AruviAlgos", university: "Moratuwa" },
  { id: "team-20", name: "Team_Kemora", university: "Moratuwa" },
  { id: "team-21", name: "Arise", university: "Moratuwa" },
  { id: "team-22", name: "OptiCol", university: "Moratuwa" },

  // University of Vavuniya (3)
  { id: "team-23", name: "Spicy Duo", university: "Vavuniya" },
  { id: "team-24", name: "The_Odyssey", university: "Vavuniya" },
  { id: "team-25", name: "Code killers", university: "Vavuniya" },

  // University of Peradeniya (6)
  { id: "team-26", name: "Team_Nasakarar", university: "Peradeniya" },
  { id: "team-27", name: "Team_Vizhaiyor", university: "Peradeniya" },
  { id: "team-28", name: "Kestrel", university: "Peradeniya" },
  { id: "team-29", name: "Fih", university: "Peradeniya" },
  { id: "team-30", name: "404 Brain Not Found", university: "Peradeniya" },
  { id: "team-31", name: "CodeStorm", university: "Peradeniya" },

  // University of Kelaniya (4)
  { id: "team-32", name: "RePeaTers", university: "Kelaniya" },

  // Northern Uni (2)
  { id: "team-33", name: "Team_Git_Force_Push", university: "Northern Uni" },
  { id: "team-34", name: "Merge_Conflict", university: "Northern Uni" },

  // Open University (1)
  { id: "team-35", name: "Owl_Codes", university: "Open University" },

  // SLIIT University (2)
  { id: "team-36", name: "Code_Vertex", university: "SLIIT" },
];

export default function FinalistsDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUni, setSelectedUni] = useState("All");

  // 1. Get exact team distributions per university dynamically for the metrics bar
  const uniDistribution = useMemo(() => {
    const counts = { All: FINALISTS_DATA.length };
    FINALISTS_DATA.forEach((team) => {
      counts[team.university] = (counts[team.university] || 0) + 1;
    });
    return counts;
  }, []);

  // 2. High-performance combined search and filter computation
  const filteredTeams = useMemo(() => {
    return FINALISTS_DATA.filter((team) => {
      const matchesSearch = team.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesUni =
        selectedUni === "All" || team.university === selectedUni;
      return matchesSearch && matchesUni;
    });
  }, [searchTerm, selectedUni]);

  return (
    <section
      id="contenders"
      className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden "
    >
      {/* Background Ambience Design */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-8">
          <div className="text-xs font-varino text-pink-400 uppercase tracking-widest">
            // 04 . FINALISTS MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-cust font-bold bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-5 w-fit mx-auto">
            THE CONTENDERS
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
          <p className="text-xs text-center font-mono text-slate-500 mt-2">
            CONCURRENT SYSTEMS: 36 TEAMS FROM 8 UNIVERSITIES
          </p>
          <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-900 font-mono text-xs text-slate-400 mx-auto md:mx-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              MATCHED:{" "}
              <span className="text-white font-bold">
                {filteredTeams.length}
              </span>
            </span>
            <div className="h-4 w-[1px] bg-slate-800" />
            <span>
              TOTAL: <span className="text-amber-400 font-bold">36</span>
            </span>
          </div>
        </div>

        {/* Search Input Panel */}
        <div className="mb-8">
          <div className="mx-auto relative max-w-md rounded-xl bg-slate-900/40 border border-slate-900 focus-within:border-zinc-700 transition-colors">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600 font-mono text-xs">
              &gt;_
            </div>
            <input
              type="text"
              placeholder="Find your team..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent pl-9 pr-4 py-3 text-sm font-mono text-slate-200 placeholder-slate-600 outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-mono text-slate-500 hover:text-white"
              >
                [clear]
              </button>
            )}
          </div>
        </div>

        {/* University Interactive Footprints */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-10">
          {Object.keys(uniDistribution).map((uni) => (
            <button
              key={uni} // Unique mapping key rule satisfied
              onClick={() => setSelectedUni(uni)}
              className={`p-3 rounded-xl border text-left font-mono transition-all duration-200 ${
                selectedUni === uni
                  ? "bg-gradient-to-br from-zinc-800 to-zinc-950 border-zinc-600 shadow-xl"
                  : "bg-slate-900/20 border-slate-900/60 hover:border-slate-800"
              }`}
            >
              <div className="text-[12px] text-slate-500 uppercase tracking-tight truncate">
                {uni === "All" ? "Global Pool" : uni}
              </div>
              <div
                className={`text-base font-bold mt-1 ${selectedUni === uni ? "text-amber-400" : "text-slate-300"}`}
              >
                {String(uniDistribution[uni]).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>

        {/* Main Matrix Dashboard Output Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
          {filteredTeams.map((team) => (
            <div
              key={team.id} // Unique mapping key rule satisfied
              className="p-4 rounded-xl bg-gradient-to-br from-zinc-900/70 to-slate-950 border border-slate-900/80 hover:border-zinc-800 transition-all duration-200 group"
            >
              <span className="text-[12px] font-mono tracking-wider text-slate-500 block uppercase">
                Uni. of {team.university}
              </span>
              <h4 className="text-sm font-bold text-slate-300 group-hover:text-white mt-1 transition-colors truncate">
                {team.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Empty Fallback Screen */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-900/80 rounded-2xl bg-slate-900/10">
            <p className="text-sm font-mono text-slate-600">
              No active structures match the specified filter branch.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
