import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team";

export default function TeamMembers() {

  const founder = teamMembers.find(member => member.isFounder);

  const members = teamMembers.filter(member => !member.isFounder);

  return (
    <section className="pb-24">

      <div className="mx-auto flex max-w-[1500px] gap-8 px-8">

        {/* Founder */}

        {founder && (
          <div className="flex-shrink-0">
            <TeamCard member={founder} />
          </div>
        )}

        {/* Scrollable Members */}

        <div
          className="
            flex
            gap-6
            overflow-x-auto 
            hide-scrollbar
            pb-4
            flex-1
          "
        >
          {members.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

      </div>

    </section>
  );
}